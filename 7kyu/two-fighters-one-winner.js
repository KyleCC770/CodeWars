/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  let isFighter1 = true;
  if (firstAttacker === fighter2.name) {
    isFighter1 = !isFighter1;
  }

  while (fighter1.health > 0 && fighter2.health > 0) {
    if (isFighter1) {
      fighter2.health = fighter2.health - fighter1.damagePerAttack;
    } else {
      fighter1.health = fighter1.health - fighter2.damagePerAttack;
    }

    isFighter1 = !isFighter1;
  }

  return fighter1.health > fighter2.health ? fighter1.name : fighter2.name;
}
