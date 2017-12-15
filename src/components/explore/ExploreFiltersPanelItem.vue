<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-subheader>{{ filter.text }}</v-subheader>
    </v-flex>
    <v-flex xs4>
      <v-select
        :items="conditions"
        label="Select"
        single-line
        bottom
        @change="onConditionChange"
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
  import {FILTER_VALUES} from '@/constants'

  export default {
    name: 'ExploreFiltersPanelMeasure',
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
            {text: FILTER_VALUES.EQUAL_TO},
            {text: FILTER_VALUES.NOT_EQUAL_TO},
            {text: FILTER_VALUES.MORE_THAN},
            {text: FILTER_VALUES.LESS_THAN}
          ]
        } else {
          return [
            {text: FILTER_VALUES.EQUAL_TO},
            {text: FILTER_VALUES.NOT_EQUAL_TO}
          ]
        }
      }
    },
    methods: {
      onConditionChange (event) {
        this.$emit('changeCondition', this.filter, event.text)
      },
      onValueChange (event) {
        this.$emit('changeValue', this.filter, event)
      }
    }
  }
</script>
