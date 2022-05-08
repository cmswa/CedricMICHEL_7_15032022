async function getRecipes() {
    const jsonPath = './data/recipes.json';
    const response = await fetch(jsonPath);
    const data = await response.json();
    const recipes = data.recipes;
    return recipes;
}

async function displayData(recipes) {
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
                ...recipe.ingredients.map((i) =>
                    i.ingredient
                        .toLowerCase() //retourne la chaîne de caractères courante en minuscules (pour éviter les doublons avec une majuscule)
                        //https://www.delftstack.com/fr/howto/javascript/how-to-capitalize-the-first-letter-of-a-string-in-javascript/
                        .replace(/^./, i.ingredient[0].toUpperCase()) /* /^./ représente la première lettre de la chaîne de caractères */
                ),
            ]),
        ].sort();

        appliances = [
            ...new Set([...appliances, ...[recipe.appliance.toLowerCase().replace(/^./, recipe.appliance[0].toUpperCase())]]),
        ].sort();
        tools = [
            ...new Set([...tools, ...recipe.ustensils.map((u) => u.toLowerCase().replace(/^./, u[0].toUpperCase()))]),
        ].sort();
    });
    return { ingredients, appliances, tools };
}

async function init() {
    // Récupère les datas des recettes
    const recipes = await getRecipes();
    displayData(recipes);
    filteredRecipes(recipes);
    filterArray(recipes);
    listIngredients(recipes);
    listAppliances(recipes);
    listTools(recipes);
    listenOnInputs(recipes);
    createTagsUnderBar(recipes);
}

init();
