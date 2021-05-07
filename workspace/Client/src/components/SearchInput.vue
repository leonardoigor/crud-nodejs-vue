<template>
  <v-text-field
    label="Pesquisar"
    hide-details="auto"
    dense
    v-model="search"
  ></v-text-field>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    getSearch: Function,
  },

  data: () => ({
    search: String(),
  }),
  watch: {
    search: function (val) {
      this.getSearch(val);
    },
  },
};
</script>
