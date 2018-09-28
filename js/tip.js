let tip = {
    loc: "#tip",
};


tip.update = function (){
    let ct = new Date();
    let day = ct.getDay();
    let st = switch_ut(ct);
    if (day >= 1 && day <= 5){
        if (st < 100){$(tip.loc).text(config.tips.workday.night);}
        if (st >= 100 && st < 710){$(tip.loc).text(config.tips.workday.midnight);}
        if (st >= 710 && st < 800){$(tip.loc).text(config.tips.workday.morning);}
        if (st >= 800 && st < 1150){$(tip.loc).text(config.tips.workday.forenoon);}
        if (st >= 1150 && st < 1330){$(tip.loc).text(config.tips.workday.noon);}
        if (st >= 1330 && st < 1430){$(tip.loc).text(config.tips.workday.noon_sleep);}
        if (st >= 1430 && st < 1650){$(tip.loc).text(config.tips.workday.afternoon);}
        if (st >= 1650 && st < 1830){$(tip.loc).text(config.tips.workday.dinner);}
        if (st >= 1830 && st < 2230){$(tip.loc).text(config.tips.workday.evening);}
        if (st >= 2230 && st < 2330){$(tip.loc).text(config.tips.workday.sleep);}
        if (st >= 2330 && st < 2359){$(tip.loc).text(config.tips.workday.night);}
    }
    else{
        if (st < 100){$(tip.loc).text(config.tips.weekend.night);}
        if (st >= 100 && st < 710){$(tip.loc).text(config.tips.weekend.midnight);}
        if (st >= 710 && st < 800){$(tip.loc).text(config.tips.weekend.morning);}
        if (st >= 800 && st < 1150){$(tip.loc).text(config.tips.weekend.forenoon);}
        if (st >= 1150 && st < 1330){$(tip.loc).text(config.tips.weekend.noon);}
        if (st >= 1330 && st < 1430){$(tip.loc).text(config.tips.weekend.noon_sleep);}
        if (st >= 1430 && st < 1650){$(tip.loc).text(config.tips.weekend.afternoon);}
        if (st >= 1650 && st < 1830){$(tip.loc).text(config.tips.weekend.dinner);}
        if (st >= 1830 && st < 2230){$(tip.loc).text(config.tips.weekend.evening);}
        if (st >= 2230 && st < 2330){$(tip.loc).text(config.tips.weekend.sleep);}
        if (st >= 2330 && st < 2359){$(tip.loc).text(config.tips.weekend.night);}
    }
};