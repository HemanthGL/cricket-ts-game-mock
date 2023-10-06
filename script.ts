// // TODOS
/*     
    1. funtions to activate & deactivate buttons

                */

// OOPS MODEL FOR TS
class Team{
    score: Array<Array<number>>;
    tot_score: Array<number>;
    team_score: number

    constructor(){
        var t_score:Array<Array<number>> = new Array(Array());
        
        
        for (let j = 0; j < 10 ; j++){

            let p_score: Array<number> = new Array();
            for (let i = 0; i < 6; i++){
                p_score.push(0);
            }
            t_score.push(p_score)
        }

        this.score = t_score;

        var t_tot:Array<number> = new Array() 

        for (let i = 0 ; i < 10 ; i++){
            t_tot.push(0)
        }
        this.tot_score = t_tot;

        this.team_score = 0;
    }
}

// GETTING TABLE POINTERS
let currTeam:number = 0
let currPlayer:number = 1
let currBall:number = 1

var team1Go:boolean = false;
var team2Go:boolean = false;
var resRel:boolean = false;
var nextTeam:boolean = false;

let t1 = new Team()
let t2 = new Team()

let inningActive:boolean = false;
let time:number = 24;
// TIMER SECTION

function timerFor1S(){
    if (time == 0){
        // in the eventListener for new Start revamp the time as 60
        inningActive = false;
        return true;
    }
    time -= 1
    document.getElementById('timer-dial').innerHTML = time.toString();

    return setTimeout(timerFor1S, 1000);
}


// integration to disable the buttons TODO
document.getElementById('match-startBtn')?.addEventListener('click', async () => {
    if (!team1Go && !team2Go){
        team1Go = true;
        console.log('interlock changed ', team1Go, ' te2 che ', team2Go)
    }

    if (!inningActive){
        console.log('Entering the if sectn. ')
        inningActive = true;

        let permit_val = await setTimeout(timerFor1S, 1000);
        setTimeout(() => {
            inningActive = false;
            time = 24;
            document.getElementById('timer-dial').innerHTML = time.toString()
            inningActive = false;
            console.log('inning turned inactive')
            console.log(permit_val)
            console.log('Timer ending here ')
            if (team1Go){
                team1Go = false;
                team2Go = true;
                currTeam = 1;
                // time = 60;
                // time_attr.textContent = time
                currBall = 1
                currPlayer = 1
                // document.getElementById('timer-dial')?.innerHTML = time.toString();
            } else if (team2Go){
                team2Go = false;
                resRel = true;
                console.log('result can be released now')
            }
        }, 26000);
        // let time_attr = document.getElementById('timer-dial');
        // let val_end = time_attr.textContent;
        // console.log('value here is: ', val_end)

        // if (val_end == "0"){

        // }
    }
})


document.getElementById('t1-hitBtn')?.addEventListener('click', () => {
    console.log('clicked btn ')
    console.log(team1Go, ' sp other ', team2Go)
    if (nextTeam || !team1Go || !inningActive){
        console.log('breaking here')
        return;
    }
    console.log('checking if later present ')
    var sc = Math.floor(Math.random() * 7);

    /*if (sc == 0){
            doesn't matter cause value is 0
    }*/

    t1.score[currPlayer-1][currBall-1] = sc;
    t1.tot_score[currPlayer-1] += sc;
    t1.team_score += sc

    // Updates into HTML: teamscore, ballscore, playerscore
    if (sc == 0){
        document.getElementById(`t1-p${currPlayer}-b${currBall}`)?.innerText = 'W'
        document.getElementById(`t1-p${currPlayer}-total-score`)?.innerText = t1.tot_score[currPlayer-1].toString();
        if (currPlayer == 10){
            // call condition for inning end
            // currPlayer = 1
            // currBall = 1
            currPlayer += 1
        } else {
            currBall = 0
            currPlayer += 1 // doubt here
        }
    }
    else{
        document.getElementById(`t1-p${currPlayer}-b${currBall}`)?.innerText = sc.toString();
        document.getElementById(`t1-p${currPlayer}-total-score`)?.innerText = t1.tot_score[currPlayer-1].toString();
    }

    document.getElementById(`team1Score`)?.innerText = t1.team_score.toString();
    currBall += 1
    if (currBall == 7){
        currBall = 1
        if (currPlayer == 10){
            // put condiiton for inning end
            currPlayer  += 1 
            // add setting for currteam = 0, ball 1, player = 1
        }
        else{
            currPlayer += 1
        }
    }
    
    if (currPlayer >= 11){
        // team1Go = false;
        // team2Go = true;
        // currTeam = 1
        currPlayer = 1
        // inningActive = false;
        console.log('inning made inactive again midway before timer ')
        document.getElementById('timer-dial').textContent = "24"
        nextTeam = true;
        // team1Go = false;
    }
        // currTeam += 1
})

