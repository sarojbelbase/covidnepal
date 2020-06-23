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
          <div class="col-md-6 col-xl-4 mb-4">
            <div class="card neu py-5">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-warning font-weight-bold mb-1 h4">
                      <span>Confirmed</span>
                    </div>
                    <div class="covid-text font-weight-bold h4 mb-0">
                      <span>{{ global.total_infected_global | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4 mb-4">
            <div class="card neu py-5">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-success font-weight-bold mb-1 h4">
                      <span>Recovered</span>
                    </div>
                    <div class="covid-text font-weight-bold h4 mb-0">
                      <span>{{ global.total_recovered_global | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4 mb-4">
            <div class="card neu py-5">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-danger font-weight-bold mb-1 h4">
                      <span>Deceased</span>
                    </div>
                    <div class="covid-text font-weight-bold h4 mb-0">
                      <span>{{ global.total_deaths_global | padding }}</span>
                    </div>
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
      local: [],
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
      .get("https://covidapi.mohp.gov.np/api/v1/global-data/")
      .then(responses => {
        console.log(responses.data);
        this.global = responses.data[0];
        this.updatedon = moment(this.global.updated_at).fromNow();
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = true;
      });
  }
};
</script>

<style></style>
