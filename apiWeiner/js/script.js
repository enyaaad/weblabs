async function fetchWeather() {

    let searchstring = document.getElementById("search-bar").value;
    const filterCb = checkBoxes('.filtercheckbox').join(',');
    const genreCb = checkBoxes('.genrecheckbox').join(',');

    const params = {
        blacklistFlags: filterCb,
        contains:searchstring,
    };

    const category=genreCb ?genreCb:"any";
    const url = 'https://v2.jokeapi.dev/joke/'+ category +'?' + ( new URLSearchParams( params ) ).toString();

    console.log(url);
    const response = await fetch(url)
        .then(response => response.json())

    console.log(response)
    if (response.ok === false) {
        alert("No jokes found.");
        throw new Error("No jokes found.");
    }

    console.log(response.joke);
    await displayJoke(response);

}

function checkBoxes(checkboxClass){
    const array=[];
    document.querySelectorAll(checkboxClass).forEach(item=>{
            if(item.checked){
                array.push(item.value);
            }
        }
    )
    return array
}
async function displayJoke(data) {
    if(data.type === "single"){
        if(data.joke === undefined){
            document.querySelector(".categoryName").innerText = "Error";
            document.querySelector(".jokeText").innerText = "there's no jokes with this word";
        }
        else{
            document.querySelector(".categoryName").innerText = "Category: "+ data.category;
            document.querySelector(".jokeText").innerText = "Joke: " + data.joke;
        }
    }
    else{
        if(data.setup === undefined){
            document.querySelector(".categoryName").innerText = "Error";
            document.querySelector(".jokeText").innerText = "there's no jokes with this word";
        }
        else{
            document.querySelector(".categoryName").innerText = "Category: "+ data.category;
            document.querySelector(".jokeText").innerText = "Joke: " + data.setup + '\n' + data.delivery;
        }
    }



}

