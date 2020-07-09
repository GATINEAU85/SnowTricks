<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    public const USER_REFERENCE = 'user-gatineau';
    public const ROLES = array('ROLE_ADMIN');
    private $encoder;
    
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setPseudo('gatineau85');
        $user->setEmail('gatineau85@gmail.com');
        $password = $this->encoder->encodePassword($user, 'gatineau85');
        $user->setPassword($password);
        $user->setRoles(self::ROLES);
        $this->addReference(self::USER_REFERENCE, $user);

        $manager->persist($user);
        $manager->flush();
    }
}