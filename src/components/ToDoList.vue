<template>
    <div>
        <h3>To do list example</h3>
        <form name="todoListForm" v-on:submit.prevent="addNewToDo">
            <input type="text" name="todoTitle" placeholder="E.g. Feed the cat" v-model="todoTitle">
            &nbsp;
            <button type="submit">Add Todo Item</button>
        </form>
        <ul>
            <li v-for="(todoItem, index) in todoList" v-bind:key="todoItem.id">
                {{ todoItem.title }}
                &nbsp;
                <span>
                    <button v-on:click="todoList.splice(index, 1)">Remove Item</button>
                </span>
            </li>
            <br/>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'ToDoList',
    data() {
        return {
            todoId: 0,
            todoTitle: '',
            todoList: []
        }
    },
    methods: {
        addNewToDo() {
            this.todoList.push({
                id: this.todoId++,
                title: this.todoTitle
            });
            this.todoTitle = '';
        }
    },
    destroyed() {
        this.todoId = 0;
    }
}
</script>

<style scoped>
</style>