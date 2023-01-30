<template>
    <div>
        <h3>Events</h3>
        <!-- On click -->
        <button v-on:click="increaseAgeValue(1)">Add a Year</button>
        <button v-on:click="decreaseAgeValue(1)">Substract a Year</button>

        <!-- On double click using shorthand property -->
        <button @dblclick="increaseAgeValue(5)">Add 5 Year</button>
        <button @dblclick="decreaseAgeValue(5)">Substract 5 Year</button>
        
        <p>My age is {{ age }}</p>

        <div class="canvas" v-on:mousemove="updateXY">
            <b>{{ x }}, {{ y }}</b>
        </div>

        <!-- Event modifiers -->
        <a href="https://v2.vuejs.org/v2/guide/" v-on:click.prevent="clickLink()">Click me</a>
    </div>
</template>

<script>

export default {
    name: 'EventExample',
    data() {
        return {
            age: 26,
            x: 0,
            y: 0
        }
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
            alert('Link clicked!');
        }
    }
}
</script>

<style scoped>

.canvas {
    width: 400px;
    padding: 130px 5px;
    text-align: center;
    border: 1px solid #333;
}
</style>