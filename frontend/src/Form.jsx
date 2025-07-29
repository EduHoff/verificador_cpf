import { useState } from 'react'

function Form() {

  const [cpf, setCpf] = useState("");

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 11);
    if (value.length > 3) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 7) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 11) value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    setCpf(value);
  };
  
  return (
    <>
      <form action="" style={{display:'flex', flexDirection: 'column'}}>
        <label>Digite o CPF:</label>
        <input type="text" value={cpf} onChange={handleChange} placeholder="xxx.xxx.xxx-xx" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required/>
        <button onClick={console.log("não há nada aqui por enquanto!")}>Verificar</button>
      </form>
    </>
  )
}

export default Form