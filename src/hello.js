import react from 'react'

function ReturnHello() {
  const [name, setName] = react.useState('')
  const [greeting, setGreeting] = react.useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleGreeting = (event) => {
    if (name.trim() !== '') {
      setGreeting(`Hello, ${name}!`)
    } else {
      setGreeting('Enter your name first!')
    }
  }

    return (
        <div className="hello-container">
      <h1 className="hello-title">Welcome to the Greeting App</h1>
      <p className="hello-message">Please enter your name:</p>
      <div className="input-container">
        <input
          type="text"
          className="name-input"
          value={name}
          onChange={handleNameChange}
        />
        <button className="greet-button" onClick={handleGreeting}>
          Be greeted
        </button>
      </div>
      <p className="greeting">{greeting}</p>
    </div>
  )
}

export default ReturnHello
