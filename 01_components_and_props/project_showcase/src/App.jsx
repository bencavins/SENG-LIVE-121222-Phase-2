import Title from "./Title";
import Form from "./Form";

function App() {

  function handleClick() {
    console.log('hi')
  }

  return <>
    <div onClick={handleClick}>
      <Title text="Hello world" color="red" />
      <Form name="joe" age="23" color="yellow" />
    </div>
    <p>hello</p>
  </>
}

export default App;