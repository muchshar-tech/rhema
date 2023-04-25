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
/**
 * @see \Rhema\App\Frontend\Templates
 * @var $args
 */
get_header();
$rhema_bible_body = rhema()->bible()->getInitialRaw();
if ( is_wp_error( $rhema_bible_body ) ) {
	$rhema_bible_body = [];
}
?>
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
	<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
		<!-- wp:post-template {"align":"wide"} -->
<bible-app id="bible-app">
<?php foreach ( $rhema_bible_body as $rhema_verse ) : ?>
	<span><?php echo $rhema_verse['text']; ?></span>
<?php endforeach; ?>
</bible-app>
		<!-- /wp:post-template -->
	<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
<?php
get_footer();
?>
