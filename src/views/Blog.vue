<template>
  <div class="blog">
    <div class="blog_introduce">
      <div class="date_author">
        <div>2021-11-15</div>
        <div>John hacker</div>
      </div>
      <div class="blog_title">Meta world</div>
    </div>
    <div class="blog_content">
      <span>
        How to Fade In and Out Video in Premiere | Timestamps

        Default Fade (Beginning and End Fades): 0:56
        Effect Fade (Beginning and End Fades): 1:55
        Keyframe Fade (Perfect for every situation): 2:55
        Fading videos in and out is a great way to clean up your movies and adds a smooth transition between clips. Without fades, your movie may be jarring to your viewers.
        In this video, I talk about three different ways to fade in and out video in premiere.
        The first two ways are very quick and easy but only work at the beginning and end of clips. (Essentially, if you are trying to fade in and out the bookends of your video).
        The third way to fade in and out of clips is by using keyframes on the opacity attribute. This way is a bit more advanced than the first two but is the most versatile and my primary go-to.
        Check out these other Adobe tutorials:
        Create patterns in Illustrator: https://wallamoose.com/patterns-in-illustrator/
        How to convert JPG to Vector: https://wallamoose.com/jpeg-to-vector/
        Edit clipping masks in Illustrator: https://wallamoose.com/clipping-masks/
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog'
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
