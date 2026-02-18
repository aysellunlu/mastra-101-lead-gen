import { Mastra } from '@mastra/core';

export const mastra = new Mastra({
  agents: {
    leadAgent: {
      name: 'Lead-Gen-Agent',
      instructions: 'Sen bir satış asistanısın. Mesajlardan ad ve ilgiyi analiz et.',
      model: {
        // Groq'un OpenAI uyumlu yapısını kullanıyoruz
        id: 'groq/llama-3.3-70b-versatile', 
      },
    } as any, 
  },
} as any);