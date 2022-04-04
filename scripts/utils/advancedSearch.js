const ingredientsInputGroup = document.getElementById('ingredients');
const ingredientsAdvanced = document.querySelector('.ingredients');
const appliancesAdvanced = document.querySelector('.appliances');
const toolsAdvanced = document.querySelector('.tools');
const advancedSearchDOM = document.querySelector('.advancedSearch');
const chevronIngr = document.querySelector('.chevronIngredients');
const listIngredientsDOM = document.getElementById('listIngredients');

// Ingrédients
function listIngredients(recipes) {
    // au click input ingrédients passe à une largeur col-6
    ingredientsInputGroup.addEventListener('click', () => {
        // listAppliancesDOM.classList.add('off');
        // listToolsDOM.classList.add('off');
        // ingredientsAdvanced.classList.remove('col-6');
        // toolsAdvanced.classList.remove('col-6');
        // ingredientsAdvanced.classList.remove('col-2');
      
        if (ingredientsAdvanced.classList.contains('col-2')) {
            ingredientsAdvanced.classList.add('col-6');
            ingredientsAdvanced.classList.remove('col-2');
        } else {
            ingredientsAdvanced.classList.remove('col-6');
            ingredientsAdvanced.classList.add('col-2');
        }
        if (chevronIngr.classList.contains('chevronDown')) {
            chevronIngr.classList.add('chevronDown-rotate');
            chevronIngr.classList.remove('chevronDown');
        } else {
            chevronIngr.classList.remove('chevronDown-rotate');
            chevronIngr.classList.add('chevronDown');
        }
        //tags display none
        if (listIngredientsDOM.classList.contains('off')) {
            listIngredientsDOM.classList.remove('off');
        } else {
            listIngredientsDOM.classList.add('off');
        }
    });

    // application du filtrage des doublons du json
    const { ingredients, appliances, tools } = filterArray(recipes);
    console.log(ingredients);
    const ul = document.createElement('ul');
    ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
    ul.id = 'listIngredients__ul';
    ingredients.forEach((ingr) => {
        const li = document.createElement('li');
        li.innerHTML = ingr;
        ul.appendChild(li);
        listIngredientsDOM.append(ul);
    });
    // console.log(recipe);
    // recipes.forEach((recipe) => {
    //     recipe.ingredients.forEach((ingredient) => {
    //         const li = document.createElement('li');
    //         li.innerHTML = ingredient.ingredient;
    //         ul.appendChild(li);
    //         listIngredientsDOM.append(ul);
    //     });
    //     // // console.log(recipe);
    // });
}

// Appareils
// const ingredientsInputGroup = document.getElementById('ingredients');
// const ingredientsAdvanced = document.querySelector('.ingredients');
// const appliancesAdvanced = document.querySelector('.appliances');
// const toolsAdvanced = document.querySelector('.tools');
// const advancedSearchDOM = document.querySelector('.advancedSearch');
// const chevron = document.querySelector('.chevronDown');
// const listIngredientsDOM = document.getElementById('listIngredients');

// const appliancesInputGroup = document.getElementById('appliances');
// const listAppliancesDOM = document.getElementById('listAppliances');
// const listToolsDOM = document.getElementById('listTools'); 

// function listAppliances(recipes) {
//     // au click input apprareils passe à une largeur col-6
//     appliancesInputGroup.addEventListener('click', () => {
//         // listIngredientsDOM.classList.add('off');
//         // listToolsDOM.classList.add('off');
//         // ingredientsAdvanced.classList.remove('col-6');
//         // toolsAdvanced.classList.remove('col-6');
//         // appliancesAdvanced.classList.remove('col-2');
//         if (advancedSearchDOM.classList.contains('col-lg-5')) {
//             advancedSearchDOM.classList.remove('col-lg-5');
//         } else {
//             advancedSearchDOM.classList.add('col-lg-5');
//         }
//         if (appliancesAdvanced.classList.contains('col')) {
//             appliancesAdvanced.classList.add('col-6');
//             appliancesAdvanced.classList.remove('col');
//         } else {
//             appliancesAdvanced.classList.remove('col-6');
//             appliancesAdvanced.classList.add('col');
//         }
//         if (ingredientsAdvanced.classList.contains('col')) {
//             ingredientsAdvanced.classList.remove('col');
//             ingredientsAdvanced.classList.add('col-2');
//         } else {
//             ingredientsAdvanced.classList.add('col');
//             ingredientsAdvanced.classList.remove('col-2');
//         }
//         if (toolsAdvanced.classList.contains('col')) {
//             toolsAdvanced.classList.remove('col');
//             toolsAdvanced.classList.add('col-2');
//         } else {
//             toolsAdvanced.classList.add('col');
//             toolsAdvanced.classList.remove('col-2');
//         }
//         if (chevron.classList.contains('chevronDown')) {
//             chevron.classList.add('chevronDown-rotate');
//             chevron.classList.remove('chevronDown');
//         } else {
//             chevron.classList.remove('chevronDown-rotate');
//             chevron.classList.add('chevronDown');
//         }
//         //tags display none
//         if (listAppliancesDOM.classList.contains('off')) {
//             listAppliancesDOM.classList.remove('off');
//         } else {
//             listAppliancesDOM.classList.add('off');
//         }
//     });

//     // application du filtrage des doublons du json
//     const { ingredients, appliances, tools } = filterArray(recipes);
//     console.log(appliances);
//     const ul = document.createElement('ul');
//     ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
//     ul.id = 'listAppliances__ul';
//     appliances.forEach((appliance) => {
//         const li = document.createElement('li');
//         li.innerHTML = appliance;
//         ul.appendChild(li);
//         listAppliancesDOM.append(ul);
//     });
//     // console.log(recipe);
//     // recipes.forEach((recipe) => {
//     //     recipe.ingredients.forEach((ingredient) => {
//     //         const li = document.createElement('li');
//     //         li.innerHTML = ingredient.ingredient;
//     //         ul.appendChild(li);
//     //         listIngredientsDOM.append(ul);
//     //     });
//     //     // // console.log(recipe);
//     // });
// }
