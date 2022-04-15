const cardList = document.getElementById('card-list');
const searchBar = document.getElementById('recherche');

/* function filteredRecipes(recipes) {
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
                // cardList.innerHTML = '';
                displayData(result);
            }
        }

        if (e.target.value.length < 3) {
            cardList.innerHTML = '';
            displayData(recipes);
        }
    });
} */

// méthode boucles natives: avec for on recherche chaque élément un par un, tableau par tableau

function filteredRecipes(recipes) {
    searchBar.addEventListener('keyup', (e) => {
        if (e.target.value.length >= 3) { //si plus de 3 caractères entrés par l’utilisateur dans la barre de recherche
            const result = [];
            cardList.innerHTML = '';
            const research = e.target.value.toLowerCase(); //toLowerCase() retourne la chaîne de caractères courante en minuscules
            for (i = 0; i < recipes.length; i ++) { //tant que i est compris entre 0 et 49
                console.log(recipes);
                const {name, ingredients, description} = recipes[i]; //tableau d'un objet
                console.log(recipes[i]);
                const includesInName = name.toLowerCase().includes(research); //La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon
                const includesInDescription = description.toLowerCase().includes(research);
                let includesInIngredients = false;
                for (x = 0; x < ingredients.length; x ++) {
                    if (ingredients[x].ingredient.toLowerCase().includes(research)) {
                        includesInIngredients = true;
                    }
                }
                if (includesInName || includesInDescription || includesInIngredients) {
                    result.push(recipes[i]);
                    //La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau
                    //(recipes[i]) = const { name, ingredients, description }
                }
            }
            if (result.length === 0) {
                cardList.innerHTML = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
            }
            displayData(result);
            // listenOnInputs(result);
        }
        if (e.target.value.length < 3) {
            cardList.innerHTML = '';
            displayData(recipes);
            // listenOnInputs(recipes);
        }
    });
}
