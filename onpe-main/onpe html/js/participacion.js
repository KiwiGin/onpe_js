const getNacional = async () => {
    const id1 = new URLSearchParams(window.location.search).get('id').split(",")[0];
    const id2 = new URLSearchParams(window.location.search).get('id').split(",")[1];
    const id3 = new URLSearchParams(window.location.search).get('id').split(",")[2];
    console.log(id1);
    console.log(id2);
    console.log(id3);
    const data_depas_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}`)
    const data_provs_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}/${id2}`)
    const data_dists_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}/${id2}/${id3}`)

    if(data_depas_nac.status==200){
        const depas_nac = await data_depas_nac.json()
        const provs_nac = await data_provs_nac.json()
        const dists_nac = await data_dists_nac.json()
        let html = `
        <div class="titulos col-xs-12">
                          <div class="col-xs-11">
                            <h3> <span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true" style="font-size:19px"></span> SEGUNDA ELECCIÓN PRESIDENCIAL 2016: PARTICIPACIÓN CIUDADANA</h3>
                          </div>
        
                          <div class="col-xs-1 oculto-boton-print">
                            <button onclick="printContent('impreso');"><i class="fa fa-print ico-print"></i></button>
                          </div>
                        </div>
                        
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <button type="button" class="btn btn-primary" onclick="history.go(-1);"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> REGRESAR</button>
                              </td>
                              <td width="60%">&nbsp;</td>
                              <td>
                                <button type="button" class="btn btn-primary" onclick="location.href='./generar_datos_participacion_excel.php?tipoCobertura=Nacional&amp;ubigeo=Todos'">REPORTE DETALLADO EN EXCEL</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                                  
                        <div class="col-xs-12">
                          <p class="subtitle">ACTAS CONTABILIZADAS</p>
                          <div class="col-lg-7 centered">
                            <div class="col-xs-12 col-md-12 col-lg-12 cont-curv">
                              <div class="col-xs-3 col-md-1">
                                <span class="glyphicon glyphicon-ok-circle ico-info" aria-hidden="true"></span>
                              </div>
        
                              <div class="col-xs-9 col-md-11">
                                <ul>
                                  <li>ACTUALIZADO EL 20/06/2016 A LAS 19:16 h </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <br/>
                        </div>
        
                        <div class="col-xs-12 line pbot30">
                          <div class="col-xs-12 col-md-6" id="graf">
                            <img src="images/estadistico_${id1}.png" class="img-responsive">
                          </div>
        
                          <div class="col-xs-12 col-md-6">
                            <div class="cont-recto" style="margin-bottom:10px">
                              Ámbito: ${id1}
                            </div>
                            <p class="subtitle">ELECTORES HÁBILES 22,017,030</p>
                            <div id="page-wrap">
                              <table class="table09_2" cellspacing="0">
                                <thead>
                                  <tr>
                                    <th>PARTICIPACIÓN</th>
                                    <th>AUSENTISMO</th>
                                  </tr>
                                </thead>
    
        `
        html+= `
        <tbody>
          <tr>
            <td>TOTAL: 17,953,367</td>
            <td>TOTAL: 4,063,663</td>
          </tr>
          <tr>
            <td>% TOTAL: 81.543%</td>
            <td>% TOTAL: 18.457%</td>
          </tr>
        </tbody>
        </table>
        </div>
        </div>
        
        </div>
        
        <div class="col-xs-12">
        <p class="subtitle">Consulta de participación DETALLADO </p>
        <div id="page-wrap">
        <table class="table21">
        <tbody id="resultados">
        <tr class="titulo_tabla">
          <td>DEPARTAMENTO</td>
          <td>TOTAL ASISTENTES</td>
          <td>% TOTAL ASISTENTES</td>
          <td>TOTAL AUSENTES</td>
          <td>% TOTAL AUSENTES</td>
          <td>ELECTORES HÁBILES</td>
        </tr>
    
        `
    
        html += `
        
        `
        if(!id2 && !id3){
            depas_nac.forEach(depa_nac => {
                html += `
                <tr onclick="location.href='./participacion_total.html?id=${id1},${depa_nac.DPD}'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
                <td>${depa_nac.DPD}</td>
                <td>${depa_nac.TV}</td>
                <td>${depa_nac.PTV}</td>
                <td>${depa_nac.TA}</td>
                <td>${depa_nac.PTA}</td>
                <td>${depa_nac.EH}</td>
                </tr>
                
                `
            });

        }else{
            provs_nac.forEach(prov => {
                html += `
                <tr onclick="location.href='./participacion_total.html?id=${id1},${id2},${prov.DPD}'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
                <td>${prov.DPD}</td>
                <td>${prov.TV}</td>
                <td>${prov.PTV}</td>
                <td>${prov.TA}</td>
                <td>${prov.PTA}</td>
                <td>${prov.EH}</td>
                </tr>
                
                `
            });
        }

        html+=`
        <tr>
          <td>TOTALES</td>
          <td>17,953,367</td>
          <td>81.543%</td>
          <td>4,063,663</td>
          <td>18.457%</td>
          <td>22,017,030</td>
        </tr>
        </tbody>
        </table>
        </div>
        
        </div>
        
        `
    
    
    
    
        document.getElementById('contenido-interna').innerHTML=html;

    }
}

/*
*/