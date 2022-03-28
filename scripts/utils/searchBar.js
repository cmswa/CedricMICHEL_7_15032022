const cardList = document.getElementById('card-list');
const searchBar = document.getElementById('recherche');

function filteredRecipes(recipes) {
    console.log(recipes);
    searchBar.addEventListener('keyup', (e) => {
        if (e.target.value.length >= 3) {
            cardList.innerHTML = '';
            const research = e.target.value.toLowerCase(); // toLowerCase() retourne la chaîne de caractères courante en minuscules
            const result = recipes.filter((recipe) => {
                // crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback
                return (
                    recipe.name.toLowerCase().includes(research) ||
                    recipe.description.toLowerCase().includes(research) ||
                    recipe.ingredients.some((ingredient) =>
                        ingredient.ingredient.toLowerCase().includes(research)
                    )
                );
            });
            console.log(result);
            if (result.length === 0) {
                cardList.innerHTML =
                    'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
            } else {
                displayData(recipes);
            }
            cardList.innerHTML = '';
            displayData(result);
        }

        if (e.target.value.length < 3) {
            cardList.innerHTML = '';
            displayData(recipes);
        }
    });
}
