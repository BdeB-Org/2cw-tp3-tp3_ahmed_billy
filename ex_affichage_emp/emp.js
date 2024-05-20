function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
//Main
const emp_ul = document.getElementById("employees");
const elemH1 = document.getElementById("h1");
const url = "http://localhost:8080/ords/utilisateurs/users/";
elemH1.innerHTML = "Liste des employees";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let utilisateurs = data.items; //.results;
    return utilisateurs.map(function (utilisateurs) {
      let li = createNode("li"),
        span = createNode("span");
      span.innerHTML = `${utilisateurs.id} ${utilisateurs.nom} ${utilisateurs.email}`;
      append(li, span);
      append(emp_ul, li);
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
