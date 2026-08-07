const blogPosts = [
  {
    id: 13,
    slug: 'italijanski-cempres-sadnja-nega-mraz',
    title: 'Italijanski (toskanski) čempres – da li podnosi srpske zime: sadnja, nega i zašto se suši',
    excerpt: 'Italijanski čempres unosi mediteranski, toskanski šmek u dvorište — ali najveće pitanje kod nas je da li preživljava zimu. Saznajte tačnu granicu mraza, gde ga saditi da bude bezbedan, i zašto grane žute ili se suše (najčešće nije mraz, nego voda).',
    date: '2026-08-05',
    readTime: '8 min',
    category: 'Četinari',
    image: '/images/italijanskicempres.jpeg',
    relatedSlugs: ['zasto-tuja-zuti-i-susi-se', 'tuja-smaragd-sadnja-i-nega', 'maslina-uzgoj-sadnja-prezimljavanje-srbija'],
    faq: [
      {
        q: 'Da li italijanski čempres podnosi mraz u Srbiji?',
        a: 'Podnosi mraz do oko -15°C, što je dovoljno za veći deo Srbije, ali znatno manje od tuje ili lejlandija (koji podnose i -20°C do -30°C). U toplijim, zaštićenim mikrolokacijama (uz zid kuće, u gradu, u južnijim delovima zemlje) uspeva bez problema. U otvorenim, izloženim položajima u severnijim i hladnijim krajevima (severna Vojvodina, viši predeli), oštre zime mogu ga oštetiti ili ubiti — tu je pametnije birati zaštićen položaj ili razmotriti otporniju alternativu.'
      },
      {
        q: 'Zašto se italijanskom čempresu suše grane?',
        a: 'Najčešći uzrok kod nas nije mraz, nego voda — čempres izuzetno loše podnosi stajaću vodu oko korena, mnogo lošije od tuje. Teška, glinovita ili slabo drenirana zemlja dovodi do truleži korena i sušenja grana, često počevši od dna ili jedne strane biljke. Drugi mogući uzrok je gljivično oboljenje grana (rak kore, sa smolastim izlivima na kori) — ako primetite lepljivu smolu koja izbija iz kore uz sušenje te grane, verovatno je u pitanju to, i zaraženu granu treba ukloniti.'
      },
      {
        q: 'Kakva zemlja je potrebna za italijanski čempres?',
        a: 'Pre svega dobro drenirana — čak i suvo, siromašno zemljište mu više odgovara nego vlažno i teško tlo. Ako imate glinovitu zemlju koja zadržava vodu, obavezno poboljšajte drenažu pri sadnji (drenažni sloj šljunka, podignuta gredica) ili birajte drugu vrstu za tu lokaciju.'
      },
      {
        q: 'Koliko brzo raste italijanski čempres?',
        a: 'Raste umereno brzo, u proseku 30–40 cm godišnje u povoljnim uslovima, i s vremenom dostiže i 10–15 metara visine uz vrlo usku, kolonoidnu širinu (0,5–1,5 m) — zato je toliko cenjen za uske prolaze, aleje i akcente pored ulaza, gde široko drvo ne bi stalo.'
      },
      {
        q: 'Da li se italijanski čempres orezuje?',
        a: 'Ne mora — prirodno zadržava usku, uspravnu formu bez orezivanja. Ako želite, možete ga blago skratiti u proleće radi ujednačavanja, ali to nije neophodno kao kod žive ograde.'
      },
      {
        q: 'Da li italijanski čempres treba potporu/kolac pri sadnji?',
        a: 'Mlade sadnice, posebno uže kolonoidne forme, dobro je privezati za kolac prve 1–2 godine — jak vetar ili mokar sneg mogu saviti ili delimično razdvojiti krošnju pre nego što se koren dobro učvrsti.'
      }
    ],
    content: `
      <p>Italijanski čempres (Cupressus sempervirens), poznat i kao toskanski čempres, jedna je od najprepoznatljivijih slika mediteranskog pejzaža — uska, tamnozelena silueta duž puteva i vrtova Toskane. Sve više se sadi i u srpskim dvorištima koja teže tom mediteranskom stilu. Ali čim se pomene, stiže i isto pitanje: <strong>da li uopšte preživljava naše zime?</strong></p>

      <p>Odgovor je da, uz jedan uslov koji objašnjavamo u nastavku — plus zašto grane najčešće žute i suše (a to gotovo nikad nije razlog koji ljudi prvo posumnjaju), kako i gde ga saditi, i kolika mu je nega zaista potrebna.</p>

      <h2>Da li italijanski čempres podnosi srpske zime?</h2>
      <p>Italijanski čempres podnosi mraz do oko <strong>-15°C</strong>. To je solidna otpornost, ali znatno niža od tuje ili lejlandija, koji podnose -20°C do -30°C — čempres je jednostavno manje hladnootporan, jer je vrsta iz toplijeg, mediteranskog podneblja.</p>
      <p>Za veći deo Srbije to i dalje znači da uspeva bez problema, pogotovo:</p>
      <ul>
        <li><strong>U zaštićenim mikrolokacijama</strong> — uz južni ili zapadni zid kuće, u unutrašnjem dvorištu, izvan hladnih vetrova</li>
        <li><strong>U urbanim sredinama</strong> — gradovi su u proseku par stepeni topliji od okolnih otvorenih terena</li>
        <li><strong>U južnijim i nižim predelima zemlje</strong></li>
      </ul>
      <p>Oprez je opravdan u <strong>otvorenim, izloženim položajima u severnijim krajevima</strong> (severna Vojvodina, viši i hladniji tereni), gde temperature u oštrim zimama mogu pasti ispod -15°C — tu je najbolje saditi ga uz zaštićen zid, ili razmotriti otporniju vrstu ako je lokacija baš izložena.</p>

      <h2>Zašto se italijanskom čempresu suše grane — pravi uzroci</h2>
      <p>Kad grane čempresa počnu da žute ili se suše, gotovo svako prvo posumnja na mraz. U praksi je uzrok mnogo češće nešto sasvim drugo.</p>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Kako izgleda</th><th>Uzrok</th><th>Rešenje</th></tr>
        </thead>
        <tbody>
          <tr><td>Sušenje počinje od dna ili jedne strane, zemlja često vlažna</td><td>Trulež korena od stajaće vode (najčešći uzrok)</td><td>Poboljšajte drenažu, smanjite zalivanje</td></tr>
          <tr><td>Pojedinačna grana se suši, lepljiva smola na kori te grane</td><td>Gljivično oboljenje kore (rak grana)</td><td>Uklonite zaraženu granu, dezinfikujte alat posle rezanja</td></tr>
          <tr><td>Vrhovi grana braon posle oštre zime, na izloženom mestu</td><td>Zimska šteta (mraz ispod -15°C ili jak hladan vetar)</td><td>Zaštićen položaj, zaštita mladih sadnica prve 2–3 zime</td></tr>
          <tr><td>Blago žućenje dubljih, starijih grančica u jesen</td><td>Normalna sezonska promena</td><td>Nije potrebna intervencija</td></tr>
        </tbody>
      </table>
      </div>

      <h3>1. Trulež korena od stajaće vode (najčešći uzrok)</h3>
      <p>Ovo je, iskustveno, ubedljivo najčešći razlog sušenja italijanskog čempresa u srpskim dvorištima — mnogo češći od mraza. Čempres je mediteranska vrsta navikla na suvo, propusno tlo, i <strong>izuzito loše podnosi vlažan, teško dreniran koren</strong> — lošije od skoro svih drugih četinara koje uzgajamo. Teška glinovita zemlja, nizak teren gde se voda zadržava, ili prečesto zalivanje dovode do truleži korena.</p>
      <p><strong>Rešenje:</strong> pre sadnje proverite drenažu — ako voda posle kiše stoji na tom mestu duže od par sati, poboljšajte je (drenažni sloj šljunka na dnu sadne jame, podignuta gredica) ili birajte drugu lokaciju. Zalivajte umereno, nikad "za svaki slučaj".</p>

      <h3>2. Gljivično oboljenje kore (rak grana)</h3>
      <p>Čempresi su podložni gljivičnim infekcijama kore koje izazivaju sušenje pojedinačnih grana, često praćeno <strong>lepljivom smolom koja izbija iz kore</strong> na mestu infekcije. Širi se lakše na oslabljenim biljkama (stres od suše, rana od orezivanja).</p>
      <p><strong>Rešenje:</strong> čim primetite zaraženu granu, uklonite je rezom u zdravo drvo, dobrih par centimetara ispod vidljive štete, i dezinfikujte alat pre sledećeg reza da ne prenesete infekciju.</p>

      <h3>3. Zimska šteta</h3>
      <p>Na izloženim, otvorenim lokacijama, posebno u severnijim delovima Srbije, oštra zima sa temperaturama ispod -15°C ili jak hladan vetar mogu isušiti i pobronzati vrhove grana.</p>
      <p><strong>Rešenje:</strong> saditi na zaštićenom mestu; mlade sadnice u prve 2–3 zime dodatno zaštititi netkanim tekstilom sa izložene strane.</p>

      <h2>Sadnja italijanskog čempresa — gde i kada</h2>
      <p><strong>Pozicija:</strong> puno sunce, po mogućstvu zaštićeno od najhladnijih zimskih vetrova.</p>
      <p><strong>Zemlja:</strong> presudna je dobra drenaža — čak i suvo, siromašno zemljište mu odgovara više nego vlažno i teško tlo.</p>
      <p><strong>Vreme sadnje:</strong> proleće ili jesen.</p>
      <p><strong>Razmak:</strong> zahvaljujući izrazito uskoj, kolonoidnoj formi (0,5–1,5 m širine), sadi se mnogo gušće nego širokolisno drveće — odlično se uklapa u uske prolaze i aleje gde druga drveća ne bi stala.</p>
      <p><strong>Potpora:</strong> mladu sadnicu je dobro privezati za kolac prve 1–2 godine, dok se koren ne učvrsti — jak vetar ili mokar sneg mogu je saviti.</p>

      <h2>Nega italijanskog čempresa</h2>
      <ul>
        <li><strong>Zalivanje:</strong> redovno prve 1–2 godine dok se ne ukoreni; posle toga izrazito je suvotolerantan i zalivanje je retko potrebno</li>
        <li><strong>Đubrenje:</strong> nije neophodno na plodnijem tlu; na siromašnom, đubrivo za četinare u proleće</li>
        <li><strong>Rezidba:</strong> nije obavezna — prirodno zadržava usku formu; po želji blago skratiti u proleće</li>
        <li><strong>Zaštita zimi:</strong> potrebna samo mladim sadnicama na izloženim, hladnijim lokacijama</li>
      </ul>

      <h2>Italijanski čempres u brojkama</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Osobina</th><th>Vrednost</th></tr>
        </thead>
        <tbody>
          <tr><td>Otpornost na mraz</td><td>Do -15°C</td></tr>
          <tr><td>Brzina rasta</td><td>30–40 cm godišnje</td></tr>
          <tr><td>Visina u zrelosti</td><td>10–15 m</td></tr>
          <tr><td>Širina (kolonoidne forme)</td><td>0,5–1,5 m</td></tr>
          <tr><td>Sunce</td><td>Puno sunce</td></tr>
          <tr><td>Zemlja</td><td>Dobro drenirana, podnosi i suvo/siromašno tlo</td></tr>
          <tr><td>Rezidba</td><td>Nije obavezna</td></tr>
        </tbody>
      </table>
      </div>

      <h2>Česta pitanja o italijanskom čempresu</h2>

      <h3>Da li italijanski čempres podnosi mraz u Srbiji?</h3>
      <p>Da, do oko -15°C — dovoljno za veći deo zemlje, uz zaštićen položaj u hladnijim, izloženim krajevima.</p>

      <h3>Zašto se italijanskom čempresu suše grane?</h3>
      <p>Najčešće zbog stajaće vode i truleži korena, ne zbog mraza — provera drenaže je prvi korak. Pojedinačna grana sa smolom na kori ukazuje na gljivično oboljenje.</p>

      <h3>Kakva zemlja je potrebna?</h3>
      <p>Pre svega dobro drenirana — suvo tlo mu više odgovara nego vlažno i teško.</p>

      <h3>Koliko brzo raste?</h3>
      <p>Umereno brzo, 30–40 cm godišnje, dostižući 10–15 m visine uz vrlo usku širinu.</p>

      <h2>Gde kupiti italijanski čempres u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo italijanski čempres uz dostavu i sadnju širom Srbije. Pogledajte <a href="/sadnice/italijanski-cempres">stranicu italijanskog čempresa</a> za aktuelnu cenu i dostupnost, ili nas pozovite na <a href="tel:+381638870837">063 88 70 837</a>.</p>
    `,
  },
  {
    id: 12,
    slug: 'zasto-tuja-zuti-i-susi-se',
    title: 'Zašto tuja žuti i suši se — kako da prepoznate pravi uzrok (i da li je normalno)',
    excerpt: 'Tuja požutela ili osušila vrhove grana? Pre nego što posumnjate na bolest, proverite da li je reč o potpuno normalnoj jesenjoj promeni iglica. U ovom vodiču pokazujemo kako da prepoznate šest najčešćih uzroka žućenja i sušenja tuje — od zimske opekotine do grinja — i tačno šta da uradite za svaki.',
    date: '2026-07-30',
    readTime: '8 min',
    category: 'Četinari',
    image: '/images/tuja-osusena-ziva-ograda.jpg',
    relatedSlugs: ['tuja-smaragd-sadnja-i-nega', 'najbrza-ziva-ograda-srbija', 'lejlandi-sadnja-i-nega'],
    faq: [
      {
        q: 'Zašto moja tuja žuti iznutra u jesen?',
        a: 'To je, u velikoj većini slučajeva, potpuno normalna pojava — tuja svake jeseni odbacuje unutrašnje iglice stare 2–3 godine, koje požute, pa pomeđaju u braon i otpadaju, dok spoljašnji deo krošnje ostaje zelen. Nije bolest niti znak da nešto nije u redu. Zabrinjavajuće je jedino ako žuti/suši spoljašnji, vidljivi deo grana.'
      },
      {
        q: 'Zašto su vrhovi tuje braon posle zime?',
        a: 'Najčešće je reč o zimskoj (sunčano-vetrovnoj) opekotini — iglice isparavaju vodu tokom sunčanih zimskih dana, a koren u smrznutoj zemlji ne može da je nadoknadi, pa vrhovi grana isuše i pobronzave, obično na južnoj ili zapadnoj strani. Rešenje je obilno zalivanje pred zimu i, kod mlađih sadnica, zaštita netkanim tekstilom prve 2–3 zime.'
      },
      {
        q: 'Kako da znam da li tuja ima grinje?',
        a: 'Stavite belu hartiju ili list papira ispod grane i lagano je protresite ili udarite — ako primetite sitne, jedva vidljive tačkice koje se pomeraju po papiru, reč je o paučinastim grinjama. One su najaktivnije u toplim, suvim letima i izazivaju sivkasto-braon, "prašnjav" izgled iglica, obično prvo na unutrašnjim, donjim granama.'
      },
      {
        q: 'Zašto mi cela grana ili polovina tuje odjednom osuši?',
        a: 'Naglo sušenje cele grane ili čitave strane žbuna najčešće je znak truleži korena zbog prevlaživanja — teška, slabo drenirana zemlja ili prečesto zalivanje ugušuju koren. Proverite drenažu i smanjite zalivanje; nažalost, već osušene grane se ne oporavljaju, ali biljka može preživeti ako se problem sa vodom reši na vreme.'
      },
      {
        q: 'Da li žuta tuja može da se spasi?',
        a: 'Zavisi od uzroka. Zimska opekotina i grinje se uglavnom rešavaju redovnim zalivanjem i tretmanom, a iglice se vremenom obnavljaju. Trulež korena je najozbiljniji uzrok — ako je zahvatila veći deo korena, biljka se retko oporavi. Što ranije prepoznate uzrok, veće su šanse za spas.'
      },
      {
        q: 'Koliko često treba zalivati tuju da ne bi žutela?',
        a: 'Prve dve godine posle sadnje, tuja treba dubinsko zalivanje jednom nedeljno u sušnim periodima (više u vrelom letu, ređe u proleće i jesen). Izbegavajte česta, plitka zalivanja — bolje je ređe, ali obilno, da voda dopre duboko do korena.'
      }
    ],
    content: `
      <p>Tuja Smaragd je najotpornija ograda koju možete posaditi u srpskoj bašti — ali baš zato svako žuto ili braon mesto na njoj deluje alarmantno. Dobra vest: u većini slučajeva razlog je bezopasan i lako se prepoznaje čim znate na šta da obratite pažnju.</p>

      <p>U ovom vodiču prolazimo kroz šest najčešćih uzroka žućenja i sušenja tuje — počevši od onog koji <strong>uopšte nije problem</strong> — i objašnjavamo tačno kako da prepoznate koji je vaš slučaj i šta da uradite.</p>

      <h2>Prvo proverite: da li je ovo normalna jesenja promena?</h2>
      <p>Najčešći "lažni alarm" kod vlasnika tuje: svake jeseni, <strong>unutrašnje iglice stare 2–3 godine</strong> prirodno požute, pa pomeđaju u braon i otpadaju, dok spoljašnji, vidljivi deo krošnje ostaje potpuno zelen. Ovo je normalan proces obnavljanja lišća kod svih četinara sličnih tuji, ne bolest.</p>
      <p><strong>Kako da prepoznate da je normalno:</strong> žućenje je duboko unutar krošnje, blizu debla, i spolja je biljka i dalje zelena i gusta. Ako protresete granu, otpašće nekoliko suvih iglica — to je očekivano.</p>
      <p><strong>Kada nije normalno:</strong> ako žuti ili suši spoljašnji, vidljivi deo grana, ili cela biljka gubi boju — tada je reč o jednom od pravih uzroka ispod.</p>

      <figure class="content-image">
        <img src="/images/tuja-pocetak-susenja-vrhovi.jpg" alt="Početak sušenja tuje - vrhovi grančica žute i smeđe dok je ostatak grane još uvek zelen" loading="lazy" />
        <figcaption>Ovako izgleda rano, aktivno sušenje vrhova — za razliku od normalnog jesenjeg žućenja, ovde treba potražiti uzrok</figcaption>
      </figure>

      <h2>Šest pravih uzroka žućenja i sušenja tuje</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Kako izgleda</th><th>Uzrok</th><th>Rešenje</th></tr>
        </thead>
        <tbody>
          <tr><td>Braon vrhovi grana rano u proleće, uglavnom sa juga/zapada</td><td>Zimska opekotina (sunce + vetar)</td><td>Obilno zalivanje pred zimu, zaštita mladih sadnica netkanim platnom</td></tr>
          <tr><td>Sivkasto-braon, "prašnjave" iglice, posebno leti</td><td>Paučinaste grinje</td><td>Jak mlaz vode po krošnji, po potrebi akaricid</td></tr>
          <tr><td>Braon vrhovi izdanaka posle kišnog proleća, širi se</td><td>Gljivično oboljenje vrhova izdanaka</td><td>Uklanjanje zaraženih grančica, bolje provetravanje/razmak</td></tr>
          <tr><td>Cela grana ili polovina žbuna naglo suva</td><td>Trulež korena od prevlaživanja</td><td>Proverite drenažu, smanjite zalivanje</td></tr>
          <tr><td>Opšte bledilo/žutilo cele biljke, spor rast</td><td>Manjak hraniva ili alkalna zemlja</td><td>Đubrivo za četinare, gvožđe helat</td></tr>
          <tr><td>Žutilo/sušenje samo na jednoj, senovitoj strani</td><td>Nedovoljno svetla</td><td>Nema pravog rešenja osim premeštanja — planirajte položaj unapred</td></tr>
        </tbody>
      </table>
      </div>

      <h3>1. Zimska (sunčano-vetrovna) opekotina</h3>
      <p>Ovo je, posle normalnog jesenjeg žućenja, ubedljivo najčešći uzrok braon vrhova na tuji — pogotovo kod mlađih, tek posađenih sadnica. Tokom sunčanih zimskih dana iglice isparavaju vodu, a koren u smrznutoj zemlji ne može da je nadoknadi, pa vrhovi grana isuše i dobiju karakterističnu bronzano-braon boju, najčešće na južnoj ili zapadnoj, izloženoj strani.</p>
      <p><strong>Rešenje:</strong> obilno zalivanje kasno u jesen, pre nego što se zemlja smrzne — biljka ulazi u zimu sa punim rezervama vode. Mlade sadnice u prve 2–3 zime dodatno zaštitite netkanim tekstilom sa izložene strane.</p>

      <h3>2. Paučinaste grinje</h3>
      <p>U toplim, suvim letima, sitne paučinaste grinje mogu napasti tuju, izazivajući sivkasto-braon, kao "zaprašen" izgled iglica — obično prvo na unutrašnjim, donjim granama, gde je manje vazdušne cirkulacije.</p>
      <p><strong>Kako proveriti:</strong> stavite belu hartiju ispod sumnjive grane i lagano je protresite. Sitne pokretne tačkice na papiru potvrđuju grinje.</p>
      <p><strong>Rešenje:</strong> jak mlaz vode povremeno tokom leta smanjuje populaciju grinja; kod jačeg napada koristite akaricid iz poljoprivredne apoteke.</p>

      <h3>3. Gljivično oboljenje vrhova izdanaka</h3>
      <p>Posle vlažnog, kišnog proleća, vrhovi mladih izdanaka mogu požuteti, pa posmeđeti i osušiti se — znak gljivične infekcije koja se širi u gustim, slabo provetrenim zasadima.</p>
      <p><strong>Rešenje:</strong> uklonite i uništite zaražene grančice (ne kompostirajte ih), i ako je moguće, poboljšajte provetravanje između biljaka orezivanjem ili većim razmakom pri sledećoj sadnji.</p>

      <h3>4. Trulež korena od prevlaživanja</h3>
      <p>Najozbiljniji uzrok na ovoj listi. Teška, glinovita ili slabo drenirana zemlja, ili prečesto zalivanje, ugušuju koren i dovode do truleži — što se na krošnji vidi kao naglo sušenje cele grane ili čitave strane žbuna, ponekad u roku od svega nedelju dana.</p>
      <p><strong>Rešenje:</strong> proverite da li voda posle kiše ili zalivanja stoji oko korena duže od par sati — ako da, poboljšajte drenažu (podignuta gredica, drenažni sloj šljunka) i smanjite učestalost zalivanja. Već osušene grane se ne oporavljaju, ali biljka može preživeti ako se koren spase na vreme.</p>

      <h3>5. Manjak hraniva ili alkalna zemlja</h3>
      <p>Opšte bledilo ili žutilo cele biljke, praćeno sporijim rastom, obično ukazuje na siromašnu ili previše alkalnu zemlju, koja onemogućava usvajanje gvožđa (hloroza).</p>
      <p><strong>Rešenje:</strong> đubrivo namenjeno četinarima u proleće, a kod izražene hloroze — dodatak gvožđe helata.</p>

      <h3>6. Nedovoljno svetla</h3>
      <p>Ako tuja raste uz zid, ogradu ili drugo drveće koje je zaklanja sa jedne strane, ta strana može biti ređa, bleđa ili čak požuteti, dok osunčana strana ostaje gusta i zelena.</p>
      <p><strong>Rešenje:</strong> nema brzog leka osim uklanjanja izvora senke gde je moguće — najbolje je ovo predvideti pre sadnje i ostaviti dovoljno prostora i svetla sa svih strana.</p>

      <h2>Kako da sprečite žućenje tuje unapred</h2>
      <ul>
        <li><strong>Zalivanje prve dve godine:</strong> dubinsko zalivanje jednom nedeljno u sušnim periodima — ređe, ali obilno, umesto čestog plitkog zalivanja</li>
        <li><strong>Zalivanje pred zimu:</strong> poslednje obilno zalivanje kasno u jesen, pre smrzavanja zemlje, značajno smanjuje rizik od zimske opekotine</li>
        <li><strong>Drenaža:</strong> proverite da voda ne zastaje oko korena — najčešći uzrok ozbiljnih problema je prevlaživanje, ne suša</li>
        <li><strong>Razmak pri sadnji:</strong> dovoljan razmak između biljaka smanjuje vlažnost i rizik od gljivičnih oboljenja</li>
        <li><strong>Malčovanje:</strong> sloj malča oko korena čuva vlagu i stabilizuje temperaturu zemljišta</li>
      </ul>

      <h2>Česta pitanja o žućenju i sušenju tuje</h2>

      <h3>Zašto moja tuja žuti iznutra u jesen?</h3>
      <p>To je normalna sezonska promena — unutrašnje, starije iglice požute i otpadaju, dok spoljašnji deo ostaje zelen. Nije razlog za brigu.</p>

      <h3>Zašto su vrhovi tuje braon posle zime?</h3>
      <p>Najčešće zimska opekotina od sunca i vetra dok je koren u smrznutoj zemlji. Pomaže obilno zalivanje pred zimu i zaštita mladih sadnica.</p>

      <h3>Kako da znam da li tuja ima grinje?</h3>
      <p>Protresite granu iznad bele hartije — sitne pokretne tačkice na papiru potvrđuju grinje.</p>

      <h3>Zašto mi cela grana ili polovina tuje odjednom osuši?</h3>
      <p>Najverovatnije trulež korena zbog prevlaživanja i loše drenaže — proverite da voda ne zastaje oko korena.</p>

      <h3>Da li žuta tuja može da se spasi?</h3>
      <p>Zavisi od uzroka — zimska opekotina i grinje se uglavnom rešavaju, dok je trulež korena najozbiljniji problem. Rano prepoznavanje uzroka povećava šanse za spas.</p>

      <h2>Gde kupiti zdrave sadnice tuje u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) uzgajamo Tuju Smaragd u svim visinama, uz savet o sadnji i nezi i dostavu širom Srbije. Pogledajte <a href="/sadnice/tuja-smaragd">stranicu Tuje Smaragd</a> za aktuelne cene, ili nas pozovite na <a href="tel:+381638870837">063 88 70 837</a>.</p>
    `,
  },
  {
    id: 11,
    slug: 'magnolija-grandiflora-sadnja-i-nega',
    title: 'Magnolija Grandiflora – jedina zimzelena magnolija: sadnja, nega i zašto ne cveta',
    excerpt: 'Magnolija Grandiflora ne cveta iako je zdrava i lepa? Najčešće je razlog jednostavan — mladost biljke. Saznajte kada prva magnolija procveta, zašto gubi pojedinačne listove (i kad je to normalno), kako je saditi i negovati.',
    date: '2026-07-24',
    readTime: '8 min',
    category: 'Lišćari',
    image: '/images/WhatsApp Image 2026-01-03 at 19.52.34.jpeg',
    relatedSlugs: ['hortenzija-nega-rezidba-cvetanje', 'hibiskus-zasto-ne-cveta-nega', 'katalpa-sadnja-i-nega'],
    faq: [
      {
        q: 'Zašto magnolija grandiflora ne cveta?',
        a: 'Najčešći razlog je jednostavno mladost biljke — magnolija grandiflora treba vreme da dostigne zrelost pre prvog cvetanja. Sadnice iz rasadnika (raslinjene ili kalemljene) obično prvi put cvetaju za 5–8 godina, dok biljke gajene iz semena mogu čekati i 10–15 godina. Ostali razlozi: premalo sunca, mladi izdanci oštećeni kasnim mrazom, ili nedovoljno zreo koren nakon presađivanja.'
      },
      {
        q: 'Da li magnolija grandiflora gubi lišće — je li to normalno?',
        a: 'Da, potpuno je normalno. Iako je zimzelena, magnolija grandiflora tokom cele godine postepeno menja starije listove za nove — u svakom trenutku može se videti nekoliko požutelih listova koji otpadaju. To nije znak bolesti. Problem postoji samo ako žuti veliki deo krošnje odjednom ili ako listovi žute sa zelenim nervima (znak hloroze zbog alkalnog zemljišta).'
      },
      {
        q: 'Kada cveta magnolija grandiflora?',
        a: 'Cveta u leto, od juna do jula, za razliku od listopadnih magnolija koje cvetaju rano u proleće. Krupni, mirisni beli cvetovi otvaraju se pojedinačno tokom nekoliko nedelja, ne svi odjednom.'
      },
      {
        q: 'Da li magnolija grandiflora podnosi mraz u Srbiji?',
        a: 'Podnosi mraz do oko -12°C, što je dovoljno za veći deo Srbije uz zaštićen položaj. U hladnijim krajevima (severna Vojvodina, viši predeli) sadite je uz zid ili zaklonjeno mesto, i zaštitite koren malčom u prvim zimama.'
      },
      {
        q: 'Koliko prostora treba magnoliji grandiflori?',
        a: 'Naraste do 10–15 metara visine sa širokom, gustom krošnjom, pa joj je potrebno najmanje 4–5 metara razmaka od objekata i drugog drveća. Sporo raste, pa taj prostor "popunjava" tek posle mnogo godina.'
      },
      {
        q: 'Kakvu zemlju i negu traži magnolija grandiflora?',
        a: 'Traži blago kiselu do neutralnu, bogatu zemlju i redovno zalivanje dok se ne ukoreni, posebno u prve dve godine. Na alkalnom tlu list može žuteti (hloroza) — u tom slučaju pomaže đubrivo za acidofilne biljke (kao za hortenziju ili rododendron).'
      }
    ],
    content: `
      <p>Magnolija Grandiflora je prava retkost u srpskim baštama — dok sve ostale magnolije u proleće ostaju gole posle cvetanja i bez lišća, ona zadržava krupno, sjajno lišće tokom cele godine i cveta krupnim, mirisnim belim cvetovima usred leta. Ali baš zato što je drugačija od "klasičnih" magnolija, oko nje postoje i najčešća pitanja: <strong>zašto ne cveta</strong> i <strong>zašto gubi listove kad je zimzelena</strong>?</p>

      <p>U ovom vodiču objašnjavamo oboje, plus kada i kako je saditi, koliko prostora traži i kako je negovati da dočeka prvo cvetanje što pre.</p>

      <h2>Zašto je Magnolija Grandiflora posebna?</h2>
      <ul>
        <li><strong>Jedina zimzelena magnolija</strong> — zadržava krupno, sjajno tamnozeleno lišće tokom cele godine, dok su ostale magnolije listopadne</li>
        <li><strong>Cveta u leto</strong> — krupni mirisni beli cvetovi u junu i julu, kada većina drveća u bašti već završava sezonu cvetanja</li>
        <li><strong>Dugovečna i impresivna</strong> — naraste do 10–15 metara i s godinama postaje sve upečatljivija</li>
      </ul>

      <h2>Zašto magnolija grandiflora ne cveta — pravi razlozi</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Uzrok</th><th>Rešenje</th></tr>
        </thead>
        <tbody>
          <tr><td>Biljka je premlada</td><td>Strpljenje — sadnice iz rasadnika cvetaju za 5–8 godina</td></tr>
          <tr><td>Premalo sunca</td><td>Sadite na osunčanom, zaštićenom mestu</td></tr>
          <tr><td>Kasni prolećni mraz oštetio pupoljke</td><td>Zaštićen položaj (uz zid, izvan udara vetra)</td></tr>
          <tr><td>Nedavno presađivanje</td><td>Koren mora prvo da se stabilizuje, cvetanje dolazi kasnije</td></tr>
        </tbody>
      </table>
      </div>

      <h3>1. Biljka je premlada (najčešći razlog)</h3>
      <p>Magnolija grandiflora nije brzo cvetajuća biljka. Sadnice gajene iz reznica ili kalemljene (ono što se prodaje u rasadnicima) obično prvi put procvetaju za <strong>5 do 8 godina</strong>. Biljke gajene iz semena čekaju znatno duže — i 10 do 15 godina. Ako ste tek posadili mladu magnoliju, izostanak cvetova prvih sezona je potpuno očekivan.</p>

      <h3>2. Premalo sunca</h3>
      <p>Magnolija grandiflora najbolje cveta na punom suncu ili blagoj polusenci. U dubokoj senci biljka raste, ali cvetanje izostaje ili je veoma slabo.</p>

      <h3>3. Kasni prolećni mraz</h3>
      <p>Cvetni pupoljci koji su se već formirali mogu stradati od kasnog mraza, posebno kod mlađih biljaka. Zaštićen položaj — uz zid kuće ili izvan hladnih vetrova — smanjuje ovaj rizik.</p>

      <h2>Zašto magnoliji žute i opadaju listovi — kad je to normalno?</h2>
      <p>Iako je zimzelena, magnolija grandiflora <strong>nije večna sa svakim listom</strong> — kao i sve zimzelene biljke, postepeno zamenjuje starije lišće novim tokom cele godine. Sasvim je normalno videti povremeno poneki požuteo list koji otpada, dok ostatak krošnje ostaje zdrav i sjajno zelen.</p>
      <p><strong>Kada je to problem:</strong></p>
      <ul>
        <li><strong>Žutilo sa zelenim nervima na listu</strong> — znak hloroze, obično zbog previše alkalnog zemljišta. Rešenje: đubrivo za acidofilne biljke (isto kao za hortenziju ili rododendron).</li>
        <li><strong>Žutilo i opadanje velikog dela krošnje odjednom</strong> — može biti znak stresa od suše, prevelike vlage u korenu, ili štete od jakog mraza. Proverite drenažu zemljišta i režim zalivanja.</li>
      </ul>

      <h2>Sadnja magnolije grandiflore — gde i kada</h2>
      <p><strong>Pozicija:</strong> puno sunca do blaga polusenka, zaštićeno od jakog i hladnog vetra.</p>
      <p><strong>Zemlja:</strong> blago kisela do neutralna, bogata humusom, dobra drenaža.</p>
      <p><strong>Vreme sadnje:</strong> proleće, kada prođu poslednji mrazevi.</p>
      <p><strong>Prostor:</strong> naraste do 10–15 metara sa širokom krošnjom — ostavite najmanje 4–5 metara razmaka od kuće, ograde i drugog drveća.</p>

      <h2>Nega magnolije grandiflore</h2>
      <ul>
        <li><strong>Zalivanje:</strong> redovno dok se ne ukoreni, posebno prve dve godine i tokom leta</li>
        <li><strong>Đubrenje:</strong> u proleće, đubrivom za acidofilne biljke ako je zemlja alkalna</li>
        <li><strong>Malčovanje:</strong> sloj malča oko korena čuva vlagu i štiti koren mladih sadnica u prvim zimama</li>
        <li><strong>Rezidba:</strong> minimalna — samo uklanjanje suvih ili oštećenih grana, po potrebi</li>
      </ul>

      <h2>Česta pitanja o magnoliji grandiflori</h2>

      <h3>Zašto magnolija grandiflora ne cveta?</h3>
      <p>Najčešće zato što je biljka još mlada — sadnice iz rasadnika prvi put cvetaju za 5–8 godina. Ostali razlozi: premalo sunca, kasni mraz, nedavno presađivanje.</p>

      <h3>Da li magnolija grandiflora gubi lišće?</h3>
      <p>Povremeno, da — to je normalna zamena starijeg lišća novim. Problem je samo ako žuti veliki deo krošnje odjednom ili ako listovi žute sa zelenim nervima (hloroza).</p>

      <h3>Kada cveta magnolija grandiflora?</h3>
      <p>U leto, od juna do jula — kasnije od većine drugih magnolija koje cvetaju rano u proleće.</p>

      <h3>Da li magnolija grandiflora podnosi mraz u Srbiji?</h3>
      <p>Da, do oko -12°C, uz zaštićen položaj u hladnijim krajevima zemlje.</p>

      <h3>Koliko prostora treba magnoliji grandiflori?</h3>
      <p>Najmanje 4–5 metara razmaka od objekata i drugog drveća — vremenom naraste do 10–15 metara sa širokom krošnjom.</p>

      <h2>Gde kupiti magnoliju grandifloru u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo magnoliju grandifloru uz dostavu i sadnju na terenu širom Srbije. Pogledajte <a href="/sadnice/magnolija-grandiflora">stranicu magnolije grandiflore</a> za aktuelnu cenu i dostupnost, ili nas pozovite na <a href="tel:+381638870837">063 88 70 837</a>.</p>
    `,
  },
  {
    id: 10,
    slug: 'hibiskus-zasto-ne-cveta-nega',
    title: 'Hibiskus – zašto gubi pupoljke i ne cveta: kompletan vodič',
    excerpt: 'Hibiskus gubi pupoljke pre cvetanja? Kriv je gotovo uvek stres — neredovno zalivanje, nagle promene temperature ili premalo sunca. Saznajte pravi uzrok, kada rezati, koliko sunca i vode treba, i da li podnosi srpske zime.',
    date: '2026-07-23',
    readTime: '8 min',
    category: 'Šiblje',
    image: '/images/hibiskus.jpeg',
    relatedSlugs: ['hortenzija-nega-rezidba-cvetanje', 'katalpa-sadnja-i-nega', 'magnolija-grandiflora-sadnja-i-nega'],
    faq: [
      {
        q: 'Zašto hibiskus gubi pupoljke pre nego što procvetaju?',
        a: 'Najčešći uzrok je stres izazvan naglim promenama — neredovno zalivanje (i suša i preterano vlaženje podjednako štete), nagle promene temperature, presađivanje ili pomeranje biljke, kao i nedostatak sunca. Prekomerno azotno đubrivo takođe podstiče lišće na štetu cvetova. Rešenje je redovno, ujednačeno zalivanje i stabilna, sunčana pozicija.'
      },
      {
        q: 'Zašto hibiskusu kasno liste u proleće — da li je uginuo?',
        a: 'Ne brinite — hibiskus je jedna od poslednjih baštenskih biljaka koja kreće u vegetaciju, često tek u maju ili čak početkom juna, kada je sve ostalo već odavno olistalo. To je normalno za vrstu, ne znak da je biljka uginula. Pre nego što odlučite da je izvadite, savijte tanju granu — ako je savitljiva i zelena ispod kore, biljka je živa.'
      },
      {
        q: 'Kada se reže hibiskus i da li rezidba utiče na cvetanje?',
        a: 'Za razliku od hortenzije, hibiskus cveta na novom drvetu (tekućoj sezoni rasta), pa rezidba krajem zime ili ranog proleća (februar–mart) ne uništava pupoljke — naprotiv, podstiče bujniji rast i više cvetova. Slobodno orežite do trećine dužine grana pre kretanja vegetacije.'
      },
      {
        q: 'Da li hibiskus podnosi mraz u Srbiji?',
        a: 'Da, i to bolje nego što se obično misli — Hibiscus syriacus podnosi mraz do oko -20°C, što pokriva veći deo Srbije bez posebne zaštite. Mladu sadnicu u prvoj zimi ipak zaštitite malčom oko korena.'
      },
      {
        q: 'Koliko sunca i vode treba hibiskusu za obilno cvetanje?',
        a: 'Hibiskusu treba minimum 5–6 sati direktnog sunca dnevno — u senci raste, ali slabo ili nikako ne cveta. Zalivanje treba da bude umereno i redovno: ni suvo, ni stalno mokro tlo — oba ekstrema izazivaju opadanje pupoljaka.'
      },
      {
        q: 'Kada cveta hibiskus?',
        a: 'Hibiscus syriacus cveta od jula do oktobra, sa vrhuncem u avgustu — kada većina drugih žbunova u bašti već završava sezonu cvetanja.'
      }
    ],
    content: `
      <p>Hibiskus je jedna od najupečatljivijih baštenskih biljaka — krupni, egzotični cvetovi koji se otvaraju od jula do oktobra, baš kada većina drugih žbunova završava sezonu. Ali mnogi vlasnici primete isti problem: <strong>pupoljci se formiraju, ali otpadaju pre nego što se otvore, ili ih uopšte nema</strong>.</p>

      <p>Dobra vest je da je uzrok skoro uvek isti i lako se ispravlja: <strong>stres izazvan naglim promenama</strong>. U ovom vodiču objašnjavamo zašto hibiskus gubi pupoljke, zašto kasno liste u proleće (i zašto to nije razlog za brigu), kada ga rezati i koliko zaista podnosi srpsku zimu.</p>

      <h2>Zašto hibiskus gubi pupoljke — pravi razlozi</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Uzrok</th><th>Rešenje</th></tr>
        </thead>
        <tbody>
          <tr><td>Neredovno zalivanje (suša ili prelivanje)</td><td>Redovno, ujednačeno zalivanje + malč oko korena</td></tr>
          <tr><td>Nagle promene temperature</td><td>Stabilna, zaštićena pozicija smanjuje ukupan stres</td></tr>
          <tr><td>Premalo sunca</td><td>Sadite na mestu sa najmanje 5–6 sati sunca dnevno</td></tr>
          <tr><td>Nedavno presađivanje</td><td>Strpljenje — cvetanje se vraća sledeće sezone</td></tr>
          <tr><td>Previše azotnog đubriva</td><td>Đubrivo sa manje azota, više fosfora i kalijuma</td></tr>
        </tbody>
      </table>
      </div>

      <h3>1. Neredovno zalivanje (najčešći razlog)</h3>
      <p>Hibiskus je izuzetno osetljiv na promene u dostupnosti vode. I dugi period suše i iznenadno prelivanje posle njega izazivaju isti odgovor — biljka "žrtvuje" pupoljke da bi sačuvala energiju.</p>
      <p><strong>Rešenje:</strong> zalivajte redovno i ujednačeno, posebno tokom cvetanja (jul–oktobar). Malč oko korena pomaže da zemlja ne presuši između zalivanja.</p>

      <h3>2. Nagle promene temperature</h3>
      <p>Topli dani praćeni hladnim noćima, ili nagli talas vrućine, mogu izazvati stres koji rezultira otpadanjem pupoljaka nekoliko dana kasnije.</p>
      <p><strong>Rešenje:</strong> ovo je van vaše kontrole, ali stabilizovanjem zalivanja i pozicije (zaštićeno od jakog vetra) smanjujete ukupan stres na biljku.</p>

      <h3>3. Premalo sunca</h3>
      <p>Hibiskus posađen u senci ili polusenci retko cveta obilno, čak i kad je inače zdrav. Manje svetlosti znači manje energije za formiranje i održavanje pupoljaka.</p>
      <p><strong>Rešenje:</strong> sadite na mestu sa najmanje 5–6 sati direktnog sunca dnevno.</p>

      <h3>4. Presađivanje ili premeštanje biljke</h3>
      <p>Ako ste nedavno presadili hibiskus ili ga preneli iz saksije u zemlju, gubitak pupoljaka te sezone je uobičajen — biljka usmerava energiju na oporavak korena, ne na cvetanje.</p>
      <p><strong>Rešenje:</strong> strpljenje. Sledeće sezone, kad se koren stabilizuje, cvetanje se vraća u punom obimu.</p>

      <h3>5. Previše azotnog đubriva</h3>
      <p>Isti princip kao kod hortenzije — azot podstiče bujan rast lišća na račun cvetova.</p>
      <p><strong>Rešenje:</strong> koristite đubrivo sa nižim udelom azota, a višim fosforom i kalijumom, koje podstiče cvetanje umesto samo lišća.</p>

      <h2>Zašto hibiskusu kasno liste u proleće — nema razloga za brigu</h2>
      <p>Ovo je jedan od najčešćih razloga za paniku kod vlasnika hibiskusa: dok sve ostalo u bašti već olista, hibiskus i dalje izgleda kao gole grančice. To je potpuno normalno — <strong>hibiskus je jedna od poslednjih biljaka koja kreće u vegetaciju</strong>, često tek u maju ili čak početkom juna.</p>
      <p>Pre nego što zaključite da je biljka uginula, savijte tanju granu — ako je savitljiva i ispod kore je zelena, hibiskus je živ i samo čeka svoje vreme.</p>

      <h2>Rezidba hibiskusa — kada i kako</h2>
      <p>Za razliku od hortenzije macrophylla koja cveta na starom drvetu (pa rezidba uništava pupoljke), <strong>hibiskus cveta na novom drvetu</strong> — na izbojcima tekuće sezone. To znači da rezidba ne samo da ne šteti cvetanju, nego ga podstiče.</p>
      <ul>
        <li><strong>Kada:</strong> krajem zime ili ranog proleća (februar–mart), pre kretanja vegetacije</li>
        <li><strong>Koliko:</strong> slobodno skratite grane i do trećine dužine — podstiče gušći rast i više cvetnih pupoljaka</li>
        <li><strong>Oblikovanje:</strong> rezidbom se hibiskus može formirati i kao malo drvo na jednom stablu, ne samo kao žbun</li>
      </ul>

      <h2>Sunce i zalivanje za obilno cvetanje</h2>
      <ul>
        <li><strong>Sunce:</strong> minimum 5–6 sati direktne svetlosti dnevno; više sunca = više cvetova</li>
        <li><strong>Zalivanje:</strong> redovno i umereno tokom cele sezone rasta, posebno u periodu cvetanja (jul–oktobar). Izbegavajte i sušu i stajaću vodu</li>
        <li><strong>Malč:</strong> sloj od 5–8 cm oko korena stabilizuje vlagu i smanjuje stres od naglih promena</li>
      </ul>

      <h2>Nega hibiskusa u brojkama</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Osobina</th><th>Vrednost</th></tr>
        </thead>
        <tbody>
          <tr><td>Sunce</td><td>Minimum 5–6 sati direktne svetlosti dnevno</td></tr>
          <tr><td>Zalivanje</td><td>Redovno, umereno — bez suše i bez stajaće vode</td></tr>
          <tr><td>Otpornost na mraz</td><td>Do -20°C</td></tr>
          <tr><td>Vreme cvetanja</td><td>Jul–oktobar, vrhunac u avgustu</td></tr>
          <tr><td>Rezidba</td><td>Februar–mart, do trećine dužine grana</td></tr>
          <tr><td>Visina</td><td>Do 2–3 metra (može se formirati i kao malo drvo)</td></tr>
        </tbody>
      </table>
      </div>

      <h2>Da li hibiskus podnosi srpske zime?</h2>
      <p>Da, i to znatno bolje nego što većina ljudi misli. Hibiscus syriacus podnosi mraz do oko <strong>-20°C</strong>, što pokriva gotovo celu teritoriju Srbije bez posebne zaštite. Mladu sadnicu u prvoj zimi ipak zaštitite malčom oko korena dok se dobro ne ukoreni.</p>

      <h2>Sadnja hibiskusa — gde i kada</h2>
      <p><strong>Pozicija:</strong> puno sunca, zaštićeno od jakog vetra.</p>
      <p><strong>Zemlja:</strong> plodna, dobro drenirana — ne podnosi stajaću vodu na korenu.</p>
      <p><strong>Vreme sadnje:</strong> proleće, kada prođu poslednji mrazevi.</p>
      <p>Hibiskus podjednako dobro uspeva posađen direktno u zemlju ili u većoj saksiji na terasi — samo u saksiji zahteva češće zalivanje jer se zemlja brže suši.</p>

      <h2>Česta pitanja o hibiskusu</h2>

      <h3>Zašto hibiskus gubi pupoljke pre nego što procvetaju?</h3>
      <p>Najčešće zbog stresa — neredovnog zalivanja, naglih promena temperature, premalo sunca ili nedavnog presađivanja. Stabilna nega i sunčana pozicija to rešavaju.</p>

      <h3>Zašto hibiskusu kasno liste u proleće?</h3>
      <p>To je normalno — hibiskus je jedna od poslednjih biljaka koja kreće u vegetaciju, često tek u maju. Nije znak da je uginuo.</p>

      <h3>Kada se reže hibiskus?</h3>
      <p>Krajem zime ili ranog proleća (februar–mart), pre kretanja vegetacije. Cveta na novom drvetu, pa rezidba podstiče, a ne uništava cvetanje.</p>

      <h3>Da li hibiskus podnosi mraz u Srbiji?</h3>
      <p>Da — otporan je do oko -20°C, što pokriva veći deo Srbije bez posebne zaštite.</p>

      <h3>Koliko sunca i vode treba hibiskusu?</h3>
      <p>Najmanje 5–6 sati direktnog sunca dnevno i redovno, umereno zalivanje — bez suše i bez stajaće vode.</p>

      <h3>Kada cveta hibiskus?</h3>
      <p>Od jula do oktobra, sa vrhuncem u avgustu.</p>

      <h2>Gde kupiti hibiskus u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo hibiskus spreman za sadnju u dvorište ili saksiju. Pogledajte <a href="/sadnice/hibiskus">stranicu hibiskusa</a> za aktuelne cene i dostupnost, ili nas pozovite na <a href="tel:+381638870837">063 88 70 837</a>.</p>
    `,
  },
  {
    id: 9,
    slug: 'katalpa-sadnja-i-nega',
    title: 'Katalpa – brzorastuće drvo za hlad u dvorištu: sadnja i nega',
    excerpt: 'Katalpa je brzorastuće ukrasno drvo sa ogromnim listovima i mirisnim belim cvetovima – savršeno za hlad u dvorištu. Saznajte kada i kako je saditi i šta je katalpa na štapu za manja dvorišta.',
    date: '2026-07-21',
    readTime: '7 min',
    category: 'Lišćari',
    image: '/images/katalpa.jpg',
    relatedSlugs: ['perene-za-bastu-srbija', 'magnolija-grandiflora-sadnja-i-nega', 'hibiskus-zasto-ne-cveta-nega'],
    faq: [
      {
        q: 'Koliko brzo raste katalpa?',
        a: 'Katalpa je brzorastuće drvo – naraste do 50 cm godišnje i vremenom dostiže i do 15 metara visine. Već posle nekoliko sezona pravi gust hlad zahvaljujući ogromnim srcolikim listovima.'
      },
      {
        q: 'Kada saditi katalpu?',
        a: 'Najbolje je saditi u proleće (mart–april), kada biljka ima celu vegetacijsku sezonu da se ukoreni pre zime. Rana jesen (septembar–početak oktobra) je takođe moguća, uz pažljivije zalivanje pred hladne mesece.'
      },
      {
        q: 'Da li katalpa podnosi mraz u Srbiji?',
        a: 'Da, otporna je na mraz do -15°C, što pokriva veći deo Srbije. U regionima sa oštrijim kontinentalnim zimama (severna Vojvodina) preporučuje se malčovanje korena mladih sadnica u prve dve zime.'
      },
      {
        q: 'Koliko prostora treba katalpi?',
        a: 'Standardna katalpa naraste do 15 metara visine sa širokom krošnjom, pa joj treba najmanje 5–6 metara razmaka od kuće, ograde i drugog drveća. Za manja dvorišta postoji katalpa na štapu (forma pendula) sa kompaktnom, kupolastom krošnjom od svega 2–3 metra.'
      },
      {
        q: 'Šta je katalpa na štapu?',
        a: 'To je kalemljena forma (Catalpa bignonioides "Nana") koja raste kao mali, uredan "kišobran" na jednom stablu, bez bujnog rasta u visinu. Idealna je kao soliter za manja dvorišta, terase i ulaze, gde standardna katalpa ne bi imala dovoljno prostora.'
      },
      {
        q: 'Koliko košta sadnica katalpe?',
        a: 'U Rasadniku Tilija cena katalpe počinje od 4.000 RSD, u zavisnosti od veličine i forme sadnice (standardna ili na štapu).'
      },
    ],
    content: `
      <p>Ako tražite drvo koje će za par godina napraviti gust hlad i privući poglede krupnim, srcolikim lišćem i mirisnim belim cvetovima, <strong>katalpa</strong> je jedan od najboljih izbora za srpske bašte i dvorišta. Brzo raste, nezahtevna je za negu, a postoji i u minijaturnoj formi za manja dvorišta i terase.</p>

      <p>U ovom vodiču objašnjavamo kako izgleda katalpa, kada i kako je saditi, koliko prostora joj treba i po čemu se razlikuje katalpa na štapu.</p>

      <h2>Šta je katalpa i zašto je posaditi?</h2>
      <ul>
        <li><strong>Ogromni srcoliki listovi</strong> — jedni od najkrupnijih među ukrasnim drvećem, prave gust hlad već posle par sezona</li>
        <li><strong>Mirisni beli cvetovi</strong> — bujno cveta u junu, cvetovi u grozdovima podsećaju na kestenove, beli sa žuto-ljubičastim mrljama u grlu</li>
        <li><strong>Brz rast</strong> — do 50 cm godišnje, brzo pravi senku i vizuelni efekat</li>
        <li><strong>Nezahtevna</strong> — dobro podnosi gradske uslove, zagađenje i različite tipove zemljišta</li>
      </ul>

      <h2>Kada saditi katalpu?</h2>
      <ul>
        <li><strong>Proleće (mart–april)</strong> — najbolji izbor, biljka ima celu sezonu da se ukoreni pre zime</li>
        <li><strong>Rana jesen (septembar–početak oktobra)</strong> — moguća, uz pažljivije zalivanje pred hladne mesece</li>
      </ul>
      <p>Sadnju po velikoj letnjoj vrućini izbegavajte — mlada katalpa u tom periodu teško nadoknađuje gubitak vlage.</p>

      <h2>Koliko prostora treba katalpi?</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Forma</th><th>Visina / širina krošnje</th><th>Potreban prostor</th></tr>
        </thead>
        <tbody>
          <tr><td>Standardna katalpa</td><td>do 15 m</td><td>najmanje 5–6 m od objekata i ograde</td></tr>
          <tr><td>Katalpa na štapu (pendula)</td><td>2–3 m, kupolasta krošnja</td><td>manja dvorišta, terase, uz stazu</td></tr>
        </tbody>
      </table>
      </div>

      <h2>Kako saditi katalpu — korak po korak</h2>
      <h3>1. Izbor mesta</h3>
      <p>Katalpa voli puno sunca, mada podnosi i blagu polusenku. Za standardnu formu ostavite dovoljno prostora da se krošnja slobodno razvije — ne sadite je uz zid ili blizu instalacija.</p>
      <h3>2. Priprema rupe</h3>
      <p>Iskopajte rupu dva puta širu i iste dubine kao busen korena. Katalpa voli plodnu, vlažnu zemlju — dodajte kompost ili zrelo stajsko đubrivo na dno rupe.</p>
      <h3>3. Sadnja</h3>
      <p>Postavite sadnicu tako da vrh busena bude u nivou okolnog tla. Zasipajte mešavinom iskopane zemlje i komposta, pa lagano sabijte oko stabla.</p>
      <h3>4. Zalivanje odmah nakon sadnje</h3>
      <p>Obilno zalijte odmah posle sadnje — bar 15–20 litara po biljci, s obzirom na veličinu lišća i potrebu za vlagom.</p>

      <h2>Nega katalpe</h2>
      <ul>
        <li><strong>Zalivanje:</strong> redovno, posebno prve dve godine i tokom leta — katalpa ne voli suvo tlo i brzo pokazuje stres na listovima</li>
        <li><strong>Rezidba:</strong> minimalna, samo uklanjanje suvih ili oštećenih grana krajem zime, pre kretanja vegetacije</li>
        <li><strong>Đubrenje:</strong> u proleće dodajte đubrivo za lišćare kako biste podržali brz rast</li>
      </ul>

      <h2>Katalpa na štapu — rešenje za manja dvorišta</h2>
      <p>Ako volite izgled katalpe ali nemate prostora za drvo od 15 metara, rešenje je <strong>katalpa na štapu</strong> — kalemljena forma koja raste kao uredan, kompaktan "kišobran" na jednom pravom stablu, bez bujnog rasta u visinu. Savršena je kao soliter pored ulaza, na terasi ili u manjem dvorištu, gde daje isti dekorativni efekat krupnog lišća bez potrebe za velikim prostorom.</p>

      <h2>Gde kupiti katalpu u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo katalpu u standardnoj i formi na štapu, cena od 4.000 RSD u zavisnosti od veličine. Vršimo dostavu i sadnju na terenu širom Srbije.</p>
      <p>Pozovite nas na <a href="tel:+381638870837">063 88 70 837</a> ili pogledajte stranicu <a href="/sadnice/katalpa">Katalpa</a> na našem sajtu.</p>
    `,
  },
  {
    id: 8,
    slug: 'lejlandi-sadnja-i-nega',
    title: 'Lejlandi – najbrža živa ograda u Srbiji: sadnja, nega i orezivanje',
    excerpt: 'Lejlandi je apsolutni šampion brzine rasta – i do 100 cm godišnje. Saznajte kada i kako ga saditi, koji razmak je optimalan za gustu ogradu, kako ga orezivati i na šta paziti da vam ne preraste dvorište.',
    date: '2026-07-16',
    readTime: '8 min',
    category: 'Četinari',
    image: '/images/lejlandinew.jpeg',
    relatedSlugs: ['najbrza-ziva-ograda-srbija', 'tuja-smaragd-sadnja-i-nega', 'lovor-visnja-sadnja-i-nega'],
    faq: [
      {
        q: 'Koliko brzo raste Lejlandi?',
        a: 'Lejlandi je najbrže rastuća biljka za živu ogradu u Srbiji – 60 do 100 cm godišnje, u idealnim uslovima i više. To je gotovo duplo brže od tuje Smaragd (20–35 cm/god) i brže od lovor višnje (40–60 cm/god).'
      },
      {
        q: 'Na kom razmaku saditi Lejlandi za gustu ogradu?',
        a: 'Za brzu, gustu ogradu sadite na 60 cm razmaka – puna ograda za 2 do 3 godine. Za standardnu živu ogradu dovoljan je razmak od 70–80 cm. Za slobodnostojeće vetrobrane – 100–150 cm.'
      },
      {
        q: 'Da li Lejlandi podnosi srpske zime?',
        a: 'Da, otporan je na mraz do -20°C, što pokriva sve klimatske zone u Srbiji. Mladim sadnicama se u prvoj zimi preporučuje malčovanje korena radi dodatne zaštite.'
      },
      {
        q: 'Kada i kako orezivati Lejlandi?',
        a: 'Orezujte 1–2 puta godišnje – krajem marta i po potrebi krajem avgusta – i to samo zeleni deo tekuće sezone. Važno: Lejlandi se, za razliku od nekih drugih četinara, ne obnavlja iz golog, starog drveta – ako ga zapustite i orežete duboko u smeđi deo, tu će ostati trajno ćelavo mesto.'
      },
      {
        q: 'Da li Lejlandi može da preraste dvorište i postane problem?',
        a: 'Može, ako se ne oreže godinama – po tome je poznat u inostranstvu, gde je zapušten narastao i po 10–15 m i izazivao sporove sa susedima. Rešenje je jednostavno: orezujte ga 1–2 puta godišnje od druge godine sadnje i držite ga na željenoj visini – tada je potpuno bezbedan i lak za održavanje izbor.'
      },
      {
        q: 'Koliko sadnica Lejlanda je potrebno za ogradu od 10 metara?',
        a: 'Sa razmakom od 70 cm, za 10 metara potrebno je oko 15 sadnica. Sa gušćim razmakom od 60 cm – oko 17–18 sadnica. Uvek kupite 1–2 rezervne.'
      },
    ],
    content: `
      <p>Ako želite živu ogradu koja će za samo dve do tri godine napraviti gust, neproziran zid od zelenila, teško da postoji brža opcija od <strong>Lejlanda</strong>. Ovaj hibridni čempres (<em>× Cuprocyparis leylandii</em>) je apsolutni šampion brzine rasta među ogradnim biljkama u Srbiji — i do 100 cm godišnje.</p>

      <p>U ovom vodiču objašnjavamo kada i kako saditi Lejlandi, koji razmak je optimalan, kako ga negovati i orezivati — i na šta obavezno paziti da vam ne "pobegne" i preraste dvorište.</p>

      <h2>Zašto izabrati Lejlandi?</h2>
      <ul>
        <li><strong>Najbrži rast</strong> — 60–100 cm godišnje, gotovo duplo brže od tuje Smaragd</li>
        <li><strong>Gust i zimzelen</strong> — tamnozelena boja tokom cele godine, potpuno neproziran zaklon</li>
        <li><strong>Odličan vetrobran</strong> — gusta krošnja prigušuje buku i štiti dvorište od vetra</li>
        <li><strong>Otporan na mraz</strong> — podnosi temperature do -20°C</li>
      </ul>

      <h2>Kada saditi Lejlandi?</h2>
      <ul>
        <li><strong>Proleće (mart–april)</strong> — biljka kreće u snažan rast već iste sezone</li>
        <li><strong>Jesen (septembar–oktobar)</strong> — zemlja je još topla, koren se razvija pre zime</li>
      </ul>
      <p>Sadnju po velikoj letnjoj vrućini (jul–avgust) izbegavajte. Ako morate saditi leti, obavezno zalivajte svaki drugi dan u prvim nedeljama.</p>

      <h2>Koji razmak između sadnica Lejlanda?</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Željeni efekat</th><th>Razmak između biljaka</th><th>Vreme do pune ograde</th></tr>
        </thead>
        <tbody>
          <tr><td>Brza, gusta ograda</td><td>60 cm</td><td>2–3 godine</td></tr>
          <tr><td>Standardna živa ograda</td><td>70–80 cm</td><td>3 godine</td></tr>
          <tr><td>Vetrobran / slobodnostojeće</td><td>100–150 cm</td><td>–</td></tr>
        </tbody>
      </table>
      </div>

      <h2>Kako saditi Lejlandi — korak po korak</h2>
      <h3>1. Priprema terena</h3>
      <p>Lejlandi voli duboko, dobro drenirano zemljište. Izbegavajte mesta sa stajaćom vodom — koren ne podnosi dugotrajnu vlagu.</p>
      <h3>2. Kopanje rupe</h3>
      <p>Iskopajte rupu <strong>dva puta širu i iste dubine</strong> kao busen korena. Na dno dodajte kompost ili đubrivo za četinare.</p>
      <h3>3. Sadnja</h3>
      <p>Postavite biljku tako da vrh busena bude u nivou okolnog tla. Zasipajte mešavinom iskopane zemlje i komposta, pa lagano sabijte oko stabla.</p>
      <h3>4. Zalivanje odmah nakon sadnje</h3>
      <p>Obilno zalijte odmah posle sadnje — bar 10–15 litara po biljci. Zbog brzog rasta, Lejlandi u prvoj godini troši više vode od sporijih četinara — zalivajte redovno u periodu bez kiše.</p>

      <h2>Nega Lejlanda tokom prve godine</h2>
      <ul>
        <li><strong>Zalivanje:</strong> redovno, posebno leti — brz rast znači i veću potrošnju vode.</li>
        <li><strong>Malčovanje:</strong> sloj malča debljine 5–8 cm oko stabla čuva vlagu i štiti mlad koren u prvoj zimi.</li>
        <li><strong>Đubrenje:</strong> u proleće dodajte đubrivo za četinare prema uputstvu, kako biste podržali intenzivan rast.</li>
      </ul>

      <h2>Orezivanje — najvažniji deo nege Lejlanda</h2>
      <p>Zbog brzine rasta, orezivanje kod Lejlanda nije opciono kao kod tuje — ono je obavezno ako želite ogradu pod kontrolom.</p>
      <ul>
        <li><strong>Kada:</strong> krajem marta/početkom aprila, i po potrebi ponovo krajem avgusta</li>
        <li><strong>Koliko:</strong> isključivo zeleni prirastak tekuće sezone</li>
        <li><strong>Pažnja:</strong> nikad ne sečite duboko u golo, smeđe drvo — Lejlandi, za razliku od nekih drugih četinara, ne obnavlja iglice iz starog drveta, pa tu ostaje trajno ćelavo mesto</li>
      </ul>

      <h2>Da li Lejlandi zaista može da postane problem?</h2>
      <p>Da, ali samo ako se zapusti. Lejlandi je u inostranstvu poznat po tome što je, zapušten i neorezivan godinama, znao da naraste 10–15 metara i izazove sporove sa susedima. Dobra vest je da se to lako izbegava: dovoljno je da ga orezujete jednom do dvaput godišnje počev od druge sezone sadnje. Uz redovno održavanje, Lejlandi ostaje uredna, gusta i potpuno bezbedna živa ograda željene visine — a upravo zato što raste tako brzo, greške u obliku se i najbrže isprave.</p>

      <h2>Cena i gde kupiti Lejlandi u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo Lejlandi u svim visinama — od mlađih sadnica za ekonomičnu sadnju, do krupnijih primeraka za brz efekat. Cena zavisi od visine sadnice — javite nam se za ponudu. Vršimo dostavu sadnica širom Srbije.</p>
      <p>Pozovite nas na <a href="tel:+381638870837">063 88 70 837</a> ili pogledajte stranicu <a href="/sadnice/lejlandi">Lejlandi</a> na našem sajtu.</p>
    `,
  },
  {
    id: 7,
    slug: 'perene-za-bastu-srbija',
    title: 'Perene za baštu – posadite jednom, uživajte godinama: kompletan vodič',
    excerpt: 'Posadite jednom – uživajte decenijama. Perene su biljke koje prezimljuju i vraćaju se svake sezone sve bujnije. Saznajte koje trajnice odabrati za sunce, senku i suva mesta u srpskim baštama, kada ih saditi i kako kombinovati za cvetanje od maja do oktobra.',
    date: '2026-06-30',
    readTime: '10 min',
    category: 'Perene',
    image: '/images/heuchera1.jpeg',
    relatedSlugs: ['hortenzija-nega-rezidba-cvetanje', 'maslina-uzgoj-sadnja-prezimljavanje-srbija', 'hibiskus-zasto-ne-cveta-nega'],
    faq: [
      {
        q: 'Šta su perene (trajnice)?',
        a: 'Perene su višegodišnje biljke čiji nadzemni deo u jesen ugine ili vene, ali koren ostaje živ ispod tla tokom zime i biljka se ponovo budi svake sezone. Posade se jednom i vraćaju godinama — obično postajući sve veće i bujnije sa svakom sezonom. Primeri su: Sedum, Hosta, Iris (perunika), Hemerocalis, Astilba i Heuchera.'
      },
      {
        q: 'Koje perene su najotpornije na mraz u Srbiji?',
        a: 'Gotovo sve perene koje se prodaju u srpskim rasadnicima su otporne na srpske zime. Najtvrđe su: Sedum (do -30°C), Hosta (do -30°C), Iris/perunika (do -25°C), Hemerocalis (do -25°C), Astilba (do -25°C) i Festuca glauca (do -30°C). Koren ostaje siguran ispod tla čak i u najtežim zimama.'
      },
      {
        q: 'Kada saditi perene u Srbiji?',
        a: 'Dva optimalna termina: proleće (mart–maj) kada biljka ima celu sezonu za razvoj korena i cvetanje iste godine, ili jesen (septembar–oktobar) kada je zemlja još topla od leta što omogućava razvoj korena pre mirovanja. Jesenji rok je posebno preporučljiv — biljka posađena u jesen je u proleće već ukorenjena i odmah kreće snažno u rast.'
      },
      {
        q: 'Koje perene mogu da rastu u senci ili polusenci?',
        a: 'Za senkovite uslove postoje odlične perene: Hosta je kruna senkovitih biljaka — dekorativni krupni listovi u senci cvetaju decenijama. Astilba cveta i u polusenki uz dovoljno vlage. Carex morrowi "Ice Dance" (ukrasna trava) raste lepo u senci. Heuchera preferiše polusincu. Izbegavajte Sedum, Iris i Festuca glauca u senci — bez sunca ne cvetaju.'
      },
      {
        q: 'Koje perene cvetaju najduže tokom sezone?',
        a: 'Hemerocalis (dnevni lalan) cveta od juna do septembra — gotovo tri meseca neprekidno, što ga čini prvakom u trajanju cvetanja. Sedum cveta od jula do oktobra i dekorativne glavice ostaju zimi. Za neprekidno cvetanje od maja do oktobra, kombinujte: Iris (maj–jun) + Hemerocalis (jun–sep) + Sedum (jul–okt) + Physostegia (avg–okt).'
      },
      {
        q: 'Da li perene treba deliti i kako?',
        a: 'Da — svake 3 do 5 godina preporučuje se deljenje busena perena. Biljka se iskopa u proleće ili jesen, koren se podeli na 2–4 dela lopaticom ili nožem, i svaki deo posadi posebno. Deljenje biljku podmlađuje i čini bujnijim cvetanje, a vi dobijate besplatne nove sadnice. Hosta, Sedum, Hemerocalis i Iris se odlično dele.'
      },
    ],
    content: `
      <p>Svake godine kupujete jednogodišnje biljke, sadite ih, a u septembru sve propadne. Sledeće godine — sve iznova. Postoji bolji put: <strong>perene</strong> ili trajnice — biljke koje se posade jednom, a vraćaju se svake sezone, sve veće i bujnije sa svakim prolećem.</p>

      <p>U srpskim baštama, perene su <strong>jedna od najpametnijih dugoročnih investicija</strong>. Razvijaju moćan koren koji nadživi i najtežu srpsku zimu, svake sezone šire se i cvetaju sve raskošnije — a vaš ulog ostaje isti: jednom posađeno. Ovaj vodič daje vam sve što treba da znate: šta su perene, koje su najpogodnije za srpske uslove, i kako ih posaditi, negovati i kombinovati za baštu koja cveta od maja do oktobra.</p>

      <h2>Šta su perene (trajnice) i po čemu se razlikuju od jednogodišnjih?</h2>
      <p>Perene (lat. <em>perennis</em> = višegodišnji) su biljke čiji nadzemni deo u jesen ugine ili vene, ali <strong>koren ostaje živ ispod tla tokom zime</strong> i biljka se ponovo budi svake sezone. Za razliku od jednogodišnjih koje treba obnavljati svake godine, perene se posade jednom i vraćaju godinama — često postajući sve veće i bujnije sa svakom sezonom.</p>

      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Tip biljke</th><th>Životni ciklus</th><th>Ulaganje</th><th>Primer</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Anuel (jednogodišnja)</strong></td>
            <td>1 sezona, pa propada</td>
            <td>Kupujete svake godine</td>
            <td>Nevena, Petunia</td>
          </tr>
          <tr>
            <td><strong>Bienel (dvogodišnja)</strong></td>
            <td>Cveta 2. godinu, pa propada</td>
            <td>Sadite svake 2 godine</td>
            <td>Digitalis, Verbascum</td>
          </tr>
          <tr>
            <td><strong>Perena (trajnica)</strong></td>
            <td>3+ godina (često 10–30+)</td>
            <td>Sadite jednom</td>
            <td>Sedum, Hosta, Iris</td>
          </tr>
        </tbody>
      </table>
      </div>

      <h2>Zašto birati perene za srpsku baštu?</h2>
      <ul>
        <li><strong>Ekonomičnost:</strong> posadite jednom — nema godišnjih troškova obnavljanja</li>
        <li><strong>Sve bolje sa godinama:</strong> perene se svake sezone šire i cvetaju sve bujnije, a ne slabije</li>
        <li><strong>Manje nege:</strong> kada se jednom ukorene, mnoge perene podnose sušu bez ikakvog zalivanja</li>
        <li><strong>Otpornost na mraz:</strong> koren ostaje siguran ispod tla i u najtežim srpskim zimama</li>
        <li><strong>Raznolikost:</strong> postoje perene za svaki ugao — puno sunce, duboka senka, suvo tlo, vlažno tlo, visoke, niske, cvetne, dekorativne listom</li>
        <li><strong>Besplatno množenje:</strong> svake 3–5 godina podelio koren i posadi na više mesta — dobijate nove biljke bez ikakvih troškova</li>
      </ul>

      <h2>Najpopularnije perene za srpske bašte</h2>

      <h3>1. Sedum (Dudnik) – za suva, sunčana mesta</h3>
      <p>Sedum je <strong>najotpornija perena za srpske uslove</strong> — podnosi sušu, jako sunce, siromašno tlo i mraz do -30°C bez ikakve zaštite. Mesnate, sočne listove koji zadržavaju vodu, a od jula do oktobra cveta u roze, crvenoj i žutoj boji. Idealalan za one koji ne žele da brinu o zalivanju.</p>
      <ul>
        <li><strong>Visina:</strong> 5–60 cm (zavisno od sorte)</li>
        <li><strong>Cvetanje:</strong> jul–oktobar (jedno od najdužih)</li>
        <li><strong>Pozicija:</strong> puno sunce, suvo do umereno vlažno, propusno tlo</li>
        <li><strong>Idealno za:</strong> kamenite vrtove, suve padine, zelenи krov, rubove bordura</li>
      </ul>
      <p>Najpopularnije sorte: <em>Sedum spectabile</em> (visoka, roze cvast, najtražena), <em>Sedum hybridum</em> (niska, žuto-zelena pokrivač tla), <em>Sedum Angelina</em> (zlatnožuta, intenzivna boja tokom cele sezone).</p>

      <h3>2. Hosta – kruna perena za senku</h3>
      <p>Ako imate senkovit ugao u dvorištu koji ne znate čime da popunite — <strong>hosta je odgovor</strong>. Nijedno lišće u bašti ne može se meriti sa hostinim krupnim, nabranim listovima u nijansama zelene, sivo-plave, zlatne i šarene. Cveta diskretno belim ili ljubičastim cvastima u julu, ali njena prava vrednost je u listu koji traje od proleća do mraza.</p>
      <ul>
        <li><strong>Visina:</strong> 20–80 cm (prečnik busena do 100 cm)</li>
        <li><strong>Cvetanje:</strong> jul–avgust (dekorativnost je prevashodno u listu)</li>
        <li><strong>Pozicija:</strong> delimična do puna senka, vlažno i bogato humusom tlo</li>
        <li><strong>Idealno za:</strong> ispod drveća, uz fasade bez sunca, vlažni kutci bašte</li>
      </ul>
      <p>Hosta je <strong>najtražnija perena za senku u Srbiji</strong>. Jednom zasađena, živi decenijama uz minimalno ulaganje i postaje sve veća. Posle 5–7 godina jedan busen može biti i pola metra u prečniku.</p>

      <h3>3. Iris (Perunika) – simbol srpske bašte</h3>
      <p>Perunika je gotovo simbol srpske bašte i kulture. Ogromni, raskošni cvetovi u ljubičastoj, beloj, plavoj, žutoj i šarenoj boji u maju i junu privlače sve poglede. Izuzetno je otporna na sušu i mraz — i gotovo bez potrebe za negom.</p>
      <ul>
        <li><strong>Visina:</strong> 40–90 cm</li>
        <li><strong>Cvetanje:</strong> maj–jun</li>
        <li><strong>Pozicija:</strong> puno sunce, dobro drenirano tlo, toleriše sušu</li>
        <li><strong>Idealno za:</strong> bordure, uz puteve, između greda, skupno u masama</li>
      </ul>
      <p>Iris se svake 3–4 godine mora podeliti — iskopajte rizome, podelite i posadite u više mesta. Umnožićete se bez ikakvih troškova, a biljka će ponovo cvasti obilno.</p>

      <h3>4. Hemerocalis (Dnevni lalan) – prvak u trajanju cvetanja</h3>
      <p>Hemerocalis ili dnevni lalan cveta od juna do septembra u narandžastoj, žutoj, crvenoj ili bledožutoj boji — <strong>gotovo tri meseca neprekidno</strong>, što ga čini prvakom u trajanju cvetanja od svih perena. Naziv dolazi od grčkih reči "dan" i "lepo" — svaki cvet živi jedan dan, ali biljka konstantno otvara nove tokom čitavog leta.</p>
      <ul>
        <li><strong>Visina:</strong> 40–80 cm</li>
        <li><strong>Cvetanje:</strong> jun–septembar (najduže od svih perena)</li>
        <li><strong>Pozicija:</strong> puno sunce do polusenka, tolerantna na razne tipove tla</li>
        <li><strong>Idealno za:</strong> bordure, mase, uz zidove i ograde</li>
      </ul>

      <h3>5. Astilba – lepota za vlažne i senkovite kutke</h3>
      <p>Astilba je neobična lepota srpskih bašti — perušasta, perjasta cvast u beloj, roze, crvenoj ili ljubičastoj boji, iznad finog, papratastog lišća. Jedna od retkih perena koja cveta obilno i u senci, pod uslovom da ima dovoljno vlage.</p>
      <ul>
        <li><strong>Visina:</strong> 30–90 cm</li>
        <li><strong>Cvetanje:</strong> jun–avgust</li>
        <li><strong>Pozicija:</strong> polusenka do senka, vlažno tlo (idealna uz ribnjake i potoke)</li>
        <li><strong>Idealno za:</strong> vlažni kutci bašte, uz vodu, u kombinaciji s hostom</li>
      </ul>

      <h3>6. Heuchera – boja u senci tokom cele sezone</h3>
      <p>Heuchera donosi nešto retko u svetu perena: <strong>dekorativno lišće tokom cele vegetativne sezone</strong> — od proleća do mraza. Listovi su u nijansama od tamnocrvene i ljubičaste, do zlatnozelene i šarene, što čini da bašta izgleda lepo čak i kada ništa ne cveta.</p>
      <ul>
        <li><strong>Visina:</strong> 20–45 cm</li>
        <li><strong>Cvetanje:</strong> maj–jul (sitni zvončići, ali dekorativnost je u listu)</li>
        <li><strong>Pozicija:</strong> polusenka (idealno), toleriše puno sunce uz više vlage</li>
        <li><strong>Idealno za:</strong> senkovite bordure, kontejneri, kombinacije s hostinim i astilbom</li>
      </ul>

      <h3>7. Physostegia – cveta kada sve ostalo prestaje</h3>
      <p>Physostegia alba i roze sorte su perena sa šiljatim klasovima cvetova koji podsećaju na šalviju ili dragun. Cveta kasno — od avgusta do oktobra — kada je većina bašte već izbledela. Upravo zbog toga je dragocena u svakoj kombinaciji.</p>
      <ul>
        <li><strong>Visina:</strong> 60–90 cm</li>
        <li><strong>Cvetanje:</strong> avgust–oktobar</li>
        <li><strong>Pozicija:</strong> puno sunce do polusenka, vlažnije tlo</li>
        <li><strong>Idealno za:</strong> pozadina bordure, kasno cvetanje, rezano cveće</li>
      </ul>

      <h3>8. Ukrasne trave – tekstura i pokret koji traje i zimi</h3>
      <p>Ukrasne trave su posebna kategorija perena — one ne cvetaju spektakularno, ali daju <strong>teksturu, pokret i zimski dekor</strong> koji cvetne perene ne mogu. Čak i pod snegom izgledaju lepo.</p>
      <ul>
        <li><strong>Festuca glauca</strong> (Plava trava) — srebrnoplavi jastučasti kertovi, 20–35 cm, puno sunce, suvo tlo. Savršena za kamenite vrtove.</li>
        <li><strong>Carex morrowi 'Ice Dance'</strong> — šarene belo-zelene trake, 20–30 cm, polusenka. Jedna od retkih ukrasnih trava koje podnose senku.</li>
        <li><strong>Pennisetum</strong> — nežne, perunaste cvasti od jula, 40–80 cm, puno sunce. Elegantan pokret na vetru.</li>
      </ul>

      <h2>Perene prema uslovima rasta – brzi pregled</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Perena</th><th>Sunce / Senka</th><th>Vlaga tla</th><th>Visina</th><th>Cvetanje</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Sedum</strong></td><td>Puno sunce</td><td>Suvo</td><td>5–60 cm</td><td>Jul–okt</td></tr>
          <tr><td><strong>Hosta</strong></td><td>Polusenka / senka</td><td>Vlažno</td><td>20–80 cm</td><td>Jul–avg</td></tr>
          <tr><td><strong>Iris (perunika)</strong></td><td>Puno sunce</td><td>Umereno / suvo</td><td>40–90 cm</td><td>Maj–jun</td></tr>
          <tr><td><strong>Hemerocalis</strong></td><td>Sunce / polusenka</td><td>Umereno</td><td>40–80 cm</td><td>Jun–sep</td></tr>
          <tr><td><strong>Astilba</strong></td><td>Polusenka / senka</td><td>Vlažno</td><td>30–90 cm</td><td>Jun–avg</td></tr>
          <tr><td><strong>Heuchera</strong></td><td>Polusenka</td><td>Umereno</td><td>20–45 cm</td><td>Maj–jul</td></tr>
          <tr><td><strong>Physostegia</strong></td><td>Sunce / polusenka</td><td>Vlažno</td><td>60–90 cm</td><td>Avg–okt</td></tr>
          <tr><td><strong>Festuca glauca</strong></td><td>Puno sunce</td><td>Suvo</td><td>20–35 cm</td><td>–</td></tr>
          <tr><td><strong>Carex 'Ice Dance'</strong></td><td>Polusenka / senka</td><td>Umereno</td><td>20–30 cm</td><td>–</td></tr>
        </tbody>
      </table>
      </div>

      <h2>Kada saditi perene?</h2>
      <p>Perene se mogu saditi gotovo tokom cele sezone, ali postoje dva optimalna termina:</p>
      <ul>
        <li><strong>Proleće (mart–maj)</strong> — biljka ima celu sezonu ispred sebe da razvije koren i procveta iste godine. Idealno za kupovinu prvih sadnica.</li>
        <li><strong>Jesen (septembar–oktobar)</strong> — <strong>zlatno vreme za perene</strong>. Zemlja je još topla od leta što podstiče razvoj korena pre zimskog mirovanja. Biljka posađena u jesen, u proleće je već ukorenjena i odmah kreće snažno u rast.</li>
      </ul>
      <p><strong>Izbegavajte</strong> sadnju po jakoj letnjo vrućini (jul–avgust) — stres od vrućine usporava ukorenjavanje. Ako morate leti, zasenite biljku prvih nedelju dana i zalivajte svakodnevno.</p>

      <h2>Kako posaditi perene – korak po korak</h2>
      <ol>
        <li><strong>Odaberite pravo mesto</strong> — proverite koji deo bašte prima sunce, a koji je u senci. Greška u izboru mesta je najčešći razlog neuspeha.</li>
        <li><strong>Pripremite tlo</strong> — iskopajte na 30–40 cm dubine i pomešajte sa kompostom ili baštenskom zemljom. Dobra drenaža je obavezna za sve perene osim onih za vlažno tlo (Astilba, Hosta).</li>
        <li><strong>Iskopajte rupu</strong> — duplo širu i jednako duboku kao saksija sadnice.</li>
        <li><strong>Postavite biljku</strong> — vrh saksije mora biti tačno u nivou okolnog tla, ne dublje.</li>
        <li><strong>Zatrpajte i sabijte</strong> — koristite mešavinu iskopane zemlje i komposta (odnos 2:1).</li>
        <li><strong>Zalijte obilno</strong> — odmah posle sadnje 5–10 litara po biljci.</li>
        <li><strong>Malčujte</strong> — sloj malča od 5–8 cm oko biljke zadržava vlagu i suzbija korov.</li>
      </ol>

      <h2>Nega perena – šta treba a šta ne</h2>

      <h3>Zalivanje</h3>
      <p>Prva sezona je najkritičnija — perene grade koren i potrebna im je redovna vlaga. Od druge i treće sezone, većina perena podnosi umerenu sušu bez ikakvog zalivanja (izuzev Astilbe i Hoste).</p>
      <ul>
        <li><strong>Prva sezona:</strong> jednom nedeljno u sušnim periodima</li>
        <li><strong>Od druge sezone:</strong> samo u dužim sušnim periodima (više od 2–3 nedelje bez kiše)</li>
        <li><strong>Hosta i Astilba:</strong> zahtevaju stalnu vlagu tla — ne smete ih prepustiti suši</li>
        <li><strong>Sedum i Iris:</strong> tolerišu duge sušne periode bez ikakve nege</li>
      </ul>

      <h3>Đubrenje</h3>
      <ul>
        <li><strong>Proleće (mart–april):</strong> lagano đubrivo za cvetnice ili opšte NPK. Sloj komposta oko biljke je dovoljan za skromne zahteve perena.</li>
        <li><strong>Jesen:</strong> ne đubrite — azot u jesen podstiče prirast koji mraz uništava.</li>
      </ul>

      <h3>Rezidba i čišćenje</h3>
      <ul>
        <li><strong>Jesen:</strong> suhe stabljike možete ostaviti tokom zime — dekorativne su pod snegom i daju stanište korisnim insektima.</li>
        <li><strong>Proleće (mart):</strong> uklonite suhe stabljike iz prošle sezone pre nego što biljka krene u novi rast.</li>
        <li><strong>Deljenje busena:</strong> svake 3–5 godina podelio koren perene i posadi na više mesta — biljka se podmlađuje, a vi dobijate besplatne sadnice.</li>
      </ul>

      <h2>Kombinacije perena za baštu koja cveta od maja do oktobra</h2>
      <p>Ključ privlačne bašte je kombinovanje biljaka tako da uvek nešto cveta. Rasporedite cvetanje prema kalendaru:</p>

      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Period</th><th>Perene koje cvetaju</th></tr>
        </thead>
        <tbody>
          <tr><td>Maj – jun</td><td>Iris (perunika)</td></tr>
          <tr><td>Jun – jul</td><td>Astilba, Heuchera, Hosta</td></tr>
          <tr><td>Jun – sep</td><td>Hemerocalis (najduže cvetanje)</td></tr>
          <tr><td>Jul – okt</td><td>Sedum</td></tr>
          <tr><td>Avg – okt</td><td>Physostegia (cveta kada sve ostalo prestane)</td></tr>
        </tbody>
      </table>
      </div>

      <p><strong>Primer za sunčanu borduru:</strong> Sedum Angelina (niski prednji red, cela sezona dekorativna) + Iris (srednji red, cveta u maju) + Hemerocalis (cveta celo leto) + Physostegia (pozadina, cveta u jesen).</p>
      <p><strong>Primer za senkovit kutak:</strong> Carex 'Ice Dance' (stalni dekor, i zimi) + Hosta (dekorativni listovi, polusenka–senka) + Astilba (cveta u polusenki, jun–avg).</p>

      <h2>Najčešće greške pri uzgoju perena</h2>
      <ul>
        <li><strong>Pogrešno mesto:</strong> Hosta na punom suncu žuti i pali. Sedum u senci ne cveta i propada. Uvek proverite zahteve za svetlom pre sadnje.</li>
        <li><strong>Preobilno zalivanje Seduma i Irisa:</strong> ove biljke vole suho tlo — previše vlage uzrokuje truljenje korena.</li>
        <li><strong>Đubrenje u jesen:</strong> azot podstiče mladi prirast koji mraz uništava. Đubrite isključivo u proleće i rano leto.</li>
        <li><strong>Previše gusto:</strong> perene se šire sa godinama — ostavite im prostor. Hosta naraste na 80+ cm prečnika; prezbijene biljke su podložnije bolestima.</li>
        <li><strong>Rezidba u jesen:</strong> suhe stabljike ostavljajte do proleća — štite koren i dekorativne su pod snegom. Secirajte ih tek u martu.</li>
      </ul>

      <h2>Gde kupiti perene u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo širok asortiman perena u kontejnerima — Sedum, Hosta, Iris, Hemerocalis, Astilba, Heuchera, Physostegia, Stachys, ukrasne trave i mnoge druge. Sve biljke su odabrane i testirane za srpske klimatske uslove i pogodne su za sadnju odmah.</p>
      <p>Vršimo dostavu sadnica širom Srbije i pružamo besplatan savet za svaki tip dvorišta i tipa tla. Kontaktirajte nas na <a href="tel:+381638870837">063 88 70 837</a> ili posetite stranicu <a href="/products">naših proizvoda</a> za aktuelni asortiman i cene.</p>
    `,
  },
  {
    id: 6,
    slug: 'maslina-uzgoj-sadnja-prezimljavanje-srbija',
    title: 'Maslina u Srbiji – uzgoj, sadnja i prezimljavanje: kompletan vodič',
    excerpt: 'Može li maslina da preživi srpsku zimu? Koje sorte su najotpornije na mraz? Sve o uzgoju maslina u Srbiji — sadnja, nega, prezimljavanje u saksiji i na otvorenom, i gde kupiti zdrave sadnice.',
    date: '2026-06-13',
    readTime: '9 min',
    category: 'Voćke i egzotično',
    image: '/images/maslina1.jpeg',
    relatedSlugs: ['hortenzija-nega-rezidba-cvetanje', 'katalpa-sadnja-i-nega', 'fotinija-red-robin-sadnja-i-nega'],
    faq: [
      {
        q: 'Može li maslina da prezimi u Srbiji?',
        a: 'Da — uz pravu sortu i zaštitu. Otporne sorte poput Leccino i Maurino podnose mraz do -12°C pa čak i do -15°C kada su u punoj zemlji i dobro ukorenjene. U Vojvodini i centralnoj Srbiji uz agrotekstil i malčovanje uspešno prezimljuju više od deset godina. Mlade biljke u prvoj i drugoj godini su osetljivije i preporučuje se unošenje u zaštićen prostor ili temeljno malčovanje korena.'
      },
      {
        q: 'Koje sorte masline su najpogodnije za uzgoj u Srbiji?',
        a: 'Najotpornije sorte za srpske uslove su Leccino (do -12°C, odlična za Srbiju), Maurino (do -12°C, samoplodna), Pendolino (do -10°C, dobra za oprašivanje) i Frantoio (do -10°C, visok prinos ulja). Izbegavajte mediteranske sorte poput Picual ili Arbequina — previše su osetljive na mraz za naše uslove.'
      },
      {
        q: 'Kada saditi maslinu u Srbiji?',
        a: 'Optimalno vreme za sadnju masline u Srbiji je proleće — od aprila do maja, kada nema više opasnosti od mraza. Jesenji termin (oktobar) je rizičniji jer mlade sadnice ne stignu da se dovoljno ukorene pre zime. Kontejnerske biljke mogu se saditi tokom cele sezone uz intenzivno zalivanje leti.'
      },
      {
        q: 'Da li maslina daje plodove u Srbiji?',
        a: 'Da — u toplijim krajevima Srbije (Vojvodina, Posavina, okolina Beograda) odrasle masline redovno daju plodove. Plodovi sazrevaju od oktobra do decembra. Prinos je manji nego u Mediteranu, ali kvalitet ulja je izuzetan. Za plodove je obično potrebna još jedna sorta za oprašivanje, ili biraju samoplodne sorte poput Maurino.'
      },
      {
        q: 'Kako prezimiti maslinu u saksiji?',
        a: 'Maslinu u saksiji pred zimu (od novembra) unesite u svetao, hladniji prostor — garažu sa prozorom, ostakljenu terasu ili zimsku baštu. Temperatura od 0°C do +8°C je idealna za mirovanje. Zalivajte jednom mesečno — tek toliko da zemlja ne bude potpuno suha. Nikako je ne ostavljajte u mrazevima ispod -5°C ako je u saksiji.'
      },
      {
        q: 'Koliko brzo raste maslina?',
        a: 'Maslina u Srbiji naraste 20–40 cm godišnje, zavisno od uslova. Sporo je rastuća u poređenju s ogradnim biljkama, ali izuzetno dugovečna — živi stotinama godina. Sadnice iz rasadnika obično su visine 60–120 cm i već imaju formiranu krošnju.'
      },
    ],
    content: `
      <p>Pre deset godina, sadnja masline u Srbiji zvučala je kao egzotičan eksperiment. Danas — masline rastu u dvorištima u Novom Sadu, Beogradu, pa čak i u Šumadiji. <strong>Topla leta i sve blaže zime</strong> otvorile su vrata Mediteranu na našim parcelama, a maslina je postala jedna od najtraženih biljaka u rasadnicima širom Srbije.</p>

      <p>Ali pre nego što kupite sadnicu, morate znati odgovor na ključno pitanje: <strong>koja sorta podnosi srpsku zimu, kako je posaditi i kako prezimleti?</strong> Ovaj vodič daje vam sve odgovore — bez romantizovanja i bez preskakanja loših vesti.</p>

      <h2>Može li maslina zaista da raste u Srbiji?</h2>
      <p>Kratak odgovor: <strong>da — uz pravu sortu i uz minimalnu zaštitu</strong>.</p>
      <p>Maslina (<em>Olea europaea</em>) je prirodno mediteranska biljka, ali postoje sorte koje su razvijale otpornost na mraz u planinskim oblastima Italije i Španije. Te sorte podnose temperature do <strong>-12°C pa i -15°C</strong> kada su:</p>
      <ul>
        <li>dobro ukorenjene (3+ godine u punoj zemlji),</li>
        <li>zaštićene malčom oko korena,</li>
        <li>zasađene na zaklonjenoj poziciji od hladnih severnih vetrova,</li>
        <li>i kada mraz traje kratko, bez dužeg perioda ispod -8°C.</li>
      </ul>
      <p>U Vojvodini, Posavini i Beogradu masline uspešno prezimljuju u otvorenom više od deset godina. U hladnijim krajevima Srbije (planinska područja, Šumadija) preporučuje se zaštita agrotekstilom ili uzgoj u saksiji.</p>

      <h2>Koje sorte maslina su pogodne za Srbiju?</h2>
      <p>Izbor sorte je <strong>najvažnija odluka</strong> pri kupovini masline. Pogrešna sorta znači gubitak u prvoj oštrijoj zimi.</p>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Sorta</th><th>Otpornost na mraz</th><th>Plodnost</th><th>Napomena</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Leccino</strong></td>
            <td>do -12°C / -15°C*</td>
            <td>Visoka</td>
            <td>Najpopularnija sorta za Srbiju, odlična za ulje</td>
          </tr>
          <tr>
            <td><strong>Maurino</strong></td>
            <td>do -12°C</td>
            <td>Visoka, samoplodna</td>
            <td>Ne treba joj oprašivač — idealna za jedno stablo</td>
          </tr>
          <tr>
            <td><strong>Pendolino</strong></td>
            <td>do -10°C</td>
            <td>Srednja</td>
            <td>Dobra kao oprašivač za Leccino i Frantoio</td>
          </tr>
          <tr>
            <td><strong>Frantoio</strong></td>
            <td>do -10°C</td>
            <td>Visoka</td>
            <td>Izvanredno ulje, ali osetljivija od Leccino</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p>*Otpornost do -15°C važi za dobro ukorenjene, odrasle biljke u punoj zemlji uz zaštitu korena malčom. Mlade sadnice su osetljivije.</p>
      <p><strong>Izbegavajte</strong> sorte Arbequina, Picual, Koroneiki i ostale mediteranske sorte — lepe su u katalogu, ali ne podnose srpske zime.</p>

      <h2>Gde saditi maslinu — pozicija je ključna</h2>
      <p>Maslina je biljka sunca — bez njega nema ni prirasta ni plodova. Ali pozicija ne utiče samo na rast, već i na preživljavanje zime.</p>
      <ul>
        <li><strong>Puno sunce:</strong> minimum 6–8 sati direktnog sunca dnevno. Južni ili jugozapadni deo dvorišta je idealan.</li>
        <li><strong>Zaklonjenost od vetra:</strong> hladni severni i severoistočni vetrovi (košava u Vojvodini) oštećuju biljku više od same temperature. Posadite je uz zid, ogradu ili u ugao koji blokira vetar.</li>
        <li><strong>Odlična drenaža:</strong> maslina ne podnosi stajaću vodu. Ako imate teško, glinasto tlo — popravite ga mešavinom šljunka i peska pre sadnje. Koren u vodi = trulost i sigurna smrt biljke.</li>
        <li><strong>Blizina zida:</strong> zid koji apsorbuje sunčevu toplotu i oslobađa je noću stvara mikroklimu nekoliko stepeni topliju od okoline — ovo može biti razlika između preživljavanja i propadanja u oštroj zimi.</li>
      </ul>

      <h2>Kada i kako posaditi maslinu</h2>

      <h3>Pravo vreme za sadnju</h3>
      <p><strong>Proleće (april–maj)</strong> je optimalni termin za sadnju masline u Srbiji. Biljka ima ceo topli period ispred sebe da razvije koren pre prve zime. Jesenji termin (oktobar) je rizičniji — mlade sadnice nemaju dovoljno vremena da se ukorene.</p>
      <p>Kontejnerske sadnice, kakve nudimo u rasadniku, mogu se saditi tokom cele sezone — ali leti je neophodno intenzivno zalivanje prvih mesec dana.</p>

      <h3>Korak po korak: sadnja masline</h3>
      <ol>
        <li><strong>Priprema rupe:</strong> iskopajte rupu duplo širu od saksije i jednako duboku. Na dno stavite sloj drenažnog materijala (šljunak, lom cigle) debljine 10 cm ako je tlo teže.</li>
        <li><strong>Zemlja:</strong> pomešajte izvađenu zemlju sa peskom i kompostom u omeru 2:1:1. Maslina voli lagano, propusno i blago alkalno tlo (pH 6,5–8).</li>
        <li><strong>Postavljanje sadnice:</strong> vrat korena mora biti u nivou tla — ne dublje. Duboka sadnja guši koren i uzrokuje bolesti.</li>
        <li><strong>Prvo zalivanje:</strong> odmah obilno zalijte — 15–20 litara. Voda mora prodreti do dna rupe i okvašiti sve korenje.</li>
        <li><strong>Malčovanje:</strong> rasporedite sloj kore bora ili šljunka (5–8 cm) oko stabla. Malč drži vlagu leti i štiti koren od mraza zimi — ne preskačite ovaj korak.</li>
      </ol>

      <h2>Nega masline — zalivanje i đubrenje</h2>

      <h3>Zalivanje</h3>
      <p>Maslina je sušootporna biljka — ali samo kada se jednom dobro ukoreni. U prvoj i drugoj godini nega je ključna:</p>
      <ul>
        <li><strong>Prva 1–2 godine:</strong> zalivajte jednom nedeljno u sušnim periodima, dva puta nedeljno u vrelom letu (iznad 35°C). Proverite vlagu prstom — zemlja u dubini od 5 cm ne sme biti potpuno suha.</li>
        <li><strong>Odrasle biljke:</strong> zalivanje jednom u 2–3 nedelje u sušnim letima. Maslina podnosi sušu bolje od gotovo svake druge voćke.</li>
        <li><strong>Zalivanje na bazi korena:</strong> izbegavajte kvašenje lišća — mokri listovi privlače gljivice.</li>
      </ul>

      <h3>Đubrenje</h3>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Period</th><th>Vrsta đubriva</th><th>Cilj</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Mart–april</td>
            <td>NPK bogat azotom (20-10-10 ili slično)</td>
            <td>Podsticanje prirasta i listanja</td>
          </tr>
          <tr>
            <td>Jun</td>
            <td>Uravnoteženo NPK (10-10-10)</td>
            <td>Podrška cvetanju i formiranju plodova</td>
          </tr>
          <tr>
            <td>Avgust</td>
            <td>Đubrivo bogato kalijumom (10-5-20)</td>
            <td>Učvršćivanje plodova i priprema za zimu</td>
          </tr>
          <tr>
            <td>Septembar–mart</td>
            <td>Bez đubrenja</td>
            <td>Biljka mora ući u zimski mir bez novog prirasta</td>
          </tr>
        </tbody>
      </table>
      </div>

      <h2>Prezimljavanje masline u Srbiji — kako zaštititi biljku</h2>
      <p>Ovo je najkritičniji deo uzgoja masline u Srbiji. Dobra zaštita u prvim godinama je razlika između uspeha i gubitka biljke.</p>

      <h3>Maslina u punoj zemlji (odrasla biljka)</h3>
      <ul>
        <li><strong>Malčovanje korena:</strong> od novembra rasporedite sloj malča (kora bora, suvo lišće) debljine 10–15 cm u prečniku 1 metar oko stabla. Ovo čuva toplotu tla i sprečava zamrzavanje korena.</li>
        <li><strong>Agrotekstil za krošnju:</strong> u prvoj i drugoj godini obmotajte krošnju agrotekstilom kada se najavljuju temperature ispod -8°C. Odrasle biljke otpornih sorti (Leccino, Maurino) ne treba obmotavati.</li>
        <li><strong>Ne zalijevajte pred mraz:</strong> vlažna zemlja zamrzne dublje i teže oštećuje koren. Pre prvog mraza zalijte obilno, a zatim obustavite zalivanje do proleća.</li>
        <li><strong>Ne orezujte u jesen:</strong> rezidbom podsičete novi prirast koji mraz lako uništava. Rezidba je isključivo prolećni posao (april–maj).</li>
      </ul>

      <h3>Maslina u saksiji — zimovanje u zatvorenom</h3>
      <p>Saksija ne pruža nikakvu izolaciju od mraza — pri -5°C spolja, zemlja u saksiji može biti -5°C i pri korenu. Zato je obavezno unošenje u zaštićen prostor:</p>
      <ul>
        <li><strong>Gde:</strong> svetla garaža, ostakljena terasa, zimska bašta ili svetao hodnik. Temperatura 0°C–+8°C je idealna.</li>
        <li><strong>Kada uneti:</strong> od novembra, pre prvih mrazeva. Iznesite je napolje tek u aprilu kada prođu kasni mrazevi.</li>
        <li><strong>Zalivanje:</strong> jednom mesečno, samo toliko da zemlja ne bude sasvim suva. Previše vode zimi = truljenje korena.</li>
        <li><strong>Svetlo:</strong> maslina u zimovanju treba svetlost — prozor koji ne prima direktno sunce je dovoljan, ali mrak ne podnosi dobro.</li>
      </ul>

      <h2>Rezidba masline</h2>
      <p>Maslina se reže <strong>jednom godišnje, u proleće (april–maj)</strong>, kada mineju kasni mrazevi. Cilj rezidbe je:</p>
      <ul>
        <li>provetrenost krošnje (maslina cveta i donosi plodove na mladim, jednogodišnjim granama),</li>
        <li>uklanjanje suvih, bolesnih i ukrštenih grana,</li>
        <li>oblikovanje krošnje u željeni oblik (loptast, čašast, ili slobodan).</li>
      </ul>
      <p>Nikada ne secirajte više od <strong>jedne trećine biljke</strong> odjednom. Maslina sporo zaceljuje rane — veće rane premazujte sredstvima za zaštitu rezova.</p>

      <h2>Da li maslina daje plodove u Srbiji?</h2>
      <p>Da — ali uz određene uslove. <strong>Plodovi se mogu očekivati od 4. do 5. godine</strong>, u toplijim krajevima Srbije (Vojvodina, Posavina, okolina Beograda i Niša). Sazrevaju od oktobra do decembra.</p>
      <p>Za dobar prinos plodova potrebno je:</p>
      <ul>
        <li><strong>Dve kompatibilne sorte</strong> za ukršteno oprašivanje (na primer, Leccino + Pendolino ili Leccino + Maurino). Ako imate mesta samo za jednu biljku — biraju samoplodnu sortu Maurino.</li>
        <li><strong>Dovoljno sunca</strong> — bez 6+ sati sunca, maslina raste ali ne donosi plodove.</li>
        <li><strong>Proleća bez kasnih mrazeva</strong> u aprilu — mraz u vreme cvetanja uništava rod.</li>
      </ul>
      <p>Prinos u Srbiji neće biti mediteranski, ali 5–15 kg plodova po stablu je realno od odrasle biljke u dobrim godinama.</p>

      <h2>Najčešće greške pri uzgoju masline u Srbiji</h2>
      <ul>
        <li><strong>Pogrešna sorta:</strong> mediteranske sorte (Arbequina, Picual) propadnu pri prvoj oštrijoj zimi. Uvek pitajte prodavca o otpornosti sorte na mraz.</li>
        <li><strong>Sadnja na mokrom terenu:</strong> koren masline ne podnosi vodu — odmah propada od truljenja. Drenaža je conditio sine qua non.</li>
        <li><strong>Ostaviti saksiju napolju zimi:</strong> čak i otporne sorte u saksiji stradaju ispod -5°C — saksija ne štiti koren kao puna zemlja.</li>
        <li><strong>Preobilno zalivanje:</strong> maslina je biljka suše. Više ludi vlaga nego suša — manje je više.</li>
        <li><strong>Đubrenje u jesen:</strong> azot u jesen tera novi prirast koji mraz uništava. Đubrite samo do avgusta.</li>
      </ul>

      <h2>Gde kupiti maslinu u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo sadnice masline u kontejnerima — sorte Leccino i Maurino, testirane za srpske uslove. Sadnice su visine 60–120 cm, sa formiranom krošnjom, pogodne za sadnju odmah. Vršimo dostavu sadnica širom Srbije.</p>
      <p>Kontaktirajte nas na <a href="tel:+381638870837">063 88 70 837</a> ili posetite stranicu <a href="/sadnice/maslina">masline u našem rasadniku</a> za aktuelnu ponudu i cene.</p>
    `,
  },
  {
    id: 5,
    slug: 'hortenzija-nega-rezidba-cvetanje',
    title: 'Hortenzija – zašto ne cveta i kako to popraviti: kompletan vodič',
    excerpt: 'Hortenzija ne cveta? Kriva je gotovo uvek pogrešna rezidba. Saznajte kada i kako rezati hortenziju, kako negovati, kako promeniti boju cvetova i kako je zaštititi zimi — sve na jednom mestu.',
    date: '2026-06-02',
    readTime: '8 min',
    category: 'Šiblje',
    image: '/images/hortenzija.jpeg',
    relatedSlugs: ['fotinija-red-robin-sadnja-i-nega', 'magnolija-grandiflora-sadnja-i-nega', 'hibiskus-zasto-ne-cveta-nega'],
    faq: [
      {
        q: 'Zašto hortenzija ne cveta?',
        a: 'Najčešći razlog je pogrešna rezidba — ako orežete hortenziju u jesen ili kasno proleće, uklonite pupoljke koji su se već formirali za sledeću godinu. Ostali razlozi su: previše azotnog đubriva (raste lišće, nema cvetova), premalo sunca, ili jak mraz koji je uništio pupoljke.'
      },
      {
        q: 'Kada se reže hortenzija?',
        a: 'Zavisi od vrste. Hortenzija macrophylla (mophead, klasična plava ili roze) cveta na starom drvetu i reže se samo lagano u proleće (april-maj) — uklonite suhe cvetove iznad prvog para zdravih pupoljaka. Hortenzija paniculata i arborescens cveta na novom drvetu i može se jače rezati u rano proleće (mart).'
      },
      {
        q: 'Kako promeniti boju hortenzije sa roze na plavu?',
        a: 'Boja hortenzije macrophylla zavisi od pH vrednosti zemljišta. Kiselo tlo (pH 4,5–5,5) daje plave cvetove, alkalno tlo (pH 6,5+) daje roze. Da biste dobili plavu boju, dodajte aluminijev sulfat ili koristite kiseli treset i đubrivo za azaleje. Efekat se vidi u sledećoj sezoni cvetanja.'
      },
      {
        q: 'Da li hortenzija podnosi mraz u Srbiji?',
        a: 'Hortenzija paniculata i arborescens su otporne do -30°C i bez zaštite prezimljuju u Srbiji. Hortenzija macrophylla je osetljivija (do -15°C) — pupoljci koji su se formirali u jesen mogu stradati od jakih mrazeva, što znači da naredne godine nema cvetova. U hladnijim krajevima Srbije preporučuje se zaštita agrotekstilom.'
      },
      {
        q: 'Koliko vode traži hortenzija?',
        a: 'Hortenzija je jedna od biljaka koja traži najviše vode — ime joj dolazi od grčke reči za vodu. U vrelim letima zalivajte 2-3 puta nedeljno, posebno prve 1-2 godine. Znak žeđi su spušteni listovi ujutru — ako se listovi oporavljaju do večeri, zalijte odmah. Malčovanje oko biljke značajno smanjuje gubitak vlage.'
      },
      {
        q: 'Kada cveta hortenzija?',
        a: 'Hortenzija macrophylla cveta od juna do septembra. Hortenzija paniculata cveta nešto kasnije — od jula do oktobra, a suvi cvetovi ostaju dekorativni i tokom zime. Hortenzija arborescens (bela, kuglasta) cveta od juna do avgusta.'
      }
    ],
    content: `
      <p>Hortenzija je jedna od najvoljenijih baštenskih biljaka — ogromne kugle cvetova u beloj, roze, ljubičastoj ili plavoj boji, od juna do oktobra. Ali mnogi vlasnici se suočavaju s istim problemom: <strong>biljka je zdrava, listaova ima puno, ali cvetova nema ili su retki</strong>.</p>

      <p>U 90% slučajeva, krivac je isti: <strong>pogrešna rezidba</strong>. U ovom vodiču objašnjavamo sve — kada i kako rezati, zašto boja cvetova zavisi od zemlje, i kako zaštititi hortenziju zimi da bi sledećeg leta procvetala kao nikad.</p>

      <h2>Vrste hortenzije — to nije sve isti cvet</h2>
      <p>Pre svega, morate znati koju vrstu hortenzije imate — jer se neguju drugačije:</p>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Vrsta</th><th>Izgled</th><th>Cvetanje</th><th>Rezidba</th><th>Otpornost</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Macrophylla</strong> (mophead)</td>
            <td>Klasične kugle, plava/roze/bela</td>
            <td>Jun–sep</td>
            <td>Samo lagana, u proleće</td>
            <td>do -15°C</td>
          </tr>
          <tr>
            <td><strong>Paniculata</strong></td>
            <td>Šiljasti grozdovi, bela→roze</td>
            <td>Jul–okt</td>
            <td>Jaka rezidba u mart</td>
            <td>do -30°C</td>
          </tr>
          <tr>
            <td><strong>Arborescens</strong></td>
            <td>Bele kugle, Annabelle</td>
            <td>Jun–avg</td>
            <td>Jaka rezidba u mart</td>
            <td>do -30°C</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p>Najčešća u srpskim baštama je <strong>macrophylla</strong> — ta klasična plava ili roze kugla. Upravo ona je i najčešće žrtva pogrešne rezidbe.</p>

      <h2>Zašto hortenzija ne cveta — pravi razlozi</h2>

      <h3>1. Pogrešna rezidba (najčešći razlog)</h3>
      <p>Hortenzija macrophylla cveta na <strong>starom drvetu</strong> — pupoljci za sledeću godinu formiraju se već u avgustu i septembru. Ako u jesen ili rano proleće orežete biljku "do žive grane", upravo ste uklonili sve pupoljke. Rezultat: zdrava biljka, puno lišća, nula cvetova.</p>
      <p><strong>Rešenje:</strong> lagana rezidba samo u kasno proleće (maj), isključivo suhih i mrzlim oštećenih grana, tik iznad prvog para zdravih pupoljaka.</p>

      <h3>2. Jak mraz uništio pupoljke</h3>
      <p>Čak i ako niste rezali, kasni prolećni mrazevi (april) mogu uništiti pupoljke koji su već počeli da se razvijaju. Biljka preživi, ali te godine nema cvetova.</p>
      <p><strong>Rešenje:</strong> u hladnijim krajevima Srbije, zaštitite biljku agrotekstilom u periodu mart–april dok ne prođu kasni mrazevi.</p>

      <h3>3. Previše azotnog đubriva</h3>
      <p>Azot podstiče rast lišća, ali inhibira cvetanje. Ako ste koristili opšte đubrivo bogato azotom (prvi broj NPK je visok), hortenzija će "trošiti" energiju na vegetativni rast.</p>
      <p><strong>Rešenje:</strong> koristite đubrivo sa niskim azotom i višim fosforom i kalijumom (stimuliše cvetanje). U proleće jednom, u junu jednom — to je dovoljno.</p>

      <h3>4. Premalo sunca</h3>
      <p>Hortenzija može da raste u polusenki, ali bez dovoljno svetlosti cvetanje je slabo. Minimum 4–5 sati direktnog sunca dnevno za dobro cvetanje.</p>

      <h2>Kako pravilno rezati hortenziju — prema vrsti</h2>

      <h3>Hortenzija macrophylla (plava/roze kugla)</h3>
      <ul>
        <li><strong>Kada:</strong> maj, posle poslednjih mrazeva, kada pupoljci počnu da se otvaraju</li>
        <li><strong>Šta rezati:</strong> samo suhe, smeđe grane — do poda ili do zelene grane</li>
        <li><strong>Koliko seći:</strong> suhe cvetove iz prošle godine režite tik iznad prvog para zdravih pupoljaka (ne niže)</li>
        <li><strong>Šta NE raditi:</strong> ne rezati u jesen, ne rezati sve do poda, ne rezati zelene grane sa pupoljcima</li>
      </ul>

      <h3>Hortenzija paniculata i arborescens</h3>
      <ul>
        <li><strong>Kada:</strong> mart, pre nego što biljka krene u vegetaciju</li>
        <li><strong>Šta rezati:</strong> može se rezati jako — i do 30 cm od tla — jer cveta na novom drvetu</li>
        <li><strong>Rezultat:</strong> jača rezidba = krupniji cvetovi (ali manje ih je); blaža rezidba = sitnih cvetovi ali više</li>
      </ul>

      <h2>Kako promeniti boju hortenzije — plava ili roze?</h2>
      <p>Boja hortenzije macrophylla nije genetski fiksirana — menja se u zavisnosti od <strong>pH vrednosti zemljišta</strong>:</p>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>pH zemljišta</th><th>Boja cveta</th><th>Kako postići</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>4,5 – 5,5 (kiselo)</td>
            <td><strong>Plava/ljubičasta</strong></td>
            <td>Aluminijev sulfat, kiseli treset, đubrivo za azaleje</td>
          </tr>
          <tr>
            <td>6,5+ (alkalno)</td>
            <td><strong>Roze/crvena</strong></td>
            <td>Kreč, dolomit</td>
          </tr>
          <tr>
            <td>Neutralno (~6)</td>
            <td>Ljubičasta/mešana</td>
            <td>Bez tretmana</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p><strong>Napomena:</strong> bele sorte ne menjaju boju bez obzira na pH. Promena boje se vidi u sledećoj sezoni — ne odmah.</p>

      <h2>Zalivanje hortenzije — koliko i kada</h2>
      <p>Hortenzija je "žedna" biljka. Naziv dolazi od grčke reči za vodu — nije slučajno. U letnjim mesecima:</p>
      <ul>
        <li><strong>Prva 1–2 godine:</strong> 2–3 puta nedeljno, posebno pri visokim temperaturama</li>
        <li><strong>Odrasle biljke:</strong> 1–2 puta nedeljno u toplim mesecima, zavisno od kiše</li>
        <li><strong>Znak žeđi:</strong> listovi se spuštaju ujutru — zalijte odmah, biljka se oporavlja do večeri</li>
        <li><strong>Malč:</strong> sloj od 5–8 cm kore bora oko biljke prepolovljuje potrebu za zalivanjem</li>
      </ul>
      <p>Zalivajte u podnožju biljke, ne po listu — mokri listovi su podložni gljivičnim bolestima.</p>

      <h2>Zimovanje hortenzije u Srbiji</h2>
      <p>Različite vrste imaju različitu otpornost na mraz:</p>
      <ul>
        <li><strong>Paniculata i arborescens:</strong> otporne do -30°C, bez zaštite. Suvi cvetovi mogu ostati do proleća — dekorativni su i zimi.</li>
        <li><strong>Macrophylla:</strong> sama biljka podnosi do -15°C, ali formirani pupoljci su osetljivi. U Vojvodini i centralnoj Srbiji — laganom agrotekstilom zaštitite krunu biljke od decembra do aprila.</li>
      </ul>
      <p>Nemojte rezati u jesen "da prezimiš" — to je najčešća greška. Ostavite sve grane do proleća, oni štite centar biljke od hladnoće.</p>

      <h2>Sadnja hortenzije — gde i kada</h2>
      <p><strong>Pozicija:</strong> jutarnje sunce + popodnevna senka je idealno za macrophylla. Paniculata podnosi i puno sunce.</p>
      <p><strong>Zemlja:</strong> kisela do neutralna (pH 5–6,5), bogata humusom, dobra drenaža. Na teškim glinenim tlima popravite drenažu peskom.</p>
      <p><strong>Vreme sadnje:</strong> proleće (april–maj) ili jesen (septembar–oktobar).</p>
      <p><strong>Razmak:</strong> 100–150 cm između biljaka za slobodnostojeće žbunove; 80 cm za živu ogradu od hortenzija.</p>

      <h2>Česta pitanja o hortenziji</h2>

      <h3>Zašto hortenzija ne cveta?</h3>
      <p>U 90% slučajeva — pogrešna rezidba. Hortenzija macrophylla cveta na starom drvetu, pa ako ste rezali u jesen ili kasno proleće, uklonili ste pupoljke. Ostali razlozi: jak mraz, previše azota, premalo sunca.</p>

      <h3>Kada se reže hortenzija?</h3>
      <p>Hortenzija macrophylla — samo lagano u maju, isključivo suhe grane. Hortenzija paniculata i arborescens — jaka rezidba u martu, jer cveta na novom drvetu.</p>

      <h3>Kako promeniti boju hortenzije sa roze na plavu?</h3>
      <p>Dodajte aluminijev sulfat ili kiseli treset u zemlju da snizite pH na 4,5–5,5. Koristite đubrivo za azaleje koje acidificira tlo. Promena boje se vidi u sledećoj sezoni.</p>

      <h3>Da li hortenzija podnosi mraz u Srbiji?</h3>
      <p>Paniculata i arborescens su otporne do -30°C i ne treba ih štititi. Macrophylla podnosi do -15°C, ali pupoljci su osetljivi — zaštitite agrotekstilom u hladnijim krajevima.</p>

      <h3>Koliko vode traži hortenzija?</h3>
      <p>Mnogo — 2–3 puta nedeljno leti u prvim godinama. Malč oko biljke smanjuje potrebu za zalivanjem. Znak žeđi su spušteni listovi ujutru.</p>

      <h3>Kada cveta hortenzija?</h3>
      <p>Macrophylla od juna do septembra. Paniculata od jula do oktobra. Arborescens (Annabelle) od juna do avgusta.</p>

      <h2>Gde kupiti hortenziju u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo hortenzije u kontejnerima — pogodne za sadnju tokom cele sezone. Pogledajte <a href="/sadnice/hortenzija">stranicu hortenzije</a> za aktuelne cene i veličine, ili nas pozovite na <a href="tel:+381638870837">063 88 70 837</a>.</p>
    `,
  },
  {
    id: 4,
    slug: 'fotinija-red-robin-sadnja-i-nega',
    title: 'Fotinija Red Robin – sadnja, nega i oblikovanje: kompletan vodič',
    excerpt: 'Fotinija Red Robin je zimzeleni žbun s vatreno crvenim listovima koji krasi baštu tokom cele godine. Saznajte kako je pravilno posaditi, negovati i oblikovati — od sadnje do rezidbe.',
    date: '2026-05-22',
    readTime: '8 min',
    category: 'Lišćari',
    image: '/images/fotinijanaslovna.jpeg',
    relatedSlugs: ['lejlandi-sadnja-i-nega', 'lovor-visnja-sadnja-i-nega', 'najbrza-ziva-ograda-srbija'],
    faq: [
      {
        q: 'Koliko brzo raste fotinija Red Robin?',
        a: 'U dobrim uslovima fotinija Red Robin naraste 30–50 cm godišnje. U prvoj godini rast je sporiji jer biljka usmerava energiju na razvoj korena.'
      },
      {
        q: 'Može li fotinija da prezimi bez zaštite u Srbiji?',
        a: 'Da. Fotinija Red Robin je otporna na mraz do -15°C, što je dovoljno za gotovo sve krajeve Srbije. Mlade sadnice u prvoj zimi možete dodatno zaštititi agrotekstilom ako se očekuju ekstremni mrazevi.'
      },
      {
        q: 'Zašto fotiniji listovi postaju smeđi?',
        a: 'Smeđi listovi najčešće znače prezasićenost vodom (loša drenaža), mraz oštećenje (mladi prolećni listovi su osetljivi) ili gljivičnu bolest. Proverite drenažu i po potrebi tretirajte fungicidom.'
      },
      {
        q: 'Koliko sadnica fotinija treba za ogradu od 10 metara?',
        a: 'Sa razmakom 60 cm, za 10 metara ograde potrebno je oko 17 sadnica. Uvek kupite 1–2 extra kao rezervu.'
      },
      {
        q: 'Da li fotinija cveta?',
        a: 'Da — fotinija Red Robin cveta u aprilu i maju belim cvastovima. Cvetanje je diskretno u poređenju sa crvenim listovima, ali mirisno i korisno za pčele.'
      },
    ],
    content: `
      <p>Kada u proleće iz rasadnika iznesemo nove sadnice fotinija i složimo ih u red, prolaznici uvek zastanu. Nije čudno — mladi listovi fotinija sijaju u narandžasto-crvenoj boji kao da gorе. Nijedna druga zimzelena biljka ne daje taj efekat vatre usred zelene bašte.</p>

      <p><strong>Fotinija Red Robin</strong> (<em>Photinia × fraseri 'Red Robin'</em>) je jedna od najtražnijih biljaka za živu ogradu i dekoraciju dvorišta u Srbiji. Zimzelena je, relativno brzorastuća, otporna na mraz i ne zahteva mnogo nege. U ovom vodiču objasnićemo vam sve — od izbora mesta do pravilne rezidbe — da biste od nje dobili maksimum.</p>

      <h2>Zašto fotinija Red Robin – šta je posebno kod ove biljke?</h2>
      <p>Fotinija Red Robin se razlikuje od svih ostalih ogradnih biljaka po jednoj stvari: <strong>vatreno crvenim mladim listovima</strong> koji se pojavljuju dva puta godišnje — u proleće i u jesen, nakon rezidbe. Stariji listovi postaju tamnozeleni i sjajni, što stvara efektan kontrast.</p>
      <ul>
        <li><strong>Zimzelena</strong> — ne gubi listove zimi, dvorište ostaje zeleno tokom cele godine</li>
        <li><strong>Dekorativna u svakom godišnjem dobu</strong> — crvena u proleće i jesen, tamnozelena leti i zimi</li>
        <li><strong>Otporna na mraz</strong> — podnosi temperature do -15°C bez problema</li>
        <li><strong>Brz rast</strong> — naraste 30–50 cm godišnje u dobrim uslovima</li>
        <li><strong>Lako se oblikuje</strong> — odlično podnosi rezidbu i česta orezivanja</li>
        <li><strong>Dostupna kao žbun i kao stablašica</strong> — može biti i niska ograda i ukrasno drvo</li>
      </ul>
      <p>Upravo ta kombinacija dekorativnosti i praktičnosti čini je jednom od najprodavanijih biljaka u našem rasadniku.</p>

      <h2>Gde saditi fotiniju Red Robin – sunce, senka i pozicija</h2>
      <p>Fotinija Red Robin razvija najintenzivniju crvenu boju listova na <strong>punom suncu</strong>. Može da raste i u polusenku, ali tada su crveni listovi manje upečatljivi, a rast sporiji.</p>
      <ul>
        <li><strong>Idealna pozicija:</strong> puno sunce ili blaga polusenka (4–6 sati direktnog sunca dnevno)</li>
        <li><strong>Zaštita od vetra:</strong> jaki zimski vetrovi mogu da oštete mlade listove — birajte zaštićenije mesto ako je moguće</li>
        <li><strong>Blizina zidova i ograda:</strong> fotinija dobro raste uz zidove koji reflektuju toplotu — ovo je posebno korisno u hladnijim krajevima Srbije</li>
        <li><strong>Zemlja:</strong> preferira dobro drenirano, blago kiselo do neutralno zemljište (pH 5,5–7). Loše podnosi stajaću vodu oko korena</li>
      </ul>

      <h2>Kada je pravo vreme za sadnju fotinija?</h2>
      <p>Fotinija Red Robin se može saditi gotovo tokom cele godine, ali postoje dva optimalna perioda:</p>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Period sadnje</th><th>Prednosti</th><th>Na šta obratiti pažnju</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Proleće (mart–april)</strong></td>
            <td>Biljka ulazi u vegetaciju, koren se brzo razvija</td>
            <td>Pojačano zalivanje u prvim nedeljama</td>
          </tr>
          <tr>
            <td><strong>Jesen (septembar–oktobar)</strong></td>
            <td>Zemlja je topla, koren se razvija pre zime</td>
            <td>Zaštita u prvoj zimi ako su sadnice male</td>
          </tr>
          <tr>
            <td><strong>Leto (jun–avgust)</strong></td>
            <td>Sadnice su dostupne, moguca je sadnja</td>
            <td>Obavezno intenzivno zalivanje, zaseniti prvih nedelju dana</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p>Naša preporuka za početnike: <strong>jesen je zlatno vreme</strong> za sadnju fotinija. Zemlja zadržava toplotu od leta, a biljka ima cele zime da razvije koren bez stresa od letnjih vrućina.</p>

      <h2>Kako posaditi fotiniju Red Robin – korak po korak</h2>

      <h3>1. Priprema rupe</h3>
      <p>Iskopajte rupu <strong>dva puta širu i iste dubine</strong> kao saksija sadnice. Na dno dodajte šaku komposta ili specijalnog đubriva za zimzelene biljke. Ne zasipajte dno debelim slojem — manje je više, koren treba da "traži" hranu i širi se.</p>

      <h3>2. Postavljanje sadnice</h3>
      <p>Izvadite sadnicu iz saksije i blago rastresite koren rukama ako je zbijen. Postavite je u rupu tako da je vrh saksije <strong>u nivou okolnog tla</strong> — ne dublje, ne pliće. Plitka sadnja je jedna od najčešćih grešaka.</p>

      <h3>3. Zatrpavanje i sabijanje</h3>
      <p>Zatrpajte mešavinom iskopane zemlje i komposta (odnos 2:1). Lagano sabijte stopalom oko stabljike i formirajte malo udubljenje koje će zadržavati vodu pri zalivanju.</p>

      <h3>4. Prvo zalivanje</h3>
      <p>Odmah nakon sadnje obilno zalijte — minimum <strong>10–15 litara po biljci</strong>. Voda treba da prodre do dna rupe i ovlaži sve korenje. Ovo je najvažniji korak pri sadnji — ne preskačite ga.</p>

      <h3>5. Malčovanje</h3>
      <p>Oko biljke rasporedite sloj malča (kora bora, kompost, lišće) debljine 5–8 cm. Malč čuva vlagu u zemlji, sprečava rast korova i štiti koren od mrazeva u prvoj zimi. Ostavite 10 cm prostora između malča i stabljike biljke.</p>

      <h2>Nega fotinija Red Robin – zalivanje, đubrenje i zemlja</h2>
      <p>Kada se fotinija jednom dobro ukoreni (obično posle prve godine), postaje relativno skromna biljka. Ali u prvoj godini, nega je ključna.</p>

      <h3>Zalivanje</h3>
      <ul>
        <li><strong>Prva godina:</strong> zalivajte 1–2 puta nedeljno u sušnim periodima, posebno leti. Kontejnerske biljke se brže suše od onih u punoj zemlji.</li>
        <li><strong>Odrasle biljke:</strong> zalivanje samo u dužim sušnim periodima (više od 3 nedelje bez kiše). Fotinija podnosi umerenu sušu kada se ukoreni.</li>
        <li><strong>Preterano zalivanje je opasno:</strong> gljivične bolesti (pepelnica, mrka pegavost) napadaju biljke kojima "mokre noge stoje u vodi". Voda treba da otiče, ne da se zadržava.</li>
      </ul>

      <h3>Đubrenje</h3>
      <ul>
        <li><strong>Proleće (mart–april):</strong> đubrivo za zimzelene biljke ili opšte đubrivo bogato azotom — podstiče rast novih crvenih izbojaka</li>
        <li><strong>Kasno leto (jul–avgust):</strong> đubrivo sa manje azota a više kalijuma — učvršćuje letnji prirast pre zime</li>
        <li><strong>Jesen i zima:</strong> ne đubrite — podsticanje rasta pred mraz slabi biljku</li>
      </ul>

      <h2>Rezidba fotinija Red Robin – kada i kako se reže?</h2>
      <p>Rezidba fotinija ima dvostruku svrhu: oblikovanje i podsticanje novih crvenih listova. Svaki put kada orežete fotiniju, ona odgovara novim vatreno crvenim izbojcima — ovo je njena najatraktivnija karakteristika.</p>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Vreme rezidbe</th><th>Kada tačno</th><th>Cilj</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Prolećna rezidba</strong></td>
            <td>April–maj, posle mraza</td>
            <td>Oblikovanje, podsticanje prirasta</td>
          </tr>
          <tr>
            <td><strong>Letnja rezidba</strong></td>
            <td>Jun–jul</td>
            <td>Kontrola oblika, drugi talas crvenih listova</td>
          </tr>
          <tr>
            <td><strong>Izbegavati</strong></td>
            <td>Posle avgusta</td>
            <td>Novi izbojci ne stignu da očvrsnu pre mraza</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p><strong>Koliko orezivati?</strong> Nikada više od jedne trećine biljke odjednom. Koristite oštre, sterilne makaze ili motorne škare za živu ogradu. Tupim alatom pravite rane koje su ulazna tačka za bolesti.</p>

      <h2>Fotinija kao živa ograda – razmak i broj sadnica</h2>
      <p>Fotinija Red Robin je izvrsna biljka za formalnu živu ogradu visine 1–2 metra.</p>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Tip ograde</th><th>Razmak između biljaka</th><th>Visina sadnice</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Gusta formalna ograda</td>
            <td>50–60 cm</td>
            <td>60–80 cm</td>
          </tr>
          <tr>
            <td>Standardna ograda</td>
            <td>70–80 cm</td>
            <td>80–100 cm</td>
          </tr>
          <tr>
            <td>Slobodnostojeći žbunovi</td>
            <td>100–120 cm</td>
            <td>Bilo koja visina</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p>Primer: za ogradu dužine 10 metara sa razmakom 60 cm, potrebno je oko <strong>17 sadnica</strong>. Uvek kupite 1–2 extra kao rezervu.</p>
      <p>Pogledajte naše <a href="/sadnice/fotinija-red-robin">sadnice fotinija u različitim visinama</a>.</p>

      <h2>Najčešće greške pri uzgoju fotinija</h2>
      <ul>
        <li><strong>Sadnja na mokrom terenu:</strong> zemlja koja zadržava vodu dovodi do truljenja korena i gljivičnih bolesti. Popravite drenažu pre sadnje.</li>
        <li><strong>Preskakanje zalivanja u prvoj godini:</strong> fotinija izgleda zdravo i onda odjednom uvene — ovo je najčešće zbog sušnog stresa u prvom letu. Pratite je dosledno.</li>
        <li><strong>Rezidba posle avgusta:</strong> novi mladi listovi koje podstiče kasna rezidba nemaju vremena da očvrsnu, i mraz ih uništi. Poslednja rezidba treba biti do kraja jula.</li>
        <li><strong>Preplitka ili preduboka sadnja:</strong> koren u prvom slučaju isplivava iz zemlje, u drugom se guši. Vrh saksije uvek mora biti tačno u nivou tla.</li>
      </ul>

      <h2>Gde kupiti fotiniju Red Robin u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo fotiniju Red Robin u svim visinama — od malih kontejnerskih sadnica (40–60 cm) do krupnih biljaka (120–150 cm) spremnih za trenutni efekat. Dostavljamo sadnice širom Srbije i pružamo besplatan savet za svaki tip dvorišta.</p>
      <p>Posetite stranicu <a href="/sadnice/fotinija-red-robin">fotinija Red Robin</a> ili nas kontaktirajte na <a href="tel:+381638870837">063 88 70 837</a>.</p>
    `,
  },
  {
    id: 3,
    slug: 'lovor-visnja-sadnja-i-nega',
    title: 'Lovor Višnja – sadnja, nega i brzina rasta: kompletan vodič',
    excerpt: 'Lovor višnja raste i do 60 cm godišnje i ostaje zimzelena cele godine. Saznajte kada je saditi, koji razmak koristiti i kako je negovati za gustu, zdravu ogradu.',
    date: '2026-05-19',
    readTime: '6 min',
    category: 'Lišćari',
    image: '/images/lovormarakana.PNG',
    relatedSlugs: ['najbrza-ziva-ograda-srbija', 'lejlandi-sadnja-i-nega', 'tuja-smaragd-sadnja-i-nega'],
    faq: [
      {
        q: 'Koliko brzo raste lovor višnja?',
        a: 'Lovor višnja u proseku naraste 40–60 cm godišnje, zavisno od sorte i uslova. Sorta Rotundifolia je najbrža i može narasti i do 60 cm godišnje.'
      },
      {
        q: 'Da li je lovor višnja otrovana?',
        a: 'Da — listovi, semena i plodovi lovor višnje sadrže cijanogene glikozide koji su toksični za ljude i životinje. Biljka je bezbedan za spoljašnju sadnju, ali treba izbegavati kontakt sa sokom i sprečiti decu i kućne ljubimce da žvaću listove ili plodove.'
      },
      {
        q: 'Kada saditi lovor višnju?',
        a: 'Optimalno vreme je proleće (mart–april) ili jesen (septembar–oktobar). Kontejnerske sadnice mogu se saditi tokom cele godine, ali leti je potrebno pojačano zalivanje.'
      },
      {
        q: 'Koliko lovor višanja treba za ogradu od 10 metara?',
        a: 'Sa razmakom 60 cm, za 10 metara ograde potrebno je oko 17 sadnica. Za gušću ogradu sa razmakom 50 cm — oko 21 sadnica.'
      },
      {
        q: 'Da li lovor višnja raste u senci?',
        a: 'Da — lovor višnja je jedna od retkih ogradnih biljaka koja dobro raste i u delimičnoj i punoj senci. Ovo je jedna od njenih najvećih prednosti za dvorišta sa malo sunca.'
      },
    ],
    content: `
      <p>Kada kupci dođu u naš rasadnik i pitaju „šta je dobro za živu ogradu koja brzo raste i lepo izgleda celu godinu?" — odgovor koji najčešće dajemo je <strong>lovor višnja</strong>. I to nije slučajno.</p>

      <p>Lovor višnja (<em>Prunus laurocerasus</em>) je zimzeleni žbun koji osvaja svakoga ko ga posadi: krupni, sjajni listovi, kompaktan rast, otpornost na hladnoću i suše, i sposobnost da za samo nekoliko godina napravi gustу, neprobojnu ogradu. U ovom tekstu ćemo vam objasniti sve što treba da znate pre sadnje.</p>

      <h2>Zašto je lovor višnja tako popularna?</h2>
      <ul>
        <li><strong>Zimzelena</strong> — zadržava zelene listove tokom cele godine, i leti i zimi</li>
        <li><strong>Brz rast</strong> — u dobrim uslovima naraste i do 40–60 cm godišnje</li>
        <li><strong>Gusta krošnja</strong> — formira čvrstu, neprobojnu ogradu koja efikasno skriva dvorište</li>
        <li><strong>Otporna na hladnoću</strong> — podnosi mraz do -20°C bez oštećenja</li>
        <li><strong>Niska održavanja</strong> — nije zahtevna po pitanju đubrenja i zalivanja kada se ukoreni</li>
        <li><strong>Otporna na zasenu</strong> — raste dobro čak i u delimičnoj senci, što je retko kod ogradnih biljaka</li>
      </ul>

      <h2>Sorte lovor višnje — koja je prava za vas?</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Sorta</th><th>Visina</th><th>Rast</th><th>Primena</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Rotundifolia</strong></td><td>do 5 m</td><td>brz, do 60 cm/god</td><td>visoke ograde, zakloni</td></tr>
          <tr><td><strong>Caucasica</strong></td><td>do 4 m</td><td>srednji, do 40 cm/god</td><td>standardne ograde</td></tr>
          <tr><td><strong>Etna</strong></td><td>do 3 m</td><td>usporeniji</td><td>manje parcele, saksije</td></tr>
          <tr><td><strong>Otto Luyken</strong></td><td>do 1 m</td><td>spor, kompaktan</td><td>niski pokrivači tla</td></tr>
        </tbody>
      </table>
      </div>
      <p>Za standardnu živu ogradu u Srbiji, najčešće preporučujemo sortu <strong>Rotundifolia</strong> ili <strong>Caucasica</strong>.</p>

      <h2>Kada saditi lovor višnju?</h2>
      <ul>
        <li><strong>Proleće (mart–april)</strong> — biljka ima ceo vegetativni period ispred sebe da razvije koren pre prve zime.</li>
        <li><strong>Jesen (septembar–oktobar)</strong> — zemlja je još topla od leta, što podstiče razvoj korena pre mirovanja tokom zime.</li>
      </ul>

      <h2>Koji razmak pri sadnji?</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Željeni efekat</th><th>Razmak između biljaka</th><th>Vreme do pune ograde</th></tr>
        </thead>
        <tbody>
          <tr><td>Gusta, kompaktna ograda</td><td>50–60 cm</td><td>2–3 godine</td></tr>
          <tr><td>Standardna ograda</td><td>70–80 cm</td><td>3–4 godine</td></tr>
          <tr><td>Ekonomična sadnja</td><td>90–100 cm</td><td>4–5 godina</td></tr>
        </tbody>
      </table>
      </div>

      <h2>Korak po korak: kako pravilno posaditi lovor višnju</h2>
      <ol>
        <li><strong>Odaberite mesto</strong> — lovor višnja podnosi puno sunce, ali i polusenku. Izbegavajte mesta sa stalnom vodom u tlu.</li>
        <li><strong>Iskopajte rupu</strong> — duplo širu i jednako duboku kao saksija u kojoj je biljka kupljena.</li>
        <li><strong>Obogatite zemlju</strong> — pomešajte izvađenu zemlju sa zrelim kompostom ili baštenskom zemljom u omeru 1:1.</li>
        <li><strong>Postavite biljku</strong> — vrat korena treba da bude u nivou zemlje, ne dublje.</li>
        <li><strong>Zalijte obilno</strong> — odmah nakon sadnje, dobro namočite zemlju oko korena.</li>
        <li><strong>Mulčirajte</strong> — stavite sloj kore ili šljunka oko biljke (5–8 cm) da zadržite vlagu i sprečite korov.</li>
      </ol>

      <h2>Nega u prvoj godini</h2>
      <ul>
        <li><strong>Zalivanje:</strong> jednom nedeljno (češće za vreme suše). Kad se ukoreni — jednom u 2–3 nedelje ili po potrebi.</li>
        <li><strong>Đubrenje:</strong> u proleće dodajte đubrivo za zimzelene biljke. Ponovite u junu.</li>
        <li><strong>Zaštita zimi:</strong> mlade biljke (prvu zimu) možete lagano zaštititi agrotekstilom ako se očekuju jaki mrazevi ispod -15°C.</li>
      </ul>

      <h2>Koliko brzo raste lovor višnja?</h2>
      <p>U proseku, zdrava lovor višnja naraste <strong>30–60 cm godišnje</strong>, zavisno od sorte, tipa tla i količine vode. Sadnica visine 80–100 cm može za 3–4 godine postati ograda od 2+ metra.</p>

      <h2>Kupite lovor višnju u Rasadniku Tilija</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) uvek imamo na stanju lovor višnju u različitim visinama — od 40 cm do 150+ cm sadnica. Vršimo dostavu sadnica širom Srbije.</p>
      <p>Kontaktirajte nas na <a href="tel:+381638870837">063 88 70 837</a> ili pogledajte <a href="/sadnice/lovor-visnja">stranicu lovor višnje</a> za aktuelne cene i raspoloživost.</p>
    `,
  },
  {
    id: 2,
    slug: 'tuja-smaragd-sadnja-i-nega',
    title: 'Tuja Smaragd – Sve što treba da znate o sadnji i nezi',
    excerpt: 'Tuja Smaragd je najpopularnija ogradna biljka u Srbiji. Saznajte kada i kako je saditi, koji razmak je optimalan, kako je negovati i zašto je toliko tražena — sve na jednom mestu.',
    date: '2026-05-16',
    readTime: '7 min',
    category: 'Četinari',
    image: '/images/tujavelika.jpeg',
    relatedSlugs: ['zasto-tuja-zuti-i-susi-se', 'najbrza-ziva-ograda-srbija', 'lejlandi-sadnja-i-nega'],
    faq: [
      {
        q: 'Koliko brzo raste Tuja Smaragd?',
        a: 'Tuja Smaragd naraste prosečno 20–35 cm godišnje. Sporije je od lovor višnje i čempresa, ali zadržava pravilni piramidalni oblik bez orezivanja.'
      },
      {
        q: 'Na koliko razmaka saditi tuje za živu ogradu?',
        a: 'Za gustu, kompaktnu ogradu sadite na 40–50 cm razmaka. Za standardnu ogradu — 50–60 cm. Za slobodnostojeće biljke — 80–100 cm.'
      },
      {
        q: 'Da li Tuja Smaragd podnosi mraz?',
        a: 'Da — Tuja Smaragd je otporna na mraz do -30°C, što je odlično za sve klimatske zone u Srbiji. Jedna je od najotpornijih ogradnih biljaka.'
      },
      {
        q: 'Da li tuju treba orezivati?',
        a: 'Tuja Smaragd zadržava pravilni piramidalni oblik bez orezivanja. Ako želite gušću ogradu ili kontrolisanu visinu, možete je orezivati krajem marta ili krajem avgusta — ali nije obavezno.'
      },
      {
        q: 'Koliko sadnica tuje treba za ogradu od 10 metara?',
        a: 'Sa razmakom 50 cm, za 10 metara ograde potrebno je 21 sadnica. Sa razmakom 60 cm — oko 17 sadnica. Uvek kupite 2–3 rezervne.'
      },
    ],
    content: `
      <p>Ako ste ikada tražili savršenu biljku za živu ogradu, verovatno ste čuli za <strong>Tuju Smaragd</strong>. Uska, uvek zelena, pravilnog oblika — i gotovo bez potrebe za orezivanjem. Nije slučajno što je ovo najprodavanija biljka u našem rasadniku već godinama.</p>

      <p>U ovom tekstu dajemo vam sve što treba da znate pre sadnje: kada saditi, koji razmak, kako negovati i koje greške da izbegnete.</p>

      <h2>Zašto je Tuja Smaragd tako popularna?</h2>
      <ul>
        <li><strong>Uzak, piramidalni habitus</strong> — ne širi se u stranu, ostaje kompaktna čak i bez orezivanja</li>
        <li><strong>Zimzelena</strong> — zadržava svetlozelenu boju tokom cele godine, uključujući i zimu</li>
        <li><strong>Otporna na mraz</strong> — podnosi temperature do -30°C, savršena za srbijanske zime</li>
        <li><strong>Dugovečna</strong> — živi 50–100 godina uz minimalno ulaganje</li>
      </ul>

      <h2>Kada saditi Tuju Smaragd?</h2>
      <ul>
        <li><strong>Proleće (mart–april)</strong> — biljka ima celo vegetacijsko razdoblje ispred sebe da učvrsti koren pre zime. Ovo je naš prvi izbor.</li>
        <li><strong>Jesen (septembar–oktobar)</strong> — zemlja je još topla, što podstiče razvoj korena. Biljka se dobro priprema za zimu.</li>
      </ul>
      <p>Sadnju leti (jul–avgust) treba izbegavati zbog visokih temperatura. Ako morate leti, obavezno navodnjavanje svakog drugog dana u prvim nedeljama.</p>

      <h2>Koji razmak između tuja?</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Željeni efekat</th><th>Razmak između biljaka</th><th>Vreme do pune ograde</th></tr>
        </thead>
        <tbody>
          <tr><td>Gusta, kompaktna ograda</td><td>40–50 cm</td><td>3–4 godine</td></tr>
          <tr><td>Standardna ograda</td><td>50–60 cm</td><td>4–5 godina</td></tr>
          <tr><td>Slobodnostojeće biljke</td><td>80–100 cm</td><td>–</td></tr>
        </tbody>
      </table>
      </div>

      <h2>Kako saditi Tuju Smaragd — korak po korak</h2>
      <h3>1. Priprema terena</h3>
      <p>Tuja Smaragd se dobro snalazi na gotovo svim tipovima zemljišta, ali idealno je blago kiselo do neutralno tlo (pH 5,5–7). Izbegavajte mesta sa stajaćom vodom.</p>
      <h3>2. Kopanje rupe</h3>
      <p>Iskopajte rupu <strong>dva puta širu i iste dubine</strong> kao saksija ili busen korena. Na dno dodajte malo komposta ili đubriva za četinare.</p>
      <h3>3. Sadnja</h3>
      <p>Postavite biljku u rupu tako da vrh saksije bude u nivou okolnog tla — ne dublje. Zasipajte mešavinom iskopane zemlje i komposta, lagano sabijte oko stabla.</p>
      <h3>4. Zalivanje odmah nakon sadnje</h3>
      <p>Obilno zalijte odmah posle sadnje — bar 10 litara po biljci. U prvim nedeljama zalivajte svakih 2–3 dana ako nema kiše.</p>

      <h2>Nega Tuje Smaragd tokom prve godine</h2>
      <ul>
        <li><strong>Zalivanje:</strong> redovno u periodu bez kiše, posebno leti.</li>
        <li><strong>Malčovanje:</strong> sloj malča (kora bora, piljevina) debljine 5–8 cm oko stabla. Čuva vlagu i sprečava rast korova.</li>
        <li><strong>Đubrenje:</strong> u proleće (april–maj) dodajte đubrivo za četinare prema uputstvu. Jesenas ne đubrite.</li>
      </ul>

      <h2>Da li tuju treba orezivati?</h2>
      <p>To je jedna od njenih najvećih prednosti — Smaragd zadržava pravilni piramidalni oblik bez orezivanja. Ako ipak želite gušću ogradu:</p>
      <ul>
        <li><strong>Kada:</strong> kraj marta/početak aprila ili kraj avgusta/početak septembra</li>
        <li><strong>Koliko:</strong> nikad u staro, tamno drvo — samo zeleni prirastak iz tekuće sezone</li>
      </ul>

      <h2>Gde kupiti Tuju Smaragd u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) nudimo Tuju Smaragd u više visina — od manjih sadnica za ekonomičnu sadnju, do krupnih primeraka za trenutni efekat. Vršimo dostavu sadnica širom Srbije.</p>
      <p>Pozovite nas na <a href="tel:+381638870837">063 88 70 837</a> ili pogledajte stranicu <a href="/sadnice/tuja-smaragd">Tuja Smaragd</a> na našem sajtu.</p>
    `,
  },
  {
    id: 1,
    slug: 'najbrza-ziva-ograda-srbija',
    title: 'Koja živa ograda je najbrža za rast u Srbiji?',
    excerpt: 'Planirate živu ogradu, ali ne znate koja biljka raste najbrže? Uporedili smo 5 najpopularnijih vrsta u Srbiji — sa brzinom rasta, cenom i savetom za svaki tip dvorišta.',
    date: '2026-05-16',
    readTime: '6 min',
    category: 'Živa ograda',
    image: '/images/blog-lejlandi.webp',
    relatedSlugs: ['lejlandi-sadnja-i-nega', 'tuja-smaragd-sadnja-i-nega', 'lovor-visnja-sadnja-i-nega'],
    faq: [
      {
        q: 'Koja živa ograda najbrže raste u Srbiji?',
        a: 'Čempres Lejlandi je apsolutni šampion brzine — 60–90 cm godišnje. Na drugom mestu je lovor višnja sa 40–60 cm godišnje, a zatim fotinija Red Robin (30–40 cm) i tuja Smaragd (20–35 cm).'
      },
      {
        q: 'Koja živa ograda je najotpornija na mraz?',
        a: 'Tuja Smaragd je najotpornija na mraz — podnosi do -30°C. Sledi lovor višnja sa -20°C, bambus Fargesia sa -20°C, i fotinija Red Robin sa -15°C.'
      },
      {
        q: 'Kada saditi živu ogradu u Srbiji?',
        a: 'Optimalno vreme je proleće (mart–april) ili jesen (septembar–oktobar). Zimzelene biljke kao tuja i lovor višnja mogu se saditi gotovo tokom cele godine uz redovno zalivanje.'
      },
      {
        q: 'Koja živa ograda je najjeftinija za sadnju?',
        a: 'Ekonomski najisplativija opcija je tuja Smaragd ili lovor višnja u manjim sadnicama (40–60 cm) posađene na gušćem razmaku. Lejlandi je brži, ali zahteva redovnu rezidbu.'
      },
      {
        q: 'Koja živa ograda raste i u senci?',
        a: 'Lovor višnja je jedina od popularnih ogradnih biljaka koja dobro raste i u punoj senci. Tuja i fotinija preferiraju sunce ili polusenu.'
      },
    ],
    content: `
      <p>Jedna od prvih stvari koje većina vlasnika kuća u Srbiji želi je privatnost — brza, gusta i zelena živa ograda koja će odvojiti dvorište od ulice ili komšija. Ali koja biljka raste <strong>najbrže</strong>, a da pri tome izgleda lepo i ne zahteva previše nege?</p>

      <p>U našem Rasadniku odgovaramo na ovo pitanje svakodnevno. Evo našeg iskrenog prikaza pet najbrže rastućih biljaka za živu ogradu koje su dostupne u Srbiji.</p>

      <h2>Top 5 najbrže rastućih živih ograda u Srbiji</h2>

      <h3>1. Čempres Lejlandi — 60–90 cm godišnje</h3>
      <p>Čempres Lejlandi (× <em>Cuprocyparis leylandii</em>) je apsolutni šampion brzine. Za dve do tri sezone daje gust, tamnozeleni zid koji štiti od vetra, buke i pogleda.</p>
      <p><strong>Prednosti:</strong> neverovatno brz rast, zimzelen, izdržljiv na vetru.</p>
      <p><strong>Mana:</strong> bez redovnog orezivanja (1-2 puta godišnje) može narasti i do 20 metara.</p>

      <h3>2. Lovor višnja — 40–60 cm godišnje</h3>
      <p>Lovor višnja (<em>Prunus laurocerasus</em>) je možda najpopularnija ogradna biljka u Srbiji zbog kombinacije brzog rasta, krupnih sjajnih listova i otpornosti na mraz do -20°C.</p>
      <p><strong>Prednosti:</strong> brz rast, krupni listovi, izuzetno otporna na mraz, ne zahteva mnogo nege.</p>
      <p><strong>Mana:</strong> zahteva više prostora u širinu (60-80 cm po biljci).</p>

      <h3>3. Tuja Smaragd — 20–35 cm godišnje</h3>
      <p>Tuja Smaragd (<em>Thuja occidentalis 'Smaragd'</em>) je najpopularnija ogradna biljka u Srbiji — raste sporije, ali je savršeno uska i pravilnog oblika bez orezivanja.</p>
      <p><strong>Prednosti:</strong> uzak habitus, uvek zelena, lako se njeguje, odlična za manje površine.</p>
      <p><strong>Mana:</strong> sporiji rast u poređenju s lovor višnjom ili čempresom Lejlandi.</p>

      <h3>4. Fotinija Red Robin — 30–40 cm godišnje</h3>
      <p>Fotinija (<em>Photinia × fraseri 'Red Robin'</em>) je dekorativna ograda koja se ističe crvenim mladim listovima svakog proleća.</p>
      <p><strong>Prednosti:</strong> dekorativna, crveni prirast u proleće, dobra gustina.</p>
      <p><strong>Mana:</strong> manje otporna na jake mrazeve ispod -15°C.</p>

      <h3>5. Bambus — 30–100 cm godišnje (zavisno od vrste)</h3>
      <p>Bambus je posebna kategorija — neke vrste u srpskim uslovima mogu za jednu sezonu da izbace nove prutove visoke i po metar. Preporučujemo busene vrste (Fargesia) koje se ne šire nekontrolisano.</p>
      <p><strong>Prednosti:</strong> egzotičan izgled, izuzetno brz rast, zelenilo tokom cele godine.</p>
      <p><strong>Mana:</strong> vrste koje puze podzemnim stabljikama mogu da se prošire van željene zone.</p>

      <h2>Uporedna tabela živih ograda</h2>
      <div class="table-wrapper">
      <table>
        <thead>
          <tr><th>Biljka</th><th>Rast/god.</th><th>Idealno za</th><th>Otpornost na mraz</th></tr>
        </thead>
        <tbody>
          <tr><td>Čempres Lejlandi</td><td>60–90 cm</td><td>Visoke ograde, vetrobrani</td><td>do -15°C</td></tr>
          <tr><td>Lovor višnja</td><td>40–60 cm</td><td>Guste, široke ograde</td><td>do -20°C</td></tr>
          <tr><td>Tuja Smaragd</td><td>20–35 cm</td><td>Formalne, uske ograde</td><td>do -30°C</td></tr>
          <tr><td>Fotinija Red Robin</td><td>30–40 cm</td><td>Dekorativne ograde</td><td>do -15°C</td></tr>
          <tr><td>Bambus</td><td>30–100 cm</td><td>Moderni izgled, zakloni</td><td>do -20°C (Fargesia)</td></tr>
        </tbody>
      </table>
      </div>

      <h2>Gde kupiti sadnice za živu ogradu u Srbiji?</h2>
      <p>U <strong>Rasadniku Tilija</strong> u Pločici (kod Kovina) možete pronaći sve gore navedene vrste u različitim visinama i saksijama. Vršimo dostavu sadnica širom Srbije i pružamo stručni savet za svaki tip dvorišta i budžeta.</p>
      <p>Kontaktirajte nas na <a href="tel:+381638870837">063 88 70 837</a> ili posetite stranicu <a href="/products">naših proizvoda</a>.</p>
    `,
  },
];

export default blogPosts;
