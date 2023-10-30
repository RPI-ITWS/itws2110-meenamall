
var all,daily_play,found,guess,points,rank1,rank2,rank3,rank4,rank5,rank6,rank7,rank8,rank9,replaying,total,todaytotal,yesterdaytotal,win,words,todaywords,yesterdaywords,dark,foundlist=[],letters=[],todayletters=[],wordlist=[],todaywordlist=[],yesterdaywordlist=[];function darkmode(){if(1==dark){for(var e=document.querySelectorAll("*"),t=0;t<e.length;t++)"fg"!=e[t].className&&"bg"!=e[t].className&&(e[t].style.background="#fbfcff",e[t].style.color="#243b4a");dark=0,localStorage.setItem("useDarkMode",1)}else{for(var e=document.querySelectorAll("*"),t=0;t<e.length;t++)"fg"!=e[t].className&&"bg"!=e[t].className&&(e[t].style.background="#111111",e[t].style.color="#9e9e9e");dark=1,localStorage.setItem("useDarkMode",0)}}function type(e,t){var n=document.getElementById("no-message"),l=document.getElementById("pangram"),s=document.getElementById("already-found"),o=document.getElementById("center-letter"),y=document.getElementById("too-short"),a=document.getElementById("not-in-list"),r=document.getElementById("comb"+t);n.style.display="inline",l.style.display="none",s.style.display="none",o.style.display="none",y.style.display="none",a.style.display="none",r.style.height="80px",r.style.width="80px",r.style.left=parseInt(r.style.left)+10+"px",r.style.top=parseInt(r.style.top)+10+"px",document.getElementById("guess").value=document.getElementById("guess").value+e}function untype(){var e=document.getElementById("comb1");e.style.height="100px",e.style.width="100px",e.style.left="1px",e.style.top="51px";var t=document.getElementById("comb2");t.style.height="100px",t.style.width="100px",t.style.left="80px",t.style.top="1px";var n=document.getElementById("comb3");n.style.height="100px",n.style.width="100px",n.style.left="159px",n.style.top="51px";var l=document.getElementById("comb4");l.style.height="100px",l.style.width="100px",l.style.left="1px",l.style.top="149px";var s=document.getElementById("comb5");s.style.height="100px",s.style.width="100px",s.style.left="80px",s.style.top="199px";var o=document.getElementById("comb6");o.style.height="100px",o.style.width="100px",o.style.left="159px",o.style.top="149px";var y=document.getElementById("comb7");y.style.height="100px",y.style.width="100px",y.style.left="80px",y.style.top="100px"}function display(){var e=0,t=document.getElementById("play1"),n=document.getElementById("play2"),l=document.getElementById("play3"),s=document.getElementById("play4"),o=document.getElementById("play5"),y=document.getElementById("play6"),a=document.getElementById("play7");t.src=letters[0]+".png",t.alt=letters[0],t.style.left="21px",t.style.top="51px",t.ontouchstart=function(){e=1,type(letters[0],1)},t.onmousedown=function(){1!=e&&type(letters[0],1)},t.style.display="block",t.onmouseup=function(){untype()},t.ondragend=function(){untype()},t.ontouchend=function(){untype()},t.ontouchcancel=function(){untype()},n.src=letters[1]+".png",n.alt=letters[1],n.style.left="100px",n.style.top="1px",n.ontouchstart=function(){e=1,type(letters[1],2)},n.onmousedown=function(){1!=e&&type(letters[1],2)},n.style.display="block",n.onmouseup=function(){untype()},n.ondragend=function(){untype()},n.ontouchend=function(){untype()},n.ontouchcancel=function(){untype()},l.src=letters[2]+".png",l.alt=letters[2],l.style.left="179px",l.style.top="51px",l.ontouchstart=function(){e=1,type(letters[2],3)},l.onmousedown=function(){1!=e&&type(letters[2],3)},l.style.display="block",l.onmouseup=function(){untype()},l.ondragend=function(){untype()},l.ontouchend=function(){untype()},l.ontouchcancel=function(){untype()},s.src=letters[3]+".png",s.alt=letters[3],s.style.left="21px",s.style.top="149px",s.ontouchstart=function(){e=1,type(letters[3],4)},s.onmousedown=function(){1!=e&&type(letters[3],4)},s.style.display="block",s.onmouseup=function(){untype()},s.ondragend=function(){untype()},s.ontouchend=function(){untype()},s.ontouchcancel=function(){untype()},o.src=letters[4]+".png",o.alt=letters[4],o.style.left="100px",o.style.top="199px",o.ontouchstart=function(){e=1,type(letters[4],5)},o.onmousedown=function(){1!=e&&type(letters[4],5)},o.style.display="block",o.onmouseup=function(){untype()},o.ondragend=function(){untype()},o.ontouchend=function(){untype()},o.ontouchcancel=function(){untype()},y.src=letters[5]+".png",y.alt=letters[5],y.style.left="179px",y.style.top="149px",y.ontouchstart=function(){e=1,type(letters[5],6)},y.onmousedown=function(){1!=e&&type(letters[5],6)},y.style.display="block",y.onmouseup=function(){untype()},y.ondragend=function(){untype()},y.ontouchend=function(){untype()},y.ontouchcancel=function(){untype()},a.src=letters[6]+".png",a.alt="center: "+letters[6][1],a.style.left="100px",a.style.top="100px",a.ontouchstart=function(){e=1,type(letters[6][1],7)},a.onmousedown=function(){1!=e&&type(letters[6][1],7)},a.style.display="block",a.onmouseup=function(){untype()},a.ondragend=function(){untype()},a.ontouchend=function(){untype()},a.ontouchcancel=function(){untype()}}function update_rank(){var e;points>=rank9?(0==win&&(alert("You earned the rank of Queen Bee!\n\nCan you find all the words?"),win=1),e="Queen Bee!"):e=points>=rank8?"Outstanding":points>=rank7?"Marvellous":points>=rank6?"Superb":points>=rank5?"Excellent":points>=rank4?"Skilled":points>=rank3?"Fine":points>=rank2?"Novice":"Newbie",document.getElementById("rank-update").innerHTML=e}function set_rank(){rank1=0,rank2=Math.floor(.02*total),rank3=Math.floor(.05*total),rank4=Math.floor(.08*total),rank5=Math.floor(.15*total),rank6=Math.floor(.25*total),rank7=Math.floor(.4*total),rank8=Math.floor(.5*total),rank9=Math.floor(.7*total)}function save_word(){localStorage.setItem("foundwords",JSON.stringify(foundlist))}function add_points(){var e=0,t=0,n=0,l=0,s=0,o=0,y=0,a=0,r=document.getElementById("no-message"),d=document.getElementById("pangram");if(1===daily_play&&save_word(),(y=guess.length)<7){4==y&&(y=1),points+=y;return}for(y=0;y<guess.length;){for(a=0;a<7;a++)guess[y]==letters[a]&&(0==a&&(e=1),1==a&&(t=1),2==a&&(n=1),3==a&&(l=1),4==a&&(s=1),5==a&&(o=1));y+=1}if(1==e&&1==t&&1==n&&1==l&&1==s&&1==o){points=points+guess.length+7,r.style.display="none",d.style.display="inline";return}points+=guess.length}function found_word(){var e;for(e=0;e<found;e++)if(guess==foundlist[e])return noMessage.style.display="none",document.getElementById("already-found").style.display="inline",1;return foundlist.push(guess),found+=1,add_points(),document.getElementById("points-update").innerHTML=points,document.getElementById("answers-update").innerHTML=foundlist.join("<br />"),update_rank(),found==words&&(alert("Congratulations! You found all the words!"),all=1),0}function check(){var e,t=0,n=document.getElementById("no-message"),l=document.getElementById("pangram"),s=document.getElementById("already-found"),o=document.getElementById("center-letter"),y=document.getElementById("too-short"),a=document.getElementById("not-in-list");for(n.style.display="inline",l.style.display="none",s.style.display="none",o.style.display="none",y.style.display="none",a.style.display="none",0===replaying?(guess=document.getElementById("guess").value.toLowerCase(),document.getElementById("player-guess").reset()):guess=guess.toLowerCase(),e=0;e<guess.length;e++)"7"+guess[e]==letters[6]&&(t=1);if(guess.length<4)return n.style.display="none",y.style.display="inline",1;if(0==t)return n.style.display="none",o.style.display="inline",1;for(e=0;e<words;e++)if(guess==wordlist[e])return found_word();return n.style.display="none",a.style.display="inline",1}function replay_words(){var e,t,n=document.getElementById("no-message"),l=document.getElementById("pangram"),s=document.getElementById("already-found"),o=document.getElementById("center-letter"),y=document.getElementById("too-short"),a=document.getElementById("not-in-list");for(replaying=1,t=JSON.parse(localStorage.getItem("foundwords")),localStorage.removeItem("foundwords"),e=0;e<t.length;e++)if(guess=t[e],1==check()){for(localStorage.removeItem("foundwords"),e=0;e<found;e++)foundlist.pop();all=0,found=0,points=0,rank="Newbie",win=0,n.style.display="inline",l.style.display="none",s.style.display="none",o.style.display="none",y.style.display="none",a.style.display="none",replaying=0;return}n.style.display="inline",l.style.display="none",s.style.display="none",o.style.display="none",y.style.display="none",a.style.display="none",replaying=0}function daily(){for(e=0,daily_play=1;e<found;e++)foundlist.pop();all=0,found=0,points=0,rank="Newbie",replaying=0,win=0;var e,t=document.getElementById("points-update"),n=document.getElementById("answers-update"),l=document.getElementById("rank-update"),s=document.getElementById("yesterday-or-random"),o=document.getElementById("random-answers"),y=document.getElementById("restart-daily-button"),a=document.getElementById("update-random"),r=document.getElementById("no-message"),d=document.getElementById("pangram"),i=document.getElementById("already-found"),p=document.getElementById("center-letter"),u=document.getElementById("too-short"),g=document.getElementById("not-in-list"),f=document.getElementById("play1"),c=document.getElementById("play2"),m=document.getElementById("play3"),$=document.getElementById("play4"),_=document.getElementById("play5"),h=document.getElementById("play6"),I=document.getElementById("play7");t.innerHTML=points,n.innerHTML=foundlist.join("<br />"),l.innerHTML=rank,s.innerHTML="Yesterday's answers",o.style.display="none",y.style.visibility="hidden",a.innerHTML="",r.style.display="inline",d.style.display="none",i.style.display="none",p.style.display="none",u.style.display="none",g.style.display="none",f.style.display="none",c.style.display="none",m.style.display="none",$.style.display="none",_.style.display="none",h.style.display="none",I.style.display="none",letters[0]=todayletters[0],letters[1]=todayletters[1],letters[2]=todayletters[2],letters[3]=todayletters[3],letters[4]=todayletters[4],letters[5]=todayletters[5],letters[6]=todayletters[6],words=todaywords,total=todaytotal,wordlist=todaywordlist,set_rank(),!0===localStorage.hasOwnProperty("foundwords")&&replay_words(),document.getElementById("update-random").innerHTML=yesterdaywordlist.join("<br />")+"<br /><br />Total words:  "+yesterdaywords+"<br />Total points: "+yesterdaytotal+"<br />Points for Queen Bee: "+Math.floor(.7*yesterdaytotal),display()}function get_yesterday(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);yesterdaywords=e.words,yesterdaytotal=e.total,yesterdaywordlist=e.wordlist}},e.open("GET","https://freebee.fun/cgi-bin/yesterday",!0),e.send()}function get_today(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);todayletters[0]=e.letters[0],todayletters[1]=e.letters[1],todayletters[2]=e.letters[2],todayletters[3]=e.letters[3],todayletters[4]=e.letters[4],todayletters[5]=e.letters[5],todayletters[6]="7"+e.center,todaywords=e.words,todaytotal=e.total,todaywordlist=e.wordlist,daily()}},e.open("GET","https://freebee.fun/cgi-bin/today",!0),e.send()}function shuffle(){var e,t,n;for(e=5;e>0;e--)n=letters[t=Math.floor(Math.random()*(e+1))],letters[t]=letters[e],letters[e]=n;display()}function random(){var e,t=new XMLHttpRequest;for(e=0,daily_play=0;e<found;e++)foundlist.pop();all=0,found=0,points=0,rank="Newbie",win=0;var n=document.getElementById("points-update"),l=document.getElementById("answers-update"),s=document.getElementById("rank-update"),o=document.getElementById("yesterday-or-random"),y=document.getElementById("update-random"),a=document.getElementById("no-message"),r=document.getElementById("pangram"),d=document.getElementById("already-found"),i=document.getElementById("center-letter"),p=document.getElementById("too-short"),u=document.getElementById("not-in-list"),g=document.getElementById("play1"),f=document.getElementById("play2"),c=document.getElementById("play3"),m=document.getElementById("play4"),$=document.getElementById("play5"),_=document.getElementById("play6"),h=document.getElementById("play7");n.innerHTML=points,l.innerHTML=foundlist.join("<br />"),s.innerHTML=rank,o.innerHTML="Answers",y.innerHTML="",a.style.display="inline",r.style.display="none",d.style.display="none",i.style.display="none",p.style.display="none",u.style.display="none",g.style.display="none",f.style.display="none",c.style.display="none",m.style.display="none",$.style.display="none",_.style.display="none",h.style.display="none",t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);letters[0]=e.letters[0],letters[1]=e.letters[1],letters[2]=e.letters[2],letters[3]=e.letters[3],letters[4]=e.letters[4],letters[5]=e.letters[5],letters[6]="7"+e.center,words=e.words,total=e.total,wordlist=e.wordlist,set_rank(),display(),document.getElementById("random-answers").style.display="block",document.getElementById("restart-daily-button").style.visibility="visible"}},t.open("GET","https://freebee.fun/cgi-bin/random",!0),t.send()}function show_random(){document.getElementById("update-random").innerHTML=wordlist.join("<br />")+"<br /><br />Total words:  "+words+"<br />Total points: "+total+"<br />Points for Queen Bee: "+Math.floor(.7*total)}function delete_letter(){var e=document.getElementById("guess").value,t=e.length;e=e.slice(0,t-1)+e.slice(t,t),document.getElementById("guess").value=e}window.onload=function(){var e=document.getElementById("comb1"),t=document.getElementById("comb2"),n=document.getElementById("comb3"),l=document.getElementById("comb4"),s=document.getElementById("comb5"),o=document.getElementById("comb6"),y=document.getElementById("comb7");e.style.height="100px",e.style.width="100px",e.style.left="1px",e.style.top="51px",t.style.height="100px",t.style.width="100px",t.style.left="80px",t.style.top="1px",n.style.height="100px",n.style.width="100px",n.style.left="159px",n.style.top="51px",l.style.height="100px",l.style.width="100px",l.style.left="1px",l.style.top="149px",s.style.height="100px",s.style.width="100px",s.style.left="80px",s.style.top="199px",o.style.height="100px",o.style.width="100px",o.style.left="159px",o.style.top="149px",y.style.height="100px",y.style.width="100px",y.style.left="80px",y.style.top="100px",get_yesterday(),get_today(),dark=!0===localStorage.hasOwnProperty("useDarkMode")?Number(localStorage.getItem("useDarkMode")):1,darkmode()};const API_URL="https://freebee.fun/cgi-bin/today";function fetchGameData(e){fetch(e).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{console.log(e)}).catch(e=>{console.error("There was a problem with the fetch operation:",e)})}fetchGameData("https://freebee.fun/cgi-bin/today");
































































