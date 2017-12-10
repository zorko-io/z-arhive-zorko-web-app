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
                  <v-select
                    v-bind:items="isMEasureFilter(filter) ? measureOptions : dimentionOptions"
                    v-model="select.state"
                    label="Select"
                    single-line
                    bottom
                    v-on:change="selectCondition"
                  ></v-select>
                </v-flex>
                <v-flex xs4>
                  <v-text-field
                    v-on:change="filterValue"
                    name='filter.text'
                    v-bind:label="isMEasureFilter(filter) ? ('Put number of the' + filter.text) : ('Put value of ' + filter.text)"
                    single-line
                    :value="filter.value"
                  ></v-text-field>
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
  import { FILTER_VALUES } from './../../constants'

  export default {
    name: 'ExploreFiltersPanel',
    props: {
      filters: {
        type: Array
      }
    },
    methods: {
      selectCondition (event) {
        console.log(event)
      },
      filterValue (event) {
        console.log(event)
      },
      isMEasureFilter (filter) {
        return filter.type === FILTER_VALUES.MEASURE
      }
    },
    data () {
      return {
        select: { state: FILTER_VALUES.EQUAL_TO },
        measureOptions: [
          {text: FILTER_VALUES.EQUAL_TO},
          {text: FILTER_VALUES.NOT_EQUAL_TO},
          {text: FILTER_VALUES.MORE_THAN},
          {text: FILTER_VALUES.LESS_THAN}
        ],
        dimentionOptions: [
          {text: FILTER_VALUES.EQUAL_TO},
          {text: FILTER_VALUES.NOT_EQUAL_TO}
        ]
      }
    }
  }
</script>
