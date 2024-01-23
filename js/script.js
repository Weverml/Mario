// isso vai trazer um seletor css atraves do queryselector 
const mario = document.querySelector('.mario-gif');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    // é uma função que vai receber dois parametros que sera uma funcão e depois um tempo onde ele vai esperar o tempo determiando pra depois executar a função no caso o tempo que o mario vai permanecer pulando 
    setTimeout( () => {
        mario.classList.remove('jump');
    }, 500);
}
// setInterval é uma função que vai receber uma função e um tempo, que será o intervalo que ela deve ser executada. 
const loop = setInterval(() => {
    // aqui ele esta pegando a propriedade left do pipe 
    const pipePosition = pipe.offsetLeft;

    // atravez do comando a baixo ele pega o estilo que foi computado na imagem do mario, e passa o elemento que quer pegar. OBS: se fizer igual foi feito acima para pegar o valor do left, substituindo por bottoom, o valor vai ser indefinido. por isso usa essa outra forma para ter acesso a propriedade ou qualquer propriedade do mario.

    // o replace é para remover o px ja que o valor que ele esta retornando é uma string e feito isso ele retorna apenas o valor. o + foi colocado para trasnformar a string em numero. mas tambem poderia ter usado o metodo number.
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){
        pipe.style.animation = 'none';
        // assim tambem da certo, mas vou colocar igual do aprendizado
        //pipe.style.left = '120px'
        // isso foi feito para que o tubo na hora de parar ele fique no canto que encostou no mario, sem ele o tubo fica com left 0
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
    }
    

}, 10);

// addventlistener é um escutador de eventos o keydown é um evento de ser executado quando toca em uma tecla
document.addEventListener('keydown', jump);

// exemplo do que se chama de função anonima () => {} 