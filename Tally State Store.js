class tallyStore {
    constructor() {
        this.tally = 0;
    }
    getState() {
        return this.tally;
    }

    dispatch(action) {
        switch (action.type){
            case 'ADD':
                this.tally.count += 1;
                break;
            case ''
        }
    }