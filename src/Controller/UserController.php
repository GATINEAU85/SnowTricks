<?php

namespace App\Controller;


use App\Entity\User;
use App\Form\SecurityType;
use App\Form\RegisterType;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

use DateTime;

class UserController extends AbstractController
{    
    /**
     * @Route("projet6/public/create/user", name="createAccount")
     * @return JsonResponse
     */
    public function createAccount(Request $request)
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
            
            $em->persist($user);
            $em->flush();
//            return $this->redirectToRoute('task_success');
        }

        return $this->render("register.html.twig",[
            'form' => $form->createView(),
        ]);
    }
    
    /**
     * @Route("projet6/public/get/account", name="app_account")
     * @return JsonResponse
     */
    public function getOwnAccount()
    {
//        $em = $this->getDoctrine()->getManager();
//        $user = $em->getRepository(User::class)->find($id);
        $user = $this->getUser();
        return $this->render("account.html.twig", [
            'user'  => $user,
        ]);
    }
    
    /**
     * @Route("projet6/public/get/user/{id}", name="getOwnUser")
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
}