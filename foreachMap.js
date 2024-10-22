window.onload = () => {
    let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];

    // Crea un array con la gente mayor de 25 años y muéstralo por consola.
    let personas25 = [];
    gente.forEach( (persona) => {
        if(persona.edad > 25){
            personas25.push(persona);
        }
    })
    // console.log(personas25);
    
    // Crea un array con la gente que empieza por J.
    let personasJ = []
    gente.forEach((persona) => {
        if(persona.nombre[0]== "J"){
            personasJ.push(persona)
        }
    })
    // console.log(personasJ);
    
    
    
    
    // 3 map
    // Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
    const personas25v2 = gente.map((persona)=>{
        if(persona.edad > 25){
            //console.log(persona);
            return persona
        }
        
    })
    console.log(personas25v2);
    
    // Crea un array con la gente que empieza por J. 
    const personasJv2 = gente.map((persona)=>{
        if(persona.nombre[0]== "J"){
            return(persona)
        }
    })
    console.log(personasJv2);
    
    // Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
    const numbers = [ 4, 5, 6, 7, 8, 9, 10];
    // Resultado esperado
    // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
    
    const elevado = numbers.map((valor)=>{
        return valor ** valor;
    })
    console.log(elevado);
    


}