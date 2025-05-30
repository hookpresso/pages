<template>
  <div>
    <app-header
      logoSrc="/beavers_full.svg"
      rootClassName="headerroot-class-name2"
    >
      <template v-slot:text>
        <div class="home-fragment1">
          <span class="home-text10">Solutions</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="home-fragment2">
          <span class="home-text11">How it works</span>
        </div>
      </template>
      <template v-slot:text2>
        <div class="home-fragment3"><span class="home-text12">Prices</span></div>
      </template>
      <template v-slot:text3>
        <div class="home-fragment4">
          <span class="home-text13">Reserve my spot</span>
        </div>
      </template>
    </app-header>
    <section class="home-hero">
      <div class="home-content">
        <h1 class="home-heading1">
          <span>Your finances in one Google Sheet™,</span>
          <br />
          <span>auto‑updated daily</span>
        </h1>
        <h1 class="home-heading2">
          Your finances in one Google Sheet™, auto‑updated daily
        </h1>
        <p class="home-text17">
          Money Beavers turns every confirmation e‑mail into clean transaction
          rows while you sleep. Early‑bird $7 / month after free beta.
        </p>
        <nuxt-link to="/sign-up" class="home-navlink1">
          <div class="home-reserve-my-spot1">
            <span class="home-text18">Reserve my spot</span>
          </div>
        </nuxt-link>
      </div>
      <div class="home-dashboard-preview">
        <div class="home-outline">
          <img
            alt="Beavers.money money tracker app dashboard showing easy expense tracking and budget overview"
            :src="heroBanner"
            loading="lazy"
            class="home-image1"
          />
        </div>
      </div>
    </section>
    <section class="home-features">
      <div class="home-title">
        <span class="home-text19">
          <span>Let's Track Smarter, Build Wealth Faster</span>
          <br />
        </span>
        <span class="home-text22">
          Money Beavers' AI sweeps your inbox, extracts every transaction, and
          auto‑categorizes spending—so you can focus on growing your net worth
        </span>
      </div>
      <div class="home-cards">
        <div class="home-container2">
          <div class="home-schedule card">
            <script setup>
              const iconSpending = useAsset('/icon-spending.svg')
            </script>


            <img alt="pastedImage" :src="iconSpending" class="home-icon1" />
            <span class="home-text23">See Your Spending</span>
            <span class="home-text24">
              Get a clear view of all your transactions, organized in one place—no
              more digging through emails.
            </span>
          </div>
          <div class="home-publish card">
            <img alt="pastedImage" :src="iconAutomate" class="home-icon2" />
            <span class="home-text25">
              <span>Automated Categorization</span>
              <br />
            </span>
            <span class="home-text28">
              <span>
                Your expenses are instantly sorted into categories, powered by AI
                for smarter tracking.
              </span>
              <br />
            </span>
          </div>
        </div>
        <div class="home-container3">
          <div class="home-analyze card">
            <img alt="pastedImage" :src="iconReport" class="home-icon3" />
            <span class="home-text31">
              <span>Monthly Reports</span>
              <br />
            </span>
            <span class="home-text34">
              Receive automatic summaries of your spending habits, helping you
              stay on top of your finances.
            </span>
          </div>
          <div class="home-get-leads card">
            <img alt="pastedImage" :src="iconMoney" class="home-icon4" />
            <span class="home-text35">
              <span>Track Your Budget</span>
              <br />
            </span>
            <span class="home-text38">
              Set budget goals and monitor your progress with real-time updates
              directly in Google Sheets™.
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="home-quote-container">
      <div class="home-quote1">
        <span class="home-message">
          "Scale your content, grew lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua."
        </span>
        <div class="home-author">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
            class="home-avatar"
          />
          <span class="home-quote2">
            <span class="home-text39">— Peter McPau</span>
            <span>, Founder and CEO, Active</span>
          </span>
        </div>
      </div>
    </section>
    <section class="home-statistics"><div class="home-container4"></div></section>
    <section class="home-banners">
      <div class="home-banner-manage">
        <div class="home-container5">
          <div class="home-left1">
            <span class="home-text41 sub-title">
              <span>Smart Tracking</span>
              <br />
            </span>
            <span class="home-text44 title">
              Effortless Expense Tracking, Smarter Wealth‑Building
            </span>
            <span class="home-text45">
              Money Beavers' AI sweeps your inbox, extracts every transaction, and
              auto‑categorizes spending—so you can focus on growing your net
              worth.
            </span>
            <nuxt-link to="/sign-up" class="home-navlink2">
              <div class="home-reserve-my-spot2 template-button">
                <span class="home-text46">Reserve my spot</span>
              </div>
            </nuxt-link>
          </div>
          <div class="home-image-container1">
            <img alt="pastedImage" :src="testTb" class="home-cards-image1" />
          </div>
        </div>
      </div>
      <div class="home-banner-advanced-analytics1">
        <div class="home-centered-container1">
          <div class="home-image-container2">
            <img
              alt="pastedImage"
              :src="heroBanner"
              class="home-cards-image2"
            />
          </div>
          <div class="home-right1">
            <span class="home-text47 sub-title">
              <span>Live Overview</span>
              <br />
              <span><span v-html="raww57d"></span></span>
            </span>
            <h2 class="home-text51 title">
              Live Financial Snapshot in Google Sheets
            </h2>
            <div class="home-category1">
              <span class="home-text52">
                All transactions sync to a familiar spreadsheet, giving you
                real‑time filters, edits, and pivot‑table power without extra
                apps.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="home-banner">
        <div class="home-container6">
          <div class="home-left2">
            <span class="home-text53">Spending Control</span>
            <h2 class="home-text54 title">
              Uncover &amp; Eliminate Sneaky Recurring Costs
            </h2>
            <span class="home-text55">
              We flag subscriptions and repeat charges the moment they post,
              helping you cut waste before it drains your budget.
            </span>
            <nuxt-link to="/sign-up" class="home-navlink3">
              <div class="home-reserve-my-spot3 template-button">
                <span class="home-text56">Reserve my spot</span>
              </div>
            </nuxt-link>
          </div>
          <div class="home-image-container3">
            <img
              alt="pastedImage"
              :src="filter"
              class="home-cards-image3"
            />
          </div>
        </div>
      </div>
      <div class="home-banner-advanced-analytics2">
        <div class="home-centered-container2">
          <div class="home-image-container4">
            <img
              alt="pastedImage"
              :src="relu"
              class="home-cards-image4"
            />
          </div>
          <div class="home-right2">
            <span class="home-text57 sub-title">Customization</span>
            <h2 class="home-text58 title">Total Flexibility, Your Rules</h2>
            <div class="home-category2">
              <span class="home-text59">
                Rename categories, tweak formulas, add custom dashboards—every
                column, sheet, and alert adapts to the way you manage money.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home-how-it-works">
      <div class="home-centered-container3">
        <div class="home-heading3">
          <span class="home-text60">How it works</span>
          <span class="home-text61 title">Get Started in 3 Simple Steps</span>
        </div>
        <div class="home-category3">
          <div class="home-headng1">
            <span class="home-text62">
              1 — Install the Add-on
              <span v-html="raw1jp6"></span>
            </span>
            <span class="home-text63">
              Head to the Google Workspace Marketplace and install Money Beavers
              into your Google Sheets™ to begin.
            </span>
            <nuxt-link to="/sign-up" class="home-navlink4">
              <div class="home-get-started1 template-button">
                <span class="home-text64">Get started</span>
              </div>
            </nuxt-link>
          </div>
          <div class="home-container7">
            <img
              alt="pastedImage"
              :src="workspace"
              class="home-pasted-image1"
            />
          </div>
        </div>
        <div class="home-row">
          <div class="home-category4">
            <div class="home-headng2">
              <span class="home-text65">2 — Connect Your Gmail™</span>
              <span class="home-text66">
                <span>
                  Grant secure permission so Money Beavers can scan your inbox for
                  receipts, bills, and transaction-related emails.
                </span>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <img
              alt="pastedImage"
              :src="permission"
              class="home-pasted-image2"
            />
          </div>
          <div class="home-category5">
            <div class="home-headng3">
              <span class="home-text69">3 — Add Your Gemini API Key</span>
              <span class="home-text70">
                Enter your Gemini API key to enable AI-powered extraction and
                accurate parsing of financial details from your emails.
              </span>
            </div>
            <img
              alt="pastedImage"
              :src="geminiApi"
              class="home-pasted-image3"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="home-testimonals">
      <div class="home-left3">
        <span class="home-text71">Testimonals</span>
        <span class="home-text72 title">What people say about Money Beavers</span>
      </div>
      <div class="home-right3">
        <div class="home-column1">
          <app-testimonal
            from="April 28, 2025"
            name="Linh Tran"
            quote="I clung to Mint for years, but moving to Money Beavers was a breeze. My custom Excel budget took two hours to port, and now daily email digests keep everything in sync automatically—no bank logins required."
            avatarSrc="/image552912-e3yq-200h.png"
          ></app-testimonal>
          <app-testimonal
            from="May 17, 2025"
            name="Jessica Smith"
            quote="Money Beavers gives me clarity in two ways: first, it pulls receipts from six different inboxes into one live sheet; second, the community templates let me slice spending any way I like. Way more control than other trackers."
            avatarSrc="/image312912-mvsg-200h.png"
          ></app-testimonal>
          <app-testimonal
            from="March 17, 2025"
            name="Logan Boy"
            quote="After years of juggling CSV exports, Money Beavers finally makes my spreadsheet‑first habit effortless. New add‑ons keep showing up—recurring‑expense tracker, cash‑flow charts—and each one just plugs in."
            avatarSrc="/image502912-6wy-200h.png"
          ></app-testimonal>
          <app-testimonal
            from="March 15, 2025"
            name="Laraine Summers"
            quote="Money Beavers finally shows where our cash really goes. Next step: proactive budgeting. The docs are clear, and the user forum is buzzing with tips. Highly recommend giving it a spin."
            avatarSrc="/image202912-zekh-200h.png"
          ></app-testimonal>
        </div>
        <div class="home-column2">
          <app-testimonal
            from="April 24, 2025"
            name="Marcus Nguyen"
            quote="Money Beavers gives me clarity in two ways: first, it pulls receipts from six different inboxes into one live sheet; second, the community templates let me slice spending any way I like. Way more control than other trackers."
            avatarSrc="/image572912-0d3-200h.png"
          ></app-testimonal>
          <app-testimonal
            from="April 24, 2025"
            name="Mariah Mae"
            quote="The auto‑tagging is scarily accurate. Monthly and annual summaries update themselves, so I ditched my manual Sheets workflow. If you love spreadsheets but hate copy‑paste drudgery, this is it."
            avatarSrc="/image632913-swij-200h.png"
          ></app-testimonal>
          <app-testimonal
            from="March 11, 2025"
            name="John Finati"
            quote="With Mint gone, I worried about losing my budgets, but Money Beavers is ten times better. Envelope budgets, net‑worth dashboards, subscription alerts—everything lives in Google Sheets, and support replies within hours."
            avatarSrc="/image102913-x4z8-200h.png"
          ></app-testimonal>
          <app-testimonal
            from="March 11, 2025"
            name="Mary Pau"
            quote="Testing Money Beavers has been eye‑opening. The transaction sheet is easier to filter than any app I've tried, and the morning email recap keeps me honest about yesterday's spending."
            avatarSrc="/image562913-ycff-200h.png"
          ></app-testimonal>
        </div>
      </div>
      <span class="home-text73">
        <span>Show more</span>
        <br />
      </span>
    </section>
    <section class="home-action-bar">
      <div class="home-action">
        <div class="home-heading4">
          <span class="home-text76 title">
            Tracking Spending Smarter
            <span v-html="rawnqtl"></span>
          </span>
          <span class="home-text77">
            Stop Wasting Time. Start Tracking Smarter with Money Beavers.
          </span>
          <nuxt-link to="/sign-up" class="home-navlink5">
            <div class="home-get-started2 template-button">
              <span class="home-text78">
                <span>Reserve my spot</span>
                <br />
              </span>
            </div>
          </nuxt-link>
        </div>
        <div class="home-images">
          <img alt="image" :src="table2" class="home-image2" />
        </div>
      </div>
    </section>
    <app-footer brandingSrc="/beavers_w.svg">
      <template v-slot:text>
        <div class="home-fragment5">
          <span class="home-text81">Copyright © Money Beavers - 2025</span>
        </div>
      </template>
      <template v-slot:text1>
        <div class="home-fragment6"><span class="home-text82">Support</span></div>
      </template>
      <template v-slot:text2>
        <div class="home-fragment7">
          <span class="home-text83">Terms of Service</span>
        </div>
      </template>
      <template v-slot:text3>
        <div class="home-fragment8">
          <span class="home-text84">Privacy Policy</span>
        </div>
      </template>
    </app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppTestimonal from '../components/testimonal'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  props: {},
  components: {
    AppHeader,
    AppTestimonal,
    AppFooter,
  },
  data() {
    return {
      raww57d: ' ',
      raw1jp6: ' ',
      rawnqtl: ' ',
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
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2841449d-32de-4b2f-9f35-e5d9cc3b58ff/b77a2766-b8a2-46ea-b761-3282de97898f?org_if_sml=1&force_format=original',
      },
    ],
  },
}
</script>

