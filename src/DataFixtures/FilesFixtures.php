<?php

namespace App\DataFixtures;

use App\Entity\Files;
use App\Entity\Tricks;
use App\DataFixtures\TricksFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class FilesFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
         
        $file1 = new Files();
        $file1->setFilesName('mute2.jpg');
        $file1->setFilesUrl('/mute2.jpg');
        $file1->setFilesType('image');
        $file1->setFilesTricks($this->getReference(TricksFixtures::MUTE));
        $manager->persist($file1);
        
        $file2 = new Files();
        $file2->setFilesName('mute3.jpg');
        $file2->setFilesUrl('/mute3.jpg');
        $file2->setFilesType('image');
        $file2->setFilesTricks($this->getReference(TricksFixtures::MUTE));
        $manager->persist($file2);
        
        $file3 = new Files();
        $file3->setFilesName('snow3.jpeg');
        $file3->setFilesUrl('/snow3.jpeg');
        $file3->setFilesType('image');
        $file3->setFilesTricks($this->getReference(TricksFixtures::MUTE));
        $manager->persist($file3);
        
        $file4 = new Files();
        $file4->setFilesName('snow4.jpeg');
        $file4->setFilesUrl('/snow4.jpeg');
        $file4->setFilesType('image');
        $file4->setFilesTricks($this->getReference(TricksFixtures::MUTE));
        $manager->persist($file4);
        
        $file5 = new Files();
        $file5->setFilesName('snow5.jpeg');
        $file5->setFilesUrl('/snow5.jpeg');
        $file5->setFilesType('image');
        $file5->setFilesTricks($this->getReference(TricksFixtures::INDY));
        $manager->persist($file5);
        
        $file6 = new Files();
        $file6->setFilesName('snow6.jpeg');
        $file6->setFilesUrl('/snow6.jpeg');
        $file6->setFilesType('image');
        $file6->setFilesTricks($this->getReference(TricksFixtures::STALEFISH));
        $manager->persist($file6);
        
        $file7 = new Files();
        $file7->setFilesName('snow12.jpg');
        $file7->setFilesUrl('/snow12.jpg');
        $file7->setFilesType('image');
        $file7->setFilesTricks($this->getReference(TricksFixtures::TAIL_GRAB));
        $manager->persist($file7);
        
        $file8 = new Files();
        $file8->setFilesName('snow13.jpg');
        $file8->setFilesUrl('/snow13.jpg');
        $file8->setFilesType('image');
        $file8->setFilesTricks($this->getReference(TricksFixtures::NOSE_GRAB));
        $manager->persist($file8);
        
        $file9 = new Files();
        $file9->setFilesName('GoPro: Alaskan Playground with John Jackson');
        $file9->setFilesUrl('https://www.youtube.com/embed/1TJ08caetkw');
        $file9->setFilesType('video');
        $file9->setFilesTricks($this->getReference(TricksFixtures::NOSE_GRAB));
        $manager->persist($file9);
        
        $file10 = new Files();
        $file10->setFilesName('snow14.jpg');
        $file10->setFilesUrl('/snow14.jpg');
        $file10->setFilesType('image');
        $file10->setFilesTricks($this->getReference(TricksFixtures::NOSE_GRAB));
        $manager->persist($file10);
        
        $file11 = new Files();
        $file11->setFilesName('snow20.jpg');
        $file11->setFilesUrl('/snow20.jpg');
        $file11->setFilesType('image');
        $file11->setFilesTricks($this->getReference(TricksFixtures::SEA_BELT));
        $manager->persist($file11);
        
        $file12 = new Files();
        $file12->setFilesName('snow18.jpeg');
        $file12->setFilesUrl('/snow18.jpeg');
        $file12->setFilesType('image');
        $file12->setFilesTricks($this->getReference(TricksFixtures::TRUCK_DRIVER));
        $manager->persist($file12);
        
        $file13 = new Files();
        $file13->setFilesName('snow16.jpg');
        $file13->setFilesUrl('/snow16.jpg');
        $file13->setFilesType('image');
        $file13->setFilesTricks($this->getReference(TricksFixtures::ROTATION_360));
        $manager->persist($file13);
        
        $file14 = new Files();
        $file14->setFilesName('snow17.jpg');
        $file14->setFilesUrl('/snow17.jpg');
        $file14->setFilesType('image');
        $file14->setFilesTricks($this->getReference(TricksFixtures::ROTATION_180));
        $manager->persist($file14);
        
        $file15 = new Files();
        $file15->setFilesName('snow19.jpg');
        $file15->setFilesUrl('/snow19.jpg');
        $file15->setFilesType('image');
        $file15->setFilesTricks($this->getReference(TricksFixtures::JAPAN_AIR));
        $manager->persist($file15);
        
        $file16 = new Files();
        $file16->setFilesName('snow20.jpg');
        $file16->setFilesUrl('/snow20.jpg');
        $file16->setFilesType('image');
        $file16->setFilesTricks($this->getReference(TricksFixtures::JAPAN_AIR));
        $manager->persist($file16);
        
        $file17 = new Files();
        $file17->setFilesName('Best Of Snowboarding 2016! Part 1.');
        $file17->setFilesUrl('https://www.youtube.com/embed/o7OB24ACnVM');
        $file17->setFilesType('video');
        $file17->setFilesTricks($this->getReference(TricksFixtures::JAPAN_AIR));
        $manager->persist($file17);
        
        $file18 = new Files();
        $file18->setFilesName('mute3.jpg');
        $file18->setFilesUrl('/mute3.jpg');
        $file18->setFilesType('image');
        $file18->setFilesTricks($this->getReference(TricksFixtures::ROCKET_AIR));
        $manager->persist($file18);
        
        
        $file19 = new Files();
        $file19->setFilesName('How To Keep Your Weight Over The Top Of Your Board');
        $file19->setFilesUrl('https://www.youtube.com/embed/OghfDJ9Gk_E');
        $file19->setFilesType('video');
        $file19->setFilesTricks($this->getReference(TricksFixtures::ROCKET_AIR));
        $manager->persist($file19);
        
        $manager->flush();
    }
    
    public function getDependencies()
    {
        return array(
            TricksFixtures::class,
        );
    }
}