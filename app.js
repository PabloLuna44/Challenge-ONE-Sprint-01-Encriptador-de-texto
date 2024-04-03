
function encode(){

    dictionary={'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'};
    textEncript='';
    let copyButton=document.querySelector('.copy-button');
    let content=document.querySelector(".text-translate-content");
    if(content){
        content.style.marginTop = "10px";
    content.style.textAlign = "initial";
    content.innerHTML = ''; 

    }
    let text=document.querySelector("#text").value;
    copyButton.removeAttribute("hidden");
        
    for(let letter of text){
        if(letter in dictionary){
            textEncript+=dictionary[letter];
        }else{
            textEncript+=letter;
        }
    }

    
    let encode=document.createElement('p');
    encode.textContent=textEncript;
    content.classList.add('encrypt-text');
    content.appendChild(encode);
    
    // console.log(textEncript);
}


function decode(){
    dictionary={'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'};
    let copyButton=document.querySelector('.copy-button');
    let content=document.querySelector(".text-translate-content");
    if(content){
        content.innerHTML='';
        content.style.marginTop="10px";
    }
    
    if(copyButton){
        copyButton.removeAttribute("hidden");
    }
    
    
    let text=document.querySelector("#text").value;

    for(word in dictionary ){
        if(text.includes(word)){
            text=text.replace(new RegExp(word, 'ig'),dictionary[word]);
            
        }
    }
    //  console.log(text);
     
    let decode=document.createElement('p');
    decode.textContent=text;
    content.classList.add('encrypt-text');
    content.appendChild(decode)
    
}


function copy() {
    // Obtener el texto a copiar
    let content = document.querySelector('.encrypt-text');
    let text = content.querySelector("p").textContent;

    // Crear un elemento de entrada temporal
    let tempInput = document.createElement("input");

    // Asignar el texto a copiar al valor del elemento de entrada temporal
    tempInput.value = text;

    // Agregar el elemento de entrada temporal al DOM
    document.body.appendChild(tempInput);

    // Seleccionar el texto dentro del elemento de entrada temporal
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento de entrada temporal del DOM
    document.body.removeChild(tempInput);

    // Mostrar mensaje de éxito
    alert("¡Texto copiado!");
}



