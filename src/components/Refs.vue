<template>
    <div>
        <h3>Refs Example</h3>
        <input type="text" ref="input"/>
        &nbsp;
        <button @click="submit">Submit</button>
        &nbsp;&nbsp;
        <p>Value: {{ value }}</p>
    </div>
</template>

<script>

export default {
    name: 'RefsExample',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        submit() {
            this.value = this.$refs.input.value;
        }
    }
}
</script>

<style scoped>
</style>