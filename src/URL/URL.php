<?php 

declare(strict_types=1);

namespace DiegoBrocanelli\URL;

use DiegoBrocanelli\URL\URLInterfaces;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
class URL implements URLInterface
{
    private $url;

    /**
     * @param string $urlString
     */
    public function __construct(string $urlString)
    {
        $this->url = $urlString;
    }

    /**
     * Return the protocol type
     *
     * @return string
     */
    public function getURL(): string
    {
        return $this->url;
    }
}