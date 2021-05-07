<template>
  <div class="p5">
    <v-data-table
      :headers="headers"
      :items="items"
      sort-by="calories"
      class="elevation-1"
      disable-pagination
      :loading="load"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title
            style="display: flex; align-items: center; height: 50px"
          >
            <SearchInput :getSearch="getSearch" />
          </v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <Modal
            :save="save"
            :close="close"
            :editedItem="editedItem"
            :dialog="dialog"
            :formTitle="formTitle"
            :changeDialog="changeDialog"
          />
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data> Sem registros! </template>
    </v-data-table>
    <ModalDelete
      :deleteItemConfirm="deleteItemConfirm"
      :closeDelete="closeDelete"
      :dialogDelete="dialogDelete"
      :changeDialog="changeDialog"
      :item="editedItem"
    />
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import actions from "./../store/actions/client";
import Modal from "./Modal.vue";
import ModalDelete from "./ModalDelete.vue";

export default {
  props: {
    items: Array,
    load: Boolean,
  },
  name: "DataTable",
  components: {
    SearchInput,
    Modal,
    ModalDelete,
  },
  data: () => ({
    search: String(),
    dialog: false,
    dialogDelete: false,
    isUpdate: false,
    headers: [
      { text: "CPF", value: "document" },
      { text: "Nome", value: "name" },
      { text: "Telefone", value: "phone" },
      { text: "email", value: "email" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return !this.isUpdate ? "Adicionar Item" : "Editar Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    getSearch(search) {
      this.search = search;
    },

    changeDialog() {
      this.dialog = !this.dialog;
    },
    editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.isUpdate = true;
    },

    deleteItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.$store.dispatch(actions.DELETE_CLIENT, this.editedItem);

      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.isUpdate = false;

      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
      });
    },

    save() {
      if (this.isUpdate) {
        this.$store.dispatch(actions.UPDATE_CLIENT, this.editedItem);
      } else {
        this.$store.dispatch(actions.CREATE_CLIENT, this.editedItem);
      }

      this.isUpdate = false;
      this.close();
    },
  },
};
</script>
<style scoped>
.p5 {
  padding: 0px 50px;
}
</style>
