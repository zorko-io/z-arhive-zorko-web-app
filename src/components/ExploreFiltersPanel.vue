<template>

</template>

<script>
  export default {
    name: 'ExploreFiltersPanel',
    props: {
      dimentions: {
        type: Array,
        defaults: () => []
      },
      measures: {
        type: Array,
        defaults: () => []
      }
    },
    methods: {
      onSelectionChange (field) {
        debugger
        this.$emit('changeFieldSelection', field)
      }
    }
  }
</script>
