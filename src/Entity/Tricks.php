<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @ORM\Column(name="tricks_id", type="integer", nullable=false, unique=true)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="tricks_tricks_id_seq", allocationSize=1, initialValue=1)
     */
    private $tricksId;

    /**
     * @var string
     *
     * @ORM\Column(name="tricks_name", type="string", length=255, nullable=false)
     * @Assert\NotBlank
     */
    private $tricksName;

    /**
     * @var string
     *
     * @ORM\Column(name="tricks_description", type="text", nullable=false)
     * @Assert\NotBlank
     * @Assert\Length(min="25", minMessage="The description is to short. 25 characters minimum")
     */
    private $tricksDescription;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Files", mappedBy="filesTricks", cascade={"remove"})
     * @Assert\NotNull
     */
    private $tricksFiles;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Message", mappedBy="messageTricksId")
     */
    private $tricksMessage;

    /**
     * @var \Group
     * @ORM\ManyToOne(targetEntity="App\Entity\Group",)
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="tricks_group_id", referencedColumnName="group_id")
     * })
     */
    private $tricksGroupId;

    public function __construct() {
        $this->tricksFiles = new ArrayCollection();
        $this->tricksMessage = new ArrayCollection();
    }

    public function getTricksId(): ?int {
        return $this->tricksId;
    }

    public function getTricksName(): ?string {
        return $this->tricksName;
    }

    public function setTricksName(?string $tricksName): self {
        $this->tricksName = $tricksName;

        return $this;
    }

    public function getTricksDescription(): ?string {
        return $this->tricksDescription;
    }

    public function setTricksDescription(?string $tricksDescription): self {
        $this->tricksDescription = $tricksDescription;

        return $this;
    }

    /**
     * @return Collection|Files[]
     */
    public function getTricksFiles(): Collection {
        return $this->tricksFiles;
    }

    public function addTricksFiles($tricksFiles): self {
        foreach ($tricksFiles as $tricksFile) {
            if (!$this->tricksFiles->contains($tricksFiles)) {
                $this->tricksFiles[] = $tricksFiles;
                $tricksFile->setFilesTricks($this);
            }
        }

        return $this;
    }

    public function removeTricksFiles(Files $tricksFiles): self {
        if ($this->tricksFiles->contains($tricksFiles)) {
            $this->tricksFiles->removeElement($tricksFiles);
            // set the owning side to null (unless already changed)
            if ($tricksFiles->getFilesTricks() === $this) {
                $tricksFiles->setFilesTricks(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getTricksMessage(): Collection {
        return $this->tricksMessage;
    }

    public function getTricksGroupId(): ?Group {
        return $this->tricksGroupId;
    }

    public function setTricksGroupId(?Group $tricksGroupId): self {
        $this->tricksGroupId = $tricksGroupId;
        return $this;
    }

}
