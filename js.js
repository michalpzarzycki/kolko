var liczba=0;
 var kolko;
var tablica = new Array(9);
var gracz_1=0;
var gracz_2=0;
var name;
tablica[0]="empty";
tablica[1]="empty";
tablica[2]="empty";
tablica[3]="empty";
tablica[4]="empty";
tablica[5]="empty";
tablica[6]="empty";
tablica[7]="empty";
tablica[8]="empty";


function Wynik(name) {
    if(name=="kolko") gracz_1++;
    else if(name=="krzyzyk") gracz_2++;
    
    document.getElementById("g1").innerHTML="Wygrane gracza nr 1: " + gracz_1;
    document.getElementById("g2").innerHTML="Wygrane gracza nr 2: " + gracz_2;
}



function Blokuj() {
    for(var i=0; i<9; i++) {
    document.getElementById("area"+i).innerHTML="<img src=\"img/"+tablica[i]+".png\">";
    }
    alert("Kliknij od nowa");
    
}


function Start() {
    for(var i=0; i<9; i++){
  document.getElementById("area"+i).innerHTML="<img  onclick=\"Decyzja("+i+")\" src=\"img/"+"empty"+".png\">";
        tablica[i]="empty";
        liczba=0;
       
   }    
}


function KtoTera(liczba) {
  
    if(liczba%2==0) kolko=true;
    else kolko=false;
    
    return kolko;
}  

function SprawdzKtoWygral(tablica) {
    
    if((tablica[0]==="cross" && tablica[1]==="cross" && tablica[2]==="cross") || (tablica[0]==="circle" && tablica[1]==="circle" && tablica[2]==="circle")){
        
       
       if(tablica[0]==="cross"){  document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KRZYŻYK";                   
        Wynik("krzyzyk");}
                               
       else {document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KÓŁKO";  
        Wynik("kolko")}
    Blokuj();
    }
      
    
    else if((tablica[3]==="cross" && tablica[4]==="cross" && tablica[5]==="cross") || (tablica[3]==="circle" && tablica[4]==="circle" && tablica[5]==="circle")){
          if(tablica[3]==="cross"){  document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KRZYŻYK";                   
        Wynik("krzyzyk");}
                               
       else {document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KÓŁKO";  
        Wynik("kolko")}
    Blokuj();
    }
        
    else if((tablica[6]==="cross" && tablica[7]==="cross" && tablica[8]==="cross") || (tablica[6]==="circle" && tablica[7]==="circle" && tablica[8]==="circle")){
           if(tablica[6]==="cross"){  document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KRZYŻYK";                   
        Wynik("krzyzyk");}
                               
       else {document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KÓŁKO";  
        Wynik("kolko")}
    Blokuj();
    }
        
     else if((tablica[0]==="cross" && tablica[3]==="cross" && tablica[6]==="cross") || (tablica[0]==="circle" && tablica[3]==="circle" && tablica[6]==="circle")){
          if(tablica[0]==="cross"){  document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KRZYŻYK";                   
        Wynik("krzyzyk");}
                               
       else {document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KÓŁKO";  
        Wynik("kolko")}
    Blokuj();
    }
        
     else if((tablica[1]==="cross" && tablica[4]==="cross" && tablica[7]==="cross") || (tablica[1]==="circle" && tablica[4]==="circle" && tablica[7]==="circle")){
           if(tablica[1]==="cross"){  document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KRZYŻYK";                   
        Wynik("krzyzyk");}
                               
       else {document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KÓŁKO";  
        Wynik("kolko")}
    Blokuj();
    }
        
     else if((tablica[2]==="cross" && tablica[5]==="cross" && tablica[8]==="cross") || (tablica[2]==="circle" && tablica[5]==="circle" && tablica[8]==="circle")){
          if(tablica[2]==="cross"){  document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KRZYŻYK";                   
        Wynik("krzyzyk");}
                               
       else {document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KÓŁKO";  
        Wynik("kolko")}
    Blokuj();
    }
        
     else if((tablica[0]==="cross" && tablica[4]==="cross" && tablica[8]==="cross") || (tablica[0]==="circle" && tablica[4]==="circle" && tablica[8]==="circle")){
          if(tablica[0]==="cross"){  document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KRZYŻYK";                   
        Wynik("krzyzyk");}
                               
       else {document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KÓŁKO";  
        Wynik("kolko")}
    Blokuj();
    }
        
     else if((tablica[2]==="cross" && tablica[4]==="cross" && tablica[6]==="cross") || (tablica[2]==="circle" && tablica[4]==="circle" && tablica[6]==="circle")){
         if(tablica[2]==="cross"){  document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KRZYŻYK";                   
        Wynik("cross");}
                               
       else {document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"ZWYCIĘZCĄ ZOSTAJE KÓŁKO";  
        Wynik("krzyzyk")}
    Blokuj();
    }
        
        
     else if ((tablica[0]!=="empty" && tablica[0]!=="empty" && tablica[1]!=="empty" && tablica[2]!=="empty" && tablica[3]!=="empty" && tablica[4]!=="empty" && tablica[5]!=="empty" && tablica[6]!=="empty" && tablica[7]!=="empty" && tablica[8]!=="empty")){
           Blokuj();
         
          alert("REMIS");
          }  
    
    
    
}



function Decyzja(nr_pola) {
    KtoTera(liczba);
    if(kolko==true){
    document.getElementById("area"+nr_pola).innerHTML="<img  src=\"img/"+"circle"+".png\">";
         document.getElementById("gracz").innerHTML="<img  src=\"img/"+"cross"+".png\">"+"Teraz krzyżyk";
    
      tablica[nr_pola]="circle";
    
        liczba++;
        
    kolko=false}
    else { 
        document.getElementById("area"+nr_pola).innerHTML="<img  src=\"img/"+"cross"+".png\">";
         document.getElementById("gracz").innerHTML="<img  src=\"img/"+"circle"+".png\">"+"Teraz kołko";
           tablica[nr_pola]="cross";

    liczba++;}
    
    SprawdzKtoWygral(tablica);
    
    
}


