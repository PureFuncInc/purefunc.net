import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';

export interface Contact {
  key: string;
  href: string;
  icon?: unknown;
}

export const contacts: Contact[] = [
  {
    key: 'GITHUB',
    href: 'https://github.com/PureFuncInc/',
    icon: faGithub,
  }, {
    key: 'LINKEDIN',
    href: 'https://linkedin.purefunc.net/',
    icon: faLinkedin,
  }, {
    key: 'DISCORD',
    href: 'https://discord.purefunc.net/',
    icon: faDiscord
  }, {
    key: 'YOUTUBE',
    href: 'https://youtube.purefunc.net/',
    icon: faYoutube,
  }, {
    key: 'FACEBOOK',
    href: 'https://facebook.purefunc.net/',
    icon: faFacebook,
  }, {
    key: 'EMAIL',
    href: 'mailto:help@purefunc.net',
    icon: faAt,
  }
];
