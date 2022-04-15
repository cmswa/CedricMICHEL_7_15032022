const ingredientsInputGroup = document.getElementById('ingredients');
const ingredientsAdvanced = document.querySelector('.ingredients');
const appliancesAdvanced = document.querySelector('.appliances');
const toolsAdvanced = document.querySelector('.tools');
const advancedSearchDOM = document.querySelector('.advancedSearch');
const chevronIngr = document.querySelector('.chevronIngredients');
const chevronAppliances = document.querySelector('.chevronAppliances');
const chevronTools = document.querySelector('.chevronTools');
const listIngredientsDOM = document.getElementById('listIngredients');

// liste des ingrédients
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
    initializeFilterIngredients(recipes);
}

// initialiser et mettre à jour les tags restant pour ingrédients
function initializeFilterIngredients(recipes) {
  // application du filtrage des doublons du json
  const { ingredients, appliances, tools } = filterArray(recipes);
  console.log(ingredients);
  listIngredientsDOM.innerHTML = '';
  const ul = document.createElement('ul');
  ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
  ul.id = 'listIngredients__ul';
  ingredients.forEach((ingr) => {
      const li = document.createElement('li');
      li.className = 'listIngredients__li';
      li.innerHTML = ingr;
      ul.appendChild(li);
  });
  listIngredientsDOM.append(ul);
}

// liste des appareils
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
    initializeFilterAppliances(recipes);
}

// initialiser et mettre à jour les tags restant pour appareils
function initializeFilterAppliances(recipes) {
    // application du filtrage des doublons du json
    const { ingredients, appliances, tools } = filterArray(recipes);
    console.log(appliances);
    listAppliancesDOM.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
    ul.id = 'listAppliances__ul';
    appliances.forEach((appliance) => {
        const li = document.createElement('li');
        li.className = 'listAppliances__li';
        li.innerHTML = appliance;
        ul.appendChild(li);
    });
    listAppliancesDOM.append(ul);
}

// liste des ustensiles
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
    initializeFilterTools(recipes);
}

// initialiser et mettre à jour les tags restant pour ustensiles
function initializeFilterTools(recipes) {
 // application du filtrage des doublons du json
    const { ingredients, appliances, tools } = filterArray(recipes);
    console.log(tools);
    listToolsDOM.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
    ul.id = 'listTools__ul';
    tools.forEach((tool) => {
        const li = document.createElement('li');
        li.className = 'listTools__li';
        li.innerHTML = tool;
        ul.appendChild(li);
    });
    listToolsDOM.append(ul);
}

// recherche dans les listes tags avec input
function listenOnInputs(recipes) {
    const { ingredients, appliances, tools } = filterArray(recipes);

    const inputToolsDOM = document.getElementById('inputTools');
    inputToolsDOM.addEventListener('keyup', (e) => {
        let results = [];
        listToolsDOM.innerHTML = '';
        const toolsResearch = e.target.value.toLowerCase();
        results = tools.filter((tool) => {
            return tool.toLowerCase().includes(toolsResearch);
        });
        const ul = document.createElement('ul');
        ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
        ul.id = 'listTools__ul';
        results.forEach((tool) => {
            const li = document.createElement('li');
            li.className = 'listTools__li';
            li.innerHTML = tool;
            ul.appendChild(li);
            listToolsDOM.append(ul);
        });
    });

    const inputAppliancesDOM = document.getElementById('inputAppliances');
    inputAppliancesDOM.addEventListener('keyup', (e) => {
        let results = [];
        listAppliancesDOM.innerHTML = '';
        const appliancesResearch = e.target.value.toLowerCase();
        results = appliances.filter((appliance) => {
            return appliance.toLowerCase().includes(appliancesResearch);
        });
        const ul = document.createElement('ul');
        ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
        ul.id = 'listAppliances__ul';
        results.forEach((appliance) => {
            const li = document.createElement('li');
            li.className = 'listAppliances__li';
            li.innerHTML = appliance;
            ul.appendChild(li);
            listAppliancesDOM.append(ul);
        });
    });

    const inputIngredientsDOM = document.getElementById('inputIngredients');
    inputIngredientsDOM.addEventListener('keyup', (e) => {
        let results = [];
        listIngredientsDOM.innerHTML = '';
        const ingredientsResearch = e.target.value.toLowerCase();
        results = ingredients.filter((ingredient) => {
            return ingredient.toLowerCase().includes(ingredientsResearch);
        });
        const ul = document.createElement('ul');
        ul.className = 'd-flex align-content-around flex-wrap row row-cols-3';
        ul.id = 'listIngredients__ul';
        results.forEach((ingredient) => {
            const li = document.createElement('li');
            li.className = 'listIngredients__li';
            li.innerHTML = ingredient;
            ul.appendChild(li);
            listIngredientsDOM.append(ul);
        });
    });
}

