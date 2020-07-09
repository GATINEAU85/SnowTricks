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
        foreach(self::LIST as $key => $elmnt){
            $group = new Group();
            $group->setGroupName($elmnt);
            $this->addReference(self::LIST[$key], $group);
            $manager->persist($group);
        }
        $manager->flush();
    }
}