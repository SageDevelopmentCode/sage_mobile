export type DialogueChunk = string[];

export function splitDialogue(text: string, wordLimit: number): DialogueChunk {
  const words = text.split(" ");
  const chunks: DialogueChunk = [];

  for (let i = 0; i < words.length; i += wordLimit) {
    chunks.push(words.slice(i, i + wordLimit).join(" "));
  }

  return chunks;
}
