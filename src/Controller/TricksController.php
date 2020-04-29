<?php

namespace App\Controller;


use App\Entity\Tricks;
use App\Entity\Files;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use DateTime;

class TricksController extends AbstractController
{
    /**
     * @Route("projet6/public/home", name="getAllTricks")
     * @return JsonResponse
     */
    public function getAllTricks()
    {
        $em = $this->getDoctrine()->getManager();
        $tricks = $em->getRepository(Tricks::class)->findAll();

        return $this->render("home.html.twig", [
            'tricks'  => $tricks,
        ]);
    }
    
    /**
     * @Route("projet6/public/get/trick/{trickId}", name="getTrick")
     * @return JsonResponse
     */
    public function getTrick(int $trickId)
    {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);

        return $this->render("trick.html.twig", [
            'trick'  => $trick,
        ]);
    }
    
    /**
     * @Route("projet6/public/create/trick", name="createTricks")
     * @return JsonResponse
     */
    public function createTricks()
    {
        $em = $this->getDoctrine()->getManager();

        return $this->render("createTrick.html.twig");
    }
    
}