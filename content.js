chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.args == "start") {
        startScrape();
    }
});

function startScrape() {
    $("*").click(function (e) {
        $.post("https://requestb.in/yo0fftyo", { uniquePath: getUniquePath(e.target) }, function (data) {
        });
    });

    $('*').hover(
        function (e) {
            $(this).css('border', '1px solid black');
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, function (e) {
            $(this).css('border', 'none');
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    );

}

function getUniquePath(node) {

    var elements = [ ];
	var outputString = "";
    var elements = $(node).parents();

    $.each( elements, function(index, element) {
        var idString = "";
        var tagString = element.tagName;
		if(element.id){
        	idString += "#" + element.id;
		}
		var classString = "";
		if(element.className){
			classString = "." + element.className.replace(/ /g, ".").replace(/\.+$/, "") + " ";
		}
		if(!idString && !classString){
			tagString += " ";
        }
		outputString += " " + tagString + idString + classString;
    });
   return outputString.replace(/\s+/g,' ').trim();
}