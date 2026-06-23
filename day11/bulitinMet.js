
let userInput=" Alice Jhonny |Alice@gmail.com| JS JAVaScript Enthusiastic JS I I"
let parts=userInput.split("|");
console.log(userInput);
console.log(parts);
let Rs=parts[0].trim();
console.log(Rs);
let name=Rs.toUpperCase();
console.log(name);
let tr=parts[1].toLowerCase();
console.log(tr);
let bio=parts[2];
let jsPres=bio.includes("JS");
console.log(jsPres)
console.log(bio.indexOf("JS"));//1
console.log(bio.lastIndexOf("JS"));//28
let rep=bio.replace("I","ME");
console.log(rep);
let repAl=bio.replaceAll("I","ME");
console.log(repAl);

console.log(bio.slice(4,bio.indexOf("I")).trim());
console.log(bio.length);
let validEmail=parts[1].includes("@") && parts[1].endsWith(".com");
console.log(validEmail);
let sperator="_".repeat(50);
let finalProfile =`
${sperator}
User Profile:
Name:          :${name.trim()}
email:         :${validEmail}
profession     :${bio}
${sperator}
`;
console.log(finalProfile);

