<?php


 session_start();

   if (isset($_POST['submit'])) {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $msg=$_POST['message'];
    
    $emailTo='dee@deefrostjewellery.com';
    $subject='Form Submission';
    $message='Name: '.$name . "\r\n\r\n" . 'Wrote the following: ' . "\r\n\r\n" . $msg;
    $headers='From: '.$email;
    
    if(mail($emailTo, $subject, $message, $headers)) {
      function TestBlockHTML ($replStr) {
        return <<<HTML
            <html>
            <body>
              <div class="something">
                <h1>{$replStr}</h1>
              </div>
            </body>
            </html>
HTML;
      }
    }
    
    else {
      echo 'Sorry, something went wrong';
    }
  }

?>

<html>
  
  <body>
    <div class='something'>
      <h1>thankyou for your message</h1>
      
    </div>
    
  </body>
  
</html>

<!--echo '<h3>Message sent! Thank you'.' '.$name.', We will contact you shortly!</h3>';-->
<!--      //header('location:https://test.carbiscourt.uk/index.html');-->
<!--      //header('http://thomaslloydtesthosting-com.stackstaging.com/index.php');-->