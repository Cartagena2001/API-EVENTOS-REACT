import React from "react";
import { EventosConsumer } from "../context/EventosContext";
import CardEvento from "./CardEvento";

const ListaEventos = () => {
    return(
        <div>
            <h1 className="text-black font-bold text-3xl py-5">Resultados</h1>
            <EventosConsumer>
                {(value) =>{
                    return value.eventos.map(evento => (
                        <CardEvento key={evento.id} evento={evento} />
                    ));
                }}
            </EventosConsumer>
        </div>
    );
}

export default ListaEventos;