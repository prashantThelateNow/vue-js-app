<!-- Basic concepts of Vue JS
=============================================================================

    - Vue instatnce
    - Conditional rendering
    - Events handling, 
    - Loops/list rendering, 
    - Data bindings, 
    - Two-way data bindings, 
    - Keyboard events,
    - Vue lifecycle hooks => [ beforeCreate() => created() => beforeMount() => mounted() => beforeUpdate() => updated() => beforeDestroy() => destroyed() ]
    - beforeUpdate() & updated() lifecycle hooks works when there is any changes occurs in components
-->

<template>
    <!-- Data & Methods -->
    <div>
        <h3>Interpolations</h3>
        <span v-if="isVueFramework">Yes! its Vue Framework</span>
        <div v-if="isPersonInfo">
            <h3>{{ greet('night') }}</h3>
            <p>Name: {{ person.name }}</p>
            <p>Job: {{ person.job }}</p>
        </div>
        <div>
            <h3>{{ message }}</h3>
            <button v-on:click="reverseMessage">Reverse Message</button>
        </div>
    </div>
</template >

<script>

 export default {
    name: 'BasicConcept',   
    data() {
        return {
            person: {
                name: 'John Doe',
                job: 'Software Engineer' 
            },
            message: 'Data binding in vue',
            isVueFramework: true,
            isPersonInfo: true, 
        }
    },
    methods: {
        greet(time) {
            return `Good ${time} ${this.person.name}`;
        },
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        }
    }
 }
</script>

<!-- Here 'scoped' used to encapsulate the styles to this component only -->
<style scoped>

</style>