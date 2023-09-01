import React from 'react'
import OpenAI from 'openai'

function ImageCreator({ prompt, setImage }) {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  })

  console.log('hello from image-creator.js')

  React.useEffect(() => {
    handleImage()
    console.log('balls 2')
  }, [prompt])

  const handleImage = async (event) => {
    if (prompt.trim() !== '') {
      const image = await openai.images.generate({
        prompt: prompt,
        n: 1,
        size: '256x256',
      })
      setImage(image.data[0].url)
      console.log(image.data[0].url)
    } else {
      setImage('Something went wrong!')
    }
  }
}

export default ImageCreator
