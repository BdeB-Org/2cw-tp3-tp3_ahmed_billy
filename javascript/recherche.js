document.addEventListener("DOMContentLoaded", function() {
    function createNode(element) {
      return document.createElement(element);
    }
  
    function append(parent, el) {
      return parent.appendChild(el);
    }
  
    function displayBooks(books) {
      const resultatsDiv = document.getElementById("livres");
      resultatsDiv.innerHTML = ''; // Clear the list before displaying new results
      books.forEach(function (livre) {
        let div = createNode("div"),
            span = createNode("span");
        span.innerHTML = `${livre.id} - ${livre.titre} par ${livre.auteur}`;
        append(div, span);
        append(resultatsDiv, div);
      });
    }
  
    const url = "http://localhost:8080/ords/utilisateurs/livres/";
  
    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        let livres = data.items;
  
        const form = document.getElementById("rechercher-livre-form");
        form.addEventListener("submit", function(event) {
          event.preventDefault();
          const titre = document.getElementById("titre").value.toLowerCase();
          const auteur = document.getElementById("auteur").value.toLowerCase();
          const genre = document.getElementById("genre").value.toLowerCase();
          const disponibiliter = document.getElementById("disponibiliter").value.toLowerCase();
  
          const filteredBooks = livres.filter(livre => 
            (titre === "" || livre.titre.toLowerCase().includes(titre)) &&
            (auteur === "" || livre.auteur.toLowerCase().includes(auteur)) &&
            (genre === "" || (livre.genre && livre.genre.toLowerCase().includes(genre))) &&
            (disponibiliter === "" || (livre.disponibiliter && livre.disponibiliter.toLowerCase().includes(disponibiliter)))
          );
  
          displayBooks(filteredBooks);
        });
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  });
      