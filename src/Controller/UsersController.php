<?php

namespace App\Controller;


use App\Entity\Users;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use DateTime;

class UsersController extends AbstractController
{
    /**
     * @Route("projet6/public/get/user/{userId}", name="getUser")
     * @return JsonResponse
     */
    public function getUser(int $userId)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(Users::class)->find($userId);

        return $this->render("user.html.twig", [
            'user'  => $user,
        ]);
    }
}