const controller = {
    index: (req,res,next) =>{
        res.render('index', {title: 'Google'})
    }
}

export default controller;