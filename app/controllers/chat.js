module.exports.initChat = function(application, req, res) {
    var dataForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    var err = req.validationErrors();

    if(err) {
        res.render("index", {validation : err});
        return;
    }

    res.render("chat");
}