<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MangaNet</title>
        <link rel="icon" href="../assets/images/Logo.png" type="image/x-icon">
        <link rel="stylesheet" href="../css/ShoppingCart.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

        <script type="module" src="../js/ShoppingCart.js"></script>
    </head>

    <body>
        <?php
            require 'header.php';
        ?>

        <hr>

        <h1 id="cartTitle">Shopping Cart</h1>

        <div id="cartSection">

            <div class="productContainer">
                <div id="productHeader">
                    <h4 class="products">PRODUCT</h4>
                    <h4 class="productsPrice">PRICE</h4>
                    <h4 class="productsQuantity">QUANTITY</h4>
                    <h4 class="productsTotal">TOTAL</h4>
                </div>

                <div id="productBody">
                    <ul id="productList">
                        <!-- PRODUCTROW EXAMPLE TO TEST CSS -->
                        <!-- <div class="productRow">
                            <li class="productDesrciption">
                                <div class="product">
                                <div><button class="removeButton">X</button></div>
                                <div><img src="../assets/images/my-little-monster-11.jpg" alt='My Little Monster Vol 1'></div>
                                <div>My Little Monster Vol 1</div>
                                </div>
                                <div class="price">
                                    <span>RM 55.00</span>
                                </div>
                                <div class="quantity">
                                    <button class="decreaseButton">-</button>
                                    <span>1</span>
                                    <button class="increaseButton">+</button>
                                </div>
                                <div class="total">
                                    <span>RM55.00</span>
                                </div>
                            </li>
                        </div> -->
                    </ul>
                </div>
            </div>
            <div id="orderSummary-container">
                <div id="orderSummary">
                    <h2 id="orderSummaryTitle">Order Summary</h2>
                    <div id="totalItems">
                        <div id="totalItemsTitle">
                            Total Items:
                        </div>
                        <div id="totalItemsCount">
                            
                        </div>
                    </div>
                    <div id="subTotal">
                        <div id="subTotalTitle">
                            Subtotal:
                        </div>
                        <div id="subTotalCount">
                            
                        </div>
                    </div>
                </div>
                <div id="checkoutButton-wrapper">
                    <button id="checkoutButton">CHECKOUT</button>
                </div>
            </div>
            
        </div>

        <?php
            require 'footer.php';
        ?>
    </body>

</html>