<?php 

declare(strict_types=1);

namespace DiegoBrocanelli\Url;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
interface URLInterface
{
    /**
     * @param string $urlString
     */
    public function __construct(string $urlString);

    /**
     * Return the URL
     *
     * @return string
     */
    public function getURL(): string;
}