<template>
  <div>
    <h3>Computed Properties/ Watchers</h3>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="First Name"
            placeholder="First Name"
            outlined
            dense
            v-model="person.firstName"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="Last Name"
            placeholder="Last Name"
            outlined
            dense
            v-model="person.lastName"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="Watch Value"
            placeholder="Watch Value"
            outlined
            dense
            v-model="watchValue"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <p>Computed Property: {{ fullName }}</p>
    <p>Using Watch: {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "ComputedProperties",
  data() {
    return {
      person: {
        fullName: "",
        firstName: "",
        lastName: "",
      },
      watchValue: "",
      value: "",
    };
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
        let names = newValue.split(" ");
        this.person.firstName = names[0];
        this.person.lastName = names[names.length - 1];
      },
    },
  },
  watch: {
    watchValue: function (val) {
      this.value = val;
    },
  },
};
</script>

<style scoped></style>
