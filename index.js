function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio); //Detener la ejecucion de la funcion por completo
    audio.currentTime = 0; //Rebobinar hasta el principio
    audio.play();
    key.classList.add('playing');
    console.log(keys);
};
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //Omitir si no es un transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
