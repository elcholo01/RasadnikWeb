// Centralizovani podaci o proizvodima - koriste se na Products i ProductDetails stranicama

export const products = [
  // ==================== ČETINARI (ID: 1-6, 19) ====================
  {
    id: 1,
    slug: 'tuja-smaragd',
    name: 'Tuja Smaragd',
    category: 'cetinari',
    categories: ['cetinari', 'ziva-ograda'],
    price: 550,
    showPrice: true,
    image: '/images/tujavelika.jpeg',
    images: [
      '/images/tujavelika.jpeg',
      '/images/tujakontejnerska.jpeg',
      '/images/tuje.jpeg',
      '/images/tujavelika_stara.jpeg'
    ],
    description: 'Tuja Smaragd je zimzeleni četinar, savršen za žive ograde i dekoraciju dvorišta. Otporna, laka za održavanje i brzo raste.',
    richContent: `Tuja Smaragd (Thuja occidentalis 'Smaragd') je najtraženija sadnica za živu ogradu u Srbiji. Uzak, piramidalan oblik koji ne gubi formu bez rezanja čini je idealnom za graničnu sadnju. Sadi se u jesen (oktobar–novembar) ili rano proleće (mart–april), na rastojanju 60–80 cm za gustu živu ogradu. Naraste do 4–5 metara visine i otporna je na mraz do -25°C, što je savršeno za klimatske uslove Srbije. Rasadnik Tilija, Pločica (blizu Kovina), nudi tuje smaragd svih visina uz dostavu i sadnju na teritoriji cele Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
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
    image: '/images/tisa.jpeg',
    images: [
      '/images/tisa.jpeg',
      '/images/taxus.jpeg',
      '/images/taxusbaccata.jpeg'
    ],
    description: 'Tisa (Taxus) je dugovečan četinar, odličan za formiranje oblika i žive ograde. Sporo raste, ali je izuzetno dekorativna.',
    richContent: `Tisa (Taxus baccata) je jedna od najdugovečnijih biljaka – živi i po nekoliko stotina godina. Odlično podnosi rezanje i oblikovanje, pa je popularna za formovane žive ograde i topijariju. Podnosi senku bolje od skoro svakog drugog četinara. Sadi se u proleće ili jesen, otporna je na mraz do -20°C. Rasadnik Tilija nudi tise svih visina uz mogućnost dostave i sadnje.`,
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
    price: 1500,
    image: '/images/WhatsApp Image 2025-12-30 at 20.53.06.jpeg',
    description: 'Crni bor je lepo zimzeleno drvo sa karakterističnim tamno zelenim iglicama. Otporan i lepo se uklapa u različite pejzaže.',
    richContent: `Crni bor (Pinus nigra) je robusno zimzeleno drvo karakterističnih tamnozelenih dugačkih iglica. Izuzetno je otporan na gradske uslove, zagađenje vazduha, vetar i sušu. Brzo raste – do 40–60 cm godišnje – i naraste do 20 metara. Sadi se u proleće ili ranu jesen na osunčanom mestu. Idealan je za parkove, veća dvorišta i pošumljavanje. Dostupan u Rasadniku Tilija u Pločici uz dostavu širom Srbije.`,
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
    image: '/images/WhatsApp Image 2026-01-03 at 19.53.27.jpeg',
    description: 'Thuja Orientalis je zimzeleni četinar, idealan za žive ograde i ukrašavanje dvorišta. Kompaktan i otporan.',
    richContent: `Thuja Orientalis (Platycladus orientalis) je azijska vrsta tuje sa karakterističnim vertikalnim granama i sočno zelenom bojom. Kompaktnija od tuje smaragd, idealna za manje bašte i terase. Naraste do 3–4 metra i dobro podnosi gradske uslove i zagađenje. Sadi se u proleće ili jesen, otporna je na mraz do -20°C. Dostupna u svim visinama u Rasadniku Tilija sa dostavom i sadnjom.`,
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
    price: 1800,
    image: '/images/WhatsApp Image 2026-01-04 at 19.50.56.jpeg',
    description: 'Plava smrča je prelepo zimzeleno drvo sa karakterističnim plavo-sivim iglicama. Odlična za dekorativne svrhe.',
    richContent: `Plava smrča (Picea pungens 'Glauca') je upečatljivo dekorativno drvo sa srebrnastoplavo obojenim iglicama. Sporo raste i zadržava lepotu bez posebnog rezanja. Naraste do 10–15 metara visine, idealna je kao soliter u dvorištu ili parku. Sadi se u proleće, traži sunčano mesto i blago kiselu zemlju. Veoma otporna na mraz i hladnoću. Dostupna u Rasadniku Tilija uz dostavu.`,
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
    price: 1200,
    image: '/images/juniperushorizontalis.jpeg',
    description: 'Juniperus horizontalis (polegli klek) je savršen pokrivač tla. Nizak i gust rast, idealan za prekrivanje tla, kamenjare i kosine. Zimzelen i dekorativan tokom cele godine, otporan na mraz i sušu, minimalno održavanje.',
    richContent: `Juniperus horizontalis (polegli klek) je niska zimzelena biljka koja se širi horizontalno i pokriva tlo poput tepiha. Visina iznosi svega 20–40 cm, ali se širi do 1,5–2 metra. Idealna je za kosine, kamenjare i sprečavanje erozije tla. Veoma otporna na sušu, mraz i siromašna zemljišta – gotovo bez potrebe za negom. Dostupna u Rasadniku Tilija u Pločici, sa dostavom širom Srbije.`,
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
    image: '/images/Bor na štapu cetinar.jpg',
    images: [
      '/images/Bor na štapu cetinar.jpg',
      '/images/bornastapu.jpeg'
    ],
    description: 'Bor na štapu je dekorativni četinar formiran na jednom stablu, idealan za male vrtove i kao akcenat u dvorištu. Elegantan i lak za održavanje.',
    richContent: `Bor na štapu je posebno oblikovan bor koji raste na jednom ravnom stablu sa okruglom krunom na vrhu – elegantna i jedinstvena dekoracija za svako dvorište ili terasu. Savršen je kao akcenat u bašti, uz ulaz ili kao element parkovske arhitekture. Otporan je na mraz i ne zahteva posebnu negu. Dostupan u Rasadniku Tilija uz dostavu i sadnju.`,
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
    description: 'Katalpa je ukrasno drvo sa velikim listovima i prelepim belim cvetovima. Pravi hlad i daje posebnu lepotu svakom dvorištu.',
    richContent: `Katalpa (Catalpa bignonioides) je impresivno ukrasno drvo sa ogromnim srceolikim listovima i bujnim belim cvetovima koji mirišu u junu. Brzorastuće drvo – do 50 cm godišnje – koje naraste do 15 metara i pruža sjajan hlad. Postoji i katalpa na štapu (forma pendula) kao prelepa dekoracija za manja dvorišta. Sadi se u proleće na osunčanom mestu u plodnu zemlju. Rasadnik Tilija nudi katalpu svih veličina uz dostavu i sadnju.`,
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
    price: 2500,
    image: '/images/WhatsApp Image 2026-01-03 at 19.52.34.jpeg',
    description: 'Magnolija Grandiflora je prelepo zimzeleno drvo sa velikim belim cvetovima i lepim mirisom. Prava ukrasnost svakog dvorišta.',
    richContent: `Magnolija Grandiflora je jedina zimzelena magnolija – zadržava mirisne, krupne bele cvetove i atraktivne sjajne listove tokom cele godine. Naraste do 10–15 metara i pravi je raritet u srpskim baštama. Sadi se u proleće na zaštićenom, osunčanom mestu. Traži blago kiselu, bogatu zemlju i redovno zalivanje dok se ne ukoreni. Rasadnik Tilija nudi magnoliju grandifloru uz dostavu i sadnju na celoj teritoriji Srbije.`,
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
    price: 360,
    showPrice: true,
    image: '/images/lovorvisnja.jpeg',
    images: [
      '/images/lovorvisnja.jpeg',
      '/images/lovor1.jpeg',
      '/images/lovormarakana.PNG',
      '/images/lovor3.jpeg',
      '/images/lovor4.jpeg',
      '/images/lovormali.jpeg',
      '/images/lovorrazgranati.jpeg',
      '/images/lovorvisok.jpeg'
    ],
    description: 'Lovor višnja je zimzeleni žbun, idealan za guste, elegantne žive ograde. Otporna na mraz i gradske uslove.',
    richContent: `Lovor višnja (Prunus laurocerasus) je najpopularnija biljka za guste, zimzelene žive ograde u Srbiji. Brzo raste – 30–50 cm godišnje – i lako se oblikuje rezanjem dva puta godišnje. Sadi se na rastojanju 50–80 cm za gustu ogradu, u proleće ili jesen. Otporna je na mraz do -20°C, gradske uslove, zagađenje i senku. Lovor višnja je odlična alternativa tuji kada se želi širi i gušći žbun sa sjajnim listovima. Rasadnik Tilija nudi lovor višnju svih visina – od 30 cm do 2 metra – uz dostavu i sadnju.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
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
    image: '/images/fotinijanaslovna.jpeg',
    images: [
      '/images/fotinijanaslovna.jpeg',
      '/images/WhatsApp Image 2025-12-30 at 14.15.33.jpeg',
      '/images/fotinijanastapu.jpeg',
      '/images/fotinijanastapu2.jpeg'
    ],
    description: 'Fotinija Red Robin je zimzeleni žbun sa atraktivnim crvenim mladim izbojcima. Idealna za dekoraciju i formiranje žive ograde.',
    richContent: `Fotinija Red Robin (Photinia × fraseri 'Red Robin') prepoznatljiva je po vatreno crvenim mladim listovima koji se pojavljuju u proleće i jesen, dok stariji listovi ostaju sjajno tamnozeleni. Zimzelena je i idealna za živu ogradu visine 1–2 metra. Brzo raste i lako se oblikuje, otporna je na mraz do -15°C. Sadi se u proleće ili jesen. Rasadnik Tilija nudi fotiniju Red Robin uz dostavu i sadnju na celoj teritoriji Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
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
    price: 1000,
    image: '/images/Pennisetum1.jpeg',
    images: [
      '/images/Pennisetum1.jpeg',
      '/images/Pennisetum2.jpeg'
    ],
    description: 'Pennisetum alopecuroides je dekorativna trajnica sa prelepim cvastovima. Idealna za pejzažne dizajne i ukrašavanje dvorišta.',
    richContent: `Pennisetum alopecuroides (lisičji rep) je dekorativna ukrasna trava sa karakterističnim dlakavim, lisičjim cvastovima koji se pojavljuju od avgusta do oktobra. Formira guste zelene busene visine 60–90 cm. Odlična za moderne pejzažne dizajne, bordure i gradske bašte. Otporna na sušu i mraz, minimalno održavanje. Dostupna u Rasadniku Tilija sa dostavom.`,
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
    name: 'Bambus',
    category: 'liscari',
    categories: ['liscari'],
    price: 3500,
    showPrice: true,
    image: '/images/bambus.jpeg',
    description: 'Bambus je brzorastuća trava koja stvara prirodnu živu ogradu i daje egzotični pejzaž. Idealna za modernije dizajne.',
    richContent: `Bambus je najbrže rastuća biljka na svetu i idealna za formiranje privatne, prirodne žive ograde. Za dvorišta se preporučuju non-invazivne klastermske vrste (Fargesia) koje ne šire korenjem. Naraste do 3–5 metara i formira gustu zelenu zavesu. Zimi zadržava listove, ali može izgubiti deo lišća na jakim mrazevima. Rasadnik Tilija nudi bambus uz dostavu i sadnju.`,
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
    name: 'Hortenzija',
    category: 'siblje',
    categories: ['siblje'],
    price: 1300,
    image: '/images/hortenzija.jpeg',
    images: [
      '/images/hortenzija.jpeg',
      '/images/WhatsApp Image 2026-01-04 at 19.51.44.jpeg'
    ],
    description: 'Hortenzija je prelep cvetni žbun sa velikim kuglastim cvetovima u različitim bojama. Idealna za ukrašavanje bašta i dvorišta.',
    richContent: `Hortenzija (Hydrangea) je jedna od najvoljenijih ukrasnih biljaka – njeni krupni kuglasti cvetovi u beloj, ružičastoj, plavoj i ljubičastoj boji ukrašavaju bašte od juna do oktobra. Boja cveta zavisi od kiselosti zemlje: kisela zemlja daje plave, alkalna ružičaste cvetove. Sadi se u proleće na polusenkovitom mestu u bogatu, vlažnu zemlju. Otporna je na mraz do -15°C. Rasadnik Tilija nudi hortenzije uz dostavu i sadnju na celoj teritoriji Srbije.`,
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
    image: '/images/puzavice1.jpeg',
    images: [
      '/images/puzavice1.jpeg',
      '/images/puzavice2.jpeg'
    ],
    description: 'Bršljan (Hedera helix) je zimzelena puzavica, idealna za prekrivanje ograda i zidova. Dekorativna cele godine, brz i gust rast, otporna i laka za održavanje. Odlično podnosi senku i polusenku.',
    richContent: `Bršljan (Hedera helix) je najpopularnija puzavica za prekrivanje zidova, ograda i tla u senkovitim mestima. Zimzelen je i dekorativan tokom cele godine. Brzo se širi i ne zahteva posebnu negu – idealan za teško pristupačne površine. Odlično podnosi senku, zagađenje i različite vrste tla. Dostupan u Rasadniku Tilija uz dostavu.`,
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
    price: 900,
    image: '/images/lonicerantida1.jpeg',
    images: [
      '/images/lonicerantida1.jpeg',
      '/images/lonicerantida2.jpeg'
    ],
    description: 'Lonicera nitida je gusta i moderna zelena ograda. Savršen izbor za niske žive ograde i oblikovanje prostora. Gusta i kompaktna forma, brz rast i lako održavanje, odlično podnosi orezivanje. Poluzimzelena i dekorativna tokom cele godine.',
    richContent: `Lonicera nitida je kompaktna poluzimzelena biljka sa sitnim sjajnim listovima – savršena za niske formirane žive ograde do 1 metra. Lako se oblikuje i odlično podnosi česta rezanja. Brzo raste i popunjava praznine, idealna za formalnije vrtne stilove. Podnosi sun i polusenku, otporna je na mraz do -15°C. Dostupna u Rasadniku Tilija uz dostavu i sadnju.`,
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
    price: 700,
    image: '/images/heuchera1.jpeg',
    images: [
      '/images/heuchera1.jpeg',
      '/images/heuchera2.jpeg',
      '/images/heuchera3.jpg'
    ],
    description: 'Heuchera (Koralna zvona) donosi boju i eleganciju tokom cele godine. Idealan izbor za dekorativne bašte. Dekorativni listovi u raznim bojama, niska i kompaktna biljka, otporna i laka za održavanje.',
    richContent: `Heuchera (Koralna zvona) je perena koja se uzgaja pre svega zbog atraktivnih listova u nijansama ljubičaste, srebrne, narandžaste i zelene. Sjajna dekoracija u polusenkovitim delovima bašte tokom cele vegetacije. Niska je – 20–40 cm – i idealna za bordure, rubove staza i kamenjare. Otporna je na mraz do -20°C i ne zahteva posebnu negu. Dostupna u Rasadniku Tilija.`,
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
    price: 1500,
    image: '/images/hibiskus.jpeg',
    description: 'Hibiskus je egzotična lepota za svaki prostor. Savršen izbor za dvorišta, terase i dekorativne bašte. Krupni i atraktivni cvetovi, dugo i bogato cvetanje, brz rast i laka nega. Pogodan za sadnju u bašti i u saksijama.',
    richContent: `Hibiskus (Hibiscus syriacus) je otporan listopadni žbun sa krupnim egzotičnim cvetovima od jula do oktobra. Cveta obilno i dugo čak i bez posebne nege. Naraste do 2–3 metra i može se oblikovati u drvo. Sadi se u proleće na osunčanom, zaštićenom mestu. Otporan na mraz do -10°C. Rasadnik Tilija nudi hibiskus uz dostavu i sadnju.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
      sunlight: 'Puno sunce',
      watering: 'Redovno zalivanje',
      soil: 'Plodna, dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -10°C'
    }
  },
  {
    id: 18,
    slug: 'spirea',
    name: 'Spirea',
    category: 'siblje',
    categories: ['siblje'],
    price: 1000,
    image: '/images/Spirea japonica \'Little Princes\' - ukrasno šiblje.jpg',
    images: [
      '/images/Spirea japonica \'Little Princes\' - ukrasno šiblje.jpg',
      '/images/spirea.jpeg',
      '/images/Spirea japonica.jpg'
    ],
    description: 'Spirea nudi bogato cvetanje i laku negu. Idealan izbor za dekoraciju dvorišta. Obilno i dekorativno cvetanje, brz rast i gusta forma, veoma laka za održavanje. Otporna i dugovečna biljka.',
    richContent: `Spirea (Spiraea japonica) je dekorativni žbun prepoznatljiv po bujnom cvetanju u beloj, roze ili ljubičastoj boji. Cveta u proleće i leto, a neke vrste ponovo u jesen. Brzo raste, gust je i lako se orezuje. Otporna je na mraz do -25°C i gotovo ne zahteva negu. Idealna za bordure, živice i masovne sadnje. Dostupna u Rasadniku Tilija uz dostavu.`,
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
    price: 1000,
    image: '/images/Božur (Paeonia) 1 siblje.jpg',
    images: [
      '/images/Božur (Paeonia) 1 siblje.jpg',
      '/images/Božur (Paeonia) 2 siblje.jpg'
    ],
    description: 'Božur (Paeonia) je raskošna biljka sa krupnim, mirisnim cvetovima. Dugovečna i otporna, idealna za cvetne leje i dekoraciju dvorišta. Cveta u proleće u ružičastim, belim i crvenim nijansama.',
    richContent: `Božur (Paeonia) je jedna od najdražih vrtnih biljaka sa krupnim, mirisnim cvetovima koji cvetaju u maju. Izuzetno dugovečan – može živeti i 50 godina na istom mestu bez presađivanja. Sadi se u jesen na osunčanom mestu u plodnu, dobro oceditu zemlju. Otporan je na mraz do -20°C i ne zahteva posebnu negu. Rasadnik Tilija nudi božure uz dostavu.`,
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
    name: 'Ajuga reptans',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/Ajuga reptans perena.jpg',
    description: 'Ajuga reptans je niska pokrovna perena sa plavim cvetićima. Idealna za pokrivanje tla, kamenjare i rubove staza. Brzo se širi i ne zahteva posebnu negu.',
    richContent: `Ajuga reptans je niska pokrovna perena visine 10–15 cm sa prelepim plavim cvastovima u aprilu i maju. Brzo se širi i formira gusti tepih koji suzbija korov. Idealna je za polusenkovita mesta, rubove staza i ispod drveća. Otporna je na mraz do -25°C i gotovo bez potrebe za negom. Dostupna u Rasadniku Tilija uz dostavu.`,
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
    name: 'Astilba',
    category: 'perene',
    categories: ['perene'],
    price: 600,
    image: '/images/Astilba isto.jpg',
    images: [
      '/images/Astilba isto.jpg',
      '/images/Astilba sp. perena.jpg'
    ],
    description: 'Astilba je elegantna perena sa pernatim cvastovima u roze, crvenim i belim tonovima. Odlična za senkovite delove bašte i vlažna staništa.',
    richContent: `Astilba je jedna od retkih perena koja cveta u senki – njeni pernati cvastovi u beloj, roze i crvenoj boji krase baštu od juna do avgusta. Naraste 40–60 cm i idealna je za vlažna, senkovita mesta, rubove potoka i jezera. Otporna je na mraz do -25°C. Sadi se u proleće u bogatu, vlažnu zemlju. Dostupna u Rasadniku Tilija uz dostavu.`,
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
    name: 'Carex morrowi \'Ice Dance\'',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/Carex morrowi \'Ice Dance\' -perena.jpg',
    description: 'Carex morrowi \'Ice Dance\' je ukrasna trava sa zelenim listovima obrubljenim belom prugom. Idealna za bordure, kamenjare i sadnju ispod drveća.',
    richContent: `Carex morrowi 'Ice Dance' je elegantna zimzelena ukrasna trava visine 25–35 cm sa karakterističnim zelenim listovima obrubljenim belom prugom. Idealna je za senkovite delove bašte, bordure i sadnju ispod drveća. Minimalno održavanje, otporna je na mraz do -20°C. Sadi se u proleće ili jesen. Dostupna u Rasadniku Tilija.`,
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
    name: 'Festuca glauca',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/Festuca glauca- plava trava.jpg',
    description: 'Festuca glauca (plava trava) je kompaktna ukrasna trava sa atraktivnim plavo-sivim listovima. Savršena za kamenjare, rubove i moderne bašte.',
    richContent: `Festuca glauca (plava trava) je minijaturna ukrasna trava visine 20–30 cm sa upečatljivim plavo-sivim listovima. Savršena je za rock-gardens, japanske bašte, rubove staza i moderne pejzažne aranžmane. Traži sunčano mesto i suvu, dobro oceditnu zemlju. Otporna je na sušu i mraz do -25°C. Dostupna u Rasadniku Tilija.`,
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
    name: 'Hemerocallis',
    category: 'perene',
    categories: ['perene'],
    price: 600,
    image: '/images/Hemerocalis sp. (narandžasti i žuti cvet).jpg',
    description: 'Hemerocallis (Dnevni ljiljan) je zahvalna perena sa prelepim narandžastim i žutim cvetovima. Cveta dugo, laka za održavanje i otporna na razne uslove.',
    richContent: `Hemerocallis (Dnevni ljiljan) je jedna od najotpornijih i najzahvalnijih perena – cveta od maja do avgusta u jarkim narandžastim i žutim bojama. Naraste 50–80 cm i raste u skoro svakom tipu zemljišta, i na suncu i u polusenki. Otporna je na mraz do -25°C i gotovo bez potrebe za negom. Sadi se u proleće ili jesen. Dostupna u Rasadniku Tilija uz dostavu.`,
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
    name: 'Hosta',
    category: 'perene',
    categories: ['perene'],
    price: 600,
    image: '/images/Hosta mix. perena za senku.jpg',
    images: [
      '/images/Hosta mix. perena za senku.jpg',
      '/images/Hosta mix isto.jpg'
    ],
    description: 'Hosta je kraljica senke sa dekorativnim listovima u raznim nijansama zelene. Idealna za senkovite delove bašte, ispod drveća i uz vodene površine.',
    richContent: `Hosta je "kraljica senke" – nema druge perene koja tako lepo izgleda na tamnim mestima ispod drveća. Dekorativni listovi u nijansama zelene, žute i plave, često šareni, dekorišu baštu od maja do oktobra. Naraste 30–60 cm i gotovo ne zahteva negu. Otporna je na mraz do -30°C. Sadi se u proleće u bogatu, vlažnu zemlju. Dostupna u Rasadniku Tilija.`,
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
    name: 'Iris (Perunika)',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/Iris - perunika (beli i ljubičasti cvet) perena.jpg',
    description: 'Iris (Perunika) je elegantna perena sa prelepim belim i ljubičastim cvetovima. Nenametljiva lepota za svaku baštu, cveta u proleće.',
    richContent: `Iris (Perunika) je klasična vrtna perena sa prelepim cvetovima u beloj, ljubičastoj, plavoj i žutoj boji koji cvetaju u maju i junu. Naraste 40–70 cm i idealna je za sunčane do polusenkovite pozicije. Sadi se u kasno leto ili ranu jesen, u dobro oceditnu, neutralnu zemlju. Otporna je na mraz do -25°C i izuzetno dugovečna. Dostupna u Rasadniku Tilija.`,
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
    name: 'Kniphofia uvaria',
    category: 'perene',
    categories: ['perene'],
    price: 700,
    image: '/images/Kniphophia uvaria, narandžasti cvet, perena.jpg',
    description: 'Kniphofia uvaria (Baklja) je egzotična perena sa upečatljivim narandžasto-crvenim cvastovima. Privlači poglede i leptire, idealna kao akcenat u bašti.',
    richContent: `Kniphofia uvaria (Baklja) je impresivna egzotična perena sa upečatljivim narandžasto-crvenim svećnjacima koji cvetaju od jula do septembra. Naraste 60–100 cm i prava je zvezda svakog vrta. Traži sunčano mesto i dobro oceditnu zemlju. Otporna je na mraz do -15°C i privlači pčele i leptire. Dostupna u Rasadniku Tilija.`,
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
    name: 'Ophiopogon japonicus',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/Ophiopogon japonicus ukrasna trava.jpg',
    description: 'Ophiopogon japonicus je zimzelena ukrasna trava, idealna za bordure i kao pokrivač tla. Niska i gusta, dekorativna tokom cele godine.',
    richContent: `Ophiopogon japonicus je zimzelena trava visine 15–25 cm sa tamnozelenim sjajnim listovima. Odlična je za pokrivanje tla u senki, bordure i japanske bašte. Ne zahteva gotovo nikakvu negu i zadržava dekorativnost tokom cele godine. Otporna je na mraz do -15°C. Dostupna u Rasadniku Tilija uz dostavu.`,
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
    name: 'Physostegia alba',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/Physostegia alba - perena.jpg',
    images: [
      '/images/Physostegia alba - perena.jpg',
      '/images/Physostegia alba.jpg'
    ],
    description: 'Physostegia alba je perena sa elegantnim belim cvastovima. Bogato cveta tokom leta, laka za održavanje.',
    richContent: `Physostegia alba (Poslušna biljka) je visoka perena (60–90 cm) sa elegantnim belim klasovima koji cvetaju od avgusta do oktobra. Brzo se širi i formira gusti busen, idealna za naturalističke bašte i bordure. Traži vlažnu, plodnu zemlju i sunce do polusenku. Otporna je na mraz do -25°C. Dostupna u Rasadniku Tilija.`,
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
    name: 'Sedum angelina',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/Sedum angelina isto.jpg',
    images: [
      '/images/Sedum angelina isto.jpg',
      '/images/Sedum angelina perena.jpg'
    ],
    description: 'Sedum angelina je sukulentna perena sa zlatno-zelenim listovima koji u jesen postaju narandžasti. Savršena za kamenjare i kao pokrivač tla.',
    richContent: `Sedum angelina je niskorasta sukulentna perena visine 10–15 cm sa zlatno-zelenim listovima koji u jesen prelaze u vatreno narandžastu boju. Savršena je za kamenjare, zelene krovove i suve, sunčane pozicije. Izuzetno otporna na sušu i mraz do -25°C – gotovo bez potrebe za zalivanjem. Dostupna u Rasadniku Tilija.`,
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
    name: 'Sedum hybridum',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/Isto sedum hybridum samo pojedinačna slika.jpg',
    images: [
      '/images/Isto sedum hybridum samo pojedinačna slika.jpg',
      '/images/Sedum hybridum - perena.jpg'
    ],
    description: 'Sedum hybridum je gusta pokrovna perena sa jarko zelenim mesnatim listovima. Idealna za kamenjare, zelene krovove i prekrivanje tla.',
    richContent: `Sedum hybridum je kompaktna sukulentna perena sa jarkozelenim mesnatim listovima i žutim cvetovima u junu. Visine je samo 10–20 cm ali se širi i dobro pokriva tlo. Idealna za zelene krovove, kamenjare i suve, peskovite površine. Otporna je na sušu, toplotu i mraz do -30°C. Dostupna u Rasadniku Tilija.`,
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
    name: 'Sedum rupestre \'Blue\'',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/sedum rupestre \'blue\' perena.jpg',
    description: 'Sedum rupestre \'Blue\' je sukulentna perena sa plavo-sivim iglicama. Niska i otporna, savršena za kamenjare i suve bašte.',
    richContent: `Sedum rupestre 'Blue' je zimzelena sukulentna perena sa plavičasto-sivim igličastim listovima. Visine je 10–15 cm, širi se i formira kompaktne tepih-jastuče. Idealna za stenovite bašte, rubnjake i zelene krovove. Otporna je na sušu, sunce i mraz do -25°C. Dostupna u Rasadniku Tilija.`,
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
    name: 'Sedum S. Watson',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/Sedum S. Watson perena.jpg',
    images: [
      '/images/Sedum S. Watson perena.jpg',
      '/images/Sedum S. Watson isto.jpg'
    ],
    description: 'Sedum S. Watson je dekorativna sukulentna perena sa roze-zelenim rozetama. Atraktivna boja tokom cele godine, idealna za kamenjare i saksije.',
    richContent: `Sedum S. Watson je dekorativna sukulentna perena sa atraktivnim roze-zelenim rozetama koje zadržavaju boju tokom cele godine. Niska je – 10–15 cm – i savršena za kamenjare, terasaste bašte i saksije. Izuzetno otporna na sušu i mraz do -20°C. Dostupna u Rasadniku Tilija uz dostavu.`,
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
    name: 'Sedum spectabile',
    category: 'perene',
    categories: ['perene'],
    price: 500,
    image: '/images/Sedum spectabile - debela koka.jpg',
    description: 'Sedum spectabile (Debela koka) je robusna perena sa krupnim mesnatim listovima i ružičastim cvastovima. Privlači leptire i pčele, cveta u kasno leto.',
    richContent: `Sedum spectabile (Debela koka) je visoka sukulentna perena (30–50 cm) sa krupnim sivkastozelenim listovima i ružičastim cvastovima koji cvetaju od avgusta do oktobra. Privlači leptire, pčele i druge korisne insekte. Otporna je na sušu i mraz do -25°C, idealna za suve sunčane bašte. Dostupna u Rasadniku Tilija.`,
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
    name: 'Stachys lanata',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/zekineusi.jpg',
    images: [
      '/images/zekineusi.jpg',
      '/images/Stachys lanata - zekine uši.jpg'
    ],
    description: 'Stachys lanata (Zečije uši) je perena sa mekanim, srebrno-sivim listovima nalik zečijim ušima. Odlična za kamenjare i kao kontrast tamnijem lišću.',
    richContent: `Stachys lanata (Zečije uši) je prepoznatljiva perena sa izuzetno mekanim, srebrno-sivim listovima gusto pokrivenim belim dlačicama. Visine je 20–30 cm i odlična je kao kontrast tamnijem lišću u borduri ili kamenjaru. Otporna je na sušu i mraz do -25°C. Traži sunčano, suvo mesto. Dostupna u Rasadniku Tilija.`,
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
    name: 'Maslina',
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/maslina1.jpeg',
    images: [
      '/images/maslina1.jpeg',
      '/images/maslina2.jpeg',
      '/images/maslina3.jpeg',
      '/images/maslina5.jpeg',
      '/images/novemasline1.jpeg',
      '/images/novemasline2.jpeg',
      '/images/novemasline3.jpeg',
      '/images/novemasline4.jpeg'
    ],
    description: 'Maslina (Olea europaea) je zimzeleno mediteransko drvo sa srebrno-zelenim listovima. Dugovečna i dekorativna, idealna za dvorišta, terase i mediteranski stil uređenja.',
    richContent: `Maslina (Olea europaea) je mediteransko zimzeleno drvo sa karakterističnim srebrnasto-zelenim listovima i krivudavim starim deblom. Može živeti stotinama godina i postaje sve lepša sa godinama. Kod nas se uzgaja uglavnom kao dekorativna biljka u teglama ili zaštićenim dvorištima. Podnosi mraz do -10°C, traži puno sunca i dobro oceditnu zemlju. Rasadnik Tilija nudi masline uz dostavu – cena na upit.`,
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
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    image: '/images/Bonsai.jpeg',
    description: 'Bonsai je umetnost uzgoja minijaturnog drveća. Elegantan i jedinstven, savršen poklon i ukras za svaki enterijer ili terasu. Zahteva pažljivu negu i oblikovanje.',
    richContent: `Bonsai je umetnost uzgoja minijaturnog drveća – svaki primerak je jedinstven i može biti poklonjen kao posebna prigodna darija. Rasadnik Tilija nudi pažljivo oblikovane bonsai primerke različitih vrsta. Nega uključuje redovno zalivanje, sezonsku đubriju i povremeno oblikovanje rezanjem. Idealan je za terase, balkone i enterijer. Cena na upit.`,
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
    price: 0,
    showPrice: false,
    image: '/images/lejlandi.jpeg',
    images: [
      '/images/lejlandi.jpeg',
      '/images/lejlandi1.jpeg'
    ],
    description: 'Lejlandi je najbrže rastući četinar za živu ogradu – raste i do 1 metar godišnje. Gust, zimzelen i lak za oblikovanje, idealan za brzu privatnost.',
    richContent: `Lejlandi (Cupressus × leylandii) je hibridni četinar poznat kao najbrže rastuća biljka za živu ogradu – naraste i do 60–100 cm godišnje. Gust je i zimzelen, formira kompaktnu zidanu ogradu već posle nekoliko sezona. Idealan je za brzo zaklanjanje od pogleda, buke i vetra. Sadi se na rastojanju 60–80 cm u proleće ili jesen. Otporan je na mraz do -20°C i lako se oblikuje rezanjem jednom godišnje. Rasadnik Tilija nudi lejlandi sve visine uz dostavu i sadnju širom Srbije.`,
    inStock: true,
    details: {
      height: 'Dostupne sve visine',
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
    category: 'liscari',
    categories: ['liscari'],
    price: 0,
    showPrice: false,
    image: '/images/palma.jpeg',
    images: [
      '/images/palma.jpeg',
      '/images/palma1.jpeg'
    ],
    description: 'Palma je egzotična dekorativna biljka koja daje mediteranski šmek svakom dvorištu ili terasi. Dostupna u različitim visinama i vrstama.',
    richContent: `Palma je najupečatljivija egzotična biljka za dvorišta i terase u Srbiji. Rasadnik Tilija nudi otpornije vrste palmi koje mogu da prežive srpske zime uz minimalnu zaštitu. Idealne su za mediteranski stil uređenja dvorišta, terase i ulazne prostore. Sade se na sunčanom, zaštićenom mestu u dobro oceditnu zemlju. Dostupne u različitim visinama – cena na upit.`,
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
    description: 'Japanski javor je elegantno ukrasno drvo sa prelepim crvenim ili ljubičastim listovima koji menjaju boju tokom sezone. Pravo remek-delo svake bašte.',
    richContent: `Japanski javor (Acer palmatum) je jedno od najatraktivnijih ukrasnih drveća – njegovi fino isečeni listovi u nijansama crvene, bordo, narandžaste i zelene boje ukrašavaju dvorište od proleća do jeseni. Sporo raste i naraste do 2–5 metara, idealan je kao soliter ili u kombinaciji sa zimzelenim biljkama. Traži zaštićeno mesto od jakog vetra, polusenku i blago kiselu, bogatu zemlju. Jesen donosi spektakularne crveno-narandžaste tonove. Dostupan u Rasadniku Tilija uz dostavu.`,
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
    id: 39,
    slug: 'iberis',
    name: 'Iberis',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/iberis.jpg',
    images: ['/images/iberis.jpg'],
    description: 'Iberis je zimzelena perena koja u proleće eksplodira gustim belim cvetovima. Savršena za kamenjare, bordure i kao pokrivač tla.',
    richContent: `Iberis sempervirens je niskorasta zimzelena perena visine 15–25 cm koja u aprilu i maju biva potpuno prekrivena gustim belim cvetovima, zbog čega se naziva i "snežna perena". Idealna je za ivičnjake, kamenjare, suve zidove i kao kontrast tamnijem lišću. Traži sunčano, dobro oceditno mesto i gotovo nikakvu negu posle ukorenjivanja. Otporna je na mraz do -25°C. Dostupna u Rasadniku Tilija.`,
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
    id: 40,
    slug: 'gaura',
    name: 'Gaura',
    category: 'perene',
    categories: ['perene'],
    price: 400,
    image: '/images/gaura.jpg',
    images: ['/images/gaura.jpg'],
    description: 'Gaura je elegantna perena sa nežnim belim i roze cvetovima koji lepršaju na vitkim stabljikama tokom celog leta. Savršena za naturalističke bašte.',
    richContent: `Gaura lindheimeri je graciozna perena visine 60–120 cm sa dugačkim, vitkim stabljikama koje nose nežne belo-roze cvetove od juna do oktobra. Cvetovi podsećaju na leptire u letu – stoga se često naziva i "biljka leptir". Izuzetno je otporna na sušu i visoke temperature, traži puno sunca i dobro oceditnu zemlju. Gotovo ne zahteva negu i privlači pčele i leptire. Otporna na mraz do -20°C. Dostupna u Rasadniku Tilija.`,
    inStock: true,
    details: {
      height: '60-120 cm',
      sunlight: 'Puno sunce',
      watering: 'Malo zalivanje',
      soil: 'Dobro drenirana zemlja',
      hardiness: 'Otporna na mraz do -20°C'
    }
  }
];

export const categories = [
  { id: 'sve', nameKey: 'products.allCategories', name: 'Sve biljke' },
  { id: 'ziva-ograda', nameKey: 'products.zivaOgrada', name: 'Živa ograda' },
  { id: 'cetinari', nameKey: 'products.cetinari', name: 'Četinari' },
  { id: 'liscari', nameKey: 'products.liscari', name: 'Lišćari' },
  { id: 'siblje', nameKey: 'products.siblje', name: 'Šiblje' },
  { id: 'perene', nameKey: 'products.perene', name: 'Perene' }
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
