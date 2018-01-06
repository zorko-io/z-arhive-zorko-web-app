<template>
  <v-flex xs12>
    <v-list two-line subheader>
      <ZBaseDatumsItem
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :title="item.title"
        :connection="item.connection"
        :description="item.description"
        :info="item.info"
        :looksCount="item.looksCount"
        @datumActivated="onDatumActivated"
      />
    </v-list>
  </v-flex>
</template>

<script>
import ZBaseDatumsItem from './ZBaseDatumsItem.vue'

export default {
  name: 'ZBaseDatums',
  components: {
    ZBaseDatumsItem
  },
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    onDatumActivated (item) {
      this.$emit('datumInput', item)
    }
  }
}
</script>
