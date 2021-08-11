import { Product } from '@nxegghead/api/util-interfaces';

const products: Product[] = [
  {
    id: 'mac-fix-plus',
    name: 'Mac Prep + Prime Fix +',
    image:
      'https://cdn.kicks.se/globalassets/integrationimages/773602345830.jpg',
    price: 210,
    rating: Math.random(), //5
    description:
      'Prep + Prime Fix+ är en fuktgivande ansiktsspray och primer, som friskar upp huden och fixerar din makeup. Den har länge varit en favorit bland professionella makeupartister och sprayen är idag en av våra bästsäljare som har vunnit mängder av utmärkelser. Fix+ ansiktsspray och primer från MAC Cosmetics är fullspäckat med vitaminer och mineraler. Den innehåller dessutom gurka, grönt te och kamomill som håller huden fräsch hela dagen - plus att den har mängder av olika användningsområden. Du kan använda den till att återfukta huden innan du lägger makeup på morgonen, spraya lite under dagen ovanpå din makeup för att återfukta huden och fräscha upp makeupen för ett fint resultat. Dessutom kan Fix+ ansiktsspray och primer användas till förbättra din makeup genom att få rouge, foundation och puder att blanda sig bättre. Fix+ ansiktsspray och primer från MAC Cosmetics är dermatologiskt och oftalmologiskt testad och passar därför till olika hudtyperukt och en fräsch makeup med fin lyster.',
  },
  {
    id: 'mac-studio-fix-foundation',
    name: 'Mac Studio Fix Fluid Foundation',
    image:
      'https://cdn.kicks.se/globalassets/integrationimages/773602103485.jpg',
    price: 325,
    rating: Math.random(), //4
    description:
      'Studio Fix Fluid från MAC Cosmetics är en medeltäckande till heltäckande, flytande foundation som ger en matt look och täcker orenheter, pigmentfläckar, porer och röda prickar. Studio Fix foundation är mjuk och lätt att applicera men håller ändå väldigt länge. Studio Fix Fluid håller din hud och makeup fräsch, även om du är på språng hela dagen. Studio Fix Fluid är oljefri och den kan därför användas på fet hud eftersom den kontrollerar olja och glansighet. Pump ingår ej, köps separat. Studio Fix Fluid från MAC Cosmetics skyddar mot UV-A och UV-B, och innehåller SPF 15. Den finns i över 60 olika färger så det finns garanterat en för varje hudfärg och underton.',
  },
  {
    id: 'mac-mineralize-skinfinish',
    name: 'MAC Mineralize Skinfinish Natural',
    image:
      'https://cdn.kicks.se/globalassets/integrationimages/773602111558-1.jpg',
    price: 325,
    rating: Math.random(), //5
    description:
      'Mineralize Skinfinish Soft & Gentle är en highlighter med en lätt metallicskimrande färg som ger huden en fin och naturlig lyster. Soft & Gentle highlighter/mineralpuder är utvecklat för att ljusa upp områden i ansiktet och ge huden en mjuk, skimrande lyster. Soft & Gentle highlighter/mineralpuder från MAC Cosmetics innehåller E-vitamin och är lätt att applicera. Soft & Gentle kan användas av de flesta hudfärger, undertoner och inte minst på olika ställen på kroppen. Mineralize Skinfinish Soft & Gentle från MAC Cosmetics är både dermatologiskt och oftalmologiskt testad.',
  },
  {
    id: 'paco-rabanne-pure-xs',
    name: 'Paco Rabanne Pure XS For Her EdP 30 ml',
    image:
      'https://cdn.kicks.se/globalassets/integrationimages/13349668545664-flaska.jpg',
    price: 570,
    rating: Math.random(), //5
    description:
      'En djup, blommig och orientalisk doft med en hint av popcorn, svart vanilj samt ylang ylang. En frigjord och fängslande doft som dröjer sig kvar på huden.',
  },
  {
    id: 'paco-rabanne-lady-million',
    name: 'Paco Rabanne Lady Million EdP 30 ml',
    image:
      'https://cdn.kicks.se/globalassets/integrationimages/3349668508488.jpg',
    price: 570,
    rating: Math.random(), //5
    description:
      'Lady Milllion är frisk, blommig och träig, likt nektar av yppiga blommor, efterföljande försiktigt men fortfarande mycket närvarande. Den är kraftfullt förförisk med noter av neroli och hallon.',
  },
  {
    id: 'versace-crystal-noir',
    name: 'Versace Crystal Noir EdT 50 ml',
    image:
      'https://cdn.kicks.se/globalassets/integrationimages/8018365071162.jpg',
    price: 760,
    rating: Math.random(), //5
    description:
      'Crystal Noir en magisk och dyrbar doft med förtrollande, sensuella och feminina noter för den självsäkra, förförande Versacekvinnan som alltid bär huvudet högt. En parfym som inte går någon obemärkt förbi. Doften öppnar upp med spännande noter av peppar och ingefära tätt följt av mild gardenia. En svag förnimmelse av frisk apelsinblomma efterföljs av mjuk pion. Den varma basen är en magisk kombination av amber, mysk och sandelträ. En delikat och ultrafeminin doft.',
  },
];

export const getAllProducts = () => products;
export const getProduct = (id: string) =>
  products.find((product) => product.id === id);
