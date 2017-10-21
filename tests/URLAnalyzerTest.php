<?php 

declare(strict_types=1);

use DiegoBrocanelli\URL\Analyzer\Url as URLAnalyzer;
use PHPUnit\Framework\TestCase;

final class URLAnalyzerTest extends TestCase
{
    public function setUp()
    {
        $url = 'http://www.google.com/mail?user=fulano';

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
    public function testGetParamters(): void
    {
        $this->assertEquals( true, array_key_exists('user', $this->analyzer->getParamters()) );
        $this->assertEquals( 'fulano', $this->analyzer->getParamters()['user'] );
    }
}