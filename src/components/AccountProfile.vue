<template>
  <app-sub-layout :title="title">
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
            </v-container>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </app-sub-layout>
</template>

<script>
  import AppSubLayout from '@/components/AppSubLayout'

  export default {
    name: 'AccountProfile',
    components: {
      AppSubLayout
    },
    computed: {
      login () {
        return this.$store.state.account.login
      },
      fullName () {
        return this.$store.state.account.name
      }
    },

    data () {
      return {
        title: 'Profile'
      }
    }
  }
</script>
