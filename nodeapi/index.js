var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app=express();
var cors = require('cors')
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors())

  app.listen(3300,()=>console.log('mode app is running on port 3300.'));
var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'pronobo'
})


//inserting api

app.post('/insertuser',function(req,res)
{
    var data = JSON.parse(req.body.data);
    var nome= data.nome
    var cpf= data.cpf
    var email= data.email
    connection.connect(function(){
        var query = "insert into usuario (nome,cpf,email) values('"+nome+"',"+cpf+",'"+email+"')";
        connection.query(query,function(err,result,field){
            if(err){
                res.end(JSON.stringify(err));

            }else
            {
                if(result.affectedRows > 0)
                {
                  res.end('successfully inserted.')
                }else
                {
                  res.end("please try again. ")
                }

            }
        })
    })
  
})





app.post('/authentifier',function(req,res)
{   var a= req.body.data
    var data = JSON.parse(a);
    var login= data.login
    var password= data.password
    
    connection.connect(function(){
        var query = "select * from authentification where login='"+login+"' and password='"+password+"'";
        connection.query(query,function(err,result,field){
            console.log('result==>',result)
          
    
             
                
                  res.end(JSON.stringify(result))
                

           
        })
    })
  
})

app.post('/getusuarios',function(req,res)
{   var a= req.body.data
    var data = JSON.parse(a);
    
    
    connection.connect(function(){
        var query = "select * from usuario t1 LEFT JOIN endereco t2 on t1.codigo1=t2.codigo_user";
        connection.query(query,function(err,result,field){
            console.log('result==>',result)
          
    
             
                
                  res.end(JSON.stringify(result))
                

           
        })
    })
  
})


app.post('/getdadosforedit',function(req,res)
{   var a= req.body.data
    var data = JSON.parse(a);
    var id= data.id
    
    
    connection.connect(function(){
        var query = "select * from usuario t1 LEFT JOIN endereco t2 on t1.codigo1=t2.codigo_user where t1.codigo1="+id+"";
        connection.query(query,function(err,result,field){
            console.log('result==>',result)
          
    
             
                
                  res.end(JSON.stringify(result))
                

           
        })
    })
  
})

app.post('/register',function(req,res)
{
    var data = JSON.parse(req.body.data);
    var login= data.login
    var password= data.password



    connection.connect(function(){
        var query1 = "select * from authentification where login ='"+login+"'";
        connection.query(query1,function(err,result,field){
            if(JSON.stringify(result)!='[]')
            {
                res.end("email already existe")
            }
            else{
            
                connection.connect(function(){
                    var query = "insert into authentification (login,password) values('"+login+"','"+password+"')";
                    connection.query(query,function(err,result,field){
                        if(err){
                            res.end(JSON.stringify(err));
            
                        }else
                        {
                            if(result.affectedRows > 0)
                            {
                              res.end('successful')
                            }else
                            {
                              res.end("error")
                            }
            
                        }
                    })
                })

            }
        })
    })

    
    
  
})




app.post('/edit',function(req,res)
{
    var data = JSON.parse(req.body.data);
    var codigo= data.codigo
    var nome= data.nome
    var cpf= data.cpf
    var email=data.email
    
    connection.connect(function(){
        var query = "update usuario set nome='"+nome+"' ,cpf='"+cpf+"',email='"+email+"' where codigo1='"+codigo+"'";
        connection.query(query,function(err,result,field){
            if(err){
                res.end(JSON.stringify(err));

            }else
            {
                if(result.affectedRows > 0)
                {
                  res.end('successful')
                }else
                {
                  res.end("error")
                }

            }
        })
    })
  
})


app.post('/editEndereco',function(req,res)
{
    var data = JSON.parse(req.body.data);
    var codigo= data.codigo
    var codigo_user=data.code_user
    var numero= data.numero
    var cep= data.cep
    var complemento=data.complemento
    
    connection.connect(function(){
        var query = "update endereco set numero="+numero+" ,cep='"+cep+"',complemento='"+complemento+"' where codigo='"+codigo+"' and codigo_user='"+codigo_user+"'";
        connection.query(query,function(err,result,field){
            if(err){
                res.end(JSON.stringify(err));

            }else
            {
                if(result.affectedRows > 0)
                {
                  res.end('successful')
                }else
                {
                  res.end("error")
                }

            }
        })
    })
  
})



app.post('/addenedereco',function(req,res)
{
    var data = JSON.parse(req.body.data);
    var codigo= data.codigo
    var numero=data.numero
    var cep=data.cep
    var complemento=data.complemento
    
    
    connection.connect(function(){
        var query = "insert into endereco (cep,numero,complemento,codigo_user) values('"+cep+"','"+numero+"','"+complemento+"',"+codigo+") ";
        connection.query(query,function(err,result,field){
            if(err){
                res.end(JSON.stringify(err));

            }else
            {
                if(result.affectedRows > 0)
                {
                  res.end('successful')
                }else
                {
                  res.end("error")
                }

            }
        })
    })
  
})

app.post('/deleteEndereco',function(req,res)
{
    var data = JSON.parse(req.body.data);
    var codigo= data.codigo
   
    
    connection.connect(function(){
        var query = "delete from endereco where codigo_user = '"+codigo+"' ";
        connection.query(query,function(err,result,field){
            if(err){
                res.end(JSON.stringify(err));

            }else
            {
                if(result.affectedRows > 0)
                {
                  res.end('successful')
                }else
                {
                  res.end("error")
                }

            }
        })
    })
  
})

app.post('/deleteuser',function(req,res)
{
    var data = JSON.parse(req.body.data);
    var codigo= data.codigo
   
    
    connection.connect(function(){
        var query = "delete from usuario where codigo1 = '"+codigo+"' ";
        connection.query(query,function(err,result,field){
            if(err){
                res.end(JSON.stringify(err));

            }else
            {
                if(result.affectedRows > 0)
                {
                  res.end('successful')
                }else
                {
                  res.end("error")
                }

            }
        })
    })
  
})

app.post('/adduser',function(req,res)
{
    var data = JSON.parse(req.body.data);
    var codigo= data.codigo
    var nome= data.nome
    var cpf= data.cpf
    var email=data.email
    connection.connect(function()
    {
        var query2="select * from usuario where email='"+email+"'";
        connection.query(query2,function(err,result,field){
            console.log(result)
            if(JSON.stringify(result)!='[]')
            {
                res.end("email already existe")
            }
            else{
                connection.connect(function(){
                    var query = "insert into usuario (nome,cpf,email) values('"+nome+"' ,'"+cpf+"','"+email+"') ";
                    connection.query(query,function(err,result,field){
                        if(err){
                            res.end(JSON.stringify(err));
            
                        }else
                        {
                            if(result.affectedRows > 0)
                            {
                                connection.connect(function(){
                                var query = "SELECT MAX(codigo1) a FROM usuario";
                                connection.query(query,function(err,result,field){
            
            
                                    res.end(JSON.stringify(result))
                                })})
                            }else
                            {
                              res.end("error")
                            }
            
                        }
                    })
                })
            }
        })
    })
  
})