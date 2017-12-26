<template>
  <v-app>
    <LoginDialog/>

    <template v-if="isLoading">
      <main>
        <AppLoading/>
      </main>
    </template>

    <template v-if="isAppReady">
      <Navigation v-if="isNavigationVisible"></Navigation>
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
  import AppLoading from './AppLoading.vue'
  import Navigation from './navigation/Navigation.vue'
  import LoginDialog from './login/LoginDialog.vue'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      AppLoading,
      Navigation,
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
