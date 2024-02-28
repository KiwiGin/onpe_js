

async function buscarAmbito( tipoElec, tipoC, modElec, ambito, pantalla ) {
	if (ambito == "Peru")
	{
        window.document.getElementById("cdgoProv").value = ""
		window.document.getElementById("cdgoProv").disabled = true
        window.document.getElementById("cdgoDist").value = ""
        window.document.getElementById("cdgoDist").disabled = true
        window.document.getElementById("actas_ubigeo").value = ""
        window.document.getElementById("actas_ubigeo").disabled = true
        console.log("nya");
		document.getElementById('lblDepartamento').textContent = 'Departamento:';
		document.getElementById('lblProvincia').textContent = 'Provincia:';
		document.getElementById('lblDistrito').textContent = 'Distrito:';

        cargarOpcionesDep(ambito)
		
	}
	else if (ambito == "E")
	{
        window.document.getElementById("cdgoProv").value = ""
		window.document.getElementById("cdgoProv").disabled = true
        window.document.getElementById("cdgoDist").value = ""
        window.document.getElementById("cdgoDist").disabled = true
        window.document.getElementById("actas_ubigeo").value = ""
        window.document.getElementById("actas_ubigeo").disabled = true
        console.log("nye");
		document.getElementById('lblDepartamento').textContent = 'Continente:';
		document.getElementById('lblProvincia').textContent = 'País:';
		document.getElementById('lblDistrito').textContent = 'Ciudad:';
        cargarOpcionesDep(ambito)

	}
	else if (ambito == "")
	{

	}

}

async function cargarOpcionesDep(ambito){
    console.log(document.getElementById('cdgoAmbito').value);
    await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/${ambito}`).then(response => response.json())
    .then(data => {
        document.getElementById('cdgoDep').innerHTML = '';

        let optionDefault = document.createElement('option')
        optionDefault.selected = "selected"
        optionDefault.value = ""
        optionDefault.textContent = "--SELECCIONE--"
        document.getElementById('cdgoDep').appendChild(optionDefault)
        
        data.forEach(opcion => {
            let optionElement = document.createElement('option')
            optionElement.value = opcion.Detalle
            optionElement.textContent = opcion.Detalle
            document.getElementById('cdgoDep').appendChild(optionElement)
        });
    })
    .catch(error => {
        console.error('Error al cargar opciones de cdgoDep:', error)
    });
}
async function cargarOpcionesProv(dep_id){
    console.log(document.getElementById('cdgoDep').value);
    await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/${document.getElementById('cdgoAmbito').value}/${dep_id}`).then(response => response.json())
    .then(data => {
        document.getElementById('cdgoProv').innerHTML = '';

        let optionDefault = document.createElement('option')
        optionDefault.selected = "selected"
        optionDefault.value = ""
        optionDefault.textContent = "--SELECCIONE--"
        document.getElementById('cdgoProv').appendChild(optionDefault)
        if (Array.isArray(data)) {
            data.forEach(opcion => {
                let optionElement = document.createElement('option')
                optionElement.value = opcion.Detalle
                optionElement.textContent = opcion.Detalle
                document.getElementById('cdgoProv').appendChild(optionElement)
            });

        } else if (typeof data === 'object' && data !== null) {
            let optionElement = document.createElement('option')
                optionElement.value = data.Detalle
                optionElement.textContent = data.Detalle
                document.getElementById('cdgoProv').appendChild(optionElement)
        } else {
            console.log("El tipo de data no es válido para iterar");
        }
        
    })
    .catch(error => {
        console.error('Error al cargar opciones de cdgoProv:', error)
    });
}
async function cargarOpcionesDist(ubigeo){
    console.log(document.getElementById('cdgoProv').value);
    await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/${document.getElementById('cdgoAmbito').value}/${document.getElementById('cdgoDep').value}/${ubigeo}`).then(response => response.json())
    .then(data => {
        document.getElementById('cdgoDist').innerHTML = '';

        let optionDefault = document.createElement('option')
        optionDefault.selected = "selected"
        optionDefault.value = ""
        optionDefault.textContent = "--SELECCIONE--"
        document.getElementById('cdgoDist').appendChild(optionDefault)
        if (Array.isArray(data)) {
            data.forEach(opcion => {
                let optionElement = document.createElement('option')
                optionElement.value = opcion.Detalle
                optionElement.textContent = opcion.Detalle
                document.getElementById('cdgoDist').appendChild(optionElement)
            });

        } else if (typeof data === 'object' && data !== null) {
            let optionElement = document.createElement('option')
                optionElement.value = data.Detalle
                optionElement.textContent = data.Detalle
                document.getElementById('cdgoDist').appendChild(optionElement)
        } else {
            console.log("El tipo de data no es válido para iterar");
        }
        
    })
    .catch(error => {
        console.error('Error al cargar opciones de cdgoDist:', error)
    });
}

async function cargarOpcionesLocal(dist_id){
    console.log(document.getElementById('cdgoDist').value);
    await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/${document.getElementById('cdgoAmbito').value}/${document.getElementById('cdgoDep').value}/${document.getElementById('cdgoProv').value}/${dist_id}`).then(response => response.json())
    .then(data => {
        document.getElementById('actas_ubigeo').innerHTML = '';

        let optionDefault = document.createElement('option')
        optionDefault.selected = "selected"
        optionDefault.value = ""
        optionDefault.textContent = "--SELECCIONE--"
        document.getElementById('actas_ubigeo').appendChild(optionDefault)

        
        
        if (Array.isArray(data)) {
            data.forEach(opcion => {
                let optionElement = document.createElement('option')
                optionElement.value = opcion.RazonSocial
                optionElement.textContent = opcion.RazonSocial
                document.getElementById('actas_ubigeo').appendChild(optionElement)
            });

        } else if (typeof data === 'object' && data !== null) {
            let optionElement = document.createElement('option')
                optionElement.value = data.RazonSocial
                optionElement.textContent = data.RazonSocial
                document.getElementById('actas_ubigeo').appendChild(optionElement)
        } else {
            console.log("El tipo de data no es válido para iterar");
        }
    })
    .catch(error => {
        console.error('Error al cargar opciones de actas_ubigeo:', error)
    });
}

