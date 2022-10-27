<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../assets/images/Logo.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="../css/signup.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>MangaNet</title>
</head>
<body>
    <div class="container">
        <div class="first-navbar">
            <div class="logo">
                <a href="index.html"><img src="../assets/images/Logo.png" width="70px"></a>
            </div>
        </div>
    </div>
    <hr>
    <main>
        <div id="signupWrapper">
            <section>
                <h1 id="signupTitle">Sign-Up</h1>
                <form action="include/signupInc.php" id="signupForm" method="post">
                    <?php
                        if(isset($_GET['uid'])) {
                            $username = $_GET['uid'];
                            echo '<input type="text" name="uid" id="username" placeholder="Username" value="'.$username.'">';
                        } else {
                            echo '<input type="text" name="uid" id="username" placeholder="Username">';
                        }
                    
                        if(isset($_GET['email'])) {
                            $email = $_GET['email'];
                            echo '<input type="text" name="email" id="email" placeholder="E-mail" value="'.$email.'">';
                        } else {
                            echo '<input type="text" name="email" id="email" placeholder="E-mail">';
                        }
                    ?>
                    
                    <input type="password" name="pwd" id="pwd" placeholder="Password">
                    <input type="password" name="pwdConfirmation" id="pwdConfirmation" placeholder="Password Confirmation">
                    <button type="submit" name="signupButton" id="signupButton">Sign-Up</button>

                    <?php
                        if(!isset($_GET['error'])) {
                            echo '';
                        } else {
                            if($_GET['error'] == 'emptyInput') {
                                echo '<br>*Make sure to fill in all the spaces';
                            } else if($_GET['error'] == 'invalidEmailAndInvalidUsername') {
                                echo '<br>*Make Sure your e-mail is a valid e-mail';
                                echo '<br>*Your username can only contain letters and numbers';
                            } else if($_GET['error'] == 'invalidEmail') {
                                echo '<br>*Make Sure your e-mail is a valid e-mail';
                            } else if($_GET['error'] == 'invalidUsername') {
                                echo '<br>*Your username can only contain letters and numbers';
                            } else if($_GET['error'] == 'checkPassword') {
                                echo '<br>*Make sure your password and password confirmation match';
                            } else if($_GET['error'] == 'usernameTakenAndEmailUsed') {
                                echo '<br>*This username has been taken';
                                echo '<br>*This e-mail already has an account';
                            } else if($_GET['error'] == 'usernameTaken') {
                                echo '<br>*This username has been taken';
                            } else if($_GET['error'] == 'emailUsed') {
                                echo '<br>*This e-mail already has an account';
                            }
                        }

                    ?>

                </form>
            </section>
        </div>
    </main>

    <?php
        require 'footer.php';
    ?>
</body>
</html>