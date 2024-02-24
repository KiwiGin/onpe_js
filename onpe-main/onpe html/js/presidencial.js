
function buscarAmbito( tipoElec, tipoC, modElec, ambito, pantalla ) {
	if (ambito == "P")
	{
		$("#lblDepartamento").html("Departamento:");
		$("#lblProvincia").html("Provincia:");
		$("#lblDistrito").html("Distrito:");
		
		$("#lblDepartamento").show();
		$("#lblProvincia").show();
		$("#lblDistrito").show();
		$("#dvNombreDepartamento").show();
		$("#dvNombreProvincia").show();
		$("#dvNombreDistrito").show();
		$("#tdTituloDepartamento").show();
		$("#tdTituloProvincia").show();
		$("#tdTituloDistrito").show();
	}
	else if (ambito == "E")
	{
		$("#lblDepartamento").html("Continente:");
		$("#lblProvincia").html("País:");
		$("#lblDistrito").html("Ciudad:");
		
		$("#lblDepartamento").show();
		$("#lblProvincia").show();
		$("#lblDistrito").show();
		$("#dvNombreDepartamento").show();
		$("#dvNombreProvincia").show();
		$("#dvNombreDistrito").show();
		$("#tdTituloDepartamento").show();
		$("#tdTituloProvincia").show();
		$("#tdTituloDistrito").show();
	}
	else if (ambito == "")
	{
		$("#lblDepartamento").hide();
		$("#lblProvincia").hide();
		$("#lblDistrito").hide();
		$("#dvNombreDepartamento").hide();
		$("#dvNombreProvincia").hide();
		$("#dvNombreDistrito").hide();
		$("#tdTituloDepartamento").hide();
		$("#tdTituloProvincia").hide();
		$("#tdTituloDistrito").hide();
	}
	
	getPageWeb ( '', 'ubigeo', 'getDepartamentos', 'departamentos', '&dep_id=&tipoElec='+tipoElec+'&tipoC='+tipoC+'&modElec=&ambito='+ambito+'&pantalla='+pantalla );
	$("#cdgoProv").val("");
	$("#cdgoDist").val("");
	$("#cdgoProv").attr("disabled","disabled");
	$("#cdgoDist").attr("disabled","disabled");
	
	if (tipoC != "acta")
	{
		if (tipoElec == '10') {
			if (pantalla == "Barras")
			{
				if (ambito!="")
					getPageWeb ( '', 'resultado', 'displayResultado', 'divDetalle', '&ubigeo='+ambito+'&utipo=pais' + '&tipoElec=' + tipoElec + '&modElec=' + modElec + '&pantalla=' + pantalla );
				else
					getPageWeb ( '', 'resultado', 'displayResultado', 'divDetalle', '&ubigeo=&utipo=nacion&tipoElec=10&modElec=PR&pantalla=' + pantalla );
			}
			else
			{
				if (ambito!="")
					getPageWeb ( '', 'resultado', 'displayResultado', 'divDetalle', '&ubigeo='+ambito+'&utipo=pais&tipoElec=10&modElec=PR&pantalla=' + pantalla+'&subpantalla=Datos' );
				else
					getPageWeb ( '', 'resultado', 'displayResultado', 'divDetalle', '&ubigeo=&utipo=nacion&tipoElec=10&modElec=PR&pantalla=' + pantalla+'&subpantalla=Datos' );	
			}	
				
		}
		else if (tipoElec == '12') {
			if (ambito!="")
				getPageWeb ( '', 'resultado', 'displayResultado', 'divDetalle', '&ubigeo='+ambito+'&utipo=pais&tipoElec=12&modElec=PA&pantalla=' + pantalla );
			else
				getPageWeb ( '', 'resultado', 'displayResultado', 'divDetalle', '&ubigeo=&utipo=nacion&tipoElec=12&modElec=PA&pantalla=' + pantalla );
		}
	}
}