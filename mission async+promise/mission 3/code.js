let main = async () => {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let json = await response.json();
    let name = json.drinks[0].strDrink;
    document.querySelector('#name').innerText = name;

    let i = 1;
    while (true) {
        let ingredient = json.drinks[0]['strIngredient' + i];
        if (ingredient === null) {
            break;
        }

        const response1 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient);
        const json1 = await response1.json();

        console.log(json1);

        printIngredient(ingredient, json1.ingredients[0].strDescription, json1.ingredients[0].strAlcohol);

        i += 1;
    }
}
main();

const printIngredient = (name, description, isAlcholic) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML =
        `<b>Name</b>: ${name}<br>
        <b>Description</b>: ${description || ''}<br>
        <b>Is alcoholic</b>: ${isAlcholic || ''}`;
    document.body.appendChild(newDiv);
};

// name of random cocktail
// print ingredients of cocktail
// find description of ingredients