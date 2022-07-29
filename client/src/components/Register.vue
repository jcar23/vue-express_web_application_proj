<template>
  <div>
    <h1>
      Register
    </h1>
    <input type="email" name="email" placeholder="email" v-model="email">
    <br>
    <input v-model="password" name="password" type="password" placeholder="password">
    <br>
    <button @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
      // alert('register button was clicked', this.email, this.password)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 2000)
  }
}
</script>
<style scoped>

</style>
