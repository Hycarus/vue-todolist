
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
            todoText: '',
            filterValue: '',
        }
    },
    // contiene le funzioni e i metodi 
    methods: {
        addTask(){
            this.tasks.unshift({
                id: ++this.lastId,
                text: this.todoText,
                done: false,
            });
            this.todoText = '';
        },
        removeTask(id){
            const index = this.getIndex(id, this.tasks)
            this.tasks.splice(index, 1);
        },
        todoInvert(id){
            const index = this.getIndex(id, this.tasks)
            this.tasks[index].done = !this.tasks[index].done
        },
        filteredTasks(){
            return this.tasks.filter((task)=>{
                if(this.filterValue === '2' && !task.done){
                    return true;
                } else if(this.filterValue === '1' && task.done){
                    return true;
                } else if(this.filterValue === ''){
                    return true;
                }
            });
        },
    }
}).mount('#app')