export type ParagraphBlock = {
  id: string;
  type: "paragraph";
  text: string;
};

export type QuoteBlock = {
  id: string;
  type: "quote";
  text: string;
};

export type ImageBlock = {
  id: string;
  type: "image";
  src: string;
  alt: string;
  caption: string;
};

export type ArticleBlock = ParagraphBlock | QuoteBlock | ImageBlock;

export type RelatedArticle = {
  title: string;
  label: string;
};

export type Article = {
  slug: string;
  kicker: string;
  title: string;
  author: string;
  date: string;
  readingTime: string;
  perex: string;
  heroImage: {
    src: string;
    alt: string;
    caption: string;
  };
  blocks: ArticleBlock[];
  related: RelatedArticle[];
};

export const articles: Article[] = [
  {
    slug: "redbull-dance-your-style-bboys-vrtulnik-destinys-child",
    kicker: "NÁZOR / SATIRA / BREAKING",
    title: "Pravda o RBDYS vyšla najevo!",
    author: "Studyjo Brakedance",
    date: "2. 7. 2026",
    readingTime: "5 min čtení",
    perex:
      "Finále jedné z nejviditelnější tanečních akcí je za námi. Vítězem battlu Redbull Dance your Style (RBDYS) se speciálním tanečním konceptem, kdy na známé skladby proti sobě tančí jednotlivci a jejich osud má v rukou celé publikum, vyhrál Sebastian z MöGG. Není pochyb, že formát má velký úspěch a dokázal strhnout pozornost nejen ostřílených tanečníků, ale i široké veřejnosti.",
    heroImage: {
      src: "/images/ig-post-rbdys.png",
      alt: "Instagram post Studyjo Brakedance k článku o RBDYS",
      caption: ""
    },
    blocks: [
      {
        id: "p-1",
        type: "paragraph",
        text:
          "Finále jedné z nejviditelnější tanečních akcí je za námi. Vítězem battlu Redbull Dance your Style (RBDYS) se speciálním tanečním konceptem, kdy na známé skladby proti sobě tančí jednotlivci a jejich osud má v rukou celé publikum, vyhrál Sebastian z MöGG. Není pochyb, že formát má velký úspěch a dokázal strhnout pozornost nejen ostřílených tanečníků, ale i široké veřejnosti."
      },
      {
        id: "q-1",
        type: "quote",
        text: "Co ale „breakdance“? Patří tam?"
      },
      {
        id: "p-2",
        type: "paragraph",
        text:
          "V naší malé a relativně poklidné taneční komunitě se během kvalifikačních kol v Brně a Praze rozčeřili vody. Pomyslnou zápalkou se stalo kritické reels video bboye (brejkaře) Zekyho, které rozpoutalo horkou diskuzi nad tím, zda bboys (brejkaři) v ČR nejsou omezováni oproti zahraničí a zda by čistý breakin (breakdance) měl být RBDYS přirozenou součástí. Celosvětově Redbull nyní totiž tanečníky breakinu (breakdance) na RBDYS nezve."
      },
      {
        id: "p-3",
        type: "paragraph",
        text:
          "V minulosti tomu tak vždy nebylo. RBDYS existuje od roku 2018, kdy v CZ vyhrál (původem bboy) Mr. Kriss, který ve světovém finále hezky „naložil“ bboy Neguinovi. Další ročníky v určitém bodě ale Redbull změnil stanovisko a rozhodl se, že akce je určena pro streetdance tanečníky. Klasický bboying má svoji vlastní soutěž Redbull BC One. V rámci diskuze zazněl argument, že pro bboys je přece akce s názvem Redbull BC One, která je právě určena bboys. Je to pravda, až na to, že v CZ se už dlouhé roky Redbull BC One nepořádá."
      },
      {
        id: "p-4",
        type: "paragraph",
        text:
          "V reels Zekyho byl kritizovaný příspěvek MöGG (organizátora Brněnské preselekce), kde je skutečně napsáno, že jsou vítané všechny styly kromě breakinu a zároveň na vizuálu je napsáno ALLSTYLES (všechny styly). To ale nutně neznamená, že by bboys na akci nemohli dorazit. Např. minulý rok se akce zúčastnil bboy Jeep, který tančil „streetstylez“. A nemáme informaci, že by někomu letos z bboys byla zakázána účast. V textu v příspěvku MöGG jde za nás spíše o nevhodnou formulaci, než promyšlené „bannování“ CZ bboys."
      },
      {
        id: "q-2",
        type: "quote",
        text: "Akce není o trikách, ale o tanci."
      },
      {
        id: "p-5",
        type: "paragraph",
        text:
          "Chápeme, že některé brejkaře mohla “zdvihnout ze židle” následná formulace v komentářích organizátora MöGG: „Akce není o trikách, ale o tanci.“ – zdůvodnění mohlo vyznít, že obecně breakaři netancují do hudby. Je ale i fakt, že do hudby netančí kde kdo.. a na samotné akci také vidíme mnoho „breakdance triků“. V komentářích v diskuzi bylo následně potvrzeno, že se může zúčastnit i bboy tanečník, jen musí respektovat pravidla soutěže = aby jeho taneční vstup nebyl celý založen na breakinu. S tím se ale část bboys nespokojila."
      },
      {
        id: "image-1",
        type: "image",
        src: "/images/meme-placeholder.svg",
        alt: "Placeholder pro meme nebo editorial obrázek v článku",
        caption: "Meme slot: sem později patří vlastní vizuál, screenshot nebo koláž."
      },
      {
        id: "q-3",
        type: "quote",
        text:
          "Je opravdu boj za to, abych si dal vrtulník na Destinys Child, co breakin scéna potřebuje?"
      },
      {
        id: "p-6",
        type: "paragraph",
        text:
          "Jak to vidíme my? Ano, jistě se některá slova dala formulovat přesněji, ale ruku na srdce: Je RBDYS akce, na kterou by se měla soustředit CZ breakin scéna? Je opravdu boj za to, abych si dal vrtulník na Destinys Child, co breakin scéna potřebuje? Při pozorování této vášnivé diskuze jsme se dostali do bodu, kdy někdy kritika nemožnosti breakinu být na RBDYS mohla působit jako trochu takové závidění."
      },
      {
        id: "p-7",
        type: "paragraph",
        text:
          "Zároveň z našeho pohledu v kritickém reels videu zazněly zavádějící informace. V CZ nejsou jiné podmínky než jiných zemích a bboys se účastnit kvalifikace mohou, stejně jako před rokem Bboy Jeep. Debata se dle našeho názoru rozproudila i kvůli tomu, že RBDYS se podařilo v CZ hezky rozjet, zatímco Redbull BC One v CZ ne (o důvodech snad jindy). Největší paradox ale do diskuze vnáší fakt, že nejtvrdší kritika: „Nemůžeme tančit na Allstyle battlu“ zazněla od bboys, které jsme na žádném Allstyle battlu neviděli, natožpak, aby nějaký Allstyle battle vyhráli. Z určitého pohledu to pak vypadá, že někteří aktéři chtějí být prostě jen vidět, aniž by si plně uvědomovali, jaké je povaha akce."
      },
      {
        id: "q-4",
        type: "quote",
        text: "ptejme se na Redbull BC One"
      },
      {
        id: "p-8",
        type: "paragraph",
        text:
          "Za nás by bboy scéna neměla řešit, zda lze tančit breakdance na Shakiru na RBDYS.. Je to opravdu jedno. Pokud tedy opravdu chceme challengovat Redbull, ptejme se na Redbull BC One, protože to je akce, která by bboys měla zajímat."
      }
    ],
    related: [
      {
        title: "Petice za točení na hlavě na Redbull Dance Your Style",
        label: "Placeholder"
      },
      {
        title: "Nostalgické okénko: Kdy bylo Studyjo naposledy na SDK?",
        label: "Archiv"
      },
      {
        title: "5 zásadních bodů k breakingu na olympiádě v Paříži",
        label: "Explainer"
      }
    ]
  }
];
