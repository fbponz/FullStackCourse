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
      <p>{props.part['name']} {props.part['exercises']}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course} />
      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />
      <Totals title='Number of exercises' numExercices={part1.exercises + part2.exercises2 + part3.exercises3} />
    </div>
  )
}

export default App
