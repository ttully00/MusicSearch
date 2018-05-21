<template>
 <div class="itunes">
<div class="row" id="search_artist">
                <div class="wrapper">
                    <h1>Itunes Search</h1>

<form id="form">
        <input type="text" placeholder="Search artist name" id="input_search" />
      </form>
    </div>
  </div>

<div class="row" id="album_list_container">

  </div>
    </div>


</template>

<script>

import axios from 'axios';

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
      axios.get("https://itunes.apple.com/search?term=R&B+HipHop&limit=25", {
          params: { term: "R&B+HipHop", limit: "25" }
        })
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #010a06;
}

</style>
