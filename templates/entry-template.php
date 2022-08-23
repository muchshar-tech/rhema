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
$rhema_bible_body = rhema()->bible()->getRaw();
?>
<bible-app id="bible-app">
<?php foreach ( $rhema_bible_body as $rhema_verse ) : ?>
	<span><?php echo $rhema_verse->text; ?></span>
<?php endforeach; ?>
</bible-app>
</main>
<?php
get_footer();
?>
