<template>
  <div class="support-container1">
    <app-header rootClassName="headerroot-class-name">
      <template v-slot:text>
        <div class="support-fragment1">
          <span class="support-text10">Solutions</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="support-fragment2">
          <span class="support-text11">How it works</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="support-fragment3">
          <span class="support-text12">Prices</span>
        </div>
      </template>
      <template v-slot:text3>
        <div class="support-fragment4">
          <span class="support-text13">Reserve my spot</span>
        </div>
      </template>
    </app-header>
    <div class="support-banner-advanced-analytics">
      <div class="support-centered-container">
        <div class="support-container2">
          <h2 class="support-text14 title">Support Center</h2>
          <div class="support-contact-support">
            <h3 class="support-text15">Contact Support</h3>
            <span class="support-text16">
              Can&apos;t find what you&apos;re looking for? Get in touch with our
              support team and we&apos;ll get back to you as soon as possible.
            </span>
            <div class="support-input-container1">
              <span class="support-label1">Your Name</span>
              <div class="support-input1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  class="support-input2 input"
                />
              </div>
            </div>
            <div class="support-input-container2">
              <span class="support-label2">Email Addess</span>
              <div class="support-input3">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  class="support-input4 input"
                />
              </div>
            </div>
            <div class="support-input-container3">
              <span class="support-label3">Message</span>
              <div class="support-input5">
                <input
                  type="text"
                  id="message"
                  placeholder="Enter your message"
                  class="support-input6 input"
                />
              </div>
            </div>
          </div>
          <div id="submit" class="support-subscribe">
            <span class="support-text17">Submit</span>
          </div>
          <div>
            <div class="support-container4">
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
          window.location.href = '/support-thanks';
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
          <div class="support-category">
            <h3 class="support-text18">Direct Contact</h3>
            <span class="support-text19">
              <span class="support-text20">
                For urgent matters, you can reach our support team directly:
              </span>
              <br />
              <span>Email: </span>
              <a
                href="mailto:support@beavers.money?subject="
                class="support-link1"
              >
                support@beavers.money
              </a>
              <a href="mailto:support@beavers.money?subject=">
                <br class="support-text23" />
              </a>
              <span>Support Hours: Monday to Friday, 9 AM - 5 PM EST</span>
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footerroot-class-name">
      <template v-slot:text>
        <div class="support-fragment5">
          <span class="support-text26">Copyright © Money Beavers - 2025</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="support-fragment6">
          <span class="support-text27">Support</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="support-fragment7">
          <span class="support-text28">Terms of Service</span>
        </div>
      </template>
      <template v-slot:text3>
        <div class="support-fragment8">
          <span class="support-text29">Privacy Policy</span>
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
  name: 'Support',
  props: {},
  components: {
    AppHeader,
    DangerousHTML,
    AppFooter,
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
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2841449d-32de-4b2f-9f35-e5d9cc3b58ff/dce5928d-cb28-460a-b5b9-97e724f4e2f8?org_if_sml=1&force_format=original',
      },
    ],
  },
}
</script>

<style scoped>
.support-container1 {
  display: flex;
  overflow: auto;
  min-width: 100%;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: space-between;
}
 
.support-fragment1 {
  display: contents;
}
 
.support-text10 {
  display: inline-block;
}
 
.support-fragment2 {
  display: contents;
}
 
.support-text11 {
  display: inline-block;
}
 
.support-fragment3 {
  display: contents;
}
 
.support-text12 {
  display: inline-block;
}
 
.support-fragment4 {
  display: contents;
}
 
.support-text13 {
  display: inline-block;
}
 
.support-banner-advanced-analytics {
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
 
.support-centered-container {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
}
 
.support-container2 {
  flex: 1;
  display: flex;
  max-width: 600px;
  margin-left: 0px;
  flex-direction: column;
}
 
.support-text14 {
  text-align: left;
}
 
.support-contact-support {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-layout-space-twounits);
  flex-direction: column;
}
 
