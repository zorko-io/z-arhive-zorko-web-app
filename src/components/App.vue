<template>
  <v-app>
    <LoginDialog/>
    <template v-if="isLoading">
      <main>
        <Loader/>
      </main>
    </template>
    <template v-if="isAppReady">
      <NavigationMain>
        <router-view name="controls"></router-view>
      </NavigationMain>
      <main>
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
      </main>
      <v-footer app>
        <span>{{ footerText }}</span>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
  import Loader from './Loader.vue'
  import NavigationMain from './navigation/NavigationMain.vue'
  import LoginDialog from './login/LoginDialog.vue'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Loader,
      NavigationMain,
      LoginDialog
    },

    computed: {
      ...mapGetters([
        'isAuthenticated'
      ]),

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
