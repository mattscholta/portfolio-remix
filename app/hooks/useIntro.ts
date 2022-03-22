import * as React from "react";

import {
  SITE_AUTHOR,
  SITE_EMAIL_ADDRESS,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER
} from "~/config/constants";

/**
 *
 */
export const useIntro = () => {
  const styleContact = "color: default; font-size: 14px;";
  const styleMessage = `color: #f00; font-size: 18px;`;
  const strContact = `%c
  Well, since you've taken the time to read this shoot me an email and lets talk!

  -----------------------------------------------------

  ${SITE_AUTHOR}
  ${SITE_EMAIL_ADDRESS}

  - Github: ${SOCIAL_GITHUB}
  - LinkedIn: ${SOCIAL_LINKEDIN}
  - Twitter: ${SOCIAL_TWITTER}  \n
  `;

  // Life Cycle
  React.useEffect(() => {
    console.group("👀 Thank you for looking, lets connect!");
    console.log(`%c\n👋 What can I help you build?`, styleMessage);
    console.log(strContact, styleContact);
    console.groupEnd();
  }, []);
};
