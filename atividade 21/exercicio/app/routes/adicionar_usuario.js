module.exports = function(app){
    app.get('/formulario adicionar usuario', function(req,res){
        res.render("admin/adicionar usuario")
    });
}