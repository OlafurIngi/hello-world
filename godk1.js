/* Del 1: Anton skal til piratfest på reffen og vil gerne invitere alle sine homies med. For at
politiet ikke skal opdage at Anton inviterer til fest, sender han derfor en hemmelig besked til
sine venner, med instrukser til at dekode beskeden, som kun folk der kan kode i javascript
kan følge (hvilket politiet selvfølgelig ikke kan!). */

let hemmeligbesked = 
['hej', 'klaus', 'vil', 'du', 'med', 'til', 'fodbold', 'i', 'klubben', 'i', 'aften', '?', 'kurt']

// 1. Brug en array metode til at slette det sidste element af arrayet hemmeligBesked

// Metoden som vi skal bruge er .pop

hemmeligbesked.pop();

console.log(hemmeligbesked.join(' '));

// 2. Brug en array metode til at tilføje separate strenge: ‘adressen’,’er’,’Priratvej’ og ’100’
// til slutningen af hemmeligBesked

// Metoden vi bruger er .push til at tilføje ovenstående strings

hemmeligbesked.push('adressen', 'er', 'Privatvej', '100');

console.log(hemmeligbesked.join(' '));

// 3. Ændrer ordet ‘Klaus’ til ‘bro!’ ved at tilgå indekset og erstatte det

// For at ændre 'Klaus' til 'bro!' udnytter vi .splice() metoden.
/* 
Vi sætter det op således, at inde i vores parentes skriver vi et tal for start positionen 
som skal slettes, så mængden af elementer i array'et som skal slettes, og så det nye element.
*/

hemmeligbesked.splice(1, 1, 'bro!');

console.log(hemmeligbesked.join(' '));

// 4. Brug en array metode til at fjerne det første element af array’et

// For at fjerne det første element af array'et bruger .shift() metoden

hemmeligbesked.shift();

console.log(hemmeligbesked.join(' '));

// 5. Brug en array metode til at tilføje ‘yo’ til starten af array’et

// For at tilføje et element i et array, skal vi bruge .unshift() metoden

hemmeligbesked.unshift('yo');

console.log(hemmeligbesked.join(' '));

// 6. Brug en array metode til at fjerne strengene ‘fodbold’, ‘i’ og ‘klubben’ og erstatte det
// med en enkelt streng ‘piratfest'

// Her gør vi ligesom i opgave 3. hvor vi brugte .splice() metoden, men nu ændrer vi så mængden af
// elementer som skal slettes

hemmeligbesked.splice(6, 3, 'piratfest');

console.log(hemmeligbesked.join(' '));

// 7. Lav en ny variable som hedder faktiskeBesked, hvor du joiner alle strengene til en sætning

// Jeg har brugt .join fra starten uden at vide vi skulle bruge det nu.

var faktiskeBesked = hemmeligbesked.join(' ');

// 8. console.log() den faktiskeBesked som en sætning

console.log(faktiskeBesked);



// Del 2: Anton vil gerne sende den samme besked til alle hans 1000+ facebookvenner, men
// han vil gerne gøre beskeden lidt mere personlig

// 1. Hjælp Anton med at lave en funktion gørBeskedPersonlig(), som tager et navn som
// input og erstatter ‘bro’ i den faktiskeBesked med navnet

function gørBeskedPersonlig (n) {
    let gørBeskedPersonlig = hemmeligbesked.splice(1, 1, n)
    return console.log(hemmeligbesked.join(' '));
};

gørBeskedPersonlig('Sigurd');

// 2. gørBeskedPersonlig(Sigurd) skal printe følgende besked til consolen:
// “yo sigurd vil du med til piratfest på reffen i aften? Adressen er Piratvej 100.”

// her kan vi lave et nyt .splice statement for 'på reffen' og så printe gørBeskedPersonlig('Sigurd')

hemmeligbesked.splice(7,0,'på reffen');

gørBeskedPersonlig('Sigurd');


/* Del 3: Anton har et katalog over alle sine venner og deres yndlingssange, som er gemt i et
array. Han vil nu optimere sit liv, og sende dem den personlige besked samtidigt med at han
laver en playliste. */

/* Hjælp Anton med at lave et loop som kan loop gennem et array af objekter og
returner en personlig besked for hvert navn og en samlet playliste */

// Vi starter med at lave et loop med objekter, som vi kalder navneOgSange. Her i har vi objekterne:
// navn og sang

let navneOgSange = 
    [{
        navn: 'Sigurd',
        sang: 'Hit me baby one more time'

    }, {
        navn: 'Tessa',
        sang: 'Ben'
    }, {
        navn: 'Mia',
        sang: 'Love will tear us apart'
    }];

// så kan vi definere vores array

let playliste = [];

 // herefter kan vi bruge .forEach metoden for at kalde functionen til hvert element i array'et
 // så kan vi bruge .push til at tilføje sang elementerne til enden

navneOgSange.forEach(e => {
    gørBeskedPersonlig(e.navn);
    playliste.push(e.sang);
});

console.log(playliste);




