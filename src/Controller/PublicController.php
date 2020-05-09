<?php

namespace App\Controller;

//use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
//use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
//use Twig\Environment;

class PublicController extends AbstractController
{
    /**
     * @Route("projet6/public/accueil", name="home")
     * @return Response
     */
    public function getHome()
    {
        return $this->render("base.html.twig");
    }

}