<?php

namespace App\Controller;

use DateTime;
use App\Entity\Tricks;
use App\Entity\Files;
use App\Entity\Group;
use App\Entity\Message;
use App\Service\FileUploader;
use App\Form\MessageType;
use App\Form\ContactType;
use App\Form\TricksType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
//use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TricksController extends AbstractController {

    /**
     * @Route("projet6/public/home", name="app_homepage")
     * @return JsonResponse
     */
    public function getAllTricks(Request $request, \Swift_Mailer $mailer) {
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

        return $this->render("home.html.twig", [
            'limitTricks' => $limit,
            'tricks' => $tricks,
            'contactForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("projet6/public/get/trick/{trickId}", name="getTrick")
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
            $user = $this->getUser();
            $message->setMessageUserId($user);
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
        ]);
    }

    /**
     * @Route("projet6/admin/create/trick", name="createTrick")
     * @return JsonResponse
     */
    public function createTrick(Request $request) {
        $em = $this->getDoctrine()->getManager();
        $newFilename = $this->getParameter('files_directory');

        //Création du nouveau message
        $tricks = new Tricks();
        $form = $this->createForm(TricksType::class, $tricks);
        $form->handleRequest($request);

//        $tricks->setTricksName($form->get('tricksName')->getData());
//        $tricks->setTricksDescription($form->get('tricksDescription')->getData());
//        $tricks->setTricksGroupId($form->get('tricksGroupId')->getData());
//        $tricks->setTricksDate(new \DateTime("NOW"));
        

        $formFiles = $form->get('tricksFiles')->getData();

        
        if ($form->isSubmitted() && $form->isValid()) {
            $tabFiles = [];
            foreach ($formFiles as $formFile) {
                $originalFilename = pathinfo($formFile['file']->getClientOriginalName(), PATHINFO_FILENAME);
                $originalFilename = $originalFilename . '.' . $formFile['file']->guessExtension();
                try {
                    $formFile['file']->move($newFilename, $originalFilename);
                    $file = new Files();
                    $file->setFilesName($newFilename);
                    $file->setFilesUrl('/' . $newFilename);
                    
                    $tabFiles[] = $file;
//                    $em->persist($file);
                }catch (Exception $ex) {
                }
            };
//            $tricks = $form->getData();
//            
//            var_dump($tricks);
            $tricks->addTricksFiles($tabFiles);
            $em->persist($tricks);
            $em->flush();
//        return $this->redirectToRoute('task_success');
        }

        return $this->render("createTrick.html.twig", [
            'form' => $form->createView(),
            'status' => "ok"
        ]);
    }

       /**
     * @Route("projet6/admin/create/tricks", name="createTricks")
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
     * @Route("projet6/admin/update/trick/{trickId}", name="updateTricks")
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
            'status' => "succes"
        ]);
    }

    
    
    /**
     * @Route("projet6/admin/delete/trick/{trickId}", name="deleteTricks")
     * @return JsonResponse
     */
    public function deleteTricks(int $trickId) {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);
        $messages = $em->getRepository(Message::class)->findBy(array('messageTricksId' => $trickId));
        
        foreach($messages as $message){
            $em->remove($message);
        } 
                
        $em->remove($trick);
        $em->flush();
                
        $this->addFlash('success', 'The delete of this tricks is a success !');
        return $this->redirectToRoute('app_homepage');

    }
    
    /**
     * @Route("projet6/admin/update/trick/{trickId}/delete/file/{fileId}", name="deleteFile")
     * @return JsonResponse
     */
    public function deleteFile(int $trickId, int $fileId) {
        $em = $this->getDoctrine()->getManager();
        $file = $em->getRepository(Files::class)->find($fileId);
        
        $em->remove($file);
        $em->flush();
        
        $this->addFlash('success', 'This file was delete !');
        return $this->redirectToRoute('getTrick', [
                    'trickId' => $trickId,
        ]);

    }
    
    /**
     * @Route("projet6/admin/update/trick/{trickId}/update/file/{fileId}", name="updateFile")
     * @return JsonResponse
     */
    public function updateFile(Request $request, int $trickId, int $fileId) {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);
        $file = $em->getRepository(Files::class)->find($fileId);
        
        if($request->request->get("fileName")){
            $file->setFilesName($request->request->get("fileName"));
            $file->setFilesUrl($request->request->get("fileUrl"));
            // $file->setFilesDate($request->request->get("fileDate"));
            $file->setFilesTricks($trick);
            
            $em->persist($file);
            $em->flush();
            
            return new JsonResponse(array('status' => 'success'));
        }
        
        // $form = $this->createForm(TricksType::class, $tricks);
        // $form->handleRequest($request);
        
        return $this->redirectToRoute('updateTricks', [
                    'trickId' => $trickId,
        ]);
    }
        
    /**
     * @Route("projet6/admin/update/trick/{trickId}/create/file", name="createFile")
     * @return JsonResponse
     */
    public function createFile(Request $request, int $trickId) {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);
        $file = new Files();
        
        if($request->request->get("fileName")){
            $file->setFilesName($request->request->get("fileName"));
            $file->setFilesUrl($request->request->get("fileUrl"));
            $file->setFilesType($request->request->get("fileType"));
//             $file->setFilesDate($request->request->get("fileDate"));
            $file->setFilesTricks($trick);
            
            $em->persist($file);
            $em->flush();
            
            return new JsonResponse(array('status' => 'success'));
        }
        
        return $this->redirectToRoute('updateTricks', [
                    'trickId' => $trickId,
        ]);
    }
    
    /**
     * @Route("projet6/admin/upload/file", name="uploadFile")
     * @return JsonResponse
     */
    public function uploadFile() {
        $newFilename = $this->getParameter('files_directory');
        
        if (isset($_FILES['file']) AND $_FILES['file']['error'] == 0)
        {
            // Test si le fichier n'est pas trop gros
            if ($_FILES['file']['size'] <= 256000000)
            {
                // Test si l'extension est autorisée
                $infosfichier = pathinfo($_FILES['file']['name']);
                $extension_upload = strtolower($infosfichier['extension']);
                $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');

                $newPath = $newFilename . '/';
                //On créer le dossier si il n'existe pas
                if (!file_exists($newPath)) {
                    mkdir($newPath, 0777, true);
                }
                if (in_array($extension_upload, $extensions_autorisees))
                {
                    // Valider le fichier et le stocker définitivement
                    move_uploaded_file($_FILES['file']['tmp_name'], $newPath . basename($_FILES['file']['name']));
                    //echo "L'envoi a bien été effectué !";
                }else{
                    return new JsonResponse(array("status" => "error", "message" => "Ce type de fichier n'est pas autorisé."));
                }
            }else{
                return new JsonResponse(array("status" => "error", "message" => "Le fichier est trop volumineux."));
            }
        }else{
            return new JsonResponse(array("status" => "error", "message" => "Erreur lors de l'upload."));
        }
        
        return new JsonResponse(array(
            'status' => "success",
        ));
    }
}
