<?php

//namespace App\Entity;
//use Doctrine\Common\Collections\ArrayCollection;
//use Doctrine\Common\Collections\Collection;
//use Symfony\Component\HttpFoundation\File\UploadedFile;
//
//use Doctrine\ORM\Mapping as ORM;
//
///**
// * Files
// *
// * @ORM\Table(name="files")
// * @ORM\Entity
// */
//class Files
//{
//        
//    public function __construct()
//    {
//        $this->filesUsers = new ArrayCollection();
//    }
//    
//    /**
//     * @var int
//     *
//     * @ORM\Column(name="files_id", type="integer", nullable=false)
//     * @ORM\Id
//     * @ORM\GeneratedValue(strategy="SEQUENCE")
//     * @ORM\SequenceGenerator(sequenceName="files_files_id_seq", allocationSize=1, initialValue=1)
//     */
//    private $filesId;
//
//    /**
//     * @var string|null
//     *
//     * @ORM\Column(name="files_name", type="string", length=255, nullable=false)
//     */
//    private $filesName;
//
//    /**
//     * @var string|null
//     *
//     * @ORM\Column(name="files_url", type="text", nullable=false)
//     */
//    private $filesUrl;
//
//    /**
//     * @var string|null
//     *
//     * @ORM\Column(name="files_type", type="text", nullable=false)
//     */
//    private $filesType;
//    
//    private $file;
//    // On ajoute cet attribut pour y stocker le nom du fichier temporairement
//    private $tempFilename;
//
//    
//    /**
//     * @ORM\ManyToOne(targetEntity="App\Entity\Tricks", inversedBy="tricksFiles", cascade={"persist","remove"})
//     * @ORM\JoinColumn(name="files_tricks_id", referencedColumnName="tricks_id")
//     */
//    private $filesTricks;
//
//    public function getFilesId(): ?int
//    {
//        return $this->filesId;
//    }
//
//    public function getFilesName(): ?string
//    {
//        return $this->filesName;
//    }
//
//    public function setFilesName(?string $filesName): self
//    {
//        $this->filesName = $filesName;
//
//        return $this;
//    }
//
//    public function getFilesUrl(): ?string
//    {
//        return $this->filesUrl;
//    }
//
//    public function setFilesUrl(?string $filesUrl): self
//    {
//        $this->filesUrl = $filesUrl;
//
//        return $this;
//    }
//    
//    public function getFilesType(): ?string
//    {
//        return $this->filesType;
//    }
//
//    public function setFilesType(?string $filesType): self
//    {
//        $this->filesType = $filesType;
//
//        return $this;
//    }
//
//    
////    //Tricks function
////    public function getFile()
////    {
////        return $this->file;
////    }
////    // On modifie le setter de File, pour prendre en compte l'upload d'un fichier lorsqu'il en existe déjà un autre
////    public function setFile(UploadedFile $file)
////    {
////        $this->file = $file;
////
////        // On vérifie si on avait déjà un fichier pour cette entité
////        if (null !== $this->url) {
////          // On sauvegarde l'extension du fichier pour le supprimer plus tard
////          $this->tempFilename = $this->url;
////
////          // On réinitialise les valeurs des attributs url et alt
////          $this->filesUrl = null;
////          $this->filesName = null;
////        }
////    }
////
////    public function upload()
////       {
////         // Si jamais il n'y a pas de fichier (champ facultatif), on ne fait rien
////         if (null === $this->file) {
////           return;
////         }
////
////         // On récupère le nom original du fichier de l'internaute
////         $name = $this->file->getClientOriginalName();
////
////         // On déplace le fichier envoyé dans le répertoire de notre choix
////         $this->file->move($this->getUploadRootDir(), $name);
////
////         // On sauvegarde le nom de fichier dans notre attribut $url
////         $this->filesUrl = $name;
////
////         // On crée également le futur attribut alt de notre balise <img>
////         $this->filesName = $name;
////       }
////
////    public function getUploadDir()
////    {
////      // On retourne le chemin relatif vers l'image pour un navigateur (relatif au répertoire /web donc)
////      return 'files';
////    }
////
////    protected function getUploadRootDir()
////    {
////      // On retourne le chemin relatif vers l'image pour notre code PHP
////      return __DIR__.'/../public/'.$this->getUploadDir();
////    }
//   
//    //User function
//    public function getFilesTricksId(): ?Tricks
//    {
//        return $this->filesTricksId;
//    }
//    
//    public function setFilesTricksId(?Tricks $filesTricksId): self
//    {
//        $this->filesTricksId = $filesTricksId;
//
//        return $this;
//    }
//    
//    //User function
//    public function getFilesUsers(): ?Users
//    {
//        return $this->filesUsers;
//    }
//    
//    public function setFilesUsers(?Users $filesUsers): self
//    {
//        $this->filesUsers = $filesUsers;
//
//        return $this;
//    }
//}
