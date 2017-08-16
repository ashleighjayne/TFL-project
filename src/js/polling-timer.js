/** 
* Polling Timer
* Independent timer which fires an event at intervals
*/
class PollingTimer {
    constructor() {
        this.pollingInterval;
        this.event = new CustomEvent('newDataRequested', {});
    }

    /** 
    * Creates new interval which fires custom event every 3 minutes}
    */
    setInterval() {
        this.pollingInterval = window.setInterval(() => {
            document.dispatchEvent(this.event);
        }, 180000);
    }

    clearInterval() {
        window.clearInterval(this.pollingInterval);
    }
}

module.exports = PollingTimer;
