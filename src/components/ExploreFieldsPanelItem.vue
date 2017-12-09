<template>
        <v-list-tile avatar
                     :class="selectionClass"
                     @click="toggleSelection">
          <v-list-tile-content>
            <v-list-tile-title>{{ field.text }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <div>
              <!--TODO: uncomment when filters fixed-->
              <!--<v-btn small-->
                     <!--color="primary"-->
                     <!--dark-->
                     <!--v-if='!filterIsSelected(item.text)'-->
                     <!--@click.stop="addFilter(item.text)">+ Filter-->
              <!--</v-btn>-->
              <v-btn small
                     color="primary"
                     dark>
                Filter
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
        debugger
        return this.field.selected ? 'selected' : 'unselected'
      }
    },
    methods: {
      toggleSelection () {
        debugger
        this.$emit('toggleSelection', this.field)
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

