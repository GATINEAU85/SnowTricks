<?php

namespace App\DataFixtures;

use App\Entity\Tricks;
use App\DataFixtures\GroupFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class TricksFixtures extends Fixture implements DependentFixtureInterface
{
    public const MUTE = 'mute';
    public const INDY = 'indy';
    public const STALEFISH = 'stalefish';
    public const TAIL_GRAB = 'tail_grab';
    public const NOSE_GRAB = 'nose_grab';
    public const SEA_BELT = 'sea_belt';
    public const TRUCK_DRIVER = 'truck_driver';
    public const ROTATION_360 = 'rotation_360';
    public const ROTATION_180 = 'rotation_180';
    public const JAPAN_AIR = 'japan_air';
    public const ROCKET_AIR = 'rocket_air';

    public function load(ObjectManager $manager)
    {
        
        $mute = new Tricks();
        $mute->setTricksName('Mute');
        $mute->setTricksDescription('Grasping the frontside edge of the board between the two feet with the front hand.');
//        $groupMute = $manager->getRepository(Group::class)->find(1);
        $mute->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::MUTE, $mute);
        $manager->persist($mute);
        
        $indy = new Tricks();
        $indy->setTricksName('Indy');
        $indy->setTricksDescription('Seizure of the frontside edge of the board, between the two feet, with the rear hand.');
        $indy->setTricksGroupId($this->getReference(GroupFixtures::LIST[2]));
        $this->addReference(self::INDY, $indy);
        $manager->persist($indy);
        
        $stalefish = new Tricks();
        $stalefish->setTricksName('Stalefish');
        $stalefish->setTricksDescription('Grasping the backside of the board between the two feet with the back hand');
        $stalefish->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::STALEFISH, $stalefish);
        $manager->persist($stalefish);
        
        $tailGrab = new Tricks();
        $tailGrab->setTricksName('Tail grab');
        $tailGrab->setTricksDescription('Seizure of the rear part of the board, with the back hand');
        $tailGrab->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::TAIL_GRAB, $tailGrab);
        $manager->persist($tailGrab);
        
        $noseGrab = new Tricks();
        $noseGrab->setTricksName('Nose grab');
        $noseGrab->setTricksDescription('Seizure of the front part of the board, with the front hand');
        $noseGrab->setTricksGroupId($this->getReference(GroupFixtures::LIST[3]));
        $this->addReference(self::NOSE_GRAB, $noseGrab);
        $manager->persist($noseGrab);
        
        $seatBelt = new Tricks();
        $seatBelt->setTricksName('Seat belt');
        $seatBelt->setTricksDescription('Seizure of the frontside edge at the back with the front hand');
        $seatBelt->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::SEA_BELT, $seatBelt);
        $manager->persist($seatBelt);
    
        $truckDriver = new Tricks();
        $truckDriver->setTricksName('Truck driver');
        $truckDriver->setTricksDescription('Seizure of the front and rear edges with each hand (like holding a car steering wheel)');
        $truckDriver->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::TRUCK_DRIVER, $truckDriver);
        $manager->persist($truckDriver);
            
        $rotation360 = new Tricks();
        $rotation360->setTricksName('Rotation 360°');
        $rotation360->setTricksDescription('Grasping the frontside edge of the board between the two feet with the front hand.');
        $rotation360->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::ROTATION_360, $rotation360);
        $manager->persist($rotation360);
            
        $rotation180 = new Tricks();
        $rotation180->setTricksName('Rotation 180°');
        $rotation180->setTricksDescription('Turn on 360 degrees during your flight');
        $rotation180->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::ROTATION_180, $rotation180);
        $manager->persist($rotation180);
                    
        $japanAir = new Tricks();
        $japanAir->setTricksName('Japan air');
        $japanAir->setTricksDescription("Seizure between your tails and your nose of the board. When you're on flight, you must turn your left foot to tuch your right hand.");
        $japanAir->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::JAPAN_AIR, $japanAir);
        $manager->persist($japanAir);
                
        $rocketAir = new Tricks();
        $rocketAir->setTricksName('Rocket air');
        $rocketAir->setTricksDescription("The front hand grabs the toe edge in front of the front foot (mute) and the back leg is boned while the board points perpendicular to the ground.");
        $rocketAir->setTricksGroupId($this->getReference(GroupFixtures::LIST[1]));
        $this->addReference(self::ROCKET_AIR, $rocketAir);
        $manager->persist($rocketAir);
        
        $manager->flush();
    }
    
    public function getDependencies()
    {
        return array(
            GroupFixtures::class,
        );
    }
}