/** 
* Data Handler
* Handles the requesting of data from TFL API
*/
class DataHandler {
    constructor() {
        this.urlParams = {
            domain: 'https://api.tfl.gov.uk/',
            lineParams: {
                'lineMode' : 'Line/Mode/', 
                'status' : 'Status/'
            },
            modeParams: {
                'lineMetaModes' : 'Line/Meta/Modes/'
            }
        };
    }

    /** 
    * Fetches JSON from TFL API containing all valid modes of transport
    * @return {promise}
    */
    getAllModes() {
        let url = this.urlParams.domain + this.urlParams.modeParams.lineMetaModes;

        return this.getJson(url);
    }

    /** 
    * Gets the line status from TFL API for all lines for the given modes
    * @return {promise}
    */
    getLineStatus() {
        // TODO: This will be dynamic in future - currently hardcoded for tube, dlr and overground
        let modesSelected = 'tube%2Cdlr%2Coverground/'
        let url = this.urlParams.domain + this.urlParams.lineParams.lineMode + modesSelected + this.urlParams.lineParams.status;

        return this.getJson(url);
    }

    /** 
    * Sends request to given url
    * @param {string} url - Request url for json
    * @return {promise}
    */
    getJson(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                      resolve(JSON.parse(xhr.responseText));
                    } else {
                      reject(xhr.responseText);
                    }
                }
            };
            xhr.open('GET', url);
            xhr.send();
        });
    }
}

module.exports = DataHandler;
