import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";

export interface Contact {
  key: string;
  href: string;
  icon?: unknown;
}

export const contacts: Contact[] = [
  {
    key: 'DISCORD',
    href: 'https://purefunc.net/discord',
    icon: faDiscord
  }, {
    key: 'YOUTUBE',
    href: 'https://purefunc.net/youtube',
    icon: faYoutube,
  }, {
    key: 'FACEBOOK',
    href: 'https://purefunc.net/facebook',
    icon: faFacebook,
  }, {
    key: 'EMAIL',
    href: 'mailto:help@purefunc.net',
    icon: faAt,
  }
];
