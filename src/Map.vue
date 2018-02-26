<template>
  <div id="app" class="map">
    <header>
      <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    </header>
    <div class="page-header">
      <h1>{{title}}<small>{{tagline}}</small></h1>
    </div>
    <main>
      <div class="row">
        <div class="col-md-3">
          <menuSidebar></menuSidebar>
        </div>
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </main>
    <footer class="container-fluid">
      <p class="text-center">{{footerText}}</p>
    </footer>
  </div>
</template>

<script>
import menuSidebar from './components/Menu'
export default {
  name: 'app',
  data(){
    return {
      title: 'MAP',
      tagline: 'my adoption portal',
      footerText: '© MAP ' + new Date().getFullYear()
    }
  },
  components: {
    menuSidebar
  }
}
</script>
<style>
  main{
    min-height: 500px;
  }
</style>