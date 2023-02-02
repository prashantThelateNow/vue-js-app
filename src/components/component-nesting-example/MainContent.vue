<template>
  <div class="devs">
    <ul>
      <li v-for="developer in developers" :key="developer.name">
        <div>
          <h4>{{ developer.name }}</h4>
          &nbsp;&nbsp;
          <span
            ><a @click="developer.isShow = !developer.isShow"
              >Click me to toggle developer detail</a
            ></span
          >
        </div>

        <h5 v-show="developer.isShow">
          Expertise in: {{ developer.expertise }}
        </h5>
        <v-btn icon color="deep-orange" @click="remove">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <!-- <button>Delete</button> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    developers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    remove() {
      // eslint-disable-next-line vue/no-mutating-props
      this.developers.pop();
    },
  },
};
</script>

<style scoped>
.devs {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px 20px;
  box-sizing: border-box;
  background: lightcyan;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