<style scoped>
.home-fragment1 {
  display: contents;
}
 
.home-text10 {
  display: inline-block;
}
 
.home-fragment2 {
  display: contents;
}
 
.home-text11 {
  display: inline-block;
}
 
.home-fragment3 {
  display: contents;
}
 
.home-text12 {
  display: inline-block;
}
 
.home-fragment4 {
  display: contents;
}
 
.home-text13 {
  display: inline-block;
}
 
.home-hero {
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-oneandhalfunits);
  border-color: var(--dl-color-template-blue-bg);
  border-width: 1px;
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: column;
  background-color: var(--dl-color-template-blue-bg);
}
 
.home-content {
  display: flex;
  margin-top: var(--dl-layout-space-fourunits);
  align-items: center;
  flex-direction: column;
}
 
.home-heading1 {
  color: rgb(255, 255, 255);
  font-size: 55px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
  line-height: 80px;
}
 
.home-heading2 {
  color: rgb(255, 255, 255);
  display: none;
  font-size: 55px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
  line-height: 80px;
}
 
.home-text17 {
  color: rgb(238, 233, 254);
  font-size: 20px;
  max-width: 670px;
  margin-top: 16px;
  text-align: center;
  line-height: 30px;
}
 
.home-navlink1 {
  display: contents;
}
 
