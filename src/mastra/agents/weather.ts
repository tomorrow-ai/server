import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { weatherTool } from "../tools/weather-tool";

export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions: `You are a helpful weather assistant that provides accurate weather information.
 
Your primary function is to help users get weather details for specific locations. When responding:
- Always ask for a location if none is provided
- Include relevant details like humidity, wind conditions, and precipitation
- Keep responses concise but informative
 
Use the weatherTool to fetch current weather data.`,
  model: openai("gpt-4o-mini"),
  tools: { weatherTool },
});
