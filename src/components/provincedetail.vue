<template>
  <div class="province-detail container">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="main-content" v-else>
      <h2 class="text-warning">{{ province.province_name }}</h2>
      <h6
        class="covid-text text-center small pb-4 font-weight-bold text-uppercase"
      >
        Updated {{ updatedon }}
      </h6>
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div class="card semi-darker mb-3">
            <div class="card-body text-left">
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">
                  TOTAL SAMPLE COLLECTED
                </h6>
                <h6 class="covid-text float-right">
                  {{ province.total_samples_collected | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">TOTAL TESTED</h6>
                <h6 class="covid-text float-right">
                  {{ province.total_tested | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">TOTAL NEGATIVE</h6>
                <h6 class="covid-text float-right">
                  {{ province.total_negative | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">TOTAL IN INSOLATION</h6>
                <h6 class="covid-text float-right">
                  {{ province.total_in_isolation | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">TOTAL IN QUARANTINE</h6>
                <h6 class="covid-text float-right">
                  {{ province.in_quarantine | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">
                  NUMBER OF BED AVAILABLE
                </h6>
                <h6 class="covid-text float-right">
                  {{ province.num_of_bed | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">NUMBER OF ICU BED</h6>
                <h6 class="covid-text float-right">
                  {{ province.num_of_icu_bed | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">
                  TOTAL OCCUPIED ICU BED
                </h6>
                <h6 class="covid-text float-right">
                  {{ province.occupied_icu_bed | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">
                  TOTAL NUMBER OF VENTILATORS
                </h6>
                <h6 class="covid-text float-right">
                  {{ province.num_of_ventilators | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">
                  TOTAL OCCUPIED VENTILATORS
                </h6>
                <h6 class="covid-text float-right">
                  {{ province.occupied_ventilators | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">TOTAL ISOLATION BED</h6>
                <h6 class="covid-text float-right">
                  {{ province.num_of_isolation_bed | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">
                  TOTAL OCCUPIED ISOLATION BED
                </h6>
                <h6 class="covid-text float-right">
                  {{ province.occupied_isolation_bed | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">CONFIRMED CASES</h6>
                <h6 class="text-success float-right">
                  {{ province.total_positive | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">RECOVERED CASES</h6>
                <h6 class="covid-recovered float-right">
                  {{ province.total_recovered | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">DEATH CASES</h6>
                <h6 class="covid-deceased float-right">
                  {{ province.total_death | padding }}
                </h6>
              </div>
              <a class="goback" @click="$router.go(-1)">
                <h6 class="text-info text-center small font-weight-bold mt-3">
                  GO BACK
                </h6>
              </a>
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
  name: "provincedetail",
  props: ["province_id"],
  data() {
    return {
      province: [],
      loading: true,
      updatedon: ""
    };
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
