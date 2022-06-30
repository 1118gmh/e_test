<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted () {
    console.log('mounted')
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('1秒后执行')
    //     resolve(101)
    //   }, 1000)
    // }).then(res => {
    //   if (res === 100) {
    //     console.log('res', res)
    //     return 101
    //   }
    //   console.log('gmh2')
    //   this.fun(res)

    //   const newError = new Error('aaa')
    //   newError.name = 'ServerError'
    //   throw newError
    // }).then(res2 => {
    //   console.log('res2', res2)
    // }).catch((e) => {
    //   if (e.name !== 'ServerError') {
    //     console.log('ljljljl')
    //   }
    //   console.error(e)
    // })
  },
  methods: {
    fun (res) {
      switch (res) {
        case 101:
          console.log('break1')
          break
        default:
          break
      }
      return 103
    }

  }
}
</script>
