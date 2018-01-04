<template>
  <v-layout wrap>
    <v-flex xs3>
      <DatumFieldsPanel/>
    </v-flex>
    <v-flex xs8 style="margin-left: 10px">

    </v-flex>
  </v-layout>
</template>

<script>
  import DatumFieldsPanel from './DatumFieldsPanel.vue'

  export default {
    name: 'Datum',
    components: {
      DatumFieldsPanel
    }
  }
</script>

