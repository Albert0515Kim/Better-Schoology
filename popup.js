
function addCustomStyle(css) {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);
}



if (window.location.hostname.includes("schoology.d214.org")) {
    addCustomStyle(`
        html { 
            filter: invert(.85) hue-rotate(180deg) brightness(100%); 
        }
        img:not(.exclude), picture:not(.exclude), video:not(.exclude) { 
            filter: invert(1) hue-rotate(180deg) brightness(100%); 
        }
    `);
}

