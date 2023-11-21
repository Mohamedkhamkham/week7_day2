import './App.css'
import BasicList from './BasicList/BasicList'
import MoviesList from './MoviesList/MoviesList'
import ProjectsList from './ProjectsList/ProjectsList'

function App() {

  return (

    <div className="App">
      <MoviesList />
      <hr />
      <ProjectsList />
      <hr />
      <BasicList />
    </div>
  )
}

export default App
