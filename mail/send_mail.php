<?php

########### CONFIG ###############

$recipient = 'kontakt@christian-hansen.dev'; # Bitte hier deine E-Mail angeben
$redirect = 'success.html';

########### CONFIG END ###########



########### Instruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;

        $subject = "Contact From " . $_POST['name'];
        $headers = "From:  kontakt@christian-hansen.dev";

        $message = "There is a new request from www.christian-hansen.dev:\r\n";
        $message .= "Name: " . $_POST['name'] . "\r\n";
        $message .= "Email: " . $_POST['email'] . "\r\n";
        $message .= "Message: " . $_POST['message'] . "\r\n";
        $message .= "Don't forget to answer.\r\n";

        mail($recipient, $subject, $message, $headers);
        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
