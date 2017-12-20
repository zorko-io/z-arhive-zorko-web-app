<template>
  <AppSubLayout :title="title">
    <v-layout>
      <v-flex xs12>
        <v-toolbar flat>
          <v-toolbar-title class="js-Library-looks-category">Popular Looks</v-toolbar-title>
        </v-toolbar>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex
              xs4
              v-for="look in popularLooks"
              :key="look.title"
            >
              <LibraryLook
                :src="look.src"
                :title="look.title"
                :path="look.path"
                @openLook="onOpenLook"
              />
            </v-flex>
          </v-layout>
        </v-container>
        <v-flex class="text-xs-center">
          <v-btn class="js-Library-next">Next ></v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </AppSubLayout>
</template>

<script>
  import AppSubLayout from '../AppSubLayout.vue'
  import LibraryLook from './LibraryLook.vue'

  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters } = createNamespacedHelpers('library/')

  export default {
    name: 'Library',
    components: {
      AppSubLayout,
      LibraryLook
    },
    computed: mapGetters([
      'popularLooks'
    ]),
    methods: {
      onOpenLook (item) {
        this.$router.push(item.path)
      }
    },
    data () {
      return {
        title: 'Library',
        size: 'lg'
      }
    }
  }
</script>

<style scoped>

  .util-pointer {
    cursor: pointer;
  }

  .util-bold {
    font-weight: bold;
  }
</style>
