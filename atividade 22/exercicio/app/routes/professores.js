let dbConnection = require('../config/dbConnection'); // conexão com o dbcConnection.js
module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
 
       const sqlConfig = {
           user: 'DS2612040', //7 últimos dígitos do seu RA
           password: 'K41ky22@$',
           database: 'LP2', 
           server: 'APOLO',
           options: {
               encrypt: false,
               trustServerCertificate: true,
           }
       }
// 
      async function getProfessores() {
          try {
              const pool = await dbConnection(); // executando a funcao 
          
               const results = await pool.request().query('SELECT * from PROFESSORES')
          
               //res.json(results.recordset);
 
               res.render('informacao/professores',{profs: results.recordset})
    
           } catch (err) {
               console.log(err)
          }
       }
      getProfessores();
   });
}
