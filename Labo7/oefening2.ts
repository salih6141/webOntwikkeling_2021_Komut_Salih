import { promises } from "node:stream";

const fetch = require('node-fetch');

let promise1 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000').then((Response:any) => Response.json());
let promise2 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001').then((Response:any) => Response.json());
let promise3 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002').then((Response:any) => Response.json());
Promise.all([promise1,promise2,promise3]).then(
    (cocktails) => {
        console.log(cocktails[0].strDrink, cocktails[1].strDrink, cocktails[2].strDrink);
    }
)