document.addEventListener("DOMContentLoaded", function() {

   // URL de l'API pour récupérer les livres
    const url = "http://localhost:8080/ords/utilisateurs/livres/";
  

    // une requête pour récupérer les livres depuis l'API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const livres = data.items;

        //  le formulaire de recherche de livre
  
        const form = document.getElementById("rechercher-livre-form");
        form.addEventListener("submit", function(event) {
          event.preventDefault();

          //Ici on veut mettre les résultats de requête en miniscule car il faut qu'on respecte la casse
          const titre = document.getElementById("titre").value.toLowerCase();
          const auteur = document.getElementById("auteur").value.toLowerCase();
          const genre = document.getElementById("genre").value.toLowerCase();
  
   // Filtre les livres en fonction des critères de recherche

          const livresFiltres = livres.filter(livre => 
            (titre === "" || livre.titre.toLowerCase().includes(titre)) &&
            (auteur === "" || livre.auteur.toLowerCase().includes(auteur)) &&
            (genre === "" || (livre.genre && livre.genre.toLowerCase().includes(genre)))
          );
  
          const resultatsDiv = document.getElementById("livres");
          resultatsDiv.innerHTML = '';
  
          livresFiltres.forEach(livre => {
            const div = document.createElement("div");
            const span = document.createElement("span");

            // Remplit le span avec les informations du livre, un peu comme le inner.html
            span.textContent = `${livre.id} - ${livre.titre} par ${livre.auteur} (Genre: ${livre.genre || 'Non déclaré'})`;
            div.appendChild(span);
            resultatsDiv.appendChild(div);
          });
        });
      })
      .catch(error => {
        // Affiche une erreur dans la console si la requête échoue
        console.error("Erreur le chargement n'a pas pu être commis.:", error);
      });
  });
  