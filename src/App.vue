<template>
  <div id="app">
    <nav>
      <router-link to="/">Read Only</router-link>
      <router-link to="/attribute-change">One Way Data Binding</router-link>
      <router-link to="/data-change">Two Way Data Binding</router-link>
      <router-link to="/ajax">Ajax</router-link>
      <router-link to="/ssr">SSR</router-link>
      <router-link to="/methods">Methods</router-link>
      <router-link to="/events">Events</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
    margin-bottom: 25px;
}

nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
  font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
  font-weight: 400;
  letter-spacing: .5px;
  font-size: 15px;
  cursor: pointer;
}

nav a:visited, nav a:link {
  color: #607D8B;
}

nav a:hover, 
.router-link-exact-active {
  color: white !important;
  background-color: #607D8B;
}
</style>
