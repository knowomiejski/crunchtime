<template>
  <div class="title-container">
    <Title color="pink" title="Info"></Title>
    <div class="small-sections">
      <SmallSection class="small-sections-1" :title="state.smallSections[0].title"
                    :content="state.smallSections[0].content"></SmallSection>
      <SmallSection class="small-sections-2" :title="state.smallSections[1].title"
                    :content="state.smallSections[1].content"></SmallSection>
      <SmallSection class="small-sections-3" :title="state.smallSections[2].title"
                    :content="state.smallSections[2].content"></SmallSection>
      <SmallSection class="small-sections-4" :title="state.smallSections[3].title"
                    :content="state.smallSections[3].content"></SmallSection>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Shared/Title'
import SmallSection from '@/components/Shared/SmallSection'
import { reactive } from 'vue'

export default {
  name: 'Info',
  components: {
    SmallSection,
    Title
  },
  setup () {
    const state = reactive({
      smallSections: [
        {
          title: 'Telefoon',
          content: '+31 642561897'
        },
        {
          title: 'Email',
          content: 'info@crunch-time.nl'
        },
        {
          title: 'KVK-nummer',
          content: '78080541'
        },
        {
          title: 'Adres',
          content: 'Stijntjesduinstraat 2, 2202LB Noordwijk'
        }
      ]
    })

    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/global_styles.scss';

.small-sections {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;

  @include sm {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 15px;
  }
}

.small-sections-1 {
  padding-bottom: 15px;
  @include sm {
    grid-area: 1 / 1 / 2 / 2;
  }
}

.small-sections-2 {
  padding-bottom: 15px;
  @include sm {
    grid-area: 1 / 2 / 2 / 3;
  }
}

.small-sections-3 {
  padding-bottom: 15px;
  @include sm {
    grid-area: 2 / 1 / 3 / 2;
  }
}

.small-sections-4 {
  padding-bottom: 15px;
  @include sm {
    grid-area: 2 / 2 / 3 / 3;
  }
}
</style>
