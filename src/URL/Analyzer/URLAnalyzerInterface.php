<?php 

declare(strict_types=1);

namespace DiegoBrocanelli\Url\Analyzer;

use DiegoBrocanelli\Url\Url;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
interface URLAnalyzerInterface
{
    /**
     * @param string $urlString
     */
    public function __construct(URL $url);

    /**
     * Return the protocol type
     *
     * @return string
     */
    public function getProtocol(): string;

    /**
     * return the host
     *
     * @return string
     */
    public function getHost(): string;

    /**
     * return the domain
     *
     * @return string
     */
    public function getDomain(): string;

    /**
     * return the path
     *
     * @return string
     */
    public function getPath(): string;

    /**
     * return the parameters of url
     *
     * @return array
     */
    public function getParameters(): array;
}
