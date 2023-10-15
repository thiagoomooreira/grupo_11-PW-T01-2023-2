class itemCalendario{

    constructor({
        id,
        titulo,
        dataInicial,
        dataFinal,
        horaInicial,
        horaFinal
    }){
        
        this._id = id
        this._titulo = titulo
        this._dataHoraInicial = `${dataInicial}T${horaInicial}`
        this._dataHoraFinal = `${dataFinal}T${horaFinal}`
    }

    build(){
        return {
            id : this._id,
            title: this._titulo,
            start: this._dataHoraInicial,
            end: this._dataHoraFinal
        }
    }
}