var cartButtons;

class addToCartButton{
    constructor (mangaArray) {
        this.mangaArray = mangaArray;
    }

    setButtonsToDisabled(mangaArray) {
        for (let i = 0; i < mangaArray.length; i++) {
            if (mangaArray[i].stock == 0) {
                document.getElementsByClassName('addToCartButton')[i].disabled = true;
                let displayedItem = document.getElementsByClassName('displayedItems')[i].getElementsByTagName('li')[0];
                let span = document.createElement('span');
                let oos = document.createTextNode('*Out of Stock');
                span.appendChild(oos);
                displayedItem.appendChild(span);
            }
        }
    }
    
    addButtonListener(mangaArray) {
        cartButtons = document.querySelectorAll(' .addToCartButton');
        console.log(cartButtons);
        for (let i=0; i < cartButtons.length; i++) {
            cartButtons[i].addEventListener('click', () => {
                console.log(mangaArray[i], mangaArray[i].title + ' has been clicked');
                this.addToLocalStorage(mangaArray[i]);
            })
        }
    }

    addToLocalStorage(manga) {
        let inCartItems = localStorage.getItem('inCartItems');

        if (inCartItems) {
            inCartItems = JSON.parse(inCartItems);
            inCartItems.push(manga);
            console.log(manga.title + ' has been added')
            inCartItems = JSON.stringify(inCartItems);
            localStorage.setItem('inCartItems', inCartItems)
        } else {
            inCartItems = [];
            inCartItems.push(manga);
            console.log(manga.title + ' has been added')
            inCartItems = JSON.stringify(inCartItems);
            localStorage.setItem('inCartItems', inCartItems);
        }
    }

}

export { addToCartButton };