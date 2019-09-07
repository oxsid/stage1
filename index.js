var app = new Vue({
    el: '#app',
    data: {
        firstname: "Jon222",
        lastname: "Step",
        "age": 30,
        "about": "Я хочу стать програмистом",
        "work":
            [
                {
                    "organization": "Smart",
                    "directory": [{"name":"Вася","phone":"329-17-00"},{"name":"Дима","phone":"344-19-00"},{"name":"Рима","phone":"344-44-00"}],
                    "email": "vita@mail.ru",
                    "address": "Невский 22",
                    "salary": 4689
                },
                {
                    "organization": "Dom.ru",
                    "directory": [{"name":"Коля","phone":"529-17-00"},{"name":"Рома","phone":"333-19-00"}],
                    "email": "domru@mail.ru",
                    "address": "Магнитогорская 22",
                    "salary": 22222
                },
                {
                    "organization": "MKS",
                    "directory": [{"name":"МАРСИАНИН", "kosmo":"+mars 01"}],
                    "email": "mks@mail.ru",
                    "address": "Марс",
                    "salary": 6660000
                }
            ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },

        rev: function () {
            this.age = this.age + 1;
        }
    }
});

