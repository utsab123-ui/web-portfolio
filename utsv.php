<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if(empty($name) || empty($email) || empty($message)){
        echo "Please fill all fields";
    }
    else{

        $to = "your@email.com";
        $subject = "Portfolio Contact Message";

        $body = "
        Name: $name

        Email: $email

        Message:
        $message
        ";

        $headers = "From: $email";

        if(mail($to, $subject, $body, $headers)){
            echo "Message sent successfully!";
        }
        else{
            echo "Failed to send message.";
        }
    }
}

?>