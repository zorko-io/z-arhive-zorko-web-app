<template>
  <v-layout fluid>
    <v-flex xs6 text-xs-center>
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
</template>

<script>
  export default {
    name: 'AppLogin',
    methods: {
      navigateToAuth () {
        location.href = 'http://localhost:3000/auth/github'
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

