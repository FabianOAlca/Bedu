var controller = {
    index: function (req,res,next) {
        res.render("calculator/index",{title:"Calculadora",subtitle:"Calcula aqui"});
    }
};

module.exports = controller;