<template>
  <div class="province-detail container">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="main-content" v-else>
      <div class="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 class="covid-text mb-0 pt-4">{{ province.province_name }}</h3>
        <span class="covid-text text-uppercase small font-weight-bold">Updated {{ updatedon }}</span>
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
                    <span>{{ province.total_positive | padding }}</span>
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
                    <span>{{ province.total_recovered | padding }}</span>
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
                    <span>{{ province.total_death | padding }}</span>
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
                    <span>{{ province.total_tested | padding }}</span>
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
            <h5 class="covid-text mb-0">DETAILS</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card semi-darker mb-4">
            <div class="card-body">
              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">PEOPLE IN QUARANTINE</span>
                  <span class="float-right">{{ province.in_quarantine | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-4">
                <div
                  class="progress-bar bg-danger"
                  :style=" percentTest(province.in_quarantine, province.total_tested)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">PEOPLE IN ISOLATION</span>
                  <span class="float-right">{{ province.total_in_isolation | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-4">
                <div
                  class="progress-bar bg-warning"
                  :style=" percentTest(province.total_in_isolation, province.num_of_isolation_bed)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">TESTED NEGATIVE</span>
                  <span class="float-right">{{ province.total_negative | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-4">
                <div
                  class="progress-bar bg-success"
                  :style=" percentTest(province.total_negative, province.total_tested)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">OCCUPIED ISOLATION BED</span>
                  <span class="float-right">{{ province.occupied_isolation_bed | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-4">
                <div
                  class="progress-bar bg-primary"
                  :style=" percentTest(province.occupied_isolation_bed, province.num_of_isolation_bed)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">OCCUPIED ICU BED</span>
                  <span class="float-right">{{ province.occupied_icu_bed | padding }}</span>
                </h4>
              </div>

              <div class="progress localbar mb-4">
                <div
                  class="progress-bar bg-primary"
                  :style=" percentTest(province.occupied_icu_bed, province.num_of_icu_bed)"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col-lg-6 mb-4">
              <div class="card covid-text semi-darker">
                <div class="card-body">
                  <p class="font-weight-bold m-0">TOTAL SAMPLE COLLECTED</p>
                  <p class="font-weight-bold m-0">{{ province.total_samples_collected | padding }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card covid-text semi-darker">
                <div class="card-body">
                  <p class="font-weight-bold m-0">TOTAL NUMBER OF BED</p>
                  <p class="font-weight-bold m-0">{{ province.num_of_bed | padding }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card covid-text semi-darker">
                <div class="card-body">
                  <p class="font-weight-bold m-0">TOTAL ISOLATION BED</p>
                  <p class="font-weight-bold m-0">{{ province.num_of_isolation_bed | padding }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card covid-text semi-darker">
                <div class="card-body">
                  <p class="font-weight-bold m-0">TOTAL VENTILATORS</p>
                  <p class="font-weight-bold m-0">{{ province.num_of_ventilators | padding }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card covid-text semi-darker">
                <div class="card-body">
                  <p class="font-weight-bold m-0">TOTAL ICU BED</p>
                  <p class="font-weight-bold m-0">{{ province.num_of_icu_bed | padding }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card covid-text semi-darker">
                <div class="card-body">
                  <p class="font-weight-bold m-0">TOTAL OCCUPIED VENTILATORS</p>
                  <p class="font-weight-bold m-0">{{ province.occupied_ventilators | padding }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <districts :province_name="pro_name" />
      </div>
    </div>
  </div>
</template>

<script>
import districts from "@/components/districts";
import axios from "axios";
import moment from "moment";
export default {
  name: "provincedetail",
  components: {
    districts
  },
  props: ["province_id"],
  data() {
    return {
      province: [],
      pro_name: "",
      loading: true,
      updatedon: ""
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
        "https://covidapi.mohp.gov.np/api/v1/stats/?province=" +
          this.province_id
      )
      .then(response => {
        this.province = response.data[0];
        this.pro_name = response.data[0].province_name;
        this.updatedon = moment(response.data[0].update_date).fromNow();
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
}
</style>
