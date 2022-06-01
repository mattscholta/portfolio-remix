/**
 * @name fallbackCopyToClipboard
 * @external https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
 * @description Some code taken from StackOverflow which provides modern
 * clipboard functionality and a fallback for older browsers.
 */
export const fallbackCopyToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
};

export const copyTextToClipboard = (text: string) => {
  console.log(`📋 copy text to Clipboard`, text);

  if (!navigator.clipboard) {
    fallbackCopyToClipboard(text);
    return;
  }

  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Copied to clipboard ✅");
    },
    function (err) {
      console.error("Could not copy text:", err);
    }
  );
};
