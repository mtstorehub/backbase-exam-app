<template>
  <div id="app">
    <div id="nav" class="page-container md-layout-column">
      <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Backbase CXS Front-end</span>

      <div class="md-toolbar-section-end">
        <md-button @click="showSidepanel = true">Favorites</md-button>
      </div>
    </md-toolbar>
    
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Item</router-link> |
      <router-link to="/index">All Item</router-link> | -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
.page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

</style>
