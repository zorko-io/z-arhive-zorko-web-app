<template>
  <v-layout wrap>
    <v-flex xs3>
      <DatumFieldsPanel :fields="datum.fields"/>
    </v-flex>
    <v-flex xs8 style="margin-left: 10px">

    </v-flex>
  </v-layout>
</template>

<script>
  import DatumFieldsPanel from './DatumFieldsPanel.vue'

  import {createNamespacedHelpers} from 'vuex'
  const {mapState} = createNamespacedHelpers('datum/')

  export default {
    name: 'Datum',
    props: {
      name: {
        type: String
      }
    },
    components: {
      DatumFieldsPanel
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

