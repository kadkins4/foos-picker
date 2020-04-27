const shuffle = require('lodash').shuffle;
const drop = require('lodash').drop;

export const createFoosballTeams = ( playerArray ) => {
  let teamA = [], teamB = [], remaining = [];
  // take in an array of players
  if (!playerArray.length || playerArray.length <= 3) return [teamA, teamB, playerArray];
  // no players given
  let originalArr = playerArray;

  // randomize the array
  let shuffledArr = shuffle(originalArr);

  // make teams from [0][2] / [1][3]
  teamA = [shuffledArr[0], shuffledArr[2]];
  teamB = [shuffledArr[1], shuffledArr[3]];
  remaining = drop(shuffledArr, 4);

  return [teamA, teamB, remaining];
}


// TODO work in progress
export const createTeams = () => {
  const numberOfTeams = this.data.teams.length;

  if (!_.isEmpty(this.data.availablePlayers) && this.data.availablePlayers.length >= numberOfTeams) {
    let shuffledPlayers = _.shuffle(this.data.availablePlayers);
    let teamSelectionPool = [];

    _.forEach(this.data.teams, team => {
      // create team selection pool
      function addTeam(teamId) { teamSelectionPool.push(teamId); }
      for (let i = 0; i < team.selectionProbability; i++) { addTeam(team.teamId); }
    })

    // TODO ensure max is not hit
    // let totalPlayers = _.sumBy(this.data.teams, 'maxPlayers'); 

    _.forEach(shuffledPlayers, player => {
      // moving player from pool to team
      _.remove(this.data.availablePlayers, p => p.playerId);

      let number = _.random(teamSelectionPool.length - 1);
      const teamId = _.pullAt(teamSelectionPool, number);
      const selectedTeam = _.find(this.data.teams, team => team.teamId === teamId[0]);

      selectedTeam.players.push(player);
    });

    // TODO check to make sure rating is OKAY
  }
}