//       var all;
//       var daily_play;
//       var found;
//       var foundlist = [];
//       var guess;
//       var letters = [], todayletters = [];
//       var points;
//       var rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9;
//       var replaying;
//       var total, todaytotal, yesterdaytotal;
//       var win;
//       var wordlist = [], todaywordlist = [], yesterdaywordlist = [];
//       var words, todaywords, yesterdaywords;
//       var dark;

//       function darkmode() {
// 	if (dark == 1) {
// 	  var x = document.querySelectorAll('*');
// 	  for (var i = 0; i < x.length; i++) {
// 	    if (x[i].className != "fg" && x[i].className != "bg") {
// 	      x[i].style.background = "#fbfcff";
// 		  x[i].style.color = "#243b4a";
// 	    }
// 	  }
// 	  dark = 0;
// 	  localStorage.setItem("useDarkMode", 1);
// 	} else {
// 	  var x = document.querySelectorAll('*');
// 	  for (var i = 0; i < x.length; i++) {
// 	    if (x[i].className != "fg" && x[i].className != "bg") {
// 	      x[i].style.background = "#111111";
// 		  x[i].style.color = "#9e9e9e";
// 	    }
// 	  }
// 	  dark = 1;
// 	  localStorage.setItem("useDarkMode", 0);
// 	}
//       }

