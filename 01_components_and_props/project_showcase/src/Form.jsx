export default function Form({ name, age }) {
  console.log(name, age)

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submit!')
  }

  return <form onSubmit={handleSubmit}>
    <input />
  </form>
}