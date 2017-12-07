<template>
  <v-dialog v-model="shouldShowLoginDialog">
    <v-toolbar flat dense class="blue" dark height="">
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-title style="display: block">
        <div class="headline grey--text text-sm-center">{{subtitle}}</div>
      </v-card-title>
      <v-card-actions style="display: block; text-align:center">
        <v-btn
          dark
          class="green"
          @click="login">
          {{callToActionText}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  const GITHUB_PROVIDER = 'github'

  export default {
    name: 'LoginDialog',
    computed: {
      shouldShowLoginDialog: {
        get () {
          return this.$store.getters.shouldShowLoginDialog
        },
        set (value) {
          if (!value) {
            this.$store.commit({
              type: 'rejectLogin'
            })
          }
        }
      }
    },
    data () {
      return {
        title: 'Log In',
        subtitle: 'Saving or sharing look require authentification',
        callToActionText: 'Log in with Github'
      }
    },
    methods: {
      login () {
        this.$store.dispatch({
          type: 'login',
          provider: GITHUB_PROVIDER
        })
      }
    }
  }
</script>
