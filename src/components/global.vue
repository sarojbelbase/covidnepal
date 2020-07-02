<template>
  <div class="index">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="homepage" v-else>
      <div class="container">
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
          <h3 class="covid-text mb-0 pt-4">Overview</h3>
          <span class="covid-text text-uppercase small font-weight-bold">
            <span class="m-1">
              <ion-icon name="refresh" class="small bolder"></ion-icon>
            </span>
            <span>Updated {{ global.updated | humanize }}</span>
          </span>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xl-3 mb-4">
            <sequential-entrance fromLeft>
              <div class="card py-2 neu">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="text-uppercase text-warning mb-1">
                        <h4 class="font-weight-bold">Confirmed</h4>
                      </div>
                      <div class="text-muted">
                        <h3 class="font-weight-bold">{{ global.cases | padding }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </sequential-entrance>
          </div>
          <div class="col-md-6 col-sm-6 col-xl-3 mb-4">
            <sequential-entrance fromLeft>
              <div class="card py-2 neu">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="text-uppercase text-success">
                        <h4 class="font-weight-bold">Recovered</h4>
                      </div>
                      <div class="text-muted">
                        <h3 class="font-weight-bold">{{ global.recovered | padding }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </sequential-entrance>
          </div>
          <div class="col-md-6 col-sm-6 col-xl-3 mb-4">
            <sequential-entrance fromLeft>
              <div class="card py-2 neu">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="text-uppercase text-danger">
                        <h4 class="font-weight-bold">Deceased</h4>
                      </div>
                      <div class="text-muted">
                        <h3 class="font-weight-bold">{{ global.deaths | padding }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </sequential-entrance>
          </div>
          <div class="col-md-6 col-sm-6 col-xl-3 mb-4">
            <sequential-entrance fromLeft>
              <div class="card py-2 neu">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="text-uppercase text-info">
                        <h4 class="font-weight-bold">Active</h4>
                      </div>
                      <div class="text-muted">
                        <h3 class="font-weight-bold">{{ global.active | padding }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </sequential-entrance>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="col-12">
              <div class="d-sm-flex justify-content-between align-items-center mb-3">
                <h3 class="covid-text">{{ global.updated | dayify }}</h3>
              </div>
            </div>
            <sequential-entrance fromLeft>
              <div class="card mb-4 p-3 neu">
                <div class="card-body">
                  <ul class="list-group list-group-flush covid-text">
                    <li class="list-group-item neuify looks border-warning mb-2">
                      <div class="row text-left">
                        <div class="col mr-2">
                          <h5 class="m-1">
                            <strong>{{global.todayCases | padding }} new postive cases</strong>
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item neuify looks border-success mb-2">
                      <div class="row text-left">
                        <div class="col mr-2">
                          <h5 class="m-1">
                            <strong>{{global.todayRecovered | padding }} new recovered cases</strong>
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item neuify looks border-danger mb-1">
                      <div class="row text-left">
                        <div class="col mr-2">
                          <h5 class="m-1">
                            <strong>{{global.todayDeaths | padding }} new death cases</strong>
                          </h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </sequential-entrance>
          </div>

          <div class="col-lg-6">
            <div class="col-12">
              <div class="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 class="covid-text mb-0">Details</h3>
              </div>
            </div>
            <sequential-entrance fromLeft>
              <div class="row">
                <div class="col-lg-6 col-sm-6 mb-4">
                  <div class="card covid-text neu">
                    <div class="card-body">
                      <p class="font-weight-bold h5 m-2">TOTAL POPULATION</p>
                      <p
                        class="font-weight-bold text-muted h5 m-1"
                      >{{ global.population | padding }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 mb-4">
                  <div class="card covid-text neu">
                    <div class="card-body">
                      <p class="font-weight-bold h5 m-2">TOTAL TESTS</p>
                      <p class="font-weight-bold text-muted h5 m-1">{{ global.tests | padding }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 mb-4">
                  <div class="card covid-text neu">
                    <div class="card-body">
                      <p class="font-weight-bold h6 m-2">TOTAL AFFECTED COUNTRIES</p>
                      <p
                        class="font-weight-bold text-muted h5 m-2"
                      >{{ global.affectedCountries | padding }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 mb-4">
                  <div class="card covid-text neu">
                    <div class="card-body">
                      <p class="font-weight-bold h5 m-2">TOTAL CRITICAL</p>
                      <p class="font-weight-bold text-muted h5 m-1">{{ global.critical | padding }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </sequential-entrance>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "global",
  metaInfo() {
    return {
      title: "Worldwide Covid-19 Impacts",
      meta: [
        {
          name: "description",
          content: "Live updates on worldwide impacts made by covid-19."
        }
      ]
    };
  },
  data() {
    return {
      global: [],
      loading: true
    };
  },
  methods: {
    percentTest: function(sample, total) {
      return "width: " + Math.round((sample / total) * 100) + "%;";
    }
  },
  beforeCreate() {
    this.loading = true;
  },

  created() {
    axios
      .get("https://data.nepalcorona.info/api/v1/world")
      .then(responses => {
        this.global = responses.data;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = true;
      });
  }
};
</script>