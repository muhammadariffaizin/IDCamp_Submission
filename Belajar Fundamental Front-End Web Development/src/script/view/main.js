import '../component/timeline-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const TimelineListElement = document.querySelectorAll("timeline-list");
 
   const onButtonSearchClicked = async () => {
       try {
           const resultBirth = await DataSource.searchBirth(searchElement.value);
           const resultDeath = await DataSource.searchDeath(searchElement.value);
           const resultEvent = await DataSource.searchEvent(searchElement.value);
           renderResult(resultBirth, resultDeath, resultEvent);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
    const renderResult = (resultBirth, resultDeath, resultEvent) => {
        TimelineListElement.forEach(temp => {
            if(temp.data === 'births') {
                temp.info = resultBirth;
            } else if(temp.data === 'events') {
                temp.info = resultEvent;
            } else if(temp.data === 'deaths') {
                temp.info = resultDeath;
            }
        })
    };
 
    const fallbackResult = message => {
        TimelineListElement.renderError(message);
    };
   
    searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;