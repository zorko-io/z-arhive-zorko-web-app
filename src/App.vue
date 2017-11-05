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

  const baseUri = process.env.ZORKO_API_BASE_URI

  export default {
    components: {
      AppNavigation
    },

    created () {
      axios
        .get(baseUri + '/auth/account', {withCredentials: true})
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
