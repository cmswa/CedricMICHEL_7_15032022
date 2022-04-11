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
function createTagsUnderBar() {
    const aside = document.createElement('aside');
    aside.className = 'selectedTags';
    // aside.className = 'selectedTags off';
    const ul = document.createElement('ul');
    ul.className = 'd-flex align-content-around flex-wrap col-6 selectedTags__ul';
    aside.append(ul);
    searchBarContainer.append(aside);

    listenOnIngredientsInput();
    listenOnAppliancesInput();
    listenOnToolsInput();
}

// [{ nom: 'Pomme de terre', type: 'ingredient'}, { nom: 'spatule', type:'ustensile'}]

const selectedTagsIngredient = [];
function listenOnIngredientsInput() {
    const ingredientsLi = document.querySelectorAll('.listIngredients__li');
    ingredientsLi.forEach((item) => {
        item.addEventListener('click', () => {
            selectedTagsIngredient.push(item.textContent);
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
        });
    });
}

const selectedTagsAppliance = [];
function listenOnAppliancesInput() {
    const appliancesLi = document.querySelectorAll('.listAppliances__li');
    appliancesLi.forEach((item) => {
        item.addEventListener('click', () => {
            selectedTagsAppliance.push(item.textContent);
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
        });
    });
}

const selectedTagsTool = [];
function listenOnToolsInput() {
    const toolsLi = document.querySelectorAll('.listTools__li');
    toolsLi.forEach((item) => {
        item.addEventListener('click', () => {
            selectedTagsTool.push(item.textContent);
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
        });
    });
}
