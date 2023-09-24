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
      La API de personajes de Marvel es una herramienta que
      brinda acceso a una colección de información sobre los
      icónicos personajes del universo Marvel. Desde superhéroes
      legendarios hasta villanos memorables, esta API proporciona datos
      detallados sobre sus historias, habilidades, afiliaciones y mucho
      más. Ya sea para desarrollar aplicaciones, crear sitios web
      temáticos o simplemente explorar el trasfondo de estos
      personajes, la API abre las puertas a un mundo
      de conocimiento para los entusiastas y desarrolladores por igual.
    </p>
    <p class="fw-semibold">Endpoint:</p>
    <div class="endpoint-container"><a href="${marvelEndpoint}">${marvelEndpoint}</a></div>
    <h3 class="text-center mt-4">Demo:</h3>
    <div id="fetching-div">

    </div>
    <div id="play-btn" onclick="getMarvelData()"><i class="bi bi-play-circle-fill"></i></div>
  `;
});

dcComics.addEventListener("click", () => {
  apisDocs.innerHTML = `
    <h2 class="text-center">Personajes DC comics</h2>
    <br />
    <p>
    La API de personajes de DC Comics ofrece una entrada fascinante al vibrante universo de los superhéroes y villanos icónicos de DC. 
    Desde los legendarios protagonistas hasta los personajes más oscuros, esta API proporciona una amplia gama de datos y detalles 
    que abarcan las historias, habilidades y conexiones de estos personajes. Ya sea que estés desarrollando aplicaciones, 
    explorando a tus héroes favoritos o simplemente sumergiéndote en la rica mitología de DC, esta API brinda una oportunidad única 
    para los entusiastas y desarrolladores de descubrir y compartir la grandeza de estos personajes de renombre mundial.
    </p>
    <p class="fw-semibold">Endpoint:</p>
    <div class="endpoint-container"><a href="${dcComicsEndpoint}">${dcComicsEndpoint}</a></div>
    <h3 class="text-center mt-4">Demo:</h3>
    <div id="fetching-div">

    </div>
    <div id="play-btn" onclick="getDcComicsData()"><i class="bi bi-play-circle-fill"></i></div>
  `
})

europeTeams.addEventListener("click", () => {
  apisDocs.innerHTML = `
    <h2 class="text-center">Equipos de Europa</h2>
    <br />
    <p>
    Bienvenidos a nuestra API de información sobre los equipos de fútbol más destacados de Europa. 
    Aquí, te sumergirás en un mundo de pasión futbolística y descubrirás datos detallados sobre los equipos que han dejado una huella 
    imborrable en la historia del deporte. 
    Desde los legendarios clubes que han dominado los torneos continentales hasta las sorpresas que han desafiado todas las expectativas, 
    nuestra API te brindará acceso a estadísticas, logros, plantillas, y momentos icónicos que definen la grandeza en el fútbol europeo.
    </p>
    <p class="fw-semibold">Endpoint:</p>
    <div class="endpoint-container"><a href="${europeTeamsEndpoint}">${europeTeamsEndpoint}</a></div>
    <h3 class="text-center mt-4">Demo:</h3>
    <div id="fetching-div">

    </div>
    <div id="play-btn" onclick="getEuropeTeamsData()"><i class="bi bi-play-circle-fill"></i></div>
  `;
});
