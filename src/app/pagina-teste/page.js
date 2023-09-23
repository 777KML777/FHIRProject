import ComponenteTeste from "../components/Exemplo/ComponenteTeste";
import Formulario from "../components/Formulario/Formulario";
import Menu from "../components/MenuBar/Menu";
import Footer from "../components/Footer/Footer";

export default function Teste() {
    return (
      <>
        {/* Aqui você irá importar os seus componentes criados */}
        {/* <ComponenteTeste/> */}
        <Menu/> 
        <Formulario/>
        <Footer/>  
      </>
    )
  }
