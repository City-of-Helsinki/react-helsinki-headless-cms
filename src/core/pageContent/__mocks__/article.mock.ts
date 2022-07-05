import { ArticleQuery } from '../../../common/headlessService/article';

export const sidebarLinkList = {
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
};

const mockPage: ArticleQuery['post'] = {
  id: 'abc',
  content: `
  <p><strong>Taiteen ja kulttuurin Helsinki</strong></p>
  <p>Taiteen ja kulttuurin näkökulmasta helsinkiläiset lapset ja nuoret ovat poikkeuksellisessa asemassa. Kaupungissamme on valtavasti uusia ja yllätyksellisiä ympäristöjä aistia, kokea, oppia uutta ja osallistua maailmanmenoon. Kaupungissa toimii laaja joukko taiteen ja kulttuuriperinnön toimijoita, joista lukuisat tarjoavat sisältöjä lapsille ja nuorille, myös varhaiskasvatus- tai koulupäivän yhteyteen. Monipuolisten kokemusten äärelle pääsee kuitenkin vain osa lapsista ja nuorista. Taustalla ovat mm. huoltajien&nbsp;sosioekonominen tilanne sekä perheen kiinnostus ja tieto taide- ja kulttuurisisällöistä. Kulttuurikasvatusta ja kulttuurikasvatussuunnitelmaa tarvitaan, jotta taide ja kulttuuri olisivat&nbsp;tasapuolisesti osa jokaisen lapsen ja nuoren arkea ja elämänikänen yhteys taiteeseen ja kulttuuriin saa hyvän pohjan.</p>
  <p><strong>Lapsi ja nuori keskiössä</strong></p>
  <p>Jokainen lapsi on syntyessään aktiivinen ympäristönsä tutkija. Lapsuus on tässä ja nyt. Lapsi tai nuori on aktiivinen toimija, kokija ja näkijä. Lapsuus ja nuoruus ovat&nbsp;ihmisen elinkaaressa itsessään ainutlaatuisia, merkittäviä ja herkkiä ajanjaksoja. Lapsuuden aika vaikuttaa koko elinkaaren ajan, nuoruuteen, aikuisuuteen ja vanhuuteen asti. Lapsen ja nuoren kasvu kohti vahvaa, ilmaisevaa ja omaa elämäänsä hallitsevaa tulevaisuutta edellyttää turvallista, monipuolista ja toimijuutta vahvistavaa kasvuympäristöä.</p>
  <p><strong>Kulttuurikasvatussuunnitelma </strong></p>
  <p>Kulttuurikasvatussuunnitelma&nbsp;Helsingissä toimii Kulttuuri- ja vapaa-aika -toimialan, Kasvatus ja koulutus -toimialan&nbsp;(sis. yksityisen koulut)&nbsp;sekä taide-&nbsp;ja&nbsp;kulttuuritoimijoiden välisenä&nbsp;ohjaavana suunnitelmana.&nbsp;Yhteistyön tavoitteena on&nbsp;säännöllisten ja helposti&nbsp;lähestyttävien toimintatapojen, kuten kulttuuripolkujen,&nbsp;viestintäpalveluiden (esim. Kultus.fi) ja alan&nbsp;verkostojen&nbsp;kehittäminen ja ylläpitäminen. Suunnitelma koskee varhaiskasvatusta ja kouluja. Taide- ja taitoaineiden tavoitteet määritellään opetussuunnitelmissa ja varhaiskasvatussuunnitelmissa. Kulttuurikasvatusta voi sisältyä myös näiden kokonaisuuksien sisään.&nbsp;</p>
  <p>Helsingin kulttuurikasvatussuunnitelma koskee kulttuuriperinnön, kulttuuriperintökasvatuksen, taiteen ja taidekasvatuksen sisältöjä, menetelmiä ja paikkoja. Se ei kuitenkaan ohjaa lapsen, nuoren tai perheen vapaa-ajan kulttuuri- ja taidekasvatuksen yhteistyön muotoja.</p>
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
  date: '2022-05-10T15:10:13',
  categories: {
    edges: [
      {
        node: {
          id: 'some id',
          name: 'Category1',
        },
      },
      {
        node: {
          id: 'some id 2',
          name: 'Category2',
        },
      },
    ],
  },
};

export default mockPage;
