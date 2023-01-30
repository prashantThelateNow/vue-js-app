<template>
    <div>
        <h3>Data bindings</h3>
        <a v-bind:href="websiteLink" target="_blank">Go to website link</a>
        <input type="text" v-bind:value="person.name" />
        <p v-html="websiteTag"></p>
    </div>
</template>

<script>

export default {
    name: 'DataBinding',
    data() {
        return {
            websiteLink: 'https://v2.vuejs.org/v2/guide/',
            websiteTag: '<a href="https://v2.vuejs.org/v2/guide/" target="_blank">Go to website tag link</a>',
            person: {
                name: 'John Doe',
                Job: 'Software Engineer'
            }
        }
    }

}
</script>

<style scoped>
</style>