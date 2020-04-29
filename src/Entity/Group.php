<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

use Doctrine\ORM\Mapping as ORM;

/**
 * Group
 *
 * @ORM\Table(name="group")
 * @ORM\Entity
 */
class Group
{
    /**
     * @var int
     *
     * @ORM\Column(name="group_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="group_group_id_seq", allocationSize=1, initialValue=1)
     */
    private $groupId;

    /**
     * @var string|null
     *
     * @ORM\Column(name="group_name", type="string", length=255, nullable=false)
     */
    private $groupName;
    
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Tricks", mappedBy="tricksGroupId")
     */
    private $groupTricks;

    public function getGroupId(): ?int
    {
        return $this->groupId;
    }

    public function getGroupName(): ?string
    {
        return $this->groupName;
    }

    public function setGroupName(?string $groupName): self
    {
        $this->groupName = $groupName;

        return $this;
    }
        
    /**
     * @return Collection|Tricks[]
     */
    public function getGroupTricks(): Collection
    {
        return $this->groupTricks;
    }
}
