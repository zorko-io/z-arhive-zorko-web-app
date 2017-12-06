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
  import AppLogin from '@/components/AppLogin'
  import AppLoading from '@/components/AppLoading'
  import AppNavigation from '@/components/AppNavigation'
  import LoginDialog from '@/components/LoginDialog'
  import { mapGetters, mapActions } from 'vuex'

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
        return this.$store.state.workspaceNavigation.visible
      },

      isLoading () {
        return this.$store.state.isLoading
      },

      isAppReady () {
        return !this.isLoading
      }
    },
    methods: {
      ...mapActions([
        'gatherAccountInfo'
      ])
    },

    created () {
      this.gatherAccountInfo()
    },

    data () {
      return {
        footerText: '2017'
      }
    }
  }
</script>
