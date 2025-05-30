<template>
  <div class="sign-up-container1">
    <header-no-btn rootClassName="header-no-btnroot-class-name">
      <template v-slot:text>
        <div class="sign-up-fragment1">
          <span class="sign-up-text1">Solutions</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="sign-up-fragment2">
          <span class="sign-up-text2">How it works</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="sign-up-fragment3">
          <span class="sign-up-text3">Prices</span>
        </div>
      </template>
    </header-no-btn>
    <section class="sign-up-hero">
      <header class="sign-up-content">
        <h2 class="sign-up-heading">Reserve Your Spot Now</h2>
        <div class="sign-up-input-container">
          <span class="sign-up-label1">Email Addess</span>
          <div class="sign-up-input1">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              class="sign-up-input2 input"
            />
          </div>
          <span id="email-error" class="sign-up-label2">
            Please enter a valid email address (e.g., name@gmail.com).
          </span>
        </div>
        <div class="sign-up-container2">
          <input type="checkbox" id="email-consent" class="sign-up-checkbox1" />
          <p class="sign-up-text4">
            I agree to receive email updates about Money Beaver and understand I
            can unsubscribe at any time.
          </p>
        </div>
        <div class="sign-up-container3">
          <input type="checkbox" id="terms-privacy" class="sign-up-checkbox2" />
          <p class="sign-up-text5">
            <span>
              I agree to the
              <span v-html="rawns21"></span>
            </span>
            <nuxt-link to="/terms" class="sign-up-navlink1">
              Terms of Service
            </nuxt-link>
            <span>
              and
              <span v-html="raw8s2i"></span>
            </span>
            <nuxt-link to="/privacy-policy" class="sign-up-navlink2">
              Privacy Policy
            </nuxt-link>
            <span>.</span>
          </p>
        </div>
        <div id="submit" class="sign-up-get-started">
          <nuxt-link to="/sign-up" class="sign-up-navlink3">
            Reserve my spot
          </nuxt-link>
        </div>
        <div>
          <div class="sign-up-container5">
            <DangerousHTML
              html="<style>
  @keyframes shake-animation {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
  
  .shake {
    animation: shake-animation 0.3s;
  }
  </style>
  
  <script>
   // UUID generator (RFC4122 version 4 compliant)
    function generateUUID() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    function shakeElement(element) {
      element.classList.add('shake');
      setTimeout(() => element.classList.remove('shake'), 500);
    }
  
    document.getElementById('submit').addEventListener('click', async function (event) {
      event.preventDefault();
  
      const button = event.target;
      const emailInput = document.getElementById('email');
      const email = emailInput.value;
      const emailError = document.getElementById('email-error');
      const emailConsent = document.getElementById('email-consent');
      const termsPrivacy = document.getElementById('terms-privacy');
  
      let valid = true;
  
      // Validate checkboxes
      if (!emailConsent.checked) {
        shakeElement(emailConsent);
        valid = false;
      }
      if (!termsPrivacy.checked) {
        shakeElement(termsPrivacy);
        valid = false;
      }
  
      // Validate email
      if (!validateEmail(email)) {
        emailError.style.display = 'block';
        shakeElement(emailInput);
        valid = false;
      } else {
        emailError.style.display = 'none';
      }
  
      if (!valid) {
        return;
      }
  
      // UI: Change to active state
      button.classList.add('active');
      button.disabled = true;
  
      const uuid = generateUUID();
  
      try {
        const response = await fetch('https://coda.io/apis/v1/docs/FEWOusDKuQ/tables/ReserveSpot/rows', {
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
                  { column: 'Email', value: email }
                ]
              }
            ]
          })
        });
  
        if (response.ok) {
          gtag('event', 'conversion', {
              'send_to': 'AW-954124888/1lMgCMTA3s4aENiU-8YD',
              'value': 1.0,
              'currency': 'VND'
          });
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
      </header>
    </section>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/dist/vue/lib.js'

import HeaderNoBtn from '../components/header-no-btn'

export default {
  name: 'SignUp',
  props: {},
  components: {
    HeaderNoBtn,
    DangerousHTML,
  },
  data() {
    return {
      rawns21: ' ',
      raw8s2i: ' ',
    }
  },
  head: {
    title: 'Beavers Money - AI-Powered Personal Finance Tool',
    meta: [
      {
        name: 'description',
        content:
          'Money Beavers is an AI-powered finance tracker that turns your inbox messages into smart insights in Google Sheets—making budgeting simple, automatic, and stress-free.',
      },
      {
        property: 'og:title',
        content: 'Beavers Money - AI-Powered Personal Finance Tool',
      },
      {
        property: 'og:description',
        content:
          'Money Beavers is an AI-powered finance tracker that turns your inbox messages into smart insights in Google Sheets—making budgeting simple, automatic, and stress-free.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2841449d-32de-4b2f-9f35-e5d9cc3b58ff/bcb3874b-4044-4885-93e2-b78a8fb7232c?org_if_sml=1&force_format=original',
      },
    ],
  },
}
</script>

<style scoped>
.sign-up-container1 {
  min-height: 100%;
  background-color: var(--dl-color-template-blue-bg);
}
 
.sign-up-fragment1 {
  display: contents;
}
 
.sign-up-text1 {
  display: inline-block;
}
 
.sign-up-fragment2 {
  display: contents;
}
 
.sign-up-text2 {
  display: inline-block;
}
 
.sign-up-fragment3 {
  display: contents;
}
 
.sign-up-text3 {
  display: inline-block;
}
 
.sign-up-hero {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-oneandhalfunits);
  border-color: var(--dl-color-template-blue-bg);
  border-width: 1px;
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: column;
  padding-bottom: var(--dl-layout-space-threeunits);
  background-color: var(--dl-color-template-blue-bg);
}
 
