
const {createApp} = Vue
createApp({
    // contiene tutti i dati / le variabili 
    data(){
        return {
            tasks: [
                {
                    id: 1,
                    text: 'testo 1',
                    done: false,
                }, 
                {
                    id: 2,
                    text: 'testo 2',
                    done: true,
                }, 
                {
                    id: 3,
                    text: 'testo 3',
                    done: false,
                },
                {
                    id: 4,
                    text: 'testo 4',
                    done: true,
                },
            ],
            lastId: 4,
        }
    },
    // contiene le funzioni e i metodi 
    methods: {
        
    }
}).mount('#app')