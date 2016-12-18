<?php

if(!empty($_POST['image']) && $_POST['image'] && $_COOKIE['slhr_uid'] == $_POST['HRAuth']){

	require('lib/fpdf.php');
	
	$resume = time();
	$name = '../files/resumes/'.$resume; 
	$png = $name.'.png';
	file_put_contents($png, base64_decode($_POST['image']));
	
	$size = getimagesize($png);
	
	$image = $name.'.gif';	
	if (class_exists('Imagick')){
		$imagick = new Imagick();
		$imagick->readImage($png);
		$imagick->setImageFormat('GIF');
		$imagick->writeImage($image);
		$imagick->destroy();
	}
	else {
		$gif = imagecreatefrompng($png);
		imagegif($gif, $image);
		imagedestroy($gif);
	}
	
	$pdf = new FPDF('P', 'pt', array($size[0], $size[1]));
	$pdf->SetDisplayMode('real','default');
	$pdf->SetAuthor('ResumeKraft');
	#$pdf->SetTitle($_POST['surname'].' '.$_POST['name']);
	$pdf->Image($image);
	$pdf->Output($name.'.pdf','F');
	
	$filesize = filesize($name.'.pdf');

	if ($filesize < 10240){
		echo 'resources';
	}
	else {
		echo '/files/resumes/'.$resume.'.pdf';
	}
	
	unlink($name.'.png');
	unlink($name.'.gif');	
	
	require('lib/db.php');
	
	$sendmail = $_POST['sendmail'];
	
	mysql_query("INSERT INTO `users_events` (`uid`, `rid`, `event`, `size`, `note`, `ua`, `date_event`) VALUES(
	'".$_POST['HRAuth']."',
	".($_POST['rid'] > 0?"'".$_POST['rid']."'":"NULL").",
	'".($sendmail?"sendmail":"save_pdf")."',
	'".$filesize."',
	'".($sendmail?"".$sendmail."":"".$resume.".pdf")."',
	'".$_SERVER['HTTP_USER_AGENT']."',
	NOW()
	)");
	
}
	
?>