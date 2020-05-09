<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\SecurityType;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

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
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
