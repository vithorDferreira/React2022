import{
    Routes,
    Route
} from "react-router-dom"

import App from "./App";
import Sobre from "./components/Sobre";

export default function MainRoutes(){

    return(

        <Routes>
            <Route path="/" element={App}/>
            <Route path="/Sobre" element={Sobre}/>
        </Routes>
    );
}