var xhr = new XMLHttpRequest()

xhr.open("GET", "../assets/json/MangaListData.json")

xhr.onload = function () {
    // ignore this unoptimized sh*t
    lazyToThinkAName()

    var lis = document.querySelectorAll('li .navLink')
    lis.forEach((el, i) => {
      el.addEventListener('click', () => {
        document.getElementById("PageTitle").innerText = el.innerText
        lazyToThinkAName()
    })
    })    
};


function lazyToThinkAName() {
    var MangaList = JSON.parse(xhr.response)
    
    let PageTitle = document.getElementById("PageTitle").innerText

    var list = "<ul>";
    if (PageTitle != "All") {
        console.log("not")
        for(let manga of MangaList) {
            let MangaGenre = manga.genre
            if (MangaGenre == PageTitle) {
                list += `<div><li><img src=../assets/images/${manga.img}> <br> ${manga.title} <br> ${manga.price}</li></div>`
                
            } 
        }
    } else if (PageTitle == "All") {
        console.log("is")
        for(let manga of MangaList) {
            list += `<div><li><img src=../assets/images/${manga.img}> <br> ${manga.title} <br> ${manga.price}</li></div>`
        }    
    }
    
    list += "</ul>"
    document.getElementById("MangaListDoc").innerHTML = list
}

xhr.send()
