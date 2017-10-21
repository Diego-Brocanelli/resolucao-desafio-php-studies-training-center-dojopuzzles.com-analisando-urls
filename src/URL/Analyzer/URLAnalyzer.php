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
    public function __construct(URL $url)
    {
        $this->url = parse_url( $url->getURL() );
    }

    /**
     * Return the protocol type
     *    - HTTP or HTTPS
     * 
     * @return string
     */
    public function getProtocol(): string
    {
        return $this->url['scheme'];
    }

    /**
     * return the host
     *
     * @return string
     */
    public function getHost(): string
    {
        if(!array_key_exists('host', $this->url)){
            return '';
        }

        $domain = $this->url['host'];
        
        $www = '/www/';
        if(preg_match($www, $domain)){
            return 'www';
        }
        
        $ssh = '/ssh/';
        if(preg_match($ssh, $domain)){
            return 'ssh';
        }

        return 'undefined';
    }

    /**
     * return the domain
     *
     * @return string
     */
    public function getDomain(): string
    {
        if(!filter_var('http://'.$this->url['host'], FILTER_VALIDATE_URL)){
            return '';
        }

        return str_replace('www.', '', $this->url['host']);
    }

    /**
     * return the path
     *
     * @return string
     */
    public function getPath(): string
    {
        if(!array_key_exists('path', $this->url)){
            return '';
        }

        return str_replace('www.', '', $this->url['path']);
    }

    /**
     * return the parameters of url
     *
     * @return array
     */
    public function getParameters(): array
    {
        if(!array_key_exists('query', $this->url)){
            return [];
        }

        $query = $this->url['query'];

        parse_str($query, $parameters);

        return $parameters;
    }
}