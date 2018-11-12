<template>
  <div>
    <header>
      <h1>Kerstlijstje</h1>
      <p>Kies de persoon aan wie jij een cadeautje moet geven.</p>
    </header>
    <b-form-group>
      <b-form-checkbox-group
        plain
        stacked
        v-model="selected"
        name="kerstlijstje"
        :options="options"
        @change="change"
        class="group"
      >
      </b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const data = await app.$axios.$get('/api/users');
    return { selected : data.map(({value}) => value) };
  },
  data() {
    return {
      options: [
        { text: "Maarten", value: "maarten" },
        { text: "Sabine", value: "sabine" },
        { text: "Adriaan", value: "adriaan" },
        { text: "Floris", value: "floris" },
        { text: "Erwin", value: "erwin" },
        { text: "Karen", value: "karen" },
        { text: "Laura", value: "laura" },
        { text: "Olivia", value: "olivia" },
        { text: "Moeke", value: "moeke" },
        { text: "Vake", value: "vake" },
        { text: "Vake Leo", value: "vake_leo" },
        { text: "Maria", value: "maria" }
      ]
    };
  },
  methods: {
    async change(value) {
      const result = await this.$axios.$post('/api/users', value.map((user) => ({ value: user })));
      this.selected = result.map(({value}) => value);
    },
  },
};
</script>

<style>
.custom-control-label::after,
.custom-control-label::before {
  width: 1.5rem;
  height: 1.5rem;
  left: -2rem;
}

.custom-control-label::before {
  background-color: #ccc;
}

.custom-control {
  padding-left: 2rem;
}

.form-check {
  margin-bottom: 1rem;
}

.group {
  column-count: 2;
	column-gap: 1.5rem;
}
</style>
