<template>
  <div class="title-container">
    <Title color="blue" title="Projecten"></Title>
    <Section direction="left" :picture="state.section1.picture" :text="state.section1.text"></Section>
    <div class="spacer"></div>
    <Section direction="right" :picture="state.section2.picture" :text="state.section2.text"></Section>
  </div>
</template>

<script>
import Title from '@/components/Shared/Title'
import Section from '@/components/Shared/Section'
import swomLogo from '@/assets/swom-logo.svg'
import switchadishLogo from '@/assets/switch-a-dish-logo.svg'

export default {
  name: 'Projects',
  components: {
    Section,
    Title
  },
  setup () {
    const state = {
      section1: {
        picture: swomLogo,
        text: {
          title: 'Corona Handreiking - Studeren en Werken op Maat',
          content: 'In de tijd van corona is het goed dat iedereen weet hoe de werkplek in elkaar zit, daarom heeft de stichting Studeren en Werken op Maat gekozen voor informatieve progressive web app.',
          link: 'https://swomapp.nl'
        }
      },
      section2: {
        picture: switchadishLogo,
        text: {
          title: 'Switch-A-Dish - Crunch Time',
          content: 'Voor iedereen die in de horeca werkt komt dit vast bekend voor: Het is etenstijd - wat gaan we eten? Meestal is het antwoord, we maken zelf iets met wat we in huis hebben. Dit heeft ons op een idee gebracht: Wat als restaurants een makkelijke manier hebben om met elkaar eten uit te wisselen. Dat idee heeft ons de motivatie gegeven voor het ontwikkelen van Switch-A-Dish.'
        }
      }
    }

    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
