//recettes (acceuil)
function recipesFactory(data) {
    const {
        name,
        ingredients,
        time,
        description,
    } = data;

    const cardList = document.getElementById('card-list');

    const col = document.createElement('div');
    col.className = 'col';
    const card = document.createElement('div');
    card.className = 'card';
    const imgDOM = document.createElement('img');
    imgDOM.className = 'card-img-top';
    imgDOM.alt = '...';
    imgDOM.src = '...';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardBodyHeader = document.createElement('div');
    cardBodyHeader.className =
        'card-body__header d-flex justify-content-between align-items-center mb-2';
    const cardTitleDOM = document.createElement('h5');
    cardTitleDOM.textContent = name;
    cardTitleDOM.className = 'card-title mb-0';
    const cardBodyTimes = document.createElement('div');
    cardBodyTimes.className = 'card-body__times d-flex align-items-center';
    const faClock = document.createElement('i');
    faClock.className = 'far fa-clock';
    const cardDurationDOM = document.createElement('p');
    cardDurationDOM.className = 'card-text card-body__times';
    cardDurationDOM.textContent = time + 'min';

    cardBodyTimes.appendChild(faClock);
    cardBodyTimes.appendChild(cardDurationDOM);
    cardBodyHeader.appendChild(cardTitleDOM);
    cardBodyHeader.appendChild(cardBodyTimes);
    cardBody.appendChild(cardBodyHeader);
    card.appendChild(imgDOM);
    card.appendChild(cardBody);
    col.appendChild(card);
    cardList.append(col);

    const cardRecipeContent = document.createElement('div');
    cardRecipeContent.className =
        'card-text card-body__content d-flex justify-content-between';
    const cardRecipe = document.createElement('div');
    cardRecipe.className =
        'card-text card-body__recipe';

    const listeUL = document.createElement('ul');
    listeUL.className = 'liste';

    ingredients.forEach((ingredientEl) => {
        if (ingredientEl.hasOwnProperty('quantity')) {
            const listeLI = document.createElement('li');
            const span = document.createElement('span');
            span.innerHTML = ingredientEl.ingredient + ': ';
            const quant = document.createElement('p');
            if (ingredientEl.hasOwnProperty('unit')) {
                quant.innerHTML = ingredientEl.quantity + ' ' + ingredientEl.unit;
            } else {
                quant.innerHTML = ingredientEl.quantity;
            }
            listeLI.appendChild(span);
            listeLI.appendChild(quant);
            listeUL.appendChild(listeLI);
        } else {
            const listeLI = document.createElement('li');
            const span = document.createElement('span');
            span.innerHTML = ingredientEl.ingredient;
            listeLI.appendChild(span);
            listeUL.appendChild(listeLI);
        }
    });

    const cardDescription = document.createElement('p');
    cardDescription.className = 'card-body__description';
    cardDescription.textContent = description;

    cardRecipe.append(listeUL);
    cardRecipeContent.append(cardRecipe);
    cardRecipeContent.append(cardDescription);
    cardBody.append(cardRecipeContent);
}
