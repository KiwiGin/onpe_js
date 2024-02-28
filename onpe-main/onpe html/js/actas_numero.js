const actas_bscarPrNmroMesa = async () => {
  
    const id = document.getElementById('nroMesa').value
    const data = await fetch(`https://oaemdl.es/onpe_sweb_php/actas/numero/${id}`)
    
    let html=``
    
    if(data.status==200){
      const resultados = await data.json()
      
      //console.log(resultados)
      
      html +=`
      <div class="tab-info-desc">         
            <div class="row">
            
              <div class="col-xs-3 col-md-4">
                <div class="mesap01">
                    <img src="images/mp-sin.jpg" class="img-responsive">
                    Si requiere la imagen del acta, solicítela a través del procedimiento de acceso a la información pública.
                </div>
              </div>
            
              <div class="col-xs-9 col-md-8">
                <div class="row">
                  
                  <div class="col-xs-12">
                    <p class="subtitle1">ACTA ELECTORAL</p>
                    <div id="page-wrap">
                      <table class="table13" cellspacing="0">
                        <thead>
                          <tr>
                            <th>Mesa N°</th>
                            <th>N° Copia</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>${resultados.idGrupoVotacion}</td>
                            <td>${resultados.nCopia}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="col-xs-12">
                    <p class="subtitle1">INFORMACIÓN UBIGEO</p>
                    <div id="page-wrap">
                      <table class="table14" cellspacing="0">
                        <tbody>
                          <tr class="titulo_tabla">
                            <td>Departamento</td>
                            <td>Provincia</td>
                            <td>Distrito</td>
                            <td>Local de votación</td>
                            <td>Dirección</td>
                          </tr>
                          <tr>
                            <td>${resultados.Departamento}</td>
                            <td>${resultados.Provincia}</td>
                            <td>${resultados.Distrito}</td>
                            <td>${resultados.RazonSocial}</td>
                            <td>${resultados.Direccion}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="col-xs-12">
                    <p class="subtitle1">INFORMACIÓN MESA</p>
                    <div id="page-wrap">
                      <table class="table15" cellspacing="0">
                        <tbody>
                          <tr class="titulo_tabla">
                            <td>Electores hábiles</td>
                            <td>Total votantes</td>
                            <td>Estado del acta</td>
                          </tr>
                          <tr>
                            <td>${resultados.ElectoresHabiles}</td>
                            <td>${resultados.TotalVotantes}</td>
                            <td>${resultados.idEstadoActa}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div>
              <div class="col-xs-12 pbot30_acta">
                <p class="subtitle1">LISTA DE RESOLUCIONES</p>
                <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> No hay resoluciones para el acta seleccionada
                <div id="page-wrap">
                    <div class="col-md-12 resolu"></div>
                </div>
                <!-- <p class="centro"># : El valor consignado en el acta presenta ilegibilidad.</p> -->
              </div>
            </div>

            <div>
              <div class="col-xs-12">
                <p class="subtitle1">INFORMACIÓN DEL ACTA ELECTORAL</p>
                <div id="page-wrap" class="cont-tabla1">
                  <table class="table06">
                    <tbody>
                      <tr class="titulo_tabla">
                        <td colspan="2">Organización política</td>
                        <td>Total de Votos</td>
                      </tr>
                      <tr>
                        <td>PERUANOS POR EL KAMBIO</td>
                        <td><img width="40px" height="40px" src="images/simbolo_pkk.jpg"></td>
                        <td>${resultados.P1}</td>
                      </tr>
                      <tr>
                        <td>FUERZA POPULAR</td>
                        <td><img width="40px" height="40px" src="images/simbolo_keyko.jpg"></td>
                        <td>${resultados.P2}</td>
                      </tr>
                      <tr>
                        <td colspan="2">VOTOS EN BLANCO</td>
                        <td>${resultados.VotosBlancos}</td>
                      </tr>
                      <tr>
                        <td colspan="2">VOTOS NULOS</td>
                        <td>${resultados.VotosNulos}</td>
                      </tr>
                      <tr>
                        <td colspan="2">VOTOS IMPUGNADOS</td>
                        <td>${resultados.VotosImpugnados}</td>
                      </tr>
                      <tr>
                        <td colspan="2">TOTAL DE  VOTOS EMITIDOS</td>
                        <td>${resultados.TotalVotantes}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>

        `
        
      }else{
        html+=`<div>ACTA NO ECONTRADA</div>`
      }
      
      document.getElementById('presidencial').innerHTML=html

}

function validText(event){
  if (event.keyCode === 13){
    actas_bscarPrNmroMesa();
  }
}

//actas_bscarPrNmroMesa(document.getElementById('nroMesa'));
