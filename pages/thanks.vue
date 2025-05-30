<template>
  <div class="thanks-container1">
    <header-no-btn rootClassName="header-no-btnroot-class-name1">
      <template v-slot:text>
        <div class="thanks-fragment1">
          <span class="thanks-text10">Solutions</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="thanks-fragment2">
          <span class="thanks-text11">How it works</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="thanks-fragment3">
          <span class="thanks-text12">Prices</span>
        </div>
      </template>
    </header-no-btn>
    <div class="thanks-banner-advanced-analytics">
      <div class="thanks-centered-container">
        <div class="thanks-container2">
          <h2 class="thanks-text13 title">
            <span>Thank You!</span>
            <br />
          </h2>
          <div class="thanks-contact-support">
            <h3 class="thanks-text16">
              <span>We appreciate you reaching out.</span>
              <br />
            </h3>
            <span class="thanks-text19">
              <span>
                Your submission has been received and is being reviewed.
              </span>
              <br />
              <span>We&apos;ll be in touch soon!</span>
              <br />
              <br />
              <span>In the meantime, feel free to:</span>
              <br />
            </span>
            <ul class="thanks-ul list">
              <li class="list-item">
                <span>
                  <span>
                    Return to the
                    <span v-html="rawb6xm"></span>
                  </span>
                  <nuxt-link to="/" class="thanks-navlink1">homepage</nuxt-link>
                </span>
              </li>
              <li class="list-item">
                <span>
                  <nuxt-link to="/support" class="thanks-navlink2">
                    Contact support
                  </nuxt-link>
                  <span>if you have any questions</span>
                  <br />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footerroot-class-name5">
      <template v-slot:text>
        <div class="thanks-fragment4">
          <span class="thanks-text32">Copyright © Money Beavers - 2025</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="thanks-fragment5">
          <span class="thanks-text33">Support</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="thanks-fragment6">
          <span class="thanks-text34">Terms of Service</span>
        </div>
      </template>
      <template v-slot:text3>
        <div class="thanks-fragment7">
          <span class="thanks-text35">Privacy Policy</span>
        </div>
      </template>
    </app-footer>
  </div>
</template>

<script>
import HeaderNoBtn from '../components/header-no-btn'
import AppFooter from '../components/footer'

export default {
  name: 'Thanks',
  props: {},
  components: {
    HeaderNoBtn,
    AppFooter,
  },
  data() {
    return {
      rawb6xm: ' ',
    }
  },
  head: {
    title: 'Beavers Money - AI-Powered Personal Finance Tool',
    meta: [
      {
        name: 'description',
        content:
          'Money Beavers is an AI-powered finance tool that turns your inbox into smart insights, helping you track spending and manage your money easily with Google Sheets.',
      },
      {
        property: 'og:title',
        content: 'Beavers Money - AI-Powered Personal Finance Tool',
      },
      {
        property: 'og:description',
        content:
          'Money Beavers is an AI-powered finance tool that turns your inbox into smart insights, helping you track spending and manage your money easily with Google Sheets.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2841449d-32de-4b2f-9f35-e5d9cc3b58ff/5f93db24-564f-477a-bc7c-130145f6d465?org_if_sml=1&force_format=original',
      },
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
  },
}
</script>

<style scoped>
.thanks-container1 {
  width: 100%;
  display: flex;
  overflow: auto;
  overflow-x: hidden;
  flex-direction: column;
}
 
.thanks-fragment1 {
  display: contents;
}
 
.thanks-text10 {
  display: inline-block;
}
 
.thanks-fragment2 {
  display: contents;
}
 
.thanks-text11 {
  display: inline-block;
}
 
.thanks-fragment3 {
  display: contents;
}
 
.thanks-text12 {
  display: inline-block;
}
 
.thanks-banner-advanced-analytics {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-sixunits);
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: row;
  padding-bottom: var(--dl-layout-space-sixunits);
  justify-content: center;
  background-color: #EFF0F2;
}
 
.thanks-centered-container {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
}
 
.thanks-container2 {
  flex: 1;
  display: flex;
  max-width: 600px;
  margin-left: 0px;
  flex-direction: column;
}
 
.thanks-text13 {
  fill: var(--dl-color-success-300);
  color: var(--dl-color-success-300);
  text-align: left;
}
 
.thanks-contact-support {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-layout-space-twounits);
  flex-direction: column;
}
 
.thanks-text16 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.thanks-text19 {
  color: rgb(0, 0, 0);
  width: 100%;
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.thanks-ul {
  list-style-type: disc;
}
 
.thanks-navlink1 {
  text-decoration: underline;
}
 
.thanks-navlink2 {
  text-decoration: underline;
}
 
.thanks-fragment4 {
  display: contents;
}
 
.thanks-text32 {
  display: inline-block;
}
 
.thanks-fragment5 {
  display: contents;
}
 
.thanks-text33 {
  display: inline-block;
}
 
.thanks-fragment6 {
  display: contents;
}
 
.thanks-text34 {
  display: inline-block;
}
 
.thanks-fragment7 {
  display: contents;
}
 
.thanks-text35 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .thanks-banner-advanced-analytics {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
}
 
@media(max-width: 767px) {
  .thanks-banner-advanced-analytics {
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .thanks-centered-container {
    flex-direction: column-reverse;
  }
  .thanks-container2 {
    margin-left: 0px;
  }
  .thanks-text13 {
    font-size: 28px;
    text-align: left;
    line-height: 26px;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .thanks-text16 {
    font-size: 20px;
  }
  .thanks-text19 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
}
</style>
