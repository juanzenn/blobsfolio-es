const projects = document.getElementsByClassName('project-content')
const projectsDescriptions = document.getElementsByClassName('description')
const projectImages = document.getElementsByClassName('image')

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener('click', event => {
    toggle(event, projectsDescriptions, 'project-description')
    toggle(event, projectImages,'project-image')
  })
}

function toggle(event, items, toggleClass) {
  const index = parseInt(event.currentTarget.dataset.project)
  if (items[index].classList.contains(toggleClass)) {
    items[index].classList.add(`${toggleClass}--active`)
    items[index].classList.remove(`${toggleClass}`)
    return
  }
  items[index].classList.remove(`${toggleClass}--active`)
  items[index].classList.add(`${toggleClass}`)
}
