const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bdmg',{ useNewUrlParser:true});
mongoose.Promise = global.Promise;


mongoose.connection.on('connected', function () {
 console.log('=====Conexão estabelecida com sucesso=====');
});
mongoose.connection.on('error', function (err) {
 console.log('=====Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
 console.log('=====Conexão finalizada=====');
}); 

module.exports = mongoose;