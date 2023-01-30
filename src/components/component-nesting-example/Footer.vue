<template>
    <div>
        <footer>
            <p>{{ footerText }}</p>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'FooterComponent',
    data() {
        return {
            footerText: 'Copyright 2023 Sample App'
        }
    }
}
</script>

<style scoped>

footer {
    background: #222;
    padding: 6px;
}

p {
    color: lightgreen;
    text-align: center;
}
</style>