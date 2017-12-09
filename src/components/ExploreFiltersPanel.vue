<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content>
      <template slot="header">
        <div>Filter</div>
      </template>
      <v-card v-for="filter in filters">
        <v-card color="grey lighten-4" flat>
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs4>
                  <v-subheader>{{ filter.text }}</v-subheader>
                </v-flex>
                <v-flex xs4>

                </v-flex>
                <v-flex xs4>

                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  export default {
    name: 'ExploreFiltersPanel',
    props: {
      filters: {
        type: Array
      }
    }
  }
</script>
