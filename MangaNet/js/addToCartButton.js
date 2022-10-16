import inCartItem from './inCartItem.js';

var cartItem = new inCartItem();

class addToCartButton{
    constructor (mangaArray) {
        this.mangaArray = mangaArray;
    }

    cartButtons;

    setButtonsToDisabled() {
        for (let i = 0; i < this.mangaArray.length; i++) {
            if (this.mangaArray[i].stock == 0) {
                document.getElementsByClassName('addToCartButton')[i].disabled = true;
                let displayedItem = document.getElementsByClassName('displayedItems')[i].getElementsByTagName('li')[0];
                let span = document.createElement('span');
                let oos = document.createTextNode('*Out of Stock');
                span.appendChild(oos);
                displayedItem.appendChild(span);
            }
        }
    }
    
    addButtonListener() {
        this.cartButtons = document.querySelectorAll(' .addToCartButton');
        console.log(this.cartButtons);
        for (let i=0; i < this.cartButtons.length; i++) {
            this.cartButtons[i].addEventListener('click', () => {
                this.addToLocalStorage(this.mangaArray[i]);
                cartItem.getItemQuantity();
                console.log(this.mangaArray[i], this.mangaArray[i].title + ' has been added to cart');
            })
        }
    }

    addToLocalStorage(manga) {
        let mangaString = JSON.stringify(manga);
        let inCartItemQuantity = parseInt(localStorage.getItem(mangaString));

        if (inCartItemQuantity) {
            localStorage.setItem(mangaString, inCartItemQuantity + 1);
        } else {
            localStorage.setItem(mangaString, 1);
        }
    }

}

export { addToCartButton };