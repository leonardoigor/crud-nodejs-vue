<template>
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="headline"
        >Você tem certeza que deseja deletar este item?</v-card-title
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalDelete",
  props: {
    deleteItemConfirm: Function,
    closeDelete: Function,
    dialogDelete: Boolean,
    item: Object,
  },

  data: () => ({}),
};
</script>
