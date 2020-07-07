<template>
  <div class="local">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="homepage" v-else>
      <div class="container">
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
          <h3 class="covid-text mb-0 pt-4">
            <span>Overview</span>
            <span
              class="text-muted h5 font-weight-bold ml-1"
              title="Since Corona Pandemic"
            >&bull; {{this.lockdownday | ordinalize }} Day</span>
          </h3>

          <span class="covid-text text-uppercase small font-weight-bold">
            <span class="m-1">
              <ion-icon name="refresh" class="small bolder"></ion-icon>
            </span>
            <span>Updated {{ local.updated_at | humanize }}</span>
          </span>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xl-3">
            <sequential-entrance fromLeft>
              <div class="card py-2 neu">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="text-uppercase text-warning mb-1">
                        <h4 class="font-weight-bold">Confirmed</h4>
                      </div>
                      <div class="text-muted">
                        <h3 class="font-weight-bold">{{ local.positive | padding }}</h3>
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
                        <h3 class="font-weight-bold">{{ local.extra1 | padding }}</h3>
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
                        <h3 class="font-weight-bold">{{ local.deaths | padding }}</h3>
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
                        <h4 class="font-weight-bold">Tested</h4>
                      </div>
                      <div class="text-muted">
                        <h3 class="font-weight-bold">{{ local.samples_tested | padding }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </sequential-entrance>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="d-sm-flex justify-content-between align-items-center mb-3">
              <h3 class="covid-text">Details</h3>
            </div>
            <sequential-entrance fromLeft>
              <div class="card mb-4 neu p-3">
                <div class="card-body">
                  <div class="clearfix mb-2">
                    <h4 class="small font-weight-bold covid-text text-uppercase">
                      <span class="float-left">PEOPLE TESTED BY RDT</span>
                      <span class="float-right">{{ local.extra7 | padding }}</span>
                    </h4>
                  </div>

                  <div class="progress localbar mb-4">
                    <div
                      class="progress-bar bar-primary"
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
                      class="progress-bar bar-success"
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
                      class="progress-bar bar-danger"
                      :style=" percentTest(local.extra2, local.positive)"
                    ></div>
                  </div>

                  <div class="clearfix mb-2">
                    <h4 class="small font-weight-bold covid-text text-uppercase">
                      <span class="float-left">PEOPLE IN QUARANTINE</span>
                      <span class="float-right">{{ local.extra8 | padding }}</span>
                    </h4>
                  </div>

                  <div class="progress localbar mb-3">
                    <div
                      class="progress-bar bar-warning"
                      :style=" percentTest(local.extra8, local.samples_tested)"
                    ></div>
                  </div>
                </div>
              </div>
            </sequential-entrance>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 class="covid-text mb-0">
                <span class="mr-1">{{ local.updated_at | dayify }}</span>
              </h3>
            </div>
            <sequential-entrance fromLeft>
              <div class="card mb-4 neu p-3">
                <div class="card-body">
                  <ul class="list-group list-group-flush covid-text">
                    <li class="list-group-item neuify looks border-primary mb-2">
                      <div class="row text-left">
                        <div class="col mr-2">
                          <h5 class="m-1">
                            <strong>{{local.today_pcr}} samples tested</strong>
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item neuify looks border-warning mb-2">
                      <div class="row text-left">
                        <div class="col mr-2">
                          <h5 class="m-1">
                            <strong>{{local.today_newcase}} new confirmed cases</strong>
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item neuify looks border-success mb-2">
                      <div class="row text-left">
                        <div class="col mr-2">
                          <h5 class="m-1">
                            <strong>{{local.today_recovered}} people recovered</strong>
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item neuify looks border-danger mb-2">
                      <div class="row text-left">
                        <div class="col mr-2">
                          <h5 class="m-1">
                            <strong
                              v-if="this.local.today_death == 1"
                            >{{local.today_death}} new death case</strong>
                            <strong v-else-if="this.local.today_death == 0">No new death cases</strong>
                            <strong v-else>{{local.today_death}} new death cases</strong>
                          </h5>
                        </div>
                      </div>
                    </li>
                  </ul>
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
  name: "local",
  data() {
    return {
      local: [],
      loading: true
    };
  },
  metaInfo() {
    return {
      title: "covidnepal : yet another look at covid-19 cases in Nepal",
      meta: [
        {
          name: "description",
          content: "A detailed COVID-19 tracker made for Nepal."
        }
      ]
    };
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
        this.local = responses.data.nepal;
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
.looks {
  border-top: 0 !important;
  border-bottom: 0 !important;
  border-right: 0 !important;
  border-width: 5px !important;
}
</style>
