<template>
  <div>
    <h3>Keyboard Events</h3>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="Name"
            placeholder="Name"
            outlined
            dense
            @keyup.enter="displayName"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="Age"
            placeholder="Age"
            outlined
            dense
            @keyup.alt.enter="displayAge"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "KeyboardEvent",
  methods: {
    displayName() {
      alert("You entered your name!");
    },
    displayAge() {
      alert("You entered your age!");
    },
  },
};
</script>

<style scoped></style>
