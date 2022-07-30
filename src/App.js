import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaEventos from "./components/ListaEventos";

import CategoriaProvider from "./context/CategoriaContext";
import EventosProvider from "./context/EventosContext";

function App() {
  return (
    <EventosProvider>
      <CategoriaProvider>
        <Header />
          <div className="max-w-[60rem] mx-auto px-6 py-10">
            <Formulario />
            <ListaEventos />
          </div>
      </CategoriaProvider>
    </EventosProvider>
  );
}

export default App;
