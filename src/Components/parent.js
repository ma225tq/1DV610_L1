import React from 'react'
import ReturnHello from './hello'
import ImageCreator from './image-creator'

function ParentComponent() {
  const [name, setName] = React.useState('')
  const [prompt, setPrompt] = React.useState('')
  const [image, setImage] = React.useState('')



  return (
    <div>
      <ReturnHello name={name} setPrompt={ setPrompt } image={image} setImage={setImage} />
      <ImageCreator prompt={prompt} setImage={setImage} />
    </div>
  )
}

export default ParentComponent
