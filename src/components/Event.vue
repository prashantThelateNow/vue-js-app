<template>
  <div>
    <h3>Events</h3>
    <!-- On click -->
    <v-btn
      class="ma-2"
      small
      outlined
      color="indigo"
      @click="increaseAgeValue(1)"
    >
      Add a Year
    </v-btn>
    <v-btn
      class="ma-2"
      small
      outlined
      color="indigo"
      @click="decreaseAgeValue(1)"
    >
      Substract a Year
    </v-btn>

    <!-- On double click using shorthand property -->
    <v-btn
      class="ma-2"
      small
      outlined
      color="secondary"
      @dblclick="increaseAgeValue(5)"
    >
      Add 5 Year
    </v-btn>
    <v-btn
      class="ma-2"
      small
      outlined
      color="secondary"
      @dblclick="decreaseAgeValue(5)"
    >
      Substract 5 Year
    </v-btn>

    <p>My age is {{ age }}</p>

    <div class="canvas" v-on:mousemove="updateXY">
      <b>{{ x }}, {{ y }}</b>
    </div>

    <!-- Event modifiers -->
    <a href="https://v2.vuejs.org/v2/guide/" v-on:click.prevent="clickLink()"
      >Click me</a
    >
  </div>
</template>

<script>
export default {
  name: "EventExample",
  data() {
    return {
      age: 26,
      x: 0,
      y: 0,
    };
  },
  methods: {
    increaseAgeValue(inc) {
      this.age += inc;
    },
    decreaseAgeValue(dec) {
      this.age -= dec;
    },
    updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clickLink() {
      alert("Link clicked!");
    },
  },
};
</script>

<style scoped>
.canvas {
  width: 400px;
  padding: 130px 5px;
  text-align: center;
  border: 1px solid #333;
}
</style>
