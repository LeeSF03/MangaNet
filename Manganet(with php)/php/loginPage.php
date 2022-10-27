<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../assets/images/Logo.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="../css/login.css">
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
                <h1 id="loginTitle">Login</h1>
                <form action="include/loginInc.php" id="signupForm" method="post">
                    <input type="text" name="uidOrEmail" id="uidOrEmail" placeholder="Enter Username or Email">
                    <input type="password" name="pwd" id="pwd" placeholder="Password">
                    <button type="submit" name="loginButton" id="loginButton">Login</button>
                </form>
            </section>
        </div>
    </main>

    <?php
        require 'footer.php';
    ?>
</body>
</html>