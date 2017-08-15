class PollingTimer {
    constructor() {
        this.pollingInterval;
        this.event = new CustomEvent('newDataRequested', {});
    }

    setInterval() {
        this.pollingInterval = window.setInterval(() => {
        document.dispatchEvent(this.event);
        }, 3000);
    }

    clearInterval() {
        window.clearInterval(this.pollingInterval);
    }
}

module.exports = PollingTimer;
