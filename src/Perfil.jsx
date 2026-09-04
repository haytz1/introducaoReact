import { useState } from "react"
import Formulario from "./formulario"
import App from "./App"

function Perfil(){

    let usuario = {
        nome: "reidocaparei", 
        email: "reidocapareirei@gmail.com",
        senha: "gostrogonocofe"
    }

    let [showPerfil, setShowPerfil] = useState(false)

    let [botao, setBotao] = useState("Carregar Perfil")

    let [showsenha, setShowSenha] = useState(false)

    return(

        <>

            <hr/>

            {/* Fundo espacial */}
                <div className="ceu">
                <div className="estrelas"></div>
                <div className="estrelas estrelas2"></div>
                <div className="estrelas estrelas3"></div>

            {/* Meteoros */}
                <span className="meteoro meteoro1"></span>
                <span className="meteoro meteoro2"></span>
                <span className="meteoro meteoro3"></span>
            </div>

            <h1>Perfil Do Usuario</h1>
            <p>Veja suas informaçoes</p>
                <br/>
            <button onClick={() => { 
                setShowPerfil(!showPerfil); 
                setBotao(showPerfil ? "Carregar Perfil" : "Ocultar Perfil"); 
            }}>{botao}</button>
            
            {
                showPerfil == true ? 
                    <div>
                        <p>Nome: {usuario.nome}</p>
                        <p>Email: {usuario.email}</p>
                        <button onClick={setShowSenha(!showsenha)} >Alterar Senha</button>
                        
                    </div>   
                :
                <></>   
                //Fragmento Serve para fazer nada praticamente , <></> agrupa os filhos e some na renderização do navegador, mantendo o HTML limpo.
            }

            {
                showsenha == true ?
                    <div>
                        <p>Digite Sua senha Atual:</p>
                        <input/>
                        <p>Digite a nova Senha:</p>
                        <input/>
                        <br/>
                        <button>Alterar</button>
                    </div>
                :
                    <></>
            }

        </>

    )

}

export default Perfil