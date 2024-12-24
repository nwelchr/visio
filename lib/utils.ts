import { prompts } from "./prompts";

export function getRandomPrompt(prompt: string): string {
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }

  return randomPrompt;
}
