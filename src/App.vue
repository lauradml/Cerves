<template>
  <div id="app">
    <nav>
      <router-link to="/">Tab-1</router-link> 
      <router-link to="/tab-2">Tab-2</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/styles/variables.scss";
body{
   background: $fondo;
}
#app {
  font-family: $font-roboto, $font-roboto-slab, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:  0px 47px 0px 47px;
}

nav {
  width:100%;
  height: 47px;
  background: #FFFFFF;
  text-align: right;
  padding-top: 10px;

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: #2c3e50;
     padding:  17px 17px 0px 17px;

    &.router-link-exact-active {
      color: #4BA7EE;
    }
  }
}
</style>
