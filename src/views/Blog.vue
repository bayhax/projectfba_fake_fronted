<template>
  <div class="blog">
    <div class="blog_introduce">
      <div class="date_author">
        <div>{{ blogData.blog_date }}</div>
        <div>{{ blogData.blog_author }}</div>
      </div>
      <div class="blog_title">{{ blogData.blog_title }}</div>
    </div>
    <div class="blog_content">
      <span>{{ blogData.blog_description }}</span>
      <span>
        {{ blogData.blog_content }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getBlog } from '../store/mutation-type'
export default {
  name: 'Blog',
  data () {
    return {
      blogData: {
        blog_id: 1,
        blog_title: '',
        blog_author: '',
        blog_date: '',
        blog_content: '',
        blog_description: '',
        blog_keywords: ''
      }
    }
  },
  methods: {
    ...mapActions({
      getBlog
    }),
    getBlogData () {
      let blogId = 1
      this.$http.get('http://localhost:8000/blog/?blog_id=' + blogId)
        .then((response) => {
          if (!response) return
          this.blogData = response.data
        })
    }
  },
  mounted: function () {
    this.getBlogData()
  }
}

</script>

<style scoped>
.blog {
  height: 1000px;
  width: 100%;
}
.date_author {
  height: 50px;
  display: flex;
  justify-content: center;
}
.blog_content {
  text-align: left;
  width: 80%;
  margin-left: 5%;
  font-size: 25px;
}
</style>
