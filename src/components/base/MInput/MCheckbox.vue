<template>
  <input :id="name + value" type="checkbox" :name="name" :value="value" @input="handleInput($event)"
    v-model="selectedItem" />
</template>
<script>
export default {
  props: {
    value: {
      Type: String,
      default: '1'
    },
    name: {
      Type: String,
      default: 'cbxCheckbox'
    },
  },
  created() {
  },
  data() {
    return {
      selectedItem: String,
    };
  },
  methods: {
    handleInput: function (event) {
      const value = {
        value: event.target.value,
        checked: event.target.checked
      }
      this.$emit("update:selectedItem", value);
    },
  },
};
</script>
