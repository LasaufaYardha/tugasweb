import React,{useState}from "react";
function App(){
  const[alas, setalas]     = useState("")
  const[tinggi, settinggi] = useState("")
  const[Hasil, sethasil]   = useState("")

  console.log('alas   : ${alas}')
  console.log('tinggi : ${tinggi}')

  function Luas(){
    sethasil(1/2*alas*tinggi)
  }

  return(
    <div class = "App">
      <p>
        Masukan alas 
        </p>
        <input type = "text" value = {alas} onChange = {e=>setalas(+e.target.value)}></input>

       <p>
        Masukan tinggi
        </p>
        <input type = "text" value = {tinggi} onChange = {e=>settinggi(+e.target.value)}></input>

        <p>
          <button onClick = {Luas}>Hasil</button>
        </p>

        <p>
          {Hasil}
          </p>

        </div> 
        );

}
export default App;
