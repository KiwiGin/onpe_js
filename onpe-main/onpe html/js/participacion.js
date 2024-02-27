const getNacional = async () => {
  const parametro = new URLSearchParams(window.location.search).get('id').split(",")
  let depas_nac, data_depas_nac, provs_nac, data_provs_nac, dists_nac, data_dists_nac
  let id1, id2, id3, id4
  let titulos = {"Nacional":['DEPARTAMENTO','PROVINCIA','DISTRITO'],"Extranjero":['CONTINENTE','PAIS','CIUDAD']}
  let totales_nac = ['17,953,367', '81.543%', '4,063,663', '18.457%', '22,017,030']
  let totales_ext = ['389,529', '44.018%', '495,395', '55.982%', '884,924']

  if (parametro.length == 1) {
    id1 = parametro[0]
    data_depas_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}`)
    if (data_depas_nac.status == 200) {
      depas_nac = await data_depas_nac.json()
      /* if (Array.isArray(depas_nac)) {
        console.log("Longitud de ARRAY  depas_nac:", depas_nac.length);
      } else if (typeof depas_nac === 'object' && depas_nac !== null) {
        console.log("Cantidad de elementos en OBJETO depas_nac:", Object.keys(depas_nac).length);
      } else {
        console.log("El tipo de depas_nac no es válido para obtener su longitud.");
      } */
    }

  }
  else if (parametro.length == 2) {
    id1 = parametro[0]
    id2 = parametro[1]

    data_depas_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}`)
    if (data_depas_nac.status == 200) {
      depas_nac = await data_depas_nac.json()
      console.log(depas_nac);
    }

    data_provs_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}/${id2}`)
    if (data_provs_nac.status == 200) {
      provs_nac = await data_provs_nac.json()
      /* if (Array.isArray(provs_nac)) {
        console.log("Longitud de ARRAY provs_nac:", provs_nac.length);
      } else if (typeof provs_nac === 'object' && provs_nac !== null) {
        console.log("Cantidad de elementos en OBJETO provs_nac:", Object.keys(provs_nac).length);
      } else {
        console.log("El tipo de provs_nac no es válido para obtener su longitud.");
      } */
    }

  }
  else if (parametro.length == 3) {
    id1 = parametro[0]
    id2 = parametro[1]
    id3 = parametro[2]
    data_depas_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}`)
    if (data_depas_nac.status == 200) {
      depas_nac = await data_depas_nac.json()
      console.log(depas_nac);
    }

    data_provs_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}/${id2}`)
    if (data_provs_nac.status == 200) {
      provs_nac = await data_provs_nac.json()
      console.log(provs_nac);
    }
    data_dists_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}/${id2}/${id3}`)
    if (data_dists_nac.status == 200) {
      dists_nac = await data_dists_nac.json()
      /* if (Array.isArray(dists_nac)) {
        console.log("Longitud de ARRAY dists_nac:", dists_nac.length);
        console.log(dists_nac);
      } else if (typeof dists_nac === 'object' && dists_nac !== null) {
        console.log("Cantidad de elementos en OBJETO dists_nac:", Object.keys(dists_nac).length);
      } else {
        console.log("El tipo de dists_nac no es válido para obtener su longitud.");
      } */
    }

  } else {
    id1 = parametro[0]
    id2 = parametro[1]
    id3 = parametro[2]
    id4 = parametro[3]
    data_depas_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}`)
    if (data_depas_nac.status == 200) {
      depas_nac = await data_depas_nac.json()
      //console.log(depas_nac);
    }

    data_provs_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}/${id2}`)
    if (data_provs_nac.status == 200) {
      provs_nac = await data_provs_nac.json()
      //console.log(provs_nac);
    }
    data_dists_nac = await fetch(`https://oaemdl.es/onpe_sweb_php/participacion/${id1}/${id2}/${id3}`)
    if (data_dists_nac.status == 200) {
      dists_nac = await data_dists_nac.json()
      //console.log(dists_nac);
    }
  }

  //console.log(id1);
  //console.log(id2);
  //console.log(id3);
  //console.log(id4);





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
        
                        <div class="col-xs-12 line pbot30">`


  if (id1 && !id2) {
    html += `<div class="col-xs-12 col-md-6" id="graf">
        <img src="images/estadistico_${id1}.png" class="img-responsive">
      </div>
    `
  }
  else if (id2 && !id3) {

    /* html +=  `<div class="col-xs-12 col-md-6" id="graf">
          <img src="images/estadistico_${id1}.png" class="img-responsive">
        </div>` */
    depas_nac.forEach(depa_nac => {
      if (depa_nac.DPD == id2) {
        html += `<div class="col-xs-12 col-md-6" id="graf">
            <img src="https://www.web.onpe.gob.pe/modElecciones/elecciones/elecciones2016/PRP2V2016/imagen.jpg?_tot_participacion=${depa_nac.PTV}&_tot_ausentismo=${depa_nac.PTA}" class="img-responsive">
          </div>
        `
      }
    });

  }
  else if (id3 && !id4) {
    provs_nac.forEach(prov_nac => {
      if (prov_nac.DPD == id3) {
        html += `<div class="col-xs-12 col-md-6" id="graf">
            <img src="https://www.web.onpe.gob.pe/modElecciones/elecciones/elecciones2016/PRP2V2016/imagen.jpg?_tot_participacion=${prov_nac.PTV}&_tot_ausentismo=${prov_nac.PTA}" class="img-responsive">
          </div>
        `
      }
    })
  }
  else {

    if (Array.isArray(dists_nac)){
      dists_nac.forEach(dist_nac => {
        if (dist_nac.DPD == id4) {
          html += `<div class="col-xs-12 col-md-6" id="graf">
              <img src="https://www.web.onpe.gob.pe/modElecciones/elecciones/elecciones2016/PRP2V2016/imagen.jpg?_tot_participacion=${dist_nac.PTV}&_tot_ausentismo=${dist_nac.PTA}" class="img-responsive">
            </div>
          `
        }
      })
    }else if (typeof dists_nac === 'object' && dists_nac !== null) {
              html += `<div class="col-xs-12 col-md-6" id="graf">
                      <img src="https://www.web.onpe.gob.pe/modElecciones/elecciones/elecciones2016/PRP2V2016/imagen.jpg?_tot_participacion=${dists_nac.PTV}&_tot_ausentismo=${dists_nac.PTA}" class="img-responsive">
                  </div>
              `
    } else {
        console.log("El tipo de dists_nac no es válido para iterar");
    }

  }





  html += `<div class="col-xs-12 col-md-6">
              <div class="cont-recto" style="margin-bottom:10px">`

  if (id1 && !id2) {
    html += `Ámbito: ${id1}`
    html += `</div>
            <p class="subtitle">ELECTORES HÁBILES ${totales_nac[4]}</p>
            <div id="page-wrap">
              <table class="table09_2" cellspacing="0">
                <thead>
                  <tr>
                    <th>PARTICIPACIÓN</th>
                    <th>AUSENTISMO</th>
                  </tr>
                </thead>
      
          `
  } else if (id2 && !id3) {
    html += `
      Ámbito: ${id1}<br>
      ${titulos[id1][0]}: ${id2}
    `
    depas_nac.forEach(depa_nac => {
      if (depa_nac.DPD == id2) {
        html += `</div>
                <p class="subtitle">ELECTORES HÁBILES ${depa_nac.EH}</p>
                <div id="page-wrap">
                  <table class="table09_2" cellspacing="0">
                    <thead>
                      <tr>
                        <th>PARTICIPACIÓN</th>
                        <th>AUSENTISMO</th>
                      </tr>
                    </thead>
          
              `
        
      }
    });
  } else if (id3 && !id4) {
    html += `
      Ámbito: ${id1}<br>
      ${titulos[id1][0]}: ${id2}<br>
      ${titulos[id1][1]}: ${id3}
    `
    provs_nac.forEach(prov_nac => {
      if (prov_nac.DPD == id3) {
        html += `</div>
                <p class="subtitle">ELECTORES HÁBILES ${prov_nac.EH}</p>
                <div id="page-wrap">
                  <table class="table09_2" cellspacing="0">
                    <thead>
                      <tr>
                        <th>PARTICIPACIÓN</th>
                        <th>AUSENTISMO</th>
                      </tr>
                    </thead>
          
              `
        
      }
    });
  } else {
    html += `
      Ámbito: ${id1}<br>
      ${titulos[id1][0]}: ${id2}<br>
      ${titulos[id1][1]}: ${id3}<br>
      ${titulos[id1][2]}: ${id4}
    `

    if (Array.isArray(dists_nac)) {
      dists_nac.forEach(dist_nac => {
          if (dist_nac.DPD == id4) {
            html += `</div>
                    <p class="subtitle">ELECTORES HÁBILES ${dist_nac.EH}</p>
                    <div id="page-wrap">
                      <table class="table09_2" cellspacing="0">
                        <thead>
                          <tr>
                            <th>PARTICIPACIÓN</th>
                            <th>AUSENTISMO</th>
                          </tr>
                        </thead>
              
                  `
              

          }
      });
    } else if (typeof dists_nac === 'object' && dists_nac !== null) {
          html += `</div>
          <p class="subtitle">ELECTORES HÁBILES ${dists_nac.EH}</p>
          <div id="page-wrap">
            <table class="table09_2" cellspacing="0">
              <thead>
                <tr>
                  <th>PARTICIPACIÓN</th>
                  <th>AUSENTISMO</th>
                </tr>
              </thead>
    
        `

    } else {
        console.log("El tipo de dists_nac no es válido para iterar");
    }

  }




  if (id1 && !id2) {
    if(id1=='Nacional'){
      html += `
        <tbody>
          <tr>
            <td>TOTAL: ${totales_nac[0]}</td>
            <td>TOTAL: ${totales_nac[2]}</td>
          </tr>
          <tr>
            <td>% TOTAL: ${totales_nac[1]}</td>
            <td>% TOTAL: ${totales_nac[3]}</td>
    `
  }
  if(id1=='Extranjero'){
    html += `
        <tbody>
          <tr>
            <td>TOTAL: ${totales_ext[0]}</td>
            <td>TOTAL: ${totales_ext[2]}</td>
          </tr>
          <tr>
            <td>% TOTAL: ${totales_ext[1]}</td>
            <td>% TOTAL: ${totales_ext[3]}</td>
    `
  }
    html+=`</tr>
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
          <td>${titulos[id1][0]}</td>
          <td>TOTAL ASISTENTES</td>
          <td>% TOTAL ASISTENTES</td>
          <td>TOTAL AUSENTES</td>
          <td>% TOTAL AUSENTES</td>
          <td>ELECTORES HÁBILES</td>
        </tr>
    
        `
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
    if(id1=='Nacional'){
      html += `
                <tr>
                  <td>TOTALES</td>
                  <td>${totales_nac[0]}</td>
                  <td>${totales_nac[1]}</td>
                  <td>${totales_nac[2]}</td>
                  <td>${totales_nac[3]}</td>
                  <td>${totales_nac[4]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
        
      `
    }
    if(id1=='Extranjero'){
      html += `
                <tr>
                  <td>TOTALES</td>
                  <td>${totales_ext[0]}</td>
                  <td>${totales_ext[1]}</td>
                  <td>${totales_ext[2]}</td>
                  <td>${totales_ext[3]}</td>
                  <td>${totales_ext[4]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
        
      `
    }

  }
  else if (id2 && !id3) {
    depas_nac.forEach(depa_nac => {
      if (depa_nac.DPD == id2) {
        html += `
            <tbody>
              <tr>
                <td>TOTAL: ${depa_nac.TV}</td>
                <td>TOTAL: ${depa_nac.TA}</td>
              </tr>
              <tr>
                <td>% TOTAL: ${depa_nac.PTV}</td>
                <td>% TOTAL: ${depa_nac.PTA}</td>
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
              <td>${titulos[id1][1]}</td>
              <td>TOTAL ASISTENTES</td>
              <td>% TOTAL ASISTENTES</td>
              <td>TOTAL AUSENTES</td>
              <td>% TOTAL AUSENTES</td>
              <td>ELECTORES HÁBILES</td>
            </tr>
        
            `
        
      }
    });
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
    depas_nac.forEach(depa_nac => {
      if (depa_nac.DPD == id2) {
        html += `
        <tr>
          <td>TOTALES</td>
          <td>${depa_nac.TV}</td>
          <td>${depa_nac.PTV}</td>
          <td>${depa_nac.TA}</td>
          <td>${depa_nac.PTA}</td>
          <td>${depa_nac.EH}</td>
        </tr>
        </tbody>
        </table>
        </div>
        
        </div>
        
        `
      }
    });
  }
  else if (id3 && !id4) {
    provs_nac.forEach(prov_nac => {
      if (prov_nac.DPD == id3) {
        html += `
            <tbody>
              <tr>
                <td>TOTAL: ${prov_nac.TV}</td>
                <td>TOTAL: ${prov_nac.TA}</td>
              </tr>
              <tr>
                <td>% TOTAL: ${prov_nac.PTV}</td>
                <td>% TOTAL: ${prov_nac.PTA}</td>
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
              <td>${titulos[id1][2]}</td>
              <td>TOTAL ASISTENTES</td>
              <td>% TOTAL ASISTENTES</td>
              <td>TOTAL AUSENTES</td>
              <td>% TOTAL AUSENTES</td>
              <td>ELECTORES HÁBILES</td>
            </tr>
        
            `
        
      }
    });
    if (Array.isArray(dists_nac)) {
      console.log('ARRAY');
      dists_nac.forEach(dist_nac => {
            html += `
            <tr onclick="location.href='./participacion_total.html?id=${id1},${id2},${id3},${dist_nac.DPD}'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
            <td>${dist_nac.DPD}</td>
            <td>${dist_nac.TV}</td>
            <td>${dist_nac.PTV}</td>
            <td>${dist_nac.TA}</td>
            <td>${dist_nac.PTA}</td>
            <td>${dist_nac.EH}</td>
            </tr>
            
            `

      });
    } else if (typeof dists_nac === 'object' && dists_nac !== null) {
          html += `
          <tr onclick="location.href='./participacion_total.html?id=${id1},${id2},${id3},${dists_nac.DPD}'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
          <td>${dists_nac.DPD}</td>
          <td>${dists_nac.TV}</td>
          <td>${dists_nac.PTV}</td>
          <td>${dists_nac.TA}</td>
          <td>${dists_nac.PTA}</td>
          <td>${dists_nac.EH}</td>
          </tr>
          
          `

    } else {
        console.log("El tipo de dists_nac no es válido para iterar");
    }
    
    provs_nac.forEach(prov_nac => {
      if (prov_nac.DPD == id3) {
        html += `
                <tr>
                  <td>TOTALES</td>
                  <td>${prov_nac.TV}</td>
                  <td>${prov_nac.PTV}</td>
                  <td>${prov_nac.TA}</td>
                  <td>${prov_nac.PTA}</td>
                  <td>${prov_nac.EH}</td
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
        
        `
      }
    });
  } else {
    if (Array.isArray(dists_nac)) {
      dists_nac.forEach(dist_nac => {
          if (dist_nac.DPD == id4) {
            html += `
              <tbody>
                <tr>
                  <td>TOTAL: ${dist_nac.TV}</td>
                  <td>TOTAL: ${dist_nac.TA}</td>
                </tr>
                <tr>
                  <td>% TOTAL: ${dist_nac.PTV}</td>
                  <td>% TOTAL: ${dist_nac.PTA}</td>
                </tr>
              </tbody>
              </table>
              </div>
              </div>
              
              </div>
          `

          }
      });
    } else if (typeof dists_nac === 'object' && dists_nac !== null) {
      html += `
        <tbody>
          <tr>
            <td>TOTAL: ${dists_nac.TV}</td>
            <td>TOTAL: ${dists_nac.TA}</td>
          </tr>
          <tr>
            <td>% TOTAL: ${dists_nac.PTV}</td>
            <td>% TOTAL: ${dists_nac.PTA}</td>
          </tr>
        </tbody>
        </table>
        </div>
        </div>
        
        </div>
    `
        
    } else {
        console.log("El tipo de dists_nac no es válido para iterar");
    }
    console.log('ya estas en el id4');
  }








  document.getElementById('contenido-interna').innerHTML = html;


}

/*
*/