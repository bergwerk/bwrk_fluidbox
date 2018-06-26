<?php

$EM_CONF[$_EXTKEY] = array(
    'title' => 'Fluidbox',
    'description' => 'This extension adds the Fluidbox from Terry Mun to your TYPO3',
    'category' => 'fe',
    'author' => 'BERGWERK',
    'author_email' => 'technik@bergwerk.ag',
    'author_company' => 'BERGWERK Werbeagentur GmbH',
    'state' => 'stable',
    'version' => '1.2.2',
    'constraints' => array(
        'depends' => array(
            'typo3' => '6.2.0-7.6.0'
        ),
        'conflicts' => array(
            'bwrk_monsterkill' => '3.3.0'
        ),
        'suggests' => array()
    )
);