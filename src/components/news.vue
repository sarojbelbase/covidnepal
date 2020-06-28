<template>
  <div class="news container-fluid">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="row" v-else>
      <div class="d-sm-flex justify-content-between align-items-center my-2">
        <h3 class="covid-text pt-4 align-middle">
          <span>News & Updates</span>
          <span class="m-2">
            <ion-icon name="radio"></ion-icon>
          </span>
        </h3>
        <span class="covid-text text-uppercase small font-weight-bold">
          <span class="m-1">
            <ion-icon name="refresh" class="small bolder"></ion-icon>
          </span>
          <span>Updated {{ news[0].updated_at | humanize }}</span>
        </span>
      </div>
      <div
        class="col-md-4 col-sm-6 col-xl-3 p-3 my-2"
        v-for="(thenews, index) in news"
        :key="index"
      >
        <div class="card neu news-card">
          <img :src="thenews.image_url" class="card-img-top news-image" alt="thenews.title" />
          <div class="card-body">
            <h6 class="card-title text-muted news-title text-left">{{thenews.title}}</h6>
            <h6
              class="text-info float-left small font-weight-bold mt-3 text-uppercase"
            >{{thenews.created_at | humanize }}</h6>
            <a :href="thenews.url" target="_blank" rel="noopener noreferrer">
              <h6 class="text-muted float-right small font-weight-bold mt-3">READ MORE</h6>
            </a>
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
        this.news = response.data.data.sort((a, b) =>
          a.created_at < b.created_at ? 1 : -1
        );
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
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap");

.news .news-title {
  font-family: "Mukta", sans-serif;
}

.news .news-image {
  height: 11rem;
}

.news .news-card {
  max-width: 24rem;
  min-height: 19rem;
}

@media (max-width: 768px) {
  .news .news-image {
    height: unset;
  }

  .news .news-card {
    max-width: unset;
  }
}
</style>