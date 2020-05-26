<template>
  <div class="index">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="homepage" v-else>
      <h2 class="covid-text py-3">Statistics</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card semi-darker mb-3">
              <div class="card-body text-left">
                <h4 class="card-title covid-text text-center mb-2">
                  GLOBAL CASES
                </h4>
                <h6
                  class="covid-text text-center small pb-4 font-weight-bold text-uppercase"
                >
                  Updated {{ updatedon[0] }}
                </h6>

                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">CONFIRMED CASES</h6>
                  <h6 class="text-success float-right">
                    {{ global.total_infected_global | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">RECOVERED CASES</h6>
                  <h6 class="text-warning float-right">
                    {{ global.total_recovered_global | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">DEATH CASES</h6>
                  <h6 class="text-danger float-right">
                    {{ global.total_deaths_global | padding }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card semi-darker mb-3">
              <div class="card-body text-left">
                <h4 class="card-title covid-text text-center mb-2">
                  CASES ON NEPAL
                </h4>
                <h6
                  class="covid-text text-center small pb-4 font-weight-bold text-uppercase"
                >
                  Updated {{ updatedon[1] }}
                </h6>

                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">CONFIRMED CASES</h6>
                  <h6 class="text-success float-right">
                    {{ local.confirmed | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">RECOVERED CASES</h6>
                  <h6 class="text-warning float-right">
                    {{ local.total_recovered | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">DEATH CASES</h6>
                  <h6 class="text-danger float-right">
                    {{ local.death | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">TOTAL TESTED</h6>
                  <h6 class="covid-text float-right">
                    {{ local.tested | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">
                    TOTAL SAMPLES COLLECTED
                  </h6>
                  <h6 class="covid-text float-right">
                    {{ local.total_samples_collected | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">TOTAL NEGATIVE</h6>
                  <h6 class="covid-text float-right">
                    {{ local.total_negative | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">
                    PEOPLE IN ISOLATION
                  </h6>
                  <h6 class="covid-text float-right">
                    {{ local.isolation | padding }}
                  </h6>
                </div>
                <div class="clearfix">
                  <h6 class="covid-confirmed float-left">
                    TOTAL ISOLATION BED
                  </h6>
                  <h6 class="covid-text float-right">
                    {{ local.isolation_bed | padding }}
                  </h6>
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
  beforeCreate() {
    this.loading = true;
  },

  created() {
    const globaldata = axios.get(
      "https://covidapi.mohp.gov.np/api/v1/global-data/"
    );
    const localdata = axios.get("https://covidapi.mohp.gov.np/api/v1/stats/");

    axios
      .all([globaldata, localdata])
      .then(responses => {
        this.global = responses[0].data[0];
        this.local = responses[1].data;
        this.updatedon[0] = moment(this.global.updated_at).fromNow();
        this.updatedon[1] = moment(this.local.update_date).fromNow();
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
