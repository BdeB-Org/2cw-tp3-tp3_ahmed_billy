function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  //Main
  const livres_ul = document.getElementById("livres");
  const elemH1 = document.getElementById("h1");
  const url = "http://localhost:8080/ords/utilisateurs/livres/";
  elemH1.innerHTML = "Liste des livres";
  
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let livres = data.items;
      return livres.map(function (livre) {
        let li = createNode("li"),
            span = createNode("span");
        span.innerHTML = `${livre.id} - ${livre.titre} par ${livre.auteur}`;
        append(li, span);
        append(livres_ul, li);
      });
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
  