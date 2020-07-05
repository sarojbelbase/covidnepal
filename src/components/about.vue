<template>
  <div class="about container">
    <sequential-entrance fromTop>
      <div class="row">
        <div class="col-lg-8 mx-auto covid-text m-5">
          <h2 class="text-left mb-4">ThisIsAboutPage.</h2>
          <p class="text-left covid-text">
            Well,
            <span class="font-weight-bold text-warning">covidnepal</span> is just another try to track covidcases
            (I just don't like using 'corona') inside Nepal. I'm a bit late to this game but that has always been my feature, I guess.
          </p>

          <p class="text-left covid-text">
            First thing first,
            <span class="font-weight-bold text-warning">this</span> is a progressive web app(PWA) meaning it could be
            installed inside the browser easily like a mobile application. If you don't like typing websites and wish things could be simpler?
            well, I thought about that too, there's an alternate way of getting these updates i.e through a telegram bot, which happens
            to be everyone's favorite & nearest app in the phone these days.
            <a
              target="_blank"
              class="text-decoration-none"
              rel="noopener noreferrer"
              href="https://t.me/covidnepal_bot"
            >t.me/covidnepal_bot</a>
          </p>

          <p class="text-left covid-text">
            Talking about all these data I'm showing, well they don't belong to me and are fetched through
            <span
              class="font-weight-bold text-info"
            >API</span>,
            any weirdness in data or see
            <span
              class="font-weight-bold covid-alt"
            >page taking forever to load</span> well that means the API is not working. But I spent months on it to avoid that.
            As I used "spent months on it", you should also know how; I started this project on May 21st but due to
            nonreliable APIs, I had to constantly change my layouts, concepts & my several other tries to make it simple.
            Hence the delay. You could see those constant 'API Changes' commits on my
            <a
              target="_blank"
              class="text-decoration-none"
              href="https://github.com/sidbelbase/covidnepal"
            >github repo</a>. It's a true story TBH. I didn't make that up.
          </p>

          <p class="text-left covid-text pt-3">
            Made by sidbelbase &bull; Made with
            <ion-icon name="heart" class="align-middle danger mr-1"></ion-icon>in Nepal.
          </p>
        </div>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
export default {
  name: "about",
  metaInfo() {
    return {
      title: "ThisIsAboutPage.",
      meta: [
        {
          name: "description",
          content: "Explaining stuffs how & why I made this site."
        }
      ]
    };
  }
};
</script>