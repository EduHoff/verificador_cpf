import { useState } from 'react'

function Form() {

  const [cpf, setCpf] = useState("");
  
  //coloque a url do php aqui!
  const url = "http://localhost/projetosphp/verificador_cpf_backend/verificador_cpf.php"

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 11);
    if (value.length > 3) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 7) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 11) value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    setCpf(value);
  }


  const handleSubmit = async (e) => {
  e.preventDefault();
  const cpf_for_php = cpf.replace(/\D/g, "");

  const result = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `cpf=${encodeURIComponent(cpf_for_php)}`
  });

  const texto = await result.text();
  alert(texto);
};

  
  
  return (
    <>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection: 'column'}}>
        <label htmlFor="cpf">Digite o CPF:</label>
        <input type="text" name='cpf' value={cpf} onChange={handleChange} placeholder="xxx.xxx.xxx-xx" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required/>
        <button type='submit'>Verificar</button>
      </form>
    </>
  )
}

export default Form