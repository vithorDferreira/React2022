
import React from "react";
import Button from 'react-bootstrap/Button'


function Lista(){
    return(
        <>
        
           <hr></hr>
           <h3>Formação</h3>
            <ul>
                    <li>Trabalho de conclusão do Curso</li>
                    <li>Curso de Frontend em React</li>
                    <li>Curso de Programação Web</li>
                    <li>Programação em Pyhton</li>
                </ul>
                <Button variant="info" className="butt">Adicionar nova Formação +</Button>{''}
        </>
    )
}
export default Lista;