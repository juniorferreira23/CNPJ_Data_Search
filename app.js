const xl = require('excel4node')
const wb = new xl.Workbook()
const ws = wb.addWorksheet('Nome da planilha')
const Cnpj = require('./CnpjModel')
const cliProgress = require('cli-progress');

let listaEmpresas = [
    ["ALINHAUTO.","05.938.440/0001-08"],
    ["Aroldo Auto Mecânica.","07.877.875/0001-15"],
    ["Arraial Peças e Serviços.","19.812.723/0001-13"],
    // ["Atend Car.","11.490.318/0001-14"],
    // ["Auto Expert.","29.847.491/0001-92"],
    // ["Auto Gás Norte.","05.522.328/0001-91"],
    // ["Prime Auto Import Recife.","20.050.356/0001-47"],
    // ["Auto Mecânica Boa Sorte.","30.126.615/0001-20"],
    // ["Auto Premier.","12.726.189/0001-83"],
    // ["Auto Simões.","19.124.863/0001-07"],
    // ["Auto Stop","20.011.838/0001-98"],
    // ["Auto Vale Pinturas.","02.022.935/0001-02"],
    // ["Auto Total.","24.375.396/0001-10"],
    // ["Beto Auto Elétrica.","07.017.373/0001-14"],
    // ["Bono Pneus Recife.","43.397.457/0001-94"],
    // ["Br Reforma e Pintura De Bau.","11.613.591/0001-99"],
    // ["Campeão Performance Parts.","23.839.185/0001-28"],
    // ["Car Service Import.","44.694.137/0001-69"],
    // ["Cemauto.","07.765.858/0001-96"],
    // ["Ledcar Injeção Eletrônica.","11.157.932/0001-69"],
    // ["Cicero Serviços Automotivos.","15.286.295/0001-81"],
    // ["Clivel.","09.492.802/0001-30"],
    // ["Clube Oásis Premium Estética Automotiva.","27.306.004/0001-59"],
    // ["Dap - Dinâmica Auto Pecas.","07.777.731/0001-97"],
    // ["Dm Pneus.","06.950.622/0001-67"],
    // ["Dutra Auto Pecas.","17.171.171/0001-86"],
    // ["Falcão Auto Pecas e Serviços.","29.661.562/0001-68"],
    // ["Fator Premium.","13.427.808/0001-00"],
    // ["Flash Equipadora.","11.228.833/0001-20"],
    // ["For Motors.","27.946.194/0001-79"],
    // ["GGB Ecopeças.","10.352.700/0001-07"],
    // ["Globo Auto Service.","39.795.267/0001-58"],
    // ["Hidrauturbo.","13.196.495/0001-18"],
    // ["Hm Hidráulica.","11.115.349/0001-95"],
    // ["Império Das Motos.","27.892.383/0001-06"],
    // ["JJD MANUTENCAO AUTOMOTIVA EIRELI.","34.944.832/0001-88"],
    // ["Lider Diesel Manut. E Reparação De Veículos Automotores.","21.630.490/0001-80"],
    // ["Locadora Caminha.","10.936.383/0001-68"],
    // ["Lucena Auto Service.","07.331.103/0001-83"],
    // ["Manocar.","12.767.194/0001-34"],
    // ["Marcos Martelinho De Ouro.","27.126.533/0001-70"],
    // ["Martelinho De Ouro Personalite.","29.449.323/0001-49"],
    // ["Martelinho De Ouro Torre.","29.890.096/0001-92"],
    // ["Maxtroc.","08.751.372/0001-61"],
    // ["Maxi Retifica.","10.796.088/0001-53"],
    // ["Mecânica Lucena.","11.554.326/0001-87"],
    // ["Menorpreco Serviços.","03.864.143/0001-30"],
    // ["Mentor Motors.","30.863.029/0001-68"],
    // ["Meu Mecânico Serviços a Diesel.","22.805.145/0001-00"],
    // ["Mônaco Auto Service.","13.713.447/0001-50"],
    // ["Motegi Auto Service.","03.504.144/0001-73"],
    // ["Nery Automáticos.","28.249.768/0001-12"],
    // ["Norte Gás Automotivo.","10.461.182/0001-51"],
    // ["Nova Automotiva.","20.727.607/0001-85"],
    // ["Ofcenter.","01.867.906/0001-70"],
    // ["Ofcenter Fast.","18.051.336/0001-49"],
    // ["Oficina Medida Exata.","06.141.842/0001-40"],
    // ["Oficina Nossa Senhora Da Conceição.","11.246.949/0001-92"],
    // ["Pinacar.","10.622.217/0001-97"],
    // ["Pneulub Auto Centro.","28.036.253/0001-34"],
    // ["Pontual Car Service.","21.708.373/0001-91"],
    // ["Pontual Recife.","06.258.912/0001-44"],
    // ["Quality Gás.","29.500.611/0001-80"],
    // ["Pontual Reparo Automotivo.","11.018.838/0001-29"],
    // ["Reciwagen.","08.045.244/0001-00"],
    // ["Regulex.","00.612.802/0001-52"],
    // ["Regulex Sul Centro Automotivo.","27.337.403/0001-87"],
    // ["Reparal.","70.236.831/0001-42"],
    // ["Retífica Menezes.","08.795.460/0001-65"],
    // ["Retifica Regis.","04.365,114/0001-96"],
    // ["Revisauto Pecas E Serviços.","15.267.870/0001-07"],
    // ["Mundial Locação Pecas E Serviços.","07.774.028/0001-25"],
    // ["Arautobiu.","28.972.328/0001-99"],
    // ["Servicar.","27.762.809/0001-07"],
    // ["ALEXANDRE MOURA DE ANDRADE EIRELI.","00.889.544/0001-56"],
    // ["Borracharia Tabajara.","05.989.474/0001-21"],
    // ["TMF Pecas e Serviços.","00.788.032/0001-01"],
    // ["Unibloco.","06.181.752/0001-82"],
    // ["Vack Import Service.","09.308.218/0001-82"],
    // ["Val Auto Car.","43.483.487/0001-13"],
    // ["W - Peças e Serviços Automotivos.","29.744.621/0001-61"],
    // ["Zeca Monteiro Reboque.","11.514.106/0001-20"],
    // ["Zezinho Auto Mecânica.","14.459.360/0001-60"],
    // ["Zuma Auto Center,","08.207.907/0001-38"],
    // ["Auto Service Centro Auto","22.497.687/0001-55"],
    // ["Auto Service Manutenção","15.081.066/0001-20"],
    // ["Importcar Peças e Serviços","42.787543/0001-40"],
    // ["Júnior Injeção Eletrônica","09.465.580/0001-71"],
    // ["Toyoline Auto Center","38.089.376/0001-97"],
    // ["Auto Elétrica Nunes","33.748.594/0001-72"],
    // ["Elicar Motors","26.725.411/0001-38"],
    // ["Assunção Auto Peças","23.156.574/0001-59"],
    // ["Centro Automotivo Len","03.453.733/0001-70"],
    // ["Eskape Tudo Centro","26.079.412/0001-52"],
    // ["Fênix Manutenção Auto","19.989.350/0001-52"],
    // ["NG Injeção Eletrônica","32.454.280/0001-02"],
    // ["Oficina Boa Sorte","30.676.660/0001-58"],
    // ["Oficina Dois Amigos","13.624.442/0001-02"],
    // ["Brecar Clínica de Freios","04.154.314/0001-08"],
    // ["Léo Gás GNV","34.433.580/0001-67"],
    // ["RM Cilindros","46.791.077/0001-25"],
    // ["Auto Center Tuiuiu da Mossa","04.279.219/0001-22"],
    // ["Car Service Import","44.694.137/0001-69"],
    // ["Red Auto Center","20.852.611/0001-75"],
    // ["Oficina Medida Exata","06.141.842/0001-40"]
]