document.getElementById('t2-hitBtn')?.addEventListener('click', () => {
    if (!nextTeam || !team2Go || !inningActive){
        return;
    }
    
    console.log('clicked bt2 and entered')
    var sc = Math.floor(Math.random() * 7);

    /*if (sc == 0){
            doesn't matter cause value is 0
    }*/

    t2.score[currPlayer-1][currBall-1] = sc;
    t2.tot_score[currPlayer-1] += sc;
    t2.team_score += sc

    // Updates into HTML: teamscore, ballscore, playerscore
    if (sc == 0){
        document.getElementById(`t2-p${currPlayer}-b${currBall}`)?.innerText = 'W'
        document.getElementById(`t2-p${currPlayer}-total-score`)?.innerText = t2.tot_score[currPlayer-1].toString();
        if (currPlayer == 10){
            // call condition for inning end
            // currPlayer = 1
            // currBall = 1
            currPlayer += 1
        } else {
            currBall = 0
            currPlayer += 1 // doubt here
        }
    }
    else{
        document.getElementById(`t2-p${currPlayer}-b${currBall}`)?.innerText = sc.toString();
        document.getElementById(`t2-p${currPlayer}-total-score`)?.innerText = t2.tot_score[currPlayer-1].toString();
    }
    document.getElementById(`team2Score`)?.innerText = t2.team_score.toString();
    currBall += 1
    if (currBall == 7){
        currBall = 1
        if (currPlayer == 10){
            // put condiiton for inning end 
            // add setting for currteam = 0, ball 1, player = 1
            currPlayer += 1
        }
        else{
            currPlayer += 1
        }
    }
    if (currPlayer >= 11){
        // team1Go = false;
        // team2Go = false;
        team2Go = false;
        resRel = true;
        console.log('result can be released now')
        nextTeam = false;
    }

})

document.getElementById('match-resultGen').addEventListener('click', () =>{

    console.log('match res called')
    if (resRel){
        console.log('match res fn entered succesfully')
        let ele = document.getElementById('gen-res')
        if (t1.team_score > t2.team_score){
            ele.textContent = `Match Won by Team 1 by ${t1.team_score - t2.team_score} runs`
        }
        else if (t1.team_score < t2.team_score){
            ele.textContent = `Match Won by Team 2 by ${t2.team_score - t1.team_score} runs`
        }
        else{
            ele.textContent = `Match DRAW`;
        }

        let ele2 = document.getElementById('man-match')

        if (t1.team_score > t2.team_score){
            
            let mx = 0, idx = -1;
            for (let i = 0; i < 10 ; i++){
                if (t1.tot_score[i] > mx){
                    mx = t1.tot_score[i];
                    idx = i;

                }
            }
            console.log("MM from t 1")

            ele2.textContent = `Man of The Match: Player ${idx + 1} with Score: ${t1.tot_score[idx]}`
        }
        else if (t1.team_score < t2.team_score){
            let mx = 0, idx = -1;
            for (let i = 0; i < 10; i++){
                if (t2.tot_score[i] > mx){
                    mx = t2.tot_score[i]
                    idx = i
                }
            }
            ele2.textContent = `Man of The Match: Player ${idx + 1} with Score: ${t2.tot_score[idx]}`

            console.log('MM from T2')
        }
        else{
            let mx = 0, idx = -1, tm = 0;
            for (let i = 0; i < 10 ; i++){
                if (t1.tot_score[i] > mx){
                    mx = t1.tot_score[i];
                    idx = i
                    tm = 1
                }
                if (t2.tot_score[i] > mx){
                    mx = t2.tot_score[i];
                    idx = i
                    tm = 2
                }
            }
            if (tm == 1)
                ele2.textContent = `Man of The Match: Player ${idx + 1} with Score: ${t1.tot_score[idx]}`
            else if (tm == 2)
                ele2.textContent = `Man of The Match: Player ${idx + 1} with Score: ${t2.tot_score[idx]}`
            console.log("MM from draw")
        }
        console.log('This is ending here after man match')

        let ref_btn = document.createElement('button')
        ref_btn.textContent = 'NEW MATCH'
        ref_btn.addEventListener('click', () => { window.location.reload(true)})
        document.getElementById('results-window').appendChild(ref_btn);
        resRel = false
    }
})

// T1 - HIT SECTION

// T2 - HIT SECTION

// GEN RESULTS

