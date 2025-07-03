import { Router } from "express";
import { generateImage } from "../controllers/imageController.js";
//import openai from "../utils/openaiConfig.js";

const router = Router()

router.post('/gen-image',generateImage)
export default router