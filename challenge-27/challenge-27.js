(function(){
    'use strict';

    /*
    O desafio dessa semana é criar uma mini library (biblioteca) para
    reutilizarmos nossos códigos quando fizermos manipulação de DOM!

    Requisitos:
    - O nome da lib deve ser "DOM".
    - Ela deve ser uma função construtora, que receberá uma string por parâmetro.
    Essa string será o nó do DOM a ser selecionado;
    - No construtor, você deve atribuir à `this.element` todos os elementos
    do DOM selecionados;
    - Extenda a lib para ter os métodos `on`, `off` e `get`.
    - O método `on` irá adicionar um listener de evento a todos os elementos
    selecionados.
    - O método `off` irá remover o listener de evento de todos os elementos
    selecionados.
    - O método `get` deve retornar os elementos.
    - O código abaixo deve funcionar corretamente após a lib criada.

    Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
    Só passe para o próximo problema quando tiver resolvido o anterior :)
    */
    function DOM(elements){
        this.element = document.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(eventType, callback){
        Array.prototype.forEach.call(this.element, function(element){
            element.addEventListener(eventType, callback, false);
        });
    };

    DOM.prototype.off = function off(eventType, callback){
        Array.prototype.forEach.call(this.element, function(element){
            element.removeEventListener(eventType, callback, false);
        });
    };

    DOM.prototype.get = function get(){
        return this.element;
    };

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    };

    DOM.prototype.isArray = function isArray(param){
        return Object.prototype.toString.call(param) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(param){
        return Object.prototype.toString.call(param) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction(param){
        return Object.prototype.toString.call(param) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber(param){
        return Object.prototype.toString.call(param) === '[object Number]';
    };

    DOM.prototype.isString = function isString(param){
        return Object.prototype.toString.call(param) === '[object String]';
    };

    DOM.prototype.isBoolean = function isBoolean(param){
        return Object.prototype.toString.call(param) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull(param){
        return Object.prototype.toString.call(param) === '[object Null]' || Object.prototype.toString.call(param) === '[object Undefined]';
    };

})();
