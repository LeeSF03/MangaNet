var xhr = new XMLHttpRequest();
xhr.open("GET", "MangaListData.json");
xhr.onload = function () {
    var MangaList = JSON.parse(this.response);
    console.log(MangaList);

    let PageTitle = JSON.stringify(document.getElementById("PageTitle").innerHTML);
    console.log(PageTitle);
    var list = "<ul>";
    if (PageTitle != "All") {
        for(let manga of MangaList) {
            let MangaGenre = JSON.stringify(manga.genre);
            if (MangaGenre == PageTitle) {
                list += `<div><li><img src=${manga.img}> <br> ${manga.title} <br> ${manga.price}</li></div>`;
                console.log(manga.title)
            } 
        }
    } else if (PageTitle == "All") {
        for(let manga of MangaList) {
            list += `<div><li><img src=${manga.img}> <br> ${manga.title} <br> ${manga.price}</li></div>`;
            console.log(manga.title)
        }    
    }
    
    list += "</ul>";
    document.getElementById("MangaListDoc").innerHTML = list;

    // var link = document.createElement("link");
    // link.rel = "stylesheet";
    // link.type = "type/css";
    // link.href = ".css";
    // document.head.append(link);
};
xhr.send(); 