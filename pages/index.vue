<template>
  <div>
    <h1>RESPLUS</h1>
    <pre>{{ fossils }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ fossils: 'getFossils' }),
  },
  mounted() {},
}
</script>
