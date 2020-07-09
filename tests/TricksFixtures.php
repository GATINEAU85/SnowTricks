<?php

namespace App\DataFixtures;

use App\Entity\Tricks;
use App\DataFixtures\GroupFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class TricksFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $mute = new Tricks();
        $mute->setTricksName('Mute');
        $mute->setTricksDescriptions('Grasping the frontside edge of the board between the two feet with the front hand.');
        $mute->setTricksDate(date("d-m-Y"));
        $groupMute = $manager->getRepository(Group::class)->find(1);
        $mute->setTricksGroupId($groupMute);
        $manager->persist($mute);
        
        $indy = new Tricks();
        $indy->setTricksName('Indy');
        $indy->setTricksDescriptions('Seizure of the frontside edge of the board, between the two feet, with the rear hand.');
        $indy->setTricksDate(date("d-m-Y"));
        $groupIndy = $manager->getRepository(Group::class)->find(3);
        $indy->setTricksGroupId($groupIndy);
        $manager->persist($indy);
        
        $stalefish = new Tricks();
        $stalefish->setTricksName('Stalefish');
        $stalefish->setTricksDescriptions('Grasping the backside of the board between the two feet with the back hand');
        $stalefish->setTricksDate(date("d-m-Y"));
        $groupStalefish = $manager->getRepository(Group::class)->find(2);
        $stalefish->setTricksGroupId($groupStalefish);
        $manager->persist($stalefish);
        
        $tailGrab = new Tricks();
        $tailGrab->setTricksName('Tail grab');
        $tailGrab->setTricksDescriptions('Seizure of the rear part of the board, with the back hand');
        $tailGrab->setTricksDate(date("d-m-Y"));
        $groupTailGrab = $manager->getRepository(Group::class)->find(1);
        $tailGrab->setTricksGroupId($groupTailGrab);
        $manager->persist($tailGrab);
        
        $noseGrab = new Tricks();
        $noseGrab->setTricksName('Nose grab');
        $noseGrab->setTricksDescriptions('Seizure of the front part of the board, with the front hand');
        $noseGrab->setTricksDate(date("d-m-Y"));
        $groupNoseGrab = $manager->getRepository(Group::class)->find(1);
        $noseGrab->setTricksGroupId($groupNoseGrab);
        $manager->persist($noseGrab);
        
        $seatBelt = new Tricks();
        $seatBelt->setTricksName('Seat belt');
        $seatBelt->setTricksDescriptions('Seizure of the frontside edge at the back with the front hand');
        $seatBelt->setTricksDate(date("d-m-Y"));
        $groupSeatBelt = $manager->getRepository(Group::class)->find(1);
        $seatBelt->setTricksGroupId($groupSeatBelt);
        $manager->persist($seatBelt);
    
        $truckDriver = new Tricks();
        $truckDriver->setTricksName('Truck driver');
        $truckDriver->setTricksDescriptions('Seizure of the front and rear edges with each hand (like holding a car steering wheel)');
        $truckDriver->setTricksDate(date("d-m-Y"));
        $groupTruckDriver = $manager->getRepository(Group::class)->find(1);
        $truckDriver->setTricksGroupId($groupTruckDriver);
        $manager->persist($truckDriver);
            
        $rotation360 = new Tricks();
        $rotation360->setTricksName('Rotation 360°');
        $rotation360->setTricksDescriptions('Grasping the frontside edge of the board between the two feet with the front hand.');
        $rotation360->setTricksDate(date("d-m-Y"));
        $groupRotation360 = $manager->getRepository(Group::class)->find(3);
        $rotation360->setTricksGroupId($groupRotation360);
        $manager->persist($rotation360);
            
        $rotation180 = new Tricks();
        $rotation180->setTricksName('Rotation 180°');
        $rotation180->setTricksDescriptions('Turn on 360 degrees during your flight');
        $rotation180->setTricksDate(date("d-m-Y"));
        $groupRotation180 = $manager->getRepository(Group::class)->find(3);
        $rotation180->setTricksGroupId($groupRotation180);
        $manager->persist($rotation180);
                    
        $japanAir = new Tricks();
        $japanAir->setTricksName('Japan air');
        $japanAir->setTricksDescriptions("Seizure between your tails and your nose of the board. When you're on flight, you must turn your left foot to tuch your right hand.");
        $japanAir->setTricksDate(date("d-m-Y"));
        $groupJapanAir = $manager->getRepository(Group::class)->find(1);
        $japanAir->setTricksGroupId($groupJapanAir);
        $manager->persist($japanAir);
        
        $manager->flush();       
        
        $rocketAir = new Tricks();
        $rocketAir->setTricksName('Rocket air');
        $rocketAir->setTricksDescriptions("The front hand grabs the toe edge in front of the front foot (mute) and the back leg is boned while the board points perpendicular to the ground.");
        $rocketAir->setTricksDate(date("d-m-Y"));
        $groupRocketAir = $manager->getRepository(Group::class)->find(1);
        $rocketAir->setTricksGroupId($groupRocketAir);
        $manager->persist($rocketAir);
        
        $manager->flush();

        $this->addReference($mute, $indy, $stalefish, $tailGrab, $noseGrab, $seatBelt, $truckDriver, $rotation180, $rotation360, $japanAir,$rocketAir);
    }
    
    public function getDependencies()
    {
        return array(
            GroupFixtures::class,
        );
    }
}