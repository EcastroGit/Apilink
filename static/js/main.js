const header = document.querySelector("#header");
const footer = document.querySelector("#footer");


// Header generation
header.innerHTML = 
`
  <nav id="header-nav" class="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-5 rounded">
    <div class="container-fluid">
      <a class="navbar-brand ps-5" href="/">Apilink</a>
      <button
        class="navbar-toggler me-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse ps-5"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/catalog">API</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Docs
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/docs">General</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/apis-docs">API docs</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-github fs-5"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`

// Footer generation
 footer.innerHTML = 
 `
  <div>
    <span><a class="footer-nav" href="/">Inicio</a></span>
    <span><a class="footer-nav" href="/catalog">API's</a></span>
    <span><a class="footer-nav" href="/docs">Docs</a></span>
  </div>
  <div>
    <span><a href="/privacy-policy">Política de privacidad</a></span>
  </div>
  <div>
    <span>© Copyright 2023 - Web API</span>
  </div>
  <div>
    <span>Developed by <strong>Esteban Castro</strong></span>
  </div>
 `