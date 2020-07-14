<?php

namespace App\Controller;

use App\Entity\Files;
use App\Entity\Tricks;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class FilesController extends AbstractController
{    
    /**
     * @Route("/admin/update/trick/{trickId}/delete/file/{fileId}", name="deleteFile")
     * @return JsonResponse
     */
    public function deleteFile(int $trickId, int $fileId) {
        $em = $this->getDoctrine()->getManager();
        $file = $em->getRepository(Files::class)->find($fileId);
        
        if($this->getUser() === $file->getFilesUser()){
            $em->remove($file);
            $em->flush();

            $this->addFlash('success', 'This file was delete !');
            return $this->redirectToRoute('getTrick', [
                        'trickId' => $trickId,
            ]);
        }else{
            $this->addFlash('danger', "You haven't the right to delete this file.");
            return $this->redirectToRoute('getTrick', [
                        'trickId' => $trickId,
            ]);
        }
    }
    
    /**
     * @Route("/admin/update/trick/{trickId}/update/file/{fileId}", name="updateFile")
     * @return JsonResponse
     */
    public function updateFile(Request $request, int $trickId, int $fileId) {
        $em = $this->getDoctrine()->getManager();
        $trick = $em->getRepository(Tricks::class)->find($trickId);
        $file = $em->getRepository(Files::class)->find($fileId);
        
        if($request->request->get("fileName")){
            if($this->getUser() === $file->getFilesUser()){
                $file->setFilesName($request->request->get("fileName"));
                $file->setFilesUrl($request->request->get("fileUrl"));
                $file->setFilesTricks($trick);

                $em->persist($file);
                $em->flush();

                return new JsonResponse(array('status' => 'success'));
            }else{
                return new JsonResponse(array('status' => 'danger'));
            }
        }
        
        return $this->redirectToRoute('updateTricks', [
                    'trickId' => $trickId,
        ]);
    }
        
    /**
     * @Route("/admin/update/trick/{trickId}/create/file", name="createFile")
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
            $file->setFilesTricks($trick);
            $file->setFilesUser($this->getUser());

            $em->persist($file);
            $em->flush();
            
            return new JsonResponse(array('status' => 'success'));
        }
        
        return $this->redirectToRoute('updateTricks', [
                    'trickId' => $trickId,
        ]);
    }
    
    /**
     * @Route("/admin/upload/file", name="uploadFile")
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