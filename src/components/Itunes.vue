<template>
 <div class="itunes">
    <h1>Itunes</h1>
    <h2>Music and Video Streaming at its best!</h2>

<form v-on:submit.prevent="findmusic">
      <input type="text" id="myInput" placeholder="Search Favorite Artist.." title="Type in a name">
     <input type="checkbox" name="enter name here" value="enter value here">Audio
          <input type="checkbox" name="enter name here" value="enter value here">Video
 <p><input type="submit" value="Submit"></p>
</form>
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
      entity: '',
      atribute: '',
       msg: 'Itunes Search'
    }
  },
  methods: {
    findmusic:function() {
      axios.get('https://affiliate.itunes.apple.com/resources/documentation/itunes-storeweb-service-search-api/')
           params: {
           entity=all,
           attribute=all

  }
    })
      .then( response => {
        this.results = response.data;
      })
      .catch( error => {
         this.errors.push(error);
      })
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
