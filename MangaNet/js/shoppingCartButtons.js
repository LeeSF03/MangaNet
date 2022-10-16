import inCartItem from "./inCartItem.js";
var inCart = new inCartItem();

class shoppingCartButtons {
    constructor() {

    }

    addRemoveButtonsListener() {
        let removeButtons = document.querySelectorAll('.removeButton');
        for(let i=0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener('click', () => {
                this.removeItemFromLocalStorage(i);
                inCart.getItemQuantity();
                location.reload();
                // let manga = localStorage.key(i);
                // manga = JSON.parse(manga);
                // console.log(manga.title + ' has been removed from local storage')
                //TRIED TO USED REAL TIME SOLUTIONS TO REMOVE ITEM FROM DOC BUT FAILED, USED PAGE RELOAD INSTEAD. MAYBE WILL TRY AGAIN LATER
            })
        }
        console.log(removeButtons);
    }

    removeItemFromLocalStorage(index) {
        localStorage.removeItem(localStorage.key(index));
    }

    // removeItemFromCart(index) {
    //     document.getElementsByClassName('removeButton')[index].parentElement.parentElement.parentElement.parentElement.remove();
    // }  //REAL TIME SOLUTION TRIED BUT FAILED, WILL TRY AGAIN LATER

    addIncreaseButtonsListener() {
        let increaseButtons = document.querySelectorAll('.increaseButton');
        console.log(increaseButtons);
        for(let i=0; i < increaseButtons.length; i++) {
            increaseButtons[i].addEventListener('click', () => {
                let mangaQuantity = parseInt(localStorage.getItem(localStorage.key(i)));
                localStorage.setItem(localStorage.key(i), mangaQuantity + 1);
                location.reload(); //PAGE RELOAD IS USED INSTEAD OF REAL TIME SOLUTIONS, WILL TRY REAL TIME SOLUTIONS LATER
            })
        }
    }

    addDecreaseButtonsListener() {
        let decreaseButtons = document.querySelectorAll('.decreaseButton');
        console.log(decreaseButtons);
        for(let i=0; i < decreaseButtons.length; i++) {
            decreaseButtons[i].addEventListener('click', () => {
                let mangaQuantity = parseInt(localStorage.getItem(localStorage.key(i))) - 1;
                localStorage.setItem(localStorage.key(i), mangaQuantity);
                console.log(mangaQuantity);
                if(mangaQuantity == 0) {
                    localStorage.removeItem(localStorage.key(i));
                }
                location.reload(); //PAGE RELOAD IS USED INSTEAD OF REAL TIME SOLUTIONS, WILL TRY REAL TIME SOLUTIONS LATER
            })
        }
    }

    addCheckoutListener() {
        let checkoutButton = document.getElementById('checkoutButton');
        checkoutButton.addEventListener('click', () => { 
            localStorage.clear();
            location.reload(); //PAGE RELOAD IS USED INSTEAD OF REAL TIME SOLUTIONS, WILL TRY REAL TIME SOLUTIONS LATER
        })
    }

}

export default shoppingCartButtons;