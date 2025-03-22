import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const DeepseekR1 = "deepseek/deepseek-r1:free";
const QwenQwQ32B = "qwen/qwq-32b:free";
const R1DistillQwen32B = "deepseek/deepseek-r1-distill-qwen-32b:free"
const R1DistillLlama70B = "deepseek/deepseek-r1-distill-llama-70b:free"

async function main() {
  const stream = await openai.chat.completions.create({
    model: DeepseekR1,
    messages: [
      {
        "role": "user",
        "content": "How does AI work?"
      }
    ],
    stream: true,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

main();