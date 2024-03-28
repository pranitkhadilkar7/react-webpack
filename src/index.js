function component () {
    const element = document.createElement('div')
    element.innerHTML = 'Hello Webpack'
    return element
}

function button () {
    const button = document.createElement('button')
    button.innerHTML = 'Add Numbers'
    button.addEventListener('click', function () {
        import('./components/add').then(module => {
            const add = module.default
            add(5, 5)
        })
    })
    return button
}

const app = document.getElementById('app')
app.appendChild(component())
app.appendChild(button())