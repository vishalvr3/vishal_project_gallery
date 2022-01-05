'use strict';

const pikachu = document.querySelector('.pikachu');
const charmender = document.querySelector('.charmender');
const zapdos = document.querySelector('.zapdos');
const overlay = document.querySelector('.overlay');

const btnPikachuClose = document.querySelector('.pikachu-close');
const btnCharmenderClose = document.querySelector('.charmender-close');
const btnZapdosClose = document.querySelector('.zapdos-close');

const btnsOpenModal = document.querySelectorAll('.show-modal');

/////////////////////////////////////////////////////////////////
///////////// INITIAL CLASSLITS of PIKACHU< CHARMENDER< ZAPIDOS
/////////////////////////////////////////////////////////////////

// console.log(pikachu.classList);
// console.log(charmender.classList);
// console.log(zapdos.classList);

////////////////////////////////////////////////////
///////// OPEN MODAL - PIKACHU, CHARMENDER, ZAPIDOS
////////////////////////////////////////////////////
btnsOpenModal[0].addEventListener('click', function () {
  pikachu.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // console.log(pikachu.classList);
});

btnsOpenModal[1].addEventListener('click', function () {
  charmender.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // console.log(charmender.classList);
});

btnsOpenModal[2].addEventListener('click', function () {
  zapdos.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

//////////////////////////////////////////////
// CLOSE MODAL - PIKACHU, CHARMENDER, ZAPIDOS
//////////////////////////////////////////////
btnPikachuClose.addEventListener('click', function () {
  pikachu.classList.add('hidden');
  overlay.classList.add('hidden');

  // console.log(pikachu.classList);
});

btnCharmenderClose.addEventListener('click', function () {
  charmender.classList.add('hidden');
  overlay.classList.add('hidden');

  // console.log(charmender.classList);
});

btnZapdosClose.addEventListener('click', function () {
  zapdos.classList.add('hidden');
  overlay.classList.add('hidden');
});
