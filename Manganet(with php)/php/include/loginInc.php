<?php
if(isset($_POST['loginButton'])) {

    require 'dbhInc.php';

    $usernameOrEmail = $_POST['uidOrEmail'];
    $password = $_POST['pwd'];

    if(empty($usernameOrEmail) || empty($password)) {
        header('Location: ../loginPage.php?error=emptyInput&uidOrEmail='.$usernameOrEmail);
        exit();
    } else {
        $sqlPwdCheck = 'SELECT * FROM users WHERE uidUsers=? OR emailUsers=?;';
        $stmtPwdCheck = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmtPwdCheck, $sqlPwdCheck)) {
            header('Location: ../loginPage.php?error=sqlError');
            exit();
        } else {
            mysqli_stmt_bind_param($stmtPwdCheck, 'ss', $usernameOrEmail, $usernameOrEmail);
            mysqli_stmt_execute($stmtPwdCheck);
            $result = mysqli_stmt_get_result($stmtPwdCheck);
            if($row = mysqli_fetch_assoc($result)) {
                $checkPassword = password_verify($password, $row['pwdUsers']);
                if($checkPassword == false) {
                    header('Location: ../loginPage.php?error=noUser');
                    exit();
                } else if($checkPassword == true) {
                    session_start();
                    $_SESSION['uidUser'] = $row['uidUsers'];
                    $_SESSION['idUser'] = $row['idUsers'];
                    header('Location: ../index.php?login=success');
                    exit();
                } else {
                    header('Location: ../loginPage.php?error=noUser');
                    exit();
                }
            } else {
                header('Location: ../loginPage.php?error=noUser');
                exit();
            }
        }
    }

} else {
    header('Location: ../loginPage.php');
    exit();
}