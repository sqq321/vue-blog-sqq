<template>
  <div id="app">
    <Header />

    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Header";
//import AddBlog from "./components/AddBlog";
//import ShowBlogs from "./components/ShowBlogs";
//import ListBlogs from "./components/ListBlogs";
export default {
  name: "App",
  components: {
    // ShowBlogs,
    //ListBlogs,
    Header
  }
};
</script>
<style>
</style>