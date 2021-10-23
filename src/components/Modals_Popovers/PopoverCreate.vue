<template>
  <div class="text-center">
    <b-button id="popover-button-open" variant="primary">Button</b-button>

    <b-popover show target="popover-button-open" title="Popover">
      I start <strong>open</strong>
    </b-popover>
  </div>
</template>

<script>
import Button from "../components/Button";
export default {
  data: function () {
    return {
      title: "",
      chosenColor: "",
      theme: "#FFF3F8",
      editing: "",
      text: "",
      name: "",
    };
  },
  props: ["notes"],
  components: {
    ButtonCustom: Button,
  },
  methods: {
    handleSelected() {
      this.editingNote = event.target;
    },
    createNew() {
      this.$emit(
        "noteAdded",
        this.title,
        this.text,
        this.theme,
        this.editing,
        this.name
      );
      this.title = "";
      this.text = "";
      // this.theme = '';
      this.name = "";
      this.editing = false;
    },
    deleteNote(index) {
      this.$emit("noteDeleted", index);
    },
    changeColor() {
      this.theme = event.target.value;
    },
  },
};
</script>

<style lang="scss" scope>
::placeholder {
  color: #737373;
}
.border-input {
  border-radius: 10px;
  border: 1px solid grey;
  padding-left: 20px !important;
  margin-bottom: 15px;
}
.btn-submit {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>