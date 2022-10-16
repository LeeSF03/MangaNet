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
                //TRIED TO CONSOLE LOG WHAT MANGA HAS BEEN REMOVED BUT FAILED, USED PAGE RELOAD INSTEAD. MAYBE WILL TRY AGAIN LATER
            })
        }
        console.log(removeButtons);
    }

    removeItemFromLocalStorage(index) {
        localStorage.removeItem(localStorage.key(index));
    }

    removeItemFromCart(index) {
        document.getElementsByClassName('removeButton')[index].parentElement.parentElement.parentElement.parentElement.remove();
    }

}

export default shoppingCartButtons;