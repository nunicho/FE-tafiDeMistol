const url = process.env.REACT_APP_API_RESTAURANTEPRODUCTOS;

export const consultarApi = async () => {
  try {
    const respuesta = await fetch(url);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoApi = async (producto) => {
  try {
    const respuesta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoApi = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoApi = async (id) => {
  try {
    const respuesta = await fetch(url + "/" + id);
    const productoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return productoBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoApi = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const URL = process.env.REACT_APP_API_RESTAURANTEUSUARIOS;

export const consultarUsersAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaUsers = await respuesta.json();
    return listaUsers;
  } catch (error) {
    console.log(error);
  }
};

export const crearUserAPI = async (usuario) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUserAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL);
    const listaUsuarios = await respuesta.json();

    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      console.log("email encontrado");
      console.log(usuarioBuscado);

      if (usuarioBuscado.contrasena === usuario.password) {
        return usuarioBuscado;
      }
    } else {
      console.log("el mail no existe");
      return;
    }
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};

const URLclientes = process.env.REACT_APP_API_RESTAURANTECLIENTES;

export const consultarClientesAPI = async () => {
  try {
    const respuesta = await fetch(URLclientes);
    const listaClientes = await respuesta.json();
    return listaClientes;
  } catch (error) {
    console.log(error);
  }
};

export const crearClientesAPI = async (cliente) => {
  try {
    const respuesta = await fetch(URLclientes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarClientesAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLclientes}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const loginClientes = async (cliente) => {
  try {
    const respuesta = await fetch(URLclientes);
    const listaClientes = await respuesta.json();

    const clienteBuscado = listaClientes.find(
      (itemCliente) => itemCliente.email === cliente.email
    );
    if (clienteBuscado) {
      console.log("email encontrado");
      console.log(clienteBuscado);

      if (clienteBuscado.contrasena === cliente.password) {
        return clienteBuscado;
      }
    } else {
      console.log("el mail no existe");
      return;
    }
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};

const urlPedidos = process.env.REACT_APP_API_RESTAURANTEPEDIDOS;;

export const consultarPedidosApi = async () => {
  try {
    const respuesta = await fetch(urlPedidos);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPedidoApi = async (_id) => {
  try {
    const respuesta = await fetch(urlPedidos + "/" + _id);
    const pedidoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return pedidoBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const editarPedidoApi = async (_id, datosActualizados) => {
  try {
    const respuesta = await fetch(urlPedidos + "/" + _id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearPedidoApi = async (pedido) => {
  try {
    const respuesta = await fetch(urlPedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
