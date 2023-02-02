<!-- Two way data binding can achieve using v-model in vuejs -->

<template>
  <div>
    <h3>Two way data binding</h3>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="Person Name"
            placeholder="Person Name"
            outlined
            dense
            v-model="person.name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="Person Age"
            placeholder="Person Age"
            outlined
            dense
            v-model="person.age"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <p>
      Person Name: {{ person.name }} &nbsp;&nbsp; Person Age: {{ person.age }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TwoWayDataBinding",
  data() {
    return {
      person: {
        name: "",
        age: null,
      },
    };
  },
};
</script>

<style scoped></style>
