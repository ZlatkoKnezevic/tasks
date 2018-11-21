<?php

	$to_email = $_POST['to_email'];
	$subject = "tA tasks test mail" . $_POST['queue'];
	$message =  "vorname: " . $_POST['vorname'] . "\n";
	$message .= "nachname: " . $_POST['nachname'] . "\n";
	$message .= "contact_tel: " . $_POST['contact_tel'] . "\n";
	$message .= "contact_email: " . $_POST['contact_email'] . "\n";
	$message .= "ticketnr: " . $_POST['ticketnr'] . "\n";	
	$message .= "nachricht: " . $_POST['nachricht'] . "\n";
	$message .= "queue: " . $_POST['queue'] . "\n";
	$message .= "datetime: " . $_POST['datetime'] . "\n";
	$message .= "user: " . $_POST['username'] . "\n";
	error_log("Sending the following message: ");
	error_log($message);
	$headers = "From: tasks@pidas.com\r\n";
	$headers .= "Content-Type: text; charset=utf-8\r\n";
	// call mail function
	$success = mail($to_email,$subject,$message,$headers);
	// if success == true return "success" otherwise "invalid"
	if($success) {
		echo "success";
	} else {
		echo "invalid";
	}
?>