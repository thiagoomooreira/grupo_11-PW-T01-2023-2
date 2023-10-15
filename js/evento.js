class Evento{

    constructor({
        titulo,
        data,
        inicio,
        fim,
        localizacao,
        descricao
    }){
        this._titulo = titulo
        this._data = data
        this._inicio = inicio
        this._fim = fim
        this._localizacao = localizacao
        this._descricao = descricao
    }

    toString(id){
        return {
            id : id,
            titulo: this._titulo,
            data: this._data,
            inicio: this._inicio,
            fim: this._fim,
            localizacao: this._localizacao,
            descricao: this._descricao
        }
    }
}