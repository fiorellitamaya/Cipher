const cipher = {
  encode: function(desplazamiento,mensaje){
    //console.log(desplazamiento,mensaje)
    
    if( typeof mensaje !== "string"){
      throw new TypeError('Ups', "cipher.js", 2)
    }

    let resultado = ""
    //mensaje = mensaje.toUpperCase();--> Ya no es necesario por la condicion if
  
    for (let i=0; i<mensaje.length; ++i){
      //console.log(mensaje[i])
      let posicionLetra = (mensaje.charCodeAt(i))
      //console.log(posicionLetra)
      if(posicionLetra >=65 && posicionLetra<=90){
        //console.log(posicionLetra >=65 && posicionLetra<=90)
        let posicionCifrada = ((posicionLetra-65+desplazamiento)%26+65)
        //console.log(posicionCifrada)
        let letraCifrada = (String.fromCharCode(posicionCifrada))
        //console.log(letraCifrada)
        resultado = resultado + letraCifrada }

      else if(posicionLetra >=97 && posicionLetra<=122){
        let posicionCifrada = ((posicionLetra-97+desplazamiento)%26+97) 
        let letraCifrada = (String.fromCharCode(posicionCifrada))
        resultado = resultado + letraCifrada}

      else{posicionLetra = String.fromCharCode(posicionLetra)
        resultado = resultado + posicionLetra}
       }
  //console.log(resultado)
  return resultado
  },


  decode: function(desplazamiento, mensaje){

    if( typeof mensaje !== "string"){
      throw new TypeError('Ups', "cipher.js", 37)
    }

    let resultado = ""
   
    for (let i=0; i<mensaje.length; ++i){
      
      let posicionLetra = (mensaje.charCodeAt(i))
      console.log(posicionLetra)
    
      if(posicionLetra >=65 && posicionLetra<=90){
        let posicionCifrada = ((posicionLetra+65-desplazamiento)%26+65)
        console.log(posicionCifrada)
        let letraCifrada = (String.fromCharCode(posicionCifrada))
        resultado = resultado + letraCifrada }

      else if(posicionLetra >=97 && posicionLetra<=122){
        let posicionCifrada = ((posicionLetra+85-desplazamiento)%26+97) 
        console.log(posicionCifrada)
        let letraCifrada = (String.fromCharCode(posicionCifrada))
        resultado = resultado + letraCifrada}

      else{posicionLetra = String.fromCharCode(posicionLetra)
        resultado = resultado + posicionLetra}
       }

       return resultado
  }
};

export default cipher;

