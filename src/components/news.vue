<template>
  <div class="news container-fluid">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="row" v-else>
      <div class="d-sm-flex justify-content-between align-items-center my-4">
        <div>
          <h3 class="covid-text">
            <span>News & Updates</span>
            <span class="ml-1 align-middle">
              <ion-icon name="radio-outline"></ion-icon>
            </span>
          </h3>
        </div>
        <span class="text-warning text-uppercase small font-weight-bold mr-3">
          <span class="mr-1">
            <ion-icon name="refresh" class="small bolder warning"></ion-icon>
          </span>
          <span>Updated {{ news[0].updated_at | humanize }}</span>
        </span>
      </div>
      <div class="col-md-4 col-sm-6 col-xl-3 p-3" v-for="(thenews, index) in news" :key="index">
        <sequential-entrance fromLeft>
          <div class="card neu news-card">
            <img :src="thenews.image_url" class="card-img-top news-image" :alt="thenews.title" />
            <div class="card-body">
              <h6 class="card-title covid-text news-title text-left">{{thenews.title}}</h6>
              <h6
                class="text-info float-left small font-weight-bold mt-3 text-uppercase"
              >{{thenews.created_at | humanize }}</h6>
              <a :href="thenews.url" target="_blank" rel="noopener noreferrer">
                <h6 class="text-muted float-right small font-weight-bold mt-3">READ MORE</h6>
              </a>
            </div>
          </div>
        </sequential-entrance>
      </div>
      <infinite-loading spinner="waveDots" @infinite="infiniteHandler">
        <div class="text-info h4 text-center my-3" slot="no-more">You have travelled way too far.</div>
        <div class="text-warning h4 text-center my-3" slot="no-results">No updates.</div>
        <div class="text-danger h4 text-center my-3" slot="error">Couldn't get what you wanted :(</div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "news",
  data() {
    return {
      news: [],
      limit: 24,
      start: 0,
      page: 1,
      loading: true,
      url: "https://nepalcorona.info/api/v1/news"
    };
  },
  metaInfo() {
    return {
      title: "News & Updates | covidnepal",
      meta: [
        {
          name: "description",
          content: "Follow news about covidcases from reputed news industries."
        }
      ]
    };
  },
  created() {
    axios
      .get(this.url, {
        params: {
          page: this.page,
          start: this.start,
          limit: this.limit
        }
      })
      .then(response => {
        if (response.data.data.length > 0) {
          this.news = response.data.data;
          this.loading = false;
        } else {
          console.log("Didn't found any updates.");
        }
      })
      .catch(error => {
        console.log(error);
        this.loading = true;
      });
  },
  methods: {
    infiniteHandler: function($state) {
      this.page += 1;
      this.start += 24;

      axios
        .get(this.url, {
          params: {
            page: this.page,
            start: this.start,
            limit: this.limit
          }
        })
        .then(response => {
          if (response.data.data.length > 0) {
            response.data.data.forEach(article => this.news.push(article));
            this.loading = false;
            $state.loaded();
          }
        })
        .catch(error => {
          console.log(error);
          $state.error();
        });
    }
  },
  beforeCreate() {
    this.loading = true;
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap");

@mixin for-md-and-sm {
  @media (max-width: 768px) {
    @content;
  }
}

.news {
  .news-title {
    font-family: "Mukta", sans-serif;
  }

  .news-image {
    height: 11rem;
  }

  .news-card {
    max-width: 24rem;
    min-height: 19rem;
  }
}

@include for-md-and-sm {
  .news {
    .news-image {
      height: unset;
    }

    .news-card {
      max-width: unset;
    }
  }
}
</style>