const myFunc = function() {
  const target = document.getElementsByClassName('target')
  const position = Math.floor(window.innerHeight * 0.7)
  const positionRemove = Math.floor(window.innerHeight * 0.9)

  for (let i = 0; i < target.length; i++) {
    // let offsetTop = Math.floor(target[i].getBoundingClientRect().top)
    let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom)

    if (offsetBottom < position) {
      target[i].classList.add('is-active')
    }

    if (offsetBottom > positionRemove) {
      target[i].classList.remove('is-active')
    }
  }
}
window.addEventListener('scroll', myFunc, false)
