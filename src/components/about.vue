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
            installed inside the browser easily like a mobile application. For the convenience, I also made an effort to make it more reachable
            by making it available on telegram,
            <a
              target="_blank"
              class="text-decoration-none"
              rel="noopener noreferrer"
              href="https://t.me/covidnepal_bot"
            >t.me/covidnepal_bot</a> if you prefer to get updates through the nearest neighboring app.
          </p>

          <p class="text-left covid-text">
            Talking about all these data I'm showing, well they are fetched throught
            <span
              class="font-weight-bold text-info"
            >APIs</span>,
            which were one step far away from googling. If you search for one like I did, the first result will serve you well.
            But there's too story about related to it, I started this project on May 21st but due to
            nonreliable APIs, I had to constantly change my layouts, concepts and my several other tries to make it simple.
            Hence the delay. You could see those constant 'API Changes' commits on my
            <a
              target="_blank"
              class="text-decoration-none"
              href="https://github.com/sidbelbase/covidnepal"
            >github repo</a>. It is a true story BTW.
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

<style>
</style>