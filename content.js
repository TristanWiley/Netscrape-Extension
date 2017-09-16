chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.args == "start") {
        startScrape();
    }
});

var selectors = [];

function startScrape() {
    //Add a click listener for everything so we can capture it.
    $("*").click(function (e) {
        //Make it so when you click on stuff it doesn't do what it normally would
        e.preventDefault();
        //Stop all the parent elements from doing the same
        e.stopPropagation();

        //Add element to array
        console.log(selectors.indexOf(e.target));
        if (selectors.indexOf(e.target) < 0) {
            //Highlight element
            $(e.target).css('background-color', 'yellow');

            selectors.push(e.target)
        } else {
            $(e.target).css('background-color', '');
            selectors.splice(selectors.indexOf(e.target), 1);
        }

        // $.post("https://requestb.in/1dx4diw1", { uniquePath: getUniquePath(e.target) }, function (data) {
        // });
    });

    // Make it so whenever you hover on an element it outlines it.
    $('head').append('<style>*:hover{border: 1px solid black}</style>');

    // This was replaced by the above style injection
    // $('*').hover(
    //     function (e) {
    //         $(this).css('border', '1px solid black');
    //         e.preventDefault();
    //         e.stopPropagation();
    //         return false;
    //     }, function (e) {
    //         $(this).css('border', 'none');
    //         e.preventDefault();
    //         e.stopPropagation();
    //         return false;
    //     }
    // );

}

function getUniquePath(node) {

    var elements = [];
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