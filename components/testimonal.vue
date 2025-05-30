<template>
  <div class="testimonal-testimonal testimonal">
    <span class="testimonal-text">{{ quote }}</span>
    <div class="testimonal-author">
      <div class="testimonal-avatar">
        <img :alt="avatarAlt" :src="avatarSrc" class="testimonal-image" />
      </div>
      <div class="testimonal-user">
        <span class="testimonal-name">{{ name }}</span>
        <span class="testimonal-divider">—</span>
        <span class="testimonal-from">{{ from }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonal',
  props: {
    from: {
      type: String,
      default: 'Vista Social',
    },
    avatarAlt: {
      type: String,
      default: 'image',
    },
    avatarSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&ixlib=rb-1.2.1&w=200',
    },
    name: {
      type: String,
      default: 'Andy Smith',
    },
    quote: {
      type: String,
      default:
        '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”',
    },
  },
}
</script>

<style scoped>
.testimonal-testimonal {
  position: relative;
}
 
.testimonal-text {
  line-height: 24px;
}
 
.testimonal-author {
  gap: var(--dl-layout-space-unit);
  display: flex;
  margin-top: var(--dl-layout-space-unit);
  align-items: center;
  flex-direction: row;
}
 
.testimonal-avatar {
  display: flex;
  align-items: center;
  flex-direction: row;
}
 
.testimonal-image {
  width: 40px;
  height: 40px;
  display: flex;
  object-fit: cover;
  border-radius: 50%;
}
 
.testimonal-user {
  display: flex;
  align-items: center;
  flex-direction: row;
}
 
.testimonal-name {
  color: rgb(0, 0, 0);
  font-style: normal;
  font-weight: 600;
}
 
.testimonal-divider {
  margin-left: var(--dl-layout-space-halfunit);
  margin-right: var(--dl-layout-space-halfunit);
}
 
.testimonal-from {
  color: rgb(0, 0, 0);
}
 
@media(max-width: 767px) {
  .testimonal-text {
    font-size: 14px;
    line-height: 21px;
  }
  .testimonal-image {
    width: 28px;
    height: 28px;
  }
  .testimonal-name {
    font-size: 14px;
  }
  .testimonal-from {
    font-size: 14px;
  }
}
 
@media(max-width: 479px) {
  .testimonal-testimonal {
    border-radius: 24px;
  }
}
</style>
