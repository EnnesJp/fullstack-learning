interface InputProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: any
  readOnly?: boolean
  className?: string
  valorMudou?: (valor: any) => void
}

export default function Input(props: InputProps) {
  return (
      <div className={`flex flex-col ${props.className}`}>
          <label className="mb-2">
              {props.texto}
          </label>
          <input
              type={props.tipo ?? 'text'}
              value={props.valor}
              readOnly={props.readOnly}
              onChange={e => props.valorMudou?.(e.target.value)}
              className={`
                  border border-blue-300 rounded-lg
                  focus:outline-none bg-gray-100 px-4 py-2
                  ${props.readOnly ? '' : 'focus:bg-white'}
              `}
          />
      </div>
  )
}