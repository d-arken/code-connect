var listaHumanos = [
    {
        idade: 19,
        nome: "João",
        altura: {
            cm: "180cm",
            ft: "80ft",
        },
    },
    {
        idade: 18,
        altura: {
            cm: "180cm",
            ft: "80ft",
        },
        nome: "José",
    },
];
listaHumanos.map(function (h) {
    var _a;
    console.log((_a = h === null || h === void 0 ? void 0 : h.altura) === null || _a === void 0 ? void 0 : _a.cm);
});
