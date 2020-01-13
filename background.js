chrome.bookmarks.onCreated.addListener(function() {
    console.log("hi");
    // Get list of all bookmarks
    chrome.bookmarks.getTree(function(itemTree) {
        itemTree.forEach(function(item) {
            processNode(item);
        }); 
    });
});

function processNode(node) {
    if (node.children) {
        node.children.forEach(function(child) { processNode(child); });
    }

    if (node.url) {
        console.log(node.url);
    }
}

