import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';
import dotenv from "dotenv";

dotenv.config();

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const result = streamText({
  model: openrouter('deepseek/deepseek-r1:free'),
  prompt: 'How does AI work?',
});

for await (const chunk of result) {
  console.log(chunk);
}