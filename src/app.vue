<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "app",
  components: {
    navbar
  }
};
</script>

<style lang="scss">
$theme: #0c0c0d;
$dark: #616161;
$darker: #141414;
$normal: #bfcacf;

@mixin neu-gradient($color-one, $color-two) {
  background: -o-linear-gradient(225deg, $color-one, $color-two);
  background: linear-gradient(225deg, $color-one, $color-two);
}

body {
  scroll-behavior: smooth !important;
  font-family: "Source Sans Pro", sans-serif !important;
  background-color: $theme !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-align: center !important;
  margin-top: 60px !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.dark {
  background-color: $dark;
}

.darker {
  background-color: $darker;
}

.neu {
  border-radius: 12px !important;
  @include neu-gradient(#0c0c0c, #0d0d0e);
  -webkit-box-shadow: -5px 5px 6px #0a0a0b, 5px -5px 5px #0e0e0f;
  box-shadow: -5px 5px 6px #0a0a0b, 5px -5px 5px #0e0e0f;
}

.neuify {
  @include neu-gradient(#0c0c0c, #0d0d0e);
}

.card {
  border-radius: 8px !important;
}

.loader {
  position: absolute;
  top: 48%;
  right: 48%;
}

.covid-text {
  color: $normal;
}

.covid-alt {
  color: #da623d;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: $theme;
}
::-webkit-scrollbar-thumb {
  background: #3d3d3d;
}
::-webkit-scrollbar-thumb:hover {
  background: #464646;
}

.bar-warning {
  @include neu-gradient(#d4ac32, #8b751d);
}

.bar-info {
  @include neu-gradient(#116e7c, #148c9e);
}

.bar-success {
  @include neu-gradient(#1fbb44, #357c45);
}

.bar-danger {
  @include neu-gradient(#e0505e, #c6303e);
}

.bar-primary {
  @include neu-gradient(#0464be, #29496b);
}

.probar {
  height: 6px !important;
  @include neu-gradient(#1a1919, #0b0b0c);
}

.localbar {
  height: 8px !important;
  @include neu-gradient(#1a1919, #0b0b0c);
}

ion-icon {
  color: #c0c0c0;

  &.larger {
    font-size: 36px !important;
  }
  &.large {
    font-size: 24px !important;
  }
  &.small {
    font-size: 12px !important;
  }
  &.success {
    color: #19d42f;
  }
  &.danger {
    color: #e91b37;
  }
  &.warning {
    color: #ffbf00;
  }
  &.info {
    color: #11aac2;
  }
  &.primary {
    color: #0c66b9;
  }
  &.thin {
    --ionicon-stroke-width: 16px;
  }
  &.bold {
    --ionicon-stroke-width: 36px;
  }
  &.bolder {
    --ionicon-stroke-width: 68px;
  }
}
</style>
