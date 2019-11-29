<template>
  <div id="app">
    <div id="nav" class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Backbase CXS Frontend</span>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Backbase Exam App</span>
        </md-toolbar>

        <md-list>
          <router-link to="/">
            <md-list-item @click="showNavigation = false">
              <md-icon>pool</md-icon>
              <span class="md-list-item-text">Training</span>
            </md-list-item>
          </router-link>

          <router-link to="/contact_us">
            <md-list-item @click="showNavigation = false">
              <md-icon>school</md-icon>
              <span class="md-list-item-text">Contribute</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-drawer>

      <md-content>
        <router-view />
      </md-content>

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Item</router-link> |
      <router-link to="/index">All Item</router-link> |-->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      showNavigation: false,
      showSidepanel: false
    };
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/vuetify/dist/vuetify.css";

$primary-color: #d50000;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.md-title {
  font-size: 1.8em;
}

.md-primary {
  background-color: $primary-color !important;
}

.page-container {
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  position: fixed !important;
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
  height: -webkit-fill-available;
  position: relative;
}

router-link {
  text-decoration: none;
}
</style>