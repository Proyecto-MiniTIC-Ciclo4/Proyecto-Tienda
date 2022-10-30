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
import {vista} from "./components/vista-login/vistaLoginGen.js";
import {productosu} from './components/productos-usuario/productos-usuario.js';



//Renderizacion nueva
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path ='logeo' element={<vistaLog />} />
            <Route path='registro' element={<Registro />} />
            <Route path='ventas' element={<VentasRealizadas />} />
            <Route path='home' element={<App />} />
            <Route path='product' element={<productosu/>} />
            
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