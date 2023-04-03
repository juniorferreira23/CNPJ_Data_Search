class Cnpj {
    constructor(empresa){
        this.razao_social =  empresa.nome
        this.cnpj = empresa.cnpj
        this.status = empresa.status
        this.cnae_principal = empresa.atividade_principal[0].code
        this.municipio = empresa.municipio
        this.uf = empresa.uf
    }
}

module.exports = Cnpj