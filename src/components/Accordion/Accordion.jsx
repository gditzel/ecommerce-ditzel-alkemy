import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="font-normal my-3"
        >
          ¿Cómo realizo un pedido?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            Solo tenés que seleccionar todos los productos que deseas adquirir.
            Eligiendo la cantidad que desees. Luego puedes ver el detalle de tu
            pedido en nuestro carrito. Si todo es correcto, click en el boton
            finalizar compra.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="font-normal my-3"
        >
          ¿Cómo tramito la factura de mi compra?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            En todas las compras efectuadas en la web, brindamos sin excepción
            alguna, la factura de compra. Una vez que realiza y abona el pedido,
            enviamos a tu dirección de correo electrónico la factura
            correspondiente.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="font-normal my-3"
        >
          ¿Cómo abono a través de depósito/transferencia?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            Una vez se realiza el pedido, te facilitamos los datos del CBU.
            Debes abonar e informar el pago desde nuestra web, antes de la fecha
            de vencimiento de la reserva.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="font-normal my-3"
        >
          ¿El precio que figura en la web es el precio final?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            Todos los precios en la web incluyen el IVA, y se encuentran
            expresados en pesos argentinos.
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="font-normal my-3"
        >
          ¿Cuáles son las formas de pago?
        </AccordionHeader>
        <AccordionBody>
          <div className="h-28 sm:h-10 mt-5 sm:pl-5">
            Contamos con dos formas de pago: a través de depósito/transferencia
            bancaria, con la cual obtenés el precio especial, o bien, a través
            de los métodos Pago Gamer (Visa o MasterCard) o MercadoPago
            (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar
            en cuotas, al precio de lista.
          </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
