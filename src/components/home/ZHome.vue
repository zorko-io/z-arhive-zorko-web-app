<template>
    <v-layout>
      <v-flex xs12>
          <ZBaseLooks
            v-if="looksPreview"
            :items="popularLooks"
            @lookInput="onLookInput"
            @datumInput="onOpenDatum"/>
          <ZBaseDatums
            v-if="datumsPreview"
            :items="popularDatums"
            @datumInput="onOpenDatum"
          />
      </v-flex>
    </v-layout>
</template>

<script>
import ZBaseLooks from '../base/ZBaseLooks.vue'
import ZBaseDatums from '../base/ZBaseDatums.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('home/')

export default {
  name: 'Home',
  components: {
    ZBaseLooks,
    ZBaseDatums
  },
  props: {
    looksPreview: {
      type: Boolean
    },
    datumsPreview: {
      type: Boolean
    }
  },
  computed: {
    ...mapGetters([
      'popularLooks',
      'popularDatums'
    ])
  },
  methods: {
    onLookInput (item) {
      this.$router.push(item.path)
    },
    onOpenDatum ({name}) {
      this.$router.push('/datums/' + name)
    }
  }
}
</script>
