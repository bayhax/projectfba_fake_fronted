<template>
  <div class="home" style="width: 40px; height: 40px; background-color: red"></div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      input: '',
      bookList: []
    }
  },
  mounted: function () {
    this.showBooks()
  },
  methods: {
    addBook () {
      this.$http.get('http://127.0.0.1:8000/api/add_book?book_name=' + this.input)
        .then((response) => {
          var res = JSON.parse(response.bodyText)
          if (res.error_num === 0) {
            this.showBooks()
          } else {
            this.$message.error('新增书籍失败，请重试')
            console.log(res['msg'])
          }
        })
    },
    showBooks () {
      this.$http.get('http://127.0.0.1:8000/api/show_books')
        .then((response) => {
          var res = JSON.parse(response.bodyText)
          console.log(res)
          if (res.error_num === 0) {
            this.bookList = res['list']
          } else {
            this.$message.error('查询书籍失败')
            console.log(res['msg'])
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
