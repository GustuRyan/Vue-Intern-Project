<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    },
  },
  setup(props) {
    const alertFn = (parameter1) => {
      alert(parameter1);
    };
    const expanded = () => {
      console.log(props.id);
    };
    return {
      alertFn,
      expanded,
    };
  },
});
</script>

<template>
  <h2>Component A</h2>
  <button @click="alertFn('hi')">Continue</button>
  <br>
  <button @click="expanded">Show ID</button>
</template>