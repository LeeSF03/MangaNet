import {addButtonListener, setCartNumber, updateCartNumber} from './cartSystem.js';
var xhr = new XMLHttpRequest()
xhr.open("GET", "../assets/json/MangaListData.json")

xhr.onload = function () {
    categoryFunction()
    var navList = document.querySelectorAll('.navLink')
    navList.forEach((event) => {
        event.addEventListener('click', categoryFunction)
    })    
}

let mangaArray = []

function categoryFunction(clickedGenreTitle) {
    var MangaList = JSON.parse(xhr.response)

    if(clickedGenreTitle) {
        document.getElementById("PageTitle").innerText = clickedGenreTitle.target.innerText
    }
    console.log(document.getElementById("PageTitle").innerText.toLocaleLowerCase())
    let PageTitle = document.getElementById("PageTitle").innerText.toLocaleLowerCase()

    var mangaLibrary = `<ul>`

    if (PageTitle != "all") {
        console.log("not all")
        mangaArray.length = 0

        for(let manga of MangaList) {
            let MangaGenre = manga.genre
            if (MangaGenre == PageTitle) {
                mangaArray.push(manga)         
                mangaLibrary += `<div><li><img src=../assets/images/${manga.img}>
                <br> ${manga.title}
                <br> RM ${parseFloat(manga.price).toFixed(2)}
                <br> <button class="addToCartButton"`
                if (manga.stock == 0) {
                    mangaLibrary += ` disabled>Add to Cart</button><span>*Out of Stock</span>`
                } else {
                    mangaLibrary += `>Add to Cart</button>`
                }
                mangaLibrary += `</li></div>`
            } 
        }

    } else if (PageTitle == "all") {
        console.log("is all")
        mangaArray.length = 0

        for(let manga of MangaList) {   
            mangaArray.push(manga)         
            mangaLibrary += `<div><li><img src=../assets/images/${manga.img}>
            <br> ${manga.title}
            <br> RM ${parseFloat(manga.price).toFixed(2)}
            <br><button class="addToCartButton"`
            if (manga.stock == 0) {
                mangaLibrary += ` disabled>Add to Cart</button><span>*Out of Stock</span>`
            } else {
                mangaLibrary += `>Add to Cart</button>`
            }
            mangaLibrary += `</li></div>`
        }
    }
    mangaLibrary += `</ul>`
    document.getElementById("MangaListDoc").innerHTML = mangaLibrary
    console.log(mangaArray)
    addButtonListener(mangaArray)
}

updateCartNumber();
xhr.send();