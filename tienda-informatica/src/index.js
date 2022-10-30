//import {render} from "react-dom";
//import ReactDOM from 'react-dom/client';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./components/productos-admin/tienda.js";
import Registro from "./components/registro-admin/registro.js";
import { VentasRealizadas } from './components/ventas-realizadas-admin/ventas_Realizadas.js';
import{
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Login from "./components/vista-login/vistaLoginGen.js";
import Productosu from './components/productos-usuario/productos-usuario.js';


//Renderizacion nueva
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path ='login' element={<Login />} />
            <Route path='registro' element={<Registro />} />
            <Route path='ventas' element={<VentasRealizadas />} />
            <Route path='/' element={<App />} />
            <Route path='product' element={<Productosu/>} />
            
        </Routes>
        
        </BrowserRouter>,
    rootElement
);

/*ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);*/

// const rootElement = document.getElementById('root');
// render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />} />
//         </Routes>
//     </BrowserRouter>,
//     rootElement
// );