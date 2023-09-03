import react from 'react'
import ReturnHello from './return-hello'
import ImageCreator from './image-creator'

function Parent() {
  const [name] = react.useState('')
  const [prompt, setPrompt] = react.useState('')
  const [image, setImage] = react.useState('')



  return (
    <div>
      <ReturnHello name={name} setPrompt={ setPrompt } image={image} setImage={setImage} />
      <ImageCreator prompt={prompt} setImage={setImage} />
    </div>
  )
}

export default Parent
