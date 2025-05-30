<template>
  <footer class="footer-footer" v-bind:class="rootClassName">
    <div class="footer-bottom">
      <div class="footer-container">
        <nuxt-link to="/" class="footer-navlink1">
          <img
            alt="Money Beaver Logo"
            src="/beavers_w.svg"
            class="footer-branding"
          />
        </nuxt-link>
        <span class="footer-text1">
          <slot name="text">
            <!--Default content for text-->
            <div class="footer-fragment1">
              <span class="footer-text2">Copyright © Money Beavers - 2025</span>
            </div>
          </slot>
        </span>
      </div>
      <div class="footer-links">
        <nuxt-link to="/support" class="footer-navlink2">
          <slot name="text1">
            <!--Default content for text1-->
            <div class="footer-fragment3">
              <span class="footer-text4">Support</span>
            </div>
          </slot>
        </nuxt-link>
        <nuxt-link to="/terms" class="footer-navlink3">
          <slot name="text2">
            <!--Default content for text2-->
            <div class="footer-fragment4">
              <span class="footer-text5">Terms of Service</span>
            </div>
          </slot>
        </nuxt-link>
        <nuxt-link to="/privacy-policy" class="footer-navlink4">
          <slot name="text3">
            <!--Default content for text3-->
            <div class="footer-fragment2">
              <span class="footer-text3">Privacy Policy</span>
            </div>
          </slot>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-layout-space-twounits);
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: column;
  padding-bottom: var(--dl-layout-space-twounits);
  background-color: var(--dl-color-template-blue-bg);
}
 
.footer-bottom {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  user-select: none;
  margin-bottom: 0nits;
  flex-direction: row;
  justify-content: space-between;
}
 
.footer-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.footer-navlink1 {
  display: contents;
}
 
.footer-branding {
  width: var(--dl-layout-size-large);
  margin-bottom: 0px;
  text-decoration: none;
}
 
.footer-text1 {
  color: rgb(104, 104, 104);
  font-size: 14px;
  line-height: 30px;
}
 
.footer-links {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
 
.footer-navlink2 {
  color: rgb(196, 196, 196);
  font-size: 14px;
  text-decoration: none;
}
 
.footer-navlink3 {
  color: rgb(196, 196, 196);
  font-size: 14px;
  text-decoration: none;
}
 
.footer-navlink4 {
  color: rgb(196, 196, 196);
  font-size: 14px;
  text-decoration: none;
}
 
.footer-fragment1 {
  display: contents;
}
 
.footer-text2 {
  display: inline-block;
}
 
.footer-fragment2 {
  display: contents;
}
 
.footer-text3 {
  display: inline-block;
}
 
.footer-fragment3 {
  display: contents;
}
 
.footer-text4 {
  display: inline-block;
}
 
.footer-fragment4 {
  display: contents;
}
 
.footer-text5 {
  display: inline-block;
}
 

 

 

 

 

 

 

 
@media(max-width: 991px) {
  .footer-footer {
    padding: SixUnits TwoUnits;
  }
  .footer-branding {
    width: var(--dl-layout-size-medium);
    margin-bottom: var(--dl-layout-space-halfunit);
  }
  .footer-text1 {
    font-size: 12px;
    line-height: 25px;
    margin-bottom: 0px;
  }
  .footer-links {
    gap: var(--dl-layout-space-unit);
  }
}
 
@media(max-width: 767px) {
  .footer-bottom {
    gap: var(--dl-layout-space-threeunits);
    align-items: flex-start;
    flex-direction: column-reverse;
  }
  .footer-links {
    flex-direction: row;
  }
}
 
@media(max-width: 479px) {
  .footer-bottom {
    gap: var(--dl-layout-space-threeunits);
    display: flex;
    align-self: center;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
  .footer-links {
    flex-direction: column;
  }
}
</style>
