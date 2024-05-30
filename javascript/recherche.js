document.addEventListener("DOMContentLoaded", function() {
    const url = "http://localhost:8080/ords/utilisateurs/livres/";
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const livres = data.items;
  
        const form = document.getElementById("rechercher-livre-form");
        form.addEventListener("submit", function(event) {
          event.preventDefault();
          const titre = document.getElementById("titre").value.toLowerCase();
          const auteur = document.getElementById("auteur").value.toLowerCase();
          const genre = document.getElementById("genre").value.toLowerCase();
  
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
            span.textContent = `${livre.id} - ${livre.titre} par ${livre.auteur} (Genre: ${livre.genre || 'Non déclaré'})`;
            div.appendChild(span);
            resultatsDiv.appendChild(div);
          });
        });
      })
      .catch(error => {
        console.error("Erreur le chargement n'a pas pu être commis.:", error);
      });
  });
  