
const form = document.querySelector('form');
const result = document.getElementById('result');


function getShows(searchText) {

    // To remove all the childs in a result div
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    
    const url = ` https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url)
        .then((res) => {
            
            for (let item of res.data) {

                if (item.show.image) {
                    
                    const img = document.createElement('img');

                    img.src = item.show.image.medium;
                    img.style.margin = '10px';
                    result.append(img);

                }
               
            }

        })
        .catch((err) => {
            console.log(err);
        });


}




form.addEventListener('submit', (e) => {
    e.preventDefault();


    // getting the text from the form input
    const searchText = form.elements[0].value;

    getShows(searchText);

    form.elements[0].value = "";
})