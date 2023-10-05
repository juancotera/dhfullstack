let gHTML = "30, 45, 25, 34, 18, 23, 16, 50, 72, 70";
let gCSS3 = "50, 45, 71, 34, 23, 45, 65, 75, 63, 43, 74, 70";
let gJS = "70, 65, 58, 45, 23, 57, 34, 17, 72,";
let gNODEJS = "45, 56, 73, 34, 65, 72, 70, 32";

function graduados(html, css, js, nodejs, numero){
  let suma = 0
  let conteo = 0
  if(numero == 1){
    for(let i = 0; i < html.length; i++){
      let tomaNota = Number(html[i]);
      suma += tomaNota
      conteo++
    }
    let promedio = suma / conteo
    return console.log(promedio);
  }else if(numero == 2){
    for(let i = 0; i < css.length; i++){
      let tomaNota = Number(css[i]);
      suma += tomaNota
      conteo++
    }
    let promedio = suma / conteo
    return console.log(promedio);
  }else if(numero == 3){
    for(let i = 0; i < js.length; i++){
      let tomaNota = Number(js[i]);
      suma += tomaNota
      conteo++
    }
    let promedio = suma / conteo
    return console.log(promedio);
  }else if(numero == 4){
    for(let i = 0; i < nodejs.length; i++){
      let tomaNota = Number(nodejs[i]);
      suma += tomaNota
      conteo++
    }
    let promedio = suma / conteo
    return console.log(promedio);
  }else{
    console.log(`Ten en cuenta que los cursos son los siguientes:
    1 = HTML5
    2 = CSS3
    3 = JAVASCRIPT
    4 = NODEJS`);
  }
}

function arrayHTML(){
  return gHTML.split(",");
}
function arrayCSS3(){
  return gCSS3.split(",");
}
function arrayJS(){
  return gJS.split(",");
}
function arrayNODEJS(){
  return gNODEJS.split(",");
}

graduados(arrayHTML(), arrayCSS3(), arrayJS(), arrayNODEJS(), 4)