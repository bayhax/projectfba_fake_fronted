<template>
  <div class="home-main">
    <div class="main_background">
      <div class="background_text">
        <h2>遥知不是雪，唯有暗香来</h2>
      </div>
      <div class="text_down">
        <span>梅花</span>
      </div>
    </div>
    <div class="popular">
      <div class="popular_block">
        <div class="popular_text">
          <h1>咏鹅</h1>
        </div>
        <div class="popular_pic">
          <div class="item_pic">
            <img alt="first" src="../assets/ecommerce.jpeg" class="img_reshape">
            <div><h3>曲项向天歌</h3></div>
            <div><a href="">READ MORE</a></div>
            <div>date</div>
          </div>
          <div class="item_pic">
            <img alt="second" src="../assets/design_one.jpeg" class="img_reshape">
            <div><h3>白毛浮绿水</h3></div>
            <div><a href="">READ MORE</a></div>
            <div>date</div>
          </div>
          <div class="item_pic">
            <img alt="third" src="../assets/design_two.jpeg" class="img_reshape">
            <div><h3>红掌拨清波</h3></div>
            <div><a href="">READ MORE</a></div>
            <div>date</div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduce_video">
      <div class="introduce_block">
        <div class="text_explain">
          <div><h2>Introduce Video</h2></div>
          <div><span>白日依山尽，黄河入海流</span></div>
          <div><a href="#">观看更多</a></div>
        </div>
        <div class="video">
          <img alt="introduce_video" src="../assets/logo.png">
        </div>
      </div>
    </div>
    <div class="search">
      <div class="search_item esty">
        <div class="search_img">
          <img alt="esty" src="../assets/logo.png" class="search_img_reshape">
        </div>
        <div class="search_text">
          <h3>Esty</h3>
          <span>
            My favorite eCommerce platform, ETSY. Here, you can find all you need to know about running a successful shop
            <a href="#">更多</a>
          </span>
        </div>
      </div>
      <div class="search_item social_media">
        <div class="search_img"><img alt="social_media" src="../assets/logo.png" class="search_img_reshape"></div>
        <div class="search_text">
          <h3>Social Media</h3>
          <span>
            My favorite eCommerce platform, ETSY. Here, you can find all you need to know about running a successful shop
            <a href="#">更多</a>
          </span>
        </div>
      </div>
      <div class="search_item finance">
        <div class="search_img"><img alt="finance" src="../assets/logo.png" class="search_img_reshape"></div>
        <div class="search_text">
          <h3>Finance</h3>
          <span>
            My favorite eCommerce platform, ETSY. Here, you can find all you need to know about running a successful shop
            <a href="#">更多</a>
          </span>
        </div>
      </div>
      <div class="search_item marketing">
        <div class="search_img"><img alt="marketing" src="../assets/logo.png" class="search_img_reshape"></div>
        <div class="search_text">
          <h3>Marketing</h3>
          <span>
            My favorite eCommerce platform, ETSY. Here, you can find all you need to know about running a successful shop
            <a href="#">更多</a>
          </span>
        </div>
      </div>
      <div class="search_item business">
        <div class="search_img"><img alt="business" src="../assets/logo.png" class="search_img_reshape"></div>
        <div class="search_text">
          <h3>Business</h3>
          <span>
            My favorite eCommerce platform, ETSY. Here, you can find all you need to know about running a successful shop
            <a href="#">更多</a>
          </span>
        </div>
      </div>
      <div class="search_item design">
        <div class="search_img"><img alt="design" src="../assets/logo.png" class="search_img_reshape"></div>
        <div class="search_text">
          <h3>Design</h3>
          <span>
            My favorite eCommerce platform, ETSY. Here, you can find all you need to know about running a successful shop
            <a href="#">更多</a>
          </span>
        </div>
      </div>
    </div>
    <div class="recently">
      <div class="recently_pic">
        <div class="item_pic">
          <img alt="first" src="../assets/ecommerce.jpeg" class="img_reshape">
          <div><h3>曲项向天歌</h3></div>
          <div><a href="">READ MORE</a></div>
          <div>date</div>
        </div>
        <div class="item_pic">
          <img alt="second" src="../assets/design_one.jpeg" class="img_reshape">
          <div><h3>白毛浮绿水</h3></div>
          <div><a href="">READ MORE</a></div>
          <div>date</div>
        </div>
        <div class="item_pic">
          <img alt="third" src="../assets/design_two.jpeg" class="img_reshape">
          <div><h3>红掌拨清波</h3></div>
          <div><a href="">READ MORE</a></div>
          <div>date</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_background {
  background-image: url(../assets/background.jpeg);
  width: 100%;
  height: 400px;
  color: azure;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.background_text {
  color: azure;
}
.popular {
  height: 600px;
  width: 100%;
}
.popular_block {
  margin: 40px 20px 20px;
}
.item_pic {
  margin-right: 10px;
}
.popular_pic {
  display: grid;
  grid-auto-flow: column;
}
.img_reshape {
  width: 300px;
  height: 150px;
}
.introduce_video {
  height: 500px;
  width: 100%;
}
.introduce_block {
  margin: 40px 20px 20px;
  display: grid;
  grid-auto-flow: column;
}
.text_explain {
  display: grid;
}
.search {
  height: 500px;
  width: 100%;
  display: grid;
  grid-template: auto / 1fr 1fr;
  margin-bottom: 60px;
}
.search_item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search_img {
  width: 25%;
}
.search_text {
  text-align: left;
  width: 60%;
}
.search_img_reshape {
  width: 60px;
  height: 60px;
}
.recently {
  height: 500px;
}
.recently_pic {
  display: grid;
  grid-auto-flow: column;
}
</style>
