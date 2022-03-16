import {
  SITE_AUTHOR,
  SITE_EMAIL_ADDRESS,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER
} from "./constants";

const strContact = `%c
${SITE_AUTHOR}
${SITE_EMAIL_ADDRESS}

- Github: ${SOCIAL_GITHUB}
- LinkedIn: ${SOCIAL_LINKEDIN}
- Twitter: ${SOCIAL_TWITTER}  \n
`;

/**
 * @description A message for the console
 */
const intro = () => {
  // if (IS_TEST) return;

  const styleContact = "color: default; font-size: 14px;";
  const styleMessage = `color: #f00; font-size: 18px;`;

  /* eslint-disable no-console */
  console.group("👀 Thank you for looking, lets connect!");
  console.log(`%c\n👋 What can I help you build?`, styleMessage);
  console.log(strContact, styleContact);
  console.groupEnd();
  /* eslint-enable no-console */
};

export { intro };
