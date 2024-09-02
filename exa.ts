import "dotenv/config";

import { openai } from "@ai-sdk/openai";
import { ExaClient } from "@agentic/exa";
import { generateText } from "ai";
import { createAISDKTools } from "@agentic/ai-sdk";

async function main() {
  const exa = new ExaClient();
  const result = await generateText({
    model: openai("gpt-4o-mini"),
    tools: createAISDKTools(exa),
    temperature: 0,
    prompt: "What is founder mode? I heard PG talk about it.",
    maxToolRoundtrips: 1,
  });

  console.log(result.text);
}

main().catch(console.error);
