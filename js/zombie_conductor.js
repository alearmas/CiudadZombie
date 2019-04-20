/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {

    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
    this.direccion = direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function() {
    if (this.direccion == "vertical") {
        if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
            this.velocidad *= -1;
        }
        this.y -= this.velocidad;
    }
    if (this.direccion == "horizontal") {
        if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
            this.velocidad *= -1;
        }
        this.x -= this.velocidad;
    }
}

ZombieConductor.prototype.atacar = function(jugador) {
    jugador.perderVidas(jugador.vidas);

}