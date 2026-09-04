import { useState } from "react"
import "./app.css"

function App() {
             //Funçao
             //  |
             //  V
  let [clicks, setClicks] = useState(0)

  let [nome, setNome] = useState("?")

  function aumentarclick(){
    setClicks(clicks + 1)
  }
  function mudanome(){
    setNome("MiguelDoFreeFireMestreTop1")
  }

  return (
    <div className="container" >

      

      <h1>Hello World!</h1>
      <p>Ola mundo!</p>

      <p>Meu nome é: {nome}</p>
      <button onClick={mudanome} > Aperte </button>
      {/* ou pode usar tambem onClick={()=> setnome("NovoNome")} 
          Arrow function ()=> Funçao do tipo seta (lambda)
          funçao anonima
      
      */}

    <hr/>

    <p>Voce cliclou {clicks} vezes</p>
    <button onClick={aumentarclick} >Aperte aqui</button> 



    </div>
  )
}

export default App
