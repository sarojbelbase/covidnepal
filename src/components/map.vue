<template>
  <div class="maps">
    <l-map :center="[28.082, 84.078]" :zoom="7" style="height: 90vh;" :options="mapOptions">
      <l-choropleth-layer
        :data="covidcases"
        titleKey="name"
        idKey="id"
        :value="value"
        :extraValues="extraValues"
        geojsonIdKey="district"
        :geojson="geodata"
        :colorScale="colorScale"
      ></l-choropleth-layer>
    </l-map>
  </div>
</template>

<script>
import { ChoroplethLayer } from "vue-choropleth";
import nepalGeojson from "../assets/data/nepal.json";
import { LMap } from "vue2-leaflet";
import chroma from "chroma-js/chroma";
import axios from "axios";

export default {
  name: "maps",
  components: {
    LMap,
    "l-choropleth-layer": ChoroplethLayer
  },
  data() {
    return {
      covidcases: [],
      geodata: [],
      colorScale: chroma.brewer.OrRd,
      value: {
        key: "cases",
        metric: "% cases"
      },
      extraValues: [
        {
          key: "recovered",
          metric: "% recovered"
        },
        {
          key: "deaths",
          metric: "% deaths"
        }
      ],
      mapOptions: {
        attributionControl: false
      },
      currentStrokeColor: "3d3213"
    };
  },
  mounted() {
    this.geodata = nepalGeojson;
  },
  created() {
    axios
      .get("https://whatsthemiti.herokuapp.com/api/covid/districts/all")
      .then(response => {
        // console.log(Object.values(response.data[0]));
        Object.values(response.data).forEach(district => {
          this.covidcases.push(district);
        });
      });
  }
};
</script>

<style>
@import "../../node_modules/leaflet/dist/leaflet.css";

.maps {
  background-color: #1f1e1d !important;
}
</style>