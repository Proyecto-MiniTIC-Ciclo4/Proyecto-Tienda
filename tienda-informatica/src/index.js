//import {render} from "react-dom";
//import ReactDOM from 'react-dom/client';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./components/productos-admin/tienda.js";
import Registro from "./components/registro-admin/registro.js";
import{
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"



//Renderizacion nueva
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={<App />} />
            <Route path='registro' element={<Registro />} />
        </Routes>
        
        </BrowserRouter>,
    rootElement
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// const rootElement = document.getElementById('root');
// render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />} />
//         </Routes>
//     </BrowserRouter>,
//     rootElement
// );