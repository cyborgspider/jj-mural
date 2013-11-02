<?php
$to = 'carlos@cyborgspider.com';
if($_POST){
    $name     = $_POST['form-name'];
    $email    = $_POST['form-email'];
    $phone    = $_POST['form-phone'];
    $interest = $_POST['form-interest']
    $message  = $_POST['form-message'];

//send email
    $email_subject = "JJ Mural Website Message from $name";
    $email_body = "You have received a new message from your website. ".
    " Here are the details:\n Name: $name \n Email: $email \n Phone: $phone \n Interested About: $interest \n Message \n $message";
    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email";
    mail($to,$email_subject,$email_body,$headers);
}
?>