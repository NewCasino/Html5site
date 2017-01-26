var CANVAS_WIDTH=1024,CANVAS_HEIGHT=768,FPS_TIME=1E3/24,DISABLE_SOUND_MOBILE=!0,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,STATE_GAME_ROLL_IN=0,STATE_GAME_BALL_MOVE=1,STATE_GAME_ROLL_OUT=2,STATE_GAME_SHOOTING=3,STATE_GAME_ATTRACT_BALLS=4,STEP_LENGTH=2,BALL_COLORS=5,BALL_ROLLING_IN,BALL_SHOOTED_SPEED=36,COMBO_VALUE,EXTRA_SCORE,BALL_DIAMETER,BALL_RADIUS,BALL_DIAMETER_SQUARE;
function CTweenController(){this.tweenValue=function(a,b,c){return a+c*(b-a)};this.easeLinear=function(a,b,c,e){return c*a/e+b};this.easeInCubic=function(a,b,c,e){e=(a/=e)*a*a;return b+c*e};this.easeBackInQuart=function(a,b,c,e){e=(a/=e)*a;return b+c*(2*e*e+2*e*a+-3*e)};this.easeInBack=function(a,b,c,e){return c*(a/=e)*a*(2.70158*a-1.70158)+b};this.easeOutCubic=function(a,b,c,e){return c*((a=a/e-1)*a*a+1)+b}}
function CToggle(a,b,c){var e,g,d;this._init=function(a,b,c){e=[];g=[];c=new createjs.SpriteSheet({images:[c],frames:{width:c.width/2,height:c.height,regX:c.width/2/2,regY:c.height/2},animations:{on:[0,1],off:[1,2]}});d=s_bAudioActive?new createjs.Sprite(c,"on"):new createjs.Sprite(c,"off");d.x=a;d.y=b;d.stop();s_oStage.addChild(d);this._initListener()};this.unload=function(){d.off("mousedown",this.buttonDown);d.off("pressup",this.buttonRelease);s_oStage.removeChild(d)};this._initListener=function(){d.on("mousedown",
this.buttonDown);d.on("pressup",this.buttonRelease)};this.addEventListener=function(a,d,c){e[a]=d;g[a]=c};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but");d.scaleX=1;d.scaleY=1;(s_bAudioActive=!s_bAudioActive)?d.gotoAndStop("on"):d.gotoAndStop("off");e[ON_MOUSE_UP]&&e[ON_MOUSE_UP].call(g[ON_MOUSE_UP])};this.buttonDown=function(){d.scaleX=.9;d.scaleY=.9;e[ON_MOUSE_DOWN]&&e[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])};this._init(a,b,c)}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4))})(navigator.userAgent||navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}

function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,b=CANVAS_HEIGHT,c,d;!0===inIframe()&&"ios"==getMobileOperatingSystem()?top.location.href=document.location.href:(c=window.innerWidth,d=window.innerHeight,console.log("h: "+d),multiplier=Math.min(d/b,c/a),a*=multiplier,b*=multiplier,$("#canvas").css("width",a+"px"),$("#canvas").css("height",b+"px"),$("#canvas").css("left",c/2-a/2+"px"))}}
function getMobileOperatingSystem(){var a=navigator.userAgent||navigator.vendor||window.opera;return a.match(/iPad/i)||a.match(/iPhone/i)||a.match(/iPod/i)?"ios":a.match(/Android/i)?"android":"unknown"}function inIframe(){try{return window.self!==window.top}catch(a){return!0}};

