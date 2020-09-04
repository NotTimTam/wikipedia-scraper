let main_url = "";

const node = document.getElementsByClassName("input")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Get search input.
        let searchFor = document.getElementById("input").value;
        console.log(`Searching for "${searchFor}"`);
        
        // Create a Wikipedia search link.
        let searchURL = `https://en.wikipedia.org/wiki/Special:Search?search=${searchFor}&go=Go&ns0=1`;
        console.log(`Created URL "${searchURL}"`);
        main_url = searchURL;

        // Create an iframe for that link.
        document.getElementById("frame").src = searchURL;
        
        // Clear the search field.
        document.getElementById("input").value = "";

        // Access the CSS and show the download button.
        document.getElementById("download").setAttribute('style', "visibility: visible");
    }
});

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function getIframeContent(frameId) {
    var frameObj = 
        document.getElementById(frameId);

    var frameContent = frameObj.
        contentWindow.document.body.innerHTML;
        
    alert("frame content : " + frameContent);
}

function trigger_download() {
    var iframeContent = getIframeContent("frame");
    download("index.html", iframeContent);
};