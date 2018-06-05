<template>        

 <div class="itunes">
<h1>{{ msg }}</h1>
    <h1></h1>

    <h2></h2>

<form v-on:submit.prevent="findmusic">
      <input type="text" id="myInput" placeholder="Search Favorite Artist.." title="Type in a name">

 <p><input type="submit" value="Submit"></p>
</form>


<!-- <p>{{results}}</p> -->

<ul id="results">
  <li v-for="result in results">
   <span>{{ result.trackName }}</span>

  </li>
</ul>






    </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Itunes",
  data() {
    return {
      results: null,
      errors: [],
      entity: "",
      atribute: "",
      msg: "Itunes Search"
    };
  },
  methods: {
    findmusic: function() {
      axios
        .get("https://itunes.apple.com/search?term=R&B+HipHop&limit=25", {
          params: { term: "R&B+HipHop", limit: "25" }
        })
        .then(response => {
          this.results = response.data.results;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
    //     var results = new Vue({
    //   el: '#results',
    //   data: {
    //     items: [
    //       { message: 'artistName' },
    //       { message: 'artworkUrl30' }
    //     ]
    //   }
    // })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #010a06;
}
</style>

