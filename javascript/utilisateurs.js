function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  // Main
  const utilisateursUl = document.getElementById("utilisateurs");
  const elemH1 = document.getElementById("h1");
  const url = "http://127.0.0.1:8080/ords/utilisateurs/utilisateurs"; // Remplacez par l'URL correcte de votre API
  elemH1.innerHTML = "Liste des Utilisateurs";
  
  // Récupérer les utilisateurs depuis l'API
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let utilisateurs = data.items; //.results;
      return utilisateurs.map(function (utilisateur) {
        let li = createNode("li"),
            span = createNode("span");
        span.innerHTML = `Nom: ${utilisateur.nom}, Email: ${utilisateur.email}`;
        append(li, span);
        append(utilisateursUl, li);
      });
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
  