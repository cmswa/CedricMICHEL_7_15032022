/****** traitement des tags sélectionnés qui apparaissent sous la recherche principale ****/

const searchBarContainer = document.querySelector('.searchBar');

function createTagsUnderBar(recipes) {
    const aside = document.createElement('aside');
    aside.className = 'selectedTags';
    const ul = document.createElement('ul');
    ul.className = 'd-flex align-content-around flex-wrap col-6 selectedTags__ul';
    aside.append(ul);
    searchBarContainer.append(aside);

    listenOnIngredientsInput(recipes);
    listenOnAppliancesInput(recipes);
    listenOnToolsInput(recipes);
}

const selectedTagsIngredient = [];
// ajout des tags sélectionnés "ingrédients" qui apparaissent sous la recherche principale
function listenOnIngredientsInput(recipes) {
    const ingredientsLi = document.querySelectorAll('.listIngredients__li');
    ingredientsLi.forEach((item) => {
        item.addEventListener('click', () => {
            tagSelection('ingredients', item.textContent.toLowerCase(), recipes);
        });
    });
}

const selectedTagsAppliance = [];
// ajout des tags sélectionnés "appareils" qui apparaissent sous la recherche principale
function listenOnAppliancesInput(recipes) {
    const appliancesLi = document.querySelectorAll('.listAppliances__li');
    appliancesLi.forEach((item) => {
        item.addEventListener('click', () => {
            tagSelection('appliances', item.textContent.toLowerCase(), recipes);
        });
    });
}

const selectedTagsTool = [];
// ajout des tags sélectionnés "ustensiles" qui apparaissent sous la recherche principale
function listenOnToolsInput(recipes) {
    const toolsLi = document.querySelectorAll('.listTools__li');
    toolsLi.forEach((item) => {
        item.addEventListener('click', () => {
            tagSelection('tools', item.textContent.toLowerCase(), recipes);
        });
    });
}

// filtrer les tags sélectionnés en fonction des 3 filtres (filtrer les tags entre eux)
function tagSelection(type, tagName) {
    let array;
    if (type === 'ingredients') {
        array = selectedTagsIngredient;
    } else if (type === 'appliances') {
        array = selectedTagsAppliance;
    } else if (type === 'tools') {
        array = selectedTagsTool;
    }

    if (! array.some((t) => t === tagName.toLowerCase())) { // ne pas pouvoir ajouter 2 fois le même tag; renvoie un booléen avec la condition if(!)

        const li = document.createElement('li');
        li.classList.add('tag');
        const close = document.createElement('i');
        close.className = 'far fa-times-circle';
        close.content = '\f057';
        close.setAttribute('type', 'button');
        close.setAttribute('aria-label', 'Close');
        // fermeture avec la croix d'un tag selectedTags
        close.setAttribute('onclick', "this.parentElement.style.display = 'none';");
        li.textContent = tagName;
        li.append(close);
        const selectedTags__ulDOM = document.querySelector('.selectedTags__ul');
        selectedTags__ulDOM.append(li);

        if (type === 'ingredients') {
            li.classList.add('selectedTagsIngredients');
            selectedTagsIngredient.push(tagName);
            // tableau des tags ingrédients sélectionnés

            // mettre à jour la supression d'un tag
            close.addEventListener('click', (e) => {
                let remove = e.target.previousSibling.textContent; // previousSibling renvoie le nœud (node) précédant immédiatement le nœud courant dans la liste childNodes de son parent
                const index = selectedTagsIngredient.indexOf(remove); //La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau
                if (index > -1) {
                    selectedTagsIngredient.splice(index, 1); //La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau
                }
                researchOnTags();
            });
        } else if (type === 'appliances') {
            li.classList.add('selectedTagsAppliances');
            selectedTagsAppliance.push(tagName);
            // tableau des tags appareils sélectionnés

            // mettre à jour la supression d'un tag
            close.addEventListener('click', (e) => {
                let remove = e.target.previousSibling.textContent; // previousSibling renvoie le nœud (node) précédant immédiatement le nœud courant dans la liste childNodes de son parent
                const index = selectedTagsAppliance.indexOf(remove);
                if (index > -1) {
                    selectedTagsAppliance.splice(index, 1);
                }
                researchOnTags();
            });
        } else if (type === 'tools') {
            li.classList.add('selectedTagsTools');
            selectedTagsTool.push(tagName);
            // tableau des tags ustensiles sélectionnés

            // mettre à jour la supression d'un tag
            close.addEventListener('click', (e) => {
                let remove = e.target.previousSibling.textContent; // previousSibling renvoie le nœud (node) précédant immédiatement le nœud courant dans la liste childNodes de son parent
                const index = selectedTagsTool.indexOf(remove);
                if (index > -1) {
                    selectedTagsTool.splice(index, 1);
                }
                researchOnTags();
            });
        }
        researchOnTags();
    }
}

// filtrer les résultats des recettes au click des tags
function researchOnTags() {
    const jsonPath = './data/recipes.json';
    fetch(jsonPath).then((response) => response.json()).then((data) => {
        //fetch procure un moyen facile et logique de récupérer des ressources à travers le réseau de manière asynchrone
        //La méthode then() renvoie une promesse en attente de résolution et dont la valeur est déterminée selon les deux fonctions passées en arguments et qui seront appelées de façon asynchrone

        let result;
        if (selectedTagsIngredient.length > 0 || selectedTagsAppliance.length > 0 || selectedTagsTool.length > 0) {
            result = data.recipes.filter((recipe) => selectedTagsIngredient.every((tag) => recipe.ingredients.some((ingredient) => tag === ingredient.ingredient.toLowerCase())) 
            && recipe.appliance.toLowerCase().includes(selectedTagsAppliance) 
            && recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(selectedTagsTool)));
            //filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback
            //every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test
            //some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test
            //includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon

        } else {
            result = data.recipes;
        }
        if (result.length === 0) {
            cardList.innerHTML = '';
            cardList.innerHTML = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
        } else {
            cardList.innerHTML = '';
            displayData(result);
        }
        initializeFilterAppliances(result); // filtrer les tags au click des tags
        initializeFilterIngredients(result);
        initializeFilterTools(result);
    });
}
