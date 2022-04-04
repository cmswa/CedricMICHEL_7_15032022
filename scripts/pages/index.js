async function getRecipes() {
    const jsonPath = './data/recipes.json';
    const response = await fetch(jsonPath);
    const data = await response.json();
    const recipes = data.recipes;
    return recipes;
}

async function displayData(recipes) {
    const recipesCard = document.querySelector('.card-body');
    recipes.forEach((recipe) => {
        recipesFactory(recipe);
    });
}

// filtrage des doublons du json
function filterArray(recipes) {
    let ingredients = [];
    let appliances = [];
    let tools = [];
    recipes.forEach((recipe) => {
        //Dédoublonner un tableau: [...new Set(nonDuTableau)]
        //Opérateur de décomposition: ...ancienTableau (créer un nouveau tableau qui contient l'ancien)
        //La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
        //map pour changer le format d'objets dans un tableau: dans le code qui suit, on utilise un tableau d'objets pour créer un autre tableau contenant de nouveaux objets dans un autre format
        //sort() tri par défaut par ordre alphabétique
        ingredients = [
            ...new Set([
                ...ingredients,
                ...recipe.ingredients.map((i) => i.ingredient),
            ]),
        ].sort();
        appliances = [
            ...new Set([...appliances, ...[recipe.appliance]]),
        ].sort();
        tools = [
            ...new Set([...tools, ...recipe.ustensils.map((u) => u)]),
        ].sort();
    });
    // console.log(ingredients);
    return { ingredients, appliances, tools };
}

async function init() {
    // Récupère les datas des recettes
    const recipes = await getRecipes();
    // console.log(recipes);
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            // console.log(ingredient);
        });
        // // console.log(recipe);
    });
    displayData(recipes);
    filteredRecipes(recipes);
    filterArray(recipes);
    listIngredients(recipes);
    listAppliances(recipes);
}

init();
