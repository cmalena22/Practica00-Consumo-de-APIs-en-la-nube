# Practica00-Consumo-de-APIs-en-la-nube
Pagina principal index.html 
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Full peliculas para esta cuarentena </title>
        <link rel="stylesheet" href="primera.css" type="text/css">
        <script type="text/javascript" src=funcion.js></script>
       
        </head>
    <body>
       
        <div class="uno">
           
            <img  src="Imagen/imagen.jpg" alt="" >
            <h1>Full Peliculas HD para esta cuarentena
                Animate!
            </h1>
            <input type="text" name="" id="titulo" />
            <input type="button" name="" id="buscar" value="Buscar" onclick="return buscar(this)">
            <input type="button" id="uno" value="1" onclick="return buscar(this)" />
            <input type="button" id="dos" value="2" onclick="return buscar(this)" /> 
            <input type="button" id="tres" value="3" onclick="return buscar(this)" />            
            <input type="button" id="cuatro" value="4" onclick="return buscar(this)" />            
            <input type="button" id="cinco" value="5" onclick="return buscar(this)" /> 
            <input type="button" id="cinco" value=">>" onclick="siguiente()" />             
            
        </div>
        <div class=" contenedor2">
            <p>

            <h1>Peliculas Disponibles</h1>
            <table>
                <tr>
                    <td>
                
                    
                <table id="cabecera" class="dat">
                     
                        <thead>
                            <tr> 
                            <th></th>
                            <th> Title</th>
                            <th>Year</th>
                            <th>Type</th>
                            <th  id="imagen">Imagen</th>
                            </tr>
                        </thead>
                        
                    <tbody id="informacion">
                        
                
                    </tbody>
                    
                    
                </table>
                   
                    </td>
                </tr>
            <tr>
               
                    <div  id="detalles"></div>
                 
               

            </tr>

            <tr>
               
                  
                    <div id="imagen"></div>
               

            </tr>
            </table>    
           </p>
          
        </div>
      
    </body>
</html>

#Codigo de javascript


function buscar(nombre)
{   
    var primera = nombre.value;
          console.log(primera)
    var titulo=document.getElementById("titulo").value;
    var detalles="";

    if(titulo==""){
       
        detalles ="<tr>" +
        "<td  > Sin informacion </td>"+
        "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
        
    }else  {
       
        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
            var data= JSON.parse(this.responseText);                
                       var total=data.totalResult;
                data.Search.forEach(movie => {
                    detalles += "<tr>"+
                    
                               "<td><a href='#' onclick=\"buscarPeli('"+ movie.imdbID+"')\">Mas informacion</td>"+
                               "<td>"+ movie.Title+"</td>"+
                               "<td>"+ movie.Year+"</td>"+
                               "<td>"+ movie.Type+"</td>"+
                               "<td><img src="+ movie.Poster+"></td>"+
                               "</tr>";
                               
                              
                                                    
                });
              
                document.getElementById("informacion").innerHTML=detalles;
               
                }
                
            };           
            xmlhttp.open("POST","http://www.omdbapi.com/?apikey=335d2c95&s="+ titulo +"&plot=full&page="+primera,true);
       
            xmlhttp.send();
        }
}

    function buscarPeli(id){
      var detalles="";
      if (id==""){
          detalles = "sin informacion";
          document.getElementById("informacion").innerHTML=detalles;

      }else {

        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
                var data= JSON.parse(this.responseText);
               
                      
                var x;  
            
                    for(x in data){
                        detalles+=                       
                         "<tr>"+data[x] +"</tr>" +"<br>" 
                         "</tr>"                     ;       
                         }
                      
               
                
                         
                }
                var imagen= "<img src=\'"+data.Poster+"'/ ></img> "     
                
                document.getElementById("detalles").innerHTML=detalles;
                document.getElementById("imagen").innerHTML=imagen;

            }; 
            xmlhttp.open("GET","http://www.omdbapi.com/?apikey=335d2c95&i="+ id +"&plot=full",true);
            
            xmlhttp.send();
        }
      }
         
         
      var pagina=2;
function siguiente()
{   
   pagina=pagina+1;
    var titulo=document.getElementById("titulo").value;
    var detalles="";

    if(titulo==""){
       
        detalles ="<tr>" +
        "<td  > Sin informacion </td>"+
        "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
        
    }else  {
       
        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
            var data= JSON.parse(this.responseText);                
                       
                data.Search.forEach(movie => {
                    detalles += "<tr>"+
                    
                               "<td><a href='#' onclick=\"buscarPeli('"+ movie.imdbID+"')\">Mas informacion</td>"+
                               "<td>"+ movie.Title+"</td>"+
                               "<td>"+ movie.Year+"</td>"+
                               "<td>"+ movie.Type+"</td>"+
                               "<td><img src="+ movie.Poster+"></td>"+
                               "</tr>";
                               
                              
                                                    
                });
              
                document.getElementById("informacion").innerHTML=detalles;
               
                }
                
            };           
            xmlhttp.open("POST","http://www.omdbapi.com/?apikey=335d2c95&s="+ titulo +"&plot=full&page="+pagina,true);
       
            xmlhttp.send();
        }
}
   


#Codigo css
html{

    width: 100%;
    height: 100%;
    border: rgb(red, green, blue);
    overflow-y: scroll;
}
body{
    border-radius: 10em;
    background-color: salmon;
    border-bottom-width: 0.2em;
}
h1 {
    color:blue;
    font-weight: normal;
    
    text-align: center;

}
.uno img {
    width :1200px ;
    height:300px;
    border-radius: 10px;   

}
.uno {
    font-family: 'Courier New', Courier, monospace;  
   border-radius: 50em;
    text-align: center;
}
img{
    
    width :200px ;
    height:200px;
    border-radius: 10px;  
}
.contenedor2{
    font-family: 'Courier New', Courier, monospace;  
   border-radius: 50em;
    text-align: center;
   margin: 50px auto;
   width :1200px ;
   height:1000px;
   padding:20px;
   background: seashell;
   overflow: auto;
   border-radius: 4px;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.dat 
{
    width: 100%;      
}
.dat th,td{
    width: 15%;    
    text-align: justify;
}

p{
    margin-bottom: 20px;
    line-height: 28px;
    font-size: 16 px;
    color: honeydew;
}
