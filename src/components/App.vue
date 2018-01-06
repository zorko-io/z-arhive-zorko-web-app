<template>
  <v-app>
    <ZBaseLoginDialog/>
    <template v-if="isLoading">
      <main>
        <ZBaseLoader/>
      </main>
    </template>
    <template v-if="isAppReady">
      <ZNavigationMain>
        <router-view name="controls"></router-view>
      </ZNavigationMain>
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
import ZBaseLoader from './base/ZBaseLoader.vue'
import ZNavigationMain from './navigation/ZNavigationMain.vue'
import ZBaseLoginDialog from './base/ZBaseLoginDialog.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    ZBaseLoader,
    ZNavigationMain,
    ZBaseLoginDialog
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
