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
    href: 'https://www.linkedin.com/company/purefuncinc',
    icon: faLinkedin,
  }, {
    key: 'DISCORD',
    href: 'https://discord.gg/purefunc',
    icon: faDiscord
  }, {
    key: 'YOUTUBE',
    href: 'https://www.youtube.com/channel/UCiaBjaYilzLG5mmSqpP8fWg',
    icon: faYoutube,
  }, {
    key: 'FACEBOOK',
    href: 'https://www.facebook.com/purefuncinc',
    icon: faFacebook,
  }, {
    key: 'EMAIL',
    href: 'mailto:help@purefunc.net',
    icon: faAt,
  }
];
