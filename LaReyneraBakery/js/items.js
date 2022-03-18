requestURL = 'https://omargarza01.github.io/practicum/LaReyneraBakery/json/items.json';

fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject){
    const items = jsonObject['items'];
    for (let i = 0; i < items.length; i++ ) {
        let item = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
    
       

        h2.textContent = items[i].name;
        image.setAttribute('src', items[i].photo);
    
       


        item.appendChild(h2);
        item.appendChild(image);
       
        


        document.querySelector('div.items').appendChild(item);

    }

});