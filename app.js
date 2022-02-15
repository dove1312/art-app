const artApp = {};

artApp.apiKey = `fbC7vSXD`;
artApp.apiUrl = `https://www.rijksmuseum.nl/api/en/collection`;

artApp.getArt = function () {
    const url = new URL(artApp.apiUrl);
    console.log(url);

    url.search = new URLSearchParams({
        key: artApp.apiKey,
        q: 'monkey',
        imgonly: true
    })

    fetch(url)
        .then(function (apiResponse) {
            return apiResponse.json();
        })
        .then(function (artFromTheApi) {
            console.log(artFromTheApi.artObjects);
        })

}












artApp.init = function () {
    artApp.getArt();
}

artApp.init();


