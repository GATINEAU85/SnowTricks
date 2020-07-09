<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    public const ROLES = 'ROLE_ADMIN';

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setPseudo('gatineau85');
        $user->setMail('gatineau85@gmail.com');
        $user->setPassword('gatineau85');
        $user->setRoles(self::ROLES);
        
        $manager->persist($user);
        $manager->flush();

        // other fixtures can get this object using the UserFixtures::ADMIN_USER_REFERENCE constant
        $this->addReference(self::ROLES, $user);
    }
}