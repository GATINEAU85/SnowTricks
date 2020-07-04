<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\SecurityType;
use App\Form\ResetPasswordType;
use App\Form\ForgotPasswordType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{    
    /**
     * @Route("/projet6/public/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {   
//        $form = $this->createForm(SecurityType::class);
//        if ($form->isSubmitted() && $form->isValid()) {
            // get the login error if there is one
            $error = $authenticationUtils->getLastAuthenticationError();
            // last username entered by the user
            $lastUsername = $authenticationUtils->getLastUsername();
//        }else{
//            $error = '';
//            $lastUsername = '';
//        }

        
        return $this->render('login.html.twig', [
//            'form' => $form->createView(),
            'last_username' => $lastUsername, 
            'error' => $error
        ]);
    }

    /**
     * @Route("/projet6/admin/logout", name="app_logout")
     */
    public function logout()
    {
        $this->addFlash('success', 'See you soon');
        return $this->redirectToRoute('app_homepage');
    }
    
     /**
     * @Route("/projet6/public/forgotPassword", name="forgotPassword")
     */
    public function forgotPassword(Request $request, \Swift_Mailer $mailer)
    {
        $em = $this->getDoctrine()->getManager();
        $form = $this->createForm(ForgotPasswordType::class);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $pseudo = $form->getData('pseudo');
            $user = $em->getRepository(User::class)->findOneByPseudo($pseudo);

            if($user !== null){
                $user->setToken(password_hash(random_bytes(10),PASSWORD_BCRYPT));

                $em->persist($user);
                $em->flush();

                $message = (new \Swift_Message('SnowTricks - Init password'))
                ->setFrom('noreply@snowtricks.com')
                ->setTo($user->getEmail())
                ->setBody($this->renderView('emails/forgot.html.twig', ['user' => $user]), 'text/html' );

                $mailer->send($message);

                $this->addFlash('success', "An email was send to your mail adresse to show you your new password.");
                return $this->redirectToRoute('forgotPassword');
            }
            else{
                $this->addFlash('danger',"User doesn't exist.");
            }
        }

        return $this->render('forgotPassword.html.twig', [
            'form' => $form->createView()
        ]);
    }
    
    /**
     * Réinitilisation du mot de passe si le token est correct
     * 
     * @Route("/projet6/public/resetPassword", name="resetPassword")
     */
    public function resetPassword(Request $request, $pseudo, $token)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(User::class)->findOneByPseudo($pseudo);

        $form = $this->createForm(ResetPasswordType::class, $user);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            if($user->getToken() === $token){
                $user->setPassword(password_hash($user->getPassword(),PASSWORD_BCRYPT));

                $em->persist($user);
                $em->flush();

                $this->addFlash(
                    'success',
                    "Password update was a success."
                );
                
                return $this->redirectToRoute('account_login');
            }else{
                $this->addFlash(
                    'danger',
                    "An error was occured. The URL was to old. "
                );
            }
        }

        return $this->render('resetPassword.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
