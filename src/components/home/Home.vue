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
                :src="look.preview"
                :title="look.title"
                :path="look.path"
                :author="look.author"
                :datum="look.datum"
                @openLook="onOpenLook"
                @openDatum="onOpenDatum"
              />
            </v-flex>
            <v-flex
              v-if="datumsPreview"
              xs12>
              <v-list two-line subheader>
                <HomeDatumsPreview
                  v-for="datum in popularDatums"
                  :name="datum.name"
                  :title="datum.title"
                  :connection="datum.connection"
                  :description="datum.description"
                  :info="datum.info"
                  :looksCount="datum.looksCount"
                  @openDatum="onOpenDatum"
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
      ])
    },
    methods: {
      onOpenLook (item) {
        this.$router.push(item.path)
      },
      onOpenDatum ({name}) {
        this.$router.push('/datums/' + name)
      }
    },
    data () {
      return {
        size: 'lg'
      }
    }
  }
</script>
