<template>
  <AppSubLayout :title="title">
    <v-layout wrap>
      <v-flex xs12>
          <v-list two-line subheader>
            <DatumsItem
              v-for="datum in popularDatums"
              :title="datum.title"
              :subtitle="datum.subtitle"
            />
          </v-list>
      </v-flex>
    </v-layout>
  </AppSubLayout>
</template>

<script>
  import AppSubLayout from '../AppSubLayout.vue'
  import DatumsItem from './DatumsItem.vue'

  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters } = createNamespacedHelpers('library/')

  export default {
    name: 'Datums',
    components: {
      AppSubLayout,
      DatumsItem
    },
    computed: mapGetters([
      'popularDatums'
    ]),
    data () {
      return {
        title: 'Datums'
      }
    }
  }
</script>
