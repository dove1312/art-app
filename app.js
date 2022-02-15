const artApp = {};

artApp.apiKey = `fbC7vSXD`;
artApp.apiUrl = `https://www.rijksmuseum.nl/api/en/collection`;

artApp.getArt = function (usersChosenAnimal) {
    const url = new URL(artApp.apiUrl);
    console.log(url);

    url.search = new URLSearchParams({
        key: artApp.apiKey,
        q: usersChosenAnimal,
        imgonly: true
    })

    fetch(url)
        .then(function (apiResponse) {
            return apiResponse.json();
        })
        .then(function (artFromTheApi) {
            console.log(artFromTheApi.artObjects)
            artApp.displayArt(artFromTheApi.artObjects)
        })

}


artApp.displayArt = function(artArray){
    artArray.forEach(function(individualArtObject){
        console.log(individualArtObject);
        const artworkTitle = individualArtObject.title;
        const artworkImage = individualArtObject.webImage.url;
        const artist = individualArtObject.principalOrFirstMaker;
        const altText = individualArtObject.longTitle;
        

        const listElement = document.createElement('li');
        console.log(listElement)
        listElement.classList.add('piece');

        const heading = document.createElement('h2');
        heading.textContent = artworkTitle;

        const image = document.createElement('img');
        image.src = artworkImage;
        image.alt = altText;

        const paragraphElement = document.createElement('p');
        paragraphElement.classList.add('artist');
        paragraphElement.textContent = artist;


        listElement.appendChild(heading)
        listElement.appendChild(image)
        listElement.appendChild(paragraphElement)

        //anotherway of writing this 
        // listElement.append(heading, image, paragraphElement)

        const ulElement = document.querySelector('#artwork');
        ulElement.appendChild(listElement);


    })
}









artApp.init = function () {
    artApp.getArt('whales');
}

artApp.init();


