<template>
  <v-content fluid grid-list-xl>
    <v-layout row justify-center>
      <div v-model="dialog" class="login">
        <v-toolbar flat dense class="blue" dark height="">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-card-title  style="display: block">
            <div class="headline grey--text text-sm-center">{{subtitle}}</div>
          </v-card-title>
          <v-card-actions style="display: block; text-align:center">
            <v-btn
              dark
              class="green"
              @click="navigateToAuth">
              {{callToActionText}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
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
        dialog: true,
        title: 'Log In',
        subtitle: 'Log in to Zorko via Github',
        callToActionText: 'Public Repos Only'
      }
    }
  }
</script>

<style scoped>
  .login {
    width: 500px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -250px;
  }
</style>

