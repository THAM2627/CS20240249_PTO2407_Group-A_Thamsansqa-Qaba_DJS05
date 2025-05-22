import tallyStore from "./Tally State Store";

const store = new tallyStore();

tallyStore.subscribe((state) => console.log(state));

console.log('Dispatching ADD action...');
tallyStore.dispatch({ type: 'ADD'});

console.log('Dispatching ADD action one more time...');
tallyStore.dispatch({ type: 'ADD'});

console.log('Dispatching SUBTRACT action...');
tallyStore.dispatch({ type: 'SUBTRACT'});

console.log('Dispatching RESET action...');
tallyStore.dispatch({ type: 'RESET'});