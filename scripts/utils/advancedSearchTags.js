// tags sélectionnés qui apparaissent sous la recherche principale
/* <aside class="selectedTags off">
                    <ul class="d-flex align-content-around flex-wrap col-6 selectedTags__ul">
                        <li class="selectedTagsIngredients">
                            aadddff
                            <i type="button" class="far fa-times-circle" aria-label="Close" onclick="closeTag()"></i>
                        </li>
                    </ul>
                </aside> */

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

// [{ nom: 'Pomme de terre', type: 'ingredient'}, { nom: 'spatule', type:'ustensile'}]

const selectedTagsIngredient = [];
// ajout des tags sélectionnés "ingrédients" qui apparaissent sous la recherche principale
function listenOnIngredientsInput(recipes) {
    const ingredientsLi = document.querySelectorAll('.listIngredients__li');
    ingredientsLi.forEach((item) => {
        item.addEventListener('click', () => { // ne pas pouvoir ajouter 2 fois le même tag; renvoie un booléen avec la condition if(!)
            if (! selectedTagsIngredient.some(t => t === item.textContent.toLowerCase())) {

                selectedTagsIngredient.push(item.textContent.toLowerCase()); // tableau des tags ingrédients sélectionnés
                const li = document.createElement('li');
                li.classList.add('selectedTagsIngredients');
                li.classList.add('tag');
                const close = document.createElement('i');
                close.className = 'far fa-times-circle';
                close.content = '\f057';
                close.setAttribute('type', 'button');
                close.setAttribute('aria-label', 'Close');
                // fermeture avec la croix d'un tag selectedTags
                close.setAttribute('onclick', "this.parentElement.style.display = 'none';");
                li.textContent = item.textContent;
                li.append(close);
                const selectedTags__ulDOM = document.querySelector('.selectedTags__ul');
                selectedTags__ulDOM.append(li);
                console.log(selectedTagsIngredient);
                // createTagsUnderBar(recipes);

                researchOnTags(recipes);
            }
        });
    });
}

const selectedTagsAppliance = [];
// ajout des tags sélectionnés "appareils" qui apparaissent sous la recherche principale
function listenOnAppliancesInput(recipes) {
    const appliancesLi = document.querySelectorAll('.listAppliances__li');
    appliancesLi.forEach((item) => {
        item.addEventListener('click', () => {
            // console.log(selectedTagsAppliance);
            // console.log(item.textContent.toLowerCase());
            // console.log(selectedTagsAppliance.some(t => t === item.textContent.toLowerCase()));
            // ne pas pouvoir ajouter 2 fois le même tag; renvoie un booléen avec la condition if(!)
            if (! selectedTagsAppliance.some(t => t === item.textContent.toLowerCase())) {

                selectedTagsAppliance.push(item.textContent.toLowerCase()); // tableau des tags appareils sélectionnés
                const li = document.createElement('li');
                li.classList.add('selectedTagsAppliances');
                li.classList.add('tag');
                const close = document.createElement('i');
                close.className = 'far fa-times-circle';
                close.content = '\f057';
                close.setAttribute('type', 'button');
                close.setAttribute('aria-label', 'Close');
                // fermeture avec la croix d'un tag selectedTags
                close.setAttribute('onclick', "this.parentElement.style.display = 'none';");
                li.textContent = item.textContent;
                li.append(close);
                const selectedTags__ulDOM = document.querySelector('.selectedTags__ul');
                selectedTags__ulDOM.append(li);
                console.log(selectedTagsAppliance);
                // createTagsUnderBar(recipes);

                researchOnTags(recipes);
            };
        });
    });
}

const selectedTagsTool = [];
// ajout des tags sélectionnés "outils" qui apparaissent sous la recherche principale
function listenOnToolsInput(recipes) {
    const toolsLi = document.querySelectorAll('.listTools__li');
    toolsLi.forEach((item) => {
        item.addEventListener('click', () => { // ne pas pouvoir ajouter 2 fois le même tag; renvoie un booléen avec la condition if(!)
            if (! selectedTagsTool.some(t => t === item.textContent.toLowerCase())) {

                selectedTagsTool.push(item.textContent.toLowerCase()); // tableau des tags outils sélectionnés
                const li = document.createElement('li');
                li.classList.add('selectedTagsTools');
                li.classList.add('tag');
                const close = document.createElement('i');
                close.className = 'far fa-times-circle';
                close.content = '\f057';
                close.setAttribute('type', 'button');
                close.setAttribute('aria-label', 'Close');
                // fermeture avec la croix d'un tag selectedTags
                close.setAttribute('onclick', "this.parentElement.style.display = 'none';");
                li.textContent = item.textContent;
                li.append(close);
                const selectedTags__ulDOM = document.querySelector('.selectedTags__ul');
                selectedTags__ulDOM.append(li);
                console.log(selectedTagsTool);
                // createTagsUnderBar(recipes);

                researchOnTags(recipes);
            }
        });
    });
}

// filtrer les résultats des recettes au click des tags
function researchOnTags(recipes) {
    const result = recipes.filter((recipe) => {
        return(recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(selectedTagsIngredient)) 
        && recipe.appliance.toLowerCase().includes(selectedTagsAppliance) 
        && recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(selectedTagsTool))
        );
    });
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
};
