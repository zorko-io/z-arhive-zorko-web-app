<template>
  <v-layout wrap>
    <v-flex xs3>
      <ZDatumFieldsPanel :fields="datum.fields"/>
    </v-flex>
    <v-flex xs8 style="margin-left: 10px">

    </v-flex>
  </v-layout>
</template>

<script>
import ZDatumFieldsPanel from './ZDatumFieldsPanel.vue'

import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('datum/')

export default {
  name: 'ZDatum',
  props: {
    name: {
      type: String
    }
  },
  components: {
    ZDatumFieldsPanel
  },
  computed: {
    ...mapState(['datum'])
  },
  created () {
    this.$store.dispatch({
      type: 'datum/loadDatum',
      name: this.name
    })
  }
}
</script>

