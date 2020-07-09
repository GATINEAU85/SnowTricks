<?php
namespace App\DataFixtures;

use DateTime;
use App\Entity\Message;
use App\DataFixtures\UserFixtures;
use App\DataFixtures\TricksFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class MessageFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $group = new Message();
        $group->setMessageContent("Beautiful picture of this tricks. I will try to pic another on my next snow session.");
        $group->setMessageDate(new DateTime('NOW'));
        $group->setMessageUserId($this->getReference(UserFixtures::USER_REFERENCE));
        $group->setMessageTricksId($this->getReference(TricksFixtures::MUTE));
        $manager->persist($group);
        
        $manager->flush();

    }
    
    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            TricksFixtures::class,
        );
    }
}