.home-reserve-my-spot1 {
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
  text-decoration: none;
  background-color: var(--dl-color-success-300);
}
 
.home-reserve-my-spot1:hover {
  color: black;
  background-color: #ffffff;
}
 
.home-text18 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
 
.home-dashboard-preview {
  top: 650px;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: var(--dl-color-branded-100);
  flex-direction: column;
}
 
.home-outline {
  display: flex;
  align-items: center;
  border-color: var(--dl-color-branded-500);
  flex-direction: column;
}
 
.home-image1 {
  width: 1000px;
  z-index: 10;
  box-shadow: 0px 5px 24px 8px rgba(0, 0, 0, 0.08);
  user-select: none;
  border-radius: 24px;
}
 
.home-features {
  width: 100%;
  display: flex;
  z-index: 1;
  align-items: center;
  padding-top: 400px;
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: column;
  background-color: EFF0F2;
}
 
.home-title {
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.home-text19 {
  font-size: 56px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
  line-height: 72px;
}
 
.home-text22 {
  font-size: 20px;
  margin-top: 16px;
  text-align: center;
  line-height: 30px;
}
 
.home-cards {
  width: 100%;
  display: flex;
  max-width: 1200px;
  margin-top: 80px;
  align-items: center;
  flex-direction: column;
}
 
.home-container2 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-layout-space-twounits);
  flex-direction: row;
}
 
