<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Message
 *
 * @ORM\Table(name="message")
 * @ORM\Entity
 */
class Message
{
    /**
     * @var int
     *
     * @ORM\Column(name="message_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="message_message_id_seq", allocationSize=1, initialValue=1)
     */
    private $messageId;

    /**
     * @var string
     *
     * @ORM\Column(name="message_content", type="string", length=255, nullable=false)
     * @Assert\NotBlank
     * @Assert\Length(max="255", maxMessage="The message is to long. 255 characters maximum")
     * 
     */
    private $messageContent;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="message_date", type="datetime", nullable=false)
     * @Assert\DateTime(message="This field must be a datetime value")
     */
    private $messageDate;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="usersMessage")
     * @ORM\JoinColumn(name="message_users_id", referencedColumnName="users_id")
     */
    private $messageUserId;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Tricks", inversedBy="tricksMessage")
     * @ORM\JoinColumn(name="message_tricks_id", referencedColumnName="tricks_id")
     */
    private $messageTricksId;
    
    
    public function getMessageId(): ?int
    {
        return $this->messageId;
    }

    public function getMessageContent(): ?string
    {
        return $this->messageContent;
    }

    public function setMessageContent(?string $messageContent): self
    {
        $this->messageContent = $messageContent;

        return $this;
    }
        
    public function getMessageDate(): ?\DateTimeInterface
    {
        return $this->messageDate;
    }

    public function setMessageDate(?\DateTimeInterface $messageDate): self
    {
        $this->messageDate = $messageDate;

        return $this;
    }
    
    public function getMessageUserId(): ?User
    {
        return $this->messageUserId;
    }

    public function setMessageUserId(?User $messageUserId): self
    {
        $this->messageUserId = $messageUserId;

        return $this;
    }

    public function getMessageTricksId(): ?Tricks
    {
        return $this->messageTricksId;
    }

    public function setMessageTricksId(?Tricks $messageTricksId): self
    {
        $this->messageTricksId = $messageTricksId;

        return $this;
    }
}
