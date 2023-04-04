class Deporte {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
class CarritoController {
    constructor() {
      this.listaDeportes = [];
    }
  
    registroDeportesDesdeApi() {
      this.listaDeportes = [
        new Deporte(1, "basquet", 3500),
        new Deporte(2, "futbol", 3000),
        new Deporte(3, "tenis", 9500),
        new Deporte(4, "natacion", 7500),
        new Deporte(5, "golf", 20000),
        new Deporte(6, "rugby", 5000)
      ];
    }
  
    mostrarDeportes() {
      let acumulador = "";
      this.listaDeportes.forEach(Deporte => {
        acumulador += "\nid: " + Deporte.id + " " + Deporte.nombre + " $" + Deporte.precio
      });
      return acumulador;
    }
  
    buscarDeportesPorPrecio(precioMaximo) {
      return this.listaDeportes.filter(deporte => deporte.precio <= precioMaximo);
    }
  
    buscarDeportePorId(id) {
      return this.listaDeportes.find(deporte => deporte.id === id);
    }
  
    agregarDeporte(deporte) {
      this.listaDeportes.push(deporte);
    }

    filtrarDeportesPorNombre(nombre) {
        return this.listaDeportes.filter(deporte => deporte.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }

  }
  
  const controlador = new CarritoController();
  controlador.registroDeportesDesdeApi();

  
console.log(controlador.filtrarDeportesPorNombre("bas")); // devuelve el deporte con nombre "basquet"
console.log(controlador.filtrarDeportesPorNombre("g")); // devuelve los deportes con nombre "golf" y "rugby"
  
  let deportesElegidos = [];
  let continuarEligiendo = true;
  let precioTotal = 0;
  
  while (continuarEligiendo) {
    const deporteElegido = prompt(`Escriba el numero de id del deporte que desea elegir.${controlador.mostrarDeportes()}`);
    const deporte = controlador.buscarDeportePorId(parseInt(deporteElegido));
    if (deporte) {
      deportesElegidos.push(deporte);
      const respuesta = prompt(`¿Desea elegir otro deporte? (S/N)`);
      if (respuesta.toUpperCase() === "N") {
        continuarEligiendo = false;
      }
    } else {
      alert(`La opcion elegida no está disponible.`);
    }
  }
  
  if (deportesElegidos.length > 0) {
    precioTotal = deportesElegidos.reduce((acumulador, deporte) => acumulador + deporte.precio, 0);
    if (deportesElegidos.length > 1) {
      precioTotal *= 0.75; // aplicar descuento del 25%
      alert(`Por selecionar 2 o + deportes recibe un descuento de 25% ${deportesElegidos.length} . El precio total a pagar x mes es de $${precioTotal}`);
    } else {
      alert(`Su deporte elegido tiene un precio total x mes de $${precioTotal}.`);
    }
  } else {
    alert(`No ha elegido ningún deporte.`);
  }
  