<template>
  <div>
    <button @click="test">test</button>
  </div>
</template>
<script>
export default {
  name: 'ATest',
  data () {
    return {
      a: ''
    }
  },
  methods: {
    test () {
      this.$emit('load', this.a)
    }
  }
}
</script>