async function verDetalleMesa(nromesa){
    const id = nromesa
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

async function cargarMesas(local){
    console.log(document.getElementById('actas_ubigeo').value)
    await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/${document.getElementById('cdgoAmbito').value}/${document.getElementById('cdgoDep').value}/${document.getElementById('cdgoProv').value}/${document.getElementById('cdgoDist').value}/${local}`).then(response => response.json())
    .then(data => {
        document.getElementById('tbody').innerHTML = ''
            // Contador para seguir el número de celdas en la fila actual
        let cellCount = 0

        // Crear una nueva fila inicial
        let currentRow = document.createElement('tr')
        tbody.appendChild(currentRow)

        if (Array.isArray(data)) {
            data.forEach(numero => {
                // Crear una nueva celda
                let cell = document.createElement('td')
                // Configurar el onclick con los parámetros necesarios
                cell.setAttribute('bgcolor', '#C1C1C1')
                cell.setAttribute('onclick', `verDetalleMesa('${numero.idGrupoVotacion}')`)
                // Configurar el estilo cursor:pointer
                cell.style.cursor = 'pointer'
                // Crear un enlace <a> dentro de la celda
                let link = document.createElement('a')
                link.href = '#'
                // Asignar el número como texto del enlace
                link.textContent = numero.idGrupoVotacion
                // Agregar el enlace al contenido de la celda
                cell.appendChild(link)
                // Agregar la celda a la fila actual
                currentRow.appendChild(cell)
                
                // Incrementar el contador de celdas
                cellCount++

                // Si el contador alcanza 10, crear una nueva fila
                if (cellCount === 10) {
                    // Crear una nueva fila
                    currentRow = document.createElement('tr')
                    tbody.appendChild(currentRow)
                    // Reiniciar el contador de celdas
                    cellCount = 0
                }
            });

        } else if (typeof data === 'object' && data !== null) {
            // Crear una nueva celda
            let cell = document.createElement('td')
            // Configurar el onclick con los parámetros necesarios
            cell.setAttribute('bgcolor', '#C1C1C1')
            cell.setAttribute('onclick', () => {verDetalleMesa(data.idGrupoVotacion)})
            // Configurar el estilo cursor:pointer
            cell.style.cursor = 'pointer'
            // Crear un enlace <a> dentro de la celda
            let link = document.createElement('a')
            link.href = '#'
            // Asignar el número como texto del enlace
            link.textContent = data.idGrupoVotacion
            // Agregar el enlace al contenido de la celda
            cell.appendChild(link)
            // Agregar la celda a la fia actual
            currentRow.appendChild(cell)
            
            // Incrementar el contador de celdas
            cellCount++

            // Si el contador alcanza 10, crear una nueva fila
            if (cellCount === 10) {
                // Crear una nueva fila
                currentRow = document.createElement('tr')
                tbody.appendChild(currentRow)
                // Reiniciar el contador de celdas
                cellCount = 0
            }
        } else {
            console.log("El tipo de data no es válido para iterar")
        }

        
    })
    .catch(error => {
        console.error('Error al cargar opciones de actas_ubigeo:', error)
    });
}
async function contarMesas(local){
    let cntNroMesas = 0
    console.log(document.getElementById('actas_ubigeo').value)
    await fetch(`https://oaemdl.es/onpe_sweb_php/actas/ubigeo/${document.getElementById('cdgoAmbito').value}/${document.getElementById('cdgoDep').value}/${document.getElementById('cdgoProv').value}/${document.getElementById('cdgoDist').value}/${local}`).then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
            console.log(data.length);
            cntNroMesas=data.length
            console.log(cntNroMesas);
            

        } else if (typeof data === 'object' && data !== null) {
            // Crear una nueva celda
            cntNroMesas=1
        } else {
            console.log("El tipo de data no es válido para iterar")
        }

        
    })
    .catch(error => {
        console.error('Error al cargar opciones de actas_ubigeo:', error)
    });
    return cntNroMesas


}

