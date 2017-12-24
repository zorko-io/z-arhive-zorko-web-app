<template>
  <v-app>
    <LoginDialog/>

    <template v-if="isLoading">
      <main>
        <AppLoading/>
      </main>
    </template>

    <template v-if="isAppReady">
      <AppNavigation v-if="isNavigationVisible"></AppNavigation>
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
  import AppLogin from './AppLogin.vue'
  import AppLoading from './AppLoading.vue'
  import AppNavigation from './AppNavigation.vue'
  import LoginDialog from './LoginDialog.vue'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      AppLogin,
      AppLoading,
      AppNavigation,
      LoginDialog
    },

    computed: {
      ...mapGetters([
        'isAuthenticated'
      ]),

      isNavigationVisible () {
        return this.$store.state.navigation.visible
      },

      isLoading () {
        return this.$store.state.isLoading
      },

      isAppReady () {
        return !this.isLoading
      }
    },

    created () {
      this.$store.dispatch({
        type: 'bootstrapAppInitialState'
      })
    },

    data () {
      return {
        footerText: '2017'
      }
    }
  }
</script>
