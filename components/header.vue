<template>
  <header bg class="header-header" v-bind:class="rootClassName">
    <div class="header-navigation">
      <nav class="header-centered">
        <nuxt-link to="/" class="header-navlink1">
          <div class="header-left">
            <img
              alt="Money Beavers Logo"
              src="~/static/beavers_full.svg"
              class="header-logo"
            />
            <div class="header-links">
              <span class="Link">
                <slot name="text">
                  <!--Default content for text-->
                  <div class="header-fragment2">
                    <span class="header-text6">Solutions</span>
                  </div>
                </slot>
              </span>
              <span class="Link">
                <slot name="text1">
                  <!--Default content for text1-->
                  <div class="header-fragment4">
                    <span class="header-text8">How it works</span>
                  </div>
                </slot>
              </span>
              <span class="Link">
                <slot name="text2">
                  <!--Default content for text2-->
                  <div class="header-fragment1">
                    <span class="header-text5">Prices</span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </nuxt-link>
        <div class="header-right">
          <nuxt-link to="/sign-up" class="header-navlink2">
            <div class="header-reserve-my-spot">
              <span class="header-text4">
                <slot name="text3">
                  <!--Default content for text3-->
                  <div class="header-fragment3">
                    <span class="header-text7">Reserve my spot</span>
                  </div>
                </slot>
              </span>
            </div>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.header-header {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-layout-space-oneandhalfunits);
  border-color: var(--dl-color-template-blue-bg);
  border-width: 1px;
  padding-left: var(--dl-layout-space-sevenunits);
  padding-right: var(--dl-layout-space-sevenunits);
  flex-direction: column;
  background-color: var(--dl-color-template-blue-bg);
}
 
.header-navigation {
  width: 100%;
  display: flex;
  margin-top: var(--dl-layout-space-oneandhalfunits);
  align-items: center;
  flex-direction: column;
}
 
.header-centered {
  width: 100%;
  display: flex;
  max-width: 1200px;
  box-sizing: initial;
  align-items: center;
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: 16px;
  padding-right: var(--dl-layout-space-oneandhalfunits);
  flex-direction: row;
  backdrop-filter: blur(8px);
  justify-content: space-between;
  background-color: #ffffff;
}
 
.header-navlink1 {
  display: contents;
}
 
.header-left {
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 16;
  flex-direction: row;
  padding-bottom: 16;
  text-decoration: none;
}
 
.header-logo {
  width: 105px;
  margin-left: var(--dl-layout-space-halfunit);
}
 
.header-links {
  display: none;
  align-items: center;
  margin-left: 33px;
  flex-direction: row;
}
 
.header-right {
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-layout-space-oneandhalfunits);
  flex-direction: row;
  padding-bottom: var(--dl-layout-space-oneandhalfunits);
}
 
.header-navlink2 {
  display: contents;
}
 
.header-reserve-my-spot {
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-layout-space-unit);
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: 56px;
  padding-right: var(--dl-layout-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-layout-space-unit);
  text-decoration: none;
  background-color: var(--dl-color-success-300);
}
 
.header-reserve-my-spot:hover {
  background-color: #075e21;
}
 
.header-text4 {
  color: rgb(255, 255, 255);
  font-style: normal;
  font-weight: 600;
}
 
.header-fragment1 {
  display: contents;
}
 
.header-text5 {
  display: inline-block;
}
 
.header-fragment2 {
  display: contents;
}
 
.header-text6 {
  display: inline-block;
}
 
.header-fragment3 {
  display: contents;
}
 
.header-text7 {
  display: inline-block;
}
 
.header-fragment4 {
  display: contents;
}
 
.header-text8 {
  display: inline-block;
}
 
.headerroot-class-name {
  border: unset;
  background-color: #eff0f2;
}
 
.headerroot-class-name1 {
  border: unset;
  background-color: #eff0f2;
}
 

 
.headerroot-class-name3 {
  border: unset;
  background-color: #eff0f2;
}
 
.headerroot-class-name5 {
  border: unset;
  background-color: #eff0f2;
}
 
.headerroot-class-name6 {
  border: unset;
  background-color: #eff0f2;
}
 
@media(max-width: 1600px) {
  .header-header {
    background-color: transparent;
  }
  .headerroot-class-name2 {
    background-color: #00140b;
  }
}
 
@media(max-width: 991px) {
  .header-header {
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
  .header-navigation {
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
  .header-centered {
    height: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-left {
    margin-left: var(--dl-layout-space-halfunit);
  }
  .header-logo {
    width: 64px;
  }
  .header-links {
    display: none;
  }
}
 
@media(max-width: 767px) {
  .header-header {
    margin-right: 0px;
  }
  .header-navigation {
    padding-left: 0px;
    padding-right: 0px;
  }
  .header-centered {
    padding-left: 0px;
    padding-right: 0px;
  }
  .header-left {
    margin-left: var(--dl-layout-space-unit);
  }
  .header-right {
    margin-right: var(--dl-layout-space-unit);
  }
}
</style>
