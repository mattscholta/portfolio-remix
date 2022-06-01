import { useState } from "react";
import { copyTextToClipboard } from "~/utils/clipboard";

/**
 * @name useClipboard
 * @description Simple hook for interacting with the browsers clipboard.
 */
export const useClipboard = () => {
  // Hooks
  const [value, setValue] = useState<string>();

  // Handlers
  const onCopy = (value: any) => {
    copyTextToClipboard(value);

    // in case we want to grab its value later
    setValue(value);
  };

  return { onCopy, value };
};