.home-schedule {
  padding-top: var(--dl-layout-space-twounits);
  padding-bottom: var(--dl-layout-space-twounits);
}
 
.home-icon1 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.home-text23 {
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: var(--dl-layout-space-unit);
}
 
.home-text24 {
  line-height: 24px;
}
 
.home-publish {
  height: initial;
  padding-top: var(--dl-layout-space-twounits);
  padding-bottom: var(--dl-layout-space-twounits);
}
 
.home-icon2 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.home-text25 {
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: var(--dl-layout-space-unit);
}
 
.home-text28 {
  line-height: 24px;
}
 
.home-container3 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-layout-space-sixunits);
  flex-direction: row;
}
 
.home-analyze {
  padding-top: var(--dl-layout-space-twounits);
  padding-bottom: var(--dl-layout-space-twounits);
}
 
.home-icon3 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.home-text31 {
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: 16px;
}
 
.home-text34 {
  line-height: 24px;
}
 
.home-get-leads {
  padding-top: var(--dl-layout-space-twounits);
  padding-bottom: var(--dl-layout-space-twounits);
}
 
.home-icon4 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.home-text35 {
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: var(--dl-layout-space-unit);
}
 
.home-text38 {
  line-height: 24px;
}
 
.home-quote-container {
  width: 100%;
  display: none;
  align-items: center;
  padding-top: 160px;
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: column;
  padding-bottom: 160px;
  justify-content: center;
  background-color: #000000;
}
 
.home-quote1 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
}
 
.home-message {
  color: rgb(255, 255, 255);
  font-size: 40px;
  max-width: 800px;
  line-height: 52px;
}
 
.home-author {
  width: 800px;
  display: flex;
  margin-top: var(--dl-layout-space-oneandhalfunits);
  align-items: center;
  flex-direction: row;
}
 
.home-avatar {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
}
 
.home-quote2 {
  color: rgb(151, 126, 249);
  width: 100%;
  max-width: 800px;
  margin-left: var(--dl-layout-space-unit);
}
 
.home-text39 {
  font-style: normal;
  font-weight: 600;
}
 
.home-statistics {
  width: 100%;
  height: 264px;
  display: none;
  align-items: center;
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: row;
  justify-content: center;
  background-color: #5228F5;
}
 
.home-container4 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.home-banners {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.home-banner-manage {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-sixunits);
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: row;
  padding-bottom: var(--dl-layout-space-sixunits);
  justify-content: center;
}
 
.home-container5 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.home-left1 {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-layout-space-fourunits);
  flex-direction: column;
}
 
.home-text41 {
  fill: var(--dl-color-success-300);
  color: var(--dl-color-success-300);
}
 
.home-text44 {
  text-align: left;
}
 
.home-text45 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-threeunits);
}
 
.home-navlink2 {
  display: contents;
}
 
.home-reserve-my-spot2 {
  transition: 0.3s;
  margin-bottom: 0;
  text-decoration: none;
  background-color: var(--dl-color-success-300);
}
 
.home-reserve-my-spot2:hover {
  color: var(--dl-color-gray-white);
  background-color: #075e21;
}
 
.home-text46 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
 
.home-image-container1 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.home-cards-image1 {
  width: 600px;
  height: auto;
  object-fit: contain;
  user-select: none;
}
 
.home-banner-advanced-analytics1 {
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
 
.home-centered-container1 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
}
 
.home-image-container2 {
  flex: 1;
  display: flex;
}
 
.home-cards-image2 {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
 
.home-right1 {
  flex: 1;
  display: flex;
  margin-left: var(--dl-layout-space-fourunits);
  flex-direction: column;
}
 
.home-text47 {
  fill: var(--dl-color-success-300);
  color: var(--dl-color-success-300);
}
 
.home-text51 {
  text-align: left;
}
 
.home-category1 {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-layout-space-twounits);
  flex-direction: column;
}
 
.home-text52 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.home-banner {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-sixunits);
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: row;
  padding-bottom: var(--dl-layout-space-sixunits);
  justify-content: center;
}
 
