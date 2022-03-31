const inputIngredientsDOM = document.getElementById('inputIngredients');
const ingredientsAdvanced = document.querySelector('.ingredients');
const appliancesAdvanced = document.querySelector('.appliances');
const toolsAdvanced = document.querySelector('.tools');
const advancedSearchDOM = document.querySelector('.advancedSearch');
const chevron = document.querySelector('.chevronDown');
const listIngredientsDOM = document.getElementById('listIngredients');

function listIngredients(recipes) {
    // au click input ingrédients passe à une largeur col-6
    inputIngredientsDOM.addEventListener('click', () => {
        if (advancedSearchDOM.classList.contains('col-lg-5')) {
            advancedSearchDOM.classList.remove('col-lg-5');
        } else {
            advancedSearchDOM.classList.add('col-lg-5');
        }
        if (ingredientsAdvanced.classList.contains('col')) {
            ingredientsAdvanced.classList.add('col-6');
            ingredientsAdvanced.classList.remove('col');
        } else {
            ingredientsAdvanced.classList.remove('col-6');
            ingredientsAdvanced.classList.add('col');
        }
        if (appliancesAdvanced.classList.contains('col')) {
            appliancesAdvanced.classList.remove('col');
            appliancesAdvanced.classList.add('col-2');
        } else {
            appliancesAdvanced.classList.add('col');
            appliancesAdvanced.classList.remove('col-2');
        }
        if (toolsAdvanced.classList.contains('col')) {
            toolsAdvanced.classList.remove('col');
            toolsAdvanced.classList.add('col-2');
        } else {
            toolsAdvanced.classList.add('col');
            toolsAdvanced.classList.remove('col-2');
        }
        if (chevron.classList.contains('chevronDown')) {
            chevron.classList.add('chevronDown-rotate');
            chevron.classList.remove('chevronDown');
        } else {
            chevron.classList.remove('chevronDown-rotate');
            chevron.classList.add('chevronDown');
        }
        //tags display none
        if (listIngredientsDOM.classList.contains('off')) {
            listIngredientsDOM.classList.remove('off');
        } else {
            listIngredientsDOM.classList.add('off');
        }
    });

    const ul = document.createElement('ul');
    ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
    recipes.forEach((recipe) => {

        recipe.ingredients.forEach((ingredient) => {

            const li = document.createElement('li');
            li.innerHTML = ingredient.ingredient;
            ul.appendChild(li);
            listIngredientsDOM.append(ul);
        });
        // // console.log(recipe);
    });
}
