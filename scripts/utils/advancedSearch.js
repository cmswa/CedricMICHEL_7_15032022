const ingredientsInputGroup = document.getElementById('ingredients');
const ingredientsAdvanced = document.querySelector('.ingredients');
const appliancesAdvanced = document.querySelector('.appliances');
const toolsAdvanced = document.querySelector('.tools');
const advancedSearchDOM = document.querySelector('.advancedSearch');
const chevronIngr = document.querySelector('.chevronIngredients');
const chevronAppliances = document.querySelector('.chevronAppliances');
const chevronTools = document.querySelector('.chevronTools');
const listIngredientsDOM = document.getElementById('listIngredients');

// Ingrédients
function listIngredients(recipes) {
    // au click input ingrédients passe à une largeur col-6
    ingredientsInputGroup.addEventListener('click', () => {
        //gére la widht si l'on clique d'un input à un autre input
        listAppliancesDOM.classList.add('off');
        listToolsDOM.classList.add('off');
        appliancesAdvanced.classList.remove('col-6');
        appliancesAdvanced.classList.add('col-2');
        toolsAdvanced.classList.remove('col-6');
        toolsAdvanced.classList.add('col-2');
        chevronAppliances.classList.remove('chevronAppliances-rotate');
        chevronTools.classList.remove('chevronTools-rotate');

        if (ingredientsAdvanced.classList.contains('col-2')) {
            ingredientsAdvanced.classList.add('col-6');
            ingredientsAdvanced.classList.remove('col-2');
        } else {
            ingredientsAdvanced.classList.remove('col-6');
            ingredientsAdvanced.classList.add('col-2');
        }
        if (chevronIngr.classList.contains('chevronIngredients')) {
            chevronIngr.classList.add('chevronIngredients-rotate');
            chevronIngr.classList.remove('chevronIngredients');
        } else {
            chevronIngr.classList.remove('chevronIngredients-rotate');
            chevronIngr.classList.add('chevronIngredients');
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
const appliancesInputGroup = document.getElementById('appliances');
const listAppliancesDOM = document.getElementById('listAppliances');
const listToolsDOM = document.getElementById('listTools');

function listAppliances(recipes) {
    // au click input appareils passe à une largeur col-6
    appliancesInputGroup.addEventListener('click', () => {
        //gére la widht si l'on clique d'un input à un autre input
        listIngredientsDOM.classList.add('off');
        listToolsDOM.classList.add('off');
        ingredientsAdvanced.classList.remove('col-6');
        ingredientsAdvanced.classList.add('col-2');
        toolsAdvanced.classList.remove('col-6');
        toolsAdvanced.classList.add('col-2');
        chevronIngr.classList.remove('chevronIngredients-rotate');
        chevronTools.classList.remove('chevronTools-rotate');

        if (appliancesAdvanced.classList.contains('col-2')) {
            appliancesAdvanced.classList.add('col-6');
            appliancesAdvanced.classList.remove('col-2');
        } else {
            appliancesAdvanced.classList.remove('col-6');
            appliancesAdvanced.classList.add('col-2');
        }
        if (chevronAppliances.classList.contains('chevronAppliances')) {
            chevronAppliances.classList.add('chevronAppliances-rotate');
            chevronAppliances.classList.remove('chevronAppliances');
        } else {
            chevronAppliances.classList.remove('chevronAppliances-rotate');
            chevronAppliances.classList.add('chevronAppliances');
        }
        //tags display none
        if (listAppliancesDOM.classList.contains('off')) {
            listAppliancesDOM.classList.remove('off');
        } else {
            listAppliancesDOM.classList.add('off');
        }
    });

    // application du filtrage des doublons du json
    const { ingredients, appliances, tools } = filterArray(recipes);
    console.log(appliances);
    const ul = document.createElement('ul');
    ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
    ul.id = 'listAppliances__ul';
    appliances.forEach((appliance) => {
        const li = document.createElement('li');
        li.innerHTML = appliance;
        ul.appendChild(li);
        listAppliancesDOM.append(ul);
    });
}

// Ustensiles
const toolsInputGroup = document.getElementById('tools');

function listTools(recipes) {
    // au click input ustensiles passe à une largeur col-6
    toolsInputGroup.addEventListener('click', () => {
        //gére la widht si l'on clique d'un input à un autre input
        listIngredientsDOM.classList.add('off');
        listAppliancesDOM.classList.add('off');
        ingredientsAdvanced.classList.remove('col-6');
        ingredientsAdvanced.classList.add('col-2');
        appliancesAdvanced.classList.remove('col-6');
        appliancesAdvanced.classList.add('col-2');
        chevronIngr.classList.remove('chevronIngredients-rotate');
        chevronAppliances.classList.remove('chevronAppliances-rotate');

        if (toolsAdvanced.classList.contains('col-2')) {
            toolsAdvanced.classList.add('col-6');
            toolsAdvanced.classList.remove('col-2');
        } else {
            toolsAdvanced.classList.remove('col-6');
            toolsAdvanced.classList.add('col-2');
        }
        if (chevronTools.classList.contains('chevronTools')) {
            chevronTools.classList.add('chevronTools-rotate');
            chevronTools.classList.remove('chevronTools');
        } else {
            chevronTools.classList.remove('chevronTools-rotate');
            chevronTools.classList.add('chevronTools');
        }
        //tags display none
        if (listToolsDOM.classList.contains('off')) {
            listToolsDOM.classList.remove('off');
        } else {
            listToolsDOM.classList.add('off');
        }
    });

    // application du filtrage des doublons du json
    const { ingredients, appliances, tools } = filterArray(recipes);
    console.log(tools);
    const ul = document.createElement('ul');
    ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
    ul.id = 'listTools__ul';
    tools.forEach((tool) => {
        const li = document.createElement('li');
        li.innerHTML = tool;
        ul.appendChild(li);
        listToolsDOM.append(ul);
    });
}
