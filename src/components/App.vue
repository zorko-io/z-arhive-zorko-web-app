<template>
  <v-app>

    <template v-if="isLoading">
      <main>
          <app-loading></app-loading>
      </main>
    </template>

    <template v-if="isLoginRequired">
      <main>
        <app-login></app-login>
      </main>
    </template>

    <template v-if="isAppReady">
      <app-navigation></app-navigation>
      <main>
        <v-content>
          <router-view></router-view>
        </v-content>
      </main>
      <v-footer app>
        <span>{{ footerText }}</span>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import AppLogin from '@/components/AppLogin'
  import AppLoading from '@/components/AppLoading'
  import AppNavigation from '@/components/AppNavigation'

  const apiBaseUri = process.env.ZORKO_API_BASE_URI

  export default {
    components: {
      AppLogin,
      AppLoading,
      AppNavigation
    },

    created () {
      axios
        .get(apiBaseUri + '/auth/account', {withCredentials: true})
        .then((response) => {
          let {name, login} = response.data.user._json

          console.log(response)
          this.isLoading = false
          this.isAnonymSession = false

          this.$store.commit('setAccount', {
            name,
            login
          })
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
