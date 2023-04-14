import type { LoaderFunction } from "@vercel/remix";

const qualities = [
  "A problem solver 🧩",
  "A creative thinker 🤔",
  "A team player 🤝",
  "A self starter  🏇",
  "An innovator 💡",
  "A perpetual learner 📚",
  "A rule breaker 🙊"
];

export const loader: LoaderFunction = async (_args) => {
  return getQuote();
};

export const getQuote = (value?: string): string => {
  const random = Math.floor(Math.random() * qualities.length);
  const quote = qualities[random];

  if (quote === value) return getQuote(value);

  return qualities[random];
};
