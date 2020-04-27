<template>
  <div>

    <div class="header">
      <h1>FOOS <img src="../assets/Foosball.png" class="neg-mx-15" /> PICKER</h1>
    </div>

    <div class="main-container pd-40 flex-column-evenly">

      <div class="utility">
        <div class="input-submit flex-row-between">
          <input  type="text"
                  class="form-control"
                  name="newPlayer"
                  id="newPlayer"
                  placeholder="Enter New Player"
                  v-model="newPlayer.name"
                  v-on:keyup.enter="addNewPlayer"
          >
          <button class="btn btn-sm btn-success"
                  type="button"
                  @click="addNewPlayer"
                  v-bind:disabled="!this.newPlayer"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />
          </button>
        </div>

        <div class="player-pool" v-if="data.availablePlayers.length">
          <div  v-for="(player, i) of data.availablePlayers"
                class="player"
                @click="removePlayer(i)"
                v-bind:key="player.playerId"
          >{{ player.name }}</div>
        </div>

        <div class="tarantino-section" @click="tarantinoIt = !tarantinoIt">
          <label for="tarantinoIt" class="mt-10">Tarantino It!
            <font-awesome-icon 
                  class="ml-20"
                  :icon="['fas', 'check-square']"
                  v-if="tarantinoIt"
            />
            <font-awesome-icon 
                  class="ml-20"
                  :icon="['fas', 'square']"
                  v-if="!tarantinoIt"
            />
          </label>
        </div>

        <div class="mt-10 mb-10 flex-row-between">
          <button class="btn btn-outline-success mr-10" @click="createFoosTeam()">Create Teams</button>
          <button class="btn btn-outline-dark" @click="clearTeams()">Clear Teams</button>
        </div>
      </div>

      <Table v-bind:teamOne="data.teams[0].players" v-bind:teamTwo="data.teams[1].players" />
    </div>
  </div>
</template>

<script>
import { createFoosballTeams } from './actions';
import { pullAt, isEmpty } from 'lodash';
import Table from './Table';

export default {
  name: 'Teams',
  components: {
    Table
  },
  data() {
    return {
      data: { 
        teams: [
          { teamId: 1, players: [] },
          { teamId: 2, players: [] }
        ],
        availablePlayers: []
      },
      newPlayer: { playerId: null, name: '' },
      nextPlayerId: 1,
      tarantinoIt: false
    }
  },
  methods: {
    createFoosTeam() {
      const results = createFoosballTeams(this.data.availablePlayers);
      if (isEmpty(results[0]) || isEmpty(results[1])) return;
      // TODO send error message to user

      if (this.tarantinoIt) {
        this.makeItDramatic(results[0], results[1], results[2]);
      } else {
        this.data.teams[0].players = results[0];
        this.data.teams[1].players = results[1];
        this.data.availablePlayers = results[2];
      }

    },
    makeItDramatic(onePlayers, twoPlayers, remaining) {
      const that = this;

      // TODO clean this shit up
      setTimeout(() => {
        that.data.teams[0].players.push(onePlayers[0]);
        setTimeout(() => {
          that.data.teams[0].players.push(onePlayers[1]);
          setTimeout(() => {
            that.data.teams[1].players.push(twoPlayers[0]);
            setTimeout(() => {
              that.data.teams[1].players.push(twoPlayers[1]);
              that.data.availablePlayers = remaining;
            }, 2000)
          }, 2500)
        }, 1500)
      }, 500)

    },
    addNewPlayer() {
      if (!_.isEmpty(this.newPlayer.name)) {
        this.newPlayer.playerId = this.nextPlayerId;
        this.data.availablePlayers.push(this.newPlayer);
        this.nextPlayerId++;
      }

      this.newPlayer = { playerId: null, name: '', playerRating: null };
    },
    clearTeams() {
      _.forEach(this.data.teams, team => {
        this.data.availablePlayers = _.concat(
                                      this.data.availablePlayers,
                                      _.drop(team.players, 0)
                                    );
        team.players = [];
      })
    },
    removePlayer(index) {
      pullAt(this.data.availablePlayers, [index]);
    }
  }
}
</script>

<style scoped>
.main-container {
  background-color: var(--secondary-bg-color);
  color: var(--main-text-color);
  max-width: 500px;
}

.player-pool {
  display: flex;
  flex-wrap: wrap;
}

.player {
  margin: 10px;
}

.radio-options {
  display: flex;
}

.draft-options {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.option {
  width: 45%;
  padding: 2px;
}

.tarantino-section {
  display: flex;
  justify-content: flex-start;
}
</style>
