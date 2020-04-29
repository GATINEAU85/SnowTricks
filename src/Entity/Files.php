<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Files
 *
 * @ORM\Table(name="files")
 * @ORM\Entity
 */
class Files
{
    /**
     * @var int
     *
     * @ORM\Column(name="files_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="files_files_id_seq", allocationSize=1, initialValue=1)
     */
    private $filesId;

    /**
     * @var string|null
     *
     * @ORM\Column(name="files_name", type="string", length=255, nullable=false)
     */
    private $filesName;

    /**
     * @var string|null
     *
     * @ORM\Column(name="files_url", type="text", nullable=false)
     */
    private $filesUrl;

    /**
     * @var int|null
     *
     * @ORM\Column(name="files_size", type="text", nullable=false)
     */
    private $filesSize;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="files_date", type="datetime", nullable=false)
     */
    private $filesDate;

    /**
     * @var string|null
     *
     * @ORM\Column(name="files_type", type="text", nullable=false)
     */
    private $filesType;
    
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tricks", inversedBy="tricksFiles")
     * @ORM\JoinColumn(name="files_tricks_id", referencedColumnName="tricks_id")
     */
    private $filesTricksId;
    
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

    public function getFilesSize(): ?int
    {
        return $this->filesSize;
    }

    public function setFilesSize(?int $filesSize): self
    {
        $this->filesSize = $filesSize;

        return $this;
    }
    
    public function getFilesDate(): ?\DateTimeInterface
    {
        return $this->filesDate;
    }

    public function setFilesDate(?\DateTimeInterface $filesDate): self
    {
        $this->filesDate = $filesDate;

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
    
    public function getFilesTricksId(): ?Files
    {
        return $this->filesTricksId;
    }

    public function setFilesTricksId(?Files $filesTricksId): self
    {
        $this->filesTricksId = $filesTricksId;

        return $this;
    }
}
