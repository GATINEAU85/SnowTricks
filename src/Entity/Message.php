<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

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
     * @var string|null
     *
     * @ORM\Column(name="message_content", type="string", length=255, nullable=false)
     */
    private $messageContent;

    
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Users", inversedBy="usersMessage")
     * @ORM\JoinColumn(name="message_users_id", referencedColumnName="users_id")
     */
    private $messageUsersId;

    
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

    public function getMessageUserId(): ?Users
    {
        return $this->messageUserId;
    }

    public function setMessageUserId(?Users $messageUserId): self
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
