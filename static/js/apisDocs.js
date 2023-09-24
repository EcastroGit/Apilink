// DOM Elements
const marvel = document.querySelector("#api-marvel");
const dcComics = document.querySelector("#api-dc-comics");
const europeTeams = document.querySelector("#api-europe-teams");
const apisDocs = document.querySelector("#catalog-demos");
// Endpoints
const protocol = window.location.protocol;
const host = window.location.host;
const marvelEndpoint = `${protocol}//${host}/api/marvel/v1/characters`;
const dcComicsEndpoint = `${protocol}//${host}/api/dc-comics/v1/characters`;
const europeTeamsEndpoint = `${protocol}//${host}/api/europe-teams/v1/top-teams`;

marvel.addEventListener("click", () => {
  apisDocs.innerHTML = `
    <h2 class="text-center">Personajes de marvel</h2>
    <br />
    <p>
     La API de personajes de Marvel consta de una estructura de datos básica en formato JSON,
     conformada por un array de objetos, donde cada objeto representa un personaje de Marvel en concreto, con su respectivo id, image,
     name, rol y una propiedad llamada skills cuyo valor es un array. 

    </p>
    <p class="fw-semibold">Endpoint:</p>
    <div class="endpoint-container"><a href="${marvelEndpoint}">${marvelEndpoint}</a></div>
    </br>
    <p class="fw-semibold">Estructura de datos JSON:</p>
    <pre>
      <code class="javascript">
      [
        {
          "id": "M1",
          "image": "image_url_here",
          "name": "Spiderman",
          "rol": "Héroe",
          "skills": ["fuerza sobrehumana", "rapidez", "reflejos", "sentido arácnido", "lucha cuerpo a cuerpo"]
        },
        {
          "id": "M2",
          "image": "image_url_here",
          "name": "Capitán América",
          "rol": "Héroe",
          "skills": ["fuerza mejorada", "artes marciales", "curación acelerada"] 
        }
      ]
      </code>
    </pre>
  `;
  hljs.highlightAll();
});

dcComics.addEventListener("click", () => {
  apisDocs.innerHTML = `
    <h2 class="text-center">Personajes DC comics</h2>
    <br />
    <p>
    La API de personajes de DC Comics consta de una estructura de datos básica en formato JSON,
    conformada por un array de objetos, donde cada objeto representa un personaje de DC Comics en concreto, con su respectivo id, image,
    name, rol y una propiedad llamada skills cuyo valor es un array de habilidades.
    </p>
    <p class="fw-semibold">Endpoint:</p>
    <div class="endpoint-container"><a href="${dcComicsEndpoint}">${dcComicsEndpoint}</a></div>
    </br>
    <p class="fw-semibold">Estructura de datos JSON:</p>
    <pre>
      <code class="javascript">
      [
        {
          "id": "DC1",
          "image": "image_url_here",
          "name": "Batman",
          "rol": "Héroe",
          "skills": ["artes marciales", "habilidades físicas", "manejo de armas", "estratega", "intelecto"]
        },
        {
          "id": "DC2",
          "image": "image_url_here",
          "name": "Superman",
          "rol": "Héroe",
          "skills": ["volar", "fuerza sobrehumana", "visión de rayos x", "invulnerabilidad", "super audición"] 
        }
      ]
      </code>
    </pre>
  `;
  hljs.highlightAll();
});

europeTeams.addEventListener("click", () => {
  apisDocs.innerHTML = `
    <h2 class="text-center">Equipos de Europa</h2>
    <br />
    <p>
    La API de equipos top de Europa consta de una estructura de datos básica en formato JSON,
    conformada por un array de objetos, donde cada objeto representa un equipo de fútbol en concreto, con su respectivo id, crest (escudo),
    name, local titles, international titles y una propiedad para el número de champions obtenidas por cada equipo.
    </p>
    <p class="fw-semibold">Endpoint:</p>
    <div class="endpoint-container"><a href="${europeTeamsEndpoint}">${europeTeamsEndpoint}</a></div>
    </br>
    <p class="fw-semibold">Estructura de datos JSON:</p>
    <pre>
      <code class="javascript">
    [
      {
          "id": "ET1",
          "crest": "crest_url_here",
          "name": "Real Madrid",
          "local titles": 68,
          "international titles": 30,
          "champions league": 14
      },
      {
          "id": "ET2",
          "crest": "crest_url_here",
          "name": "Milán",
          "local titles": 31,
          "international titles": 18,
          "champions league": 7
      }
    ]
      </code>
    </pre>
  `;
  hljs.highlightAll();
});
