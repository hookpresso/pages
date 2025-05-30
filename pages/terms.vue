<template>
  <div class="terms-container1">
    <app-header rootClassName="headerroot-class-name1">
      <template v-slot:text>
        <div class="terms-fragment1">
          <span class="terms-text10">Solutions</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="terms-fragment2">
          <span class="terms-text11">How it works</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="terms-fragment3">
          <span class="terms-text12">Prices</span>
        </div>
      </template>
      <template v-slot:text3>
        <div class="terms-fragment4">
          <span class="terms-text13">Reserve my spot</span>
        </div>
      </template>
    </app-header>
    <div class="terms-banner-advanced-analytics">
      <div class="terms-centered-container">
        <div class="terms-container2">
          <h2 class="terms-text14 title">
            <span>Terms of Service</span>
            <br />
          </h2>
          <span class="terms-text17">
            <span>Last Updated: March 1, 2025</span>
            <br />
          </span>
          <div class="terms-contact-support">
            <span class="terms-text20">
              <span>
                Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms
                of Service&quot;) carefully before using the Beavers Money website
                and application operated by Beavers Money (&quot;us&quot;,
                &quot;we&quot;, or &quot;our&quot;).
              </span>
              <br />
              <br />
              <span>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users, and others who access or use the Service.
              </span>
              <br />
              <br />
              <span>
                By accessing or using the Service, you agree to be bound by these
                Terms. If you disagree with any part of the terms, then you may
                not access the Service.
              </span>
            </span>
            <h3 class="terms-text28">
              1. Google Account™ and Google Sheets™ Access
            </h3>
            <span class="terms-text29">
              <span>
                Our Service requires access to your Google Account™, particularly
                Gmail™ and Google Sheets™, to function properly. By using our
                Service, you authorize us to access your Gmail™ messages for the
                purpose of identifying and extracting invoice and receipt data,
                and to access and modify your designated Google Sheet™(s) to store
                this data.
              </span>
              <br />
              <br />
              <span>
                We access your data using secure OAuth protocols, and our access
                is limited to the specific permissions you grant. You can revoke
                these permissions at any time through your Google Account™
                settings.
              </span>
            </span>
            <h3 class="terms-text34">2. Data Usage and Privacy</h3>
            <span class="terms-text35">
              <span>
                We only process your data to provide the Service. Your financial
                data extracted from emails is stored in your own Google Sheets™
                and is not stored on our servers. For more information about how
                we handle your data, please review our
                <span v-html="raw2fzd"></span>
              </span>
              <nuxt-link to="/privacy-policy" class="terms-navlink">
                Privacy Policy
              </nuxt-link>
              <span>.</span>
              <br />
            </span>
            <h3 class="terms-text39">3. Service Limitations</h3>
            <span class="terms-text40">
              <span>
                The Service uses artificial intelligence to extract data from
                emails. While we strive for accuracy, the Service may not
                correctly identify or extract data from all email formats. You are
                responsible for verifying the accuracy of the data extracted and
                making corrections as needed.
              </span>
              <br />
            </span>
            <h3 class="terms-text43">4. Changes</h3>
            <span class="terms-text44">
              <span>
                We reserve the right, at our sole discretion, to modify or replace
                these Terms at any time. If a revision is material, we will try to
                provide at least 30 days&apos; notice prior to any new terms
                taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </span>
              <br />
              <br />
              <span>
                By continuing to access or use our Service after those revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, please stop using the Service.
              </span>
            </span>
            <h3 class="terms-text49">5. Contact Us</h3>
            <span class="terms-text50">
              <span>
                If you have any questions about these Terms, please contact us at
                <span v-html="raw54du"></span>
              </span>
              <a href="mailto:support@beavers.money?subject=" class="terms-link">
                support@beavers.money
              </a>
              <span>.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footerroot-class-name1">
      <template v-slot:text>
        <div class="terms-fragment5">
          <span class="terms-text53">Copyright © Money Beavers - 2025</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="terms-fragment6">
          <span class="terms-text54">Support</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="terms-fragment7">
          <span class="terms-text55">Terms of Service</span>
        </div>
      </template>
      <template v-slot:text3>
        <div class="terms-fragment8">
          <span class="terms-text56">Privacy Policy</span>
        </div>
      </template>
    </app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppFooter from '../components/footer'

