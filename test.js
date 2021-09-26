var request = new XMLHttpRequest()

request.open('GET', 'https://data.covid19india.org/data.json', true)
request.onload = function () {
    // Begin accessing JSON data here
    var india_data = JSON.parse(this.response)
    // console.log(india_data.statewise);

    if (request.status >= 200 && request.status < 400) {
        for (let i = 1; i < india_data.statewise.length-1; i++) {
            console.log(india_data.statewise[i].state);
           
        }
       
    } else {
        console.log('error');
    }
}



request.send()