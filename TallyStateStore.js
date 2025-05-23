class tallyStore {
    constructor() {
        this.tally = {count: 0};
        this.subscribers =  [];
        console.log ('Store intialized:', this.tally)
    }
    getState() {
        return this.tally;
    }

    dispatch(action) {
        switch (action.type){
            case 'ADD' :
                this.tally.count += 1;
           
                break;
            case 'SUBTRACT' :
                this.tally.count -= 1;
           
                break;
            case 'RESET' :
                this.tally.count = 0;
                break;
                
                default:
                throw new Error('Invalid Action');
        }
        this.notify();
    }
    subscribe(callback) {
        this.subscribers.push(callback);
    }
    notify() {
        this.subscribers.forEach(callback => callback());
    }
}

export default tallyStore