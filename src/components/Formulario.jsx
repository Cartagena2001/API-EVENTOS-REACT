import React, { Component } from "react";

import { CategoriasConsumer } from "../context/CategoriaContext";
import { EventosConsumer } from "../context/EventosContext";

class Formulario extends Component {
  state = {
    nombre: "",
    categoria: "",
  };
  //si el usuario agrega un evento o categoria
  obtenerDatosEvento = e => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  };
  render() {
    return (
      <EventosConsumer>
        {(value) => {
            // console.log(value);
          return (
            <form
            onSubmit={e => {
                e.preventDefault();
                value.obtenerEventos(this.state);
            }}
            >
              <div className="text-center mb-5">
                <h1 className="text-gray-400 font-bold text-2xl">
                  Busca tu evento por Nombre o Categoria
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <input
                    className="p-3 w-full bg-slate-200 rounded focus:outline-none"
                    type="text"
                    name="nombre"
                    placeholder="Nombre de Evento o Cuidad"
                    onChange={this.obtenerDatosEvento}
                  />
                </div>
                <div>
                  <select
                    className="select w-full bg-slate-200 p-3 focus:outline-none"
                    name="categoria"
                    onChange={this.obtenerDatosEvento}
                  >
                    <option value="">Selecione una categoria</option>
                    <CategoriasConsumer>
                      {(value) => {
                        return value.categorias.map((categoria) => (
                          <option key={categoria.id} value={categoria.id}>
                            {categoria.name_localized}
                          </option>
                        ));
                      }}
                    </CategoriasConsumer>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="p-3 w-full text-white font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded hover:bg-gradient-to-br hover:from-green-300 hover:via-blue-500 hover:to-purple-600 "
                  >
                    Buscar Eventos
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      </EventosConsumer>
    );
  }
}

export default Formulario;
