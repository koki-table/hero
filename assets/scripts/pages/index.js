const myFunc = function() {
  const target = document.getElementsByClassName('target')
  const positionTriger = document.getElementById('triger')
  //   const position = positionTriger.getBoundingClientRect(scrollY)

  positionTriger.addEventListener('scroll', getPosition)

  function getPosition(e) {
    let clientY = e.clientY // =>ページ左上からのy座標
    console.log(clientY)

    for (let i = 0; i < target.length; i++) {
      let offsetTop = Math.floor(target[i].getBoundingClientRect().top)
      let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom)

      if (offsetTop < clientY) {
        target[i].classList.add('is-active')
      }

      if (offsetBottom < 0) {
        target[i].classList.remove('is-active')
      }
    }
  }
}
window.addEventListener('scroll', myFunc, false)
