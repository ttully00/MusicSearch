<template>
  <div class="itunes">
    <h1>Itunes</h1>
    <h2>Music and Video Streaming at its best!</h2>
    <!-- <ol>
     <input type="text" id="myInput" placeholder="Search Favorite Artist.." title="Type in a name">
     <input type="checkbox" name="enter name here" value="enter value here">Audio
          <input type="checkbox" name="enter name here" value="enter value here">Video  <input type="submit">

    <ol> -->
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'Itunes Search',
  data () {
    return {
      results: null,
      errors: [],
      videos: '',
      audio: '',
       msg: 'Itunes Search'
    }
  },
  methods: {
    findWords: function() {
      axios.get('https://itunes.apple.com/search?term=audio')

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
  color: #010a06;
}
</style>
