<?php
	$config = array(
		'vk' => array(
			'client_id'     => '5357003',
			'client_secret' => 'PwCGFkwKDgft05o9ZHhI',
			'redirect_uri'  => 'http://'.$_SERVER['HTTP_HOST'].'/temp/vk.php'
		),
		'facebook' => array(
			'client_id'     => '197304350434005',
			'client_secret' => '270d99139f09400a6767e87016038ea6',
			'redirect_uri'  => 'http://'.$_SERVER['HTTP_HOST'].'/auth-facebook',
		),
		'odnoklassniki' => array(
			'client_id'     => '187414016',
			'client_secret' => 'CAE51FEF28E771EC829BAFD6',
			'redirect_uri'  => 'http://'.$_SERVER['HTTP_HOST'].'/auth-odnoklassniki',
			'public_key'    => 'CBAHLMCMABABABABA'
		),
		'mail' => array(
			'client_id'     => '707285',
			'client_secret' => 'fa89460869f396e0aaa81301c5714fd9',
			'redirect_uri'  => 'http://'.$_SERVER['HTTP_HOST'].'/auth-mail'
		),
		'google' => array(
			'client_id'     => '987178803795.apps.googleusercontent.com',
			'client_secret' => 'c3yQW6vzWHT_4DqKGh1Roafc',
			'redirect_uri'  => 'http://'.$_SERVER['HTTP_HOST'].'/auth-google'
		),
		'yandex' => array(
			'client_id'     => '03eca4c77e36455fab3f1c6bd184685f',
			'client_secret' => '6f694c50bdd2401c858e6ae2105eacb8',
			'redirect_uri'  => 'http://'.$_SERVER['HTTP_HOST'].'/auth-yandex'
		)
	);
?>
