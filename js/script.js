
const {createApp} = Vue
createApp({
    // contiene tutti i dati / le variabili 
    data(){
        return {
            tasks: [
                {
                    id: 1,
                    text: 'Computer',
                    done: false,
                }, 
                {
                    id: 2,
                    text: 'Playstation',
                    done: true,
                }, 
                {
                    id: 3,
                     text: 'Iphone 14',
                    done: false,
                },
                {
                    id: 4,
                    text: 'T-shirt',
                    done: true,
                },
            ],
            lastId: 4,
            todoText: '',
            filterValue: '',
            audio: new Audio('audio/jingle-bells.mp3'),
            active: true,
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
            const index = getIndex(id, this.tasks)
            this.tasks.splice(index, 1);
        },
        todoInvert(id){
            const index = getIndex(id, this.tasks)
            this.tasks[index].done = !this.tasks[index].done
        },
        // getIndex(id){
        //     return this.tasks.findIndex((el) => el.id === id);
        // },
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
        stopMusic(){
            this.audio.pause();
            this.active = false;
        },
        playMusic(){
            this.audio.play();
            this.active = true;
        },
    },
    mounted(){
        this.audio.play();
    },
}).mount('#app')