.support-text15 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.support-text16 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.support-input-container1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.support-label1 {
  color: rgb(0, 0, 0);
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.support-input1 {
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-halfunit);
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: 50px;
  margin-bottom: var(--dl-layout-space-unit);
  padding-right: var(--dl-layout-space-halfunit);
  flex-direction: row;
  padding-bottom: var(--dl-layout-space-halfunit);
  justify-content: space-between;
  background-color: #ffffff;
}
 
.support-input2 {
  width: 60%;
  outline: none;
  font-size: 18px;
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
 
.support-input-container2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.support-label2 {
  color: rgb(0, 0, 0);
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.support-input3 {
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-halfunit);
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: 50px;
  margin-bottom: var(--dl-layout-space-unit);
  padding-right: var(--dl-layout-space-halfunit);
  flex-direction: row;
  padding-bottom: var(--dl-layout-space-halfunit);
  justify-content: space-between;
  background-color: #ffffff;
}
 
.support-input4 {
  width: 60%;
  outline: none;
  font-size: 18px;
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
 
.support-input-container3 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.support-label3 {
  color: rgb(0, 0, 0);
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.support-input5 {
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-halfunit);
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: 50px;
  margin-bottom: 0px;
  padding-right: var(--dl-layout-space-halfunit);
  flex-direction: row;
  padding-bottom: var(--dl-layout-space-halfunit);
  justify-content: space-between;
  background-color: #ffffff;
}
 
.support-input6 {
  width: 60%;
  outline: none;
  font-size: 18px;
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
 
.support-subscribe {
  width: 100%;
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-top: 16px;
  padding-left: 32px;
  border-radius: 56px;
  padding-right: 32px;
  flex-direction: row;
  padding-bottom: 16px;
  justify-content: center;
  background-color: var(--dl-color-success-300);
}
 
.support-subscribe:hover {
  background-color: #000;
}
 

 
.support-text17 {
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
 
.support-container4 {
  display: contents;
}
 
.support-category {
  display: flex;
  margin-top: var(--dl-layout-space-twounits);
  align-items: flex-start;
  margin-bottom: var(--dl-layout-space-twounits);
  flex-direction: column;
}
 
.support-text18 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.support-text19 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.support-link1 {
  text-decoration: underline;
}
 
.support-text23 {
  text-decoration: underline;
}
 
.support-fragment5 {
  display: contents;
}
 
.support-text26 {
  display: inline-block;
}
 
.support-fragment6 {
  display: contents;
}
 
.support-text27 {
  display: inline-block;
}
 
.support-fragment7 {
  display: contents;
}
 
.support-text28 {
  display: inline-block;
}
 
.support-fragment8 {
  display: contents;
}
 
.support-text29 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .support-banner-advanced-analytics {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
}
 
@media(max-width: 767px) {
  .support-banner-advanced-analytics {
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .support-centered-container {
    flex-direction: column-reverse;
  }
  .support-container2 {
    margin-left: 0px;
  }
  .support-text14 {
    font-size: 28px;
    text-align: left;
    line-height: 26px;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .support-text15 {
    font-size: 20px;
  }
  .support-text16 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .support-label1 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .support-label2 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .support-label3 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .support-text18 {
    font-size: 20px;
  }
  .support-text19 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .support-text20 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
}
 
@media(max-width: 479px) {
  .support-input1 {
    padding-top: var(--dl-layout-space-halfunit);
    padding-left: var(--dl-layout-space-unit);
    padding-right: var(--dl-layout-space-halfunit);
    padding-bottom: var(--dl-layout-space-halfunit);
  }
  .support-input3 {
    padding-top: var(--dl-layout-space-halfunit);
    padding-left: var(--dl-layout-space-unit);
    padding-right: var(--dl-layout-space-halfunit);
    padding-bottom: var(--dl-layout-space-halfunit);
  }
  .support-input5 {
    padding-top: var(--dl-layout-space-halfunit);
    padding-left: var(--dl-layout-space-unit);
    padding-right: var(--dl-layout-space-halfunit);
    padding-bottom: var(--dl-layout-space-halfunit);
  }
}
</style>
