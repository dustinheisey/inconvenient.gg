export function splitSlider() {
  const container = document.querySelector('.container')
  document.querySelector('.slider-button').addEventListener('click', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`)
  })
  document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`)
  })
}
