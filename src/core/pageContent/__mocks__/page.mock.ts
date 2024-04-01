import { PageQuery } from '../../../common/headlessService/page';
import {
  EventSearch,
  EventSearchCarousel,
  EventSelected,
  EventSelectedCarousel,
  LocationsSelected,
  LocationsSelectedCarousel,
  LayoutArticle,
  LayoutArticleCarousel,
  LayoutLinkList,
  LayoutPage,
  LayoutPageCarousel,
  LayoutCards,
} from '../../../common/headlessService/types';

export const sidebarCardsList: LayoutCards = {
  cards: [
    {
      backgroundColor: 'silver',
      description: 'This is a card description',
      icon: 'angle-down',
      title: 'Card 1',
      link: {
        target: '_blank',
        title: 'Read more',
        url: ' https://hel.fi',
      },
    },
    {
      backgroundColor: 'silver',
      description: 'This is a card description',
      icon: 'angle-down',
      title: 'Card 2',
      link: {
        target: '',
        title: 'Read more',
        url: 'https://liikunta.hkih.stage.geniem.io/en/regulations-and-instructions/hygiene-in-pool-premises/',
      },
    },
  ],
  __typename: 'LayoutCards',
};

export const sidebarLinkList: LayoutLinkList = {
  anchor: '#interesting-links',
  title: 'Interesting links',
  description: 'Short description about the purpose of the links',
  links: [
    {
      target: '_blank',
      title: 'Link that opens in a new tab',
      url: 'https://google.fi',
    },
    {
      title: 'Link that opens in the same tab',
      url: '/',
    },
  ],
  __typename: 'LayoutLinkList',
};
export const sidebarArticleList: LayoutArticle = {
  title: 'Cherry Picked Articles',
  articles: [
    {
      id: 'bdf',
      title: 'AV-arkki: Miltä tuntuu? – Taide tunnekasvatuksen tukena',
      link: '/oppimateriaalit-2/alakoulu/av-arkki-milta-tuntuu-taide-tunnekasvatuksen-tukena',
      featuredImage: {
        node: {
          altText: 'image description',
          mediaItemUrl:
            'https://kultus.hkih.stage.geniem.io/uploads/2022/01/ae0d30ec-w_c3391_l_web.jpeg',
        },
      },
      __typename: 'Post',
    },
    {
      id: 'bdfd',
      title: 'Alakoulu artikkeli',
      link: '/alakoulu/alakoulu-artikkeli',
      __typename: 'Post',
    },
  ],
  __typename: 'LayoutArticles',
};
export const articleList: LayoutArticle = {
  title: 'Cherry Picked Articles',
  articles: [
    ...sidebarArticleList.articles,
    {
      id: 'asdf',
      title: 'Alakoulu artikkeli 2',
      link: '/alakoulu/alakoulu-artikkeli',
      __typename: 'Post',
    },
    {
      id: 'sdfg',
      title: 'Alakoulu artikkeli 3',
      link: '/alakoulu/alakoulu-artikkeli',
      __typename: 'Post',
    },
    {
      id: 'dfgh',
      title: 'Alakoulu artikkeli 4',
      link: '/alakoulu/alakoulu-artikkeli',
      __typename: 'Post',
    },
  ],
  __typename: 'LayoutArticles',
};
export const sidebarPageList: LayoutPage = {
  title: 'Collected pages',
  pages: [
    {
      id: 'dfg',
      title: 'Oppimateriaalit',
      link: '/oppimateriaalit-2',
      __typename: 'Page',
    },
  ],
  __typename: 'LayoutPages',
};
export const pageList: LayoutPage = {
  title: 'Collected pages',
  pages: [
    ...sidebarPageList.pages,
    {
      id: 'zxcv',
      title: 'Testisivu',
      link: '/testisivu',
      __typename: 'Page',
    },
    {
      id: 'cvbn',
      title: 'Mikä kultus',
      link: '/mika-kultus',
      __typename: 'Page',
    },
    {
      id: 'fgjhfhj',
      title: 'Oppimateriaali',
      link: '/oppimateriaali',
      __typename: 'Page',
    },
    {
      id: 'fghjfgj',
      title: 'Ohjeita',
      link: '/ohjeita',
      __typename: 'Page',
    },
  ],
  __typename: 'LayoutPages',
};

export const articleCarousel: LayoutArticleCarousel = {
  title: 'Article carousel',
  articles: articleList.articles,
  __typename: 'LayoutArticlesCarousel',
};

export const pageCarousel: LayoutPageCarousel = {
  title: 'Page carousel',
  description: 'Page carousel description',
  pages: pageList.pages,
  __typename: 'LayoutPagesCarousel',
};

export const pageEventSearch: EventSearch = {
  module: 'event_search',
  title: 'Event search',
  url: 'https://api.hel.fi/linkedevents/v1/event/?sort=end_time&super_event_type=umbrella,none&language=fi&location=tprek:15417',
  __typename: 'EventSearch',
};
export const pageEventSelected: EventSelected = {
  title: 'Event selection',
  events: [
    'helsinki:agariaajle',
    'helmet:236034',
    'helmet:236537',
    'helsinki:aga2sfz7i4',
    'helsinki:agawmqpcwa',
  ],
  // initAmountOfEvents: 6, // TODO: add when initAmountOfEvents null-issue is fixed
  module: 'event_selected',
  __typename: 'EventSelected',
};

export const pageLocationsSelected: LocationsSelected = {
  title: 'Locations selection',
  locations: [41385, 39999, 40419, 40393, 41994],
  // initAmountOfEvents: 6, // TODO: add when initAmountOfEvents null-issue is fixed
  module: 'locations_selected',
  __typename: 'LocationsSelected',
};

