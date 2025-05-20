# 📌 Rättningsrapport – fed24s-the-last-todo-MariaHellsen

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24s-the-last-todo-MariaHellsen\src\models\Todos.ts - no-unused-vars - 'task' is defined but never used.,no-unused-vars - 'done' is defined but never used.

## 🏆 **Betyg: VG**
📌 **Motivering:** Studentens kod uppfyller alla krav för både G och VG betyg. Den har en hårdkodad lista med todo-punkter som kan presenteras på skärmen inom en strukturerad lista, möjlighet att markera uppgifter som klara vilket tar bort dem från aktiva todo-punkter, och använda 'lifting state up' för komponenthantering. Dessutom kan användaren lägga till nya todos via ett formulär, visa även klara händelser och klicka tillbaka dem som 'oklara', samt sortera todos. Koden har implementerat korrekt användning av ett grafiskt ramverk genom användningen av FontAwesome. CSS är välstrukturerad och visar användning av flex för layouthantering. Dock finns det några förbättringsförslag gällande kodstruktur och användarvänlighet.

💡 **Förbättringsförslag:**  
1. Just nu finns det inte möjlighet att sortera todos i olika ordningar (exempelvis alfabetisk). Man kan lägga till ett sorteringsalternativ för användarvänlighet.
2. Todo-komponents klasser bör ligga i en egen fil än att delas över flera css filer för bättre läsbarhet och underhåll.
3. Att ha mer meningsfulla klassnamn kan ytterligare förbättra läsbarheten av CSS-koden.
4. Det är viktigt att virtuellt skapa en hälsosam användarupplevelse, därmed kan några enhetstester eller interaktionstester se till att behandling av ändringar på listan är smidig och utan buggar.