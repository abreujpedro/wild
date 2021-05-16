export default function btnMobile() {
  const btn = document.querySelector('.btn-mobile');
  const btnRemove = document.querySelector('.ativado');
  const listaMenu = document.querySelector('.nav-desk');

  function removeClass() {
    listaMenu.classList.remove('lado');
  }

  function callBack() {
    listaMenu.classList.add('lado');
    listaMenu.classList.add('ativo');
    setTimeout(removeClass, 10);
  }

  function fecharMenu() {
    listaMenu.classList.add('lado');
    setTimeout(() => {
      removeClass();
      listaMenu.classList.remove('ativo');
    }, 300);
  }
  btn.addEventListener('click', callBack);
  btnRemove.addEventListener('click', fecharMenu);
}