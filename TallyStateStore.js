class TallyStore {
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
                console.log('After ADD:', this.tally.count);
                break;
            case 'SUBTRACT' :
                this.tally.count -= 1;
                console.log('After SUBTRACT:', this.tally.count);
                break;
            case 'RESET' :
                this.tally.count = 0;
                console.log('After RESET:', this.tally.count);
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
        this.subscribers.forEach(callback => callback(this.getState()));
    }
}

export default TallyStore