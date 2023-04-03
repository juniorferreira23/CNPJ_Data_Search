function wait(time = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
  
  // Usando em uma função assíncrona qualquer:
  async function main() {
    console.log('Começo.');
    await wait(5000); // Espera 1,5 segundo (1500ms).
    console.log('Fim.');
  }
  
  main();