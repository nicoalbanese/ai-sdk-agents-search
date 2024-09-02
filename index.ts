import "dotenv/config";

import { openai } from "@ai-sdk/openai";
import { Browserbase, BrowserbaseAISDK } from "@browserbasehq/sdk";
import { generateText } from "ai";

async function main() {
  const browserbase = new Browserbase();

  const browserTool = BrowserbaseAISDK(browserbase, { textContent: true });
  console.log(browserTool.parameters);

  const result = await generateText({
    model: openai("gpt-4o-mini"),
    tools: { browserTool },
    toolChoice: "required",
    temperature: 0,
    system: "You are a helpful assistant. Be as concise as possible.",
    prompt: "What is the weather in San Francisco?",
    maxToolRoundtrips: 3,
  });

  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
