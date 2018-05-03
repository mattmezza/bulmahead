import debounce from 'lodash/debounce'

let bulmahead = (id, idMenu, api, onSelect, delay) => {
  let input = document.getElementById(id)
  let menuEl = document.getElementById(idMenu)
  menuEl.innerHTML = '<div class="dropdown-content"></div>'

  let setValue = e => {
    e.preventDefault()
    var val = e.target.text
    input.value = val
    menuEl.style.display = 'none'
    if (onSelect) {
      onSelect(val)
    }
    return false
  }

  let handleApi = e => {
    let value = e.target.value
    menuEl.style.display = 'none'
    menuEl.innerHTML = '<div class="dropdown-content"></div>'
    if (value.length <= 2) {
      return
    }
    api(value).then(suggestions => {
      let suggestionsEl = suggestions.map(sugg => {
        let a = document.createElement('a')
        a.href = '#'
        a.classList.add('dropdown-item')
        a.innerHTML = sugg
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
