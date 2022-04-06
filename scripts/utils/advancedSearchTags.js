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
    aside.className = 'selectedTags off';
    const ul = document.createElement('ul');
    ul.className =
        'd-flex align-content-around flex-wrap col-6 selectedTags__ul';
    const li = document.createElement('li');
    // li.textContent = 'tttttttoo';
    li.classList.add('selectedTagsIngredients');
    const close = document.createElement('i');
    close.className = 'far fa-times-circle';
    close.content = '\f057';
    close.setAttribute('type', 'button');
    close.setAttribute('aria-label', 'Close');
    close.setAttribute('onclick', 'closeTag()');
    li.append(close);
    ul.append(li);
    aside.append(ul);
    searchBarContainer.append(aside);
}
