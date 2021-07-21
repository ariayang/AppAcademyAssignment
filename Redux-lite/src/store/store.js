

class Store {

    constructor(rootReducer) {
        this.rootReducer = rootReducer; // this is a function that = a func({prevState, and an action})
        this.state = rootReducer({});
        this.subscriptions = []; // array of functions
    }

    getState() {
        return Object.assign(this.state); //shallow copy, will modify later
    }

    dispatch(action) {    
        this.state = this.rootReducer(this.state, action, this.subscriptions);
    }

    subscribe(cb) {
        this.subscriptions.push(cb);
    }

}

export default Store;
