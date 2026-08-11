// Uvodni tekst i SEO podaci za svaku kategorijsku stranicu (/sadnice/[kategorija]).
// Svrha: prava, indeksibilna stranica po kategoriji (ne samo filter na /products),
// sa dovoljno sopstvenog sadržaja da bude relevantna za "X prodaja" pretrage.

const categoryContent = {
  'ziva-ograda': {
    seoTitle: 'Sadnice za živu ogradu – prodaja, cene i poređenje vrsta | Rasadnik Tilija',
    metaDescription: 'Prodaja sadnica za živu ogradu – Tuja Smaragd, Lejlandi, Lovor višnja, Fotinija. Poređenje brzine rasta, gustine i cena. Dostava širom Srbije.',
    intro: `<p>Živa ograda je najčešći razlog zbog kojeg nas kupci zovu — i najčešće prvo pitanje je "koju biljku da izaberem". Odgovor zavisi od toga koliko brzo vam treba gustina, koliko prostora imate i da li tražite klasičan ili moderniji izgled.</p>

<h2>Koja biljka za koju ogradu</h2>
<p><strong>Ako vam treba brzina</strong> — Lejlandi raste i do 100 cm godišnje i formira gust zid za samo 2-3 godine, brže od bilo koje druge ogradne biljke koju gajimo. Cena kreće od 500 RSD.</p>
<p><strong>Ako tražite klasičan, uredan izgled bez čestog orezivanja</strong> — Tuja Smaragd je i dalje najprodavanija ogradna biljka u Srbiji. Sporije raste (20-35 cm godišnje) ali zadržava savršen piramidalni oblik godinama bez rezanja. Cena od 300 RSD.</p>
<p><strong>Ako želite širi, gušći žbun sa sjajnim lišćem</strong> — Lovor višnja i Fotinija Red Robin su lišćarske alternative četinarima: gušće su, bolje podnose senku i grad, a Fotinija dodatno ima vatreno crvene mlade listove. Obe kreću od 400 RSD.</p>
<p><strong>Za nižu, formalniju ogradu</strong> (do metar visine) — pogledajte Lonicera Nitida u kategoriji šiblja, odlično podnosi česta rezanja.</p>

<h2>Na kom razmaku saditi</h2>
<p>Razmak zavisi od brzine rasta i željene gustine: Tuja Smaragd 40-80 cm, Lejlandi 60-80 cm (šire za slobodnostojeće vetrobrane), Lovor višnja 50-80 cm. Za tačan broj sadnica za vašu dužinu ograde, pozovite nas — brzo izračunamo.</p>

<h2>Dostupne visine</h2>
<p>Sve navedene vrste nudimo od manjih, budžetskih sadnica do velikih formiranih primeraka za trenutan efekat. Veće biljke koštaju više, ali ogradu imate odmah — manje sadnice su jeftinije, ali čekate 2-4 godine da se sklopi.</p>`,
  },
  'cetinari': {
    seoTitle: 'Četinari – prodaja sadnica, cene i poređenje vrsta | Rasadnik Tilija',
    metaDescription: 'Prodaja četinara – Tuja Smaragd, Lejlandi, Tisa, Crni bor, Plava smrča i drugi. Zimzeleni izbor za živu ogradu i solitere. Dostava širom Srbije.',
    intro: `<p>Četinari su okosnica skoro svake srpske bašte — zimzeleni su tokom cele godine, uglavnom nezahtevni za negu i dostupni u širokom rasponu veličina i oblika. Gajimo ih i za žive ograde i kao pojedinačne, upečatljive solitere.</p>

<h2>Za živu ogradu</h2>
<p>Tuja Smaragd, Lejlandi, Tisa i Thuja Orientalis su naši najprodavaniji ogradni četinari. Tuja Smaragd je najsporija ali najuredniji izbor; Lejlandi najbrže raste; Tisa podnosi rezanje bolje od bilo koje druge biljke i može trajati generacijama; Thuja Orientalis je kompaktnija verzija tuje za manje bašte.</p>

<h2>Za soliter u dvorištu</h2>
<p>Plava smrča (Picea pungens 'Glauca') je najupečatljivija — srebrnasto-plave iglice koje zadržava bez ikakvog rezanja. Crni bor je robusniji izbor za veća dvorišta, otporan na vetar, sušu i gradsku prašinu. Bor na štapu je dekorativna, kalemljena forma sa okruglom krunom na jednom stablu — elegantan akcenat za male vrtove i ulaze.</p>

<h2>Za kamenjare i kosine</h2>
<p>Juniperus Horizontalis raste horizontalno, svega 20-40 cm visine, i odlično sprečava eroziju tla na nagnutim površinama.</p>

<h2>Otpornost na mraz</h2>
<p>Većina naših četinara podnosi -20°C do -30°C, dovoljno za sve klimatske zone Srbije. Izuzetak je Italijanski čempres — mediteranska vrsta otporna do -15°C, koja traži zaštićeniju poziciju u hladnijim krajevima (pogledajte kategoriju mediteranskih biljaka za detalje).</p>

<h2>Cene i dostava</h2>
<p>Cene počinju od 300 RSD za manje sadnice četinara, a rastu sa visinom i formom. Dostavljamo širom Srbije i, po dogovoru, vršimo i profesionalnu sadnju na terenu.</p>`,
  },
  'liscari': {
    seoTitle: 'Lišćari – prodaja sadnica ukrasnog drveća | Rasadnik Tilija',
    metaDescription: 'Prodaja lišćarskog drveća – Katalpa, Magnolija Grandiflora, Japanska trešnja, Japanski javor, Bambus. Sadnice za hlad i ukras. Dostava širom Srbije.',
    intro: `<p>Lišćarsko drveće u ovoj kategoriji biramo zbog jedne od dve stvari — brzog hlada ili upečatljivog, sezonskog izgleda. Nekoliko naših najtraženijih vrsta pokriva oba slučaja.</p>

<h2>Za brz hlad</h2>
<p>Katalpa je naš izbor broj jedan za nekoga kome treba senka što pre — raste do 50 cm godišnje i ima ogromne, srceolike listove koji prave gust hlad već posle par sezona. Dostupna je i u standardnoj formi i kao katalpa na štapu (forma pendula) za manja dvorišta.</p>

<h2>Za sezonski spektakl</h2>
<p>Japanska trešnja cveta bajkovito u proleće, pre nego što joj se listovi razviju — bela ili roze boja koja svake godine iznova transformiše dvorište. Magnolija Grandiflora je retkost — jedina zimzelena magnolija, sa krupnim mirisnim belim cvetovima tokom leta, kada većina drugog drveća već završava sezonu cvetanja.</p>

<h2>Za fini, jesenji akcenat</h2>
<p>Japanski javor sporo raste i ostaje kompaktan (2-5 metara), sa fino isečenim lišćem koje u jesen prelazi u spektakularne crveno-narandžaste tonove — idealan soliter ili kombinacija sa zimzelenim biljkama.</p>

<h2>Egzotičan karakter</h2>
<p>Bambus (neinvazivna Fargesia) daje dvorištu prepoznatljiv, azijski šarm i formira gustu zelenu zavesu brže od bilo kog drugog drveta u ovoj kategoriji — bezbedan je za baštu jer se ne širi korenjem kao trčeće vrste bambusa.</p>

<h2>Otpornost na mraz</h2>
<p>Sve navedene vrste podnose srpske zime — Katalpa i Japanska trešnja do -20°C, Magnolija Grandiflora do -12°C uz zaštićen položaj, Japanski javor do -20°C.</p>`,
  },
  'siblje': {
    seoTitle: 'Ukrasno šiblje – prodaja sadnica za baštu | Rasadnik Tilija',
    metaDescription: 'Prodaja ukrasnog šiblja – Hortenzija, Hibiskus, Spirea, Božur, Lonicera i drugi. Žbunje za cvetanje, bordure i nisku živu ogradu. Dostava širom Srbije.',
    intro: `<p>Ukrasno šiblje u ovoj kategoriji bira se najčešće zbog cvetanja, ali i za praktične potrebe — nisku formiranu ogradu, bordure ili pokrivanje tla i zidova.</p>

<h2>Za dugo, upečatljivo cvetanje</h2>
<p>Hortenzija cveta od juna do oktobra, sa krupnim kuglastim cvetovima čija boja zavisi od kiselosti zemlje — plava na kiseloj, ružičasta na alkalnoj. Hibiskus cveta od jula do oktobra baš kada većina drugog žbunja završava sezonu, i mnogo je otporniji na mraz (-20°C) nego što se obično misli. Božur je vrtna klasika koja jednom posađena ostaje u bašti i po 50 godina.</p>

<h2>Za nisku, formiranu ogradu</h2>
<p>Lonicera Nitida odlično podnosi česta rezanja i idealna je za niske, uredne žive ograde do metar visine — moderno rešenje za formalnije vrtne stilove.</p>

<h2>Za puzanje i pokrivanje</h2>
<p>Bršljan (Hedera helix) je najpopularnija zimzelena puzavica za senkovita mesta — brzo prekriva ograde, zidove i teško pristupačne površine gde druge biljke teško uspevaju.</p>

<h2>Za bordure i kombinacije</h2>
<p>Heuchera se uzgaja zbog lišća u nijansama ljubičaste, srebrne i narandžaste — boja koja traje tokom cele vegetacije, ne samo u cvetanju. Spirea bujno cveta u proleće i leto, gotovo bez potrebe za negom. Indijski jorgovan je raskošan, mirisan izbor koji cveta u aprilu i maju i može se oblikovati i kao žbun i kao malo drvo.</p>

<h2>Sunce ili senka</h2>
<p>Većina ovog šiblja traži puno sunca do polusenku, sa izuzetkom Bršljana i Heuchere koji dobro podnose i senkovitija mesta u bašti.</p>`,
  },
  'perene': {
    seoTitle: 'Perene (trajnice) – prodaja sadnica za baštu | Rasadnik Tilija',
    metaDescription: 'Prodaja perena – Hosta, Sedum, Iris, Hemerocallis, Astilba i druge trajnice za sunce i senku. Posadite jednom, cvetaju svake godine. Dostava širom Srbije.',
    intro: `<p>Perene (trajnice) posadite jednom i vraćaju se svake godine, obično sve bujnije — ono što ih razlikuje je uglavnom da li vam treba biljka za sunčano ili senkovito mesto, i kada želite da cveta.</p>

<h2>Za senku</h2>
<p>Hosta i Astilba su naš prvi izbor za senkovite delove bašte, ispod drveća ili uz severni zid — Hosta zbog dekorativnog lišća u nijansama zelene, žute i plave, Astilba zato što je jedna od retkih perena koja bogato cveta baš u senci.</p>

<h2>Za suvo, sunčano mesto</h2>
<p>Sedum (nudimo pet vrsta: angelina, hybridum, rupestre 'Blue', S. Watson, spectabile) i Festuca glauca (plava trava) su sukulentne, izuzetno suvotolerantne perene za kamenjare i zelene krovove, gotovo bez potrebe za zalivanjem.</p>

<h2>Za dugo cvetanje</h2>
<p>Hemerocallis (dnevni ljiljan) cveta od maja do avgusta u jarkim narandžastim i žutim tonovima. Kniphofia uvaria (baklja) i Physostegia alba cvetaju kasnije u sezoni, jul do oktobar.</p>

<h2>Za ukrasne trave i pokrivače tla</h2>
<p>Carex 'Ice Dance' i Ophiopogon japonicus su zimzelene ukrasne trave dekorativne tokom cele godine, čak i u senci. Ajuga reptans brzo formira gusti tepih i suzbija korov — praktično rešenje za rubove staza.</p>

<h2>Klasike vrtova</h2>
<p>Iris (Perunika) cveta u maju i junu u više boja, izuzetno je dugovečna. Gaura lindheimeri ima nežne belo-roze cvetove koji celo leto lepršaju poput leptira. Stachys lanata (zečije uši) ima mekane srebrno-sive listove, savršen kontrast tamnijem lišću u borduri.</p>

<h2>Otpornost na mraz</h2>
<p>Gotovo sve naše perene otporne su na srpske zime bez posebne zaštite — većina podnosi -20°C do -30°C, koren ostaje bezbedan ispod tla.</p>`,
  },
  'mediteranske': {
    seoTitle: 'Mediteranske biljke – prodaja sadnica | Rasadnik Tilija',
    metaDescription: 'Prodaja mediteranskih biljaka – Maslina, Italijanski čempres, Palma, Bonsai. Unesite mediteranski stil u dvorište. Dostava širom Srbije.',
    intro: `<p>Mediteranski stil je sve traženiji u srpskim dvorištima, ali kod ovih biljaka jedno pitanje je važnije od svih ostalih: <strong>da li preživljavaju našu zimu</strong>. Evo tačnog odgovora po vrsti.</p>

<h2>Maslina (Olea europaea)</h2>
<p>Podnosi mraz do -10°C, što je najniža otpornost u ovoj kategoriji. Kod nas se zato najčešće gaji kao dekorativna biljka u velikoj saksiji koja se po potrebi može skloniti, ili u potpuno zaštićenom dvorištu. Cena od 15.000 RSD.</p>

<h2>Italijanski (toskanski) čempres</h2>
<p>Otporniji je od masline — do -15°C — što pokriva veći deo Srbije uz zaštićen položaj (uz zid kuće, u gradskoj sredini, u južnijim krajevima). U otvorenim, izloženim lokacijama severnije u zemlji potrebna je dodatna zaštita mladih sadnica prve 2-3 zime. Presudno je i dobro drenirano zemljište — čempres mnogo lošije podnosi stajaću vodu nego mraz. <a href="/blog/italijanski-cempres-sadnja-nega-mraz">Pročitajte detaljan vodič o zimskoj otpornosti čempresa</a>.</p>

<h2>Palma</h2>
<p>Nudimo otpornije vrste palmi koje mogu da prežive srpske zime uz minimalnu zaštitu — idealne za mediteranski stil terase ili ulaznog prostora. Otpornost zavisi od konkretne vrste, javite nam se za tačnu preporuku prema vašoj lokaciji.</p>

<h2>Bonsai</h2>
<p>Pažljivo oblikovani primerci različitih vrsta, pogodni za terase, balkone i enterijer. Otpornost zavisi od vrste — neki su zimzeleni i mogu ostati napolju, drugi zahtevaju zaštićen prostor zimi.</p>

<h2>Zajednički savet za sve mediteranske biljke</h2>
<p>Sadite na najsunčanijem, najzaštićenijem mestu u dvorištu, po mogućstvu uz južni ili zapadni zid. Dobra drenaža je važnija od dodatnog zalivanja — sve ove vrste bolje podnose kratkotrajnu sušu nego stalno vlažan koren.</p>`,
  },
  'zemlja-i-malc': {
    seoTitle: 'Zemlja i malč – prodaja, cene po džaku | Rasadnik Tilija',
    metaDescription: 'Prodaja malča i humusa – crveni malč, malč od borove kore, organski humus. Džakovi od 50-60 litara, dostava širom Srbije.',
    intro: `<p>Malč i humus nisu obavezni, ali značajno olakšavaju negu novozasađenih biljaka — manje zalivanja, manje korova, zdraviji koren. Evo koji proizvod za koju namenu.</p>

<h2>Malč crveni</h2>
<p>Dekorativni malč od drvne kore u upečatljivoj crvenoj boji — pravi lep kontrast uz zelenilo tokom cele sezone, a usput čuva vlagu (smanjuje potrebu za zalivanjem i do 30%), sprečava korov i štiti koren od letnjih vrućina i zimskih mrazeva. Preporučena debljina sloja 5-8 cm; jedan džak od 60 litara pokriva 0,75-1,2 m². Cena od 850 RSD po džaku.</p>

<h2>Malč borova kora</h2>
<p>Za razliku od dekorativnog crvenog malča, borova kora se postepeno razgrađuje i blago zakiseljuje zemljište dok se raspada — zato je posebno preporučena za četinare, ruže, hortenzije i druge biljke koje vole kiseliju sredinu. Isto tako čuva vlagu i sprečava korov. Debljina sloja 6-8 cm; jedan džak od 60 litara pokriva 0,75-1 m². Cena od 850 RSD.</p>

<h2>Humus</h2>
<p>Kvalitetno organsko đubrivo koje obogaćuje tlo, poboljšava strukturu zemljišta i podstiče zdrav razvoj korena — dodaje se direktno u zemlju pri sadnji, za razliku od malča koji ide na površinu. Posebno se preporučuje pri sadnji drveća, žbunova, živih ograda i perena. Jedan džak od 50 kg dovoljan je za pripremu površine od 3-5 m². Cena od 800 RSD.</p>

<h2>Koliko vam treba</h2>
<p>Za prosečnu živu ogradu dužine 10 metara i širine sadne trake pola metra, računajte 4-6 džakova malča. Za sadnju pojedinačnog drveta ili žbuna, jedan džak humusa po sadnoj rupi je obično dovoljan. Nesigurni koliko tačno treba za vaš projekat — pozovite nas, brzo izračunamo prema vašoj površini.</p>`,
  },
};

export default categoryContent;
