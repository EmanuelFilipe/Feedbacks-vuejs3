<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
/* eslint-disable */
import Loading from './Loading.vue'
//import Copy from './Copy.vue'
//import ChevronDown from './ChevronDown.vue'

export default {
  components: { Loading },
  props: {
    name: { type: String, required: true }
  }
}
</script>
