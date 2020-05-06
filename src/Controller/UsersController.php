<?php

namespace App\Controller;


use App\Entity\Users;
use App\Form\SecurityType;
use App\Form\RegisterType;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

use DateTime;

class UsersController extends AbstractController
{
    /**
     * @Route("/projet6/public/login", name="security_login")
     * @return JsonResponse
     */
    public function login(AuthenticationUtils $authenticationUtils):Response
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(Users::class)->findAll();
        
        //get authentification error if there is
        $error = $authenticationUtils->getLastAuthenticationError();
        //get last identification log
        $lastUsername = $authenticationUtils->getLastUsername();
        
        $form = $this->createForm(SecurityType::class);
        
        if ($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_REMEMBERED')) {
          return $this->redirectToRoute('/projet6/public/home');
        }
        if ($form->isSubmitted() && $form->isValid()) {
            echo('test');
            $userForm = $form->getData();

            $pseudoForm = $userForm->getUsersPseudo();
//            return $this->redirectToRoute('login');
        }
        
        return $this->render("login.html.twig", [
            'form' => $form->createView(),
            'last_username' => $lastUsername,
            'error' => $error, 
        ]);
    }
    
    /**
     * @Route("projet6/public/create/logout", name="security_logout")
     */
    public function logout(): void
    {
        throw new \Exception('This should never be reached!');
    }
    
    /**
     * @Route("projet6/public/create/user", name="createAccount")
     * @return JsonResponse
     */
    public function createAccount(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        
        //Création du nouveau message
        $user = new Users();
        $form = $this->createForm(RegisterType::class, $user);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $user->setUsersPassword(password_hash($user->getUsersPassword(),PASSWORD_DEFAULT));
            
            $em->persist($user);
            $em->flush();
//            return $this->redirectToRoute('task_success');
        }

        return $this->render("createAccount.html.twig",[
            'form' => $form->createView(),
        ]);
    }
    
    /**
     * @Route("projet6/public/get/user/{userId}", name="getOwnUser")
     * @return JsonResponse
     */
    public function getOwnUser(int $userId)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(Users::class)->find($userId);

        return $this->render("user.html.twig", [
            'user'  => $user,
        ]);
    }
}