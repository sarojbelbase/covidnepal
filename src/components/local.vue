<template>
  <div class="local">
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
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-warning font-weight-bold mb-1 h4">
                      <span>Confirmed</span>
                    </div>
                    <div class="covid-text font-weight-bold h3 mb-0">
                      <span>{{ local.positive | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card py-2 neu">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-success font-weight-bold mb-1 h4">
                      <span>Recovered</span>
                    </div>
                    <div class="covid-text font-weight-bold h3 mb-0">
                      <span>{{ local.extra1 | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card py-2 neu">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-danger font-weight-bold mb-1 h4">
                      <span>Deceased</span>
                    </div>
                    <div class="covid-text font-weight-bold h3 mb-0">
                      <span>{{ local.deaths | padding }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-4">
            <div class="card py-2 neu">
              <div class="card-body">
                <div class="row align-items-center no-gutters">
                  <div class="col mr-2">
                    <div class="text-uppercase text-info font-weight-bold mb-1 h4">
                      <span>Tested</span>
                    </div>
                    <div class="covid-text font-weight-bold h3 mb-0">
                      <span>{{ local.samples_tested | padding }}</span>
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
              <h3 class="covid-text mb-0">Details</h3>
            </div>
            <div class="card mb-4 neu">
              <div class="card-body">
                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">PEOPLE TESTED BY RDT</span>
                    <span class="float-right">{{ local.extra7 | padding }}</span>
                  </h4>
                </div>

                <div class="progress localbar mb-4">
                  <div
                    class="progress-bar bg-primary"
                    :style=" percentTest(local.extra7, local.extra7)"
                  ></div>
                </div>

                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">PEOPLE TESTED NEGATIVE</span>
                    <span class="float-right">{{ local.negative | padding }}</span>
                  </h4>
                </div>

                <div class="progress localbar mb-4">
                  <div
                    class="progress-bar bg-success"
                    :style=" percentTest(local.negative, local.samples_tested)"
                  ></div>
                </div>

                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">PEOPLE IN ISOLATION</span>
                    <span class="float-right">{{ local.extra2 | padding }}</span>
                  </h4>
                </div>

                <div class="progress localbar mb-4">
                  <div
                    class="progress-bar bg-info"
                    :style=" percentTest(local.extra2, local.positive)"
                  ></div>
                </div>

                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">PEOPLE IN QUARANTINE</span>
                    <span class="float-right">{{ local.extra8 | padding }}</span>
                  </h4>
                </div>

                <div class="progress localbar mb-4">
                  <div
                    class="progress-bar bg-warning"
                    :style=" percentTest(local.extra8, local.samples_tested)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 class="covid-text mb-0">Today</h3>
            </div>
            <div class="card mb-4 neu">
              <div class="card-body">
                <ul class="list-group list-group-flush covid-text">
                  <li class="list-group-item neuify looks border-primary mb-2">
                    <div class="row text-left no-gutters">
                      <div class="col mr-2">
                        <h6 class="mb-0">
                          <strong>{{local.today_pcr}} samples tested.</strong>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item neuify looks border-warning mb-2">
                    <div class="row text-left no-gutters">
                      <div class="col mr-2">
                        <h6 class="mb-0">
                          <strong>{{local.today_newcase}} new postive cases.</strong>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item neuify looks border-success mb-2">
                    <div class="row text-left no-gutters">
                      <div class="col mr-2">
                        <h6 class="mb-0">
                          <strong>{{local.today_recovered}} people recovered.</strong>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item neuify looks border-danger mb-1">
                    <div class="row text-left no-gutters">
                      <div class="col mr-2">
                        <h6 class="mb-0">
                          <strong
                            v-if="this.local.today_death > 1"
                          >{{local.today_death}} new death case.</strong>
                          <strong v-else>{{local.today_death}} new death case.</strong>
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
    const localdata = axios.get(
      "https://covid19.mohp.gov.np/covid/api/confirmedcases"
    );

    localdata
      .then(responses => {
        console.log(responses.data.nepal);
        this.local = responses.data.nepal;
        this.updatedon = moment(this.local.updated_at).fromNow();
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

.looks {
  border-top: 0 !important;
  border-bottom: 0 !important;
  border-right: 0 !important;
  border-width: 5px !important;
}
</style>
