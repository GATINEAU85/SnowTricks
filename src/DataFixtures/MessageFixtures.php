<?php

namespace App\DataFixtures;

use App\Entity\Message;
use App\DataFixtures\UserFixtures;
use App\DataFixtures\TricksFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class MessageFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $group = new Message();
        $group->setMessageContent("Beautiful picture of this tricks. I will try to pic another on my next snow session.");
        $group->setMessageDate(date("d-m-Y"));
        $group->setMessageUserId($manager->getRepository(User::class)->find(1));
        $group->setMessageTricksId($manager->getRepository(Tricks::class)->find(1));

        $manager->persist($group);
        $manager->flush();

        // other fixtures can get this object using the UserFixtures::ADMIN_USER_REFERENCE constant
        $this->addReference(self::LIST, $group);
    }
    
    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            TricksFixtures::class,
        );
    }
}