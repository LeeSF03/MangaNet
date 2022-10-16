class inCartItem {
    constructor() {
    }

    getItemQuantity() {
        let mangasQuantity = 0;
        for (let i=0; i < localStorage.length; i++) {
            let mangaQuantity = parseInt(localStorage.getItem(localStorage.key(i)));
            mangasQuantity = mangasQuantity + mangaQuantity;
        }

        //try to seperate this into two different function for ordersummary total items and cart number
        console.log(mangasQuantity);
        document.getElementById('cartQuantityNumber').innerHTML = mangasQuantity;
        let totalItemsInOrderSum = document.getElementById('totalItemsCount')
        if(totalItemsInOrderSum) {
            totalItemsInOrderSum.innerHTML = mangasQuantity;
        }
    }

    getItemsFromLocalStorage() {
        let cartList = ``;
        if (localStorage.length == 0) {
            cartList += `<h1>Your Cart Is Empty!</h1>`; //remember to replace with an image
        } else {
            for(let i=0; i < localStorage.length; i++) {
                let manga = JSON.parse(localStorage.key(i));
                cartList += 
                `<div class="productRow">
                <li class="productDesrciption">
                    <div class="product">
                        <div><button class="removeButton">x</button></div>
                        <div><img src="../assets/images/${manga.img}" alt=${manga.title}></div>
                        <div>${manga.title}</div>
                    </div>
                    <div class="price">
                        <span>RM ${parseFloat(manga.price).toFixed(2)}</span>
                    </div>
                    <div class="quantity">
                        <button class="decreaseButton">-</button>
                        <span>${localStorage.getItem(localStorage.key(i))}</span>
                        <button class="increaseButton">+</button>
                    </div>
                    <div class="total">
                        <span>RM ${parseFloat(manga.price * parseInt(localStorage.getItem(localStorage.key(i)))).toFixed(2)}</span>
                    </div>
                </li>
                </div>`;
            }
        }

        document.getElementById('productList').innerHTML = cartList;
    }

    getSubTotal() {
        let subTotal = document.getElementById('subTotalCount');
        let subTotalPrice = 0;
        for(let i=0; i < localStorage.length; i++) {
            let manga = JSON.parse(localStorage.key(i))
            subTotalPrice += manga.price*parseInt(localStorage.getItem(localStorage.key(i)));
        }
        console.log("Subtotal is " + subTotalPrice);
        subTotal.innerHTML = `RM ${parseFloat(subTotalPrice).toFixed(2)}`;
    }

}

export default inCartItem;