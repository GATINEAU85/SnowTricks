<?php

namespace App\Controller;

use DateTime;

use App\Entity\Tricks;
use App\Entity\Files;
use App\Entity\Message;

use App\Service\FileUploader;

use App\Form\MessageType;
use App\Form\TricksType;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
//use Symfony\Component\HttpFoundation\File\Exception\FileException;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
    public function getTrick(Request $request, int $trickId)
    {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);
        
        //Création du nouveau message
        $message = new Message();
        
        $form = $this->createForm(MessageType::class, $message);
        
        //Soumets la requête et hydrate l'objet
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            //$form->getData() : contient les données
            $message = $form->getData();
            dump($message);
            $em->persist($message);
            $em->flush();
//            return $this->redirectToRoute('task_success');
        }

        return $this->render("trick.html.twig", [
            'trick'  => $trick,
            'form'   => $form->createView(),
        ]);
    }
    
    /**
     * @Route("projet6/admin/create/trick", name="createTricks")
     * @return JsonResponse
     */
    public function createTricks(Request $request, SluggerInterface $slugger)
    {
        $em = $this->getDoctrine()->getManager();
        
        //Création du nouveau message
        $tricks = new Tricks();
        $form = $this->createForm(TricksType::class, $tricks);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $tricks = $form->getData();
            $tricks->getTricksFiles()->upload();
            $em->persist($tricks);
            $em->flush();
//            return $this->redirectToRoute('task_success');
        }
        
        return $this->render("createTrick.html.twig", [
            'form'   => $form->createView(),
        ]);
    }
    
}