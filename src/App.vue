<template>
<v-app id="inspire">
    <side-bar :drawer="drawer"></side-bar>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <home></home>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import Home from './Components/Home.vue';
    import SideBar from './Components/SideBar.vue';
    import Maps from './Components/Maps.vue';

    @Component({
        components: {
            'side-bar': SideBar,
            'home': Home
        }
    })
    export default class App extends Vue {
        drawer: boolean = true;
    }
</script>