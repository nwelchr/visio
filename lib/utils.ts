import { prompts } from "./prompts";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt: string): string {
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
