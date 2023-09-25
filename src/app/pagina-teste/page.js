import Receita from "../components/Receitas/Receita";

export default function Teste() {

  const propsParam = {receitas : Receitas}
  
  return (
    <>
      <Receita
        props={propsParam}
      />
    </>
  )
}
