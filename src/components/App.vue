<template>
  <v-app>
    <BaseLoginDialog/>
    <template v-if="isLoading">
      <main>
        <BaseLoader/>
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
import BaseLoader from './base/BaseLoader.vue'
import NavigationMain from './navigation/NavigationMain.vue'
import BaseLoginDialog from './base/BaseLoginDialog.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    BaseLoader,
    NavigationMain,
    BaseLoginDialog
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
