var xhr = new XMLHttpRequest()
xhr.open("GET", "../assets/json/MangaListData.json")

xhr.onload = function () {
    categoryFunction()
    var navList = document.querySelectorAll('.navLink')
    navList.forEach((el) => {
        el.addEventListener('click', () => {categoryFunction(el)})
    })    
}

function categoryFunction(el) {
    var MangaList = JSON.parse(xhr.response)

    if(el) {
        document.getElementById("PageTitle").innerText = el.innerText
    }

    console.log(document.getElementById("PageTitle").innerText.toLocaleLowerCase())

    let PageTitle = document.getElementById("PageTitle").innerText.toLocaleLowerCase()

    var mangaLibrary = "<ul>"
    if (PageTitle != "all") {
        console.log("not")
        for(let manga of MangaList) {
            let MangaGenre = manga.genre
            if (MangaGenre == PageTitle) {
                mangaLibrary += `<div><li><img src=../assets/images/${manga.img}> <br> ${manga.title} <br> RM ${parseFloat(manga.price).toFixed(2)}</li></div>`
            } 
        }
    } else if (PageTitle == "all") {
        console.log("is")
        for(let manga of MangaList) {
            mangaLibrary += `<div><li><img src=../assets/images/${manga.img}> <br> ${manga.title} <br> RM ${parseFloat(manga.price).toFixed(2)}</li></div>`
        }    
    }
    
    mangaLibrary += "</ul>"
    document.getElementById("MangaListDoc").innerHTML = mangaLibrary
}

xhr.send()