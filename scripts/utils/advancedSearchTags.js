/* <aside class="selectedTags off">
                    <ul class="d-flex align-content-around flex-wrap col-6 selectedTags__ul">
                        <li class="selectedTagsIngredients">
                            aadddff
                            <i type="button" class="far fa-times-circle" aria-label="Close" onclick="closeTag()"></i>
                        </li>
                    </ul>
                </aside> */

/****** traitement des tags sélectionnés qui apparaissent sous la recherche principale ****/

const searchBarContainer = document.querySelector('.searchBar');

function createTagsUnderBar(recipes) {
    const aside = document.createElement('aside');
    aside.className = 'selectedTags';
    // aside.className = 'selectedTags off';
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

// filtrer les tags sélectionnés en fonction des 3 filtres
function tagSelection(type, tagName, recipes) {
    let array;
    if (type === 'ingredients') {
        array = selectedTagsIngredient;
    } else if (type === 'appliances') {
        array = selectedTagsAppliance;
    } else if (type === 'tools') {
        array = selectedTagsTool;
    }

    if (! array.some(t => t === tagName.toLowerCase())) { // ne pas pouvoir ajouter 2 fois le même tag; renvoie un booléen avec la condition if(!)

        const li = document.createElement('li');
        // li.classList.add('selectedTagsTools');
        // li.classList.add('tag');
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
            selectedTagsIngredient.push(tagName);  // tableau des tags ingrédients sélectionnés

            //mettre à jour la supression d'un tag
            close.addEventListener('click', (e) => {
                let remove = e.target.previousSibling.textContent; // previousSibling renvoie le nœud (node) précédant immédiatement le nœud courant dans la liste childNodes de son parent
                const index = selectedTagsIngredient.indexOf(remove);
                if (index > -1) {
                    selectedTagsIngredient.splice(index, 1);
                }
                researchOnTags(recipes);
            });

        } else if (type === 'appliances') {
            li.classList.add('selectedTagsAppliances');
            selectedTagsAppliance.push(tagName);  // tableau des tags appareils sélectionnés

            //mettre à jour la supression d'un tag
            close.addEventListener('click', (e) => {
                let remove = e.target.previousSibling.textContent; // previousSibling renvoie le nœud (node) précédant immédiatement le nœud courant dans la liste childNodes de son parent
                const index = selectedTagsAppliance.indexOf(remove);
                if (index > -1) {
                    selectedTagsAppliance.splice(index, 1);
                }
                researchOnTags(recipes);
            });

        } else if (type === 'tools') {
            li.classList.add('selectedTagsTools');
            selectedTagsTool.push(tagName); // tableau des tags ustensiles sélectionnés

             //mettre à jour la supression d'un tag
             close.addEventListener('click', (e) => {
                let remove = e.target.previousSibling.textContent; // previousSibling renvoie le nœud (node) précédant immédiatement le nœud courant dans la liste childNodes de son parent
                const index = selectedTagsTool.indexOf(remove);
                if (index > -1) {
                    selectedTagsTool.splice(index, 1);
                }
                researchOnTags(recipes);
            });
        }
        // createTagsUnderBar(recipes);

        researchOnTags(recipes);
    }
}

// filtrer les résultats des recettes au click des tags
function researchOnTags(recipes) {
   
    const result = recipes.filter((recipe) => {
        console.log(selectedTagsIngredient);
        
        // return(recipe.ingredients.every((ingredient) => selectedTagsIngredient.includes(ingredient.ingredient.toLowerCase())) //.includes(selectedTagsIngredient))
        return(recipe.ingredients.some((ingredient) => selectedTagsIngredient.some((tag) => tag === ingredient.ingredient.toLowerCase())))
        // && recipe.appliance.toLowerCase().includes(selectedTagsAppliance) 
        // && recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(selectedTagsTool)));
    });
    console.log(result);
    if (result.length === 0) {
        cardList.innerHTML = '';
        cardList.innerHTML = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
    } else {
        cardList.innerHTML = '';
        displayData(result);
    }
    initializeFilterAppliances(result); // => filtrer les tags au click des tags
    initializeFilterIngredients(result);
    initializeFilterTools(result);
};
