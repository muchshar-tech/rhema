<?php

declare( strict_types = 1 );

foreach ( [
	'assets\\public\\',
	'languages\\',
	'src\\',
	'templates\\',
	'vendor\\',
	'README.md',
	'rhema.php',
] as $rhema__prod_s ) {
	$prod_source = __DIR__ . '\\' . $rhema__prod_s;
	$prod_destination = __DIR__ . '\\publish\\rhema\\' . $rhema__prod_s;
	
	if ( is_file( $prod_source ) ) {
		exec("copy $prod_source $prod_destination");
	}
	exec("xcopy $prod_source $prod_destination /s /i");
}
