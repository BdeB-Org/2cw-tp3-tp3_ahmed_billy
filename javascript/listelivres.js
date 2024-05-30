document.addEventListener("DOMContentLoaded", function() {
  const livres_ul = document.getElementById("livres");
  const elemH1 = document.getElementById("h1");
  elemH1.textContent = "Liste des livres";
  const url = "http://localhost:8080/ords/utilisateurs/livres/";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const livres = data.items;
      livres.forEach(livre => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = `${livre.id} - ${livre.titre} par ${livre.auteur} (Genre: ${livre.genre || 'Non spécifié'})`;
        li.appendChild(span);
        livres_ul.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Erreur le chargement des données n'a pas pu être commis:", error);
    });
});
