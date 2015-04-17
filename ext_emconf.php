<?php

$EM_CONF[$_EXTKEY] = array(
   'title' => 'fluidbox',
   'description' => '',
   'category' => 'fe',
   'author' => 'BERGWERK [DV]',
   'author_email' => 'dv@bergwerk.ag',
   'author_company' => 'BERGWERK',
   'shy' => 0,
   'priority' => 'top',
   'module' => '',
   'state' => 'stable',
   'internal' => 0,
   'uploadfolder' => '0',
   'createDirs' => '',
   'modify_tables' => '',
   'clearCacheOnLoad' => 0,
   'lockType' => '',
   'version' => '1.0.0',
   'constraints' => array(
      'depends' => array(
         'extbase' => '6.0',
         'fluid' => '6.0',
         'typo3' => '6.0',
      ),
      'conflicts' => array(),
      'suggests' => array(),
   ),
);