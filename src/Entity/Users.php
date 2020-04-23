<?php

namespace App\Entity;

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



    public function getUsersId(): ?int
    {
        return $this->usersId;
    }

    public function getUsersPseudo(): ?string
    {
        return $this->usersPseudo;
    }

    public function setUsersNom(?string $usersPseudo): self
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
}
