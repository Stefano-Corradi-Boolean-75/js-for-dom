
// stampo in pagina 100 box e se sono pari sono gialli


const container = document.querySelector('.container');
const limit = 100;

for(let i = 1; i <= limit; i++){
  // creo il box
  const box  =  document.createElement('div');
  // aggiungo la classe
  box.className = 'box';

  // se è pari
  if(!(i % 2)){
    box.classList.add('giallo');
  }

  // scrivo dentro il box
  box.innerHTML = i;
  // lo aggiungo al container
  container.append(box);
}