<?php 

namespace App\Service;
use App\Entity\Files;
use Symfony\Component\HttpFoundation\File\File;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileUploader
{
//    private $targetDirectory;
//    private $slugger;
//
//    public function __construct($targetDirectory, SluggerInterface $slugger)
//    {
//        $this->targetDirectory = $targetDirectory;
//        $this->slugger = $slugger;
//    }
//
//    public function upload(UploadedFile $file)
//    {
//        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
//        $safeFilename = $this->slugger->slug($originalFilename);
//        $fileName = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();
//
//        try {
//            $file->move($this->getTargetDirectory(), $fileName);
//        } catch (FileException $e) {
//            // ... handle exception if something happens during file upload
//        }
//
//        return $fileName;
//    }
//
//    public function getTargetDirectory()
//    {
//        return $this->targetDirectory;
//    }
    
    public function savePicture(File $file)
    {
        $newFilename = 'files/user';

        //get the Picture directory
        $destination = $newFilename;
        // set a filename
        $filename = md5(uniqid()) . '.' . $file->guessExtension();
        // move the file
        $file->move(
            $destination,
            $filename
        );

        return $filename;
    }
}
