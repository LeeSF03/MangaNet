<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="A website for manga ecommerce">
        <title>MangaNet</title>
        <link rel="icon" href="../assets/images/Logo.png" type="image/x-icon">
        <link rel="stylesheet" type="text/css" href="../css/index.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <script type="module" src="../js/index.js"></script>
    </head>

    <body>
        <?php
            require 'header.php';
        ?>
        
        <hr>
        
        <div class="container">
            <div class="second-navbar">
                <nav>
                    <ul>
                        <div><li><a href="#" class="navLink">All</a></li></div>
                        <div><li><a href="#" class="navLink">Shounen</a></li></div>
                        <div><li><a href="#" class="navLink">Shoujo</a></li></div>
                        <div><li><a href="#" class="navLink">Seinen</a></li></div>
                        <div><li><a href="#" class="navLink">Josei</a></li></div>
                    </ul>
                </nav>    
            </div>
        </div>
        
        <h1 id="PageTitle">All</h1>

        <div class="container">
            <ul id="MangaListDoc">

            </ul>
        </div>

        <?php
            require 'footer.php';
        ?>
    </body>
</html>