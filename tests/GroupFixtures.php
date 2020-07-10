<?php

namespace App\DataFixtures;

use App\Entity\Group;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class GroupFixtures extends Fixture
{
    public const LIST = ['Grabs', 'Rotate', 'Flips', 'Slides'];

    public function load(ObjectManager $manager)
    {
        foreach(self::LIST as $elmnt){
            $group = new Group();
            $group->setGroupName($elmnt);

            $manager->persist($group);
        }
        $manager->flush();

        // other fixtures can get this object using the UserFixtures::ADMIN_USER_REFERENCE constant
        $this->addReference(self::LIST, $group);
    }
}