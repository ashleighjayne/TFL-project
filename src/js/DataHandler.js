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

    getAllModes() {
        let url = this.urlParams.domain + this.urlParams.modeParams.lineMetaModes;

        return this.getJson(url);
    }

    getLineStatus() {
        let url = this.urlParams.domain + this.urlParams.lineParams.lineMode + 'tube%2Cdlr%2Coverground/' + this.urlParams.lineParams.status;

        return this.getJson(url);
    }

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
