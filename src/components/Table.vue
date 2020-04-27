<template>
  <!-- <div id="table"> -->
  <div id="table" v-if="teamOne.length || teamTwo.length">
    <div class="container">
      <div class="table">
        <div class="top section">
          <div class="goal-line top-goal-line"></div>
          <div class="text-field">
            <div class="text">
              ATK
              <p v-if="teamOne.length >= 1" class="player-name">{{ teamOne[0].name || 'none' }}</p>
            </div>
            <div class="text">
              DEF
              <p v-if="teamOne.length === 2" class="player-name">{{ teamOne[1].name || 'none' }}</p>
            </div>
          </div>
        </div>
        <div class="middle section">
          <div class="top-half-circle"></div>
          <div class="mid-field"></div>
          <div class="bottom-half-circle"></div>
        </div>
        <div class="bottom section">
          <div class="text-field">
            <div class="text">
              DEF
              <p v-if="teamTwo.length >= 1" class="player-name">{{ teamTwo[0].name || 'none' }}</p>
            </div>
            <div class="text">
              ATK
              <p v-if="teamTwo.length === 2" class="player-name">{{ teamTwo[1].name || 'none' }}</p>
            </div>
          </div>
          <div class="goal-line bottom-goal-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['teamOne', 'teamTwo'],
  data () {
    return {}
  }
}
</script>

<style>
.container { display: flex; justify-content: center; }
.table {
  display: flex; flex-direction: column; justify-content: space-between; align-items: center; 
  width: 300px; height: 400px; border: 3px solid white; border-radius: 5px; background-color: green;
}

.section { display: flex; justify-content: center; height: 120px; }
.top { width: 100%; flex-direction: column; align-items: center; justify-content: space-between; }
.middle { width: 100%; display: flex; flex-direction: column; align-items: space-around; }
.bottom { width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: space-between; }

.goal-line { width: 100px; height: 50px; border: 2px solid white; }
.top-goal-line { margin-top: -2px; }
.top-half-circle {
  display: flex; align-self: center; border: 1px solid white; border-bottom: 0px;
  height: 50px; width: 100px; border-radius: 50px 50px 0 0;
}
.mid-field { border: 1px solid white; width: 297px; height: 0px; }
.bottom-half-circle {
  display: flex; align-self: center; border: 1px solid white; border-top: 0px;
  height: 50px; width: 100px; border-radius: 0 0 50px 50px;
}
.bottom-goal-line { margin-bottom: -2px; }

.text-field { display: flex; justify-content: space-between; width: 300px; }
.text { display: flex; flex-direction: column; font-size: 24px; color: red; margin: 0 10px; }
.player-name { font-size: 14px; text-overflow: ellipsis; color: blue; width: 130px; text-align: center; overflow-x: auto; }
</style>
