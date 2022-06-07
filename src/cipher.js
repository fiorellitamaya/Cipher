const cipher = {
  encode: function(desplazamiento,mensaje){
    //console.log(desplazamiento,mensaje)
      
    let resultado = ""
    mensaje = mensaje.toUpperCase();
  
    for (let i=0; i<mensaje.length; ++i){
      //console.log(mensaje[i])
      let posicionLetra = (mensaje.charCodeAt(i))
      console.log(posicionLetra >=65 && posicionLetra<=90)
      let posicionCifrada = ((posicionLetra-65+desplazamiento)%26+65)
      //console.log((posicionLetra-65+desplazamiento)%26+65)
      let letraCifrada = (String.fromCharCode(posicionCifrada))
      //console.log(letraCifrada)
      resultado = resultado + letraCifrada 
       }
  //console.log(resultado)
  return resultado
  },


  decode: function(desplazamiento, mensaje){
    //console.log(desplazamiento,mensaje)
    let resultado = ""
    mensaje = mensaje.toUpperCase();

    for (let i=0; i<mensaje.length; ++i){
      //console.log(mensaje[i])
      let posicionLetra = (mensaje.charCodeAt(i))
     // console.log(mensaje.charCodeAt(i))
      let posicionCifrada = ((posicionLetra+65-desplazamiento)%26+65)
      //console.log((posicionLetra+65-desplazamiento)%26+65)
      let letraCifrada = (String.fromCharCode(posicionCifrada))
      //console.log(letraCifrada)
      resultado = resultado + letraCifrada 
     }
      //console.log(resultado)
      return resultado
  }
};

export default cipher;

