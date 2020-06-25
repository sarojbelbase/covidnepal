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
            <span class="small mr-1">
              <i class="fa fa-undo"></i>
            </span>
            <span>Updated {{ updatedon }}</span>
          </span>
        </div>
        <div class="row">
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card py-2 neu">
              <div class="card-body">
                <div class="row align-items-center g-0">
                  <div class="col mr-2">
                    <div class="text-uppercase text-warning font-weight-bold mb-1 h4">
                      <span>Confirmed</span>
                    </div>
                    <div class="text-muted font-weight-bold h3 mb-0">
                      <span>{{ global.cases | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card py-2 neu">
              <div class="card-body">
                <div class="row align-items-center g-0">
                  <div class="col mr-2">
                    <div class="text-uppercase text-success font-weight-bold mb-1 h4">
                      <span>Recovered</span>
                    </div>
                    <div class="text-muted font-weight-bold h3 mb-0">
                      <span>{{ global.recovered | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card py-2 neu">
              <div class="card-body">
                <div class="row align-items-center g-0">
                  <div class="col mr-2">
                    <div class="text-uppercase text-danger font-weight-bold mb-1 h4">
                      <span>Deceased</span>
                    </div>
                    <div class="text-muted font-weight-bold h3 mb-0">
                      <span>{{ global.deaths | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card py-2 neu">
              <div class="card-body">
                <div class="row align-items-center g-0">
                  <div class="col mr-2">
                    <div class="text-uppercase text-info font-weight-bold mb-1 h4">
                      <span>Active</span>
                    </div>
                    <div class="text-muted font-weight-bold h3 mb-0">
                      <span>{{ global.active | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 class="covid-text mb-0">Today</h3>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 class="covid-text mb-0">Details</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="card mb-4 p-1 neu">
              <div class="card-body">
                <ul class="list-group list-group-flush covid-text">
                  <li class="list-group-item neuify looks border-warning mb-2">
                    <div class="row text-left g-0">
                      <div class="col mr-2">
                        <h5 class="mb-0">
                          <strong>{{global.todayCases | padding }} new postive cases</strong>
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item neuify looks border-success mb-2">
                    <div class="row text-left g-0">
                      <div class="col mr-2">
                        <h5 class="mb-0">
                          <strong>{{global.todayRecovered | padding }} new recovered cases</strong>
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item neuify looks border-danger mb-1">
                    <div class="row text-left g-0">
                      <div class="col mr-2">
                        <h5 class="mb-0">
                          <strong>{{global.todayDeaths | padding }} new death cases</strong>
                        </h5>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col-lg-6 mb-4">
                <div class="card covid-text neu">
                  <div class="card-body">
                    <p class="font-weight-bold mb-1">TOTAL POPULATION</p>
                    <p class="font-weight-bold text-muted h5 m-0">{{ global.population | padding }}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card covid-text neu">
                  <div class="card-body">
                    <p class="font-weight-bold mb-1">TOTAL TESTS</p>
                    <p class="font-weight-bold text-muted h5 m-0">{{ global.tests | padding }}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card covid-text neu">
                  <div class="card-body">
                    <p class="font-weight-bold mb-1">TOTAL AFFECTED COUNTRIES</p>
                    <p
                      class="font-weight-bold text-muted h5 m-0"
                    >{{ global.affectedCountries | padding }}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card covid-text neu">
                  <div class="card-body">
                    <p class="font-weight-bold mb-1">TOTAL CRITICAL</p>
                    <p class="font-weight-bold text-muted h5 m-0">{{ global.critical | padding }}</p>
                  </div>
                </div>
              </div>
            </div>
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
  name: "index",
  data() {
    return {
      global: [],
      global: [],
      updatedon: [],
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
        console.log(responses.data);
        this.global = responses.data;
        this.updatedon = moment(this.global.updated).fromNow();
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = true;
      });
  }
};
</script>