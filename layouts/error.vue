<template>
  <div class="page-container1">
    <app-header rootClassName="headerroot-class-name5">
      <template v-slot:text>
        <div class="page-fragment1">
          <span class="page-text10">Solutions</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="page-fragment2">
          <span class="page-text11">How it works</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="page-fragment3"><span class="page-text12">Prices</span></div>
      </template>
      <template v-slot:text3>
        <div class="page-fragment4">
          <span class="page-text13">Reserve my spot</span>
        </div>
      </template>
    </app-header>
    <div class="page-banner-advanced-analytics">
      <div class="page-centered-container">
        <div class="page-container2">
          <h2 class="page-text14 title">
            <span>404: Oops! Page Not Found</span>
            <br />
          </h2>
          <h3 class="page-text17">
            <span>
              Looks like you&apos;ve taken a wrong turn at the Internet.
            </span>
            <br />
          </h3>
          <span class="page-text20">
            <span>
              This page packed its bags and left, or maybe it never existed.
            </span>
            <br />
            <span>
              Either way, you&apos;re here now… so make yourself at home while we
              pretend to look for it.
            </span>
            <br />
            <br />
            <span>
              Want to try that again?
              <span v-html="rawcbu7"></span>
            </span>
            <nuxt-link to="/" class="page-navlink">
              Go back home before things get weird.
            </nuxt-link>
          </span>
          <div>
            <div class="page-container4">
              <DangerousHTML
                html="<script>
    // UUID generator (RFC4122 version 4 compliant)
    function generateUUID() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    }
  
    document.getElementById('submit').addEventListener('click', async function (event) {
      event.preventDefault();
  
      const button = event.target;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // UI: Change to active state
      button.classList.add('active');
      button.disabled = true;
  
      const uuid = generateUUID();
  
  
      try {
        const response = await fetch('https://coda.io/apis/v1/docs/FEWOusDKuQ/tables/Support/rows', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer 9aa1441f-823b-4bfe-b7bf-4f42326b5524',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            rows: [
              {
                cells: [
                  { column: 'ID', value: uuid },
                  { column: 'Name', value: name },
                  { column: 'Email', value: email },
                  { column: 'Message', value: message }
                ]
              }
            ]
          })
        });
  
        if (response.ok) {
          window.location.href = '/thanks';
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error:', error);
        // Revert to initial button state
        button.classList.remove('active');
        button.disabled = false;
      }
    });
  </script>"
              ></DangerousHTML>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footerroot-class-name3">
      <template v-slot:text>
        <div class="page-fragment5">
          <span class="page-text27">Copyright © Money Beavers - 2025</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="page-fragment6"><span class="page-text28">Support</span></div>
      </template>
      <template v-slot:text2>
        <div class="page-fragment7">
          <span class="page-text29">Terms of Service</span>
        </div>
      </template>
      <template v-slot:text3>
        <div class="page-fragment8">
          <span class="page-text30">Privacy Policy</span>
        </div>
      </template>
    </app-footer>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/dist/vue/lib.js'

import AppHeader from '../components/header'
import AppFooter from '../components/footer'

export default {
  name: 'Page',
  props: {},
  components: {
    AppHeader,
    DangerousHTML,
    AppFooter,
  },
  data() {
    return {
      rawcbu7: ' ',
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
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2841449d-32de-4b2f-9f35-e5d9cc3b58ff/b07dba0b-792d-4a9e-b4c0-fad0d4e8b643?org_if_sml=1&force_format=original',
      },
    ],
  },
}
</script>

<style scoped>
.page-container1 {
  width: 100%;
  display: flex;
  overflow: auto;
  overflow-x: hidden;
  flex-direction: column;
}
 
.page-fragment1 {
  display: contents;
}
 
.page-text10 {
  display: inline-block;
}
 
.page-fragment2 {
  display: contents;
}
 
.page-text11 {
  display: inline-block;
}
 
.page-fragment3 {
  display: contents;
}
 
.page-text12 {
  display: inline-block;
}
 
.page-fragment4 {
  display: contents;
}
 
.page-text13 {
  display: inline-block;
}
 
.page-banner-advanced-analytics {
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
 
.page-centered-container {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
}
 
.page-container2 {
  flex: 1;
  display: flex;
  max-width: 600px;
  margin-left: 0px;
  flex-direction: column;
}
 
.page-text14 {
  text-align: left;
}
 
.page-text17 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.page-text20 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.page-navlink {
  text-decoration: underline;
}
 
.page-container4 {
  display: contents;
}
 
.page-fragment5 {
  display: contents;
}
 
.page-text27 {
  display: inline-block;
}
 
.page-fragment6 {
  display: contents;
}
 
.page-text28 {
  display: inline-block;
}
 
.page-fragment7 {
  display: contents;
}
 
.page-text29 {
  display: inline-block;
}
 
.page-fragment8 {
  display: contents;
}
 
.page-text30 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .page-banner-advanced-analytics {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
}
 
@media(max-width: 767px) {
  .page-banner-advanced-analytics {
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .page-centered-container {
    flex-direction: column-reverse;
  }
  .page-container2 {
    margin-left: 0px;
  }
  .page-text14 {
    font-size: 28px;
    text-align: left;
    line-height: 26px;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .page-text17 {
    font-size: 20px;
  }
  .page-text20 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
}
</style>
