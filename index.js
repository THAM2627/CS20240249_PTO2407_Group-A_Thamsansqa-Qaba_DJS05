import TallyStore from "./TallyStateStore.js";

const store = new TallyStore();

store.subscribe((state) => console.log('New state:', state));

console.log('Dispatching ADD action...');
store.dispatch({ type: 'ADD'});

console.log('Dispatching ADD action one more time...');
store.dispatch({ type: 'ADD'});

console.log('Dispatching SUBTRACT action...');
store.dispatch({ type: 'SUBTRACT'});

console.log('Dispatching RESET action...');
store.dispatch({ type: 'RESET'});