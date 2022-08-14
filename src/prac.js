import React,{useState} from 'react'

export default function App() {
 const [model, setModel] = useState({name:'Martha', surname:'Mandizvidza', country: 'England'})

 const updateHandler = () => {
	setModel(prevState => {return {...prevState, name:'Gamuchirai', surname: 'Chamwada', country: 'Zimbabwe'}})
 }
  return (
	<div>
	  <h1>Model: {model.name} {model.surname} {model.country}</h1>
	  <button onClick={updateHandler}> Click me for any update</button>
	</div>
  )
}
