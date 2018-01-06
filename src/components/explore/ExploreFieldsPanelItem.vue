<template>
        <v-list-tile avatar
                     :class="selectionClass"
                     @click="toggleSelection">
          <v-list-tile-content>
            <v-list-tile-title>{{ field.text }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <div>
              <v-btn small
                     color="primary"
                     dark
                     @click.stop="toggleFilter">
                {{ label }}
              </v-btn>
            </div>
          </v-list-tile-action>
        </v-list-tile>
</template>

<script>
export default {
  name: 'ExploreFields',
  props: {
    field: {
      type: Object
    }
  },
  computed: {
    selectionClass () {
      return this.field.selected ? 'selected' : 'unselected'
    },
    label () {
      return this.field.filtered ? '- Filter' : '+ Filter'
    }
  },
  methods: {
    toggleSelection () {
      this.$emit('toggleSelection', this.field)
    },
    toggleFilter () {
      this.$emit('toggleFilter', this.field)
    }
  },
  data () {
    return {
      icon: 'justify'
    }
  }
}
</script>

<style scoped>
  .selected {
    background-color: #c0c0c6;
  }
  .unselected {

  }
</style>