//       function type(letter, combno) {

// 		var noMessage = document.getElementById("no-message");
// 		var pangram = document.getElementById("pangram");
// 		var alreadyFound = document.getElementById("already-found");
// 		var centerLetter = document.getElementById("center-letter");
// 		var tooShort = document.getElementById("too-short");
// 		var notInList = document.getElementById("not-in-list");
// 		var combElement = document.getElementById("comb" + combno);

// 		noMessage.style.display = "inline";
// 		pangram.style.display = "none";
// 		alreadyFound.style.display = "none";
// 		centerLetter.style.display = "none";
// 		tooShort.style.display = "none";
// 		notInList.style.display = "none";
// 		combElement.style.height = "80px";
// 		combElement.style.width = "80px";
// 		combElement.style.left = parseInt(combElement.style.left) + 10 + "px";
// 		combElement.style.top = parseInt(combElement.style.top) + 10 + "px";
// 		document.getElementById("guess").value = document.getElementById("guess").value + letter;

	
//       }

//       function untype() {
//         var comb1id = document.getElementById("comb1");
//         comb1id.style.height = "100px";
//         comb1id.style.width = "100px";
//         comb1id.style.left = "1px";
//         comb1id.style.top = "51px";

//         var comb2id = document.getElementById("comb2");
//         comb2id.style.height = "100px";
//         comb2id.style.width = "100px";
//         comb2id.style.left = "80px";
//         comb2id.style.top = "1px";

