import Receita from "../components/Receitas/Receita";
import '../database/mock'

export default function Teste() {
  return (
    <>
      <Receita
        props={Receitas}
      />
    </>
  )
}
