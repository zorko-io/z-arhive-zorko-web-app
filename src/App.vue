<template>
  <v-app>
    <app-navigation></app-navigation>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
    <v-footer app>
      <span>{{ footerText }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import AppNavigation from '@/components/AppNavigation'

  export default {
    components: {
      AppNavigation
    },

    created () {
      axios
        .get('http://localhost:3000/auth/account', {withCredentials: true})
        .then((account) => console.log(account))
        .catch((error) => console.error(error))
    },

    data () {
      return {
        footerText: '2017'
      }
    }
  }
</script>
