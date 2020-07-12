class DataSource {
    static searchBirth(keyword) {
        return fetch(`https://byabbe.se/on-this-day/${keyword}/births.json`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.births) {
                return Promise.resolve(responseJson.births);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
    static searchDeath(keyword) {
        return fetch(`https://byabbe.se/on-this-day/${keyword}/deaths.json`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.deaths) {
                return Promise.resolve(responseJson.deaths);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
    static searchEvent(keyword) {
        return fetch(`https://byabbe.se/on-this-day/${keyword}/events.json`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.events) {
                return Promise.resolve(responseJson.events);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
 export default DataSource;