<template>
  <v-navigation-drawer
    permanent
    :mini-variant="miniVariant"
    :clipped="false"
    v-model="drawer"
    enable-resize-watcher
    :mini-variant-width="miniVariantWidth"
    app
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            {{ title }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>

    <!--<v-list>-->
    <!--<component-->
    <!--v-for="(item, i) in items"-->
    <!--:is="item.component"-->
    <!--:item="item"-->
    <!--&gt;-->
    <!--</component>-->
    <!--</v-list>-->


    <v-list>

      <template v-for="(item, i) in items">

        <v-list-tile
          v-if="item.component == 'item'"
          :key="i"
          :to="item.path"
        >
          <v-list-tile-action>
            <v-icon small v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-if="item.component == 'model'"
          :key="i"
        >
          <v-list-tile slot="item" @click="">
            <v-list-tile-action>
              <v-icon small v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile
            v-for="(child, j) in item.children"
            @click=""
            :key="j"
            :to="child.path"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ child.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          v-if="item.component == 'explore'"
          :key="i"
        >
          <v-list-tile slot="item" @click="">
            <v-list-tile-action>
              <v-icon small v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <template v-for="(exploreGroup, i) in item.children">
            <v-subheader v-text="exploreGroup.title"></v-subheader>
            <v-list-tile
              v-for="(explore, i) in exploreGroup.children"
              @click=""
              :key="i"
              :to="explore.path"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ explore.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>


        </v-list-group>

        <v-list-group
          v-if="item.component == 'group-item'"
          :key="i"
        >
          <v-list-tile slot="item" @click="">
            <v-list-tile-action>
              <v-icon small v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile
            v-for="(child, j) in item.children"
            @click=""
            :key="j"
            :to="child.path"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ child.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

      </template>

    </v-list>

  </v-navigation-drawer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'AppNavigation',

    computed: mapState({
      items: state => state.workspaceNavigation.items
    }),

    data () {
      return {
        path: '/model',
        title: 'Zorko',
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        miniVariantWidth: 106
      }
    }
  }
</script>

