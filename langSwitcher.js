const data = {
        "en": {
                "hero-header-h1": "Hi, my name is Simon",
                "about-p1": "Hi, my name is Simon, I'm 20 years old and currently reside in Styria, Austria. I'm a self-taught web-developer and I've been coding since April 2024.",
                "about-p2": "When I first started my coding journey, I wasn't really sure where I wanted to begin, so I decided to do some research and after browsing through a bunch of reddit threads, I came to the conclusion that starting off with web-dev stuff would be the simplest and most manageable course of action, due to the fact that HTML and CSS are pretty simple languages, and because I had no coding experience whatsoever back in April. And hey, being able to make my own websites did sound pretty cool back then.",
                "about-p3": "I'm also a really big fan of computer stuff, both software and hardware, and I'm really fond of cooking as well. When it comes to coding, I really enjoy working on the backend for most of my projects, but I also really like writing CSS and making web pages responsive.",
                "stack-h2": "Technologies I work with",
                "github-notable-h1": "Notable Projects",
                "github-notable-p": "You can find most of my projects on my GitHub profile, but here are some of my biggest projects yet. Oh, and cheers for visiting my website."
        },
        "de": {
                "hero-header-h1": "Hi, mein name ist Simon",
                "about-p1": "Hi, mein Name ist Simon, ich bin 20 Jahre alt und wohne derzeit in der Steiermark, Österreich und seit April 2024 bringe ich mir dir gängigen Web-Development Sprachen selbst bei.",
                "about-p2": "Als ich damals mit Coding anfing, hatte ich keine Ahnung, wo ich anfangen wollte. Also beschloss ich, ein wenig Recherche zu betreiben und nachdem ich mich durch ein paar Foren-Threads gewühlt hatte, kam ich zu dem Entschluss mit Web-Development anzufangen, da sich dies als einfachste und überschaubarste Vorgehensweise für mich darstellte. Und weil HTML und CSS recht simple Sprachen sind und ich damals keinerlei Erfahrung hatte, war die Entscheidung ziemlich eindeutig.",
                "about-p3": "Ich bin unter anderem auch sehr an Computern (Software und Hardware) interessiert und Kochen macht mir auch sehr viel Spaß. Bei meinen eigenen Projekten arbeite ich gerne am Backend, schreibe aber auch gerne CSS und responsive Web-Design ist bei mir auch ganz weit oben auf der Liste.",
                "stack-h2": "Technologien, mit denen ich arbeite",
                "github-notable-h1": "Nennenswerte Projekte",
                "github-notable-p": "Meine Projekte kann man auch auf GitHub finden, hier sind einige meiner größten Projekte. Oh und danke fürs besuchen meiner Website."
        }
};

let currLang = navigator.language || "en";

const heroH1 = document.getElementById("hero-header-h1");
const aboutP1 = document.getElementById("about-p1");
const aboutP2 = document.getElementById("about-p2");
const aboutP3 = document.getElementById("about-p3");
const stackH2 = document.getElementById("stack-h2");
const githubH1 = document.getElementById("github-notable-h1");
const githubP = document.getElementById("github-notable-p");
const btn = document.getElementById("button");

function checkLang() {
        if(currLang === "de") {
                btn.innerHTML = "ENG"
                heroH1.innerHTML = data.de["hero-header-h1"];
                aboutP1.innerHTML = data.de["about-p1"];
                aboutP2.innerHTML = data.de["about-p2"];
                aboutP3.innerHTML = data.de["about-p3"];
                stackH2.innerHTML = data.de["stack-h2"];
                githubH1.innerHTML = data.de["github-notable-h1"];
                githubP.innerHTML = data.de["github-notable-p"];
        } else {
                btn.innerHTML = "DE"
                heroH1.innerHTML = data.en["hero-header-h1"];
                aboutP1.innerHTML = data.en["about-p1"];
                aboutP2.innerHTML = data.en["about-p2"];
                aboutP3.innerHTML = data.en["about-p3"];
                stackH2.innerHTML = data.en["stack-h2"];
                githubH1.innerHTML = data.en["github-notable-h1"];
                githubP.innerHTML = data.en["github-notable-p"];
        };
};
checkLang();

btn.addEventListener("click", () => {
        currLang === "de" ? currLang = "en" : currLang = "de";
        checkLang();
});