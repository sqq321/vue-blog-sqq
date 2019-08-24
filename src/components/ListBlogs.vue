<template>
  <div class="show-blogs" v-theme:column="'wide'">
    <h1>测试Mixin混入</h1>
    <input type="text" placeholder="search something...." v-model="search" />
    <div v-for="(blog,index) in filterBlogs" :key="index" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import { constants } from "crypto";
import searchMixins from "../mixins/searchMixins";
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$axios.get("./posts").then(res => {
      console.log(res.data);
      this.blogs = res.data.slice(0, 10);
    });
  },
  //   computed: {
  //     filterBlogs() {
  //       return this.blogs.filter(blog => {
  //         return blog.title.match(this.search);
  //       });
  //     }
  //   },
  //注册多个局部指令
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },
  //多个局部指令
  /*filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  }*/
  mixins: [searchMixins]
};
</script>


<style scoped>
.show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: gray;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
