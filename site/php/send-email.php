<?php
$errors = '';
$myemail = 'carlos@cyborgspider.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['phone'])  ||
   empty($_POST['interest']) ||
   empty($_POST['message'])

   )
{
    $errors .= "\n Error: all fields are required";
}

$name     = $_POST['name'];
$email    = $_POST['email'];
$phone    = $_POST['phone'];
$interest = $_POST['interest'];
$message  = $_POST['message'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
  $to = $myemail;
  $email_subject = "JJ Mural Website Message from $name";
  $email_body = "You have received a new message from your website. ".
  " Here are the details:\n Name: $name \n Email: $email \n Phone: $phone \n Interested About: $interest \n Message \n $message";

  $headers = "From: $myemail\n";
  $headers .= "Reply-To: $email";

  mail($to,$email_subject,$email_body,$headers);
  //redirect to the 'thank you' page
  header('Location: thanks.html');
}
?>
<!DOCTYPE HTML>
<html>
<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>
</body>
</html>