import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Form (props: FormProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Input
                    readOnly
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Input 
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Input
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Button cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancelado}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}