const {EventEmitter} = require("events");
class EventManager extends EventEmitter{
    constructor() {
        super();
    }

    async send(event, data) {
        return new Promise((resolve) => {
            this.emit(event, data, resolve);
        })
    }
}

module.exports = new EventManager();