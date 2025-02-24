let active = false;
function getUrl(): string {
    let windowstring = window.location.toString();
    let windowstringArray = windowstring.split('/')
    let creatorName = windowstringArray[3]
    return creatorName;
}
function runScript(): void {
    getAllPictures(getUrl())
}
function getAllPictures(creatorName:string) {
    const elements = document.getElementsByClassName("x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd");
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index].getAttribute('href');
        
        if(element.includes('/p/') && element.includes(creatorName))
        {
            console.warn(element)
        }
    }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id ? tab.id : -1},
        func: runScript
    }).then();
})