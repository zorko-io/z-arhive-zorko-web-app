<template>
  <v-layout wrap>
    <v-flex xs12>
      <ZAnalysis
        :look="look"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import ZAnalysis from '../analysis/ZAnalysis'

import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('look/')

export default {
  name: 'ZLook',
  components: {
    ZAnalysis
  },
  props: {
    name: {
      type: String
    }
  },
  computed: {
    ...mapState([
      'spec',
      'data',
      'filters',
      'fields'
    ]),
    look () {
      return {
        spec: this.spec,
        data: this.data,
        filters: this.filters,
        fields: this.fields
      }
    }
  },
  created () {
    this.$store.dispatch({
      type: 'look/loadLook',
      name: this.name
    })
  }
}
</script>
