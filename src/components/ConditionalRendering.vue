<template>
  <div>
    <h3>Conditional Rendering</h3>
    <v-btn class="ma-2" small outlined color="indigo" @click="error = !error"
      >Toggle Error</v-btn
    >
    <v-btn
      class="ma-2"
      small
      outlined
      color="indigo"
      @click="success = !success"
      >Toggle Succes</v-btn
    >

    <p>Using v-if, v-else, v-else-if</p>
    <p class="text-danger" v-if="error">There has been an error!</p>
    <p class="text-success" v-else-if="success">There has been success!</p>

    <p>Using v-show</p>
    <p class="text-danger" v-show="error">There has been an error!</p>
    <p class="text-success" v-show="success">There has been success!</p>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      error: false,
      success: false,
    };
  },
};
</script>

<style scoped>
.text-danger {
  color: red;
}

.text-success {
  color: green;
}
</style>
