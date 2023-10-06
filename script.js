// // TODOS
/*
    1. funtions to activate & deactivate buttons

                */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c;
var _this = this;
// OOPS MODEL FOR TS
var Team = /** @class */ (function () {
    function Team() {
        var t_score = new Array(Array());
        for (var j = 0; j < 10; j++) {
            var p_score = new Array();
            for (var i = 0; i < 6; i++) {
                p_score.push(0);
            }
            t_score.push(p_score);
        }
        this.score = t_score;
        var t_tot = new Array();
        for (var i = 0; i < 10; i++) {
            t_tot.push(0);
        }
        this.tot_score = t_tot;
        this.team_score = 0;
    }
    return Team;
}());
// GETTING TABLE POINTERS
var currTeam = 0;
var currPlayer = 1;
var currBall = 1;
var team1Go = false;
var team2Go = false;
var resRel = false;
var nextTeam = false;
var t1 = new Team();
var t2 = new Team();
var inningActive = false;
var time = 24;
// TIMER SECTION
function timerFor1S() {
    if (time == 0) {
        // in the eventListener for new Start revamp the time as 60
        inningActive = false;
        return true;
    }
    time -= 1;
    document.getElementById('timer-dial').innerHTML = time.toString();
    return setTimeout(timerFor1S, 1000);
}
// integration to disable the buttons TODO
(_a = document.getElementById('match-startBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var permit_val_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!team1Go && !team2Go) {
                    team1Go = true;
                    console.log('interlock changed ', team1Go, ' te2 che ', team2Go);
                }
                if (!!inningActive) return [3 /*break*/, 2];
                console.log('Entering the if sectn. ');
                inningActive = true;
                return [4 /*yield*/, setTimeout(timerFor1S, 1000)];
            case 1:
                permit_val_1 = _a.sent();
                setTimeout(function () {
                    inningActive = false;
                    time = 24;
                    document.getElementById('timer-dial').innerHTML = time.toString();
                    inningActive = false;
                    console.log('inning turned inactive');
                    console.log(permit_val_1);
                    console.log('Timer ending here ');
                    if (team1Go) {
                        team1Go = false;
                        team2Go = true;
                        currTeam = 1;
                        // time = 60;
                        // time_attr.textContent = time
                        currBall = 1;
                        currPlayer = 1;
                        // document.getElementById('timer-dial')?.innerHTML = time.toString();
                    }
                    else if (team2Go) {
                        team2Go = false;
                        resRel = true;
                        console.log('result can be released now');
                    }
                }, 26000);
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
(_b = document.getElementById('t1-hitBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a, _b, _c, _d, _e;
    console.log('clicked btn ');
    console.log(team1Go, ' sp other ', team2Go);
    if (nextTeam || !team1Go || !inningActive) {
        console.log('breaking here');
        return;
    }
    console.log('checking if later present ');
    var sc = Math.floor(Math.random() * 7);
    /*if (sc == 0){
            doesn't matter cause value is 0
    }*/
    t1.score[currPlayer - 1][currBall - 1] = sc;
    t1.tot_score[currPlayer - 1] += sc;
    t1.team_score += sc;
    // Updates into HTML: teamscore, ballscore, playerscore
    if (sc == 0) {
        (_a = document.getElementById("t1-p".concat(currPlayer, "-b").concat(currBall))) === null || _a === void 0 ? void 0 : _a.innerText = 'W';
        (_b = document.getElementById("t1-p".concat(currPlayer, "-total-score"))) === null || _b === void 0 ? void 0 : _b.innerText = t1.tot_score[currPlayer - 1].toString();
        if (currPlayer == 10) {
            // call condition for inning end
            // currPlayer = 1
            // currBall = 1
            currPlayer += 1;
        }
        else {
            currBall = 0;
            currPlayer += 1; // doubt here
        }
    }
    else {
        (_c = document.getElementById("t1-p".concat(currPlayer, "-b").concat(currBall))) === null || _c === void 0 ? void 0 : _c.innerText = sc.toString();
        (_d = document.getElementById("t1-p".concat(currPlayer, "-total-score"))) === null || _d === void 0 ? void 0 : _d.innerText = t1.tot_score[currPlayer - 1].toString();
    }
    (_e = document.getElementById("team1Score")) === null || _e === void 0 ? void 0 : _e.innerText = t1.team_score.toString();
    currBall += 1;
    if (currBall == 7) {
        currBall = 1;
        if (currPlayer == 10) {
            // put condiiton for inning end
            currPlayer += 1;
            // add setting for currteam = 0, ball 1, player = 1
        }
        else {
            currPlayer += 1;
        }
    }
    if (currPlayer >= 11) {
        // team1Go = false;
        // team2Go = true;
        // currTeam = 1
        currPlayer = 1;
        // inningActive = false;
        console.log('inning made inactive again midway before timer ');
        document.getElementById('timer-dial').textContent = "24";
        nextTeam = true;
        // team1Go = false;
    }
    // currTeam += 1
});
(_c = document.getElementById('t2-hitBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var _a, _b, _c, _d, _e;
    if (!nextTeam || !team2Go || !inningActive) {
        return;
    }
    console.log('clicked bt2 and entered');
    var sc = Math.floor(Math.random() * 7);
    /*if (sc == 0){
            doesn't matter cause value is 0
    }*/
    t2.score[currPlayer - 1][currBall - 1] = sc;
    t2.tot_score[currPlayer - 1] += sc;
    t2.team_score += sc;
    // Updates into HTML: teamscore, ballscore, playerscore
    if (sc == 0) {
        (_a = document.getElementById("t2-p".concat(currPlayer, "-b").concat(currBall))) === null || _a === void 0 ? void 0 : _a.innerText = 'W';
        (_b = document.getElementById("t2-p".concat(currPlayer, "-total-score"))) === null || _b === void 0 ? void 0 : _b.innerText = t2.tot_score[currPlayer - 1].toString();
        if (currPlayer == 10) {
            // call condition for inning end
            // currPlayer = 1
            // currBall = 1
            currPlayer += 1;
        }
        else {
            currBall = 0;
            currPlayer += 1; // doubt here
        }
    }
    else {
        (_c = document.getElementById("t2-p".concat(currPlayer, "-b").concat(currBall))) === null || _c === void 0 ? void 0 : _c.innerText = sc.toString();
        (_d = document.getElementById("t2-p".concat(currPlayer, "-total-score"))) === null || _d === void 0 ? void 0 : _d.innerText = t2.tot_score[currPlayer - 1].toString();
    }
    (_e = document.getElementById("team2Score")) === null || _e === void 0 ? void 0 : _e.innerText = t2.team_score.toString();
    currBall += 1;
    if (currBall == 7) {
        currBall = 1;
        if (currPlayer == 10) {
            // put condiiton for inning end 
            // add setting for currteam = 0, ball 1, player = 1
            currPlayer += 1;
        }
        else {
            currPlayer += 1;
        }
    }
    if (currPlayer >= 11) {
        // team1Go = false;
        // team2Go = false;
        team2Go = false;
        resRel = true;
        console.log('result can be released now');
        nextTeam = false;
    }
});
document.getElementById('match-resultGen').addEventListener('click', function () {
    console.log('match res called');
    if (resRel) {
        console.log('match res fn entered succesfully');
        var ele = document.getElementById('gen-res');
        if (t1.team_score > t2.team_score) {
            ele.textContent = "Match Won by Team 1 by ".concat(t1.team_score - t2.team_score, " runs");
        }
        else if (t1.team_score < t2.team_score) {
            ele.textContent = "Match Won by Team 2 by ".concat(t2.team_score - t1.team_score, " runs");
        }
        else {
            ele.textContent = "Match DRAW";
        }
        var ele2 = document.getElementById('man-match');
        if (t1.team_score > t2.team_score) {
            var mx = 0, idx = -1;
            for (var i = 0; i < 10; i++) {
                if (t1.tot_score[i] > mx) {
                    mx = t1.tot_score[i];
                    idx = i;
                }
            }
            console.log("MM from t 1");
            ele2.textContent = "Man of The Match: Player ".concat(idx + 1, " with Score: ").concat(t1.tot_score[idx]);
        }
        else if (t1.team_score < t2.team_score) {
            var mx = 0, idx = -1;
            for (var i = 0; i < 10; i++) {
                if (t2.tot_score[i] > mx) {
                    mx = t2.tot_score[i];
                    idx = i;
                }
            }
            ele2.textContent = "Man of The Match: Player ".concat(idx + 1, " with Score: ").concat(t2.tot_score[idx]);
            console.log('MM from T2');
        }
        else {
            var mx = 0, idx = -1, tm = 0;
            for (var i = 0; i < 10; i++) {
                if (t1.tot_score[i] > mx) {
                    mx = t1.tot_score[i];
                    idx = i;
                    tm = 1;
                }
                if (t2.tot_score[i] > mx) {
                    mx = t2.tot_score[i];
                    idx = i;
                    tm = 2;
                }
            }
            if (tm == 1)
                ele2.textContent = "Man of The Match: Player ".concat(idx + 1, " with Score: ").concat(t1.tot_score[idx]);
            else if (tm == 2)
                ele2.textContent = "Man of The Match: Player ".concat(idx + 1, " with Score: ").concat(t2.tot_score[idx]);
            console.log("MM from draw");
        }
        console.log('This is ending here after man match');
        var ref_btn = document.createElement('button');
        ref_btn.textContent = 'NEW MATCH';
        ref_btn.addEventListener('click', function () { window.location.reload(true); });
        document.getElementById('results-window').appendChild(ref_btn);
        resRel = false;
    }
});
// T1 - HIT SECTION
// T2 - HIT SECTION
// GEN RESULTS
