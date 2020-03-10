<?php
    
    $to_email = $_POST['to_email'];
	$subject = "trueAct.task: " . $_POST['queue'];
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
	$headers = "From: " . $_POST['username'] . "@pidas.com\r\n";
	$headers .= "Content-Type: text; charset=utf-8\r\n";
	// call mail function
	$success = mail($to_email,$subject,$message,$headers);
	// if success == true return "success" otherwise "invalid"
	if($success) {
		echo "success";
	} else {
		echo "invalid";
	}

// 	require "../vendor/autoload.php";

// 	$robo = 'robot@example.com';

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;


// $developmentMode = true;
// $mailer = new PHPMailer($developmentMode);
// $mailer->CharSet = "UTF-8";

// try {
//     $mailer->SMTPDebug = 2;
//     $mailer->isSMTP();

//     if ($developmentMode) {
//     $mailer->SMTPOptions = [
//         'ssl'=> [
//         'verify_peer' => false,
//         'verify_peer_name' => false,
//         'allow_self_signed' => true
//         ]
//     ];
//     }


//     $mailer->Host = 'outlook.office365.com';
//     $mailer->SMTPAuth = true;
//     $mailer->Username = 'vtask@pidas.com';
//     $mailer->Password = 'hR-CI?NtQnfm!UtCveMjBCq';
//     $mailer->SMTPSecure = 'tls';
// 	$mailer->Port = 587;
// 	$mailer->Mailer = "mail";

//     $mailer->setFrom('vtask@pidas.com', 'VTASK');
//     $mailer->addAddress($_POST['to_email']);

//     $mailer->isHTML(false);
// 	$mailer->Subject = "VTASK-Formular für " . $_POST['queue'];
// 	$message =  "vorname: " . $_POST['vorname'] . "\n";
// 	$message .= "nachname: " . $_POST['nachname'] . "\n";
// 	$message .= "contact_tel: " . $_POST['contact_tel'] . "\n";
// 	$message .= "contact_email: " . $_POST['contact_email'] . "\n";
// 	$message .= "ticketnr: " . $_POST['ticketnr'] . "\n";	
// 	$message .= "nachricht: " . $_POST['nachricht'] . "\n";
// 	$message .= "queue: " . $_POST['queue'] . "\n";
// 	$message .= "datetime: " . $_POST['datetime'] . "\n";
// 	$message .= "user: " . $_POST['username'] . "\n";
//     $mailer->Body = $message;

//     $mailer->send();
//     $mailer->ClearAllRecipients();
//     echo "success";

// } catch (Exception $e) {
//     echo "invalid";
// }

?>