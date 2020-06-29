<template>
  <div class="province-detail container">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="main-content" v-else>
      <div class="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 class="covid-text font-weight-bold pt-4">{{ province.name }}</h3>
        <span class="covid-text text-uppercase small font-weight-bold">
          <span class="m-1">
            <ion-icon name="refresh" class="small bolder"></ion-icon>
          </span>
          <span>Updated {{ province.last_updated | humanize }}</span>
        </span>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xl-3 mb-4">
          <div class="card neu py-2">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <div class="text-uppercase text-warning mb-1">
                    <h4 class="font-weight-bold">Confirmed</h4>
                  </div>
                  <div class="text-muted">
                    <h3 class="font-weight-bold">{{ province.cases | padding }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xl-3 mb-4">
          <div class="card neu py-2">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <div class="text-uppercase text-success">
                    <h4 class="font-weight-bold">Recovered</h4>
                  </div>
                  <div class="text-muted">
                    <h3 class="font-weight-bold">{{ province.recovered | padding }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xl-3 mb-4">
          <div class="card neu py-2">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <div class="text-uppercase text-danger">
                    <h4 class="font-weight-bold">Deceased</h4>
                  </div>
                  <div class="text-muted">
                    <h3 class="font-weight-bold">{{ province.deaths | padding }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xl-3 mb-4">
          <div class="card neu py-2">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <div class="text-uppercase text-info">
                    <h4 class="font-weight-bold">Tested</h4>
                  </div>
                  <div class="text-muted">
                    <h3 class="font-weight-bold">{{ province.tested | padding }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <h4 class="covid-text">
              <span class="mr-1 font-weight-bold">Details</span>
              <span
                class="text-muted small font-weight-bold"
                title="Since Lockdown"
              >&bull; {{this.lockdownday | ordinalize }} Day</span>
            </h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card neu mb-4 px-4 py-1">
            <div class="card-body">
              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">PEOPLE IN QUARANTINE</span>
                  <span class="float-right">{{ province.quarantined | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-4">
                <div
                  class="progress-bar bar-danger"
                  :style=" percentTest(province.quarantined, province.tested)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">PEOPLE IN ISOLATION</span>
                  <span class="float-right">{{ province.isolated | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-4">
                <div
                  class="progress-bar bar-warning"
                  :style=" percentTest(province.isolated, province.isolation_beds)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">TESTED NEGATIVE</span>
                  <span class="float-right">{{ province.negative | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-4">
                <div
                  class="progress-bar bar-success"
                  :style=" percentTest(province.total_negative, province.total_tested)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">OCCUPIED ISOLATION BED</span>
                  <span class="float-right">{{ province.occupied_isolation_beds | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-3">
                <div
                  class="progress-bar bar-primary"
                  :style=" percentTest(province.occupied_isolation_beds, province.isolation_beds)"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col-lg-6 col-sm-6 mb-4">
              <div class="card covid-text neu">
                <div class="card-body">
                  <p class="font-weight-bold h5 m-2">SAMPLES COLLECTED</p>
                  <p class="font-weight-bold text-muted m-1 h4">{{ province.samples | padding }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 mb-4">
              <div class="card covid-text neu">
                <div class="card-body">
                  <p class="font-weight-bold h5 m-2">NUMBER OF BEDS</p>
                  <p class="font-weight-bold text-muted m-1 h4">{{ province.beds | padding }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 mb-4">
              <div class="card covid-text neu">
                <div class="card-body">
                  <p class="font-weight-bold m-2 h5">ISOLATION BEDS</p>
                  <p
                    class="font-weight-bold text-muted m-1 h4"
                  >{{ province.isolation_beds | padding }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 mb-4">
              <div class="card covid-text neu">
                <div class="card-body">
                  <p class="font-weight-bold h5 m-2">OCCUPIED VENTILATORS</p>
                  <p
                    class="font-weight-bold text-muted m-1 h4"
                  >{{ province.occupied_ventilators | padding }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <districts :pro_id="province.id" />
      </div>
    </div>
  </div>
</template>

<script>
import districts from "@/components/districts";
import axios from "axios";

export default {
  name: "provincedetail",
  components: {
    districts
  },
  props: ["province_id"],
  data() {
    return {
      province: [],
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
      .get(
        "https://whatsthemiti.herokuapp.com/api/covid/province/" +
          this.province_id
      )
      .then(response => {
        this.province = response.data;
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
.goback {
  cursor: pointer;
  text-decoration: none;
}
</style>
