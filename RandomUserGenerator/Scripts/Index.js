new Vue({
    el: 'main',
    mounted() {
        this.cargarpersonas();
    },
    data: {
        personas: []
    },

    methods: {
        cargarpersonas() {
            this.$http.get('https://randomuser.me/api/?results=1')
                .then((respuesta) => {
                    this.personas = respuesta.body.results;
                });
        },
    },
});