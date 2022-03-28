async function getRecipes() {
    const jsonPath = './data/recipes.json';
    const response =  await fetch(jsonPath);
    const data = await response.json();
    const recipes = data.recipes;
    return recipes;
}

async function displayData(recipes) {
    const recipesCard = document.querySelector(
        '.card-body'
    );
    recipes.forEach((recipe) => {
        recipesFactory(recipe)
    });
}

async function init() {
    // Récupère les datas des recettes
    const  recipes  = await getRecipes();
    // console.log(recipes);
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            // console.log(ingredient);
        })
        // // console.log(recipe);
    })
    displayData(recipes);
    filteredRecipes(recipes);
}

init();
