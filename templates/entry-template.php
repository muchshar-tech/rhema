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

<?php
get_template_part( 'header' );
/**
 * @see \Rhema\App\Frontend\Templates
 * @var $args
 */
$rhema_bible_title = rhema()->bible()->generateQueryText();
$rhema_bible_body = rhema()->bible()->getInitialRaw();
if ( is_wp_error( $rhema_bible_body ) ) {
	$rhema_bible_body = [];
}
?>
<!-- wp:template-part {"slug":"header","tagName":"header","className":"site-header"} /-->
	<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
		<!-- wp:post-template {"align":"wide"} -->
<bible-app id="bible-app">
<article>
<?php if ( ! empty( $rhema_bible_title ) ) : ?>
	<h3><?php echo $rhema_bible_title; ?></h3>
<?php endif; ?>
<?php foreach ( $rhema_bible_body as $rhema_verse ) : ?>
	<span><?php echo $rhema_verse['text']; ?></span>
<?php endforeach; ?>
</article>
</bible-app>
		<!-- /wp:post-template -->
	<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer","className":"site-footer"} /-->
<?php
get_template_part( 'footer' );
?>
