type CardType = {
  imageUrl?: string;
  subTitle?: string;
  text?: string;
  title?: string;
  url?: string;
  target?: '_self' | '_blank';
  ariaLabel?: string;
};

const card: CardType = {
  imageUrl:
    'https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg',
  subTitle: '12.12.2021',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  title: 'Title of the card',
  url: 'https://hel.fi',
  target: '_self',
  ariaLabel: 'custom label',
};

export default card;
