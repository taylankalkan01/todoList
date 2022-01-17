const app = Vue.createApp({
    data() {
      return {
        todoList: [
          { id: 1, text: "To-do Demo 1", completed: false},
          { id: 2, text: "To-do Demo 2", completed: false},
          { id: 3, text: "To-do Demo 3", completed: false},
          { id: 4, text: "To-do Demo 4", completed: false},
          { id: 5, text: "To-do Demo 5", completed: false},
          { id: 6, text: "To-do Demo 6", completed: false},
          { id: 7, text: "To-do Demo 7", completed: false},
        ],
      };
    },
    methods: {
      addTodo(event) {
        this.todoList.push({
          id: new Date().getTime(),
          text: event.target.value,
          completed: false,
        });
        event.target.value = "";
      },
      removeItem(todoItem) {
        this.todoList = this.todoList.filter((todo) => todo !== todoItem);
      },
    },
    computed: {
        completedItemCount() {
          return this.todoList.filter((t) => t.completed).length;
        },
        unCompletedItemCount() {
          return this.todoList.filter((t) => !t.completed).length;
        },
      },
  }).mount("#app");