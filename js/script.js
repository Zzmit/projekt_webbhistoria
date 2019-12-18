var show60talet = false;
var show70talet = false;
function open60talet(){
    if(!show60talet){
    document.getElementById("60talet").innerHTML = `<h1 onclick="open60talet()">viktigaste händelsn 60-talet</h1>
    <br>
    <h3 >1969 Starten på internet heter Arpanet</h3>
    
    <p>29 oktober 1969 skickas det första meddelandet på det som i dag är internet.
    <br>
    <br>
    Vid den tiden heter nätverket Arpanet, och drivs av det amerikanska försvaret. I september 1969 länkas Arpanets första dator med en sprillans ny, specialbyggd maskin, en IMP – Interface Message Processor (som ni ser på bilden här ovanför). Och några veckor senare, 29 oktober klockan halv elva på kvällen skickar forskargruppen på UCLA, ledd av professor Leonard Kleinrock, iväg ett meddelande till en dator på Stanford drygt 50 mil därifrån. Det innehåller endast bokstäverna L och O (forskarna hade tänkt skriva LOGIN men servern kraschade). 
    <br>
    <br>
    Arpanet är ett av många nätverk som utvecklas under 60-talet i både USA, England och Frankrike.</p>`;
    show60talet = true;
    }
    else{
        document.getElementById("60talet").innerHTML = `<h1 onclick="open60talet()">viktigaste händelsn 60-talet</h1>`;
        show60talet = false;
        
    }

}
function open70talet(){
    if(!show70talet){
        document.getElementById("70talet").innerHTML = `<h1 onclick="open70talet()">viktigaste händelsn 70-talet</h1>
        <br>
      <h3>1972 Svensk upptäckt byggs in i Arpanet</h3>
      <p>När det svenska elnätet digitaliseras inspireras man av Arpanet. Men allt går inte som det är tänkt. Det blir början på en bit svensk internethistoria – som når världen.
        <br> <br>
        Den 9 november 1965 är en ovanligt kall dag i nordöstra USA. När alla vrider igång sina elektroniska apparater samtidigt får elnätet nog. 25 miljoner människor blir utan ström en hel dag.
        <br><br>
        Händelsen skickar chockvågor ända till Sverige där överingenjören Lars Gustafsson är chef för Vattenfalls driftavdelning. Därmed har han ansvar över hela landets kraftnät, som även sitter ihop med det finska, norska och det danska. För att minska risken för liknande störningar beslutas att skapa ett datorbaserat övervakningssystem. Hittills har all kommunikation skett via telefon.</p>`;
        show70talet = true;
    }
    else{
        document.getElementById("70talet").innerHTML = `<h1 onclick="open70talet()">viktigaste händelsn 70-talet</h1>`;
        show70talet = false;
    }
}
