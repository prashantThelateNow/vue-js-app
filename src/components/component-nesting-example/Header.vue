<template>
    <div>
        <header>
            <h3>{{ title }}</h3>
        </header>
    </div>
</template>

<script>

export default {
    name: 'HeaderComponent',
    data() {
        return {
            title: "Sample Header Text"
        }
    }
}
</script>

<style scoped>

header {
    background: lightgreen;
    padding: 10px;
}

h3 {
    color: #222;
    text-align: center;
}
</style>