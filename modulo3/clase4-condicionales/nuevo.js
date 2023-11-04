

function finDeSemana (dia) {
  if (dia == 'viernes') {
    console.log('buen finde')
   } else if (dia == 'lunes') {
   console.log('buena semana')
   } else {
   console.log('buen dia')
  }
 }

let dia = 'lunes';
function finDeSemana(dia) {
  switch(dia){
    case (dia == 'viernes'):
    console.log('buen finde');
    break;
    case (dia == 'lunes'):
    console.log('buena semana');
    break;
    default:
    console.log('buen día');
  }
}

finDeSemana(dia);