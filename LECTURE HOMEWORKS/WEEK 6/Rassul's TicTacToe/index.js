let t = new Array(9);
let current = 0;

function move(id) {
  let role = (current%2===0) ? 'player1' : 'player2';
  let turn = (current%2!==0) ? 'Player1(cross)' : 'Player2(circle)';
  current++;
  if (t[id]) return false;
  t[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  document.getElementById('turn').innerHTML = turn;
  if (checkEnd()){
    reset()
  }
}

function checkEnd() {
  if (t[0]=='player1' && t[1]=='player1' && t[2]=='player1' || t[0]=='player2' && t[1]=='player2' && t[2]=='player2')  return true;
  if (t[3]=='player1' && t[4]=='player1' && t[5]=='player1' || t[3]=='player2' && t[4]=='player2' && t[5]=='player2')  return true;
  if (t[6]=='player1' && t[7]=='player1' && t[8]=='player1' || t[6]=='player2' && t[7]=='player2' && t[8]=='player2')  return true;
  if (t[0]=='player1' && t[3]=='player1' && t[6]=='player1' || t[0]=='player2' && t[3]=='player2' && t[6]=='player2')  return true;
  if (t[1]=='player1' && t[4]=='player1' && t[7]=='player1' || t[1]=='player2' && t[4]=='player2' && t[7]=='player2')  return true;
  if (t[2]=='player1' && t[5]=='player1' && t[8]=='player1' || t[2]=='player2' && t[5]=='player2' && t[8]=='player2')  return true;
  if (t[0]=='player1' && t[4]=='player1' && t[8]=='player1' || t[0]=='player2' && t[4]=='player2' && t[8]=='player2')  return true;
  if (t[2]=='player1' && t[4]=='player1' && t[6]=='player1' || t[2]=='player2' && t[4]=='player2' && t[6]=='player2')  return true;
  if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return "crash";
}

function reset() {
  let winner = (current%2===0) ? 'Player2 (Circle)' : 'Player1 (Cross)';
  if (checkEnd() ===  "crash") winner = "Nobody";
  alert(`Game over. ${winner} wins!`);
  location.reload();
}