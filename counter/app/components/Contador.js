'use client'
import React, { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const contarNum = () => {
        setContador(contador + 1);
    };

    return (
    <div>

        <div className="counter">
            <h1>Contador </h1> <br/>
            <h1 id="Numero">:{contador}</h1>
        </div>

        <div> 
        <button className="button" id="press" onClick={contarNum}>Press me!</button>
        </div>

        </div>
    );

}

export default Contador;
