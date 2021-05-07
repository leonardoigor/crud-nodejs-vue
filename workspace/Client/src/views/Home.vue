<template>
  <div style="padding: 50px 0">
    <DataTableVue :items="getClients" :load="getLoad" />
  </div>
</template>

<script>
import DataTableVue from "../components/DataTable.vue";
import { mapGetters } from "vuex";

import actions from "./../store/actions/client";

export default {
  name: "Home",

  components: {
    DataTableVue,
  },

  data: () => ({}),
  mounted() {
    this.$store.dispatch(actions.GET_ALL_CLIENTS);
  },
  computed: {
    ...mapGetters(["getClients", "getLoad"]),
  },
};
</script>
