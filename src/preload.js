window.addEventListener('load', () => {
  let a = document.querySelectorAll('.App')
  Array.from(a).forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
    })
  })
})