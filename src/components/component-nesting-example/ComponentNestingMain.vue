<template>
    <div>
        <h3>Components Nesting</h3>
        <header-component></header-component>
        <main-content v-bind:developers="developers"></main-content>
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '../component-nesting-example/Header.vue'
import MainContent from './MainContent.vue';
import FooterComponent from './Footer.vue';

export default {
    name: 'ComponentNestingMain',
    components: {
        'header-component': HeaderComponent,
        'main-content': MainContent,
        'footer-component': FooterComponent
    },
    data() {
        return {
            developers: [
                { name: 'John Doe', expertise: 'Javascript', isShow: false},
                { name: 'John Kelvin', expertise: 'Angular', isShow: false},
                { name: 'John Mark', expertise: 'ReactJS', isShow: false},
                { name: 'John Hood', expertise: 'VueJS', isShow: false}
            ]
        }
    }
}
</script>

<style scoped>
</style>