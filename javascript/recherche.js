// Fonction pour créer un nouvel élément
function createNode(element) {
    return document.createElement(element);
}

// Fonction pour ajouter un élément à un parent
function append(parent, el) {
    return parent.appendChild(el);
}

// Récupération du formulaire et de l'élément où afficher les résultats
const formRecherche = document.getElementById("rechercher-livre-form");
const main = document.querySelector("main");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs des champs du formulaire
    const titre = document.getElementById("titre").value;
    const auteur = document.getElementById("auteur").value;
    const genre = document.getElementById("genre").value;
    const disponibiliter = document.getElementById("disponibiliter").value;

    // URL de l'API avec les paramètres de recherche
    const url = `http://localhost:8080/ords/utilisateurs/recherche/?titre=${titre}&auteur=${auteur}&genre=${genre}&disponibiliter=${disponibiliter}`;

    // Effectue la requête de recherche
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            // Supprime les résultats précédents
            const previousResults = document.getElementById("resultats-recherche");
            if (previousResults) {
                main.removeChild(previousResults);
            }

            // Crée un conteneur pour les résultats
            const resultsContainer = createNode("div");
            resultsContainer.id = "resultats-recherche";

            // Affiche les résultats de la recherche
            let livres = data.items;
            if (livres.length === 0) {
                const noResultsMessage = createNode("p");
                noResultsMessage.innerHTML = "Aucun livre trouvé.";
                append(resultsContainer, noResultsMessage);
            } else {
                let ul = createNode("ul");
                livres.forEach(function (livre) {
                    let li = createNode("li"),
                        span = createNode("span");
                    span.innerHTML = `${livre.id} - ${livre.titre} par ${livre.auteur} (Genre: ${livre.genre}, Disponibilité: ${livre.disponibiliter})`;
                    append(li, span);
                    append(ul, li);
                });
                append(resultsContainer, ul);
            }
            append(main, resultsContainer);
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
});
// Fonction pour créer un nouvel élément
function createNode(element) {
    return document.createElement(element);
}

// Fonction pour ajouter un élément à un parent
function append(parent, el) {
    return parent.appendChild(el);
}

// Récupération du formulaire et de l'élément où afficher les résultats
const form = document.getElementById("rechercher-livre-form");
const main1 = document.querySelector("main");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs des champs du formulaire
    const titre = document.getElementById("titre").value;
    const auteur = document.getElementById("auteur").value;
    const genre = document.getElementById("genre").value;
    const disponibiliter = document.getElementById("disponibiliter").value;

    // URL de l'API avec les paramètres de recherche
    const url = `http://localhost:8080/ords/utilisateurs/recherche/?titre=${titre}&auteur=${auteur}&genre=${genre}&disponibiliter=${disponibiliter}`;

    // Effectue la requête de recherche
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            // Supprime les résultats précédents
            const previousResults = document.getElementById("resultats-recherche");
            if (previousResults) {
                main.removeChild(previousResults);
            }

            // Crée un conteneur pour les résultats
            const resultsContainer = createNode("div");
            resultsContainer.id = "resultats-recherche";

            // Affiche les résultats de la recherche
            let livres = data.items;
            if (livres.length === 0) {
                const noResultsMessage = createNode("p");
                noResultsMessage.innerHTML = "Aucun livre trouvé.";
                append(resultsContainer, noResultsMessage);
            } else {
                let ul = createNode("ul");
                livres.forEach(function (livre) {
                    let li = createNode("li"),
                        span = createNode("span");
                    span.innerHTML = `${livre.id} - ${livre.titre} par ${livre.auteur} (Genre: ${livre.genre}, Disponibilité: ${livre.disponibiliter})`;
                    append(li, span);
                    append(ul, li);
                });
                append(resultsContainer, ul);
            }
            append(main, resultsContainer);
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
});
