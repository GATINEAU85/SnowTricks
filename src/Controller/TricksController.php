<?php

namespace App\Controller;

use DateTime;
use App\Entity\Tricks;
use App\Entity\Files;
use App\Entity\Group;
use App\Entity\Message;
use App\Form\MessageType;
use App\Form\ContactType;
use App\Form\TricksType;
use App\Service\PaginationService;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TricksController extends AbstractController {
    const ITEMS_PER_PAGE = 8;

    /**
     * @Route("/public/home", name="app_homepage")
     * @return JsonResponse
     */
    public function getAllTricks(Request $request, \Swift_Mailer $mailer, PaginationService $pagination) {
        $em = $this->getDoctrine()->getManager();
        $tricks = $em->getRepository(Tricks::class)->findAll();
                
        $limit = 9;
        
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $contact = $form->getData();

            // On crée le message
            $message = (new \Swift_Message('Nouveau contact'))
                // On attribue l'expéditeur
                ->setFrom($contact['email'])
                // On attribue le destinataire
                ->setTo($this->getParameter('administrator_email'))
                // On crée le texte avec la vue
                ->setBody($this->renderView('emails/contact.html.twig', compact('contact')),'text/html');
            
            $mailer->send($message);
            $this->addFlash('success', 'This message is send.');
        }
        if ($request->query->get('action')){
            if ($request->query->get('action') == "getAllTricks"){
                $limit = count($tricks) + 1;
            }
        };
        
        $query   = $em->createQuery("SELECT '*' FROM App\Entity\Tricks p ORDER BY p.tricksId ASC");
        $results = $pagination->paginate($query, $request, self::ITEMS_PER_PAGE);

        return $this->render("home.html.twig", [
            'limitTricks' => $limit,
            'tricks' => $tricks,
            'contactForm' => $form->createView(),
            'lastPage' => $pagination->lastPage($results)
        ]);
    }

    /**
     * @Route("/public/get/trick/{trickId}", name="getTrick")
     * @return JsonResponse
     */
    public function getTrick(Request $request, int $trickId) {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);
        $limit = 3;

        //Création du nouveau message
        $message = new Message();
        $form = $this->createForm(MessageType::class, $message);

        //Soumets la requête et hydrate l'objet
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //$form->getData() : contient les données
            $message = $form->getData();
            $message->setMessageDate(new DateTime('NOW'));
            $message->setMessageUserId($this->getUser());
            $message->setMessageTricksId($trick);
            
            $em->persist($message);
            $em->flush();
            
            $this->addFlash('success', 'Your message is add to this tricks.');
            return $this->redirectToRoute('getTrick',['trickId' => $trickId]);
        }
        if ($request->query->get('action')){
            if ($request->query->get('action') == "getAllMessage"){
                $limit = count($em->getRepository(Message::class)->findAll()) + 1;
            }
        };

        return $this->render("trick.html.twig", [
            'limitMessage' => $limit,
            'trick' => $trick,
            'form' => $form->createView(),
            'connectedUser' => $this->getUser()
        ]);
    }

       /**
     * @Route("/admin/create/tricks", name="createTricks")
     * @return JsonResponse
     */
    public function createTricks(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $groups = $em->getRepository(Group::class)->findAll();

        if($request->request->get('nameTricks')){
            $tricks = new Tricks();
            $tricks->setTricksName($request->request->get('nameTricks'));
            $tricks->setTricksDescription($request->request->get('descriptionTricks'));
            $groupTricks = $em->getRepository(Group::class)->find($request->request->get('groupTricks'));
            $tricks->setTricksGroupId($groupTricks);
//            var_dump($request->request->get('files'));
            if($request->request->get('files')){
                foreach ($request->request->get('files') as $file) {
                    $fileTrick = new Files;
                    $fileTrick->setFilesName($file["fileName"]);
                    $fileTrick->setFilesUrl($file["fileUrl"]);
                    $fileTrick->setFilesType($file["fileType"]);
//                    $fileTrick->setFilesDate(new DateTime('NOW'));
                    $fileTrick->setFilesTricks($tricks);
                    $fileTrick->setFilesUser($this->getUser());
                    $em->persist($fileTrick);
                }
            }
            
            $em->persist($tricks);
            $em->flush();
            
            return new JsonResponse(array('status' => 'success'));
            // $this->addFlash('success', 'This trick is created.');
            // return $this->redirectToRoute('createTricks');
        }

        return $this->render("createTrick.html.twig", [
            'groups' => $groups,
            'status' => "succes"
        ]);
    }
    
    /**
     * @Route("/admin/update/trick/{trickId}", name="updateTricks")
     * @return JsonResponse
     */
    public function updateTricks(Request $request, int $trickId) {
        $em = $this->getDoctrine()->getManager();
        $tricks = $em->getRepository(Tricks::class)->find($trickId);
        $groups = $em->getRepository(Group::class)->findAll();
        
        if($request->request->get('nameTricksUpdate')){
            $tricks->setTricksName($request->request->get('nameTricksUpdate'));
            $tricks->setTricksDescription($request->request->get('descriptionTricksUpdate'));
            $groupTricks = $em->getRepository(Group::class)->find($request->request->get('groupTricksUpdate'));
            $tricks->setTricksGroupId($groupTricks);

            $em->persist($tricks);
            $em->flush();
        
            $this->addFlash('success', 'This trick was update !');
            return $this->redirectToRoute('updateTricks', ['trickId' => $trickId]);
        }
        
        // $form->handleRequest($request);
        
        return $this->render("updateTricks.html.twig", [
            // 'form' => $form->createView(),
            'trick' => $tricks,
            'groups' => $groups,
            'status' => "succes",
            'connectedUser' => $this->getUser()
        ]);
    }

    
    
    /**
     * @Route("/admin/delete/trick/{trickId}", name="deleteTricks")
     * @return JsonResponse
     */
    public function deleteTricks(int $trickId) {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);
        $messages = $em->getRepository(Message::class)->findBy(array('messageTricksId' => $trickId));
        $files = $em->getRepository(Files::class)->findBy(array('filesTricks' => $trickId));

        foreach($messages as $message){
            $em->remove($message);
        } 
        
        foreach($files as $file){
            $em->remove($file);
        } 
                
        $em->remove($trick);
        $em->flush();
                
        $this->addFlash('success', 'The delete of this tricks is a success !');
        return $this->redirectToRoute('app_homepage');

    }
}
