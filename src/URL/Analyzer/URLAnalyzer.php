<?php 

declare(strict_types=1);

namespace DiegoBrocanelli\URL\Analyzer;

use DiegoBrocanelli\Url\Url;
use DiegoBrocanelli\URL\Analyzer\URLAnalyzerInterface;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
class URLAnalyzer implements URLAnalyzerInterface
{
    protected $url;

    /**
     * @param string $urlString
     */
    public function __construct(URL $urlString)
    {
        $this->url = $urlString;
    }

    /**
     * Return the protocol type
     *
     * @return string
     */
    public function getProtocol(): string
    {

    }

    /**
     * return the host
     *
     * @return string
     */
    public function getHost(): string
    {

    }

    /**
     * return the domain
     *
     * @return string
     */
    public function getDomain(): string
    {

    }

    /**
     * return the path
     *
     * @return string
     */
    public function getPath(): string
    {

    }

    /**
     * return the parameters of url
     *
     * @return array
     */
    public function getParamters(): array
    {
        
    }
}