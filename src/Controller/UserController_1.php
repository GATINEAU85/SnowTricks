<?php 
namespace App\Controller;


use App\Entity\User;
use App\Entity\Files;
use App\Form\SecurityType;
use App\Form\UpdatePasswordType;
use App\Form\RegisterType;
use App\Service\FileUploader;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

use DateTime;

class UserController_1 extends AbstractController
{    
//    /**
//     * @Route("projet6/public/create/user", name="createUser")
//     * @return JsonResponse
//     */
//    public function createUser(Request $request, FileUploader $fileUploader)
//    {
//        $em = $this->getDoctrine()->getManager();
//
//        //Création du nouveau message
//        $user = new User();
//        $form = $this->createForm(RegisterType::class, $user);
//        $form->handleRequest($request);
//        
////        $formFiles = $form->get('userFiles')->getData();
//        
//        if ($form->isSubmitted() && $form->isValid()) {
//            //Insertion des données du user
////            var_dump($formFiles[0]['file']);
//            $user = $form->getData();
//            $user->setPassword(password_hash($user->getPassword(),PASSWORD_BCRYPT));
//
//            $user->setRoles(array('ROLE_ADMIN'));
//            
//            //get Picture in form
//            $pictureFile = $user->getFile();
//            //save MainImage in directory
//            $PictureImage = $fileUploader->savePicture($pictureFile);
//            var_dump($PictureImage);
//            //set Picture to User
//            $file = new Files();
//            $file->setFilesName($PictureImage);
//            $file->setFilesUrl('/' . $PictureImage);
//            
//            $user->setUserFiles($file);
//            
////            //Déplacement du fichier
////            $originalFilename = pathinfo($formFiles['file']->getClientOriginalName(), PATHINFO_FILENAME);
////            $originalFilename = $originalFilename . '.' . $formFiles['file']->guessExtension();
////            $formFiles['file']->move($newFilename, $originalFilename);
////            
////            //Création du fichier
////            $file = new Files();
////            $file->setFilesName($newFilename);
////            $file->setFilesUrl('/' . $newFilename);
////            
////            //Insertion de la FK
//////            $user->setUserFiles($file->getFilesName());
////            $user->setFiles($file);
////            
////            //MAJ du file
////            $em->persist($file);
//            
//            //MAJ du user
//            $em->persist($file);
//            $em->persist($user);
//            $em->flush();
//
//            $this->addFlash('success', 'Registration is success');
//
//            return $this->redirectToRoute('app_account');
//
//        }
//
//        return $this->render("register.html.twig",[
//            'form' => $form->createView(),
//        ]);
//    }
//    
////        /**
////     * @Route("projet6/public/create/account", name="createAccount")
////     * @return JsonResponse
////     */
////    public function createAccount(Request $request)
////    {
////        $em = $this->getDoctrine()->getManager();
////        $newFilename = $this->getParameter('files_directory');
////
////        if($request->request->get('userPseudo')){
////            //Création du nouveau message
////            $user = new User();
////
////            //Insertion des données du user
////            $user->setPseudo($request->request->get('userPseudo'));
////            $user->setEmail($request->request->get('userEmail'));
////            $user->setPassword(password_hash($request->request->get('userPassword'),PASSWORD_BCRYPT));
////            $user->setRoles(array('ROLE_ADMIN'));
////
////            //Création du fichier
////            $file = new Files();
////            $file->setFilesName($request->request->get('fileName'));
////            $file->setFilesType("image");
////            $file->setFilesUrl('/' . $request->request->get('fileName'));
////
////            //Insertion de la FK
////            $user->setUserFiles($file);
////
////            //MAJ du file
////            $em->persist($file);
////
////            //MAJ du user
////            $em->persist($user);
////            $em->flush();
////        }
////        
////        return $this->render("register.html.twig");
////    }
//    
//    /**
//     * @Route("projet6/admin/get/account", name="app_account")
//     * @return JsonResponse
//     */
//    public function getOwnAccount()
//    {
//        $user = $this->getUser();
//        return $this->render("account.html.twig", [
//            'user'  => $user,
//        ]);
//    }
//    
//    /**
//     * @Route("projet6/admin/get/user/{id}", name="getOwnUser")
//     * @return JsonResponse
//     */
//    public function getOwnUser(int $id)
//    {
//        $em = $this->getDoctrine()->getManager();
//        $user = $em->getRepository(User::class)->find($id);
//
//        return $this->render("user.html.twig", [
//            'user'  => $user,
//        ]);
//    }
//    
//        
//    /**
//     * @Route("projet6/admin/add/photoProfile", name="addPhotoProfile")
//     * @return JsonResponse
//     */
//    public function addPhotoProfile(Request $request)
//    {
//        $em = $this->getDoctrine()->getManager();
//        $user = $this->getUser();
//
//        
//        //Création du fichier
//        $file = new Files();
//        $file->setFilesName($request->request->get('fileName'));
//        $file->setFilesType("image");
//        $file->setFilesUrl('/' . $request->request->get('fileName'));
//
//        //Insertion de la FK
//        $user->setUserFiles($file);
//
//        //MAJ du file
//        $em->persist($file);
//
//        //MAJ du user
//        $em->persist($user);
//        $em->flush();
//        $this->addFlash('success', 'Your photo is updated.');
//        
//        return $this->redirectToRoute('app_account');
//    }
//        
//    /**
//     * @Route("projet6/admin/update/password", name="updatePassword")
//     * @return JsonResponse
//     */
//    public function updatePassword(Request $request)
//    {
//        $user = $this->getUser();
//        $em = $this->getDoctrine()->getManager();
//
//        $form = $this->createForm(UpdatePasswordType::class, $user);
//        $form->handleRequest($request);
//
////        $password = $request->request->get('password');
////        $confirmPassword = $request->request->get('confirmPassword');
////        if ($password === $confirmPassword){
////            $form->handleRequest($request);
////        }else{
////            throw new \RuntimeException('The two password are not the same.');
////        }
//               
//        if ($form->isSubmitted() && $form->isValid()) {
//            $user->setPassword(password_hash($user->getPassword(),PASSWORD_BCRYPT));
//            $em->persist($user);
//            $em->flush();
//            
//            $this->addFlash('success', 'Update password is success');
//
//            return $this->redirectToRoute('app_account');
//        }
//
//        return $this->render("updatePassword.html.twig", [
//            'user'  => $user,
//            'form' => $form->createView(),
//        ]);
//    }
}