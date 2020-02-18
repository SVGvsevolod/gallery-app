var images=[["images/01.png","Nepgear&Neptune Ascension"],["images/02.jpg","Nep Idols"],["images/03.png","HDN Purple Heart Alternate"],["images/04.jpg","Noire and Uni Idols"],["images/05.jpg","HDNA-Maid Noire Returns"],["images/06.png","NoireAndUni"],["images/07.png","Xbox360 controller reference"],["images/08.jpg","Re;Birth3 New CG"],["images/09.jpg","SNRPG-Midnight Gaming"],["images/10.png","Vert - All According To Plan"],["images/11.png","HyperdimensionNeptuniaTheAnimation"],["images/12.png","HyperdimensionNeptuniaTheAnimation"],["images/13.png","HyperdimensionNeptuniaTheAnimation"],["images/14.jpg","CPUs Yukata"],["images/15.png","HDNCastChibiGroup"],["images/16.png","Word to Relay"],["images/17.png","IF swimsuit"],["images/18.png","Hyperdimension Neptunia Re;Birth1 - Normal End"],["images/19.png","HDNAE3freefood"],["images/20.png","Hyperdimension Neptunia Victory - Normal End"],["images/21.png","Memories"],["images/22.png","Planeptune"],["images/23.png","Lastation"],["images/24.png","Lowee"],["images/25.png","Leanbox"],["images/26.png","Audience Chamber"],["images/27.png","Basilicom Interior"],["images/28.png","Downtown Planeptune"],["images/29.png","Downtown Lastation"],["images/30.png","Downtown Leanbox"],["images/31.png","Neptower Observatory"],["images/32.png","Wetlands"],["images/33.png","Mountains"],["images/34.png","Cyber Space"],["images/35.png","Virtua Forest"],["images/36.png","Cave (CG)"],["images/37.png","Magma Cave"],["images/38.jpg","HDNOVA-Adult Neptune Thinking"],["images/39.png","Lowee Castle Interior"],["images/40.png","Planeptune (Night)"],["images/41.png","Lastation (Night)"],["images/42.png","Lowee (Night)"],["images/43.png","Leanbox (Night)"],["images/44.png","Park"],["images/45.png","Under the Night Sky"]],gallery=[];

for(var i=0;i<15;i++)
    gallery[i] = images[Math.floor(Math.random()*45)];

addEventListener("load",function(){
    var a = document.getElementById("gallery");
    for(var i=0;i<gallery.length;i++){
        var b = document.createElement("div");
        var c = document.createElement("div");
        var d = document.createElement("div");
        b.className = "gallery_item";
        c.className = "gallery_item_image";
        d.className = "gallery_item_title";
        c.appendChild(new Image).src = gallery[i][0];
        d.innerHTML = gallery[i][1];
        a.appendChild(b).appendChild(c).parentElement.appendChild(d);
    }
});