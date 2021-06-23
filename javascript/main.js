const projects = document.getElementsByClassName('project-content')
const projectsDescriptions = document.getElementsByClassName('description')
const projectLinearBg = document.getElementsByClassName('linear-bg')

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener('click', event => {
    toggle(event, projectsDescriptions, 'project-description')
    toggle(event, projectLinearBg, 'project-linear-bg')
  })
}

function toggle(event, items, toggleClass) {
  const index = parseInt(event.currentTarget.dataset.project)
  if (items[index].classList.contains(toggleClass)) {
    items[index].style.animation = 'fadeIn 200ms linear forwards'
    items[index].classList.add(`${toggleClass}--active`)
    items[index].classList.remove(toggleClass)
    return
  }
  items[index].style.animation = 'fadeOut 300ms linear forwards'
  setTimeout(function () {
    items[index].classList.remove(`${toggleClass}--active`)
    items[index].classList.add(toggleClass)
  }, 300)
}
