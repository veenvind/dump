/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var button_map ={"yma":"app_yma_e_na_r", 
"my":"app_myyahoo_r", 
"boo":"app_boo_e_ff_r", 
"rss_sd_omg":"rss_sd_omg3_refresh", 
"rss_sd_news":"rss_sd_news_r", 
"wea":"app_weather_r", 
"fin":"app_fin_refresh", 
"spo":"app_spo_refresh", 
"kp":"app_ans_no_menu_r", 
"mov":"app_mov_r", 
"mus":"app_ymusic_refresh", 
"sho":"app_sho_refresh", 
"gam":"app_games_refresh", 
"clu":"app_groups_r", 
"flk":"app_flckr_nomenu_refresh", 
"fan":"app_fantasysports_refresh", 
"rss_sd_screen":"rss_sd_screen_refresh", 
"rss_sd_shine":"rss_sd_shine_refresh", 
"tumbler":"tumbler", 
"screen_refresh":"screen_refresh", 
"rss_sd_cnn":"rss_sd_cnn_refresh", 
"rss_sd_huffpo":"rss_sd_huffpo_r", 
"rss_sd_usatodayhead":"rss_sd_usatodayhead_refresh", 
"fac":"app_fac_e_na_r", 
"wik":"wiki_refresh", 
"app_twitter":"twitter_refresh", 
"app_dmotion":"dailymotion_refresh", 
"you":"you_refresh", 
"linkedin_refresh":"linkedin_refresh", 
"app_gmail":"app_gmail_r", 
"guppypinterest":"guppypinterest_r", 
"ebay":"ebay_shortcut_r", 
"amz":"amz_refresh", 
"craigslist":"craigslist" };

Y.io("http://us.config.toolbar.yahoo.com/config/galaxy/query/",{method:"POST",data:"_catid=&_cv=3.1.0&_intl=ph&_pc=",on:{success:bpk_glxy_buttons_sids_exist}});
Y.io("http://us.config.toolbar.yahoo.com/config/galaxy/query/",{method:"POST",data:"_allcat=&_cv=3.1.0&_intl=ph&_pc=",on:{success:bpk_glxy_buttons_incat}});

function bpk_glxy_buttons_sids_exist(id,o){
    var temp = JSON.parse(o.responseText);
   // console.log(temp);
    for( cid in button_map){
        //console.log(cid);
        if(typeof temp.buttons[cid] == "undefined")
            console.log(button_map[cid]);
        else if(temp.buttons[cid].sbid != button_map[cid])
            console.log(temp.buttons[cid].sbid+" : "+ button_map[cid]);
    }
}


function bpk_glxy_buttons_incat(id,o){
    var temp = JSON.parse(o.responseText);
    //console.log(temp[1].order.indexOf("yma"));
    for(cid in button_map)
    {
        var order=0;
        for(i in temp){
            //console.log(temp[i].order.indexOf(cid));
            if(typeof temp[i].order != "undefined" && temp[i].order.indexOf(cid)>-1)
                order=i;
        }
        if(!order)
            console.log(cid);
        
    }
}