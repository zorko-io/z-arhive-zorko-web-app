<template>
  <v-content fluid grid-list-xl>
    <v-layout row justify-center>
      <v-flex xs4 text-xs-center class="u-move-down-200px">
        <v-toolbar flat dense class="blue" dark height="">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-card-title>
            <div class="headline grey--text text-sm-center">{{subtitle}}</div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              dark
              class="green"
              @click="navigateToAuth">
              {{callToActionText}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
  const apiBaseUri = process.env.ZORKO_API_BASE_URI

  export default {
    name: 'AppLogin',
    methods: {
      navigateToAuth () {
        location.href = apiBaseUri + '/auth/github'
      }
    },
    data () {
      return {
        title: 'Log In',
        subtitle: 'Log in to Zorko via Github',
        callToActionText: 'Public Repos Only'
      }
    }
  }
</script>

<style scoped>
  .u-move-down-200px {
    padding-top: 100px;
  }
</style>

