requestURL = 'https://omargarza01.github.io/practicum/LaReyneraBakery/json/items.json';

fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject){
    const members = jsonObject['items'];
    for (let i = 0; i < items.length; i++ ) {
        let member = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
    
       

        h2.textContent = items[i].name;
        image.setAttribute('src', items[i].photo);
    
       


        member.appendChild(h2);
        member.appendChild(image);
       
        


        document.querySelector('div.items').appendChild(items);

    }

});