/**	QUOTE FORM
*************************************************** **/

function mySelection()	 {	
        
        var buildingType = document.getElementById("building_type").value
        function AddElementResidQ() {
        document.getElementById("residentialQ").style.display = "block";}
        function AddElementCommQ() {
        document.getElementById("commercialQ").style.display = "block";}
        function AddElementCorpQ() {
        document.getElementById("corporateQ").style.display = "block";}
        function AddElementHybridQ() {
        document.getElementById("hybridQ").style.display = "block";}
    
        function RemoveElementResidQ() {
        document.getElementById("residentialQ").style.display = "none";}						
        function RemoveElementCommQ() {
        document.getElementById("commercialQ").style.display = "none";}						
        function RemoveElementCorpQ() {
        document.getElementById("corporateQ").style.display = "none";}						
        function RemoveElementHybridQ() {
        document.getElementById("hybridQ").style.display = "none";}		

        
       if	(buildingType === "residential")	{	//RESIDENTIAL SELECTED BLOCK
            console.log("selected")
            AddElementResidQ();
            RemoveElementCommQ();
            RemoveElementCorpQ();
            RemoveElementHybridQ();
        } else if	(buildingType === "commercial")	{	//COMMERCIAL SELECTED BLOCK
            console.log("selected")
            RemoveElementResidQ();
            AddElementCommQ();
            RemoveElementCorpQ();
            RemoveElementHybridQ();
        } else if	(buildingType === "corporate")	{	//CORPORATE SELECTED BLOCK
            console.log("selected")
            RemoveElementResidQ();
            RemoveElementCommQ();
            AddElementCorpQ();
            RemoveElementHybridQ();
        } else if	(buildingType === "hybrid")	{	//HYBRID SELECTED BLOCK
            console.log("selected")
            RemoveElementResidQ();
            RemoveElementCommQ();
            RemoveElementCorpQ();
            AddElementHybridQ();
        } else 	{	                                //DEFAULT SELECTED NONE
            console.log("selected")
            RemoveElementResidQ();
            RemoveElementCommQ();
            RemoveElementCorpQ();
            RemoveElementHybridQ();
        }
        
}

 function Quantity_residential() {
    //Number of appart
           var nbAppart = document.getElementById("residA").value || 0 ;
    //Number of level
        var nbLevel = document.getElementById("residB").value || 0 ;
    //Number of Basement  
        var nbBasement = document.getElementById("residC").value || 0;
    

//RESIDENTIAL CALCUL							
    
        //Occurence of 6 Appart by Level 
        var OccurAppartLevel = Math.ceil(residA /(residB * 6) );
    									   
        var columns = Math.ceil($residB / 20);
    
        var elevatorsEstimate = (OccurAppartLevel) * (columns);
    	
        if(elevatorsEstimate > 0){
           document.getElementById("elevatorsNb").value= elevatorsEstimate;
    }else {
           document.getElementById("elevatorsNb").value = 0;
        }
        return elevatorsEstimate;
}

function Quantity_commercial() {
    //Number of level
        var nbLevel = document.getElementById("commA").value || 0 ;
    //Number of Basement      
        var nbBasement = document.getElementById("commB").value || 0;
    //Number of Business 
        var nbBusiness = document.getElementById("commC").value || 0;
    //Number of Parking 
        var nbParking = document.getElementById("commD").value || 0;
    //Number of elevator cage 
        var nbElevatorCage = document.getElementById("commeE").value || 0;
                                

//COMMERCIAL CALCUL																	
                                    
    //Compute and return qty of elevators needed
    var  elevatorsEstimate = nbElevatorCage;
    //MINIMU VALUE BY INPUT
    if (nbLevel != "" && nbBasement != ""   && nbBusiness  != "" && nbParking !="" &&  nbElevatorCage !=0  ){
    //Value selector for elevators qty 		
    document.getElementById("elevatorsNb").value = elevatorsEstimate;
   }else {
            document.getElementById("elevatorsNb").value = 0;
            }
    return elevatorsEstimate;
}										

function Resultqty_Elevators_quote() {
    buildingType = mySelection();

     //var Hy =  document.getElementById("qty_Level").value  || 0 ;
     var nbLevel = Number(document.getElementById("corporateA").value || 0  );
     //var Hz =   document.getElementById("qty_Base").value;
     var nbBasement = Number(document.getElementById("corporateB").value || 0 );
     var nbParking = document.getElementById("corporateC").value || 0 ;
     var nbBusiness = document.getElementById("corporateD").value || 0 ;
     var nbOccupants = document.getElementById("corporateE").value || 0 ;
     var nbHours = document.getElementById("hybridE").value || 0 ;
     var Min = nbLevel + nbBasement;							   
    
     var totalNbOccupants = Math.ceil(corporateE*(nbLevel + nbBasement)); 	
        var elevatorsEstimate = Math.ceil(totalNbOccupants/1000 ); 								
                                         
     var columns =  Math.ceil((nbLevel + nbBasement)/20);
  
     var qty_Eleva =  (elevatorsEstimate / columns);
    
     var elevatorsEstimate =  (qty_Eleva * columns);        
     //console.log(service);							
     if (nbLevel != "" && nbBasement != "" && nbParking !="" &&  nbBusiness !="" && nbOccupants != "" && Min != 0 ) {

     //Value selector for elevators qty 		
    
         document.getElementById("elevatorsNb").value = elevatorsEstimate;
     } else {
             document.getElementById("elevatorsNb").value = 0;
     }
             return elevatorsEstimate;
    }			
     
function Price() {

        var buildingType = mySelection();						 
                 
        if (buildingType === "residential")  {
             var elevatorQuote = returnQuantity_residential();
        }
         if (buildingType === "commercial")  {
             var elevatorQuote = returnQuantity_commercial();
        }								
         if (buildingType === "corporate" || buildingType  === "hybrid")  {
             var elevatorQuote = Resultqty_Elevators_quote();
        }
        var install_Rate;							   
        var Total;
             
        if  (document.getElementById("standard").checked)	{						 
        document.getElementById("elevatorCost").value="7565.00";
        install_Rate = (7565.00 * (10/100) * elevatorQuote).toFixed(2);
        Total = (7565.00 * 1.10 * elevatorQuote).toFixed(2);//ok
        document.getElementById("installationCost").value = install_Rate ;
        document.getElementById("totalCost").value = Total;
        } 	

        if  (document.getElementById("premium").checked)	{						 
        document.getElementById("elevatorCost").value="12345.00";
        install_Rate = (12345.00 * (13/100) * elevatorQuote).toFixed(2);       
        Total = (12345.00 * 1.13 * elevatorQuote).toFixed(2);//ok
        document.getElementById("installationCost").value = install_Rate ;
        document.getElementById("totalCost").value = Total;
        } 	

        if  (document.getElementById("excelium").checked)	{						 
        document.getElementById("elevatorCost").value="15400.00";
        install_Rate = (15400.00 * (16/100) * elevatorQuote).toFixed(2);
        Total = (15400.00 * 1.16 * elevatorQuote).toFixed(2);//ok
        document.getElementById("installationCost").value = install_Rate ;
        document.getElementById("totalCost").value = Total;
        }								
    } 
           
  





      
    
 