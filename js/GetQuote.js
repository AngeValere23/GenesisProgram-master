
	function AddElementResidQs1() {
	document.getElementById("ResidQs1").style.display = "block";}
	function AddElementResidQs2() {
	document.getElementById("ResidQs2").style.display = "block";}
	function AddElementResidQs3() {
	document.getElementById("ResidQs3").style.display = "block";}
	function AddElementCommQs1() {
	document.getElementById("CommQs1").style.display = "block";}
	function AddElementCommQs2() {
	document.getElementById("CommQs2").style.display = "block";}
	function AddElementCommQs3() {
	document.getElementById("CommQs3").style.display = "block";}
	function AddElementCorpHybQs1() {
	document.getElementById("CorpHybQs1").style.display = "block";}
	function AddElementCorpHybQs2() {
	document.getElementById("CorpHybQs2").style.display = "block";}
	function AddElementCorpHybQs3() {
	document.getElementById("CorpHybQs3").style.display = "block";}						
	function AddElementResidElevatorQty() {
	document.getElementById("ResidElevatorQty").style.display = "block";}
	function AddElementCommElevatorQty() {
	document.getElementById("CommElevatorQty").style.display = "block";}
	function AddElementCorpHybElevatorQty() {
	document.getElementById("CorpHybElevatorQty").style.display = "block";}
	
	function RemoveElementResidQs1() {
	document.getElementById("ResidQs1").style.display = "none";}						
	function RemoveElementResidQs2() {
	document.getElementById("ResidQs2").style.display = "none";}						
	function RemoveElementResidQs3() {
	document.getElementById("ResidQs3").style.display = "none";}						
	function RemoveElementCommQs1() {
	document.getElementById("CommQs1").style.display = "none";}						
	function RemoveElementCommQs2() {
	document.getElementById("CommQs2").style.display = "none";}						
	function RemoveElementCommQs3() {
	document.getElementById("CommQs3").style.display = "none";}						
	function RemoveElementCorpHybQs1() {
	document.getElementById("CorpHybQs1").style.display = "none";}						
	function RemoveElementCorpHybQs2() {
	document.getElementById("CorpHybQs2").style.display = "none";}						
	function RemoveElementCorpHybQs3() {
	document.getElementById("CorpHybQs3").style.display = "none";}						
	function RemoveElementResidElevatorQty() {
	document.getElementById("ResidElevatorQty").style.display = "none";}
	function RemoveElementCommElevatorQty() {
	document.getElementById("CommElevatorQty").style.display = "none";}
	function RemoveElementCorpHybElevatorQty() {
	document.getElementById("CorpHybElevatorQty").style.display = "none";}
	
	//DEFAULT 
	function mySelection()	 {	

		document.getElementById("qty_Pop").value = "";															  
		document.getElementById("qty_Appart").value = ""; 
		document.getElementById("qty_Base").value = ""; 
		document.getElementById("qty_Business").value = "";
		document.getElementById("qty_Eleva").value = "";								
		document.getElementById("qty_Level").value = "";
		document.getElementById("qty_loan").value = ""; 								
		document.getElementById("qty_Parking").value = "";								
		document.getElementById("qty_Hours").value = ""; 
		document.getElementById("returned_qty_Eleva").value = "";
		document.getElementById("hybrid").value = "";		
		document.getElementById("returned_qty_ElevaB").value = "";
		document.getElementById("PriceUnit").value = "";
		document.getElementById("InstallationCost").value = "";
		document.getElementById("Total").value = "";	
								
		if (choice_building_type()  === 0)  { 
			RemoveElementResidQs1();
			RemoveElementResidQs2();
			RemoveElementResidQs3();
			RemoveElementCommQs1();
			RemoveElementCommQs2();
			RemoveElementCommQs3();
			RemoveElementCorpHybQs1();
			RemoveElementCorpHybQs2();
			RemoveElementCorpHybQs3(); 
			RemoveElementResidElevatorQty();
			RemoveElementCommElevatorQty();
			RemoveElementCorpHybElevatorQty();
			}  
	//RESIDENTIAL		
		if	(choice_building_type() === 1)	{	
			AddElementResidQs1();
			AddElementResidQs2();
			AddElementResidQs3();
			AddElementResidElevatorQty()
			RemoveElementCommQs1();
			RemoveElementCommQs2();
			RemoveElementCommQs3();
			RemoveElementCorpHybQs1();
			RemoveElementCorpHybQs2();
			RemoveElementCorpHybQs3(); 
			RemoveElementCommElevatorQty();
			RemoveElementCorpHybElevatorQty();
			  
			} 
	//COMMERCIAL											
		if	(choice_building_type() === 2)	{								
			AddElementResidQs2();
			AddElementResidQs3();
			AddElementCommQs1();
			AddElementCommQs2();
			AddElementCommQs3();
			AddElementCommElevatorQty();
			RemoveElementResidQs1();
			RemoveElementCorpHybQs1();
			RemoveElementCorpHybQs2();
			RemoveElementCorpHybQs3(); 
			RemoveElementResidElevatorQty();
			RemoveElementCorpHybElevatorQty();
			}  
	//CORPORATE									
		if	(choice_building_type() === 3)	{												
			AddElementResidQs2();
			AddElementResidQs3();
			AddElementCommQs2();
			AddElementCorpHybQs1()
			AddElementCorpHybQs2()
			AddElementCorpHybElevatorQty()
			RemoveElementResidQs1();
			RemoveElementCommQs1();
			RemoveElementCommQs3();
			RemoveElementCorpHybQs3();
			RemoveElementResidElevatorQty();
			RemoveElementCorpHybElevatorQty();

		
			} 
	//HYBRID
		if	(choice_building_type() === 4)	{				
			AddElementResidQs2();
			AddElementResidQs3();
			AddElementCommQs1();
			AddElementCommQs2();
			AddElementCorpHybQs2()
			AddElementCorpHybQs3()
			AddElementCorpHybElevatorQty()
			RemoveElementResidQs1();
			RemoveElementCommQs3();
			RemoveElementCorpHybQs1();
			RemoveElementResidElevatorQty();
			RemoveElementCommElevatorQty();
			}

			// Update All the field once choice_building_type is changed
												
	}

	//returns the index of the selected option in the building_type drop-down menu
	function choice_building_type() {
		var x = document.getElementById("building_type");
		var i = x.selectedIndex;						  
		return i;
		
	}

	// call the type will be selected in the drop down menu 
	function Call()  {
	type_Selected();	


	}

