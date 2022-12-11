<?php

    $formSub=$_POST['con_sub'];
    $formMess=$_POST['con_message'];
    $mailFrom=$_POST['con_email'];

    $to = "kholilibrahim4@gmail.com";
    $subject = $formSub;
    $txt = $formMess;
    $headers = $mailFrom;

    

    if(mail($to,$subject,$txt,$headers)){
        echo "<h1>Your message has been sent</h1>";
    }
    else{
        echo "<h1>Error</h1>";
    }
?>