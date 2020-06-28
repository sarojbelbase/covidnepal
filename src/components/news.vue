<template>
  <div class="news container-fluid">
    <div class="row">
      <div
        class="col-md-6 col-sm-6 col-xl-3 p-3 mt-3"
        v-for="(thenews, index) in news"
        :key="index"
      >
        <div class="card neu" style="max-width: 24rem; min-height: 22rem;">
          <img :src="thenews.image_url" class="card-img-top img-responsive" alt="thenews.title" />
          <div class="card-body">
            <h5 class="card-title text-muted">{{thenews.title}}</h5>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "news",
  data() {
    return {
      news: [],
      loading: true
    };
  },
  beforeCreate() {
    this.loading = true;
  },
  created() {
    axios
      .get("https://nepalcorona.info/api/v1/news")
      .then(response => {
        this.news = response.data.data;
        console.log(response.data.data);
        response.data.forEach(hello => {
          console.log(hello);
        });
        console.log(response.data);
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = true;
      });
  }
};
</script>

<style>
.masonry {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 0;
}
</style>