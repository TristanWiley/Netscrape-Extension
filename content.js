chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.args == "start") {
        startScrape();
    }
});

var selectors = [];
var text_elements = "a, h1, h2, h3, h4, h5, h6, p, span, b, strong, i, em, div:empty"

function startScrape() {
    // Make it so whenever you hover on an element it outlines it.
    $('head').append('<style>*:hover{border: 1px solid black} #netscrape{width: 350px; height: auto; padding: 15px; text-align: center; position: fixed; background-color: red; top: 0; right: 15%; z-index: 1000000000000; } #netscrape * {border: none; text-align: center;} .netscape-saved{background-color: yellow}</style>');

    //Add a click listener for everything so we can capture it.
    $(text_elements).click(function (e) {
        //Make it so when you click on stuff it doesn't do what it normally would
        e.preventDefault();
        //Stop all the parent elements from doing the same
        e.stopPropagation();


        selectAll(e.target);

        if (e.target.id == "netscrape-submit") {
            submitStuff(selectors);
            return;
        }
        //Add element to array
        // console.log(selectors.indexOf(e.target));
        if ($('#netscrape').has($(e.target)).length || e.target.id == "netscrape") {
            return;
        }
        if (selectors.indexOf(e.target) < 0) {
            //Highlight element
            $(e.target).css('background-color', 'yellow');
            selectAll(e.target, true)
        } else {
            $(e.target).css('background-color', '');
            selectors.splice(selectors.indexOf(e.target), 1);
        }
    });

    $(text_elements).mouseenter(function (e) {
        // e.stopPropagation();
        selectAll(e.target)
    });

    $(text_elements).mouseleave(function (e) {
        // e.stopPropagation();
        deselectAll(e.target)
    });

    showBox();
}

function selectAll(node, save) {
    if (save) {
        if (node.className) {
            $(getFinalSelector(node, 0)).addClass("netscape-saved");
        } else {
            $(getFinalSelector(node, 2)).addClass("netscape-saved");
        }
        // $(node).addClass("netscape-saved");
        selectors.push(node);
        console.log(getElementsArray());
    } else {
        if (node.className) {
            $(getFinalSelector(node, 0)).css('background-color', 'yellow');
        } else {
            $(getFinalSelector(node, 2)).css('background-color', 'yellow');
        }
    }
}

function deselectAll(node) {
    // console.log(node);
    if (node.className) {
        $(getFinalSelector(node, 0)).css('background-color', '');
    } else {
        $(getFinalSelector(node, 2)).css('background-color', '');
    }
}

function getElementsArray() {
    var pathsArray = [];
    selectors.forEach(function (item) {
        pathsArray.push(getUniquePath(item));
    });
    return pathsArray;
}

function showBox() {
    $('body').append('<div id="netscrape"> <h3 style="color: white;">Netscrape</h3> <button>Toggle Element Selection</button> <br><br> <input type="text" placeholder="URL Pattern"> <button id="netscrape-submit">Scrape this Site!</div>');
}

function submitStuff() {
    var json = JSON.stringify({ url: location.href, arrayOfElements: getElementsArray() });
    $.post("https://requestb.in/1dx4diw1", { pageUrl: location.href, arrayOfElements: getElementsArray() }, function (data) {
        location.href
    });
}


function getUniquePath(node) {

    var outputString = "";
    var elements = $(node).parents().addBack().toArray();

    $.each(elements, function (index, element) {
        var idString = "";
        var tagString = element.tagName;
        if (element.id) {
            idString += "#" + element.id;
        }
        var classString = "";
        if (element.className) {
            classString = "." + element.className.replace(/ /g, ".").replace(/\.+$/, "") + " ";
        }
        if (!idString && !classString) {
            tagString += " ";
        }
        outputString += " " + tagString + idString + classString;
    });
    return outputString.replace(/\s+/g, ' ').trim();
}

function getFinalSelector(node, parentCount) {
    var nPar = $(node).parents().addBack().toArray().reverse()[parentCount];
    return nPar.tagName + "." + nPar.className.replace(/ /g, ".").replace(/\.+$/, "");
}