import { useState } from "react"

function Formulario(){

    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState("")
    let [cidade, setCidade] = useState("")
    let [estado, setEstado] = useState("")

    function save(){

        if (nome.length < 3 || idade.length < 0 || cidade.length < 3 || estado.length < 3 ){
            alert("Algo esta errado")
            return
        }
            alert(`Ola ${nome}, que tem ${idade} e mora em ${cidade} ${estado} `)


    }

    return(
        <>
            <br/>
            <br/>
            <br/>
            <h1>Formulario</h1>
            <p>Aprendendo a usar o input no React</p>

            
            <p>Digite Su Nombre: </p>
            <input onChange={e => setNome(e.target.value)} />
            <br/><br/>

            <p>Digite Sua idade:  </p>
            <input onChange={e => setIdade(e.target.value)} />
            <br/><br/>

            <p>Digite Sua cidade </p>
            <input placeholder="Cidade" onChange={e => setCidade(e.target.value)} />
            <input placeholder="Estado"  onChange={e => setEstado(e.target.value)} />
            <br/><br/>
            <button onClick={save} >Aperta</button>


        </>
    )

}

export default Formulario