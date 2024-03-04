const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p>{props.part.parts[props.index]['name']} {props.part.parts[props.index]['exercises']}</p>
    </div>
  )
}
const Totals = (props) => {
  return (
    <div>
      <p>{'Number of exercises'} {props.parts.parts[0]['exercises'] + props.parts.parts[1]['exercises'] + props.parts.parts[2]['exercises']}</p>
    </div>
  )  
}


const App = () => {
  const course = { 
    name: 'Half Stack application development',
    parts: [{
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
    }
  ]
}

  return (
    <div>
      <Header course={course} />
      <Content part={course} index={0} />
      <Content part={course} index={1}/>
      <Content part={course} index={2}/>
      <Totals parts={course} />
    </div>
  )
}

export default App
