/* Zero-Agent — shared navigation behavior (dropdowns + mobile) */
(function(){
  const groups=document.querySelectorAll('.za-nav__group');
  groups.forEach(g=>{
    const trigger=g.querySelector('.za-nav__trigger');
    if(!trigger)return;
    trigger.addEventListener('click',e=>{
      e.preventDefault();
      const open=g.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded',String(open));
      groups.forEach(o=>{
        if(o!==g){o.classList.remove('is-open');o.querySelector('.za-nav__trigger')?.setAttribute('aria-expanded','false');}
      });
    });
  });
  document.addEventListener('click',e=>{
    if(e.target.closest('.za-nav__group'))return;
    groups.forEach(g=>{g.classList.remove('is-open');g.querySelector('.za-nav__trigger')?.setAttribute('aria-expanded','false');});
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape')groups.forEach(g=>{g.classList.remove('is-open');g.querySelector('.za-nav__trigger')?.setAttribute('aria-expanded','false');});
  });
})();
