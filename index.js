import TallyStore from "./TallyStateStore.js";

const store = new TallyStore();

store.subscribe((state) => console.log('New state:', state));


store.dispatch({ type: 'ADD'});


store.dispatch({ type: 'ADD'});


store.dispatch({ type: 'SUBTRACT'});


store.dispatch({ type: 'RESET'});