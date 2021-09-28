// Vi arbejder med kurset: ”BINTO1064U.LA_E21”

var course = "BINTO1064U.LA_E21";

// 1. Test om der er bogstaver i sekvensen

console.log(/[A-Z]/.test(course));

// 2. Test om der er tal i sekvensen

console.log(/[0-9]/.test(course));

// 3. Prøv at tjekke om det er HA it og print sekvensen ud! (Altså starter det med BINT)

console.log(/^BINT/.test(course));

// 4. Prøv at printe lokationen for ”_” ud (indexet)

let matchstr = /[_]/.exec(course);
console.log(matchstr.index);

// 5. Lave en halvkort kode med kun BINTO og tallene (BINTO1064) Man kan både bruge .match og 
// .replace her.

console.log(course.match(/\w{5}(\d{4})/));

// 6. Lave en kortkode med kun BINT og tallene (BINT1064) Man kan både bruge .match og .replace her. 
// Brug $1, $2, $3 osv

var regex = /(\w{4})(O)(\d{4})(.*)/;

//course = course.replace (regex, "$1$3");

//console.log(course);

// 7. Prøv at lave en ny kode hvor du udskifter E21 med F22 med .replace (her skal I bruge $n) 

var regex = /(\w{4})(\d{4})(.{5})(E21)/;

course = course.replace (regex, "$1$2$3F22");

console.log(course);

