<header>
        <div class="container">
            <div class="first-navbar">
                <div class="logo">
                    <a href="index.php"><img src="../assets/images/Logo.png" width="70px"></a>
                </div>
                <div id="searchbarWrapper">
                    <form action="" id="searchbarForm">
                        <input type="text" name="searchbar" id="searchbar" placeholder="Search...">
                        <button type="submit" name="searchButton" id="searchButton"><img src="../assets/images/search.png" alt=""></button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <?php
                            if(isset($_SESSION['uidUser'])) {
                                $username = $_SESSION['uidUser'];
                                echo '<li><a id="account" href="">'.$username.'</a></li>';
                                echo 
                                    '<li>
                                        <form action="include/logoutInc.php" method="post">
                                            <button name="logoutButton" type="submit" id="logout">Logout</button>
                                        </form>
                                    </li>';
                            } else {
                                echo 
                                    '<li><a id="signUp" href="signUpPage.php">Sign-Up</a></li>
                                    <li><a id="login" href="loginPage.php">Login</a></li>';
                            }
                        ?>
                    </ul>
                </nav>
                <a href="ShoppingCart.php"><img id="cart" src="../assets/images/cart.png" width="30px"></a>
                <span id="cartQuantityNumber">0</span>
            </div>
        </div>
    </header>