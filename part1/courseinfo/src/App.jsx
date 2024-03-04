const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p>{props.part[props.index]['name']} {props.part[props.index]['exercises']}</p>
    </div>
  )
}
const Totals = (props) => {
  return (
    <div>
      <p>{props.title} {props.numExercices}</p>
    </div>
  )  
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header title={course} />
      <Content part={parts} index={0} />
      <Content part={parts} index={1}/>
      <Content part={parts} index={2}/>
      <Totals title='Number of exercises' parts={parts} />
    </div>
  )
}

export default App
