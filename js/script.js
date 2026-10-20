document.addEventListener('DOMContentLoaded', () => {

    /* el  encabezado cambia de estilo cuando bajas en la pagina */
    const encabezado = document.querySelector('.encabezado');
    function revisarScroll() {
        if (window.scrollY > 50) {
            encabezado.classList.add('encabezado--scroll');
        } else {
            encabezado.classList.remove('encabezado--scroll');
        }
    }
    window.addEventListener('scroll', revisarScroll);
    revisarScroll();

    /* 2. al hacer clic en una tarjeta de precio, se resalta */
    const tarjetas = document.querySelectorAll('.card-costo');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            tarjetas.forEach(otra => otra.classList.remove('card-costo--activa'));
            tarjeta.classList.add('card-costo--activa');
        });
    });
    /* Acordeon: abre el paso donde haces clic y cierra los demas */
    const pasos = document.querySelectorAll('.acordeon-item');

    pasos.forEach(paso => {
        paso.addEventListener('click', () => {
            pasos.forEach(otro => {
                const esteEsElClic = otro === paso;
                otro.classList.toggle('abierto', esteEsElClic);
                otro.querySelector('.acordeon-titulo').setAttribute('aria-expanded', esteEsElClic);
            });
        });
    });
});