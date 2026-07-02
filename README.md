# Studyjo Brakedance

MVP editorial webu pro satirické breakingové médium. Homepage je v první verzi jeden plnohodnotný článek, postavený v Next.js App Routeru.

## Lokální spuštění

```bash
npm install
npm run dev
```

Web poběží na `http://localhost:3000`.

## Výměna hero obrázku

1. Vlož nový soubor do `public/images`.
2. V `app/content/articles.ts` změň hodnotu `heroImage.src`.
3. Uprav také `heroImage.alt`, aby popisoval skutečný obrázek.

Aktuálně je použit placeholder `public/images/hero-placeholder.svg`.

## Přidání dalšího článku

1. Přidej další položku do pole `articles` v `app/content/articles.ts`.
2. Zachovej strukturu `paragraph`, `quote` a `image`.
3. Related cards zatím ukazují placeholdery; pro víc článků je další krok přesun obsahu do MDX/Markdown.

## Deploy na Vercel

1. Nahraj projekt do Git repozitáře.
2. Ve Vercelu zvol `New Project`.
3. Framework bude detekovaný jako Next.js.
4. Build command: `npm run build`.
5. Output directory nech prázdný, Vercel použije výchozí Next.js nastavení.
