function setListener() {
    const sumbutton = document.getElementById('Sum');
    const minusbutton = document.getElementById('Res');
    const multybutton = documen.getElementById('Multy');
    sumbutton.addEventListener('click',()=>fetchOperation('addition'));
    minusbutton.addEventListener('click',()=>fetchOperation('minus'));
    //multybutton.addEventListener('click',()=>fetchOperation('multy'));
    
}


function fetchOperation(operacion) {
    const firstValue = document.getElementById('first-value').value
    const secondValue = document.getElementById('Second-value').value
    const resultLabel = document.getElementById('Result')
  
    const headers = { first_value: firstValue, second_value: secondValue }
  
    fetch(`http://localhost:3000/api/v1/basic_calculator/${operacion}`, { 
      method: "POST", 
      headers: headers 
    })
    .then(data => data.json())
    .then(json => {
      resultLabel.innerText = json.result
    })
    .catch(error => console.log(error))
  }
  
  setListener()