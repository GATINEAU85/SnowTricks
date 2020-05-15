<?php

namespace App\Controller;

use DateTime;
use App\Entity\Tricks;
use App\Entity\Files;
use App\Entity\Group;
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

class TricksController extends AbstractController {

    /**
     * @Route("projet6/public/home", name="app_homepage")
     * @return JsonResponse
     */
    public function getAllTricks() {
        $em = $this->getDoctrine()->getManager();
        $tricks = $em->getRepository(Tricks::class)->findAll();

        return $this->render("home.html.twig", [
                    'tricks' => $tricks,
        ]);
    }

    /**
     * @Route("projet6/public/get/trick/{trickId}", name="getTrick")
     * @return JsonResponse
     */
    public function getTrick(Request $request, int $trickId) {
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
            $message->setMessageDate(new DateTime('NOW'));
            $user = $this->getUser();
            $message->setMessageUserId($user);
            $message->setMessageTricksId($trick);
            
            $em->persist($message);
            $em->flush();
//            return $this->redirectToRoute('app_homepage',[
//                    'trick' => $trick,
//                    'form' => $form->createView(),
//            ]);
        }

        return $this->render("trick.html.twig", [
                    'trick' => $trick,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("projet6/admin/create/trick", name="createTricks")
     * @return JsonResponse
     */
    public function createTricks(Request $request, SluggerInterface $slugger) {
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
//                var_dump($formFile);
                $originalFilename = pathinfo($formFile['file']->getClientOriginalName(), PATHINFO_FILENAME);
                $originalFilename = $originalFilename . '.' . $formFile['file']->guessExtension();
                try {
                    $formFile['file']->move($newFilename, $originalFilename);
                    $file = new Files();
                    $file->setFilesName($newFilename);
                    $file->setFilesUrl('/' . $newFilename);
                    
                    $tabFiles[] = $file;
                    var_dump($file);
//                    $em->persist($file);
                }catch (Exception $ex) {
                    var_dump($ex);
                }
            };
//            $tricks = $form->getData();
//            
//            var_dump($tricks);
            $tricks->addTricksFiles($tabFiles);
            $em->persist($tricks);
            $em->flush();
//            return $this->redirectToRoute('task_success');
        }

        return $this->render("createTrick.html.twig", [
                    'form' => $form->createView(),
        ]);
    }

    
    /**
     * @Route("projet6/admin/update/trick/{trickId}", name="updateTricks")
     * @return JsonResponse
     */
    public function updateTricks(Request $request, SluggerInterface $slugger, int $trickId) {
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
        }
        
        // $form->handleRequest($request);
        
        return $this->render("updateTricks.html.twig", [
//            'formImage' => $formImage->createView(),
            'trick' => $tricks,
            'groups' => $groups
        ]);
    }

    
    
    /**
     * @Route("projet6/admin/delete/trick/{trickId}", name="deleteTricks")
     * @return JsonResponse
     */
    public function deleteTricks(Request $request, SluggerInterface $slugger, int $trickId) {
        $em = $this->getDoctrine()->getManager();
        $tricks = $em->getRepository(Tricks::class)->find($trickId);

        $em->remove($tricks);
        $em->flush();
        
        $tricks = $em->getRepository(Tricks::class)->findAll();
        
        return $this->render("home.html.twig", [
            'tricks' => $tricks,
        ]);
    }
    
    /**
     * @Route("projet6/admin/update/trick/{trickId}/delete/file/{fileId}", name="deleteFile")
     * @return JsonResponse
     */
    public function deleteFile(Request $request, SluggerInterface $slugger, int $trickId, int $fileId) {
        $em = $this->getDoctrine()->getManager();
        $file = $em->getRepository(Files::class)->find($fileId);
        
        $em->remove($file);
        $em->flush();
        
        return new JsonResponse(array(
            'status' => "success",
        ));
//        return new JsonResponse(array(
//            'status' => "erreur",
//            'message' => "Erreur lors de la copie du fichier"
//        ));
    }
    
    /**
     * @Route("projet6/admin/update/trick/{trickId}/update/file/{fileId}", name="updateFile")
     * @return JsonResponse
     */
    public function updateFile(Request $request, int $trickId, int $fileId) {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);
        $file = $em->getRepository(Files::class)->find($fileId);
        $groups = $em->getRepository(Group::class)->findAll();
        
        if($request->request->get("fileName")){
            $file->setFilesName($request->request->get("fileName"));
            $file->setFilesUrl("/".$request->request->get("fileName"));
            // $file->setFilesDate($request->request->get("fileDate"));
            $file->setFilesTricks($trick);
            
            $em->persist($file);
            $em->flush();
        }
        
        // $form = $this->createForm(TricksType::class, $tricks);
        // $form->handleRequest($request);
        
        return $this->render("updateTricks.html.twig", [
            // 'form' => $form->createView(),
            'trick' => $trick,
            'groups' => $groups
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
