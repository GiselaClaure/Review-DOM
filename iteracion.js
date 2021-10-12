/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
function newList () {
    let newUl= document.createElement("ul");
    for (const i of countries) {
        let myLi= document.createElement("li");
        let myLiText= document.createTextNode(countries[i]);
        myLi.appendChild(myLiText);
        newUl.appendChild(myLi);
    }
}

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/
const deletedNode = document.querySelector('.fn-remove-me')
deletedNode.remove()


/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let createList=document.querySelector('[data-function="printHere"]');

let carsHTML=cars.map((car)=>
    `<ul>
        <li>${car}</li>
    </ul>
    `
).join("");
createList.innerHTML=carsHTML;


/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

function addObjectList(){
    let newUl=document.createElement('ul')
    let body=document.querySelector('body');
    
    countriesTwo.map((countrie)=>{
        let newDiv=document.createElement('div');
        let newH4=document.createElement('h4');
        let newImg=document.createElement('img');
        newH4.appendChild(document.createTextNode(countrie.title));
        newImg.src=`${countrie.imgUrl}`;
        newDiv.appendChild(newH4);
        newDiv.appendChild(newImg);
        newUl.appendChild(newDiv);
    });
    body.appendChild(newUl);
}  

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */