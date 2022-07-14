
import React from "react";
import Button from 'react-bootstrap/Button'

function Contato(){
    return(
        <>
          <hr/>
            <h3>Contato</h3>
                <ul>   
                        <li>WhatsApp : 9999999</li>
                        <br></br>
                        <li>Linkeding:https://www.linkedin.com/in/vithor-pinto-72856b169</li>
                        <br></br>
                         <li>Github:https://github.com/vithorDferreira?tab=repositories </li> 
                </ul>
                <Button variant="info" className="butt">Adicionar Contato +</Button>{''}
        </>
    )
}
export default Contato;