.home-container6 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.home-left2 {
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-layout-space-fourunits);
  flex-direction: column;
}
 
.home-text53 {
  fill: var(--dl-color-success-300);
  color: var(--dl-color-success-300);
  font-style: normal;
  font-weight: 600;
  margin-bottom: 24px;
}
 
.home-text54 {
  text-align: left;
}
 
.home-text55 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-threeunits);
}
 
.home-navlink3 {
  display: contents;
}
 
.home-reserve-my-spot3 {
  transition: 0.3s;
  margin-bottom: 0;
  text-decoration: none;
  background-color: var(--dl-color-success-300);
}
 
.home-reserve-my-spot3:hover {
  color: var(--dl-color-gray-white);
  background-color: #075e21;
}
 
.home-text56 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
 
.home-image-container3 {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.home-cards-image3 {
  width: 600;
  height: auto;
  object-fit: contain;
}
 
.home-banner-advanced-analytics2 {
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
 
.home-centered-container2 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
}
 
.home-image-container4 {
  flex: 1;
  display: flex;
}
 
.home-cards-image4 {
  width: 560px;
  height: auto;
  object-fit: contain;
}
 
.home-right2 {
  flex: 1;
  display: flex;
  margin-left: var(--dl-layout-space-fourunits);
  flex-direction: column;
}
 
.home-text57 {
  fill: var(--dl-color-success-300);
  color: var(--dl-color-success-300);
}
 
.home-text58 {
  text-align: left;
}
 
.home-category2 {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-layout-space-twounits);
  flex-direction: column;
}
 
.home-text59 {
  color: rgb(0, 0, 0);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.home-how-it-works {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-sixunits);
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: column;
  padding-bottom: var(--dl-layout-space-sixunits);
  background-color: var(--dl-color-template-blue-bg);
}
 
.home-centered-container3 {
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
 
.home-heading3 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-layout-space-fiveunits);
  flex-direction: column;
}
 
.home-text60 {
  fill: var(--dl-color-success-700);
  color: var(--dl-color-success-700);
  font-style: normal;
  font-weight: 600;
  margin-bottom: 24px;
}
 
.home-text61 {
  color: var(--dl-color-gray-white);
  align-self: center;
}
 
.home-category3 {
  color: white;
  width: 100%;
  display: flex;
  overflow: hidden;
  padding-left: var(--dl-layout-space-fourunits);
  border-radius: 50px;
  margin-bottom: var(--dl-layout-space-threeunits);
  flex-direction: row;
  background-color: var(--dl-color-success-300);
}
 
.home-headng1 {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-layout-space-threeunits);
  margin-right: var(--dl-layout-space-fourunits);
  flex-direction: column;
  padding-bottom: var(--dl-layout-space-threeunits);
  justify-content: center;
}
 
.home-text62 {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
}
 
.home-text63 {
  color: rgb(238, 233, 254);
  line-height: 24px;
  margin-bottom: 40px;
}
 
.home-navlink4 {
  display: contents;
}
 
.home-get-started1 {
  margin-bottom: 0px;
  text-decoration: none;
}
 
.home-get-started1:hover {
  color: black;
  background-color: #ffffff;
}
 
.home-text64 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
 
.home-container7 {
  flex: 1;
  height: 100%;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
}
 
.home-pasted-image1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  padding: var(--dl-layout-space-twounits);
  object-fit: contain;
}
 
.home-row {
  display: flex;
  grid-gap: var(--dl-layout-space-threeunits);
  align-items: center;
  flex-direction: row;
}
 
.home-category4 {
  flex: 1;
  color: white;
  height: 555px;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 50px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e2e2e2;
}
 
.home-headng2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-layout-space-fourunits);
  padding-left: var(--dl-layout-space-fourunits);
  padding-right: var(--dl-layout-space-fourunits);
  flex-direction: column;
  padding-bottom: 0px;
}
 
.home-text65 {
  color: rgb(0, 0, 0);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
}
 
.home-text66 {
  color: rgb(30, 30, 30);
  line-height: 24px;
}
 
.home-pasted-image2 {
  width: 80%;
  padding: var(--dl-layout-space-twounits);
}
 
.home-category5 {
  flex: 1;
  color: white;
  height: 555px;
  display: flex;
  overflow: hidden;
  align-items: flex-end;
  border-radius: 50px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000000;
}
 
.home-headng3 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-layout-space-fourunits);
  padding-left: var(--dl-layout-space-fourunits);
  padding-right: var(--dl-layout-space-fourunits);
  flex-direction: column;
  padding-bottom: 0px;
}
 
.home-text69 {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
}
 
.home-text70 {
  color: rgb(238, 233, 254);
  line-height: 24px;
}
 
.home-pasted-image3 {
  width: 100%;
  padding: var(--dl-layout-space-twounits);
  object-fit: contain;
}
 
.home-testimonals {
  width: 100%;
  display: flex;
  padding-top: var(--dl-layout-space-sixunits);
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: row;
  padding-bottom: var(--dl-layout-space-sixunits);
  justify-content: center;
}
 
