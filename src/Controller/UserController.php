<?php

namespace App\Controller;


use App\Entity\User;
use App\Entity\Message;
use App\Form\UpdatePasswordType;
use App\Form\RegisterType;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;

class UserController extends AbstractController
{    
    /**
     * @Route("/public/create/user", name="createUser")
     * @return JsonResponse
     */
    public function createUser(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        //Création du nouveau message
        $user = new User();
        $form = $this->createForm(RegisterType::class, $user);
        $form->handleRequest($request);
                
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $user->setPassword(password_hash($user->getPassword(),PASSWORD_BCRYPT));
            $user->setRoles(array('ROLE_ADMIN'));
            
            //MAJ du user
            $em->persist($user);
            $em->flush();

            $this->addFlash('success', 'Registration is success');

            return $this->redirectToRoute('app_login');

        }

        return $this->render("register.html.twig",[
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/get/account", name="app_account")
     * @return JsonResponse
     */
    public function getOwnAccount()
    {
        $user = $this->getUser();
        return $this->render("account.html.twig", [
            'user'  => $user,
        ]);
    }
    
    /**
     * @Route("/admin/get/user/{id}", name="getOwnUser")
     * @return JsonResponse
     */
    public function getOwnUser(int $id)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(User::class)->find($id);

        return $this->render("user.html.twig", [
            'user'  => $user,
        ]);
    }
    
    /**
     * @Route("/admin/add/photoProfile", name="addPhotoProfile")
     * @return JsonResponse
     */
    public function addPhotoProfile(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $user->setPhoto($request->request->get('fileName'));
        
        //MAJ du user
        $em->persist($user);
        $em->flush();
        return new JsonResponse(array('status' => 'success'));
    }
        
    /**
     * @Route("/admin/update/password", name="updatePassword")
     * @return JsonResponse
     */
    public function updatePassword(Request $request)
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();

        $form = $this->createForm(UpdatePasswordType::class, $user);
        $form->handleRequest($request);
               
        if ($form->isSubmitted() && $form->isValid()) {
            $user->setPassword(password_hash($user->getPassword(),PASSWORD_BCRYPT));
            $em->persist($user);
            $em->flush();
            
            $this->addFlash('success', 'Update password is success');
            return $this->redirectToRoute('app_account');
        }

        return $this->render("updatePassword.html.twig", [
            'user'  => $user,
            'form' => $form->createView(),
        ]);
    }     
    
    /**
     * @Route("/admin/delete/account", name="deleteAccount")
     * @return JsonResponse
     */
    public function deleteAccount()
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();
        $messages = $em->getRepository(Message::class)->findByMessageUserId($user);
        foreach ($messages as $message){
            $em->remove($message);
        }
        $em->remove($user);
        $session = $this->get('session');
        $session = new Session();
        $session->invalidate();        
        $em->flush();
            
        $this->addFlash('success', 'Good Bye, see you soon !');

        return $this->redirectToRoute('app_homepage');
    }
}