window.onload = () => {
//Crea un segundo array que devuelva los impares
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const impares = numbers.filter(numero => numero%2!=0)
    console.log(impares);
//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
    const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];
      const vegano = foodList.filter(plato => plato.isVeggie == true)
      const cadenaVegano = vegano.map((plato) => "Que ric@ "+plato.name+ " me voy a comer!")
      console.log(cadenaVegano);
      
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */

}