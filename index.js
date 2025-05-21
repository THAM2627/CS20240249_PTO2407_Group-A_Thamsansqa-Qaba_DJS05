import tallyStore from "./Tally State Store";

const store = new tallyStore();

tallyStore.subscribe((state) => console.log(state));

tallyStore.dispatch({ type: 'ADD'});
tallyStore.dispatch({ type: 'ADD'});
tallyStore.dispatch({ type: 'SUBTRACT'});
tallyStore.dispatch({ type: 'RESET'});