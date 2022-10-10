function addButtonListener(mangas) {
    let cartButtons = document.querySelectorAll(' .addToCartButton')
    console.log(cartButtons)
    for (let i=0; i < cartButtons.length; i++) {
        cartButtons[i].addEventListener('click', () => {
            console.log(mangas[i])
            setCartNumber(mangas[i])
            updateCartNumber()
        })
    }
}

function setCartNumber(manga) {
    console.log(manga.title + ' has been clicked')
    let productNumbers = parseInt(localStorage.getItem('productNumbers'));

    if (productNumbers) {
        localStorage.setItem('productNumbers', productNumbers + 1)
        document.getElementById('cartQuantityNumber').innerText = productNumbers + 1
        console.log(parseInt(localStorage.getItem('productNumbers')))
    } else {
        localStorage.setItem('productNumbers', 1)
        document.getElementById('cartQuantityNumber').innerText = 1
        console.log(parseInt(localStorage.getItem('productNumbers')))
    }

}

function updateCartNumber() {
    let cartNumber = localStorage.getItem('productNumbers')
    if (cartNumber) {
        document.getElementById('cartQuantityNumber').innerText= cartNumber
    }
}

export { addButtonListener, setCartNumber, updateCartNumber };