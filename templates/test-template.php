<?php
/**
 * Rhema
 *
 * @package   rhema
 * @author    TXIpartners <jive.cheng@txipartners.com>
 * @copyright 2022 Rhema
 * @license   MIT
 * @link      https://txipartners.com
 */
?>
<p>
    <?php
    /**
     * @see \Rhema\App\Frontend\Templates
     * @var $args
     */
    echo __( 'This is being loaded inside "wp_footer" from the templates class', 'rhema' ) . ' ' . $args[ 'data' ][ 'text' ];
    ?>
</p>
