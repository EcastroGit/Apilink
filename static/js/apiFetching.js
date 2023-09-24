function getMarvelData() {
  const fetchingDiv = document.querySelector("#fetching-div");
  const fetchingProtocol = window.location.protocol;
  const fetchingHost = window.location.host;
  const endpoint = `${fetchingProtocol}//${fetchingHost}/api/marvel/v1/characters`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error));

  function showData(data) {
    data.forEach((character) => {
      const card = document.createRange().createContextualFragment(
        ` 
        <div class="api-card">
          <div class="text-center">
            <img src="${character.image}" alt="Personaje de Marvel" />
          </div>
          <p class="text-center mb-0 fw-bold">${character.name}</p>
          <p class="text-center">${character.rol}</p>
        </div>
      
        `
      );
      fetchingDiv.appendChild(card);
    });
  }
}

function getDcComicsData() {
  const fetchingDiv = document.querySelector("#fetching-div");
  const fetchingProtocol = window.location.protocol;
  const fetchingHost = window.location.host;
  const endpoint = `${fetchingProtocol}//${fetchingHost}/api/dc-comics/v1/characters`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error));

  function showData(data) {
    data.forEach((character) => {
      const card = document.createRange().createContextualFragment(
        `
        <div class="api-card">
          <div class="text-center">
            <img src="${character.image}" alt="Personaje de Marvel" />
          </div>
          <p class="text-center mb-0 fw-bold">${character.name}</p>
          <p class="text-center">${character.rol}</p>
        </div>
        `
      );
      fetchingDiv.appendChild(card);
    });
  }
}

function getEuropeTeamsData() {
  const fetchingDiv = document.querySelector("#fetching-div");
  const fetchingHost = window.location.host;
  const fetchingProtocol = window.location.protocol;
  const endpoint = `${fetchingProtocol}//${fetchingHost}/api/europe-teams/v1/top-teams`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error));

  function showData(data) {
    data.forEach((team) => {
      const card = document.createRange().createContextualFragment(
        `
        <div class="api-card-teams">
          <div class="text-center">
            <img src="${team.crest}" alt="Personaje de Marvel" />
          </div>
          <p class="text-center mb-0 fw-bold">${team.name}</p>
          <p class="text-center"><strong>Champions: </strong>${team["champions league"]}</p>
        </div>
        `
      );
      fetchingDiv.appendChild(card);
    });
  }
}
