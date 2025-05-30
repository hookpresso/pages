<template>
  <div class="support-thanks-container1">
    <header-no-btn rootClassName="header-no-btnroot-class-name2">
      <template v-slot:text>
        <div class="support-thanks-fragment1">
          <span class="support-thanks-text10">Solutions</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="support-thanks-fragment2">
          <span class="support-thanks-text11">How it works</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="support-thanks-fragment3">
          <span class="support-thanks-text12">Prices</span>
        </div>
      </template>
    </header-no-btn>
    <div class="support-thanks-banner-advanced-analytics">
      <div class="support-thanks-centered-container">
        <div class="support-thanks-container2">
          <h2 class="support-thanks-text13 title">
            <span>Thank You!</span>
            <br />
          </h2>
          <div class="support-thanks-contact-support">
            <h3 class="support-thanks-text16">
              <span>We appreciate you reaching out.</span>
              <br />
            </h3>
            <span class="support-thanks-text19">
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
            <ul class="support-thanks-ul list">
              <li class="list-item">
                <span>
                  <span>
                    Return to the
                    <span v-html="raweto8"></span>
                  </span>
                  <nuxt-link to="/" class="support-thanks-navlink1">
                    homepage
                  </nuxt-link>
                </span>
              </li>
              <li class="list-item">
                <span>
                  <nuxt-link to="/support" class="support-thanks-navlink2">
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
    <app-footer rootClassName="footerroot-class-name6">
      <template v-slot:text>
        <div class="support-thanks-fragment4">
          <span class="support-thanks-text32">
            Copyright © Money Beavers - 2025
          </span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="support-thanks-fragment5">
          <span class="support-thanks-text33">Support</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="support-thanks-fragment6">
          <span class="support-thanks-text34">Terms of Service</span>
        </div>
      </template>
      <template v-slot:text3>
        <div class="support-thanks-fragment7">
          <span class="support-thanks-text35">Privacy Policy</span>
        </div>
      </template>
    </app-footer>
  </div>
</template>

<script>
import HeaderNoBtn from '../components/header-no-btn'
import AppFooter from '../components/footer'

export default {
  name: 'SupportThanks',
  props: {},
  components: {
    HeaderNoBtn,
    AppFooter,
  },
  data() {
    return {
      raweto8: ' ',
    }
  },
  head: {
    title: 'Support - Money Beavers',
    meta: [
      {
        name: 'description',
        content:
          'Money Beavers is an AI-powered finance tool that turns your inbox into smart insights, helping you track spending and manage your money easily with Google Sheets.',
      },
      {
        property: 'og:title',
        content: 'Support - Money Beavers',
      },
      {
        property: 'og:description',
        content:
          'Money Beavers is an AI-powered finance tool that turns your inbox into smart insights, helping you track spending and manage your money easily with Google Sheets.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2841449d-32de-4b2f-9f35-e5d9cc3b58ff/30f4bb1e-45c8-412f-aa12-12b961e3ee99?org_if_sml=1&force_format=original',
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
.support-thanks-container1 {
  width: 100%;
  display: flex;
  overflow: auto;
  overflow-x: hidden;
  flex-direction: column;
}
 
.support-thanks-fragment1 {
  display: contents;
}
 
.support-thanks-text10 {
  display: inline-block;
}
 
.support-thanks-fragment2 {
  display: contents;
}
 
.support-thanks-text11 {
  display: inline-block;
}
 
.support-thanks-fragment3 {
  display: contents;
}
 
.support-thanks-text12 {
  display: inline-block;
}
 
.support-thanks-banner-advanced-analytics {
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
 
.support-thanks-centered-container {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
}
 
.support-thanks-container2 {
  flex: 1;
  display: flex;
  max-width: 600px;
  margin-left: 0px;
  flex-direction: column;
}
 
.support-thanks-text13 {
  fill: var(--dl-color-success-300);
  color: var(--dl-color-success-300);
  text-align: left;
  font-family: "Inter";
}
 
.support-thanks-contact-support {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-layout-space-twounits);
  flex-direction: column;
}
 
.support-thanks-text16 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.support-thanks-text19 {
  color: rgb(0, 0, 0);
  width: 100%;
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.support-thanks-ul {
  list-style-type: disc;
}
 
.support-thanks-navlink1 {
  text-decoration: underline;
}
 
.support-thanks-navlink2 {
  text-decoration: underline;
}
 
.support-thanks-fragment4 {
  display: contents;
}
 
.support-thanks-text32 {
  display: inline-block;
}
 
.support-thanks-fragment5 {
  display: contents;
}
 
.support-thanks-text33 {
  display: inline-block;
}
 
.support-thanks-fragment6 {
  display: contents;
}
 
.support-thanks-text34 {
  display: inline-block;
}
 
.support-thanks-fragment7 {
  display: contents;
}
 
.support-thanks-text35 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .support-thanks-banner-advanced-analytics {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
}
 
@media(max-width: 767px) {
  .support-thanks-banner-advanced-analytics {
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .support-thanks-centered-container {
    flex-direction: column-reverse;
  }
  .support-thanks-container2 {
    margin-left: 0px;
  }
  .support-thanks-text13 {
    font-size: 28px;
    text-align: left;
    line-height: 26px;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .support-thanks-text16 {
    font-size: 20px;
  }
  .support-thanks-text19 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
}
</style>
