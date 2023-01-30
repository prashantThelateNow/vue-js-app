<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
        <h3>List rendering</h3>
        <!-- array list rendering -->
        <ul>
            <li v-for="(fruit, index) in fruits" v-bind:key="fruit">{{index}} - {{ fruit }}</li>
        </ul>

        <!-- array of objects list rendering -->
        <ul>
            <li v-for="(user, index) in users" v-bind:key="user.name">{{index}}. <b>{{ user.name }}</b> - {{ user.course }}</li>
        </ul>

        <template v-for="(user, index) in users">
            <div :key="user.name">
                <h5>{{ index + 1  }}. {{ user.name }}</h5>
                <p>{{ user.course }}</p>
            </div>
        </template>

        <template v-for="user in users">
            <div v-for="(val, key) in user" >
                <h5>{{ key }} - {{ val }}</h5>
            </div>
        </template>
    </div>
</template>

<script>

export default {
    name: 'ListRendering',
    data() {
        return {
            fruits: ['Apple', 'Mango', 'Banana', 'Guava'],
            users: [
                {name: 'John Doe', course: 'Javascript'},
                {name: 'John Smith', course: 'Golang'},
                {name: 'John Mark', course: 'Java'},
                {name: 'John Kelvin', course: 'Angular'},
                {name: 'John Stein', course: 'React'},
            ]
        }
    }
}
</script>

<style scoped>
</style>