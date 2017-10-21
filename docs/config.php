<?php

use Sami\Sami;
use Symfony\Component\Finder\Finder; 
 
$iterator = Finder::create()
   ->files()
   ->name('*.php')// todos os arquivos .php
   ->in(__DIR__.'/../src'); // local onde deverá realizar a verificação.
 
$configuration = [
    'theme'     => 'default',
    'title'     => 'Documentação URL Analyzer', // Título que será exibido na view HTML
    'build_dir' => __DIR__.'/build', 
    'cache_dir' => __DIR__.'/cache',
];
 
return new Sami($iterator, $configuration);