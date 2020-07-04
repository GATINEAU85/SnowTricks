<?php 
namespace App\Form;

use App\Entity\Tricks;
use App\Entity\Group;
use App\Entity\Files;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class TricksType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('tricksName', TextType::class)
            ->add('tricksDescription', TextareaType::class)
            ->add('tricksGroupId', EntityType::class,[
                'label' => 'Group of tricks',
                'class' => Group::class,
                'choice_label' => 'groupName',
            ])
            ->add('tricksFiles', CollectionType::class, array(
                'label' => 'Insert files',
                'entry_type'   => ImageType::class,
                'allow_add'    => true,
                'allow_delete' => true
            ))
        ;
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Tricks::class,
        ]);
    }
}