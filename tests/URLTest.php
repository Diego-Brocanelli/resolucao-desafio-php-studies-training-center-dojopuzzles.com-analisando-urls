<?php 

declare(strict_types=1);

use DiegoBrocanelli\URL\URL;
use PHPUnit\Framework\TestCase;

/**
 * @author Diego Brocanelli <diegod2@msn.com>
 */
final class URLTest extends TestCase
{
    const URL_STRING = 'http://www.diegobrocanelli.com.br';

    private $url;

    public function setUp()
    {
        $this->url = new URL(self::URL_STRING);
    }

    /**
     * Test get URL
     *
     * @return void
     */
    public function testGetURL(): void
    {
        $this->assertEquals(self::URL_STRING, $this->url->getURL());
    }

    /**
     * Test fail get url
     *
     * @expectedException InvalidArgumentException
     * @expectedExceptionMessage URL is required.
     * 
     * @return void
     */
    public function testFailGetURL()
    {
        $url = new URL('');
    }
}