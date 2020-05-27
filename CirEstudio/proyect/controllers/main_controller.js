const mainController ={ 
    index: (req,res,next) =>{
        res.render('index')
    },
    show: (req,res,next) =>{
        //GET
        // Muestra un Recurso pediro
    },
    new: (req,res,next) =>{
        //Get 
        // Nos da el formulario para crear un recurso
    },
    create: (req,res,next) =>{
        //POST
        //Crea un Recurso
    },
    edit: (req,res,next) =>{
        // GET 
        // Nos da el Formulario para crear un recurso
    },
    update: (req,res,next) =>{
        //PUT / PATCH
        // Edita un Recurso
    },
    destroy: (req,res,next) =>{
        // Delate
    }
};

export default mainController;