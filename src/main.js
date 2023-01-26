function getCategoriesList() {
  const apiUrl = `https://swapi.dev/api`;
  axios.get(apiUrl).then(buildCategoriesList);
}

function buildCategoriesList(response) {
  const container = document.querySelector("#listContainer");
  let containerHTML = "";

  Object.keys(response.data).forEach((key) => {
    containerHTML =
      containerHTML +
      `<li class="nav-item"> 
      <a class="nav-link active" aria-current="page" link="${response.data[key]}" onClick="getEntityList()">${key}</a>
      </li>`;

    container.innerHTML = containerHTML;
  });
}

function getEntityList() {
  const apiUrl = `https://swapi.dev/api/${event.srcElement.innerHTML}`;
  const form = document.querySelector("#searchForm");
  form.setAttribute("category", event.srcElement.innerHTML);
  axios.get(apiUrl).then(buildEntities);
}

function search() {
  const form = document.querySelector("#searchForm");
  const category = form.getAttribute("category");
  const apiUrl = `https://swapi.dev/api/${category}/?search=${form.value}`;
  axios.get(apiUrl).then(buildEntities);
}

function buildEntities(response) {
  const container = document.querySelector("#entityContainer");
  let containerHTML = "";

  response.data.results.forEach((entity) => {
    containerHTML =
      containerHTML + `<pre>${JSON.stringify(entity, undefined, 2)}</pre><br>`;

    container.innerHTML = containerHTML;
  });
}
