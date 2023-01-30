<template>
    <div>
        <h3>Keyboard Events</h3>
        <label>Name:</label>
        <input type="text" v-on:keyup.enter="displayName"/>
        &nbsp;&nbsp;
        <label>Age:</label>
        <input type="text" v-on:keyup.alt.enter="displayAge"/>
    </div>
</template>

<script>

export default {
    name: 'KeyboardEvent',
    methods: {
        displayName() {
            alert('You entered your name!');
        },
        displayAge() {
            alert('You entered your age!');
        }
    }
}
</script>

<style scoped>
</style>