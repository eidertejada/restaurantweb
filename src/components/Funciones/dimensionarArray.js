const dimensionarArray = (array) => {
  let newArray = array.reduce((acumulator, elemento) => {
    if (Array.isArray(elemento)) {
      acumulator.push(...elemento);
    } else {
      acumulator.push(elemento);
    }
    return acumulator;
  }, []);

  return newArray;
};

export default dimensionarArray;
