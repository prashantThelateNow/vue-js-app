<template>
  <div class="content-main">
    <header-component
      v-bind:title="title"
      v-on:changeTitleText="updateTitle($event)"
    ></header-component>
    <main-content v-bind:developers="developers"></main-content>
    <footer-component v-bind:title="title"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../component-nesting-example/Header.vue";
import FooterComponent from "./Footer.vue";
import MainContent from "./MainContent.vue";

export default {
  name: "ComponentNestingMain",
  components: {
    "header-component": HeaderComponent,
    "main-content": MainContent,
    "footer-component": FooterComponent,
  },
  data() {
    return {
      title: "Components Nesting",
      developers: [
        { name: "John Doe", expertise: "Javascript", isShow: false },
        { name: "John Kelvin", expertise: "Angular", isShow: false },
        { name: "John Mark", expertise: "ReactJS", isShow: false },
        { name: "John Hood", expertise: "VueJS", isShow: false },
      ],
    };
  },
  methods: {
    updateTitle(value) {
      this.title = value;
    },
  },
};
</script>

<style scoped>
.content-main {
  padding: 40px;
}
</style>
