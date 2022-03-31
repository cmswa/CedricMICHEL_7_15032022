const inputIngredientsDOM = document.getElementById('inputIngredients');
const ingredientsAdvanced = document.querySelector('.ingredients');
const advancedSearchDOM = document.querySelector('.advancedSearch');
const chevron = document.querySelector('.chevronDown');

function listIngredients(recipes) {
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {});
        // // console.log(recipe);
    });

    // au click input ingrédients passe à une largeur col-6 
    ingredientsAdvanced.addEventListener('click', () => {
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
        if (chevron.classList.contains('chevronDown')) {
            chevron.classList.add('chevronDown-rotate');
            chevron.classList.remove('chevronDown');
        } else {
            chevron.classList.remove('chevronDown-rotate');
            chevron.classList.add('chevronDown');
        }
    });
}
