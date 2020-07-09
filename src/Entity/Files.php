<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Files
 *
 * @ORM\Table(name="files")
 * @ORM\Entity
 */
class Files
{
        
    public function __construct()
    {
        $this->filesUsers = new ArrayCollection();
    }
    
    /**
     * @var int
     *
     * @ORM\Column(name="files_id", type="integer", nullable=false, unique=true)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="files_files_id_seq", allocationSize=1, initialValue=1)
     */
    private $filesId;

    /**
     * @var string
     *
     * @ORM\Column(name="files_name", type="string", length=255, nullable=false, unique=true)
     * @Assert\Length(max="255", minMessage="The name is to long. 255 characters maximum")
     * @Assert\NotBlank
     */
    private $filesName;

    /**
     * @var string
     *
     * @ORM\Column(name="files_url", type="string", nullable=false)
     * @Assert\NotBlank
     */
    private $filesUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="files_type", type="string", nullable=false)
     * @Assert\NotBlank
     */
    private $filesType;
            
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tricks", inversedBy="tricksFiles")
     * @ORM\JoinColumn(name="files_tricks_id", referencedColumnName="tricks_id")
     * @Assert\NotBlank
     */
    private $filesTricks;

    public function getFilesId(): ?int
    {
        return $this->filesId;
    }

    public function getFilesName(): ?string
    {
        return $this->filesName;
    }

    public function setFilesName(?string $filesName): self
    {
        $this->filesName = $filesName;

        return $this;
    }

    public function getFilesUrl(): ?string
    {
        return $this->filesUrl;
    }

    public function setFilesUrl(?string $filesUrl): self
    {
        $this->filesUrl = $filesUrl;

        return $this;
    }
    
    public function getFilesType(): ?string
    {
        return $this->filesType;
    }

    public function setFilesType(?string $filesType): self
    {
        $this->filesType = $filesType;

        return $this;
    }
    
    //User function
    public function getFilesTricks(): ?Tricks
    {
        return $this->filesTricks;
    }
    
    public function setFilesTricks(?Tricks $filesTricks): self
    {
        $this->filesTricks = $filesTricks;

        return $this;
    }
    
    //User function
    public function getFilesUsers(): ?User
    {
        return $this->filesUsers;
    }
    
    public function setFilesUsers(?User $filesUsers): self
    {
        $this->filesUsers = $filesUsers;

        return $this;
    }
}
