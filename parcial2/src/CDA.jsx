import DoubleLinkedList from "./DoubleListClientes"
import Stacks from "./PilaReclamos"
import Colas from "./ColaConsultas"
import { useState} from "react"

const CDA = () => {
    const [clientes, setClientes] = useState(new DoubleLinkedList())
    const [clienteActual, setClienteActual] = useState("")
    const [newCliente, setNewCliente] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [tipo, setTipo] = useState("consulta")

    const handleAdd = (e) => {
        e.preventDefault()
    
        const nombreN = newCliente.trim()
        const mensajeN = mensaje.trim()
    
        if (nombreN !== "") {
            const nuevo = {
                nombre: nombreN,
                consultas: new Colas(),
                reclamos: new Stacks()
            }
    
            if (mensajeN !== "") {
                if (tipo === "consulta") {
                    nuevo.consultas.enqueue(mensajeN)
                } else {
                    nuevo.reclamos.push(mensajeN)
                }
            }
    
            clientes.append(nuevo)
            setClienteActual(clientes.tail)
            setNewCliente("")
            setMensaje("")
            return
        }
    

        if (mensajeN !== "" && clienteActual) {
            if (tipo === "consulta") {
                clienteActual.value.consultas.enqueue(mensajeN)
            } else {
                clienteActual.value.reclamos.push(mensajeN)
            }
            setMensaje("")
        }
    }

    const sigCliente = () =>{
        if(clienteActual && clienteActual.next){
            setClienteActual(clienteActual.next)
        }
        console.log(clienteActual)
    }
    
    const antCliente = () => {
        if(clienteActual && clienteActual.prev){
            setClienteActual(clienteActual.prev)
        }
        console.log(clienteActual)
    }

    return (
        <div>
            <h1>Centro de Atención</h1>
            <hr />
            <form onSubmit={handleAdd}>
                <input
                    placeholder="Nombre del cliente"
                    value={newCliente}
                    onChange={(e) => setNewCliente(e.target.value)}
                />
                <br /><br />
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="consulta">Consulta</option>
                    <option value="reclamo">Reclamo</option>
                </select>
                <br /><br />
                <textarea
                    rows={5}
                    cols={50}
                    placeholder={`Escribe un mensaje`}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                />
                <br /><br />
                <button type="submit">Agregar</button>
            </form>

            <hr />
            <h2>Cliente actual:</h2>
            {clienteActual ? (
                <div>
                    <p><strong>{clienteActual.value.nombre}</strong></p>
                    <h3>Consultas:</h3>
                    <ul>
                        {clienteActual.value.consultas.toArray().map((consulta, idx) => (
                            <li key={idx}>{consulta}</li>
                        ))}
                    </ul>
                    <h3>Reclamos:</h3>
                    <ul>
                        {clienteActual.value.reclamos.toArray().map((reclamo, idx) => (
                            <li key={idx}>{reclamo}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No hay clientes todavía</p>
            )}
            <br />
            <button onClick={antCliente}>Anterior cliente</button>
            <button onClick={sigCliente}>Siguiente cliente</button>
        </div>
    )
}

export default CDA