//         var comb3id = document.getElementById("comb3");
//         comb3id.style.height = "100px";
//         comb3id.style.width = "100px";
//         comb3id.style.left = "159px";
//         comb3id.style.top = "51px";

//         var comb4id = document.getElementById("comb4");
//         comb4id.style.height = "100px";
//         comb4id.style.width = "100px";
//         comb4id.style.left = "1px";
//         comb4id.style.top = "149px";

//         var comb5id = document.getElementById("comb5");
//         comb5id.style.height = "100px";
//         comb5id.style.width = "100px";
//         comb5id.style.left = "80px";
//         comb5id.style.top = "199px";

//         var comb6id = document.getElementById("comb6");
//         comb6id.style.height = "100px";
//         comb6id.style.width = "100px";
//         comb6id.style.left = "159px";
//         comb6id.style.top = "149px";

//         var comb7id = document.getElementById("comb7");
//         comb7id.style.height = "100px";
//         comb7id.style.width = "100px";
//         comb7id.style.left = "80px";
//         comb7id.style.top = "100px";
//       }


    

//       function display() {
// 	var didtouch = 0;

//     var play1id = document.getElementById("play1");
// 	var play2id = document.getElementById("play2");
// 	var play3id = document.getElementById("play3");
// 	var play4id = document.getElementById("play4");
// 	var play5id = document.getElementById("play5");
// 	var play6id = document.getElementById("play6");
// 	var play7id = document.getElementById("play7");

// 	play1id.src = letters[0] + ".png";
// 	play1id.alt = letters[0];
// 	play1id.style.left = "21px";
// 	play1id.style.top = "51px";
// 	play1id.ontouchstart = function() {didtouch = 1; type(letters[0], 1)};
// 	play1id.onmousedown = function() {if (didtouch != 1) {type(letters[0], 1)}};
// 	play1id.style.display = "block";
// 	play1id.onmouseup = function() {untype()};
// 	play1id.ondragend = function() {untype()};
// 	play1id.ontouchend = function() {untype()};
// 	play1id.ontouchcancel = function() {untype()};
    
