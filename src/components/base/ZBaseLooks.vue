<template>
  <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
    <v-layout row wrap>
      <v-flex
        v-for="item in items"
        :key="item.name"
        xs4>
        <ZBaseLooksItem
          :src="item.preview"
          :title="item.title"
          :path="item.path"
          :author="item.author"
          :datum="item.datum"
          @lookActivated="onLookActivated"
          @datumActivated="onDatumActivated"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ZBaseLooksItem from './ZBaseLooksItem.vue'

export default {
  name: 'ZBaseLooks',
  components: {
    ZBaseLooksItem
  },
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    onLookActivated (item) {
      this.$emit('lookInput', item)

      this._routeTo(item.path)
    },
    onDatumActivated (item) {
      this.$emit('datumInput', item)

      this._routeTo('/datums/' + item.name)
    },
    _routeTo (path) {
      this.$router && this.$router.push(path)
    }
  },
  data () {
    return {
      size: 'lg'
    }
  }
}
</script>
