function asientosDisponibles(disponibles, asiento){
    let libres = 0
    let disponible
    for(let i = 0; i < disponibles.length; i++){
        let silla =  disponibles[i];
        if(asiento ==  silla){
            disponible =  true
        }else{
            libres++
            console.log("va una"+ i + ' de ' +  libres)
        }
    }

    if(disponible == true){
        return "Felicitaciones, el asiento número " + asiento + " está disponible"
    }else {
        return "Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + libres + " asientos disponibles"

    }

}

console.log(asientosDisponibles([3, 15, 18, 25], 78));