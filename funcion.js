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
               // console.log(data);
               var con=0;
                data.Search.forEach(movie => {
                    detalles += "<tr>"+
                    
                               "<td><a href='#' onclick=\"buscarPeli('"+ movie.imdbID+"')\">Mas informacion</td>"+
                               "<td>"+ movie.Title+"</td>"+
                               "<td>"+ movie.Year+"</td>"+
                               "<td>"+ movie.Type+"</td>"+
                               "<td><img src="+ movie.Poster+"></td>"+
                               "</tr>";
                               con=con+1;
                              
                                                    
                });
                console.log(con)
                
                document.getElementById("informacion").innerHTML=detalles;
                }

            }; 
            xmlhttp.open("POST","http://www.omdbapi.com/?apikey=335d2c95&s="+ titulo +"&plot=full&rows=2&page="+primera,true);
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
                console.log(data);
                var x;      
                
                         for(x in data){
                            "<tr>"
                            detalles+=  "<tr>"+data[x] +"</tr>" +"<br>" ;
                            "</tr>"
                            
                         }
                         "<tr>"
                         detalles+=  "<tr>"+Object.keys(data)+"</tr>" +"<br>" ;
                         "</tr>"
              
                }
                document.getElementById("informacion").innerHTML=detalles;

            }; 
            xmlhttp.open("GET","http://www.omdbapi.com/?apikey=335d2c95&i="+ id +"&plot=full",true);
            xmlhttp.send();
        }
      }
