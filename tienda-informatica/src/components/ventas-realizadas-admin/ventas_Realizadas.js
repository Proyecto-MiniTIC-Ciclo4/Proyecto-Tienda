import React from "react";

export function VentasRealizadas() {
    return (
        <div className="ventas_Realizadas">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Software y Servicios JJEJ
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="Lista_Productos"
                                >
                                    Lista Productos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Modificar_Productos">
                                    Modificar Productos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Lista_Ventas">
                                    Lista Ventas
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <container>
                <main>
                    <section class="py-1 text-center container">
                        <h3 class="p-2 mt-2 h2 fw-bold">Ventas Realizadas </h3>
                        <table class="table table-striped">
                            <thead className="table-secondary">
                                <tr>
                                    <th>#</th>
                                    <th>Fecha</th>
                                    <th>id Venta</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>22/10/2022</td>
                                    <td>123</td>
                                    <td>$35.000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>22/10/2022</td>
                                    <td>456</td>
                                    <td>$20.000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>22/10/2022</td>
                                    <td>789</td>
                                    <td>$50.000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>22/10/2022</td>
                                    <td>110</td>
                                    <td>$1.000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>22/10/2022</td>
                                    <td>111</td>
                                    <td>$1.000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>22/10/2022</td>
                                    <td>112</td>
                                    <td>$1.000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>22/10/2022</td>
                                    <td>113</td>
                                    <td>$1.000</td>
                                </tr>
                                <tr className="table-secondary">
                                    <td colSpan={3}>Total Vendido</td>
                                    <td>$110.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            </container>
            <container>
                <footer>
                    <div class="d-grid gap-2 col-2 mx-auto">
                        <button class="btn btn-primary" type="button">
                            Descarga
                        </button>
                    </div>
                </footer>
            </container>
        </div>
    );
}
