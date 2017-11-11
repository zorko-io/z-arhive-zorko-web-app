<template>
  <v-app>

    <template v-if="isLoading">
      <main>
        <app-loading></app-loading>
      </main>
    </template>

    <template v-if="!isAuthenticated">
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
  import AppLogin from '@/components/AppLogin'
  import AppLoading from '@/components/AppLoading'
  import AppNavigation from '@/components/AppNavigation'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      AppLogin,
      AppLoading,
      AppNavigation
    },

    computed: {
      ...mapGetters([
        'isAuthenticated'
      ]),

      isLoading () {
        return this.$store.state.isLoading
      },

      isAppReady () {
        return !this.isLoading && this.isAuthenticated
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
