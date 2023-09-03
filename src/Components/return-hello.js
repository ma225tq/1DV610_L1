import react from 'react'

function ReturnHello({ setPrompt, image, setImage }) {
  const [name, setName] = react.useState('')
  const [greeting, setGreeting] = react.useState('')
  const [loading, setLoading] = react.useState(false)

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const handleGreeting = (event) => {
    if (name.trim() !== '') {
      setGreeting(`Hello, ${name}! Here's what DALL-E generated from your name. It probably doesn't make sense.`);
      setPrompt(name);
      setLoading(true);
      setImage(null)

      setTimeout(() => {
        setLoading(false);
      }, 4000);
    } else {
      setGreeting('Enter your name first!');
    }
  }

  
  return (
    <div className='hello-container'>
      <h1 className='hello-title'>Welcome to the Greeting App</h1>
      <p className='hello-message'>Please enter your name:</p>
      <div className='input-container'>
        <input
          type='text'
          className='name-input'
          value={name}
          onChange={onNameChange}
        />
        <button className='greet-button' onClick={handleGreeting}>
          Be greeted
        </button>
      </div>
      <p className='greeting'>{greeting}</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div id='image'><img src={image} alt="Generated Image" /></div>
      )}
    </div>
  )
}

export default ReturnHello

