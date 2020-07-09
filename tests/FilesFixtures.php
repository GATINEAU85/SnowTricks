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
        $file1Tricks = $manager->getRepository(Tricks::class)->find(1);
        $file1->setFilesTricks($file1Tricks);
        $manager->persist($file1);
        
        $file2 = new Files();
        $file2->setFilesName('mute3.jpg');
        $file2->setFilesUrl('/mute3.jpg');
        $file2->setFilesType('image');
        $file2Tricks = $manager->getRepository(Tricks::class)->find(1);
        $file2->setFilesTricks($file2Tricks);
        $manager->persist($file2);
        
        $file3 = new Files();
        $file3->setFilesName('snow3.jpeg');
        $file3->setFilesUrl('/snow3.jpeg');
        $file3->setFilesType('image');
        $file3Tricks = $manager->getRepository(Tricks::class)->find(1);
        $file3->setFilesTricks($file3Tricks);
        $manager->persist($file3);
        
        $file4 = new Files();
        $file4->setFilesName('snow4.jpeg');
        $file4->setFilesUrl('/snow4.jpeg');
        $file4->setFilesType('image');
        $file4Tricks = $manager->getRepository(Tricks::class)->find(1);
        $file4->setFilesTricks($file4Tricks);
        $manager->persist($file4);
        
        $file5 = new Files();
        $file5->setFilesName('snow5.jpeg');
        $file5->setFilesUrl('/snow5.jpeg');
        $file5->setFilesType('image');
        $file5Tricks = $manager->getRepository(Tricks::class)->find(2);
        $file5->setFilesTricks($file5Tricks);
        $manager->persist($file5);
        
        $file6 = new Files();
        $file6->setFilesName('snow6.jpeg');
        $file6->setFilesUrl('/snow6.jpeg');
        $file6->setFilesType('image');
        $file6Tricks = $manager->getRepository(Tricks::class)->find(3);
        $file6->setFilesTricks($file6Tricks);
        $manager->persist($file6);
        
        $file7 = new Files();
        $file7->setFilesName('snow12.jpg');
        $file7->setFilesUrl('/snow12.jpg');
        $file7->setFilesType('image');
        $file7Tricks = $manager->getRepository(Tricks::class)->find(4);
        $file7->setFilesTricks($file7Tricks);
        $manager->persist($file7);
        
        $file8 = new Files();
        $file8->setFilesName('snow13.jpg');
        $file8->setFilesUrl('/snow13.jpg');
        $file8->setFilesType('image');
        $file8Tricks = $manager->getRepository(Tricks::class)->find(5);
        $file8->setFilesTricks($file8Tricks);
        $manager->persist($file8);
        
        $file9 = new Files();
        $file9->setFilesName('GoPro: Alaskan Playground with John Jackson');
        $file9->setFilesUrl('https://www.youtube.com/embed/1TJ08caetkw');
        $file9->setFilesType('video');
        $file9Tricks = $manager->getRepository(Tricks::class)->find(5);
        $file9->setFilesTricks($file9Tricks);
        $manager->persist($file9);
        
        $file10 = new Files();
        $file10->setFilesName('snow14.jpg');
        $file10->setFilesUrl('/snow14.jpg');
        $file10->setFilesType('image');
        $file10Tricks = $manager->getRepository(Tricks::class)->find(5);
        $file10->setFilesTricks($file10Tricks);
        $manager->persist($file10);
        
        $file11 = new Files();
        $file11->setFilesName('snow20.jpg');
        $file11->setFilesUrl('/snow20.jpg');
        $file11->setFilesType('image');
        $file11Tricks = $manager->getRepository(Tricks::class)->find(6);
        $file11->setFilesTricks($file11Tricks);
        $manager->persist($file11);
        
        $file12 = new Files();
        $file12->setFilesName('snow18.jpeg');
        $file12->setFilesUrl('/snow18.jpeg');
        $file12->setFilesType('image');
        $file12Tricks = $manager->getRepository(Tricks::class)->find(7);
        $file12->setFilesTricks($file12Tricks);
        $manager->persist($file12);
        
        $file13 = new Files();
        $file13->setFilesName('snow16.jpg');
        $file13->setFilesUrl('/snow16.jpg');
        $file13->setFilesType('image');
        $file13Tricks = $manager->getRepository(Tricks::class)->find(8);
        $file13->setFilesTricks($file13Tricks);
        $manager->persist($file13);
        
        $file14 = new Files();
        $file14->setFilesName('snow17.jpg');
        $file14->setFilesUrl('/snow17.jpg');
        $file14->setFilesType('image');
        $file14Tricks = $manager->getRepository(Tricks::class)->find(9);
        $file14->setFilesTricks($file14Tricks);
        $manager->persist($file14);
        
        $file15 = new Files();
        $file15->setFilesName('snow19.jpg');
        $file15->setFilesUrl('/snow19.jpg');
        $file15->setFilesType('image');
        $file15Tricks = $manager->getRepository(Tricks::class)->find(10);
        $file15->setFilesTricks($file15Tricks);
        $manager->persist($file15);
        
        $file16 = new Files();
        $file16->setFilesName('Mute');
        $file16->setFilesUrl('/');
        $file16->setFilesType('image');
        $file16Tricks = $manager->getRepository(Tricks::class)->find(10);
        $file16->setFilesTricks($file16Tricks);
        $manager->persist($file16);
        
        $file17 = new Files();
        $file17->setFilesName('Best Of Snowboarding 2016! Part 1.');
        $file17->setFilesUrl('https://www.youtube.com/embed/o7OB24ACnVM');
        $file17->setFilesType('video');
        $file17Tricks = $manager->getRepository(Tricks::class)->find(10);
        $file17->setFilesTricks($file17Tricks);
        $manager->persist($file17);
        
        $file18 = new Files();
        $file18->setFilesName('mute3.jpg');
        $file18->setFilesUrl('/mute3.jpg');
        $file18->setFilesType('image');
        $file18Tricks = $manager->getRepository(Tricks::class)->find(10);
        $file18->setFilesTricks($file18Tricks);
        $manager->persist($file18);
        
        
        $file19 = new Files();
        $file19->setFilesName('How To Keep Your Weight Over The Top Of Your Board');
        $file19->setFilesUrl('https://www.youtube.com/embed/OghfDJ9Gk_E');
        $file19->setFilesType('video');
        $file19Tricks = $manager->getRepository(Tricks::class)->find(11);
        $file19->setFilesTricks($file19Tricks);
        $manager->persist($file19);
        
        $manager->flush();

        $this->addReference($file1, $file2, $file3, $file4, $file5, $file6, $file7, $file8, $file9, $file10, $file11, $file12, $file13, $file14, $file15, $file16, $file17, $file18, $file19);
    }
    
    public function getDependencies()
    {
        return array(
            TricksFixtures::class,
        );
    }
}