const Header = ({ name }) => <h2>{name}</h2>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    {parts.map(part => (
      <Part key={part.name} part={part} />
    ))}
  </>
)

const Total = ({ parts }) => {
  const total = parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return <strong>total of {total} exercises</strong>
}

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        { name: 'Fundamentals of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 }
      ]
    },
    {
      name: 'Node.js',
      parts: [
        { name: 'Routing', exercises: 3 },
        { name: 'Middlewares', exercises: 7 }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>

      {courses.map(course => (
        <Course key={course.name} course={course} />
      ))}
    </div>
  )
}

export default App