export default {
  name: 'Terms',
  props: {},
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      raw2fzd: ' ',
      raw54du: ' ',
    }
  },
  head: {
    title: 'Terms - Money Beavers',
    meta: [
      {
        name: 'description',
        content:
          'Money Beavers is an AI-powered finance tool that turns your inbox into smart insights, helping you track spending and manage your money easily with Google Sheets.',
      },
      {
        property: 'og:title',
        content: 'Terms - Money Beavers',
      },
      {
        property: 'og:description',
        content:
          'Money Beavers is an AI-powered finance tool that turns your inbox into smart insights, helping you track spending and manage your money easily with Google Sheets.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2841449d-32de-4b2f-9f35-e5d9cc3b58ff/774472ee-7579-4b74-8dc0-72c7b9f6e1f6?org_if_sml=1&force_format=original',
      },
    ],
  },
}
</script>

<style scoped>
.terms-container1 {
  width: 100%;
  display: flex;
  overflow: auto;
  overflow-x: hidden;
  flex-direction: column;
}
 
.terms-fragment1 {
  display: contents;
}
 
.terms-text10 {
  display: inline-block;
}
 
.terms-fragment2 {
  display: contents;
}
 
.terms-text11 {
  display: inline-block;
}
 
.terms-fragment3 {
  display: contents;
}
 
.terms-text12 {
  display: inline-block;
}
 
.terms-fragment4 {
  display: contents;
}
 
.terms-text13 {
  display: inline-block;
}
 
.terms-banner-advanced-analytics {
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
 
.terms-centered-container {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
}
 
.terms-container2 {
  flex: 1;
  display: flex;
  max-width: 600px;
  margin-left: 0px;
  flex-direction: column;
}
 
.terms-text14 {
  text-align: left;
}
 
.terms-text17 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.terms-contact-support {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-layout-space-twounits);
  flex-direction: column;
}
 
.terms-text20 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.terms-text28 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.terms-text29 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.terms-text34 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.terms-text35 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.terms-text39 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.terms-text40 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.terms-text43 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.terms-text44 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.terms-text49 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.terms-text50 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.terms-link {
  text-decoration: underline;
}
 
.terms-fragment5 {
  display: contents;
}
 
.terms-text53 {
  display: inline-block;
}
 
.terms-fragment6 {
  display: contents;
}
 
.terms-text54 {
  display: inline-block;
}
 
.terms-fragment7 {
  display: contents;
}
 
.terms-text55 {
  display: inline-block;
}
 
.terms-fragment8 {
  display: contents;
}
 
.terms-text56 {
  display: inline-block;
}
 
@media(max-width: 1600px) {
  .terms-text17 {
    fill: var(--dl-color-gray-500);
    color: var(--dl-color-gray-500);
  }
  .terms-navlink {
    text-decoration: underline;
  }
}
 
@media(max-width: 991px) {
  .terms-banner-advanced-analytics {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
}
 
@media(max-width: 767px) {
  .terms-banner-advanced-analytics {
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .terms-centered-container {
    flex-direction: column-reverse;
  }
  .terms-container2 {
    margin-left: 0px;
  }
  .terms-text14 {
    font-size: 28px;
    text-align: left;
    line-height: 26px;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .terms-text17 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .terms-text20 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .terms-text28 {
    font-size: 20px;
  }
  .terms-text29 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .terms-text34 {
    font-size: 20px;
  }
  .terms-text35 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .terms-text39 {
    font-size: 20px;
  }
  .terms-text40 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .terms-text43 {
    font-size: 20px;
  }
  .terms-text44 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .terms-text49 {
    font-size: 20px;
  }
  .terms-text50 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
}
</style>
