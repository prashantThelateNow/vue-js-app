<template>
  <div>
    <h3>Dynamic CSS/ Styles</h3>
    <div v-bind:class="{ 'text-danger': isBtnClicked }">
      Click button on below to change my text color
    </div>
    <v-btn class="ma-2" small outlined color="indigo" @click="changeTextColor"
      >Click here</v-btn
    >

    <div v-bind:style="{ color: activeColor, fontSize: `${fontSize}px` }">
      Dynamic styling
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicCSS",
  data() {
    return {
      isBtnClicked: false,
      activeColor: "green",
      fontSize: 30,
    };
  },
  methods: {
    changeTextColor() {
      this.isBtnClicked = !this.isBtnClicked;
    },
  },
};
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>
