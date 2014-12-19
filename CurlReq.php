<?php

function makerequest(url){
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_URL, $ws_url);

	$content = curl_exec($ch);

	//convert json to associative array
	$json = json_decode( $content );
	curl_close($ch);
	return $json;
}
?>
