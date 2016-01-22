<?php

if (!defined('TYPO3_MODE')) die ('Access denied.');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/', 'BERGWERK Fluidbox 6.2');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/7.6_FluidStyledContent/', 'BERGWERK Fluidbox 7.6 [fluid_styled_content]');