// 	play2id.src = letters[1] + ".png";
// 	play2id.alt = letters[1];
// 	play2id.style.left = "100px";
// 	play2id.style.top = "1px";
// 	play2id.ontouchstart = function() {didtouch = 1; type(letters[1], 2)};
// 	play2id.onmousedown = function() {if (didtouch != 1) {type(letters[1], 2)}};
// 	play2id.style.display = "block";
// 	play2id.onmouseup = function() {untype()};
// 	play2id.ondragend = function() {untype()};
// 	play2id.ontouchend = function() {untype()};
// 	play2id.ontouchcancel = function() {untype()};

// 	play3id.src = letters[2] + ".png";
// 	play3id.alt = letters[2];
// 	play3id.style.left = "179px";
// 	play3id.style.top = "51px";
// 	play3id.ontouchstart = function() {didtouch = 1; type(letters[2], 3)};
// 	play3id.onmousedown = function() {if (didtouch != 1) {type(letters[2], 3)}};
// 	play3id.style.display = "block";
// 	play3id.onmouseup = function() {untype()};
// 	play3id.ondragend = function() {untype()};
// 	play3id.ontouchend = function() {untype()};
// 	play3id.ontouchcancel = function() {untype()};

// 	play4id.src = letters[3] + ".png";
// 	play4id.alt = letters[3];
// 	play4id.style.left = "21px";
// 	play4id.style.top = "149px";
// 	play4id.ontouchstart = function() {didtouch = 1; type(letters[3], 4)};
// 	play4id.onmousedown = function() {if (didtouch != 1) {type(letters[3], 4)}};
// 	play4id.style.display = "block";
// 	play4id.onmouseup = function() {untype()};
// 	play4id.ondragend = function() {untype()};
// 	play4id.ontouchend = function() {untype()};
// 	play4id.ontouchcancel = function() {untype()};

// 	play5id.src = letters[4] + ".png";
// 	play5id.alt = letters[4];
// 	play5id.style.left = "100px";
// 	play5id.style.top = "199px";
// 	play5id.ontouchstart = function() {didtouch = 1; type(letters[4], 5)};
// 	play5id.onmousedown = function() {if (didtouch != 1) {type(letters[4], 5)}};
// 	play5id.style.display = "block";
// 	play5id.onmouseup = function() {untype()};
// 	play5id.ondragend = function() {untype()};
// 	play5id.ontouchend = function() {untype()};
// 	play5id.ontouchcancel = function() {untype()};

// 	play6id.src = letters[5] + ".png";
// 	play6id.alt = letters[5];
// 	play6id.style.left = "179px";
// 	play6id.style.top = "149px";
// 	play6id.ontouchstart = function() {didtouch = 1; type(letters[5], 6)};
// 	play6id.onmousedown = function() {if (didtouch != 1) {type(letters[5], 6)}};
// 	play6id.style.display = "block";
// 	play6id.onmouseup = function() {untype()};
// 	play6id.ondragend = function() {untype()};
// 	play6id.ontouchend = function() {untype()};
// 	play6id.ontouchcancel = function() {untype()};

// 	play7id.src = letters[6] + ".png";
// 	play7id.alt = "center: " + letters[6][1];
// 	play7id.style.left = "100px";
// 	play7id.style.top = "100px";
// 	play7id.ontouchstart = function() {didtouch = 1; type(letters[6][1], 7)};
// 	play7id.onmousedown = function() {if (didtouch != 1) {type(letters[6][1], 7)}};
// 	play7id.style.display = "block";
// 	play7id.onmouseup = function() {untype()};
// 	play7id.ondragend = function() {untype()};
// 	play7id.ontouchend = function() {untype()};
// 	play7id.ontouchcancel = function() {untype()};
//       }

//       function update_rank() {
// 	var rank;

// 	if (points >= rank9) {
// 	  if (win == 0) {
// 	    alert("You earned the rank of Queen Bee!\n\nCan you find all the words?");
// 	    win = 1;
// 	  }
// 	  rank = "Queen Bee!";
// 	} else if (points >= rank8) {
// 	  rank = "Outstanding";
// 	} else if (points >= rank7) {
// 	  rank = "Marvellous";
// 	} else if (points >= rank6) {
// 	  rank = "Superb";
// 	} else if (points >= rank5) {
// 	  rank = "Excellent";
// 	} else if (points >= rank4) {
// 	  rank = "Skilled";
// 	} else if (points >= rank3) {
// 	  rank = "Fine";
// 	} else if (points >= rank2) {
// 	  rank = "Novice";
// 	} else {
// 	  rank = "Newbie";
// 	}

// 	document.getElementById("rank-update").innerHTML = rank;
//       }

//       function set_rank() {
// 	rank1 = 0;
// 	rank2 = Math.floor(total * 0.02);
// 	rank3 = Math.floor(total * 0.05);
// 	rank4 = Math.floor(total * 0.08);
// 	rank5 = Math.floor(total * 0.15);
// 	rank6 = Math.floor(total * 0.25);
// 	rank7 = Math.floor(total * 0.40);
// 	rank8 = Math.floor(total * 0.50);
// 	rank9 = Math.floor(total * 0.70);
//       }

//       function save_word() {
// 	localStorage.setItem("foundwords", JSON.stringify(foundlist));
//       }

//       function add_points() {
// 	var one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
// 	var i = 0, j = 0;

	

// 	var noMessage = document.getElementById("no-message");
// 	var pangram = document.getElementById("pangram");

// 	if (daily_play === 1) {
// 	  save_word();
// 	}

