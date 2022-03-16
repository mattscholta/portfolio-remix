import {
  SITE_AUTHOR,
  SITE_EMAIL_ADDRESS,
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER
} from "~/config/constants";

/**
 * @external https://textart.io/art/tag/rocket/1
 * @description Adding a personal touch never hurt anyone right, and some
 * shameless self-promotion isn't all that bad either.
 */
const artwork = `
<!--

           |
          / \\          Founder: ${SITE_AUTHOR}
         / _ \\         Email: ${SITE_EMAIL_ADDRESS}
        |.o '.|
        |'._.'|           - Github: ${SOCIAL_GITHUB}
        |     |           - LinkedIn ${SOCIAL_LINKEDIN}
      .*|  |  |*.         - Twitter ${SOCIAL_TWITTER}
     /  |  |  |  \\
     |,-'--|--'-.|      Ⓒ ${new Date().getFullYear()}
        \\     /
         \\ | /
           |
-->
`;

export { artwork };
