<?php 

declare(strict_types=1);

use DiegoBrocanelli\URL\URL;
use DiegoBrocanelli\URL\Analyzer\URLAnalyzer;
use PHPUnit\Framework\TestCase;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
final class URLAnalyzerTest extends TestCase
{
    public function setUp()
    {
        $url = new URL('http://www.google.com/mail?user=fulano');

        $this->analyzer = new URLAnalyzer($url);
    }

    /**
     * Test get protocol
     *
     * @return void
     */
    public function testGetProtocol(): void
    {
        $this->assertEquals( 'http', $this->analyzer->getProtocol() );
    }

    /**
     * Test get host
     *
     * @return void
     */
    public function testGetHost(): void
    {
        $this->assertEquals( 'www', $this->analyzer->getHost() );
    }

    /**
     * Test get domain
     *
     * @return void
     */
    public function testGetDomain(): void
    {
        $this->assertEquals( 'google.com', $this->analyzer->getDomain() );
    }

    /**
     * Test get host
     *
     * @return void
     */
    public function testGetPath(): void
    {
        $this->assertEquals( '/mail', $this->analyzer->getPath() );
    }

    /**
     * Test get host
     *
     * @return void
     */
    public function testGetParameters(): void
    {
        $this->assertEquals( true, array_key_exists('user', $this->analyzer->getParameters()) );
        $this->assertEquals( 'fulano', $this->analyzer->getParameters()['user'] );
    }

    /**
     * Test host ssh
     *
     * @return void
     */
    public function testSSHHost(): void
    {
        $url = new Url('http://ssh.google.com/mail?user=fulano');
        
        $analyzer = new URLAnalyzer($url);

        $this->assertEquals('ssh', $analyzer->getHost());
    }

    /**
     * Test undefind host
     *
     * @return void
     */
    public function testUndefinedHost()
    {
        $url = new Url('http://google.com/mail?user=fulano');
        
        $analyzer = new URLAnalyzer($url);

        $this->assertEquals('undefined', $analyzer->getHost());
    }

    /**
     * Test empty host
     *
     * @return void
     */
    public function testEmptyHost()
    {
        $url = new Url('google.com/mail?user=fulano');
        
        $analyzer = new URLAnalyzer($url);

        $this->assertEquals('', $analyzer->getHost());
    }

    /**
     * Test empty host
     *
     * @return void
     */
    public function testEmptyParameters()
    {
        $url = new Url('http://www.google.com/mail');
        
        $analyzer = new URLAnalyzer($url);

        $this->assertEquals([], $analyzer->getParameters());
    }

    /**
     * Test empty path
     *
     * @return void
     */
    public function testEmptyPath()
    {
        $url = new Url('http://www.google.com');
        
        $analyzer = new URLAnalyzer($url);

        $this->assertEquals('', $analyzer->getPath());
    }

    /**
     * Test empty domain
     *
     * @return void
     */
    public function testEmptyDomain()
    {
        $url = new Url('http://');
        
        $analyzer = new URLAnalyzer($url);

        $this->assertEquals('', $analyzer->getDomain());
    }
}