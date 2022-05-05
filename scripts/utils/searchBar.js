const cardList = document.getElementById('card-list');
const searchBar = document.getElementById('recherche');

// algorithme boucles natives: avec for on recherche chaque élément un par un, tableau par tableau

function filteredRecipes(recipes) {
    searchBar.addEventListener('keyup', (e) => {
        if (e.target.value.length >= 3) { //si plus de 3 caractères entrés par l’utilisateur dans la barre de recherche
            const result = [];
            cardList.innerHTML = '';
            const research = e.target.value.toLowerCase(); //toLowerCase() retourne la chaîne de caractères courante en minuscules
            for (i = 0; i < recipes.length; i ++) { //tant que i est compris entre 0 et 49 (car dans le projet 50 recettes)
                const {name, ingredients, description} = recipes[i]; //tableau d'un objet
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
                }
            }
            if (result.length === 0) {
                cardList.innerHTML = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
            }
            displayData(result);
            initializeFilterIngredients(result);
            initializeFilterAppliances(result);
            initializeFilterTools(result);
        }
        if (e.target.value.length < 3) {
            cardList.innerHTML = '';
            displayData(recipes);
            initializeFilterIngredients(recipes);
            initializeFilterAppliances(recipes);
            initializeFilterTools(recipes);
        }
    });
}
