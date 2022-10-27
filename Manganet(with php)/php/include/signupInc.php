<?php
if(isset($_POST['signupButton'])) {

    require 'dbhInc.php';

    $username = $_POST['uid'];
    $email = $_POST['email'];
    $password = $_POST['pwd'];
    $passwordConfirmation = $_POST['pwdConfirmation'];

    if(empty($username) || empty($email) || empty($password) || empty($passwordConfirmation)) {
        header('Location: ../signupPage.php?error=emptyInput&uid='.$username.'&email='.$email);
        exit();
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match('/^[a-zA-Z0-9]*$/', $username)) {
        header('Location: ../signupPage.php?error=invalidEmailAndInvalidUsername');
        exit();
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: ../signupPage.php?error=invalidEmail&uid='.$username);
        exit();
    } else if(!preg_match('/^[a-zA-Z0-9]*$/', $username)) {
        header('Location: ../signupPage.php?error=invalidUsername&email='.$email);
        exit();
    } else if($password !== $passwordConfirmation) {
        header('Location: ../signupPage.php?error=checkPassword&uid='.$username.'&email='.$email);
        exit();
    } else {

        $sqlUid = 'SELECT uidUsers FROM users WHERE uidUsers=?;';
        $sqlEmail = 'SELECT emailUsers FROM users WHERE emailUsers=?;';
        $stmtUid = mysqli_stmt_init($conn);
        $stmtEmail = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmtUid, $sqlUid) || !mysqli_stmt_prepare($stmtEmail, $sqlEmail)) {
            header('Location: ../signupPage.php?error=sqlError');
        exit();
        } else {
            mysqli_stmt_bind_param($stmtUid, 's', $username);
            mysqli_stmt_execute($stmtUid);
            mysqli_stmt_store_result($stmtUid);
            $checkUidNumRow = mysqli_stmt_num_rows($stmtUid);

            mysqli_stmt_bind_param($stmtEmail, 's', $email);
            mysqli_stmt_execute($stmtEmail);
            mysqli_stmt_store_result($stmtEmail);
            $checkEmailNumRow = mysqli_stmt_num_rows($stmtEmail);
            if($checkUidNumRow > 0 && $checkEmailNumRow > 0) {
                header('Location: ../signupPage.php?error=usernameTakenAndEmailUsed');
                exit();
            } else if($checkUidNumRow > 0) {
                header('Location: ../signupPage.php?error=usernameTaken&email='.$email);
                exit();
            } else if($checkEmailNumRow > 0) {
                header('Location: ../signupPage.php?error=emailUsed&uid='.$username);
                exit();
            } else {
                $sql = 'INSERT INTO users (uidUsers, emailUsers, pwdUsers) VALUES (?, ?, ?);';
                $stmt = mysqli_stmt_init($conn);
                if(!mysqli_stmt_prepare($stmt, $sql)) {
                    header('Location: ../signupPage.php?error=sqlError');
                    exit();
                } else {
                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                    mysqli_stmt_bind_param($stmt, 'sss', $username, $email, $hashedPassword);
                    mysqli_stmt_execute($stmt);
                    header('Location: ../loginPage.php?signup=success');
                }
            }
        }
    }
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
    exit();

} else {
    header('Location: ../signupPage.php');
    exit();
}