// 	i = guess.length;
// 	if (i < 7) {
// 	  if (i == 4) {
// 	    i = 1;
// 	  }
// 	  points = points + i;

// 	  return;
// 	}

// 	i = 0;
// 	while (i < guess.length) {
// 	  for (j = 0; j < 7; j++) {
// 	    if (guess[i] == letters[j]) {
// 	      if (j == 0) {
// 		one = 1;
// 	      }
// 	      if (j == 1) {
// 		two = 1;
// 	      }
// 	      if (j == 2) {
// 		three = 1;
// 	      }
// 	      if (j == 3) {
// 		four = 1;
// 	      }
// 	      if (j == 4) {
// 		five = 1;
// 	      }
// 	      if (j == 5) {
// 		six = 1;
// 	      }
// 	    }
// 	  }
// 	  i = i + 1;
// 	}

// 	if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
// 	  points = points + guess.length + 7;
// 	  noMessage.style.display = "none";
// 	  pangram.style.display = "inline";

// 	  return;
// 	}

// 	points = points + guess.length;
//       }

//       function found_word() {
// 	var i;

// 	for (i = 0; i < found; i++) {
// 	  if (guess == foundlist[i]) {
// 		noMessage.style.display = "none";
// 	    document.getElementById("already-found").style.display = "inline";
// 	    return 1;
// 	  }
// 	}

// 	foundlist.push(guess);

// 	found = found + 1;

// 	add_points();

// 	document.getElementById("points-update").innerHTML = points;
// 	document.getElementById("answers-update").innerHTML = foundlist.join("<br />");

// 	update_rank();

// 	if (found == words) {
// 	  alert("Congratulations! You found all the words!");
// 	  all = 1;
// 	}

// 	return 0;
//       }

//       function check() {
// 	var center = 0, i;

// 	var noMessage = document.getElementById("no-message");
// 	var pangram = document.getElementById("pangram");
// 	var alreadyFound = document.getElementById("already-found");
// 	var centerLetter = document.getElementById("center-letter");
// 	var tooShort = document.getElementById("too-short");
// 	var notInList = document.getElementById("not-in-list");

// 	noMessage.style.display = "inline";
// 	pangram.style.display = "none";
// 	alreadyFound.style.display = "none";
// 	centerLetter.style.display = "none";
// 	tooShort.style.display = "none";
// 	notInList.style.display = "none";

// 	if (replaying === 0) {
// 	  guess = document.getElementById("guess").value.toLowerCase();
// 	  document.getElementById("player-guess").reset();
// 	} else {
// 	  guess = guess.toLowerCase();
// 	}

// 	for (i = 0; i < guess.length; i++) {
// 	  if ("7" + guess[i] == letters[6]) {
// 	    center = 1;
// 	  }
// 	}

// 	if (guess.length < 4) {
// 		noMessage.style.display = "none";
// 		tooShort.style.display = "inline";
// 	  return 1;
// 	}

// 	if (center == 0) {
// 		noMessage.style.display = "none";
// 		centerLetter.style.display = "inline";
// 	  return 1;
// 	}

// 	for (i = 0; i < words; i++) {
// 	  if (guess == wordlist[i]) {
// 	    i = found_word();
// 	    return i;
// 	  }
// 	}
// 	noMessage.style.display = "none";
// 	notInList.style.display = "inline";

// 	return 1;
//       }

//       function replay_words() {
// 	var i, replay;

// 	var noMessage = document.getElementById("no-message");
// 	var pangram = document.getElementById("pangram");
// 	var alreadyFound = document.getElementById("already-found");
// 	var centerLetter = document.getElementById("center-letter");
// 	var tooShort = document.getElementById("too-short");
// 	var notInList = document.getElementById("not-in-list");

// 	replaying = 1;

// 	replay = JSON.parse(localStorage.getItem("foundwords"));

// 	localStorage.removeItem("foundwords");

// 	for (i = 0; i < replay.length; i++) {
// 	  guess = replay[i];

// 	  if (check() == 1) {
// 	    localStorage.removeItem("foundwords");

// 	    for (i = 0; i < found; i++) {
// 	      foundlist.pop();
// 	    }

// 	    all = 0;
// 	    found = 0;
// 	    points = 0;
// 	    rank = "Newbie";
// 	    win = 0;

// 	    noMessage.style.display = "inline";
// 		pangram.style.display = "none";
// 		alreadyFound.style.display = "none";
// 		centerLetter.style.display = "none";
// 		tooShort.style.display = "none";
// 		notInList.style.display = "none";

// 	    replaying = 0;

// 	    return;
// 	  }
// 	}

// 	noMessage.style.display = "inline";
// 	pangram.style.display = "none";
// 	alreadyFound.style.display = "none";
// 	centerLetter.style.display = "none";
// 	tooShort.style.display = "none";
// 	notInList.style.display = "none";

// 	replaying = 0;
//       }

//       function daily() {
// 	var i;

// 	daily_play = 1;

// 	for (i = 0; i < found; i++) {
// 	  foundlist.pop();
// 	}

// 	all = 0;
// 	found = 0;
// 	points = 0;
// 	rank = "Newbie";
// 	replaying = 0;
// 	win = 0;


