import { LoaderFunction } from "remix";

const qualities = [
  "A problem solver 🤔",
  "A team player 🤝",
  "A self starter  🏇",
  "An innovator 💡",
  "A perpetual learner 📚",
  "A rule breaker 🙈"
];

export const loader: LoaderFunction = async (): Promise<string> => {
  return qualities[Math.floor(Math.random() * qualities.length)];
};
