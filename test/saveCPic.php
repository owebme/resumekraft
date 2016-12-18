<?php
	require('fpdf.php');
	
	$png = 'example.png';
	file_put_contents($png, base64_decode($_POST['data']));
	
	$gif = imagecreatefrompng($png);
	imagegif($gif, 'example.gif');
	imagedestroy($gif);	
	
	$pdf = new FPDF('P', 'pt', array(1218,2218));
	$pdf->SetDisplayMode('real','default');
	$pdf->SetAuthor('ResumeKraft');
	$pdf->SetTitle('Юртаев Александр');
	$pdf->Image('example.gif');
	$pdf->Output('example.pdf','F');

	echo $file;
	
?>