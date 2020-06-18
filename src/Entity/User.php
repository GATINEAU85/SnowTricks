<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Security\Core\User\UserInterface;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table(name="users")
 * @ORM\Entity
 * @UniqueEntity("pseudo", message="Pseudo already use")
 */
class User implements UserInterface
{
    /**
     * @var int
     *
     * @ORM\Column(name="users_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="users_users_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="users_pseudo", type="string", length=255, nullable=false, unique=true)
     * @Assert\NotBlank
     */
    private $pseudo;

    /**
     * @var string|null
     *
     * @ORM\Column(name="users_email", type="text", nullable=false)
     * @Assert\Email()
     * @Assert\NotBlank
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="users_password", type="text", nullable=false)
     * @Assert\Length(min="8", minMessage="Password to short")
     */
    private $password;
    
    /**
     * @Assert\EqualTo(propertyPath="password", message="Differents passwords")
     */
    private $confirmPassword;

    /**
     * @var string|null
     */
    private $token;
    
    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Files", cascade={"persist"})
     * @ORM\JoinColumn(name="users_files_id", referencedColumnName="files_id")
     */
    private $userFiles;

    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(?string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): self
    {
        $this->password = $password;

        return $this;
    }
    
    /**
     * @return mixed
     */
    public function getConfirmPassword()
    {
        return $this->confirmPassword;
    }

    /**
     * @param mixed $confirmPassword
     */
    public function setConfirmPassword($confirmPassword): void
    {
        $this->confirmPassword = $confirmPassword;
    }
    
    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }
    
    public function getUserFiles(): ?Files
    {
        return $this->userFiles;
    }

    public function setUserFiles(?Files $userFiles): self
    {
        $this->userFiles = $userFiles;

        return $this;
    }

//    public function removeTricksFiles(Files $tricksFiles): self {
//        if ($this->tricksFiles->contains($tricksFiles)) {
//            $this->tricksFiles->removeElement($tricksFiles);
//            // set the owning side to null (unless already changed)
//            if ($tricksFiles->getFilesTricks() === $this) {
//                $tricksFiles->setFilesTricks(null);
//            }
//        }
//        return $this;
//    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->pseudo;
    }
    
    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
//        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
//        $roles[] = 'ROLE_USER';

        return ['ROLE_USER'];
    }
    
    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }
    
    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
}
