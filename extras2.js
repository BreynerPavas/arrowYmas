window.onload = () => {
   // FILTER Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */
     const productos300 = inventory.filter( producto => producto.price > 300)
     const nombreProductos300 = productos300.map((producto) => producto.name)
     console.log(nombreProductos300);
     

// REDUCE Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'Breyner',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
    const frase = sentenceElements.reduce((a,b)=> `${a} ${b}`);
    console.log(...sentenceElements);
    

}