// 	var pointsUpdate = document.getElementById("points-update");
// 	var answersUpdate = document.getElementById("answers-update");
// 	var rankUpdate = document.getElementById("rank-update");
// 	var yesterdayOrRandom = document.getElementById("yesterday-or-random");
// 	var randomAnswers = document.getElementById("random-answers");
// 	var restartDailyButton = document.getElementById("restart-daily-button");
// 	var updateRandom = document.getElementById("update-random");
// 	var noMessage = document.getElementById("no-message");
// 	var pangram = document.getElementById("pangram");
// 	var alreadyFound = document.getElementById("already-found");
// 	var centerLetter = document.getElementById("center-letter");
// 	var tooShort = document.getElementById("too-short");
// 	var notInList = document.getElementById("not-in-list");
// 	var play1 = document.getElementById("play1");
// 	var play2 = document.getElementById("play2");
// 	var play3 = document.getElementById("play3");
// 	var play4 = document.getElementById("play4");
// 	var play5 = document.getElementById("play5");
// 	var play6 = document.getElementById("play6");
// 	var play7 = document.getElementById("play7");	

// 	pointsUpdate.innerHTML = points;
// 	answersUpdate.innerHTML = foundlist.join("<br />");
// 	rankUpdate.innerHTML = rank;
// 	yesterdayOrRandom.innerHTML = "Yesterday's answers";
// 	randomAnswers.style.display = "none";
// 	restartDailyButton.style.visibility = "hidden";
// 	updateRandom.innerHTML = "";
// 	noMessage.style.display = "inline";
// 	pangram.style.display = "none";
// 	alreadyFound.style.display = "none";
// 	centerLetter.style.display = "none";
// 	tooShort.style.display = "none";
// 	notInList.style.display = "none";
// 	play1.style.display = "none";
// 	play2.style.display = "none";
// 	play3.style.display = "none";
// 	play4.style.display = "none";
// 	play5.style.display = "none";
// 	play6.style.display = "none";
// 	play7.style.display = "none";

// 	letters[0] = todayletters[0];
// 	letters[1] = todayletters[1];
// 	letters[2] = todayletters[2];
// 	letters[3] = todayletters[3];
// 	letters[4] = todayletters[4];
// 	letters[5] = todayletters[5];
// 	letters[6] = todayletters[6];
// 	words = todaywords;
// 	total = todaytotal;
// 	wordlist = todaywordlist;
// 	set_rank();
// 	if (localStorage.hasOwnProperty("foundwords") === true) {
// 	  replay_words();
// 	}
// 	document.getElementById("update-random").innerHTML = yesterdaywordlist.join("<br />") + "<br />" + "<br />Total words:  " + yesterdaywords + "<br />Total points: " + yesterdaytotal + "<br />Points for Queen Bee: " + Math.floor(yesterdaytotal * 0.70);
// 	display();
//       }