.sign-up-content {
  display: flex;
  margin-top: var(--dl-layout-space-fourunits);
  align-items: center;
  flex-direction: column;
}
 
.sign-up-heading {
  color: rgb(255, 255, 255);
  font-size: 55px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
  line-height: 80px;
  margin-bottom: var(--dl-layout-space-twounits);
}
 
.sign-up-input-container {
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
 
.sign-up-label1 {
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.sign-up-input1 {
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: 50px;
  margin-bottom: var(--dl-layout-space-halfunit);
  padding-right: var(--dl-layout-space-halfunit);
  flex-direction: row;
  padding-bottom: 0px;
  justify-content: space-between;
  background-color: #ffffff;
}
 
.sign-up-input2 {
  width: 60%;
  outline: none;
  font-size: 18px;
  padding-top: 0px;
  border-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
 
.sign-up-label2 {
  fill: var(--dl-color-danger-700);
  color: var(--dl-color-danger-700);
  display: none;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-halfunit);
}
 
.sign-up-container2 {
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding-top: var(--dl-layout-space-halfunit);
  flex-direction: row;
}
 
.sign-up-checkbox1 {
  width: var(--dl-layout-size-xsmall);
  height: var(--dl-layout-size-xsmall);
}
 
.sign-up-text4 {
  color: rgb(238, 233, 254);
  font-size: 16px;
  max-width: 670px;
  margin-top: 0px;
  text-align: left;
  line-height: 20px;
  padding-left: var(--dl-layout-space-unit);
}
 
.sign-up-container3 {
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  padding-top: var(--dl-layout-space-halfunit);
}
 
.sign-up-checkbox2 {
  width: var(--dl-layout-size-xsmall);
  height: var(--dl-layout-size-xsmall);
}
 
.sign-up-text5 {
  color: rgb(238, 233, 254);
  font-size: 16px;
  max-width: 670px;
  margin-top: 0px;
  text-align: left;
  line-height: 20px;
  padding-left: var(--dl-layout-space-unit);
}
 
.sign-up-navlink1 {
  text-decoration: underline;
}
 
.sign-up-navlink2 {
  text-decoration: underline;
}
 
.sign-up-get-started {
  color: white;
  cursor: pointer;
  display: flex;
  margin-top: 40px;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-layout-space-unit);
  padding-left: var(--dl-layout-space-twounits);
  border-radius: 56px;
  padding-right: var(--dl-layout-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-layout-space-unit);
  background-color: var(--dl-color-success-300);
}
 
.sign-up-get-started:hover {
  color: #ffffff;
  background-color: #075e21;
}
 
.sign-up-navlink3 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
}
 
.sign-up-container5 {
  display: contents;
}
 
@media(max-width: 1600px) {
  .sign-up-heading {
    font-size: 53px;
  }
  .sign-up-input2 {
    font-size: 18px;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
  }
}
 
@media(max-width: 991px) {
  .sign-up-hero {
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
}
 
@media(max-width: 767px) {
  .sign-up-hero {
    height: 620px;
    position: relative;
    padding-bottom: 180px;
    background-color: var(--dl-color-template-blue-bg);
  }
  .sign-up-content {
    margin-top: var(--dl-layout-space-twounits);
    justify-content: center;
  }
  .sign-up-heading {
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
  }
  .sign-up-label1 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .sign-up-label2 {
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .sign-up-text4 {
    color: rgb(238, 233, 254);
    font-size: 16px;
    margin-top: var(--dl-layout-space-unit);
    line-height: 24px;
  }
  .sign-up-text5 {
    color: rgb(238, 233, 254);
    font-size: 16px;
    margin-top: var(--dl-layout-space-unit);
    line-height: 24px;
  }
  .sign-up-get-started {
    margin-top: var(--dl-layout-space-twounits);
  }
}
 
@media(max-width: 479px) {
  .sign-up-hero {
    padding-bottom: 160px;
  }
  .sign-up-input1 {
    padding-top: var(--dl-layout-space-halfunit);
    padding-left: var(--dl-layout-space-unit);
    padding-right: var(--dl-layout-space-halfunit);
    padding-bottom: var(--dl-layout-space-halfunit);
  }
  .sign-up-text4 {
    color: #EEE9FE;
  }
  .sign-up-text5 {
    color: #EEE9FE;
  }
  .sign-up-get-started {
    width: 100%;
  }
}
</style>
