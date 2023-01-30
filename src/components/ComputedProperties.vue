<template>
    <div>
        <h3>Computed Properties/ Watchers</h3>
        <label>First Name:</label>
        <input type="text" v-model="person.firstName" />
        &nbsp;&nbsp;
        <label>Last Name:</label>
        <input type="text" v-model="person.lastName" />
        &nbsp;&nbsp;
        <br/><br/>
        <label>Watch Value:</label>
        <input type="text" v-model="watchValue" />

        <p>Computed Property: {{ fullName }}</p>
        <p>Using Watch: {{ value }}</p>
    </div>
</template>

<script>

export default {
    name: 'ComputedProperties',
    data() {
        return {
            person: {
                fullName: '',
                firstName: '',
                lastName: ''
            },
            watchValue: '',
            value: ''
        }
    },
    computed: {
        // fullName() {
        //     let { firstName, lastName } = this.person;
        //     return `${firstName} ${lastName}`;
        // }
        fullName: {
            get: function () {
                return `${this.person.firstName} ${this.person.lastName}`;
            },
            set: function (newValue) {
                let names = newValue.split(' ');
                this.person.firstName = names[0];
                this.person.lastName = names[names.length-1];
            }
        }
    },
    watch: {
        watchValue: function (val) {
            this.value = val;
        }
    }

}
</script>

<style scoped>
</style>