//       function get_yesterday() {
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 	  if (this.readyState == 4 && this.status == 200) {
// 	    var gameObj = JSON.parse(this.responseText);
// 	    yesterdaywords = gameObj.words;
// 	    yesterdaytotal = gameObj.total;
// 	    yesterdaywordlist = gameObj.wordlist;
// 	  }
// 	};

// 	xhttp.open("GET", "https://freebee.fun/cgi-bin/yesterday", true);
// 	xhttp.send();
//       }

//       function get_today() {
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 	  if (this.readyState == 4 && this.status == 200) {
// 	    var gameObj = JSON.parse(this.responseText);
// 	    todayletters[0] = gameObj.letters[0];
// 	    todayletters[1] = gameObj.letters[1];
// 	    todayletters[2] = gameObj.letters[2];
// 	    todayletters[3] = gameObj.letters[3];
// 	    todayletters[4] = gameObj.letters[4];
// 	    todayletters[5] = gameObj.letters[5];
// 	    todayletters[6] = "7" + gameObj.center;
// 	    todaywords = gameObj.words;
// 	    todaytotal = gameObj.total;
// 	    todaywordlist = gameObj.wordlist;
// 	    daily();
// 	  }
// 	};

// 	xhttp.open("GET", "https://freebee.fun/cgi-bin/today", true);
// 	xhttp.send();
//       }

//       window.onload = function() {


// 		var comb1 = document.getElementById("comb1");
// 		var comb2 = document.getElementById("comb2");
// 		var comb3 = document.getElementById("comb3");
// 		var comb4 = document.getElementById("comb4");
// 		var comb5 = document.getElementById("comb5");
// 		var comb6 = document.getElementById("comb6");
// 		var comb7 = document.getElementById("comb7");


// 		comb1.style.height = "100px";
// 		comb1.style.width = "100px";
// 		comb1.style.left = "1px";
// 		comb1.style.top = "51px";
// 		comb2.style.height = "100px";
// 		comb2.style.width = "100px";
// 		comb2.style.left = "80px";
// 		comb2.style.top = "1px";
// 		comb3.style.height = "100px";
// 		comb3.style.width = "100px";
// 		comb3.style.left = "159px";
// 		comb3.style.top = "51px";
// 		comb4.style.height = "100px";
// 		comb4.style.width = "100px";
// 		comb4.style.left = "1px";
// 		comb4.style.top = "149px";
// 		comb5.style.height = "100px";
// 		comb5.style.width = "100px";
// 		comb5.style.left = "80px";
// 		comb5.style.top = "199px";
// 		comb6.style.height = "100px";
// 		comb6.style.width = "100px";
// 		comb6.style.left = "159px";
// 		comb6.style.top = "149px";
// 		comb7.style.height = "100px";
// 		comb7.style.width = "100px";
// 		comb7.style.left = "80px";
// 		comb7.style.top = "100px";
// 	get_yesterday();
// 	get_today();
// 	if (localStorage.hasOwnProperty("useDarkMode") === true) {
// 	  dark = Number(localStorage.getItem("useDarkMode"));
// 	} else {
// 	  dark = 1;
// 	}
// 	darkmode();
//       };

//       function shuffle() {
// 	var i, j, t;

// 	for (i = 5; i > 0; i--) {
// 	  j = Math.floor(Math.random() * (i + 1));
// 	  t = letters[j];
// 	  letters[j] = letters[i];
// 	  letters[i] = t;
// 	}

// 	display();
//       }

//       function random() {
// 	var xhttp = new XMLHttpRequest();
// 	var i;

// 	daily_play = 0;

// 	for (i = 0; i < found; i++) {
// 	  foundlist.pop();
// 	}

// 	all = 0;
// 	found = 0;
// 	points = 0;
// 	rank = "Newbie";
// 	win = 0;



// 	var pointsUpdate = document.getElementById("points-update");
// 	var answersUpdate = document.getElementById("answers-update");
// 	var rankUpdate = document.getElementById("rank-update");
// 	var yesterdayOrRandom = document.getElementById("yesterday-or-random");
// 	var updateRandom = document.getElementById("update-random");
// 	var noMessage = document.getElementById("no-message");
// 	var pangram = document.getElementById("pangram");
// 	var alreadyFound = document.getElementById("already-found");
// 	var centerLetter = document.getElementById("center-letter");
// 	var tooShort = document.getElementById("too-short");
// 	var notInList = document.getElementById("not-in-list");
// 	var play1 = document.getElementById("play1");
// 	var play2 = document.getElementById("play2");
// 	var play3 = document.getElementById("play3");
// 	var play4 = document.getElementById("play4");
// 	var play5 = document.getElementById("play5");
// 	var play6 = document.getElementById("play6");
// 	var play7 = document.getElementById("play7");

// 	pointsUpdate.innerHTML = points;
// 	answersUpdate.innerHTML = foundlist.join("<br />");
// 	rankUpdate.innerHTML = rank;
// 	yesterdayOrRandom.innerHTML = "Answers";
// 	updateRandom.innerHTML = "";
// 	noMessage.style.display = "inline";
// 	pangram.style.display = "none";
// 	alreadyFound.style.display = "none";
// 	centerLetter.style.display = "none";
// 	tooShort.style.display = "none";
// 	notInList.style.display = "none";
// 	play1.style.display = "none";
// 	play2.style.display = "none";
// 	play3.style.display = "none";
// 	play4.style.display = "none";
// 	play5.style.display = "none";
// 	play6.style.display = "none";
// 	play7.style.display = "none";

// 	xhttp.onreadystatechange = function() {
// 	  if (this.readyState == 4 && this.status == 200) {
// 	    var gameObj = JSON.parse(this.responseText);
// 	    letters[0] = gameObj.letters[0];
// 	    letters[1] = gameObj.letters[1];
// 	    letters[2] = gameObj.letters[2];
// 	    letters[3] = gameObj.letters[3];
// 	    letters[4] = gameObj.letters[4];
// 	    letters[5] = gameObj.letters[5];
// 	    letters[6] = "7" + gameObj.center;
// 	    words = gameObj.words;
// 	    total = gameObj.total;
// 	    wordlist = gameObj.wordlist;
// 	    set_rank();
// 	    display();
// 	    document.getElementById("random-answers").style.display = "block";
// 	    document.getElementById("restart-daily-button").style.visibility = "visible";
// 	  }

// 	};

// 	xhttp.open("GET", "https://freebee.fun/cgi-bin/random", true);
// 	xhttp.send();
//       }

//       function show_random() {
// 	document.getElementById("update-random").innerHTML = wordlist.join("<br />") + "<br />" + "<br />Total words:  " + words + "<br />Total points: " + total + "<br />Points for Queen Bee: " + Math.floor(total * 0.70);
//       }

//       function delete_letter() {
// 	var str = document.getElementById("guess").value;
// 	var len = str.length;

// 	str = str.slice(0, len - 1) + str.slice(len, len);
// 	document.getElementById("guess").value = str;
//       }


       
// 	  const API_URL = "https://freebee.fun/cgi-bin/today";  

// 	  function fetchGameData(apiEndpoint) {
// 		fetch(apiEndpoint)
// 		  .then((response) => {
// 			if (!response.ok) {
// 			  throw new Error("Network response was not ok");
// 			}
// 			return response.json();  
// 		  })
// 		  .then((data) => {
			 
// 			console.log(data);  
// 		  })
// 		  .catch((error) => {
// 			console.error("There was a problem with the fetch operation:", error);
// 		  });
// 	  }


// fetchGameData("https://freebee.fun/cgi-bin/today"); 


