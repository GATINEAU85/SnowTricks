<?php

namespace App\Entity;
use Symfony\Component\Validator\Constraints as Assert;

use Doctrine\ORM\Mapping as ORM;

/**
 * Group
 *
 * @ORM\Table(name="groupe")
 * @ORM\Entity
 */
class Group
{
    /**
     * @var int
     *
     * @ORM\Column(name="group_id", type="integer", nullable=false, unique=true)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="group_group_id_seq", allocationSize=1, initialValue=1)
     */
    private $groupId;


    /**
     * @var string|null
     *
     * @ORM\Column(name="group_name", type="string", length=255, nullable=false)
     * @Assert\Length(max="255", minMessage="The name is to long. 255 characters maximum")
     */
    private $groupName;

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

}
