<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

use Doctrine\ORM\Mapping as ORM;

/**
 * Tricks
 *
 * @ORM\Table(name="tricks")
 * @ORM\Entity
 */
class Tricks
{
    /**
     * @var int
     *
     * @ORM\Column(name="tricks_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="tricks_tricks_id_seq", allocationSize=1, initialValue=1)
     */
    private $tricksId;

    /**
     * @var string|null
     *
     * @ORM\Column(name="tricks_name", type="string", length=255, nullable=false)
     */
    private $tricksName;

    /**
     * @var string|null
     *
     * @ORM\Column(name="tricks_description", type="text", nullable=false)
     */
    private $tricksDescription;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="tricks_date", type="datetime", nullable=false)
     */
    private $tricksDate;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Files", mappedBy="filesTricksId")
     */
    private $tricksFiles;
    
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Message", mappedBy="messageTricksId")
     */
    private $tricksMessage;
    
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Group", inversedBy="groupTricks")
     * @ORM\JoinColumn(name="tricks_group_id", referencedColumnName="group_id")
     */
    private $tricksGroupId;
    
    public function __construct()
    {
        $this->tricksFiles = new ArrayCollection();
        $this->tricksMessage = new ArrayCollection();
    }
    
    public function getTricksId(): ?int
    {
        return $this->tricksId;
    }

    public function getTricksName(): ?string
    {
        return $this->tricksName;
    }

    public function setTricksName(?string $tricksName): self
    {
        $this->tricksName = $tricksName;

        return $this;
    }

    public function getTricksDescription(): ?string
    {
        return $this->tricksDescription;
    }

    public function setTricksDescription(?string $tricksDescription): self
    {
        $this->tricksDescription = $tricksDescription;

        return $this;
    }

    public function getTricksDate(): ?\DateTimeInterface
    {
        return $this->tricksDate;
    }

    public function setTricksDate(?\DateTimeInterface $tricksDate): self
    {
        $this->tricksDate = $tricksDate;

        return $this;
    }
    
    /**
     * @return Collection|Files[]
     */
    public function getTricksFiles(): Collection
    {
        return $this->tricksFiles;
    }
    
    /**
     * @return Collection|Message[]
     */
    public function getTricksMessage(): Collection
    {
        return $this->tricksMessage;
    }
}
