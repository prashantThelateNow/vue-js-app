<!-- Two way data binding can achieve using v-model in vuejs -->

<template>
    <div>
        <h3>Two way data binding</h3>
        <label>Person Name:</label>
        <input type="text" v-model="person.name" />
        &nbsp;&nbsp;
        <label>Person Age:</label>
        <input type="text" v-model="person.age" />
        <p>Person Name: {{ person.name }} &nbsp;&nbsp; Person Age: {{ person.age }}</p>
    </div>
</template>

<script>

export default {
    name: 'TwoWayDataBinding',
    data() {
        return {
            person: {
                name: '',
                age: null
            }
        }
    }
    
}
</script>

<style scoped>
</style>