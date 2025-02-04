(() => {

  function isRedFruit( fruit: string ): boolean {
      
    return ['manzana', 'cereza', 'ciruela'].includes(fruit);

  }

  type FruitColor = 'red'|'yellow'|'purple';

  function getFruitsByColor( color: FruitColor ): string[] {

    const fruitsByColor = {
      red:    ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    }

    const fruitColors = Object.keys( fruitsByColor );

    if ( !fruitColors.includes(color) ) {
      throw Error(`the color must be ${fruitColors}`)
    }

    return fruitsByColor[color];

  }

  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps(): string {

    if ( !isFirstStepWorking ) return 'First step broken.';

    if ( !isSecondStepWorking ) return 'Second step broken.';
    
    if ( !isThirdStepWorking ) return 'Third step broken.';

    if ( !isFourthStepWorking ) return 'Fourth step broken.' 
        
    return 'Working properly!';

  }

  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']

  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados

})();
