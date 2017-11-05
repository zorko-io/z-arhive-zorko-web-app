<template>
  <v-app>
    <app-navigation v-show="isAppReady"></app-navigation>
    <main>
      <v-content>
        <app-loading v-if="isLoading"></app-loading>
        <app-login v-show="isLoginRequired"></app-login>
        <router-view v-show="isAppReady"></router-view>
      </v-content>
    </main>
    <v-footer app v-show="isAppReady">
      <span>{{ footerText }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import AppLogin from '@/components/AppLogin'
  import AppLoading from '@/components/AppLoading'
  import AppNavigation from '@/components/AppNavigation'

  const baseUri = process.env.ZORKO_API_BASE_URI

  export default {
    components: {
      AppLogin,
      AppLoading,
      AppNavigation
    },

    created () {
      axios
        .get(baseUri + '/auth/account', {withCredentials: true})
        .then((account) => {
          console.log(account)
          this.isLoading = false
          this.isAnonymSession = false
        })
        .catch((error) => {
          console.log(error)
          this.isLoading = false
          this.isAnonymSession = true
        })
    },

    data () {
      return {
        footerText: '2017',
        isLoading: true,
        isAnonymSession: true
      }
    },

    computed: {
      isAppReady () {
        return !this.isLoading && !this.isAnonymSession
      },
      isLoginRequired () {
        return !this.isLoading && this.isAnonymSession
      }
    }
  }
</script>
