import {Fragment} from "react";
function App() {
  return (
    <Fragment>
    <main>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">Tienda y electronica JJEJJ</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="registro">Registrar productos</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="ventas">Ventas</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="product">Productos</a>
                      </li>
                      <li  class="nav-item">
                          <a class="nav-link" href="#">Carrito de compras</a>
                      </li>
                      <li  class="nav-item disabled">
                          <a class="nav-link disabled" href="#">Gracias por preferirnos</a>
                      </li>
                  </ul>
                  <ul  class="navbar-nav ms-auto">
                      <li class="nav-item mr-4">
                          <a href="#" class="nav-link disabled">
                              <i class="fas fa-user"></i>
                              <span>Bienvenido </span>
                          </a>
                      </li>
                      <li class="nav-item">
                          <form method="post" action="/">
                              <a href="#" onclick="this.parentNode.submit();" class="nav-link">
                                  <i class="fas fa-sign-out-alt"></i>
                                  Salir
                              </a>
                          </form>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  
    
      <section class="py-1 text-center container">
        <div class="row py-lg-2">
          <div class="col-lg-7 col-md-8 mx-auto">
            <h1 class="fw-light">Bienvenido a nuestra tienda de electronica</h1>
            <p class="lead text-muted">
              Para nosotros es un placer tenerte aqui, espero sea de tu agrado y
              podamos tener pronto nuevamente
            </p>
            <p>
              <a href="" class="btn btn-primary my-2">
                Carrito de compras
              </a>
              <br></br>
              <a href="" class="btn btn-secondary my-2">
                Volver al Inicio
              </a>
            </p>
          </div>
        </div>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <div class="card shadow-sm">
                  <img src="https://clonesyperifericos.com/wp-content/uploads/2022/02/9-600x600.png"></img>
                  <div class="card-body">
                    <h5 class="card-title">Nvidia RTX 3070 12Gb</h5>
                    <p class="card-text">$ 6.990.000</p>
                    <p class="card-text">
                    tarjeta grafica 3070 de 12gb DDR6 utilizada para gaming profesional 
                    es una maravilla lanzada en 2020
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="#" class="btn btn-primary">
                          Descripcion
                        </a>
                      </div>
                      <a href="#" class="btn btn-success">
                        Agregar al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="card shadow-sm">
                  <img src="https://clonesyperifericos.com/wp-content/uploads/2022/02/9-600x600.png"></img>
                  <div class="card-body">
                    <h5 class="card-title">Nvidia RTX 3070 12Gb</h5>
                    <p class="card-text">$ 6.990.000</p>
                    <p class="card-text">
                    tarjeta grafica 3070 de 12gb DDR6 utilizada para gaming profesional 
                    es una maravilla lanzada en 2020
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="#" class="btn btn-primary">
                          Descripcion
                        </a>
                      </div>
                      <a href="#" class="btn btn-success">
                        Agregar al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="card shadow-sm">
                  <img src="https://clonesyperifericos.com/wp-content/uploads/2022/02/9-600x600.png"></img>
                  <div class="card-body">
                    <h5 class="card-title">Nvidia RTX 3070 12Gb</h5>
                    <p class="card-text">$ 6.990.000</p>
                    <p class="card-text">
                    tarjeta grafica 3070 de 12gb DDR6 utilizada para gaming profesional 
                    es una maravilla lanzada en 2020
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="#" class="btn btn-primary">
                          Descripcion
                        </a>
                      </div>
                      <a href="#" class="btn btn-success">
                        Agregar al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="card shadow-sm">
                  <img src="https://clonesyperifericos.com/wp-content/uploads/2022/02/9-600x600.png"></img>
                  <div class="card-body">
                    <h5 class="card-title">Nvidia RTX 3070 12Gb</h5>
                    <p class="card-text">$ 6.990.000</p>
                    <p class="card-text">
                    tarjeta grafica 3070 de 12gb DDR6 utilizada para gaming profesional 
                    es una maravilla lanzada en 2020
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="#" class="btn btn-primary">
                          Descripcion
                        </a>
                      </div>
                      <a href="#" class="btn btn-success">
                        Agregar al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="card shadow-sm">
                  <img src="https://clonesyperifericos.com/wp-content/uploads/2022/02/9-600x600.png"></img>
                  <div class="card-body">
                    <h5 class="card-title">Nvidia RTX 3070 12Gb</h5>
                    <p class="card-text">$ 6.990.000</p>
                    <p class="card-text">
                    tarjeta grafica 3070 de 12gb DDR6 utilizada para gaming profesional 
                    es una maravilla lanzada en 2020
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="#" class="btn btn-primary">
                          Descripcion
                        </a>
                      </div>
                      <a href="#" class="btn btn-success">
                        Agregar al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="card shadow-sm">
                  <img src="https://clonesyperifericos.com/wp-content/uploads/2022/02/9-600x600.png"></img>
                  <div class="card-body">
                    <h5 class="card-title">Nvidia RTX 3070 12Gb</h5>
                    <p class="card-text">$ 6.990.000</p>
                    <p class="card-text">
                    tarjeta grafica 3070 de 12gb DDR6 utilizada para gaming profesional 
                    es una maravilla lanzada en 2020
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="#" class="btn btn-primary">
                          Descripcion
                        </a>
                      </div>
                      <a href="#" class="btn btn-success">
                        Agregar al carrito
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </main>
    </Fragment>
  );
}
export default App;