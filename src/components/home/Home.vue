<template>
    <v-layout>
      <v-flex xs12>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex
              v-if="looksPreview"
              xs4
              v-for="look in popularLooks"
              :key="look.title"
            >
              <HomeLooksPreview
                :src="look.src"
                :title="look.title"
                :path="look.path"
                @openLook="onOpenLook"
              />
            </v-flex>
            <v-flex
              v-if="datumsPreview"
              xs12>
              <v-list two-line subheader>
                <HomeDatumsPreview
                  v-for="datum in popularDatums"
                  :title="datum.title"
                  :subtitle="datum.subtitle"
                />
              </v-list>
            </v-flex>

          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
</template>

<script>
  import HomeLooksPreview from './HomeLooksPreview.vue'
  import HomeDatumsPreview from './HomeDatumsPreview.vue'

  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters } = createNamespacedHelpers('home/')

  export default {
    name: 'Home',
    components: {
      HomeLooksPreview,
      HomeDatumsPreview
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
      ]),

      title () {
        return this.looksPreview ? 'Looks' : 'Datums'
      },

      category () {
        return this.looksPreview ? 'Popular Looks' : 'Popular Datums'
      }
    },
    methods: {
      onOpenLook (item) {
        this.$router.push(item.path)
      }
    },
    data () {
      return {
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
