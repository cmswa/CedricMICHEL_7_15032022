//recettes (acceuil)
function recipesFactory(data) {
    const {
        id,
        name,
        servings,
        ingredients,
        time,
        description,
        appliance,
        ustensils,
    } = data;

    const cardList = document.getElementById('card-list');

    const col = document.createElement('div');
    col.className = 'col';
    const card = document.createElement('div');
    card.className = 'card';
    const imgDOM = document.createElement('img');
    imgDOM.className = 'card-img-top'
    imgDOM.alt = '...';
    imgDOM.src = '...';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardBodyHeader = document.createElement('div');
    cardBodyHeader.className =
        'card-body__header d-flex justify-content-between mb-2';
    const cardTitleDOM = document.createElement('h5');
    cardTitleDOM.textContent = name;
    cardTitleDOM.className = 'card-title mb-0';
    const cardBodyTimes = document.createElement('div');
    cardBodyTimes.className = 'card-body__times d-flex align-items-center';
    const faClock = document.createElement('i');
    faClock.className = 'far fa-clock';
    const cardDurationDOM = document.createElement('p');
    cardDurationDOM.className = 'card-text';
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

    /*
     <div class="col">
                            <div class="card ">
                                <img src="..." class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="card-body__header d-flex justify-content-between mb-2">
                                        <h5 id="cardTitle" class="card-title mb-0">Card title</h5>
                                        <div class="card-body__times d-flex align-items-center">
                                            <i class="far fa-clock" aria-hidden="true"></i>
                                            <p id="cardDuration" class="card-text">10min</p>
                                        </div>
                                    </div>
                                    <div class="card-text card-body__content d-flex justify-content-between">
                                        <div id="cardRecipe" class="card-text card-body__recipe"></div>
                                        <p id="cardDescription" class="card-text card-body__description">Some example text. Some example text.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

    const cardRecipeDOM = document.createElement('div');

    const listeUL = document.createElement('ul');
    listeUL.classList.add('liste');
    console.log(ingredients);

    ingredients.forEach((ingredientEl) => {
        if (ingredientEl.hasOwnProperty('quantity')) {
            const listeLI = document.createElement('li');
            const span = document.createElement('span');
            span.innerHTML = ingredientEl.ingredient + ': ';
            const quant = document.createElement('p');
            if (ingredientEl.hasOwnProperty('unit')) {
                quant.innerHTML = ingredientEl.quantity + ingredientEl.unit;
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
    cardRecipeDOM.appendChild(listeUL);

    const cardDescriptionDOM = document.createElement('p');
    cardDescriptionDOM.textContent = description;
*/
}
