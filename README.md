# Resolução do desafio do Grupo de Estudos PHP/POO do Training Center

[![Maintainability](https://api.codeclimate.com/v1/badges/d8d74fd06dd9e4f2f555/maintainability)](https://codeclimate.com/github/Diego-Brocanelli/resolucao-desafio-php-studies-training-center-dojopuzzles.com-analisando-urls/maintainability)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/6424e00b-3154-4716-bc25-03eec84e87dd/big.png)](https://insight.sensiolabs.com/projects/6424e00b-3154-4716-bc25-03eec84e87dd)

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
