import debounce from 'lodash/debounce'

let bulmahead = (id, idMenu, api, onSelect, delay, minLen = 2) => {
  let input = document.getElementById(id)
  let menuEl = document.getElementById(idMenu)
  menuEl.innerHTML = '<div class="dropdown-content"></div>'

  let setValue = e => {
    e.preventDefault()
    var label = e.target.text
    var value = e.target.dataset.value
    input.value = label
    menuEl.style.display = 'none'
    if (onSelect) {
      onSelect({label, value})
    }
    return false
  }

  let handleApi = e => {
    const badKeys = ['Meta', 'Shift', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'CapsLock']
    if (badKeys.includes(e.key)) {
      return
    }
    let value = e.target.value
    menuEl.style.display = 'none'
    menuEl.innerHTML = '<div class="dropdown-content"></div>'
    if (value.length <= minLen) {
      return
    }
    api(value).then(suggestions => {
      let suggestionsEl = suggestions.map(({label, value}) => {
        let a = document.createElement('a')
        a.href = '#'
        a.classList.add('dropdown-item')
        a.innerHTML = label
        a.dataset.value = value
        a.addEventListener('click', setValue)
        return a
      })
      suggestionsEl.map(suggEl => {
        menuEl.childNodes[0].appendChild(suggEl)
      })
      if (suggestions.length > 0) {
        menuEl.style.display = 'block'
      }
    })
  }
  input.addEventListener('keyup', debounce(handleApi, delay))
}

export default bulmahead
window.bulmahead = bulmahead
