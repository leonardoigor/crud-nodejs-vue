<template>
  <div>
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

  created() {
    this.initialize();
    console.log(this.$refs);
  },

  methods: {
    getSearch(search) {
      this.search = search;
    },
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ];
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
