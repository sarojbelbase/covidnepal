<template>
  <div class="local">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="homepage" v-else>
      <div class="container">
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
          <h3 class="covid-text mb-0 pt-4">Overview</h3>
          <span class="covid-text text-uppercase small font-weight-bold">Updated {{ updatedon[1] }}</span>
        </div>
        <div class="row">
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card semi-darker py-2">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-warning font-weight-bold mb-1 h4">
                      <span>Confirmed</span>
                    </div>
                    <div class="covid-text font-weight-bold h3 mb-0">
                      <span>{{ local.confirmed | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card semi-darker py-2">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-success font-weight-bold mb-1 h4">
                      <span>Recovered</span>
                    </div>
                    <div class="covid-text font-weight-bold h3 mb-0">
                      <span>{{ local.total_recovered | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card semi-darker py-2">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-danger font-weight-bold mb-1 h4">
                      <span>Deceased</span>
                    </div>
                    <div class="covid-text font-weight-bold h3 mb-0">
                      <span>{{ local.death | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card semi-darker py-2">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-info font-weight-bold mb-1 h4">
                      <span>Tested</span>
                    </div>
                    <div class="covid-text font-weight-bold h3 mb-0">
                      <span>{{ local.tested | padding }}</span>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 class="covid-text mb-0">Details</h3>
            </div>
            <div class="card semi-darker mb-4">
              <div class="card-body">
                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">TOTAL SAMPLES COLLECTED</span>
                    <span class="float-right">{{ local.total_samples_collected | padding }}</span>
                  </h4>
                </div>

                <div class="progress localbar mb-4">
                  <div
                    class="progress-bar bg-primary"
                    :style=" percentTest(local.total_samples_collected, local.tested)"
                  ></div>
                </div>

                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">TOTAL NEGATIVE</span>
                    <span class="float-right">{{ local.total_negative | padding }}</span>
                  </h4>
                </div>

                <div class="progress localbar mb-4">
                  <div
                    class="progress-bar bg-success"
                    :style=" percentTest(local.total_negative, local.tested)"
                  ></div>
                </div>

                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">PEOPLE IN ISOLATION</span>
                    <span class="float-right">{{ local.isolation | padding }}</span>
                  </h4>
                </div>

                <div class="progress localbar mb-4">
                  <div
                    class="progress-bar bg-info"
                    :style=" percentTest(local.isolation, local.isolation_bed)"
                  ></div>
                </div>

                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">TOTAL ISOLATION BED</span>
                    <span class="float-right">{{ local.isolation_bed | padding }}</span>
                  </h4>
                </div>

                <div class="progress localbar mb-4">
                  <div class="progress-bar bg-warning" style="width: 100%;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 class="covid-text mb-0">News & Updates</h3>
            </div>
            <div class="card semi-darker mb-4">
              <div class="card-body">
                <ul class="list-group list-group-flush covid-text">
                  <li class="list-group-item semi-darker">
                    <div class="row text-left no-gutters">
                      <div class="col mr-2">
                        <h6 class="mb-0">
                          <strong>14 new confirmed cases</strong>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item semi-darker">
                    <div class="row text-left no-gutters">
                      <div class="col mr-2">
                        <h6 class="mb-0">
                          <strong>2 new recovered cases</strong>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item semi-darker">
                    <div class="row text-left no-gutters">
                      <div class="col mr-2">
                        <h6 class="mb-0">
                          <strong>1 new death cases</strong>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
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
  name: "local",
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

<style>
.localbar {
  height: 8px !important;
  background-color: rgb(51, 51, 51) !important;
}
</style>
