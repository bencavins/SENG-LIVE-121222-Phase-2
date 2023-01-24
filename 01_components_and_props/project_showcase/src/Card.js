function Card(props) {
  return (
    <div className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  )
}

export default Card;