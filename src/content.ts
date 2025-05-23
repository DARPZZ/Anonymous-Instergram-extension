const instergramBaseUrl = "https://www.instagram.com/"

chrome.runtime.onMessage.addListener( (request, sender, message) => {
    if (request.action === "run") {
       runScript();
    }
});

function RemovePopUpsAutomatically() {
    const observer = new MutationObserver(() => {
        const popUps = document.getElementsByClassName("x1n2onr6 xzkaem6");
        for (const popUp of popUps) {
            popUp.remove();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}
// calling to active the observer
RemovePopUpsAutomatically();


function removeDuplicates()
{
    let buttonex = document.getElementsByClassName("seePostButtons");
    if (buttonex.length > 0) {
        Array.from(buttonex).forEach((btn) => {
            btn.parentElement?.removeChild(btn);
        });
    }
}
function getAllPictures() {
    const elements = document.getElementsByClassName("x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd");
    removeDuplicates();
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index].getAttribute('href');
        let button = document.createElement('button'); 
        button.innerText = 'See post';
        button.style.marginTop = '10px';
        button.style.zIndex = "200";
        button.style.width = "100%"
        button.style.position ="relative";
        button.style.marginBottom = "5px";
        button.value = element;
        button.className = "seePostButtons";
        if(element.includes("/p/")|| element.includes("/reel/"))
        {
            button.addEventListener('click', function() {
                window.open(`${instergramBaseUrl}${element}`, '_blank');
            });
            elements[index].parentElement.appendChild(button);
        }
    }
}
function runScript(): void {
    getAllPictures()
}
