//Création de la balise ul. Elle a été créée virtuellement.
let ul = document.createElement("ul")
//Création des n ombres de 2020 à 2030. 
for(let year = 2020; year < 2031; year++){
    //Création virtuelle de la balise li.
    let li = document.createElement("li")
    //innerText permet de mettre du texte brut dans un élément html.
    li.innerText = year
    //Cette condition permet de déterminer si une année est bissextile.
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
        //Cela permet de mettre le texte en rouge.
        li.style.color = "red"
    }
    //Accrochage de li à ul
    ul.append(li)
}
document.body.append(ul)