<template>
  <div class="maps">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="mapworks" v-else>
      <l-map
        :center="[28.082, 84.078]"
        :zoom="7"
        style="height: 90vh;background-color: #0c0c0d;"
        :options="mapOptions"
      >
        <l-choropleth-layer
          :data="covidcases"
          title-key="name"
          id-key="name"
          :value="value"
          :extra-values="extraValues"
          geojson-id-key="district"
          :geojson="geodata"
          :color-scale="colorScale"
          style="color: #0c0c0d;"
          strokeColor="0c0c0c"
          currentStrokeColor="0c0c0c"
          :currentStrokeWidth="5"
          :strokeWidth="4"
        >
          <template slot-scope="props">
            <l-info-control
              :item="props.currentItem"
              :unit="props.unit"
              title="COVID-19 CASES"
              placeholder="Hover over districts to get the statistics"
              position="topright"
            ></l-info-control>
          </template>
        </l-choropleth-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import { InfoControl, ReferenceChart, ChoroplethLayer } from "vue-choropleth";
import nepalGeojson from "../assets/data/nepal.json";
import { LMap } from "vue2-leaflet";
import chroma from "chroma-js/chroma";
import axios from "axios";

export default {
  name: "maps",
  components: {
    LMap,
    "l-info-control": InfoControl,
    "l-reference-chart": ReferenceChart,
    "l-choropleth-layer": ChoroplethLayer
  },
  data() {
    return {
      loading: true,
      covidcases: [],
      geodata: [],
      colorScale: chroma.brewer.OrRd,
      value: {
        key: "cases",
        metric: "Positive Cases"
      },
      extraValues: [
        {
          key: "recovered",
          metric: "Recovered Cases"
        },
        {
          key: "deaths",
          metric: "Death Cases"
        }
      ],
      mapOptions: {
        attributionControl: false
      }
    };
  },
  mounted() {
    this.geodata = nepalGeojson;
    this.loading = false;
  },
  methods: {
    beautify: function(any_number) {
      if (typeof any_number === "undefined") {
        return "0";
      } else {
        return any_number;
      }
    }
  },
  created() {
    axios
      .get("https://whatsthemiti.herokuapp.com/api/covid/districts/all")
      .then(response => {
        Object.values(response.data).forEach(district => {
          this.covidcases.push({
            active: this.beautify(district.active),
            cases: this.beautify(district.cases),
            recovered: this.beautify(district.recovered),
            deaths: this.beautify(district.deaths),
            id: district.id,
            name: district.name
          });
        });
      });
  }
};
</script>

<style>
@import "../../node_modules/leaflet/dist/leaflet.css";

.maps {
  font-family: "Source Sans Pro", sans-serif !important;
}

.loader {
  z-index: 29;
}
</style>