function randomFloatBetween(a,b,c){"undefined"===typeof c&&(c=2);return parseFloat(Math.min(a+Math.random()*(b-a),b).toFixed(c))}
function shuffle(a){for(var b=a.length,c,e;0!==b;)e=Math.floor(Math.random()*b),--b,c=a[b],a[b]=a[e],a[e]=c;return a}function formatTime(a){a/=1E3;var b=Math.floor(a/60);a=parseFloat(a-60*b).toFixed(1);var c="",c=10>b?c+("0"+b+":"):c+(b+":");return c=10>a?c+("0"+a):c+a}function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3===a.nodeType&&(a=a.parentNode);var b=document.createEvent("MouseEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}}};
function CTextButton(a,b,c,e,g,d,f){var l,q,p,m,s,n,x,v,w;this._init=function(a,e,d,c,f,b,g){l=!1;m=[];s=[];w=new createjs.Bitmap(d);q=d.width;p=d.height;var z=Math.ceil(g/20);x=new createjs.Text(c,"bold "+g+"px "+f,"#000000");x.textAlign="center";var u=x.getBounds();x.x=d.width/2+z;x.y=(d.height-u.height)/2+z;v=new createjs.Text(c,"bold "+g+"px "+f,b);v.textAlign="center";u=v.getBounds();v.x=d.width/2;v.y=(d.height-u.height)/2;n=new createjs.Container;n.x=a;n.y=e;n.regX=d.width/2;n.regY=d.height/
2;n.addChild(w,x,v);s_oStage.addChild(n);this._initListener()};this.unload=function(){n.off("mousedown");n.off("pressup");s_oStage.removeChild(n)};this.setVisible=function(a){n.visible=a};this.enable=function(){l=!1;w.filters=[];w.cache(0,0,q,p)};this.disable=function(){l=!0;var a=(new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);w.filters=[new createjs.ColorMatrixFilter(a)];w.cache(0,0,q,p)};this._initListener=function(){oParent=this;n.on("mousedown",this.buttonDown);n.on("pressup",
this.buttonRelease)};this.addEventListener=function(a,d,e){m[a]=d;s[a]=e};this.buttonRelease=function(){l||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but"),n.scaleX=1,n.scaleY=1,m[ON_MOUSE_UP]&&m[ON_MOUSE_UP].call(s[ON_MOUSE_UP]))};this.buttonDown=function(){l||(n.scaleX=.9,n.scaleY=.9,m[ON_MOUSE_DOWN]&&m[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN]))};this.setPosition=function(a,d){n.x=a;n.y=d};this.changeText=function(a){v.text=a;x.text=a};this.setX=function(a){n.x=a};this.setY=
function(a){n.y=a};this.getButtonImage=function(){return n};this.getX=function(){return n.x};this.getY=function(){return n.y};this._init(a,b,c,e,g,d,f);return this}
function CPreloader(){var a;this._init=function(){this._onAllPreloaderImagesLoaded()};this._onPreloaderImagesLoaded=function(){};this._onAllPreloaderImagesLoaded=function(){a=new createjs.Text("","bold 22px Arial center","#ffffff");a.x=CANVAS_WIDTH/2-40;a.y=CANVAS_HEIGHT/2;s_oStage.addChild(a)};this.unload=function(){s_oStage.removeChild(a)};this.refreshLoader=function(b){a.text=b+"%"};this._init()}
function CNextLevel(){var a,b,c,e,g,d;this._init=function(){a=new createjs.Bitmap(s_oSpriteLibrary.getSprite("msg_box"));a.x=0;a.y=0;c=new createjs.Text("","bold 58px Chewy","#000");c.x=CANVAS_WIDTH/2+1;c.y=CANVAS_HEIGHT/2-138;c.textAlign="center";b=new createjs.Text("","bold 58px Chewy","#ffffff");b.x=CANVAS_WIDTH/2;b.y=CANVAS_HEIGHT/2-140;b.textAlign="center";g=new createjs.Text("","bold 44px Chewy","#000");g.x=CANVAS_WIDTH/2+1;g.y=CANVAS_HEIGHT/2+40;g.textAlign="center";e=new createjs.Text("",
"bold 44px Chewy","#ffffff");e.x=CANVAS_WIDTH/2;e.y=CANVAS_HEIGHT/2+38;e.textAlign="center";d=new createjs.Container;d.alpha=0;d.visible=!1;d.addChild(a,c,b,g,e);s_oStage.addChild(d)};this.show=function(a,l){c.text=TEXT_LEVEL+" "+a;b.text=TEXT_LEVEL+" "+a;g.text=TEXT_SCORE+" "+l;e.text=TEXT_SCORE+" "+l;d.visible=!0;var q=this;createjs.Tween.get(d).to({alpha:1},500).call(function(){q._initListener()})};this._initListener=function(){d.on("mousedown",this._onExit)};this._onExit=function(){d.off("mousedown");
d.alpha=0;d.visible=!1;s_oGame.nextLevel()};this._init()}
function CMenu(){var a,b,c,e;this._init=function(){a=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var g=s_oSpriteLibrary.getSprite("but_bg");b=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-100,g,TEXT_PLAY,"Chewy","#ffffff",60);b.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)g=s_oSpriteLibrary.getSprite("audio_icon"),c=new CToggle(CANVAS_WIDTH-g.width/2+20,g.height/2+20,g),c.addEventListener(ON_MOUSE_UP,this._onAudioToggle,
this),s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:100});e=new createjs.Shape;e.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(e);createjs.Tween.get(e).to({alpha:0},1E3).call(function(){e.visible=!1})};this.unload=function(){b.unload();b=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)c.unload(),c=null;s_oStage.removeChild(a);a=null;s_oStage.removeChild(e);e=null};this._onButPlayRelease=function(){this.unload();s_oMain.gotoGame()};this._onAudioToggle=
function(){createjs.Sound.setMute(!s_bAudioActive)};this._init()}
function CMain(a){var b=0,c=0,e=STATE_LOADING,g,d,f;this.initContainer=function(){var a=document.getElementById("canvas");s_oStage=new createjs.Stage(a);createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&s_oStage.enableMouseOver(20);s_oLevelSettings=new CLevelSettings;s_iPrevTime=(new Date).getTime();createjs.Ticker.setFPS(35);createjs.Ticker.on("tick",this._update);!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds();s_oSpriteLibrary=new CSpriteLibrary;d=new CPreloader;
this._loadImages()};this.soundLoaded=function(){b++;b===c&&(d.unload(),this.gotoMenu())};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["mp3"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/press_but.ogg","press_but"),createjs.Sound.registerSound("./sounds/win.ogg","win"),createjs.Sound.registerSound("./sounds/game_over.ogg",
"game_over"),createjs.Sound.registerSound("./sounds/combo.ogg","combo"),createjs.Sound.registerSound("./sounds/shot.ogg","shot"),createjs.Sound.registerSound("./sounds/soundtrack.ogg","soundtrack")):(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/press_but.mp3","press_but"),createjs.Sound.registerSound("./sounds/win.mp3","win"),createjs.Sound.registerSound("./sounds/game_over.mp3",
"game_over"),createjs.Sound.registerSound("./sounds/combo.mp3","combo"),createjs.Sound.registerSound("./sounds/shot.mp3","shot"),createjs.Sound.registerSound("./sounds/soundtrack.mp3","soundtrack")),c+=6)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("but_bg","./sprites/but_play_bg.png");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("audio_icon",
"./sprites/audio_icon.png");s_oSpriteLibrary.addSprite("hero","./sprites/hero.png");s_oSpriteLibrary.addSprite("hit_area","./sprites/hit_area.png");s_oSpriteLibrary.addSprite("explosion","./sprites/explosion.png");s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");s_oSpriteLibrary.addSprite("extra_score","./sprites/extra_score.png");s_oSpriteLibrary.addSprite("end_path","./sprites/end_path.png");s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");for(var a=0;a<BALL_COLORS;a++)s_oSpriteLibrary.addSprite("ball_"+
a,"./sprites/ball_"+a+".png");c+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){b++;d.refreshLoader(Math.floor(b/c*100));b===c&&(d.unload(),this.gotoMenu())};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.gotoMenu=function(){new CMenu;e=STATE_MENU};this.gotoGame=function(){f=new CGame(g);e=STATE_GAME;$(s_oMain).trigger("game_start")};this.gotoHelp=function(){new CHelp;e=STATE_HELP};this._update=
function(a){var d=(new Date).getTime();s_iTimeElaps=d-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=d;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);e===STATE_GAME&&f.update();void 0!==s_oStage&&s_oStage.update(a)};s_oMain=this;g=a;this.initContainer()}var s_bMobile,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_oSoundtrack,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary,s_oLevelSettings;
function CLevelSettings(){var a,b,c,e,g;this._init=function(){this._initBallSpeed();this._initBallNumber();this._initBallColors();this._initHeroPos();this._initCurveLevel()};this._initBallSpeed=function(){a=[50,40,30]};this._initBallNumber=function(){b=[60,80,100]};this._initBallColors=function(){c=[];c[0]=BALL_COLORS-1;c[1]=BALL_COLORS;c[2]=BALL_COLORS};this._initHeroPos=function(){e=[];e[0]=new createjs.Point(500,400);e[1]=new createjs.Point(500,400);e[2]=new createjs.Point(500,400)};this._initCurveLevel=
function(){g=[[[-102,262],[-42,226],[120,154],[168,136],[215,120],[264,104],[313,92],[363,83],[414,76],[464,71],[516,68],[566,66],[617,66],[668,71],[718,84],[765,100],[810,125],[851,154],[891,188],[923,226],[950,269],[967,317],[969,368],[948,413],[902,433],[855,417],[825,375],[805,329],[781,284],[755,240],[719,204],[676,178],[628,158],[578,151],[528,151],[477,159],[428,169],[378,179],[328,192],[280,208],[233,227],[187,250],[145,278],[105,309],[75,350],[57,397],[51,447],[56,498],[68,548],[91,593],
[122,634],[163,663],[210,681],[260,690],[311,694],[359,697],[419,698],[479,698],[529,696],[579,692],[632,685],[687,674],[737,661],[787,643],[827,625],[872,598],[897,565],[897,523],[867,495],[829,477],[789,477],[749,492],[717,514],[679,541],[634,571],[592,592],[552,605],[512,613],[469,615],[422,612],[379,604],[339,593],[296,576],[254,551],[224,519],[205,476]],[[378,-39],[498,3],[618,51],[670,74],[720,97],[768,122],[810,147],[853,175],[890,204],[935,245],[971,290],[992,328],[999,369],[990,410],[967,
448],[936,483],[898,515],[856,545],[806,575],[763,597],[718,618],[663,640],[615,656],[558,673],[505,686],[440,697],[373,704],[298,701],[240,691],[189,671],[142,636],[105,591],[83,544],[68,497],[60,444],[59,382],[65,329],[76,282],[93,234],[119,187],[149,148],[184,120],[224,100],[272,92],[319,95],[366,101],[409,110],[482,128],[552,149],[609,169],[707,212],[776,250],[840,297],[872,347],[865,386],[842,423],[802,458],[754,491],[709,515],[606,555],[529,577],[456,591],[379,593],[339,585],[299,557],[276,
517],[264,475],[259,422],[264,365],[273,320],[291,272],[318,235],[348,217],[383,216],[428,223],[487,240],[555,265],[632,298]],[[-49,228],[22,181],[81,150],[181,113],[253,95],[343,78],[421,71],[476,71],[542,72],[593,76],[651,85],[703,97],[758,114],[811,136],[863,166],[903,200],[933,237],[954,277],[970,325],[978,375],[962,472],[900,550],[845,586],[803,611],[758,631],[710,646],[664,657],[619,665],[567,670],[519,672],[467,671],[410,667],[363,660],[315,651],[265,637],[218,620],[175,598],[122,561],[82,
513],[58,468],[47,418],[46,370],[59,330],[96,304],[137,310],[164,346],[160,389],[169,431],[193,476],[226,509],[263,535],[323,560],[401,577],[473,584],[546,584],[616,579],[689,564],[744,540],[796,503],[829,461],[849,413],[854,371],[839,331],[802,311],[759,318],[741,358],[736,401],[714,439],[677,468],[634,486],[587,497],[540,501],[475,501],[420,493],[372,480],[327,456],[293,423],[274,378],[272,338]]]};this.getBallSpeedForLevel=function(d){return a[d-1]};this.getBallNumberForLevel=function(a){return b[a-
1]};this.getBallColorsForLevel=function(a){return c[a-1]};this.getHeroPosForLevel=function(a){return e[a-1]};this.getCurveForLevel=function(a){return g[a-1]};this.getNumLevels=function(){return g.length};this._init()}TEXT_GAMEOVER="GAME OVER";TEXT_CONGRATS="CONGRATULATIONS";TEXT_PLAY="PLAY";TEXT_SCORE="SCORE";TEXT_LEVEL="LEVEL";TEXT_FINAL_SCORE="FINAL SCORE";
function CInterface(){var a,b,c,e,g,d;this._init=function(){a=new createjs.Text(TEXT_SCORE+" 0","bold 38px Chewy","#f10000");a.x=10;a.y=10;a.textAlign="left";a.shadow=new createjs.Shadow("#000000",2,2,2);s_oStage.addChild(a);var f=this;c=new createjs.Bitmap(s_oSpriteLibrary.getSprite("hit_area"));s_oStage.addChild(c);c.on("pressup",function(a){f._onTapScreen(a.stageX,a.stageY)});var l=s_oSpriteLibrary.getSprite("but_exit");b=new CGfxButton(CANVAS_WIDTH-l.width/2-10,l.height/2+10,l,!0);b.addEventListener(ON_MOUSE_UP,
this._onExit,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)e=new CToggle(b.getX()-l.width,l.height/2+10,s_oSpriteLibrary.getSprite("audio_icon")),e.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this);d=new CNextLevel;g=new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"))};this.unload=function(){b.unload();b=null;!1===DISABLE_SOUND_MOBILE&&(e.unload(),e=null);s_oStage.removeAllChildren()};this._onTapScreen=function(a,d){s_oGame.onShot(a,d)};this.gameOver=function(a){g.show(a,!1)};this.win=
function(a){g.show(a,!0)};this.nextLevel=function(a,e){d.show(a,e)};this.refreshScore=function(d){a.text=TEXT_SCORE+" "+d};this._onExit=function(){s_oGame.onExit()};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};s_oInterface=this;this._init();return this}var s_oInterface;
function CHero(){var a=!1,b,c,e,g,d,f,l,q,p,m;this._init=function(){var a=s_oSpriteLibrary.getSprite("hero");m=new createjs.Container;m.regX=a.width/2;m.regY=a.height/2;s_oStage.addChild(m);l=new createjs.Bitmap(a);l.x=0;l.y=0;m.addChild(l);q=new createjs.Shape;q.graphics.beginFill("rgba(255,0,0,0.01)").drawCircle(40,110,16);m.addChild(q);p=new createjs.Shape;p.graphics.beginFill("rgba(255,0,0,0.01)").drawCircle(120,60,6);m.addChild(p);b=a.width;c=a.height};this.reset=function(a,c){e=c;void 0!==d&&
null!==d&&d.unload();void 0!==f&&null!==f&&f.unload();m.x=a.x;m.y=a.y;g=[];for(var b=0;b<e;b++)g[b]=!0};this.unload=function(){};this.rotate=function(a){m.rotation=a};this.start=function(){d=this._getRandomBall();d.changePos(b/2-25,c/2+20);d.getSprite().mask=q;f=this._getRandomBall();f.changePos(120,c/2-12);f.getSprite().mask=p;var a=this;createjs.Tween.get(d.getSprite()).to({y:d.getY()+25},300).call(function(){a._onBallReady()});createjs.Tween.get(f.getSprite()).to({y:f.getY()+16},300)};this._getRandomBall=
function(){var a;if(!0===this._checkIfAllColorsNotAvailable())return null;do{var d=Math.floor(Math.random()*e),c=!1;if(!0===g[d]){a=new CBall(d,m);break}}while(!1===c);return a};this._checkIfAllColorsNotAvailable=function(){for(var a=!0,d=0;d<g.length;d++)!0===g[d]&&(a=!1);return a};this._nextShoot=function(){null!==d&&d.unload();d=f;d.changePos(b/2-25,c/2+20);d.getSprite().mask=q;f=this._getRandomBall();f.changePos(120,c/2-12);f.getSprite().mask=p;var a=this;createjs.Tween.get(d.getSprite()).to({y:d.getY()+
25},300).call(function(){a._onBallReady()});createjs.Tween.get(f.getSprite()).to({y:f.getY()+16},300)};this.colorCleared=function(a){g[a]=!1;d.getIndex()===a&&(d.unload(),d=this._getRandomBall(),null!==d&&(d.changePos(b/2-25,c/2+45),d.getSprite().mask=q));f.getIndex()===a&&(f.unload(),f=this._getRandomBall(),null!==f&&(f.changePos(120,c/2+4),f.getSprite().mask=p))};this._onBallReady=function(){a=!0};this.getCurrentBall=function(){a=!1;var e=d;this._nextShoot();return e};this.getX=function(){return m.x};
this.getY=function(){return m.y};this.getRotation=function(){return m.rotation};this.canShoot=function(){return a};this._init()}
function CGfxButton(a,b,c){var e,g,d=[],f;this._init=function(a,d,c){e=[];g=[];f=new createjs.Bitmap(c);f.x=a;f.y=d;f.regX=c.width/2;f.regY=c.height/2;s_oStage.addChild(f);this._initListener()};this.unload=function(){f.off("mousedown",this.buttonDown);f.off("pressup",this.buttonRelease);s_oStage.removeChild(f)};this.setVisible=function(a){f.visible=a};this._initListener=function(){f.on("mousedown",this.buttonDown);f.on("pressup",this.buttonRelease)};this.addEventListener=function(a,d,c){e[a]=d;g[a]=
c};this.addEventListenerWithParams=function(a,c,b,f){e[a]=c;g[a]=b;d=f};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but");f.scaleX=1;f.scaleY=1;e[ON_MOUSE_UP]&&e[ON_MOUSE_UP].call(g[ON_MOUSE_UP],d)};this.buttonDown=function(){f.scaleX=.9;f.scaleY=.9;e[ON_MOUSE_DOWN]&&e[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN],d)};this.setPosition=function(a,d){f.x=a;f.y=d};this.setX=function(a){f.x=a};this.setY=function(a){f.y=a};this.getButtonImage=function(){return f};
this.getX=function(){return f.x};this.getY=function(){return f.y};this._init(a,b,c);return this}
function CGame(a){var b=!1,c,e,g,d=1,f,l,q,p,m=-1,s,n,x,v,w,C,h,k,t,r,y=null,G=null,z=null,u,D,A,E,B,H,F;this._init=function(){s_oBezier=new CBezier;F=new createjs.Container;D=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_game"));F.addChild(D);s_oStage.addChild(F);u=new CHero;p=0;B=new createjs.Container;E=new createjs.Container;H=new createjs.Container;this.reset();s_oStage.addChild(B);s_oStage.addChild(E);s_oStage.addChild(H);A=new CInterface;if(!1===s_bMobile){var a=this;s_oStage.addEventListener("stagemousemove",
function(d){a._onMouseMove(d.stageX,d.stageY)})}b=!0};this.unload=function(){b=!1;clearInterval(x);createjs.Sound.stop();A.unload();u.unload();s_oStage.removeAllChildren()};this.reset=function(){c=!0;g=e=!1;q=s_oLevelSettings.getBallSpeedForLevel(d);l=s_oLevelSettings.getBallNumberForLevel(d);w=s_oLevelSettings.getBallColorsForLevel(d);BALL_ROLLING_IN=Math.floor(.33*l);s=0;f=n=1;C=0;u.reset(s_oLevelSettings.getHeroPosForLevel(d),w);null!==G&&(B.removeChild(G),B.removeChild(z));this._initCurve();this._initBall()};
this._normalize=function(a){var d=this._length(a);return 0<d?{x:a.x/d,y:a.y/d}:a};this._length=function(a){return Math.sqrt(a.x*a.x+a.y*a.y)};this._dotProductV2=function(a,d){return a.x*d.x+a.y*d.y};this._angleBetweenVectors=function(a,d){var c=Math.acos(this._dotProductV2(a,d)/(this._length(a)*this._length(d)));return!0===isNaN(c)?0:c};this._rot90CW=function(a){return{x:a.y,y:-a.x}};this._rot90CCW=function(a){return{x:-a.y,y:a.x}};this._rotateVector2D=function(a,d){var c=d.x*Math.cos(a)+d.y*Math.sin(a),
e=d.x*-Math.sin(a)+d.y*Math.cos(a);return{x:c,y:e}};this._initCurve=function(){var a,c;a=s_oLevelSettings.getCurveForLevel(d);var e=new createjs.Graphics;e.setStrokeStyle(2);e.beginStroke("#fff");e.moveTo(a[0][0],a[0][1]);for(c=1;c<a.length-2;++c)e.quadraticCurveTo(a[c][0],a[c][1],(a[c][0]+a[c+1][0])/2,(a[c][1]+a[c+1][1])/2);e.quadraticCurveTo(a[c][0],a[c][1],a[c+1][0],a[c+1][1]);k=[];for(c=0;c<a.length-2;++c)for(var b=0===c?new createjs.Point(a[0][0],a[0][1]):new createjs.Point((a[c][0]+a[c+1][0])/
2,(a[c][1]+a[c+1][1])/2),f=new createjs.Point(a[c+1][0],a[c+1][1]),g=c<=a.length-4?new createjs.Point((a[c+1][0]+a[c+2][0])/2,(a[c+1][1]+a[c+2][1])/2):new createjs.Point(a[c+2][0],a[c+2][1]),b=s_oBezier.init(b,f,g,STEP_LENGTH),f=1;f<=b;++f)g=s_oBezier.getAnchorPoint(f),k.push(g);e.setStrokeStyle(4);e.beginStroke("#68b1e2");e.beginFill("#c8e1f5");b={x:k[1][0]-k[0][0],y:k[1][1]-k[0][1]};b=this._normalize(b);b=this._rot90CW(b);b.x*=16;b.y*=16;b.x+=k[0][0];b.y+=k[0][1];a=b.x;c=b.y;e.moveTo(b.x,b.y);for(f=
1;f<k.length-1;f++)b={x:k[f+1][0]-k[f][0],y:k[f+1][1]-k[f][1]},b=this._normalize(b),b=this._rot90CW(b),b.x*=16,b.y*=16,b.x+=k[f][0],b.y+=k[f][1],e.lineTo(b.x,b.y);e.lineTo(b.x,b.y);b={x:k[k.length-1][0]-k[k.length-2][0],y:k[k.length-1][1]-k[k.length-2][1]};b=this._normalize(b);b=this._rot90CCW(b);b.x*=16;b.y*=16;b.x+=k[k.length-1][0];b.y+=k[k.length-1][1];e.lineTo(b.x,b.y);for(f=k.length-2;1<f;f--)b={x:k[f][0]-k[f-1][0],y:k[f][1]-k[f-1][1]},b=this._normalize(b),b=this._rot90CCW(b),b.x*=16,b.y*=16,
b.x+=k[f][0],b.y+=k[f][1],e.lineTo(b.x,b.y);e.lineTo(a,c);e.endFill();G=new createjs.Shape(e);B.addChild(G);e=k.length;a=s_oSpriteLibrary.getSprite("end_path");z=new createjs.Bitmap(a);z.x=k[e-9][0];z.y=k[e-9][1];z.regX=a.width/2;z.regY=a.height/2;B.addChild(z)};this._initBall=function(){h=[];var a=this.getRandomBall();h.unshift(a);a.setPos(16,k);m=STATE_GAME_ROLL_IN};this.getRandomBall=function(){l--;var a=Math.floor(Math.random()*w);return new CBall(a,E)};this._pushNextBall=function(a,b){var d=
[];d.push(h[a]);for(var l=a;l<h.length-1;++l)if(16>=h[l+1].getFotogram()-h[l].getFotogram())16>h[l+1].getFotogram()-h[l].getFotogram()&&h[l+1].setPos(h[l].getFotogram()+16,k),d.push(h[l+1]);else break;for(l=0;l<d.length;++l)d[l].increasePos(b,k);if(h[h.length-1].getFotogram()>=k.length-17){c=!1;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack.pause(),createjs.Sound.play("game_over").addEventListener("complete",this._onSoundGameOverComplete);s_oStage.removeEventListener("stagemousemove");
g=e=!1;f=1;h[h.length-1].unload();h.splice(h.length-1,1);m=STATE_GAME_ROLL_OUT}};this.onIntroduceBall=function(){if(0!==h.length&&(s_oGame._pushNextBall(0,1),32===h[0].getFotogram()&&0!==l)){var a=s_oGame.getRandomBall();h.unshift(a);a.setPos(16,k)}};this.shoot=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("shot");var a=(u.getRotation()+90)*Math.PI/180,b=u.getCurrentBall();b.changePos(u.getX()+60*Math.cos(a),u.getY()+60*Math.sin(a));E.addChild(b.getSprite());b.setContainer(E);
t.push([b,a]);m=STATE_GAME_SHOOTING};this._checkCollision=function(a){a=a[0];for(var b=0;b<h.length;++b)if((h[b].getX()-a.getX())*(h[b].getX()-a.getX())+(h[b].getY()-a.getY())*(h[b].getY()-a.getY())<=BALL_DIAMETER_SQUARE)return b;return-1};this._insertBall=function(a,b,c){var d;"next"===c?(d=h[b].getFotogram()+16,h[b+1]&&32>h[b+1].getFotogram()-h[b].getFotogram()&&(r.push([a,h[b+1]]),e=!0)):h[b-1]&&32>h[b].getFotogram()-h[b-1].getFotogram()?(d=h[b-1].getFotogram()+16,r.push([a,h[b]]),e=!0):d=h[b].getFotogram()-
16;b=k[d][0];c=k[d][1];var f=this;createjs.Tween.get(a.getSprite()).to({x:b,y:c},200).call(function(){f.motionFinished(a,d)})};this.motionFinished=function(a,b){for(var c,d=0;d<h.length;++d){if(h[d].getFotogram()>b){c=d;break}d===h.length-1&&(c=d+1)}r.splice(r.indexOf(a),1);a.setPos(b,k);h.splice(c,0,a);h[c-1]&&h[c-1].getIndex()===h[c].getIndex()&&17<h[c].getFotogram()-h[c-1].getFotogram()&&this._addToBallAttracted(h[c]);h[c+1]&&h[c+1].getIndex()===h[c].getIndex()&&17<h[c+1].getFotogram()-h[c].getFotogram()&&
this._addToBallAttracted(h[c+1]);this._clearCheck(c,!0)};this._addToBallAttracted=function(a){null===y&&(y=[]);y.push(a);setTimeout(function(){g=!0},400)};this._clearCheck=function(a,b){var c=[];c.push(h[a]);for(var d=h[a].getIndex(),e=a+1;h[e];)if(h[e].getIndex()===d)if(17>=h[e].getFotogram()-h[e-1].getFotogram())c.push(h[e]),++e;else if(b)break;else c.push(h[e]),++e;else break;for(e=a-1;h[e];)if(h[e].getIndex()===d)if(17>=h[e+1].getFotogram()-h[e].getFotogram())c.push(h[e]),--e;else if(b)break;
else c.push(h[e]),--e;else break;++e;2<c.length&&b&&this._clearBall(e,c);return c.length};this._attract=function(){if(0!==y.length)for(var a=0;a<y.length;++a){var b=h.indexOf(y[a]);if(-1!==b&&h[b-1])if(y[a].getIndex()===h[b-1].getIndex()){var c=19<y[a].getFotogram()-h[b-1].getFotogram()?3:y[a].getFotogram()-h[b-1].getFotogram()-16;this._pushNextBall(b,-c);16>=y[a].getFotogram()-h[b-1].getFotogram()&&(f++,y.splice(a,1),this._clearCheck(b-1,!0),0===y.length&&(g=!1,f=1))}else y.splice(a,1),s>n&&(n=s),
s=0}else g=!1,f=1};this._checkPushCollision=function(){if(0!==r.length)for(var a=0;a<r.length;++a){for(var b=(r[a][0].getX()-r[a][1].getX())*(r[a][0].getX()-r[a][1].getX())+(r[a][0].getY()-r[a][1].getY())*(r[a][0].getY()-r[a][1].getY()),b=b<BALL_DIAMETER_SQUARE?!0:!1,c=0;b;)++c,b=(r[a][0].getX()-k[r[a][1].getFotogram()+c][0])*(r[a][0].getX()-k[r[a][1].getFotogram()+c][0])+(r[a][0].getY()-k[r[a][1].getFotogram()+c][1])*(r[a][0].getY()-k[r[a][1].getFotogram()+c][1]),b=b<BALL_DIAMETER_SQUARE?!0:!1;b=
h.indexOf(r[a][1]);-1!==b&&this._pushNextBall(b,c)}else e=!1};this._clearBall=function(a,b){++s;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("combo");for(var d=0,e=0;e<b.length;++e)b[e].explode(),d+=COMBO_VALUE;d*=f;p+=d;A.refreshScore(p);h.length===b.length&&(c=!1,v=h[h.length-1].getFotogram(),setTimeout(this._gamePass,600),!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)&&(s_oSoundtrack.pause(),createjs.Sound.play("win").addEventListener("complete",this._onSoundGameOverComplete));h.splice(a,
b.length);0===l&&this._checkColor(b[0].getIndex());h[a-1]&&h[a]&&h[a-1].getIndex()===h[a].getIndex()?(3>this._clearCheck(a,!1)&&(s>n&&(n=s),s=0),this._addToBallAttracted(h[a])):(s>n&&(n=s),s=0)};this._gamePass=function(){x=setInterval(s_oGame._extraScore,q)};this._extraScore=function(){v+16<k.length-17?(v+=16,new CExtraScore(k[v][0],k[v][1],H),p+=EXTRA_SCORE,A.refreshScore(p)):(clearInterval(x),s_oStage.removeEventListener("stagemousemove"),c=!1,d++,d>s_oLevelSettings.getNumLevels()?A.win(p):A.nextLevel(d,
p))};this._checkColor=function(a){for(var b=0;b<h.length;++b)if(h[b].getIndex()===a)return;for(b=0;b<t.length;++b)if(t[b].getIndex()===a)return;u.colorCleared(a)};this.nextLevel=function(){F.removeChild(D);D=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_game"));F.addChild(D);this.reset();b=!0};this.onShot=function(a,b){if(c&&u.canShoot()){if(s_bMobile){var d=a-u.getX(),e=b-u.getY(),d=Math.atan2(e,d);u.rotate(180*d/Math.PI-90)}this.shoot()}};this._onMouseMove=function(a,b){var c=a-u.getX(),d=
b-u.getY(),c=Math.atan2(d,c);u.rotate(180*c/Math.PI-90)};this.onExit=function(){createjs.Sound.stop();this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this._onSoundGameOverComplete=function(){s_oSoundtrack.resume()};this._updateMove=function(){C+=s_iTimeElaps;C>q&&(C=0,this.onIntroduceBall())};this._updateRollOut=function(){for(var a=h.length-1;0<=a;--a)h[a].getFotogram()>k.length-17?(h[a].unload(),h.splice(a,1),0===h.length&&(m=-1,A.gameOver(p))):h[a].increasePos(8,k)};this._updateRollIn=
function(){if(h.length<BALL_ROLLING_IN){for(var a=0;a<h.length;++a)h[a].increasePos(4,k);32===h[0].getFotogram()&&(a=this.getRandomBall(),h.unshift(a),a.setPos(16,k))}else m=-1,t=[],r=[],u.start(),m=STATE_GAME_BALL_MOVE};this._updateShooting=function(){if(0!==t.length)for(var a=0;a<t.length;++a)if(0<t[a][0].getX()&&t[a][0].getX()<CANVAS_WIDTH&&0<t[a][0].getY()&&t[a][0].getY()<CANVAS_HEIGHT){var b=this._checkCollision(t[a]);if(-1===b)t[a][0].increasePosWithNumbers(Math.cos(t[a][1])*BALL_SHOOTED_SPEED,
Math.sin(t[a][1])*BALL_SHOOTED_SPEED);else{var c=t[a][0],d=t[a][1],e=Math.sqrt((h[b].getX()-c.getX())*(h[b].getX()-c.getX())+(h[b].getY()-c.getY())*(h[b].getY()-c.getY()));t[a][0].decreasePos((BALL_DIAMETER-e)*Math.cos(d),(BALL_DIAMETER-e)*Math.sin(d));var d=k[h[b].getFotogram()-BALL_RADIUS][0],e=k[h[b].getFotogram()-BALL_RADIUS][1],d=Math.sqrt((c.getX()-d)*(c.getX()-d)+(c.getY()-e)*(c.getY()-e)),e=k[h[b].getFotogram()+BALL_RADIUS][0],f=k[h[b].getFotogram()+BALL_RADIUS][1],c=Math.sqrt((c.getX()-e)*
(c.getX()-e)+(c.getY()-f)*(c.getY()-f));this._insertBall(t[a][0],b,d>c?"next":"previous");t.splice(a,1)}}else t[a][0].unload(),t.splice(a,1);else m=-1};this.update=function(){if(!1!==b)switch(!0===g&&this._attract(),!0===e&&this._checkPushCollision(),m){case STATE_GAME_ROLL_IN:this._updateRollIn();break;case STATE_GAME_ROLL_OUT:this._updateRollOut();break;case STATE_GAME_SHOOTING:this._updateShooting();this._updateMove();break;default:this._updateMove()}};s_oGame=this;COMBO_VALUE=a.combo_value;EXTRA_SCORE=
a.extra_score;this._init()}var s_oGame,s_oBezier;function CExtraScore(a,b,c){var e;this._init=function(a,b,c){var l=s_oSpriteLibrary.getSprite("extra_score");e=new createjs.Bitmap(l);e.x=a;e.y=b;e.regX=l.width/2;e.regY=l.height/2;e.alpha=0;c.addChild(e);createjs.Tween.get(e).to({alpha:1},1E3).call(function(){c.removeChild(e)})};this._init(a,b,c)}
function CEndPanel(a){var b,c,e,g,d,f;this._init=function(a){b=new createjs.Bitmap(a);b.x=0;b.y=0;d=new createjs.Text("","bold 48px Chewy","#000");d.x=CANVAS_WIDTH/2+2;d.y=CANVAS_HEIGHT/2-138;d.textAlign="center";g=new createjs.Text("","bold 48px Chewy","#ffffff");g.x=CANVAS_WIDTH/2;g.y=CANVAS_HEIGHT/2-140;g.textAlign="center";c=new createjs.Text("","bold 32px Chewy","#000");c.x=CANVAS_WIDTH/2+1;c.y=CANVAS_HEIGHT/2+11;c.textAlign="center";e=new createjs.Text("","bold 32px Chewy","#ffffff");e.x=CANVAS_WIDTH/
2;e.y=CANVAS_HEIGHT/2+10;e.textAlign="center";f=new createjs.Container;f.alpha=0;f.visible=!1;f.addChild(b,c,e,d,g);s_oStage.addChild(f)};this.unload=function(){f.off("mousedown",this._onExit);s_oStage.removeChild(f)};this._initListener=function(){f.on("mousedown",this._onExit)};this.show=function(a,b){b?(d.text=TEXT_CONGRATS,g.text=TEXT_CONGRATS):(d.text=TEXT_GAMEOVER,g.text=TEXT_GAMEOVER);c.text=TEXT_FINAL_SCORE+": "+a;e.text=TEXT_FINAL_SCORE+": "+a;f.visible=!0;var p=this;createjs.Tween.get(f).to({alpha:1},
500).call(function(){p._initListener()});$(s_oMain).trigger("save_score",a)};this._onExit=function(){f.off("mousedown");s_oGame.onExit()};this._init(a);return this}
function CBezier(){var a,b,c,e,g,d,f,l,q,p,m,s;this.init=function(n,x,v,w){a=n;b=x;c=v;g=a.x-2*b.x+c.x;d=a.y-2*b.y+c.y;f=2*b.x-2*a.x;l=2*b.y-2*a.y;q=4*(g*g+d*d);p=4*(g*f+d*l);m=f*f+l*l;s=this._length(1);e=Math.floor(s/w);s%w>w/2&&e++;return e};this._speed=function(a){return Math.sqrt(q*a*a+p*a+m)};this._length=function(a){var b=Math.sqrt(m+a*(p+q*a)),c=2*q*a*b+p*(b-Math.sqrt(m)),d=Math.log(p+2*Math.sqrt(q)*Math.sqrt(m));a=Math.log(p+2*q*a+2*Math.sqrt(q)*b);return(2*Math.sqrt(q)*c+(p*p-4*q*m)*(d-a))/
(8*Math.pow(q,1.5))};this.invertL=function(a,b){var c=a,d;do{d=c-(this._length(c)-b)/this._speed(c);if(1E-6>Math.abs(c-d))break;c=d}while(1);return d};this.getAnchorPoint=function(d){if(0<=d&&d<=e){var f=d/e,f=this.invertL(f,f*s);d=(1-f)*(1-f)*a.x+2*(1-f)*f*b.x+f*f*c.x;var g=(1-f)*(1-f)*a.y+2*(1-f)*f*b.y+f*f*c.y,l=new createjs.Point((1-f)*a.x+f*b.x,(1-f)*a.y+f*b.y),f=new createjs.Point((1-f)*b.x+f*c.x,(1-f)*b.y+f*c.y),l=180*Math.atan2(f.y-l.y,f.x-l.x)/Math.PI;return[d,g,l]}return[]}}
function CBall(a,b){var c,e,g,d,f;this._init=function(a,b){c=a;e=0;f=b;var d=s_oSpriteLibrary.getSprite("ball_"+c);BALL_DIAMETER=d.width;BALL_DIAMETER_SQUARE=BALL_DIAMETER*BALL_DIAMETER;BALL_RADIUS=BALL_DIAMETER/2;d=new createjs.SpriteSheet({images:[d],frames:{width:BALL_DIAMETER,height:BALL_DIAMETER,regX:BALL_RADIUS,regY:BALL_RADIUS},animations:{move:[0,49]}});g=new createjs.Sprite(d);g.stop();f.addChild(g)};this.unload=function(){f.removeChild(d);f.removeChild(g)};this.nextFrame=function(){g.gotoAndStop(50===
g.currentFrame+1?0:g.currentFrame+1)};this.prevFrame=function(){g.gotoAndStop(0>g.currentFrame-1?49:g.currentFrame-1)};this.setPos=function(a,b){a>e?this.nextFrame():a<e&&this.prevFrame();e=a;g.x=b[e][0];g.y=b[e][1];g.rotation=b[e][2]-90};this.changePos=function(a,b){g.x=a;g.y=b};this.increasePosWithNumbers=function(a,b){g.x+=a;g.y+=b};this.decreasePos=function(a,b){g.x-=a;g.y-=b};this.increasePos=function(a,b){this.setPos(e+a,b)};this.setContainer=function(a){g.mask=null;f=a};this.explode=function(){var a=
{images:[s_oSpriteLibrary.getSprite("explosion")],frames:{width:62,height:62,regX:31,regY:31},animations:{show:[0,19],hide:[20]}},b=this,a=new createjs.SpriteSheet(a,"show");d=new createjs.Sprite(a);d.addEventListener("animationend",function(){b.onExplosionEnd()});f.addChild(d);d.x=g.x;d.y=g.y;d.gotoAndPlay("show");g.visible=!1};this.onExplosionEnd=function(){f.removeChild(d);f.removeChild(g)};this.rollInStage=function(){};this.getFotogram=function(){return e};this.getSprite=function(){return g};
this.getIndex=function(){return c};this.getX=function(){return g.x};this.getY=function(){return g.y};this._init(a,b)}
function CSpriteLibrary(){var a,b,c,e,g,d;this.init=function(f,l,q){c=b=0;e=f;g=l;d=q;a={}};this.addSprite=function(c,d){a.hasOwnProperty(c)||(a[c]={szPath:d,oSprite:new Image},b++)};this.getSprite=function(b){return a.hasOwnProperty(b)?a[b].oSprite:null};this._onSpritesLoaded=function(){g.call(d)};this._onSpriteLoaded=function(){e.call(d);++c===b&&this._onSpritesLoaded()};this.loadSprites=function(){for(var b in a)a[b].oSprite.oSpriteLibrary=this,a[b].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[b].oSprite.src=a[b].szPath};this.getNumSprites=function(){return b}};