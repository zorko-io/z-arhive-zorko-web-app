<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-card color="grey lighten-4" flat>
        <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Login</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-1-3"
                  label="Hint Text"
                  :value="login"
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Full Name</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-2-3"
                  label="Hint Text"
                  :value="fullName"
                  class="input-group--focused"
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-btn @click="doLogout">Log Out</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  const apiBaseUri = process.env.ZORKO_API_BASE_URI

  export default {
    name: 'Account',
    computed: {
      login () {
        return this.$store.state.account.login
      },
      fullName () {
        return this.$store.state.account.name
      }
    },
    methods: {
      doLogout () {
        location.href = apiBaseUri + '/auth/logout'
      }
    },
    data () {
      return {
        title: 'Profile'
      }
    }
  }
</script>
