import { smoothStream, streamText } from 'ai';
import { openrouter } from '@openrouter/ai-sdk-provider';

const DeepseekR1 = openrouter.chat("deepseek/deepseek-r1:free");

const result = streamText({
    model: DeepseekR1,
    messages: [
        {
            "role": "user",
            "content": "How does AI work?"
        }
    ],
    experimental_transform: smoothStream(),
    onChunk({ chunk }) {
        if (chunk.type === "reasoning") {
            console.log(chunk.textDelta);
        }
    },
});

for await (const chunk of result.textStream) {
    console.log(chunk);
}