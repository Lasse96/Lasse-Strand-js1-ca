const nav = document.querySelector("#nav");
const main = document.querySelector("ul.main");

nav.innerHTML = `<ul>
<li><a href="index.html">Home</a></li>
<li><a href="contact.html">Contact</a></li>
</ul>`;



const listBurgers = (list) =>{
    // console.log(list);
    main.innerHTML = "";
    for (let item of list) {
        let newul = `<ul>
        <li><h2>Name:<a href="details.html?id=${item.id}">${item.name}</a></h2></li>
        <li><p>Restaurant: ${item.restaurant}</p></li>
        <li><p>Ingredients: ${item.ingredients.length}</p></li>
        </ul>`;
        main.innerHTML += newul;
    }
};


fetch("https://burgers1.p.rapidapi.com/burgers", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "burgers1.p.rapidapi.com",
		"x-rapidapi-key": "01ad74fbfcmshe8e1d2ba3995efcp1c449bjsnc0c89bd1ff79"
	}
})
.then(response => response.json())
.then(data => listBurgers(data))
.catch(err => {
	console.error(err);
    main.innerHTML = `<div> Try refreshing</div>`;
});