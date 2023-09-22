import {defineStore} from "pinia";

const dataPredictive = defineStore('predictive', {
    state: () => {
        return {
            instancias: '',
            entornos: '',
            periodos: '',
            opciones: '',
            urlPredictivo: 'https://sf-pred-genie.controliza.com'
        }
    },
    actions: {
        async getDataIni() {
            const uri = `${this.urlPredictivo}/opciones/demo.0.mypersonaltokenfortesting121212`
            const rawResponse = await fetch(uri, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const response = await rawResponse.json();
            this.instancias = response.data.opciones.instancias
            this.entornos = response.data.opciones.entornos
            this.opciones = response.data.opciones.opciones
            this.periodos = response.data.opciones.años
        },
        async getData(instancia: string, entorno: number, año: number, pasados: number, futuros: number, opciones: string) {
            const uri = `${this.urlPredictivo}/datos/demo.0.mypersonaltokenfortesting121212`
            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    instancia: instancia,
                    entornos: entorno,
                    años: año,
                    pasados: pasados,
                    futuros: futuros,
                    opciones: opciones
                })
            })
            const response = await rawResponse.json();
            console.log(response)
        }
    }
})

export default dataPredictive