import {render} from "react-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import{
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import App from "./components/productos-admin/tienda.js";

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