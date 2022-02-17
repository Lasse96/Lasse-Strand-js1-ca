// get the query string
const queryString = document.location.search;
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
// get the id parameter from the query string
const id = params.get("id");
// console.log(id);

const out = document.querySelector("#detail");


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
    }
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
	console.error(err);
    out.innerHTML = `<div> Try refreshing</div>`;
});