// Maneja la suma y Resta

const basicCalculatorController = {
    index: (req, res, next) => {
      res.json({ error: "Podemos hacer /addition o /minus" })
    },
    addition: (req, res, next) => {
      const firstValue = Number(req.headers.first_value)
      const secondValue = Number(req.headers.second_value)
  
      res.json({ 
        result: firstValue + secondValue 
      })
    },
    minus : (req,res,next) =>{
      const firstValue = Number (req.headers.first_value);
      const secondValue = Number (req.headers.second_value);

      res.json({
        result: firstValue - secondValue
      })
    },
    multy : (req,res,next) =>{
      const firstValue = Number (req.headers.first_value);
      const secondValue = Number (req.headers.second_value);

      res.json({
        result: firstValue * secondValue
      })
    }
  }
  
  export default basicCalculatorController;