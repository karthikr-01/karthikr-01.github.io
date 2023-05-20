const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

const apiKey = "kx24Z8OpPTF6s8QjRxUzfA==u28QoruGmnxNWAvI";

// this is object
const options = {
    // to get the information from the server
    method : "GET",
    headers : {
        "X-Api-Key" : apiKey,
    }
}

const jokesApiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke() {

    try {
        jokeElement.innerText = "Updating...";

        //.diabled --> HTML DOM Element which will be disabled
        btnElement.disabled = true;
        btnElement.innerText = "Loading...";
    
        //The fetch() method starts the process of fetching a resource from a server.
        //The fetch() method returns a Promise that resolves to a Response object.
        //await --> will wait till we get the response
        //async --> if await is used then the function should be async
        const response = await fetch(jokesApiURL, options);
    
        //after receiving this response we need to convert to json file (then only we can able to read it)
        // json() --> is a method in JS to convert data into json
        const data = await response.json();
        jokeElement.innerText = data[0].joke;
    
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";        
    } 
    catch (error) {
        jokeElement.innerText = "An error happened, try again later";
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";
    }


}

btnElement = addEventListener ("click", getJoke)


