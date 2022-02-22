<?php

//----------------------------------infos form
  
  $name = $_POST['name'];
  $message = $_POST['message'];
  $visitor_email = $_POST['email'];

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

//----------------------------------envoi du mail

if(mail($receiving_email,$email_subject,$email_body,$headers)){}else {exit;}
?>