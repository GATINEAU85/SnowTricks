<?php

namespace App\Controller;

use App\Entity\Message;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;


class MessageController extends AbstractController
{    
    /**
     * @Route("/admin/update/trick/{trickId}/delete/message/{messageId}", name="deleteMessage")
     * @return JsonResponse
     */
    public function deleteMessage(int $trickId, int $messageId)
    {
        $em = $this->getDoctrine()->getManager();
        $message = $em->getRepository(Message::class)->find($messageId);
        
        if($this->getUser()->getId() === $message->getMessageUserId()->getId()){
            $em->remove($message);
            $em->flush();
      
            $this->addFlash('success', 'The delete is success');
            return $this->redirectToRoute('getTrick', [
                        'trickId' => $trickId,
            ]);
        }else{
            $this->addFlash('danger', "You haven't the right to delete this message.");
            return $this->redirectToRoute('getTrick', [
                        'trickId' => $trickId,
            ]);
        }
    }
}