.home-left3 {
  width: 375px;
  display: flex;
  margin-top: 375px;
  align-items: flex-start;
  margin-right: var(--dl-layout-space-threeunits);
  flex-direction: column;
}
 
.home-text71 {
  fill: var(--dl-color-success-300);
  color: var(--dl-color-success-300);
  font-style: normal;
  font-weight: 600;
  margin-bottom: 24px;
}
 
.home-text72 {
  text-align: left;
}
 
.home-right3 {
  gap: 40px;
  display: flex;
  flex-direction: row;
}
 
.home-column1 {
  gap: 40px;
  display: flex;
  flex-direction: column;
}
 
.home-column2 {
  gap: 40px;
  display: flex;
  flex-direction: column;
}
 
.home-text73 {
  cursor: pointer;
  display: none;
}
 
.home-action-bar {
  width: 100%;
  display: flex;
  padding: 120px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
 
.home-action {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: flex-end;
  border-radius: 50px;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--dl-color-template-blue-bg);
}
 
.home-heading4 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-layout-space-sevenunits);
  padding-left: var(--dl-layout-space-sevenunits);
  flex-direction: column;
  padding-bottom: var(--dl-layout-space-sevenunits);
}
 
.home-text76 {
  color: var(--dl-color-gray-white);
  text-align: left;
}
 
.home-text77 {
  color: rgb(238, 233, 254);
  line-height: 24px;
  margin-bottom: var(--dl-layout-space-threeunits);
}
 
.home-navlink5 {
  display: contents;
}
 
.home-get-started2 {
  transition: 0.3s;
  margin-bottom: 0px;
  text-decoration: none;
  background-color: var(--dl-color-success-300);
}
 
.home-get-started2:hover {
  color: var(--dl-color-gray-white);
  background-color: #075e21;
}
 
.home-text78 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
}
 
.home-images {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
}
 
.home-image2 {
  width: 492px;
  height: 534px;
  padding: var(--dl-layout-space-twounits);
  object-fit: cover;
  user-select: none;
  border-radius: 56px;
}
 
.home-fragment5 {
  display: contents;
}
 
.home-text81 {
  display: inline-block;
}
 
.home-fragment6 {
  display: contents;
}
 
.home-text82 {
  display: inline-block;
}
 
.home-fragment7 {
  display: contents;
}
 
.home-text83 {
  display: inline-block;
}
 
.home-fragment8 {
  display: contents;
}
 
.home-text84 {
  display: inline-block;
}
 
@media(max-width: 1600px) {
  .home-heading1 {
    font-size: 53px;
  }
  .home-text23 {
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
  }
  .home-icon3 {
    width: 30px;
  }
  .home-text41 {
    fill: var(--dl-color-success-300);
    color: var(--dl-color-success-300);
  }
  .home-reserve-my-spot2 {
    background-color: var(--dl-color-success-300);
  }
  .home-text47 {
    fill: var(--dl-color-success-300);
    color: var(--dl-color-success-300);
  }
  .home-text53 {
    fill: var(--dl-color-success-300);
    color: var(--dl-color-success-300);
  }
  .home-text57 {
    fill: var(--dl-color-success-300);
    color: var(--dl-color-success-300);
  }
  .home-how-it-works {
    background-color: var(--dl-color-template-blue-bg);
  }
  .home-category3 {
    background-color: var(--dl-color-success-300);
  }
  .home-category4 {
    align-items: center;
    background-color: #e4e4e4;
  }
  .home-pasted-image2 {
    width: 80%;
  }
  .home-pasted-image3 {
    padding-left: var(--dl-layout-space-twounits);
    padding-right: var(--dl-layout-space-twounits);
    padding-bottom: var(--dl-layout-space-twounits);
  }
  .home-text71 {
    fill: var(--dl-color-success-300);
    color: var(--dl-color-success-300);
  }
  .home-action {
    align-items: center;
    background-color: var(--dl-color-template-blue-bg);
  }
  .home-get-started2 {
    background-color: var(--dl-color-success-300);
  }
  .home-image2 {
    border-radius: 56px;
  }
}
 
@media(max-width: 1200px) {
  .home-heading1 {
    display: none;
  }
  .home-heading2 {
    display: flex;
  }
  .home-icon3 {
    width: var(--dl-layout-size-small);
  }
}
 
