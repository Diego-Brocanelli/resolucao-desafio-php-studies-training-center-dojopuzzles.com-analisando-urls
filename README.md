# Resolução do desafio do Grupo de Estudos PHP/POO do Training Center

[![Maintainability](https://api.codeclimate.com/v1/badges/d8d74fd06dd9e4f2f555/maintainability)](https://codeclimate.com/github/Diego-Brocanelli/resolucao-desafio-php-studies-training-center-dojopuzzles.com-analisando-urls/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b7f4394e9c024799b9efe6cf31c011e5)](https://www.codacy.com/app/Diego-Brocanelli/resolucao-desafio-php-studies-training-center-dojopuzzles.com-analisando-urls?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Diego-Brocanelli/resolucao-desafio-php-studies-training-center-dojopuzzles.com-analisando-urls&amp;utm_campaign=Badge_Grade)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/a35d4042-a05e-4e9b-ac73-1efb5057e557/big.png)](https://insight.sensiolabs.com/projects/a35d4042-a05e-4e9b-ac73-1efb5057e557)

## Desafio: Analisando URL

**Desrcição do desafio:**

Informado uma determinada URL, desenvolva um programa que indique se a URL é válida ou não e, caso seja válida, retorne as suas partes constituintes.

## Requisitos

- PHP7.1
- ext-dom
- ext-xdebug
    - Para coverage HTML.

## Uso

```php

<?php 

require_once __DIR__.'/vendor/autoload.php';

use DiegoBrocanelli\URL\URL;
use DiegoBrocanelli\URL\AnalyzerURL;

$url = new URL('http://www.diegobrocanelli.com.br/post?post=iniciando-com-composer');

$analyzer = new URLAnalyzer($url);

$analyzer->getProtocol();   // return: http 
$analyzer->getHost();       // return: wwww 
$analyzer->getDomain();     // return:  diegobrocanelli.com.br
$analyzer->getPath();       // return: /post
$analyzer->getParameters(); // return: ['post' => 'iniciando-com-composer'] 

```

## Documentação

**Gerar Documentação**

```
php docs/sami.phar update docs/config.php
```

### License - [MIT](https://github.com/Diego-Brocanelli/resolucao-desafio-php-studies-training-center-dojopuzzles.com-analisando-urls/blob/master/LICENSE)
