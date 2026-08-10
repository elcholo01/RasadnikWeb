// Centralizovani podaci o proizvodima - koriste se na Products i ProductDetails stranicama

export const products = [
  // ==================== ČETINARI (ID: 1-6, 19) ====================
  {
    id: 1,
    slug: 'tuja-smaragd',
    name: 'Tuja Smaragd',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 300,
    showPrice: true,
    image: '/images/tujavelika.jpeg',
    sizes: [
      { label: '0.5–0.7 m (kontejnerska)', price: 300 },
      { label: '1–1.2 m', price: 600 },
      { label: '1.2–1.4 m', price: 750 },
      { label: '1.4–1.6 m', price: 1050 },
      { label: '1.6–1.8 m', price: 1550 },
      { label: '1.8–2 m', price: 2000 },
      { label: '2–2.2 m', price: 2350 },
      { label: '2.3–2.5 m', price: 3550 },
      { label: '2.5–2.7 m', price: 5500 },
      { label: '2.7–3 m', price: 8000 },
      { label: '3–5 m', price: null },
    ],
    images: [
      '/images/tujavelika.jpeg',
      '/images/tujavelika_stara.jpeg',
      '/images/tuje.jpeg',
      '/images/tujakontejnerska.jpeg'
    ],
    seoTitle: 'Tuja Smaragd – prodaja sadnica za živu ogradu, cena od 300 RSD',
    metaDescription: 'Tuja Smaragd – prodaja sadnica, zimzeleni četinar za gustu, urednu živu ogradu. Sadnice svih visina, cena od 300 RSD. Dostava i sadnja širom Srbije.',
    description: 'Uzak, piramidalan četinar koji zadržava savršen oblik bez orezivanja — najtraženiji izbor za živu ogradu u Srbiji, otporan i lak za održavanje.',
    richContent: `Thuja occidentalis 'Smaragd' odlikuje se uskim, piramidalnim rastom koji ne gubi formu ni bez redovnog rezanja, što je čini idealnom za graničnu sadnju. Sadi se u jesen (oktobar–novembar) ili rano proleće (mart–april), na razmaku 60–80 cm za gustu živu ogradu. Naraste do 4–5 metara i podnosi mraz do -25°C — savršeno za sve klimatske zone Srbije. Rasadnik Tilija, u Pločici kod Kovina, nudi je u svim visinama uz dostavu i sadnju širom Srbije.

Na raspolaganju je čitav niz veličina — od manjih kontejnerskih sadnica (0,5–0,7 m) za budžetsku sadnju, do velikih formiranih primeraka (i preko 2,5 m) za trenutan efekat guste ograde. Naručivanje ide jednostavno telefonom ili preko kontakt forme — dogovaramo količinu, termin i, po želji, sadnju na terenu bilo gde u Srbiji.`,
    relatedBlogSlug: 'tuja-smaragd-sadnja-i-nega',
    productFaq: [
      { q: 'Koje veličine tuje smaragd su dostupne?', a: 'Nudimo tuju smaragd od manjih kontejnerskih sadnica (0,5–0,7 m) do velikih formiranih primeraka (2,7–3 m i više). Cena raste sa visinom — pogledajte tabelu cena iznad ili nas kontaktirajte za tačnu ponudu.' },
      { q: 'Da li vršite dostavu i sadnju?', a: 'Da, dostavljamo tuje širom Srbije i, po dogovoru, vršimo i profesionalnu sadnju na vašoj lokaciji.' },
      { q: 'Koliki je minimalni broj sadnica za porudžbinu?', a: 'Nema minimuma — prodajemo pojedinačne sadnice, ali i kompletne žive ograde od nekoliko stotina komada.' },
    ],
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      growthRate: '20–35 cm godišnje',
      spacing: '40–80 cm (zavisno od željene gustine)',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 2,
    slug: 'tisa',
    name: 'Tisa',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 2000,
    showPrice: true,
    image: '/images/tisa.jpeg',
    images: [
      '/images/tisa.jpeg',
      '/images/taxus.jpeg',
      '/images/taxusbaccata.jpeg'
    ],
    seoTitle: 'Tisa – prodaja sadnica za živu ogradu, cena od 2.000 RSD',
    metaDescription: 'Tisa – prodaja sadnica, dugovečan četinar koji odlično podnosi rezanje, idealan za formirane žive ograde. Cena od 2.000 RSD, dostava širom Srbije.',
    description: 'Dugovečan četinar koji podnosi rezanje bolje od gotovo bilo koje druge biljke — savršen izbor za formirane žive ograde i topijariju koje traju generacijama.',
    richContent: `Taxus baccata spada među najdugovečnije biljke uopšte — pojedini primerci žive i po nekoliko stotina godina. Odlično podnosi učestalo rezanje i oblikovanje, a senku podnosi bolje od skoro svakog drugog četinara. Sadi se u proleće ili jesen, otporna je na mraz do -20°C. U Rasadniku Tilija dostupna je u svim visinama, uz mogućnost dostave i sadnje.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Senka do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 3,
    slug: 'crni-bor',
    name: 'Crni bor',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 800,
    showPrice: true,
    image: '/images/WhatsApp Image 2025-12-30 at 20.53.06.jpeg',
    sizes: [
      { label: '80–120 cm (kontejnerska)', price: 800 },
      { label: '150–200 cm (busen)', price: 3000 },
    ],
    seoTitle: 'Crni bor – prodaja sadnica, cena od 800 RSD',
    metaDescription: 'Crni bor – prodaja sadnica, robusno zimzeleno drvo otporno na vetar, sušu i gradske uslove. Cena od 800 RSD, dostava širom Srbije.',
    description: 'Robusno zimzeleno drvo tamnozelenih iglica, otporno na gradsku prašinu, vetar i sušu — pouzdan izbor za veća dvorišta, parkove i pošumljavanje.',
    richContent: `Pinus nigra brzo raste — do 40–60 cm godišnje — i vremenom dostiže i 20 metara visine, zadržavajući karakteristične duge, tamnozelene iglice. Sadi se u proleće ili ranu jesen na osunčanom mestu. Odlično podnosi gradske uslove i zagađenje vazduha. Dostupan u Rasadniku Tilija u Pločici, uz dostavu širom Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Peskovita do glinena',
      hardiness: 'Veoma otporan na mraz'
    }
  },
  {
    id: 4,
    slug: 'thuja-orientalis',
    name: 'Thuja Orientalis',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 900,
    showPrice: true,
    image: '/images/WhatsApp Image 2026-01-03 at 19.53.27.jpeg',
    seoTitle: 'Thuja Orientalis – prodaja sadnica, cena od 900 RSD',
    metaDescription: 'Thuja Orientalis – prodaja sadnica, kompaktna azijska tuja za manje bašte i terase. Cena od 900 RSD, dostava širom Srbije.',
    description: 'Kompaktna azijska tuja sočno zelene boje i vertikalnih grana — idealna za manje bašte i terase gde tuja smaragd zauzima previše prostora.',
    richContent: `Platycladus orientalis raste gušće i kompaktnije od tuje smaragd, zadržavajući karakteristične vertikalne grane. Naraste do 3–4 metra i dobro podnosi gradske uslove i zagađenje. Sadi se u proleće ili jesen, otporna je na mraz do -20°C. Dostupna je u svim visinama u Rasadniku Tilija, uz dostavu i sadnju.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 5,
    slug: 'plava-smrca',
    name: 'Plava smrča',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 3500,
    showPrice: true,
    image: '/images/WhatsApp Image 2026-01-04 at 19.50.56.jpeg',
    seoTitle: 'Plava smrča – prodaja sadnica, cena od 3.500 RSD',
    metaDescription: 'Plava smrča – prodaja sadnica, dekorativno drvo srebrnasto-plavih iglica, savršen soliter za dvorište. Cena od 3.500 RSD, dostava širom Srbije.',
    description: 'Upečatljivo dekorativno drvo srebrnasto-plavih iglica koje zadržava lepotu bez ikakvog rezanja — savršen soliter za dvorište ili park.',
    richContent: `Picea pungens 'Glauca' sporo raste, ali s vremenom dostiže impresivnih 10–15 metara visine. Sadi se u proleće, na sunčanom mestu u blago kiselu zemlju. Izuzetno je otporna na mraz i hladnoću. Dostupna je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Blago kisela zemlja',
      hardiness: 'Veoma otporna na mraz'
    }
  },
  {
    id: 6,
    slug: 'juniperus-horizontalis',
    name: 'Juniperus Horizontalis',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 400,
    showPrice: true,
    image: '/images/juniperushorizontalis.jpeg',
    seoTitle: 'Juniperus Horizontalis – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Juniperus Horizontalis – prodaja sadnica, nizak zimzeleni pokrivač tla za kosine i kamenjare. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Nizak, gusto rastući pokrivač tla koji poput tepiha prekriva kosine i kamenjare — zimzelen tokom cele godine i gotovo bez potrebe za negom.',
    richContent: `Polegli klek, kako se Juniperus horizontalis često naziva, raste horizontalno, visok svega 20–40 cm, ali se širi i do 1,5–2 metra. Odlično sprečava eroziju tla na kosinama i idealan je za kamenjare. Veoma je otporan na sušu, mraz i siromašna zemljišta. Dostupan je u Rasadniku Tilija u Pločici, sa dostavom širom Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Veoma otporan na mraz i sušu'
    }
  },
  {
    id: 19,
    slug: 'bor-na-stapu',
    name: 'Bor na štapu',
    category: 'cetinari',
    categories: ['cetinari'],
    price: 2500,
    showPrice: true,
    image: '/images/Bor na štapu cetinar.jpg',
    images: [
      '/images/Bor na štapu cetinar.jpg',
      '/images/bornastapu.jpeg'
    ],
    seoTitle: 'Bor na štapu – prodaja sadnica, cena od 2.500 RSD',
    metaDescription: 'Bor na štapu – prodaja sadnica, dekorativni četinar sa okruglom krunom na jednom stablu. Cena od 2.500 RSD, dostava širom Srbije.',
    description: 'Posebno oblikovan bor sa okruglom krunom na jednom pravom stablu — elegantan akcenat za male vrtove, terase i ulaze u dvorište.',
    richContent: `Ovaj dekorativni četinar formira se kalemljenjem na jedno ravno stablo, čime dobija prepoznatljivu, uređenu siluetu retku kod drugih četinara. Otporan je na mraz i ne zahteva posebnu negu izuzev povremenog oblikovanja krune. Dostupan je u Rasadniku Tilija, uz dostavu i sadnju.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Veoma otporan na mraz'
    }
  },

  // ==================== LIŠĆARI (ID: 7-8) ====================
  {
    id: 7,
    slug: 'katalpa',
    name: 'Katalpa',
    category: 'liscari',
    categories: ['liscari'],
    price: 4000,
    showPrice: true,
    image: '/images/katalpa.jpg',
    seoTitle: 'Katalpa – prodaja sadnica za hlad u dvorištu, cena od 4.000 RSD',
    metaDescription: 'Katalpa – prodaja sadnica, brzorastuće ukrasno drvo sa krupnim listovima i mirisnim belim cvetovima. Cena od 4.000 RSD, dostava širom Srbije.',
    description: 'Impresivno ukrasno drvo ogromnih srceolikih listova i mirisnih belih cvetova — pravi gust hlad već posle nekoliko sezona i unosi poseban šarm u svako dvorište.',
    richContent: `Catalpa bignonioides brzo raste — do 50 cm godišnje — i vremenom dostiže i do 4 metra visine, cvetajući bujno i mirisno tokom juna. Postoji i u formi na štapu (pendula), kompaktnoj dekoraciji idealnoj za manja dvorišta. Sadi se u proleće, na osunčanom mestu u plodnu zemlju. Rasadnik Tilija nudi katalpu u svim veličinama, uz dostavu i sadnju.`,
    relatedBlogSlug: 'katalpa-sadnja-i-nega',
    productFaq: [
      { q: 'Koje forme katalpe su dostupne?', a: 'Nudimo standardnu katalpu (drvo do 4 m) i katalpu na štapu (formu pendula) sa kompaktnom, kupolastom krošnjom za manja dvorišta.' },
      { q: 'Kolika je cena katalpe?', a: 'Cena počinje od 4.000 RSD, u zavisnosti od veličine i forme sadnice.' },
      { q: 'Da li vršite dostavu i sadnju?', a: 'Da, dostavljamo i, po dogovoru, sadimo katalpu na vašoj lokaciji širom Srbije.' },
    ],
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, vlažna zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 8,
    slug: 'magnolija-grandiflora',
    name: 'Magnolija Grandiflora',
    category: 'liscari',
    categories: ['liscari'],
    price: 1500,
    showPrice: true,
    image: '/images/WhatsApp Image 2026-01-03 at 19.52.34.jpeg',
    sizes: [
      { label: '80–100 cm (kontejnerska)', price: 1500 },
      { label: '170–200 cm (busen)', price: 6000 },
    ],
    seoTitle: 'Magnolija Grandiflora – prodaja sadnica, cena od 1.500 RSD',
    metaDescription: 'Magnolija Grandiflora – prodaja sadnica, jedina zimzelena magnolija sa krupnim mirisnim cvetovima. Cena od 1.500 RSD, dostava širom Srbije.',
    description: 'Jedina zimzelena magnolija — krupni mirisni beli cvetovi i sjajno lišće čine je pravim raritetom u srpskim baštama tokom cele godine.',
    richContent: `Magnolia grandiflora zadržava listove i cveta tokom cele godine, za razliku od listopadnih magnolija. Naraste do 10–15 metara. Sadi se u proleće na zaštićenom, osunčanom mestu, u blago kiselu, bogatu zemlju uz redovno zalivanje dok se ne ukoreni. Rasadnik Tilija nudi je uz dostavu i sadnju na celoj teritoriji Srbije.`,
    relatedBlogSlug: 'magnolija-grandiflora-sadnja-i-nega',
    productFaq: [
      { q: 'Zašto magnolija grandiflora ne cveta?', a: 'Najčešće zato što je biljka još mlada — sadnice iz rasadnika prvi put cvetaju za 5–8 godina. Strpljenje je ključno.' },
      { q: 'Da li podnosi mraz u Srbiji?', a: 'Da, do oko -12°C, uz zaštićen položaj u hladnijim krajevima.' },
      { q: 'Da li vršite dostavu i sadnju?', a: 'Da, dostavljamo i, po dogovoru, sadimo magnoliju na vašoj lokaciji širom Srbije.' },
    ],
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Blago kisela, bogata zemlja',
      hardiness: 'Otporna na mraz do -12°C'
    }
  },

  // ==================== ŠIBLJE (ID: 9-18, 20) ====================
  {
    id: 9,
    slug: 'lovor-visnja',
    name: 'Lovor višnja',
    category: 'liscari',
    categories: ['liscari', 'ziva-ograda'],
    price: 400,
    showPrice: true,
    image: '/images/lovorvisnja.jpeg',
    sizes: [
      { label: '40–80 cm (kontejnerska)', price: 400 },
      { label: '80–120 cm (busen)', price: 1700 },
    ],
    images: [
      '/images/lovorvisnja.jpeg',
      '/images/lovormarakana.PNG',
      '/images/lovormali.jpeg',
      '/images/lovor1.jpeg',
      '/images/lovor3.jpeg',
      '/images/lovor4.jpeg',
      '/images/lovorrazgranati.jpeg',
      '/images/lovorvisok.jpeg'
    ],
    seoTitle: 'Lovor Višnja – prodaja sadnica za živu ogradu, cena od 400 RSD',
    metaDescription: 'Lovor višnja – prodaja sadnica, gust zimzeleni žbun za elegantnu živu ogradu, otporan na mraz i gradske uslove. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Gust, zimzeleni žbun koji ostaje jednako privlačan tokom cele godine — idealan izbor za elegantnu, neprozirnu živu ogradu otpornu na mraz i gradske uslove.',
    richContent: `Prunus laurocerasus, u narodu poznat kao lovor višnja, najtraženija je biljka za guste žive ograde u Srbiji. Raste brzo — 40 do 60 cm godišnje — i lako se oblikuje rezanjem dva puta godišnje. Sadi se na razmaku 50–80 cm, u proleće ili jesen, i podnosi mraz do -20°C, gradske uslove, zagađenje i senku podjednako dobro. U poređenju sa tujom, nudi širi i gušći žbun sa sjajnim, tamnozelenim lišćem.

Sadnice su dostupne od 30 cm do 2 metra visine — birate između pristupačnije opcije za strpljiviju sadnju ili krupnijih primeraka za trenutan efekat guste ograde. Za porudžbinu nas kontaktirajte telefonom ili preko sajta: dogovaramo količinu prema dužini ograde, termin sadnje i dostavu bilo gde u Srbiji, uz mogućnost profesionalne sadnje na terenu.`,
    relatedBlogSlug: 'lovor-visnja-sadnja-i-nega',
    productFaq: [
      { q: 'Koje veličine lovor višnje su dostupne?', a: 'Sadnice su dostupne od 30 cm do 2 metra visine, u zavisnosti od trenutne ponude u rasadniku.' },
      { q: 'Da li vršite dostavu i sadnju širom Srbije?', a: 'Da, organizujemo dostavu i, po želji, sadnju na terenu na bilo kojoj lokaciji u Srbiji.' },
      { q: 'Kako da naručim veću količinu za kompletnu živu ogradu?', a: 'Pozovite nas ili pošaljite upit preko kontakt forme sa dužinom vaše ograde — predložićemo tačan broj sadnica i cenu.' },
    ],
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      growthRate: '40–60 cm godišnje',
      spacing: '50–80 cm',
      sunlight: 'Sunce do senka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 10,
    slug: 'fotinija-red-robin',
    name: 'Fotinija Red Robin',
    category: 'liscari',
    categories: ['liscari', 'ziva-ograda'],
    price: 400,
    showPrice: true,
    sizes: [
      { label: '40–60 cm (kontejnerska)', price: 400 },
      { label: '1.5–2 m (busen)', price: 3500 },
    ],
    image: '/images/fotinijanaslovna.jpeg',
    images: [
      '/images/fotinijanaslovna.jpeg',
      '/images/WhatsApp Image 2025-12-30 at 14.15.33.jpeg',
      '/images/fotinijanastapu.jpeg',
      '/images/fotinijanastapu2.jpeg'
    ],
    seoTitle: 'Fotinija Red Robin – prodaja sadnica za živu ogradu, cena od 400 RSD',
    metaDescription: 'Fotinija Red Robin – prodaja sadnica, zimzeleni žbun sa vatreno crvenim mladim listovima, idealan za živu ogradu. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Zimzeleni žbun čiji mladi izbojci u proleće i jesen blistaju vatreno crvenom bojom, dok starije lišće ostaje sjajno tamnozeleno — upečatljiv izbor za živu ogradu ili soliter.',
    richContent: `Photinia × fraseri 'Red Robin' raste 30 do 50 cm godišnje i lako se oblikuje, formirajući živu ogradu visine 1–2 metra. Sadi se u proleće ili jesen i podnosi mraz do -15°C. U Rasadniku Tilija dostupna je uz dostavu i sadnju na celoj teritoriji Srbije.

Sadnice su spremne za odmah sadnju u živu ogradu ili kao soliter u dvorištu, u više veličina — cena zavisi od visine, javite nam se za trenutnu ponudu i dostupnost. Naručivanje ide jednostavno preko telefona ili kontakt forme, a organizujemo dostavu i sadnju na terenu širom Srbije.`,
    relatedBlogSlug: 'fotinija-red-robin-sadnja-i-nega',
    productFaq: [
      { q: 'Koje veličine fotinije Red Robin su dostupne?', a: 'Nudimo sadnice u više veličina, u zavisnosti od trenutne ponude — javite nam se za tačnu dostupnost i cenu.' },
      { q: 'Da li nudite i fotiniju na štapu (soliter formu)?', a: 'Da, pored standardne žbunaste forme za živu ogradu, dostupna je i fotinija na štapu kao efektan soliter za dvorište.' },
      { q: 'Da li vršite dostavu i sadnju?', a: 'Da, dostavljamo i, po dogovoru, sadimo fotiniju na vašoj lokaciji širom Srbije.' },
    ],
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      growthRate: '30–50 cm godišnje',
      spacing: '60 cm za gustu ogradu',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 11,
    slug: 'pennisetum-alopecuroides',
    name: 'Pennisetum alopecuroides',
    category: 'siblje',
    categories: ['siblje'],
    price: 400,
    showPrice: true,
    image: '/images/Pennisetum1.jpeg',
    images: [
      '/images/Pennisetum1.jpeg',
      '/images/Pennisetum2.jpeg'
    ],
    seoTitle: 'Pennisetum alopecuroides – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Pennisetum alopecuroides – prodaja sadnica, ukrasna trava mekih cvastova nalik lisičjem repu. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Dekorativna ukrasna trava sa mekim, dlakavim cvastovima nalik lisičjem repu — moderan akcenat za bordure, gradske bašte i pejzažne kompozicije.',
    richContent: `Lisičji rep, kako se Pennisetum alopecuroides često naziva, formira guste busene visine 60–90 cm i cveta od avgusta do oktobra. Otporan je na sušu i mraz, uz minimalno održavanje. Dostupan je u Rasadniku Tilija, sa dostavom.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 12,
    slug: 'bambus',
    relatedBlogSlug: 'bambus-da-li-je-invazivan-sadnja-nega',
    name: 'Bambus',
    category: 'liscari',
    categories: ['liscari'],
    price: 3500,
    showPrice: true,
    image: '/images/bambus.jpeg',
    sizes: [
      { label: '1.5–2 m', price: 3500 },
      { label: '2.5–3 m', price: 4500 },
    ],
    seoTitle: 'Bambus – prodaja sadnica za živu ogradu, cena od 3.500 RSD',
    metaDescription: 'Bambus – prodaja sadnica, neinvazivna Fargesia za gustu, egzotičnu živu ogradu. Cena od 3.500 RSD, dostava širom Srbije.',
    description: 'Egzotičan, brzorastuć izbor za prirodnu, gustu živu ogradu — daje modernom dvorištu poseban, azijski karakter.',
    richContent: `Bambus je najbrže rastuća biljka na svetu. Za dvorišta preporučujemo neinvazivne klastermske vrste (Fargesia) koje se ne šire korenjem, a formiraju gustu zelenu zavesu do 3–5 metara visine. Zimi zadržava listove, mada može izgubiti deo lišća na jakim mrazevima. Dostupan je u Rasadniku Tilija, uz dostavu i sadnju.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Bogata, vlažna zemlja',
      hardiness: 'Zavisi od vrste, do -15°C'
    }
  },
  {
    id: 13,
    slug: 'hortenzija',
    relatedBlogSlug: 'hortenzija-nega-rezidba-cvetanje',
    name: 'Hortenzija',
    category: 'siblje',
    categories: ['siblje'],
    price: 400,
    showPrice: true,
    image: '/images/hortenzija.jpeg',
    images: [
      '/images/hortenzija.jpeg',
      '/images/WhatsApp Image 2026-01-04 at 19.51.44.jpeg'
    ],
    seoTitle: 'Hortenzija – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Hortenzija – prodaja sadnica, krupni kuglasti cvetovi u više boja od juna do oktobra. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Jedna od najvoljenijih ukrasnih biljaka — krupni, kuglasti cvetovi u beloj, ružičastoj, plavoj i ljubičastoj boji krase baštu od juna do oktobra.',
    richContent: `Hydrangea menja boju cveta u zavisnosti od kiselosti zemlje: kisela zemlja daje plave, alkalna ružičaste tonove. Sadi se u proleće na polusenkovitom mestu, u bogatu, vlažnu zemlju, i podnosi mraz do -15°C. Rasadnik Tilija nudi hortenzije uz dostavu i sadnju na celoj teritoriji Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Polusenka',
      watering: 'Često zalivanje',
      soil: 'Kisela do neutralna zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 14,
    slug: 'brsljan',
    name: 'Bršljan (Hedera helix)',
    category: 'siblje',
    categories: ['siblje'],
    price: 800,
    showPrice: true,
    image: '/images/puzavice1.jpeg',
    images: [
      '/images/puzavice1.jpeg',
      '/images/puzavice2.jpeg'
    ],
    seoTitle: 'Bršljan – prodaja sadnica, cena od 800 RSD',
    metaDescription: 'Bršljan (Hedera helix) – prodaja sadnica, zimzelena puzavica za ograde, zidove i senkovita mesta. Cena od 800 RSD, dostava širom Srbije.',
    description: 'Zimzelena puzavica koja brzo i gusto prekriva ograde, zidove i tlo — dekorativna tokom cele godine i gotovo bez potrebe za negom.',
    richContent: `Hedera helix najpopularnija je puzavica za senkovita mesta u dvorištu, savršena za teško pristupačne površine gde druge biljke teško uspevaju. Odlično podnosi senku, zagađenje i različite vrste tla. Dostupna je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Senka do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 15,
    slug: 'lonicera-nitida',
    name: 'Lonicera Nitida',
    category: 'siblje',
    categories: ['siblje'],
    price: 200,
    showPrice: true,
    image: '/images/lonicerantida1.jpeg',
    images: [
      '/images/lonicerantida1.jpeg',
      '/images/lonicerantida2.jpeg'
    ],
    seoTitle: 'Lonicera Nitida – prodaja sadnica, cena od 200 RSD',
    metaDescription: 'Lonicera Nitida – prodaja sadnica, kompaktna biljka za niske, formirane žive ograde. Cena od 200 RSD, dostava širom Srbije.',
    description: 'Kompaktna, poluzimzelena biljka sitnog sjajnog lišća koja odlično podnosi česta rezanja — moderno rešenje za niske, formirane žive ograde do metar visine.',
    richContent: `Ova gusta biljka brzo popunjava praznine i lako se oblikuje, zbog čega je omiljena u formalnijim vrtnim stilovima. Podnosi sunce i polusenku, otporna je na mraz do -15°C. Dostupna je u Rasadniku Tilija, uz dostavu i sadnju.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 16,
    slug: 'heuchera',
    name: 'Heuchera',
    category: 'siblje',
    categories: ['siblje'],
    price: 300,
    showPrice: true,
    image: '/images/heuchera1.jpeg',
    images: [
      '/images/heuchera1.jpeg',
      '/images/heuchera2.jpeg',
      '/images/heuchera3.jpg'
    ],
    seoTitle: 'Heuchera – prodaja sadnica, cena od 300 RSD',
    metaDescription: 'Heuchera – prodaja sadnica, niska perena sa lišćem u nijansama ljubičaste, srebrne i narandžaste. Cena od 300 RSD, dostava širom Srbije.',
    description: 'Poznata i kao koralna zvona, ova niska perena uzgaja se pre svega zbog listova u nijansama ljubičaste, srebrne, narandžaste i zelene — boja koja traje tokom cele vegetacije.',
    richContent: `Heuchera naraste 20–40 cm i sjajno se snalazi u polusenkovitim delovima bašte, idealna za bordure, rubove staza i kamenjare. Otporna je na mraz do -20°C i ne zahteva posebnu negu. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Bogata, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 17,
    slug: 'hibiskus',
    name: 'Hibiskus',
    category: 'siblje',
    categories: ['siblje'],
    price: 400,
    showPrice: true,
    image: '/images/hibiskus.jpeg',
    seoTitle: 'Hibiskus – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Hibiskus – prodaja sadnica, egzotični žbun krupnih cvetova, cveta od jula do oktobra. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Egzotična lepotica sa krupnim, upečatljivim cvetovima koja cveta od jula do oktobra. Brzo raste, lako se održava i podjednako dobro uspeva u bašti i u saksiji na terasi.',
    richContent: `Hibiscus syriacus je otporan listopadni žbun čiji krupni cvetovi krase dvorište sve do jeseni. Naraste do 2–3 metra, a rezidbom se lako oblikuje i u malo drvo. Najbolje uspeva na osunčanom, zaštićenom mestu, posađen u proleće. Podnosi mraz do -20°C — mnogo je otporniji nego što se obično misli. U Rasadniku Tilija dostupan je uz dostavu i sadnju na terenu.`,
    relatedBlogSlug: 'hibiskus-zasto-ne-cveta-nega',
    productFaq: [
      { q: 'Zašto hibiskus gubi pupoljke pre cvetanja?', a: 'Najčešće zbog neredovnog zalivanja, naglih promena temperature ili premalo sunca. Redovna nega i stabilna, sunčana pozicija to rešavaju.' },
      { q: 'Da li hibiskus podnosi mraz u Srbiji?', a: 'Da — otporan je do -20°C, što pokriva veći deo Srbije bez posebne zaštite.' },
      { q: 'Da li vršite dostavu i sadnju?', a: 'Da, dostavljamo i, po dogovoru, sadimo hibiskus na vašoj lokaciji širom Srbije.' },
    ],
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 18,
    slug: 'spirea',
    name: 'Spirea',
    category: 'siblje',
    categories: ['siblje'],
    price: 300,
    showPrice: true,
    image: '/images/Spirea japonica \'Little Princes\' - ukrasno šiblje.jpg',
    images: [
      '/images/Spirea japonica \'Little Princes\' - ukrasno šiblje.jpg',
      '/images/spirea.jpeg',
      '/images/Spirea japonica.jpg'
    ],
    seoTitle: 'Spirea – prodaja sadnica, cena od 300 RSD',
    metaDescription: 'Spirea – prodaja sadnica, dekorativni žbun bujnog cvetanja, gotovo bez potrebe za negom. Cena od 300 RSD, dostava širom Srbije.',
    description: 'Dekorativni žbun bujnog cvetanja u beloj, roze ili ljubičastoj boji — brzo raste, gotovo ne zahteva negu i dugo traje u dvorištu.',
    richContent: `Spiraea japonica cveta u proleće i leto, a neke vrste ponovo i u jesen. Gusta je i lako se orezuje, idealna za bordure, živice i masovne sadnje. Otporna je na mraz do -25°C. Dostupna je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 20,
    slug: 'bozur',
    name: 'Božur',
    category: 'siblje',
    categories: ['siblje'],
    price: 400,
    showPrice: true,
    image: '/images/Božur (Paeonia) 1 siblje.jpg',
    images: [
      '/images/Božur (Paeonia) 1 siblje.jpg',
      '/images/Božur (Paeonia) 2 siblje.jpg'
    ],
    seoTitle: 'Božur – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Božur (Paeonia) – prodaja sadnica, raskošni mirisni cvetovi, ostaje u bašti decenijama. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Raskošna vrtna klasika sa krupnim, mirisnim cvetovima u ružičastim, belim i crvenim nijansama — jednom posađena, ostaje u bašti decenijama.',
    richContent: `Paeonia cveta u maju i spada među najdugovečnije vrtne biljke — može ostati na istom mestu i 50 godina bez presađivanja. Sadi se u jesen, na osunčanom mestu u plodnu, dobro oceditu zemlju. Otporna je na mraz do -20°C i ne zahteva posebnu negu. Rasadnik Tilija nudi božure uz dostavu.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },

  // ==================== PERENE (ID: 21-36) ====================
  {
    id: 21,
    slug: 'ajuga-reptans',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Ajuga reptans',
    category: 'perene',
    categories: ['perene'],
    price: 80,
    showPrice: true,
    image: '/images/Ajuga reptans perena.jpg',
    seoTitle: 'Ajuga reptans – prodaja sadnica, cena od 80 RSD',
    metaDescription: 'Ajuga reptans – prodaja sadnica, niska pokrovna perena koja brzo formira gusti tepih. Cena od 80 RSD, dostava širom Srbije.',
    description: 'Niska pokrovna perena plavih cvetića koja brzo formira gusti tepih i suzbija korov — praktično rešenje za rubove staza, kamenjare i mesta ispod drveća.',
    richContent: `Ova perena naraste svega 10–15 cm, ali se brzo širi i cveta u aprilu i maju. Najbolje uspeva na polusenkovitim mestima. Otporna je na mraz do -25°C i gotovo ne zahteva negu. Dostupna je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: '10-15 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 22,
    slug: 'astilba',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Astilba',
    category: 'perene',
    categories: ['perene'],
    price: 250,
    showPrice: true,
    image: '/images/Astilba isto.jpg',
    images: [
      '/images/Astilba isto.jpg',
      '/images/Astilba sp. perena.jpg'
    ],
    seoTitle: 'Astilba – prodaja sadnica, cena od 250 RSD',
    metaDescription: 'Astilba – prodaja sadnica, jedna od retkih perena koja bogato cveta u senci. Cena od 250 RSD, dostava širom Srbije.',
    description: 'Jedna od retkih perena koja bogato cveta u senci — pernati cvastovi u roze, crvenim i belim tonovima krase baštu od juna do avgusta.',
    richContent: `Naraste 40–60 cm i najbolje uspeva na vlažnim, senkovitim mestima — uz potoke, jezera ili ispod drveća. Sadi se u proleće, u bogatu, vlažnu zemlju, i podnosi mraz do -25°C. Dostupna je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: '40-60 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Redovno zalivanje',
      soil: 'Vlažna, bogata zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 23,
    slug: 'carex-morrowi-ice-dance',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Carex morrowi \'Ice Dance\'',
    category: 'perene',
    categories: ['perene'],
    price: 250,
    showPrice: true,
    image: '/images/Carex morrowi \'Ice Dance\' -perena.jpg',
    seoTitle: 'Carex morrowi \'Ice Dance\' – prodaja sadnica, cena od 250 RSD',
    metaDescription: 'Carex \'Ice Dance\' – prodaja sadnica, zimzelena ukrasna trava dekorativna tokom cele godine. Cena od 250 RSD, dostava širom Srbije.',
    description: 'Elegantna zimzelena ukrasna trava sa zelenim listovima obrubljenim belom prugom — dekorativna tokom cele godine, čak i u senci.',
    richContent: `Ova trava naraste 25–35 cm i idealna je za senkovite delove bašte, bordure i sadnju ispod drveća. Zahteva minimalno održavanje i otporna je na mraz do -20°C. Sadi se u proleće ili jesen. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '25-35 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 24,
    slug: 'festuca-glauca',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Festuca glauca',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    showPrice: true,
    image: '/images/Festuca glauca- plava trava.jpg',
    seoTitle: 'Festuca glauca – prodaja sadnica, cena od 500 RSD',
    metaDescription: 'Festuca glauca (plava trava) – prodaja sadnica, minijaturna ukrasna trava za kamenjare. Cena od 500 RSD, dostava širom Srbije.',
    description: 'Poznata i kao plava trava, ova minijaturna ukrasna trava plavo-sivih listova unosi moderan akcenat u kamenjare, rubove staza i japanske bašte.',
    richContent: `Festuca glauca naraste svega 20–30 cm i traži sunčano mesto u suvoj, dobro oceditoj zemlji. Otporna je na sušu i mraz do -25°C. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '20-30 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 25,
    slug: 'hemerocallis',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Hemerocallis',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    showPrice: true,
    image: '/images/Hemerocalis sp. (narandžasti i žuti cvet).jpg',
    seoTitle: 'Hemerocallis – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Hemerocallis (dnevni ljiljan) – prodaja sadnica, dugo cveta u jarkim narandžastim i žutim tonovima. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Dnevni ljiljan, kako se Hemerocallis često naziva, jedna je od najzahvalnijih perena — cveta dugo, u jarkim narandžastim i žutim tonovima, i gotovo se sama brine o sebi.',
    richContent: `Cveta od maja do avgusta i naraste 50–80 cm, uspevajući u skoro svakom tipu zemljišta, na suncu ili u polusenci. Otporna je na mraz do -25°C. Sadi se u proleće ili jesen. Dostupna je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: '50-80 cm',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Različiti tipovi zemljišta',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 26,
    slug: 'hosta',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Hosta',
    category: 'perene',
    categories: ['perene'],
    price: 250,
    showPrice: true,
    image: '/images/Hosta mix. perena za senku.jpg',
    images: [
      '/images/Hosta mix. perena za senku.jpg',
      '/images/Hosta mix isto.jpg'
    ],
    seoTitle: 'Hosta – prodaja sadnica, cena od 250 RSD',
    metaDescription: 'Hosta – prodaja sadnica, dekorativna perena za senku, listovi u nijansama zelene i žute. Cena od 250 RSD, dostava širom Srbije.',
    description: 'Retko koja perena tako lepo izgleda u senci ispod drveća — dekorativni listovi u nijansama zelene, žute i plave krase baštu od maja do oktobra.',
    richContent: `Hosta naraste 30–60 cm i gotovo ne zahteva negu, zbog čega je omiljena za senkovite delove bašte. Otporna je na mraz do -30°C. Sadi se u proleće, u bogatu, vlažnu zemlju. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '30-60 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Redovno zalivanje',
      soil: 'Bogata, vlažna zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 27,
    slug: 'iris-perunika',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Iris (Perunika)',
    category: 'perene',
    categories: ['perene'],
    price: 200,
    showPrice: true,
    image: '/images/Iris - perunika (beli i ljubičasti cvet) perena.jpg',
    seoTitle: 'Iris (Perunika) – prodaja sadnica, cena od 200 RSD',
    metaDescription: 'Iris (Perunika) – prodaja sadnica, klasična vrtna lepotica koja cveta u maju i junu. Cena od 200 RSD, dostava širom Srbije.',
    description: 'Klasična vrtna lepotica sa cvetovima u beloj, ljubičastoj, plavoj i žutoj boji — nenametljiva elegancija koja se vraća svakog maja i juna.',
    richContent: `Perunika naraste 40–70 cm i dobro podnosi i sunce i polusenku. Sadi se u kasno leto ili ranu jesen, u dobro oceditnu, neutralnu zemlju. Otporna je na mraz do -25°C i izuzetno dugovečna. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '40-70 cm',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 28,
    slug: 'kniphofia-uvaria',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Kniphofia uvaria',
    category: 'perene',
    categories: ['perene'],
    price: 300,
    showPrice: true,
    image: '/images/Kniphophia uvaria, narandžasti cvet, perena.jpg',
    seoTitle: 'Kniphofia uvaria – prodaja sadnica, cena od 300 RSD',
    metaDescription: 'Kniphofia uvaria (baklja) – prodaja sadnica, egzotična perena upečatljivih narandžastih cvastova. Cena od 300 RSD, dostava širom Srbije.',
    description: 'Poznata i kao baklja, ova egzotična perena sa upečatljivim narandžasto-crvenim cvastovima prava je zvezda svakog vrta i magnet za leptire.',
    richContent: `Kniphofia uvaria cveta od jula do septembra i naraste 60–100 cm. Traži sunčano mesto i dobro oceditnu zemlju. Otporna je na mraz do -15°C. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '60-100 cm',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 29,
    slug: 'ophiopogon-japonicus',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Ophiopogon japonicus',
    category: 'perene',
    categories: ['perene'],
    price: 100,
    showPrice: true,
    image: '/images/Ophiopogon japonicus ukrasna trava.jpg',
    seoTitle: 'Ophiopogon japonicus – prodaja sadnica, cena od 100 RSD',
    metaDescription: 'Ophiopogon japonicus – prodaja sadnica, niska zimzelena trava za senku i bordure. Cena od 100 RSD, dostava širom Srbije.',
    description: 'Niska, gusta zimzelena trava tamnozelenih, sjajnih listova — pouzdan pokrivač tla za senku, bordure i japanske bašte tokom cele godine.',
    richContent: `Ova trava naraste 15–25 cm i gotovo ne zahteva negu. Otporna je na mraz do -15°C. Dostupna je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: '15-25 cm',
      sunlight: 'Polusenka do senka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -15°C'
    }
  },
  {
    id: 30,
    slug: 'physostegia-alba',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Physostegia alba',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    showPrice: true,
    image: '/images/Physostegia alba - perena.jpg',
    images: [
      '/images/Physostegia alba - perena.jpg',
      '/images/Physostegia alba.jpg'
    ],
    seoTitle: 'Physostegia alba – prodaja sadnica, cena od 500 RSD',
    metaDescription: 'Physostegia alba – prodaja sadnica, visoka perena belih klasova, cveta avgust–oktobar. Cena od 500 RSD, dostava širom Srbije.',
    description: 'Poznata i kao poslušna biljka, ova visoka perena elegantnih belih klasova bogato cveta od avgusta do oktobra i brzo formira gusti busen.',
    richContent: `Physostegia alba naraste 60–90 cm i najbolje uspeva u vlažnoj, plodnoj zemlji, na suncu ili u polusenci. Otporna je na mraz do -25°C, idealna za naturalističke bašte i bordure. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '60-90 cm',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Vlažna, plodna zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 31,
    slug: 'sedum-angelina',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Sedum angelina',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    showPrice: true,
    image: '/images/Sedum angelina isto.jpg',
    images: [
      '/images/Sedum angelina isto.jpg',
      '/images/Sedum angelina perena.jpg'
    ],
    seoTitle: 'Sedum angelina – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Sedum angelina – prodaja sadnica, sukulentna perena zlatno-zelenih listova za kamenjare. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Niskorasla sukulentna perena zlatno-zelenih listova koji u jesen prelaze u vatreno narandžastu boju — savršena za kamenjare i zelene krovove.',
    richContent: `Ova sukulentna perena naraste 10–15 cm i izuzetno je otporna na sušu i mraz do -25°C, gotovo bez potrebe za zalivanjem. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '10-15 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 32,
    slug: 'sedum-hybridum',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Sedum hybridum',
    category: 'perene',
    categories: ['perene'],
    price: 150,
    showPrice: true,
    image: '/images/Isto sedum hybridum samo pojedinačna slika.jpg',
    images: [
      '/images/Isto sedum hybridum samo pojedinačna slika.jpg',
      '/images/Sedum hybridum - perena.jpg'
    ],
    seoTitle: 'Sedum hybridum – prodaja sadnica, cena od 150 RSD',
    metaDescription: 'Sedum hybridum – prodaja sadnica, kompaktna sukulentna perena za zelene krovove i kamenjare. Cena od 150 RSD, dostava širom Srbije.',
    description: 'Kompaktna sukulentna perena jarkozelenih mesnatih listova i žutih cvetova u junu — gusto prekriva tlo i savršena je za zelene krovove i kamenjare.',
    richContent: `Naraste svega 10–20 cm, ali se dobro širi i pokriva površinu. Otporna je na sušu, toplotu i mraz do -30°C. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '10-20 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -30°C'
    }
  },
  {
    id: 33,
    slug: 'sedum-rupestre-blue',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Sedum rupestre \'Blue\'',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    showPrice: true,
    image: '/images/sedum rupestre \'blue\' perena.jpg',
    seoTitle: 'Sedum rupestre \'Blue\' – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Sedum rupestre \'Blue\' – prodaja sadnica, plavičasto-siva sukulentna perena za stenovite bašte. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Zimzelena sukulentna perena plavičasto-sivih igličastih listova koja formira kompaktne tepih-jastuče — otporna, niska i skoro bezbrižna za negu.',
    richContent: `Naraste 10–15 cm i idealna je za stenovite bašte, rubnjake i zelene krovove. Otporna je na sušu, sunce i mraz do -25°C. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '10-15 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 34,
    slug: 'sedum-s-watson',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Sedum S. Watson',
    category: 'perene',
    categories: ['perene'],
    price: 150,
    showPrice: true,
    image: '/images/Sedum S. Watson perena.jpg',
    images: [
      '/images/Sedum S. Watson perena.jpg',
      '/images/Sedum S. Watson isto.jpg'
    ],
    seoTitle: 'Sedum S. Watson – prodaja sadnica, cena od 150 RSD',
    metaDescription: 'Sedum S. Watson – prodaja sadnica, dekorativna sukulentna perena za kamenjare i saksije. Cena od 150 RSD, dostava širom Srbije.',
    description: 'Dekorativna sukulentna perena roze-zelenih rozeta koje zadržavaju boju tokom cele godine — savršena za kamenjare, terasaste bašte i saksije.',
    richContent: `Naraste 10–15 cm i izuzetno je otporna na sušu i mraz do -20°C. Dostupna je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: '10-15 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 35,
    slug: 'sedum-spectabile',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Sedum spectabile',
    category: 'perene',
    categories: ['perene'],
    price: 200,
    showPrice: true,
    image: '/images/Sedum spectabile - debela koka.jpg',
    seoTitle: 'Sedum spectabile – prodaja sadnica, cena od 200 RSD',
    metaDescription: 'Sedum spectabile (debela koka) – prodaja sadnica, robusna perena koja cveta avgust–oktobar. Cena od 200 RSD, dostava širom Srbije.',
    description: 'Poznata i kao debela koka, ova robusna perena krupnih mesnatih listova cveta ružičasto od avgusta do oktobra i privlači leptire i pčele.',
    richContent: `Sedum spectabile naraste 30–50 cm i idealna je za suve, sunčane bašte. Otporna je na sušu i mraz do -25°C. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '30-50 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 36,
    slug: 'stachys-lanata',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Stachys lanata',
    category: 'perene',
    categories: ['perene'],
    price: 120,
    showPrice: true,
    image: '/images/zekineusi.jpg',
    images: [
      '/images/zekineusi.jpg',
      '/images/Stachys lanata - zekine uši.jpg'
    ],
    seoTitle: 'Stachys lanata – prodaja sadnica, cena od 120 RSD',
    metaDescription: 'Stachys lanata (zečije uši) – prodaja sadnica, mekani srebrno-sivi listovi za bordure. Cena od 120 RSD, dostava širom Srbije.',
    description: 'Poznata i kao zečije uši, ova perena ima izuzetno mekane, srebrno-sive listove gusto pokrivene belim dlačicama — savršen kontrast tamnijem lišću u borduri.',
    richContent: `Naraste 20–30 cm i traži sunčano, suvo mesto. Otporna je na sušu i mraz do -25°C. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '20-30 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Suva, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },

  // ==================== OSTALO (ID: 37-38) ====================
  {
    id: 37,
    slug: 'maslina',
    relatedBlogSlug: 'maslina-uzgoj-sadnja-prezimljavanje-srbija',
    name: 'Maslina',
    category: 'mediteranske',
    categories: ['mediteranske'],
    price: 15000,
    showPrice: true,
    image: '/images/maslina1.jpeg',
    images: [
      '/images/maslina1.jpeg',
      '/images/maslina2.jpeg',
      '/images/maslina3.jpeg',
      '/images/maslina5.jpeg',
      '/images/novemasline1.jpeg',
      '/images/novemasline2.jpeg',
      '/images/novemasline3.jpeg'
    ],
    seoTitle: 'Maslina – prodaja sadnica, cena od 15.000 RSD',
    metaDescription: 'Maslina (Olea europaea) – prodaja sadnica, mediteransko zimzeleno drvo srebrno-zelenih listova. Cena od 15.000 RSD, dostava širom Srbije.',
    description: 'Mediteransko zimzeleno drvo srebrno-zelenih listova i krivudavog debla koje sa godinama postaje sve lepše — dugovečan simbol mediteranskog stila.',
    richContent: `Olea europaea može živeti stotinama godina. Kod nas se najčešće uzgaja kao dekorativna biljka u teglama ili zaštićenim dvorištima, jer podnosi mraz do -10°C. Traži puno sunca i dobro oceditnu zemlju. Rasadnik Tilija nudi masline uz dostavu širom Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana, peskovita zemlja',
      hardiness: 'Otporna na mraz do -10°C'
    }
  },
  {
    id: 38,
    slug: 'bonsai',
    name: 'Bonsai',
    category: 'mediteranske',
    categories: ['mediteranske'],
    price: 0,
    image: '/images/Bonsai.jpeg',
    seoTitle: 'Bonsai – prodaja, cena na upit',
    metaDescription: 'Bonsai – prodaja pažljivo oblikovanih primeraka različitih vrsta, idealno za terase i enterijer. Dostava širom Srbije, cena na upit.',
    description: 'Umetnost uzgoja minijaturnog drveća — svaki primerak je jedinstven, elegantan i savršen kao poklon ili ukras za enterijer i terasu.',
    richContent: `Rasadnik Tilija nudi pažljivo oblikovane bonsai primerke različitih vrsta. Nega uključuje redovno zalivanje, sezonsko đubrenje i povremeno oblikovanje rezanjem. Idealan je za terase, balkone i enterijer. Cena na upit.`,
    inStock: true,
    details: {
      height: 'Minijaturne forme',
      sunlight: 'Sunce do polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Specijalni supstrat za bonsai',
      hardiness: 'Zavisi od vrste'
    }
  },
  {
    id: 41,
    slug: 'lejlandi',
    name: 'Lejlandi',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 500,
    showPrice: true,
    sizes: [
      { label: '50–60 cm', price: 500 },
      { label: '1–1.2 m', price: 1200 },
    ],
    image: '/images/lejlandinew.jpeg',
    images: [
      '/images/lejlandinew.jpeg',
      '/images/lejlandi.jpeg',
      '/images/lejlandi1.jpeg'
    ],
    seoTitle: 'Lejlandi – prodaja sadnica za živu ogradu, cena od 500 RSD',
    metaDescription: 'Lejlandi – prodaja sadnica, najbrže rastući četinar za živu ogradu, i do 100 cm godišnje. Gust, zimzelen zid za brzu privatnost. Cena od 500 RSD, dostava širom Srbije.',
    description: 'Najbrže rastući četinar za živu ogradu u Srbiji — gust, zimzelen i lak za oblikovanje, idealan kad vam treba privatnost što pre.',
    richContent: `Cupressus × leylandii, hibridni čempres poznat kao lejlandi, naraste i do 60–100 cm godišnje, formirajući kompaktnu zidanu ogradu već posle nekoliko sezona. Odlično zaklanja od pogleda, buke i vetra. Sadi se na razmaku 60–80 cm, u proleće ili jesen, i podnosi mraz do -20°C. Oblikuje se rezanjem jednom godišnje. Rasadnik Tilija nudi ga u svim visinama, uz dostavu i sadnju širom Srbije.

Sadnice su dostupne u više visina — od manjih za ekonomičniju sadnju i praćenje brzog rasta, do krupnijih primeraka za gotovo trenutnu privatnost. Cena zavisi od visine, javite nam se za ponudu. Naručivanje ide jednostavno telefonom ili preko kontakt forme na sajtu, a organizujemo dostavu i sadnju na terenu širom Srbije.`,
    relatedBlogSlug: 'lejlandi-sadnja-i-nega',
    productFaq: [
      { q: 'Koje veličine lejlandija su dostupne?', a: 'Nudimo lejlandi u više visina, od mlađih sadnica do krupnijih primeraka za brz efekat. Cena zavisi od visine — javite nam se za ponudu.' },
      { q: 'Koliko sadnica mi treba za moju ogradu?', a: 'Zavisi od željene gustine — pošaljite nam dužinu ograde i predložićemo tačan broj sadnica i razmak.' },
      { q: 'Da li vršite dostavu i sadnju?', a: 'Da, dostavljamo i, po dogovoru, vršimo sadnju na terenu širom Srbije.' },
    ],
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      growthRate: '60–100 cm godišnje',
      spacing: '60–80 cm',
      sunlight: 'Puno sunce do polusenka',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporan na mraz do -20°C'
    }
  },
  {
    id: 42,
    slug: 'palma',
    name: 'Palma',
    category: 'mediteranske',
    categories: ['mediteranske'],
    price: 0,
    showPrice: false,
    image: '/images/palma.jpeg',
    images: [
      '/images/palma.jpeg',
      '/images/palma1.jpeg'
    ],
    seoTitle: 'Palma – prodaja sadnica, cena na upit',
    metaDescription: 'Palma – prodaja sadnica, egzotična dekorativna biljka za mediteranski stil dvorišta i terase. Dostava širom Srbije, cena na upit.',
    description: 'Egzotična dekorativna biljka koja momentalno unosi mediteranski šmek u dvorište ili terasu, dostupna u više visina i vrsta.',
    richContent: `Rasadnik Tilija nudi otpornije vrste palmi koje mogu da prežive srpske zime uz minimalnu zaštitu, idealne za mediteranski stil uređenja dvorišta, terase i ulazne prostore. Sade se na sunčanom, zaštićenom mestu, u dobro oceditnu zemlju. Cena na upit.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Dobro drenirana, peskovita zemlja',
      hardiness: 'Zavisi od vrste'
    }
  },
  {
    id: 43,
    slug: 'japanski-javor',
    name: 'Japanski javor',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    showPrice: false,
    image: '/images/japanskijavor.jpeg',
    images: [
      '/images/japanskijavor.jpeg'
    ],
    seoTitle: 'Japanski javor – prodaja sadnica, cena na upit',
    metaDescription: 'Japanski javor – prodaja sadnica, elegantno ukrasno drvo fino isečenih, jesenje obojenih listova. Dostava širom Srbije, cena na upit.',
    description: 'Elegantno ukrasno drvo fino isečenih listova u nijansama crvene, bordo, narandžaste i zelene boje — pravo remek-delo koje menja izgled iz sezone u sezonu.',
    richContent: `Acer palmatum sporo raste i dostiže 2–5 metara, idealan je kao soliter ili u kombinaciji sa zimzelenim biljkama. Traži zaštićeno mesto od jakog vetra, polusenku i blago kiselu, bogatu zemlju. Jesen donosi spektakularne crveno-narandžaste tonove. Dostupan je u Rasadniku Tilija, uz dostavu.`,
    inStock: true,
    details: {
      height: '2-5 m',
      sunlight: 'Polusenka',
      watering: 'Redovno zalivanje',
      soil: 'Blago kisela, bogata zemlja',
      hardiness: 'Otporan na mraz do -20°C'
    }
  },
  {
    id: 44,
    slug: 'indijski-jorgovan',
    name: 'Indijski jorgovan',
    category: 'siblje',
    categories: ['siblje'],
    price: 1500,
    showPrice: true,
    image: '/images/bastenskijorgovan.jpeg',
    images: [
      '/images/bastenskijorgovan.jpeg',
      '/images/indijskijorgovan.jpeg'
    ],
    seoTitle: 'Indijski jorgovan – prodaja sadnica, cena od 1.500 RSD',
    metaDescription: 'Indijski jorgovan – prodaja sadnica, mirisni ukrasni žbun koji cveta u aprilu i maju. Cena od 1.500 RSD, dostava širom Srbije.',
    description: 'Raskošan ukrasni žbun čiji mirisni grozdovi cvetova u aprilu i maju ispunjavaju čitavo dvorište bojom i mirisom.',
    richContent: `Naraste do 3–5 metara i može se oblikovati kao žbun ili drvo. Izuzetno je otporan na mraz i dugovečan — može živeti decenijama. Sadi se u jesen ili rano proleće, na osunčanom mestu. Rasadnik Tilija nudi ga uz dostavu širom Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Umereno zalivanje',
      soil: 'Neutralna do blago alkalna zemlja',
      hardiness: 'Veoma otporan na mraz do -25°C'
    }
  },

  {
    id: 45,
    slug: 'japanska-tresnja',
    name: 'Japanska trešnja',
    category: 'liscari',
    categories: ['liscari'],
    price: 3500,
    showPrice: true,
    image: '/images/japanskatresnja.jpeg',
    images: ['/images/japanskatresnja.jpeg'],
    seoTitle: 'Japanska trešnja – prodaja sadnica, cena od 3.500 RSD',
    metaDescription: 'Japanska trešnja – prodaja sadnica, ukrasno drvo bajkovitog prolećnog cvetanja. Cena od 3.500 RSD, dostava širom Srbije.',
    description: 'Ukrasno drvo poznato po bajkovitom, raskošnom cvetanju u proleće — bela ili roze boja cvetova svake godine iznova transformiše dvorište.',
    richContent: `Prunus serrulata cveta pre nego što se listovi razviju, što joj daje poseban, upečatljiv izgled. Naraste do 5–8 metara i idealna je kao soliter. Sadi se u proleće ili jesen, na osunčanom, zaštićenom mestu u plodnu, dobro oceditnu zemlju. Rasadnik Tilija nudi je uz dostavu širom Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },

  {
    id: 39,
    slug: 'iberis',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Iberis',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    showPrice: true,
    image: '/images/iberis.jpg',
    images: ['/images/iberis.jpg'],
    seoTitle: 'Iberis – prodaja sadnica, cena od 400 RSD',
    metaDescription: 'Iberis sempervirens – prodaja sadnica, zimzelena perena gustog belog prolećnog cvetanja. Cena od 400 RSD, dostava širom Srbije.',
    description: 'Zimzelena perena koja u proleće eksplodira gustim belim cvetovima, zbog čega je poznata i kao "snežna perena" — savršena za kamenjare i bordure.',
    richContent: `Iberis sempervirens naraste 15–25 cm i traži sunčano, dobro oceditno mesto, uz gotovo nikakvu negu posle ukorenjivanja. Otporna je na mraz do -25°C. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '15-25 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -25°C'
    }
  },
  {
    id: 46,
    slug: 'crveni-malc',
    name: 'Malč crveni',
    category: 'zemlja-i-malc',
    categories: ['zemlja-i-malc'],
    price: 850,
    showPrice: true,
    sizeLabel: 'Pakovanje:',
    sizes: [{ label: 'Džak od 60 l', price: 850 }],
    image: '/images/mulchred.webp',
    images: ['/images/mulchred.webp'],
    seoTitle: 'Malč crveni – prodaja, džak 60l, cena od 850 RSD',
    metaDescription: 'Malč crveni – prodaja, dekorativni malč od drvne kore koji čuva vlagu i sprečava korov. Cena od 850 RSD po džaku, dostava širom Srbije.',
    description: 'Dekorativni malč od drvne kore u upečatljivoj crvenoj boji — čuva vlagu u zemlji, sprečava rast korova i štiti koren biljaka.',
    richContent: `Crvena boja daje atraktivan kontrast uz zelene biljke tokom cele sezone, a pored dekorativne uloge malč obavlja i praktične funkcije: čuva vlagu (smanjuje potrebu za zalivanjem i do 30%), sprečava korov i štiti koren od letnjih vrućina i zimskih mrazeva. Preporučena debljina sloja je 5–8 cm; jedan džak od 60 litara pokriva 0,75–1,2 m².`,
    inStock: true,
    details: {
      sunlight: 'Za sve pozicije',
      watering: 'Smanjuje potrošnju vode',
      soil: 'Pogodno za sve tipove tla',
      hardiness: 'Dekorativno i funkcionalno'
    }
  },
  {
    id: 47,
    slug: 'malc-borova-kora',
    name: 'Malč borova kora',
    category: 'zemlja-i-malc',
    categories: ['zemlja-i-malc'],
    price: 850,
    showPrice: true,
    sizeLabel: 'Pakovanje:',
    sizes: [{ label: 'Džak od 60 l', price: 850 }],
    image: '/images/malcborovakora.jpg',
    images: ['/images/malcborovakora.jpg'],
    seoTitle: 'Malč borova kora – prodaja, džak 60l, cena od 850 RSD',
    metaDescription: 'Malč borova kora – prodaja, prirodni malč koji blago zakiseljuje zemljište, idealan za četinare i hortenzije. Cena od 850 RSD, dostava širom Srbije.',
    description: 'Prirodni malč koji blago zakiseljuje zemljište — idealan za četinare, ruže, hortenzije i borovnice, biljke koje vole kiselu sredinu.',
    richContent: `Za razliku od dekorativnih malčeva, borova kora se postepeno razgrađuje i obogaćuje zemlju humusom, dok istovremeno čuva vlagu i sprečava korov. Preporučena debljina sloja je 6–8 cm; jedan džak od 60 litara pokriva 0,75–1 m².`,
    inStock: true,
    details: {
      sunlight: 'Za sve pozicije',
      watering: 'Smanjuje potrošnju vode',
      soil: 'Blago zakiseljuje zemlju',
      hardiness: 'Prirodno đubrenje'
    }
  },
  {
    id: 48,
    slug: 'humus',
    name: 'Humus',
    category: 'zemlja-i-malc',
    categories: ['zemlja-i-malc'],
    price: 800,
    showPrice: true,
    sizeLabel: 'Pakovanje:',
    sizes: [{ label: 'Džak od 50 kg', price: 800 }],
    image: '/images/humus.png',
    images: ['/images/humus.png'],
    seoTitle: 'Humus – prodaja, džak 50kg, cena od 800 RSD',
    metaDescription: 'Humus – prodaja kvalitetnog organskog đubriva koje obogaćuje zemljište. Cena od 800 RSD po džaku, dostava širom Srbije.',
    description: 'Kvalitetno organsko đubrivo koje obogaćuje tlo, poboljšava strukturu zemljišta i podstiče zdrav razvoj korena — idealno pri sadnji i prihrani biljaka.',
    richContent: `Nastaje razgradnjom biljnih i životinjskih materija, a dodavanjem u tlo zemlja postaje rastresitija, bolje zadržava vlagu i lakše propušta vazduh do korena. Posebno se preporučuje za sadnju drveća, žbunova, živih ograda i perenih biljaka. Jedan džak od 50 kg dovoljan je za pripremu površine od 3–5 m².`,
    inStock: true,
    details: {
      sunlight: 'Za sve biljke',
      watering: 'Poboljšava zadržavanje vlage',
      soil: 'Obogaćuje i rahli tlo',
      hardiness: 'Prirodno organsko đubrivo'
    }
  },

  {
    id: 40,
    slug: 'gaura',
    relatedBlogSlug: 'perene-za-bastu-srbija',
    name: 'Gaura',
    category: 'perene',
    categories: ['perene'],
    price: 200,
    showPrice: true,
    image: '/images/gaura.jpg',
    images: ['/images/gaura.jpg'],
    seoTitle: 'Gaura – prodaja sadnica, cena od 200 RSD',
    metaDescription: 'Gaura lindheimeri – prodaja sadnica, graciozna perena belo-roze cvetova celo leto. Cena od 200 RSD, dostava širom Srbije.',
    description: 'Graciozna perena čiji nežni belo-roze cvetovi lepršaju na vitkim stabljikama poput leptira tokom celog leta — savršena za naturalističke bašte.',
    richContent: `Gaura lindheimeri naraste 60–120 cm i cveta od juna do oktobra. Izuzetno je otporna na sušu i visoke temperature, traži puno sunca i dobro oceditnu zemlju, uz mraz do -20°C. Dostupna je u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '60-120 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  },
  {
    id: 49,
    slug: 'italijanski-cempres',
    relatedBlogSlug: 'italijanski-cempres-sadnja-nega-mraz',
    name: 'Italijanski čempres',
    category: 'mediteranske',
    categories: ['mediteranske', 'cetinari'],
    price: 8800,
    showPrice: true,
    sizes: [
      { label: '2.5–3 m', price: 8800 },
    ],
    image: '/images/italijanskicempres.jpeg',
    images: ['/images/italijanskicempres.jpeg'],
    seoTitle: 'Italijanski čempres – prodaja sadnica, cena od 8.800 RSD',
    metaDescription: 'Italijanski (toskanski) čempres – prodaja sadnica za mediteranski vrt, uska vertikalna forma. Cena od 8.800 RSD, dostava širom Srbije.',
    description: 'Vitka, uska zimzelena biljka strogo vertikalnog rasta koja unosi mediteranski šmek u svaki vrt — idealna za aleje, ulaze i vertikalne akcente.',
    richContent: `Cupressus sempervirens vekovima se koristi u toskanskim i mediteranskim vrtovima kao akcenat pored ulaza, duž aleja i staza. Voli puno sunca i dobro drenirano, čak i suvo zemljište — ne podnosi stajaću vodu. Otporan je na sušu i vrućinu, a uz zaštićen položaj dobro podnosi i srpske zime. Sadi se u proleće ili jesen, uz umereno zalivanje prve godine. Rasadnik Tilija nudi ga u više visina, uz dostavu i sadnju širom Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporan na mraz do -15°C'
    }
  }
];

export const categories = [
  { id: 'sve', nameKey: 'products.allCategories', name: 'Sve biljke' },
  { id: 'ziva-ograda', nameKey: 'products.zivaOgrada', name: 'Živa ograda' },
  { id: 'cetinari', nameKey: 'products.cetinari', name: 'Četinari' },
  { id: 'liscari', nameKey: 'products.liscari', name: 'Lišćari' },
  { id: 'siblje', nameKey: 'products.siblje', name: 'Šiblje' },
  { id: 'perene', nameKey: 'products.perene', name: 'Perene' },
  { id: 'mediteranske', nameKey: 'products.mediteranske', name: 'Mediteranske biljke' },
  { id: 'zemlja-i-malc', nameKey: 'products.zemljaIMalc', name: 'Zemlja i malč' }
];

// Helper funkcija za pronalaženje proizvoda po ID-u ili slug-u
export const getProductById = (idOrSlug) => {
  const asInt = parseInt(idOrSlug);
  if (!isNaN(asInt)) {
    return products.find(p => p.id === asInt);
  }
  return products.find(p => p.slug === idOrSlug);
};

// Helper funkcija za dobijanje naziva kategorije
export const getCategoryName = (categoryId) => {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.name : categoryId;
};
