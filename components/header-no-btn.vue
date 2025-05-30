<template>
  <header bg class="header-no-btn-header" v-bind:class="rootClassName">
    <div class="header-no-btn-navigation">
      <nav class="header-no-btn-centered">
        <nuxt-link to="/" class="header-no-btn-navlink">
          <div class="header-no-btn-left">
            <img
              alt="Money Beavers logo"
              src="/beavers_full.svg"
              class="header-no-btn-logo"
            />
            <div class="header-no-btn-links">
              <span class="Link">
                <slot name="text">
                  <!--Default content for text-->
                  <div class="header-no-btn-fragment1">
                    <span class="header-no-btn-text4">Solutions</span>
                  </div>
                </slot>
              </span>
              <span class="Link">
                <slot name="text1">
                  <!--Default content for text1-->
                  <div class="header-no-btn-fragment2">
                    <span class="header-no-btn-text5">How it works</span>
                  </div>
                </slot>
              </span>
              <span class="Link">
                <slot name="text2">
                  <!--Default content for text2-->
                  <div class="header-no-btn-fragment3">
                    <span class="header-no-btn-text6">Prices</span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNoBtn',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.header-no-btn-header {
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
 
.header-no-btn-navigation {
  width: 100%;
  display: flex;
  margin-top: var(--dl-layout-space-oneandhalfunits);
  align-items: center;
  flex-direction: column;
}
 
.header-no-btn-centered {
  width: 100%;
  display: flex;
  max-width: 1200px;
  box-sizing: initial;
  align-items: center;
  padding-left: var(--dl-layout-space-oneandhalfunits);
  border-radius: 16px;
  padding-right: var(--dl-layout-space-oneandhalfunits);
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}
 
.header-no-btn-navlink {
  display: contents;
}
 
.header-no-btn-left {
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 16;
  flex-direction: row;
  padding-bottom: 16;
  text-decoration: none;
}
 
.header-no-btn-logo {
  width: 105px;
  margin-left: var(--dl-layout-space-halfunit);
}
 
.header-no-btn-links {
  display: none;
  align-items: center;
  margin-left: 33px;
  flex-direction: row;
}
 
.header-no-btn-fragment1 {
  display: contents;
}
 
.header-no-btn-text4 {
  display: inline-block;
}
 
.header-no-btn-fragment2 {
  display: contents;
}
 
.header-no-btn-text5 {
  display: inline-block;
}
 
.header-no-btn-fragment3 {
  display: contents;
}
 
.header-no-btn-text6 {
  display: inline-block;
}
 

 
.header-no-btnroot-class-name1 {
  border: none;
  background-color: #EFF0F2;
}
 
.header-no-btnroot-class-name2 {
  border: none;
  background-color: #EFF0F2;
}
 
@media(max-width: 991px) {
  .header-no-btn-header {
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
  .header-no-btn-navigation {
    padding-left: var(--dl-layout-space-oneandhalfunits);
    padding-right: var(--dl-layout-space-oneandhalfunits);
  }
  .header-no-btn-centered {
    height: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-no-btn-left {
    margin-left: var(--dl-layout-space-halfunit);
  }
  .header-no-btn-logo {
    width: 64px;
  }
  .header-no-btn-links {
    display: none;
  }
}
 
@media(max-width: 767px) {
  .header-no-btn-header {
    margin-right: 0px;
  }
  .header-no-btn-navigation {
    padding-left: 0px;
    padding-right: 0px;
  }
  .header-no-btn-centered {
    padding-left: 0px;
    padding-right: 0px;
  }
  .header-no-btn-left {
    margin-left: var(--dl-layout-space-unit);
  }
}
</style>
