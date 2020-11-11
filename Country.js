
class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
  
}
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "yellow"]);
let iceland = new Country("Iceland", "Icelandic", "Hallo heimur!", ["blue", "white", "red"]);
let greece = new Country("Greece", "Greek", "Geia sou Kosme!", ["White", "blue"])
let poland = new Country("Poland", "Polish", "Witaj swiecie!", ["White", "red"])
let madagascar = new Country("Madagascar", "Malagasy and French", "Hello World!, Bonjour le monde! ", ["White", "red", "green"])



function switchCountry() {
    let input = document.getElementById("CountryList").value;
    
    let country;

    if (input === "Germany") {
       
        country = germany;
        
    }
    else if (input === "Iceland") {
        country = iceland;
    }
    else if (input === "Greece") {
        country = greece;
    }
else if (input === "Poland") {
    country = poland;
}
else if (input === "Madagascar") {
    country = madagascar;
}

document.getElementById("CountryName").innerText = country.name;
document.getElementById("OfficialLanguage").innerText = country.lang;
document.getElementById("HelloWorld").innerText = country.greeting;



document.getElementById("Color1").style.backgroundColor = country.colors[0];
document.getElementById("Color2").style.backgroundColor = country.colors[1];
if(country.colors.length > 2){
    document.getElementById("Color3").style.backgroundColor = country.colors[2];
}
else {
    document.getElementById("Color3").style.backgroundColor = country.colors[1];
}

}