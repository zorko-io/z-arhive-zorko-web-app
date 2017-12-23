<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-subheader>{{ filter.text }}</v-subheader>
    </v-flex>
    <v-flex xs4>
      <v-select
        :items="conditions"
        v-model="selectedCondition"
        label="Select"
        single-line
        bottom
      ></v-select>
    </v-flex>
    <v-flex xs4>
      <v-text-field
        @change="onValueChange"
        name='filter.text'
        :label="label"
        single-line
        :value="filter.value"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
  import {FILTER_VALUES} from '../../constants'

  export default {
    name: 'AnalysisFiltersPanelItem',
    props: {
      filter: {
        type: Object
      }
    },
    computed: {
      isMeasure () {
        return this.filter.type === FILTER_VALUES.MEASURE
      },
      label () {
        if (this.isMeasure) {
          return 'Put number of the' + this.filter.text
        } else {
          return 'Put value of ' + this.filter.text
        }
      },
      conditions () {
        // TODO: make conditions part of filter itself
        if (this.isMeasure) {
          return [
            FILTER_VALUES.EQUAL_TO,
            FILTER_VALUES.NOT_EQUAL_TO,
            FILTER_VALUES.MORE_THAN,
            FILTER_VALUES.LESS_THAN
          ]
        } else {
          return [
            FILTER_VALUES.EQUAL_TO,
            FILTER_VALUES.NOT_EQUAL_TO
          ]
        }
      },
      selectedCondition: {
        get () {
          return this.filter.condition
        },
        set (value) {
          this.$emit('changeCondition', this.filter, value)
        }
      }
    },
    methods: {
      onConditionChange (event) {
        this.$emit('changeCondition', this.filter, event.text)
      },
      onValueChange (value) {
        this.$emit('changeValue', this.filter, value)
      }
    }
  }
</script>