let dadosEmpresas = []

const headingColumnNames = [
    "RAZAO SOCIAL",
    "CNPJ",
    "STATUS",
    "CNAE PRINCIPAL DESCRICAO",
    "MUNICIPIO",
    "UF"
]

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

bar.start(listaEmpresas.length - 1, 0);

function wait(time = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
  
async function main(idx, empresa) {
    empresa[1] = empresa[1].replace(/[\.\/\-]/g, '')
    const api = await fetch('https://receitaws.com.br/v1/cnpj/' + empresa[1])
    .then(data => data.json())
    .then(response => {
        let empresaModel = new Cnpj(response)
        dadosEmpresas.push(empresaModel)
        bar.update(idx)
    })
    await wait(20000); 
}
  
async function buscaRequisicaoApi() {
    for (const [idx, empresa] of listaEmpresas.entries()) {
        await main(idx, empresa);
    }
    bar.stop();
    transformarPlanilha()
}

buscaRequisicaoApi()

const transformarPlanilha = () => {
    let headingColumnIndex = 1
    headingColumnNames.forEach(heading => {
        ws.cell(1, headingColumnIndex++).string(heading)
    })

    let rowIndex = 2
    dadosEmpresas.forEach(record => {
        let columnIndex =1
        Object.keys(record).forEach(columnName => {
            ws.cell(rowIndex, columnIndex++).string(record[columnName])
        })
        rowIndex++
    })

    wb.write('arquivo.xlsx')
}