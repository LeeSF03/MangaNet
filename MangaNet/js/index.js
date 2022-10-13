import {addToCartButton} from './cartSystem.js';
var xhr = new XMLHttpRequest()
var mangaArray = [];
var PageTitle;

xhr.open("GET", "../assets/json/MangaListData.json") //remember to add promise or try/catch or async await to catch errors...

xhr.onload = function () {
    filterFunction();
    var navList = document.querySelectorAll('.navLink')
    navList.forEach((genreTitle) => {
        genreTitle.addEventListener('click', filterFunction);
    })    
}

function filterFunction(clickedGenreTitle) {
    getPageTitle(clickedGenreTitle);
    getFilteredLibrary();
}

function getPageTitle(clickedGenreTitle) {
    if(clickedGenreTitle) {
        document.getElementById("PageTitle").innerText = clickedGenreTitle.target.innerText;
    }
    console.log(document.getElementById("PageTitle").innerText.toLocaleLowerCase());
    return  PageTitle = document.getElementById("PageTitle").innerText.toLocaleLowerCase();
}

function getFilteredLibrary() {
    var mangaList = JSON.parse(xhr.response);

    var mangaLibrary = ``;

    if (PageTitle != "all") {
        console.log("not all");
        mangaArray.length = 0; //to clear array

        for(let manga of mangaList) {
            if (manga.title == PageTitle) {
                mangaArray.push(manga);  
                mangaLibrary += 
                `<div class="displayedItems"><li>
                    <img src=../assets/images/${manga.img}>
                    <br> ${manga.title}
                    <br> RM ${parseFloat(manga.price).toFixed(2)}
                    <br> <button class="addToCartButton">Add to Cart</button>
                </li></div>`;     
            } 
        }

    } else {
        console.log("is all");
        mangaArray.length = 0; //to clear array

        for(let manga of mangaList) {   
            mangaArray.push(manga);
            mangaLibrary += 
            `<div class="displayedItems"><li>
                <img src=../assets/images/${manga.img}>
                <br> ${manga.title}
                <br> RM ${parseFloat(manga.price).toFixed(2)}
                <br><button class="addToCartButton">Add to Cart</button>
            </li></div>`;         
        }
    }
    document.getElementById("MangaListDoc").innerHTML = mangaLibrary
    console.log(mangaArray)
    let cartButton = new addToCartButton(mangaArray);
    cartButton.setButtonsToDisabled(mangaArray);
    cartButton.addButtonListener(mangaArray);
}

xhr.send();