<?php

//----------------------------------infos form
  
  $name = $_POST['name'];
  $message = $_POST['message'];
  $visitor_email = $_POST['email'];

  //----------------------------------recaptcha

  function reCaptcha($recaptcha){
    $secret = "6LcoT94ZAAAAAHAgn-0mD2XUmS2E-hEvFlFlbYzo";
    $ip = $_SERVER['REMOTE_ADDR'];
  
    $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
    $data = curl_exec($ch);
    curl_close($ch);
  
    return json_decode($data, true);
  }

//----------------------------------mail
  $email_from='contact@gregoiretinn.es';
  $email_subject=$_POST['subject'];;
  $email_body="Nom : $name

Email : $visitor_email

Message :
$message";

  $receiving_email = 'gregoire.tinnes@gmail.com';
  $headers = "From: $email_from\r\n";
  $headers .= "Reply-To: $visitor_email\r\n";

  //----------------------------------évite injection de code  
  
  function IsInjected($str)
  {
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  if(IsInjected($visitor_email))
  {
      echo "Bad email value!";
      exit;
  }

//----------------------------------envoi du mail et verif captcha

$recaptcha = $_POST['g-recaptcha-response'];
$res = reCaptcha($recaptcha);
if($res['success']){
  //send mail
  if(mail($receiving_email,$email_subject,$email_body,$headers)){}else {exit;}
}else{
  // Error
  echo "<div class='error-message sent-message'>Votre message n'a pas pu être envoyé :(</div>";
  exit;
}

?>