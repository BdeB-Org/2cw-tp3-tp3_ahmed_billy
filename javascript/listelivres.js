document.addEventListener("DOMContentLoaded", function() {



  // Sélectionne l'élément où les livres seront affichés
  const livresS = document.getElementById("livres");
  
  // Sélectionne l'élément h1 et change son contenu pour "Liste des livres"
  const elemH1 = document.getElementById("h1");
  elemH1.textContent = "Liste des livres";
  
  // URL de l'API Restscott pour récupérer les livres
  const url = "http://localhost:8080/ords/utilisateurs/livres/";

  // Effectue une requête pour récupérer les livres depuis l'API
  fetch(url)
    .then(response => response.json()) 
    .then(data => {
      const livres = data.items; // Stocke les livres récupérés dans une variable

      
      livres.forEach(livre => {
        const li = document.createElement("li"); 
        const span = document.createElement("span"); 


        // Remplit le span avec les informations du livre
        span.textContent = `${livre.id} - ${livre.titre} par ${livre.auteur} (Genre: ${livre.genre || 'Non déclaré'})`;
        li.appendChild(span); 
        livresS.appendChild(li); 
      });
    })
    .catch(error => {
      // Affiche une erreur dans la console si la requête échoue
      console.error("Erreur le chargement des données n'a pas pu être commis:", error);
    });
});
