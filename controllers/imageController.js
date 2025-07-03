//import getopenAPIConfig from '../utils/openaiConfig.js';
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function generateImage(req, res) {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  //const prompt = 'a bowl of soup that looks like a monster, knitted out of wool'
  try {
    //const openai = getopenAPIConfig()
    openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url"
    }).then(response => {
      //console.log('response..', response)
      const imageUrl = response.data[0].url;
      res.status(200).json({ imageUrl });
    }).catch(err => {
      //console.log('err..', err)
      res.status(err.status).json({ error: err.message || err.type });
    })

  } catch (error) {

    res.status(500).json({ error: error.message });
  }
}