function type_Selected()  {							
   var service =  choice_building_type(); 					   
   
   if ( service == 1 )   {
	residentialCalcul(); 
   }
   
   if ( service == 2 )   {
	commercialCalcul();						
   }
   
   if (service == 3 || service == 4 )  {
	 corporate_hybridCalcul();
   }		
}

	

	function residentialCalcul() {
		//Appart qty 
			   var qty_Appart = document.getElementById("qty_Appart").value || 0 ;
		//Level qty 
			var qty_Level = document.getElementById("qty_Level").value || 0 ;
		//Basement qty 
			var qty_Base = document.getElementById("qty_Base").value || 0;
		
	
	//RESIDENTIAL CALCUL							
		
		//Occurence of 6 Appart by Level rounded to highest integer
			var RqtyAppart = Math.ceil( qty_Appart /(qty_Level*6) );
		//Occurence of 20 level rounded to highest integer 									   
			var RLevel =  Math.ceil(qty_Level /20);
		//Compute and return qty of elevators needed
			var  RqtyElevators = RqtyAppart*RLevel;
		//Minimum value by input	
			if (qty_Appart != 0  && qty_Level != 1  && qty_Base  != "" ){
		//Value selector for elevators qty 
			document.getElementById("returned_qty_Eleva").value= RqtyElevators;
			}else {
			document.getElementById("returned_qty_Eleva").value = 0;
			}
			return RqtyElevators;
			}

	function commercialCalcul() {
		//Level qty 
			var CLevel = document.getElementById("qty_Level").value || 0 ;
		//Basement qty 
			var CBasements = document.getElementById("qty_Base").value || 0;
		//Business qty  
			var CBusiness = document.getElementById("qty_Business").value || 0;
		//Parking qty 
			var CParking = document.getElementById("qty_Parking").value || 0;
		//Eleva qty 
			var CElevator = document.getElementById("qty_Eleva").value || 0;
									
	
	//COMMERCIAL CALCUL																	
										
		//Compute and return qty of elevators needed
		var  RqtyElevators = CElevator;
		//MINIMU VALUE BY INPUT
			if (CLevel != "" && CBasements != ""   && CBusiness  != "" && CParking !="" &&  CElevator !=0  ){
		//Value selector for elevators qty 		
			document.getElementById("returned_qty_ElevaB").value = RqtyElevators;
			}else {
				document.getElementById("returned_qty_ElevaB").value = 0;
			}
				return RqtyElevators;
			}										
					

	function corporate_hybridCalcul() {
	   service = choice_building_type();

		//NUMBER() convert the value to number	
		var HCLevel = Number(document.getElementById("qty_Level").value || 0  );
		var HCBasement = Number(document.getElementById("qty_Base").value || 0 );
		var HCOccupant = document.getElementById("qty_Pop").value || 0 ;
		var HCCompanies = document.getElementById("qty_loan").value || 0 ;
		var HCParking = document.getElementById("qty_Parking").value || 0 ;
		var HCHours = document.getElementById("qty_Hours").value || 0 ;
		var Min = HCLevel + HCBasement							   
	   
		var totalHCOccupant = Math.ceil(HCOccupant * (HCLevel + HCBasement)); 	
		   var RqtyElevators = Math.ceil(totalHCOccupant/1000 ); 								
											
		var HCColumns =  Math.ceil((HCLevel + HCBasement)/20);
	 
		var HCelevatorsPerColumns = Math.ceil((RqtyElevators / HCColumns)) 
	   
		var HCTotalElevators =  (HCelevatorsPerColumns * HCColumns);        
		console.log(service);							
		if (HCLevel != "" && HCBasement != "" && HCParking !="" &&  HCOccupant !="" && HCCompanies != "" && Min != 0 ){

		//Value selector for elevators qty 		
		document.getElementById("hybrid").value = HCTotalElevators;
	    }else {
				document.getElementById("hybrid").value = 0;
		}
				return HCTotalElevators;
		}			
		
		

	

	function Price()  
	{
	var service = choice_building_type();						 
			
	if (service == 1)  {
		var qty_Elevators_quote = residentialCalcul();
	}
	if (service == 2)  {
		var qty_Elevators_quote = commercialCalcul();
	}								
	if (service == 3 || service == 4 )  {
		var qty_Elevators_quote = corporate_hybridCalcul();
	}																
												
	var install_Rate;							   
	var Total;
	 
	// Calcul of Standard choice
	if  (document.getElementById("PriceUnitStandard").checked)	{						 
		document.getElementById("PriceUnit").value="7565.00";
		install_Rate = (7565.00*(10/100)*qty_Elevators_quote).toFixed(2);
		Total = (7565.00*1.10*qty_Elevators_quote).toFixed(2);
		document.getElementById("InstallationCost").value = install_Rate ;
		document.getElementById("Total").value = Total;
	} 	

	// Calcul of Premium choice
	if  (document.getElementById("PriceUnitPremium").checked)	{						 
		document.getElementById("PriceUnit").value="12345.00";
		install_Rate = (12345.00*(13/100)*qty_Elevators_quote).toFixed(2);
		Total = (12345.00*1.13*qty_Elevators_quote).toFixed(2);
		document.getElementById("InstallationCost").value = install_Rate ;
		document.getElementById("Total").value = Total;
	} 	

	// Calcul of Excelium choice
	if  (document.getElementById("PriceUnitExcelium").checked)	{						 
		document.getElementById("PriceUnit").value="15400.00";
		install_Rate = (15400.00*(16/100)*qty_Elevators_quote).toFixed(2);
		Total = (15400.00*1.16*qty_Elevators_quote).toFixed(2);
		document.getElementById("InstallationCost").value = install_Rate ;
		document.getElementById("Total").value = Total;
	}								
}

	