@media(max-width: 991px) {
  .home-hero {
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
  .home-heading1 {
    display: none;
  }
  .home-heading2 {
    color: rgb(255, 255, 255);
    display: flex;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
  }
  .home-dashboard-preview {
    top: 530px;
  }
  .home-image1 {
    width: 100%;
  }
  .home-features {
    padding-top: 250px;
  }
  .home-title {
    width: 100%;
    max-width: 1200px;
  }
  .home-text19 {
    font-size: 36px;
    line-height: 40px;
  }
  .home-text22 {
    font-size: 20px;
    margin-top: var(--dl-layout-space-unit);
    line-height: 30px;
  }
  .home-cards {
    margin-top: var(--dl-layout-space-fiveunits);
  }
  .home-text24 {
    line-height: 21px;
  }
  .home-text28 {
    line-height: 21px;
  }
  .home-text34 {
    line-height: 21px;
  }
  .home-text35 {
    font-size: 24px;
  }
  .home-text38 {
    line-height: 21px;
  }
  .home-quote-container {
    padding-top: var(--dl-layout-space-sevenunits);
    padding-bottom: var(--dl-layout-space-sevenunits);
  }
  .home-message {
    width: 100%;
    max-width: 800px;
  }
  .home-author {
    width: 100%;
    max-width: 800px;
  }
  .home-statistics {
    height: 800px;
    padding-top: var(--dl-layout-space-threeunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    flex-direction: column;
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .home-container4 {
    height: 100%;
    flex-direction: column;
  }
  .home-banner-manage {
    padding-top: var(--dl-layout-space-threeunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .home-left1 {
    margin-right: var(--dl-layout-space-threeunits);
  }
  .home-cards-image1 {
    width: 360px;
  }
  .home-banner-advanced-analytics1 {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
  .home-banner-advanced-analytics2 {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
  .home-category3 {
    padding-left: 0px;
    margin-bottom: var(--dl-layout-space-threeunits);
    flex-direction: column;
  }
  .home-headng1 {
    margin-left: var(--dl-layout-space-fourunits);
  }
  .home-container7 {
    width: 100%;
  }
  .home-pasted-image1 {
    height: auto;
  }
  .home-headng2 {
    padding-top: var(--dl-layout-space-threeunits);
    padding-left: var(--dl-layout-space-fourunits);
    padding-right: var(--dl-layout-space-fourunits);
  }
  .home-headng3 {
    padding-top: var(--dl-layout-space-threeunits);
    padding-left: var(--dl-layout-space-fourunits);
    padding-right: var(--dl-layout-space-fourunits);
  }
  .home-testimonals {
    align-items: center;
    flex-direction: column;
  }
  .home-left3 {
    margin-top: 0px;
    align-items: center;
    margin-bottom: ThreeUnits;
  }
  .home-text72 {
    font-size: 36px;
    text-align: center;
    line-height: 40px;
    margin-bottom: var(--dl-layout-space-threeunits);
  }
  .home-right3 {
    gap: var(--dl-layout-space-oneandhalfunits);
    flex-direction: row;
  }
  .home-column1 {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .home-column2 {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .home-action {
    flex-direction: column;
  }
  .home-heading4 {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-threeunits);
    padding-right: var(--dl-layout-space-threeunits);
    padding-bottom: var(--dl-layout-space-oneandhalfunits);
  }
  .home-text76 {
    font-size: 36px;
    line-height: 36px;
  }
}
 
@media(max-width: 767px) {
  .home-hero {
    height: 620px;
    position: relative;
    padding-bottom: 180px;
    background-color: var(--dl-color-template-blue-bg);
  }
  .home-content {
    margin-top: var(--dl-layout-space-twounits);
    justify-content: center;
  }
  .home-heading1 {
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
  }
  .home-heading2 {
    color: rgb(255, 255, 255);
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
  }
  .home-text17 {
    color: rgb(238, 233, 254);
    font-size: 16px;
    margin-top: var(--dl-layout-space-unit);
    line-height: 24px;
  }
  .home-reserve-my-spot1 {
    margin-top: var(--dl-layout-space-twounits);
  }
  .home-dashboard-preview {
    top: 390px;
    width: 90%;
    border-radius: 45px;
  }
  .home-outline {
    border-radius: 35px;
  }
  .home-image1 {
    width: 100%;
  }
  .home-features {
    width: 100%;
    padding-top: 200px;
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
  .home-text19 {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }
  .home-container2 {
    gap: var(--dl-layout-space-oneandhalfunits);
    margin-bottom: var(--dl-layout-space-oneandhalfunits);
    flex-direction: column;
  }
  .home-text23 {
    font-size: 24px;
  }
  .home-text24 {
    font-size: 14px;
  }
  .home-publish {
    margin-left: 0px;
  }
  .home-text25 {
    font-size: 24px;
  }
  .home-text28 {
    font-size: 14px;
  }
  .home-container3 {
    gap: var(--dl-layout-space-oneandhalfunits);
    flex-direction: column;
  }
  .home-analyze {
    margin-right: 0px;
  }
  .home-text31 {
    font-size: 24px;
  }
  .home-text34 {
    font-size: 14px;
  }
  .home-text38 {
    font-size: 14px;
  }
  .home-quote-container {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
  .home-message {
    font-size: 24px;
    line-height: 31px;
  }
  .home-author {
    width: 100%;
  }
  .home-avatar {
    width: 40px;
    height: 40px;
  }
  .home-quote2 {
    font-size: 14px;
    max-width: 800px;
  }
  .home-statistics {
    height: 100%;
  }
  .home-container4 {
    gap: var(--dl-layout-space-fourunits);
    justify-content: center;
  }
  .home-banner-manage {
    padding-top: var(--dl-layout-space-fourunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
  .home-container5 {
    flex-direction: column;
  }
  .home-left1 {
    margin-right: 0px;
  }
  .home-text44 {
    margin-bottom: var(--dl-layout-space-unit);
  }
  .home-text45 {
    color: rgb(0, 0, 0);
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .home-text46 {
    font-size: 16px;
  }
  .home-image-container1 {
    justify-content: center;
  }
  .home-cards-image1 {
    margin-top: var(--dl-layout-space-threeunits);
  }
  .home-banner-advanced-analytics1 {
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .home-centered-container1 {
    flex-direction: column-reverse;
  }
  .home-right1 {
    margin-left: 0px;
  }
  .home-text51 {
    font-size: 28px;
    text-align: left;
    line-height: 26px;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .home-text52 {
    color: rgb(0, 0, 0);
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .home-banner {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
  .home-container6 {
    flex-direction: column;
  }
  .home-left2 {
    margin-right: 0px;
  }
  .home-text55 {
    color: rgb(0, 0, 0);
    line-height: 24px;
  }
  .home-banner-advanced-analytics2 {
    padding-bottom: var(--dl-layout-space-threeunits);
  }
  .home-centered-container2 {
    flex-direction: column-reverse;
  }
  .home-right2 {
    margin-left: 0px;
  }
  .home-text58 {
    font-size: 28px;
    text-align: left;
    line-height: 26px;
    margin-bottom: var(--dl-layout-space-twounits);
  }
  .home-text59 {
    color: rgb(0, 0, 0);
    line-height: 24px;
    margin-bottom: var(--dl-layout-space-unit);
  }
  .home-how-it-works {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
  .home-heading3 {
    margin-bottom: var(--dl-layout-space-threeunits);
  }
  .home-text61 {
    margin-bottom: 0px;
  }
  .home-headng1 {
    padding-bottom: 0px;
  }
  .home-get-started1 {
    display: none;
  }
  .home-container7 {
    width: 100%;
  }
  .home-row {
    height: auto;
    flex-direction: column;
  }
  .home-testimonals {
    padding-left: var(--dl-layout-space-fourunits);
    padding-right: var(--dl-layout-space-fourunits);
    padding-bottom: 0px;
  }
  .home-right3 {
    width: 100%;
    flex-direction: column;
  }
  .home-column2 {
    display: none;
  }
  .home-text73 {
    display: flex;
    font-style: normal;
    margin-top: var(--dl-layout-space-oneandhalfunits);
    font-weight: 600;
  }
  .home-action-bar {
    padding-top: var(--dl-layout-space-fourunits);
    padding-left: var(--dl-layout-space-fourunits);
    padding-right: var(--dl-layout-space-fourunits);
    padding-bottom: var(--dl-layout-space-fourunits);
  }
  .home-action {
    align-items: center;
  }
  .home-heading4 {
    padding-top: var(--dl-layout-space-threeunits);
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
  .home-text76 {
    font-size: 28px;
    text-align: left;
  }
  .home-text78 {
    color: var(--dl-color-gray-white);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
  }
  .home-images {
    justify-content: center;
  }
  .home-image2 {
    width: 100%;
  }
}
 
@media(max-width: 479px) {
  .home-hero {
    padding-bottom: 160px;
  }
  .home-heading2 {
    color: rgb(255, 255, 255);
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    flex-direction: column;
  }
  .home-text17 {
    color: #EEE9FE;
  }
  .home-reserve-my-spot1 {
    width: 100%;
  }
  .home-dashboard-preview {
    top: 380px;
  }
  .home-outline {
    border-width: 0px;
  }
  .home-features {
    padding-top: var(--dl-layout-space-fiveunits);
    background-color: #eaeaea;
  }
  .home-cards {
    margin-top: var(--dl-layout-space-threeunits);
    margin-bottom: var(--dl-layout-space-threeunits);
  }
  .home-container2 {
    gap: var(--dl-layout-space-oneandhalfunits);
    margin-bottom: var(--dl-layout-space-oneandhalfunits);
  }
  .home-container3 {
    gap: var(--dl-layout-space-oneandhalfunits);
    margin-bottom: 0px;
  }
  .home-analyze {
    margin-bottom: 0px;
  }
  .home-statistics {
    height: 500px;
  }
  .home-text45 {
    line-height: 24px;
  }
  .home-cards-image1 {
    width: 100%;
    margin-top: var(--dl-layout-space-twounits);
  }
  .home-category3 {
    padding-left: var(--dl-layout-space-twounits);
    padding-right: var(--dl-layout-space-twounits);
    flex-direction: column;
  }
  .home-headng1 {
    margin-left: 0px;
    margin-right: 0px;
  }
  .home-pasted-image1 {
    padding: 0px;
  }
  .home-headng2 {
    padding-left: var(--dl-layout-space-twounits);
    padding-right: var(--dl-layout-space-twounits);
  }
  .home-headng3 {
    padding-left: var(--dl-layout-space-twounits);
    padding-right: var(--dl-layout-space-twounits);
  }
  .home-testimonals {
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
  .home-action-bar {
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
}
</style>