export const pageLocationsSelectedCarousel: LocationsSelectedCarousel = {
  title: 'Locations selection carousel',
  locations: [41385, 39999, 40419, 40393, 41994],
  // initAmountOfEvents: 6, // TODO: add when initAmountOfEvents null-issue is fixed
  module: 'locations_selected',
  __typename: 'LocationsSelectedCarousel',
};

export const pageEventSearchCarousel: EventSearchCarousel = {
  title: 'Event search carousel',
  url: 'https://api.hel.fi/linkedevents/v1/event/?sort=end_time&super_event_type=umbrella,none&language=fi&location=tprek:15417',
  __typename: 'EventSearchCarousel',
};

export const pageEventSelectedCarousel: EventSelectedCarousel = {
  title: 'Event selection carousel',
  events: [
    'helsinki:agariaajle',
    'helmet:236034',
    'helmet:236537',
    'helsinki:aga2sfz7i4',
    'helsinki:agawmqpcwa',
  ],
  // initAmountOfEvents: 6, // TODO: add when initAmountOfEvents null-issue is fixed
  module: 'event_selected',
  __typename: 'EventSelectedCarousel',
};

const sidebar = [
  sidebarLinkList,
  sidebarArticleList,
  sidebarPageList,
  sidebarCardsList,
];

const modules = [
  articleList,
  articleCarousel,
  pageList,
  pageCarousel,
  pageEventSearch,
  pageEventSearchCarousel,
  pageEventSelected,
  pageEventSelectedCarousel,
  pageLocationsSelected,
  pageLocationsSelectedCarousel,
];

const mockPage: PageQuery['page'] = {
  id: 'abc',
  content: `
  <p><strong>Taiteen ja kulttuurin Helsinki</strong></p>
  <p>Taiteen ja kulttuurin näkökulmasta helsinkiläiset lapset ja nuoret ovat poikkeuksellisessa asemassa. Kaupungissamme on valtavasti uusia ja yllätyksellisiä ympäristöjä aistia, kokea, oppia uutta ja osallistua maailmanmenoon. Kaupungissa toimii laaja joukko taiteen ja kulttuuriperinnön toimijoita, joista lukuisat tarjoavat sisältöjä lapsille ja nuorille, myös varhaiskasvatus- tai koulupäivän yhteyteen. Monipuolisten kokemusten äärelle pääsee kuitenkin vain osa lapsista ja nuorista. Taustalla ovat mm. huoltajien&nbsp;sosioekonominen tilanne sekä perheen kiinnostus ja tieto taide- ja kulttuurisisällöistä. Kulttuurikasvatusta ja kulttuurikasvatussuunnitelmaa tarvitaan, jotta taide ja kulttuuri olisivat&nbsp;tasapuolisesti osa jokaisen lapsen ja nuoren arkea ja elämänikänen yhteys taiteeseen ja kulttuuriin saa hyvän pohjan.</p>
  <p><strong>Lapsi ja nuori keskiössä</strong></p>
  <p>Jokainen lapsi on syntyessään aktiivinen ympäristönsä tutkija. Lapsuus on tässä ja nyt. Lapsi tai nuori on aktiivinen toimija, kokija ja näkijä. Lapsuus ja nuoruus ovat&nbsp;ihmisen elinkaaressa itsessään ainutlaatuisia, merkittäviä ja herkkiä ajanjaksoja. Lapsuuden aika vaikuttaa koko elinkaaren ajan, nuoruuteen, aikuisuuteen ja vanhuuteen asti. Lapsen ja nuoren kasvu kohti vahvaa, ilmaisevaa ja omaa elämäänsä hallitsevaa tulevaisuutta edellyttää turvallista, monipuolista ja toimijuutta vahvistavaa kasvuympäristöä.</p>
  <p><strong>Kulttuurikasvatussuunnitelma </strong></p>
  <p>Kulttuurikasvatussuunnitelma&nbsp;Helsingissä toimii Kulttuuri- ja vapaa-aika -toimialan, Kasvatus ja koulutus -toimialan&nbsp;(sis. yksityisen koulut)&nbsp;sekä taide-&nbsp;ja&nbsp;kulttuuritoimijoiden välisenä&nbsp;ohjaavana suunnitelmana.&nbsp;Yhteistyön tavoitteena on&nbsp;säännöllisten ja helposti&nbsp;lähestyttävien toimintatapojen, kuten kulttuuripolkujen,&nbsp;viestintäpalveluiden (esim. Kultus.fi) ja alan&nbsp;verkostojen&nbsp;kehittäminen ja ylläpitäminen. Suunnitelma koskee varhaiskasvatusta ja kouluja. Taide- ja taitoaineiden tavoitteet määritellään opetussuunnitelmissa ja varhaiskasvatussuunnitelmissa. Kulttuurikasvatusta voi sisältyä myös näiden kokonaisuuksien sisään.&nbsp;</p>
  <p>Helsingin kulttuurikasvatussuunnitelma koskee kulttuuriperinnön, kulttuuriperintökasvatuksen, taiteen ja taidekasvatuksen sisältöjä, menetelmiä ja paikkoja. Se ei kuitenkaan ohjaa lapsen, nuoren tai perheen vapaa-ajan kulttuuri- ja taidekasvatuksen yhteistyön muotoja.</p>
  <ul><li>List item 1</li><li>List item 1</li><li>List item 1</li><ul><li>Nested list item 1</li></ul></ul>
  `,
  title: 'Kulttuurikasvatus',
  featuredImage: {
    node: {
      mediaItemUrl:
        'https://api.hel.fi/linkedevents-test/media/images/a-sip_netin_tapahtumakuva.1080x648_T3brYn4.jpg',
      altText: 'Picture with content',
      title: 'Picture with content title',
    },
  },
  sidebar,
  modules,
};

export default mockPage;
