<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

use Doctrine\ORM\Mapping as ORM;

/**
 * Users
 *
 * @ORM\Table(name="users")
 * @ORM\Entity
 */
class Users
{
    /**
     * @var int
     *
     * @ORM\Column(name="users_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="users_users_id_seq", allocationSize=1, initialValue=1)
     */
    private $usersId;

    /**
     * @var string|null
     *
     * @ORM\Column(name="users_pseudo", type="string", length=255, nullable=false)
     */
    private $usersPseudo;

    /**
     * @var string|null
     *
     * @ORM\Column(name="users_email", type="text", nullable=false)
     */
    private $usersEmail;

    /**
     * @var string|null
     *
     * @ORM\Column(name="users_password", type="text", nullable=false)
     */
    private $usersPassword;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Files", inversedBy="filesUsers")
     * @ORM\JoinColumn(name="users_files_id", referencedColumnName="files_id")
     */
    private $usersFiles;
//    
//    /**
//     * @ORM\Column(type="json")
//     */
//    private $usersRole = [];

    
    public function getUsersId(): ?int
    {
        return $this->usersId;
    }

    public function getUsersPseudo(): ?string
    {
        return $this->usersPseudo;
    }

    public function setUsersPseudo(?string $usersPseudo): self
    {
        $this->usersPseudo = $usersPseudo;

        return $this;
    }

    public function getUsersEmail(): ?string
    {
        return $this->usersEmail;
    }

    public function setUsersEmail(?string $usersEmail): self
    {
        $this->usersEmail = $usersEmail;

        return $this;
    }

    public function getUsersPassword(): ?string
    {
        return $this->usersPassword;
    }

    public function setUsersPassword(?string $usersPassword): self
    {
        $this->usersPassword = $usersPassword;

        return $this;
    }
    
    public function getUsersFiles(): ?Files
    {
        return $this->usersFiles;
    }

    public function setUsersFiles(?Files $usersFiles): self
    {
        $this->usersFiles = $usersFiles;

        return $this;
    }
    
//    public function getUsersRole(): array
//    {
//        $roles = $this->usersRole;
//
//        // il est obligatoire d'avoir au moins un rôle si on est authentifié, par convention c'est ROLE_USER
//        if (empty($roles)) {
//            $roles[] = 'ROLE_USER';
//        }
//
//        return array_unique($roles);
//    }
//
//    public function setRoles(array $usersRole): void
//    {
//        $this->usersRole = $usersRole;
//    }
}
