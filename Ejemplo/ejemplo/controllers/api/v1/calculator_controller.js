var controller ={
    index: function(req,res,next){
        res.json({type: "calculator"})
    }
};

module.exports = controller;