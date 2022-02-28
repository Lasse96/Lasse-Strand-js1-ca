// get the query string
const queryString = document.location.search;
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
// get the id parameter from the query string
const id = params.get("id");
// console.log(id);

const out = document.querySelector("#detail");
const nav = document.querySelector("#nav");

nav.innerHTML = `<ul>
<li><a href="index.html" class= "navlink">Home</a></li>
<li><a href="contact.html" class= "navlink">Contact</a></li>
</ul>`;

const listBurger = (list) =>{
    // console.log(list);
    out.innerHTML = "";
    for (let item of list) {
        let newul = `<ul>
        <li><h2>Name: ${item.name}</h2></li>
        <li><p>Restaurant: ${item.restaurant}</p></li>
        <li><p>Ingredients: ${item.ingredients.length}</p></li>
        </ul>`;
        out.innerHTML += newul;
        document.title = `${item.name}`;
    }
};

const errorBanner = (message = "API did not load", className) => {
    let banner = document.createElement("div");
    banner.classList.add("error");
    if (className) banner.classList.add(className);
    banner.innerHTML = message;
    let firstNode = document.body.childNodes[0];
    document.body.insertBefore(banner, firstNode); 
  };

fetch(`https://burgers1.p.rapidapi.com/burgers/?id=${id}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "burgers1.p.rapidapi.com",
		"x-rapidapi-key": "01ad74fbfcmshe8e1d2ba3995efcp1c449bjsnc0c89bd1ff79"
	}
})
.then(response => response.json())
.then(data => listBurger(data))
.catch(err => {
	errorBanner()
});