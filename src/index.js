import React from 'react'
import ReactDom from 'react-dom/client'

const app = document.getElementById('app')

const root = ReactDom.createRoot(app)

const App = React.lazy(() => import('./App.jsx'))

root.render(<div>
    <h1>Webpack</h1>
    <App />
    <button onClick={() => {
        import('./components/add').then(module => {
            const add = module.default
            add(5, 5)
        })
        }}>
            click me
    </button>
</div>)