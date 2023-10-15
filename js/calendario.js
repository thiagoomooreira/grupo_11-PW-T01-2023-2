class Calendario{

    _idCalendario = "calendario"
    _nameListaLocalStorage = "listaEventos"

    constructor(){

        let lista = this.carregarEventos()

        console.log(lista);
        var calendarEl = document.getElementById(this._idCalendario);
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today myCustomButton',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: lista,
            eventClick: function(info) {
                console.log('Event: ' + info.event.title);
                console.log('Event: ' + info.event.id);
            
                // change the border color just for fun
                info.el.style.borderColor = 'red';

                $('#modal-eventos').modal('show');
            }
          });
          
          calendar.render();
    }

    carregarLista(){

        var lista = localStorage.getItem(this._nameListaLocalStorage);
    

        if(!lista){
            lista = []
        }else{
            lista = JSON.parse(lista)
        }

        return lista;
    }

    carregarEventos(){
        let lista = this.carregarLista()
    
        let eventos = []
        $.each(lista, function( index, value ) {
            
            eventos.push(new itemCalendario({
                id : value.id,
                titulo: value.titulo,
                dataInicial: value.data,
                dataFinal: value.data,
                horaInicial: value.inicio,
                horaFinal: value.fim
           }).build())
        });

        return eventos;
    }

    adicionarLista(evento){
        var lista = localStorage.getItem(this._nameListaLocalStorage);
    

        if(!lista){
            lista = []
        }else{
            lista = JSON.parse(lista)
        }

        lista.push(evento.toString(lista.length + 1))

        localStorage.setItem(this._nameListaLocalStorage, JSON.stringify(lista));
    }
}