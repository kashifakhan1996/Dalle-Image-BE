import OpenAI from "openai";

const getopenAPIConfig = () =>{
    const openai = new OpenAI({    
        apiKey: process.env.TEST_KEY, // ensure this is set in .env
      });
    return openai
}


export default getopenAPIConfig;