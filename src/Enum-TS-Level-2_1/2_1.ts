enum HtmlError {
    OK = 200,
    Redirected = 300,
    BadRequest = 400,
    InternalServerError = 500
}

function showHtmlError() {
    let random = Math.ceil(Math.random() * 5);
    if (random <= 2) {
        return HtmlError.OK;
    } else if (random == 3) {
        return HtmlError.Redirected;
    } else if (random == 4) {
        return HtmlError.BadRequest;
    } else if (random == 5) {
        return HtmlError.InternalServerError;
    }   else {
        return 'What just happened?'
    }
}

console.log(showHtmlError());