async function getProvinciasDepa_acta(tip_elec, modElec, dep_id){
    if (dep_id != '') {
		//window.document.getElementById("cdgoProv").value = ""
		window.document.getElementById("cdgoProv").disabled = false
        cargarOpcionesProv(dep_id)
	}
	else
	{
		window.document.getElementById("cdgoProv").value = ""
		window.document.getElementById("cdgoProv").disabled = true
        
	}
}

async function buscarProvincia_actas(ubigeo, tipoElec, modElec) {
	if (window.document.getElementById("cdgoProv"))
	{
		//window.document.getElementById("cdgoDist").value = "-1?-1";
		window.document.getElementById("cdgoDist").disabled = false
        cargarOpcionesDist(ubigeo)
	}
}

async function getDistritos(dist_id){
    if (window.document.getElementById("cdgoDist"))
	{
		//window.document.getElementById("cdgoDist").value = "-1?-1";
		window.document.getElementById("actas_ubigeo").disabled = false
        cargarOpcionesLocal(dist_id)
	}
}

async function divDetalle1(local){
    let html=`
    <div class="col-xs-12 pbot30" id="tituloLista">
                        
    </div>

    <div class="col-xs-12 cont-recto oculto-leyenda-color-fondo-mesas">
    <div class="col-md-4"><img src="images/procesacon.jpg"> Procesada con imagen</div>
    <div class="col-md-4"><img src="images/procesasin.jpg"> Procesada sin imagen</div>
    <div class="col-md-4"><img src="images/sinprocesa.jpg"> Sin procesar</div>
    </div>

    <div class="row pbot30">
    <div class="col-lg-8 centered">
        <div class="col-xs-12 col-md-12 col-lg-12">
        <table>
            <tbody>
            <tr>
                <td colspan="10">
    `
    let nro = await contarMesas(local).then((value) => {
        console.log(value);
        return value
    })
    console.log(nro);
    html+=`
                <div class="conte-paginador">
                    <span class="paginador-txt">Total de mesas: ${nro}</span>
                </div>
                </td>
            </tr>  
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td colspan="10">Página: 
                <ul class="pagination">
                    <li class="active"><a class="paginador-n1">1</a></li>
                </ul>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    </div>
    `
    //document.getElementById('divDetalle1').innerHTML+=html
    document.getElementById('divDetalle1').innerHTML=html
    document.getElementById('tituloLista').innerHTML = '';
    let html1=`
    <p class="subtitle">LISTADO DE MESAS</p>
                    <div id="page-wrap">
                        <table class="table17" cellspacing="0">
                        <tbody id="tbody">
                            
                        </tbody>
                        </table>
                    </div>
    `
    document.getElementById('tituloLista').innerHTML=html1
    cargarMesas(local)
    
}

async function actas_porUbigeo_verActsPr(local,page,a) {
    if (window.document.getElementById("actas_ubigeo"))
	{
		//window.document.getElementById("cdgoDist").value = "-1?-1";
		//window.document.getElementById("actas_ubigeo").disabled = false
        divDetalle1(local)
        
	}
}