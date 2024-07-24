import React from 'react'; // Importa la biblioteca React para poder usar JSX
import'./styles.css'; // Importa el archivo de estilos CSS
import ToastButton from './componentes/ToastButton'; // Importa el componente ToastButton
import ModalButton from './componentes/ModalButton'; // Importa el componente ModalButton
import CustomCarousel from './componentes/CustomCarousel'; // Importa el componente CustomCarousel
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap para usarlos en los componentes


 // Componente principal de la aplicación.
 //Aquí se integran y renderizan los componentes ToastButton, ModalButton y CustomCarousel.
 
function App() {
  return (
    <div className="App">
       {/* Renderiza el componente ToastButton */}
      <ToastButton />
      {/* Renderiza el componente ModalButton */}
      <ModalButton />
       {/* Renderiza el componente CustomCarousel */}
      <CustomCarousel />
    </div>
  );
}
// Exporta el componente App para que pueda ser usado en otros archivos
export default App;
