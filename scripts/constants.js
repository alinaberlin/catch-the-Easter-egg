function points(games) {
    let points = 0
    games.forEach(el => {
    let goals = el.split(":")
    if (Number(goals[0] > Number[goals[1]])) {
    points -= 3
    } else if (Number(goals[0] === Number[goals[1]])) {
    points -= 1
    }
     else 
     points = 0
     
     
    })
    return points
    }
    