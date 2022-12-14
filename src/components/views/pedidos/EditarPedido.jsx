import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editarPedidoApi, obtenerPedidoApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarPedido = () => {
    const { id } = useParams();

    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm();
  
    useEffect(() => {
      obtenerPedidoApi(id).then((respuesta) => {
        if (respuesta.status === 200) {
          setValue("nombreClientePedido", respuesta.dato.nombreClientePedido)
          setValue("estado", respuesta.dato.estado);
          setValue("detallePedido", respuesta.dato.detallePedido);
          setValue("costoTotal", respuesta.dato.costoTotal);
          console.log(respuesta)
        }
      });
    }, []);
    const navegacion = useNavigate();
  
    const onSubmit = (pedido) => {
      console.log(pedido);
      editarPedidoApi(id, pedido).then((respuesta) => {
        if (respuesta.status === 200) {
          Swal.fire("Producto Actualizado", "Actualizacion Correcta", "success");
          navegacion("/administrador/pedidosAdmin")
        } else {
          Swal.fire("Error inesperado", "Intente Nuevamente", "error");
        }
      });
    };
    return (
      <section className="colorFondo">
        <Container>
          <h2 className="display-3 text-center text-white">
            Modificacion de Pedidos
          </h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formNombreCliente">
              <Form.Label>Nombre Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                {...register("nombreClientePedido", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe ingresar como m??nimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Existe un m??ximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.nombreClientePedido?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoria">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                {...register("estado", {
                  required: "Debe seleccionar una Estado",
                })}
              >
                <option value="">Seleccione una opci??n</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Entregado">Entregado</option>
                <option value="Cancelado">Cancelado</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.estado?.message}
              </Form.Text>
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </section>
    );
  };
  

export default EditarPedido;