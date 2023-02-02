<template>
  <div>
    <h3>To do list example</h3>
    <form name="todoListForm" v-on:submit.prevent="addNewToDo">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="E.g. Feed the cat"
              placeholder="E.g. Feed the cat"
              outlined
              dense
              v-model="todoTitle"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-btn type="submit" class="ma-2" small outlined color="indigo"
              >Add Todo Item</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </form>
    <ul>
      <li v-for="(todoItem, index) in todoList" v-bind:key="todoItem.id">
        {{ todoItem.title }}
        &nbsp;
        <span>
          <v-btn
            class="ma-2"
            x-small
            outlined
            color="indigo"
            @click="todoList.splice(index, 1)"
            >Remove Item</v-btn
          >
        </span>
      </li>
      <br />
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      todoId: 0,
      todoTitle: "",
      todoList: [],
    };
  },
  methods: {
    addNewToDo() {
      this.todoList.push({
        id: this.todoId++,
        title: this.todoTitle,
      });
      this.todoTitle = "";
    },
  },
  destroyed() {
    this.todoId = 0;
  },
};
</script>

<style scoped></style>
