import React from "react";
import Button from 'react-bootstrap/Button'
function Barra(){
    return(
        <div className="BARRAHOME">
            <div className="Home">
                <Button variant="outline-info" className="butt">Home</Button>{''}
            </div>
            <div className="Sobre">
                <Button variant="outline-info" className="butt">Sobre</Button>{''}
            </div>
            <div className="Contato">
                <Button variant="outline-info" className="butt">Contato</Button>{''}
            </div>
        </div>
    )
}
export default Barra;