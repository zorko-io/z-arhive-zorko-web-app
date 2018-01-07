<template>
  <v-layout wrap>
    <v-flex xs3>
      <ZDatumFieldsPanel :fields="datum.fields"/>
    </v-flex>
    <v-flex xs8 style="margin-left: 10px">
      <ZBaseLooks
        :title="looksTitle"
        :items="looks"/>
    </v-flex>
  </v-layout>
</template>

<script>
import ZBaseLooks from '../base/ZBaseLooks.vue'
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
    ZBaseLooks,
    ZDatumFieldsPanel
  },
  computed: {
    ...mapState([
      'datum',
      'looks'
    ])
  },
  created () {
    this.$store.dispatch({
      type: 'datum/loadDatum',
      name: this.name
    })
  },
  data () {
    return {
      looksTitle: 'Related Looks'
    }
  }
}
</script>

