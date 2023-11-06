import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    orderId: string;
    delivery: any;
    products: any[];
    invoice: any;
    // date: any;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    orderId,
    delivery,
    products,
    invoice
    // date
}) => (
    <table cellSpacing="0" cellPadding="0" align="center" width="600" className="">
        <tr>
            <td className="background-color: #f8f8f8; padding: 20px 0; text-align: center;">
                <h1 className='text-mainColor'>Confirmación de Compra</h1>
                {/* <p>{date}</p> */}
            </td>
        </tr>
        <tr>
            <td className='p-3'>
                <p className='text-center'>Hola, <span className='capitalize'>{firstName} {lastName}</span></p>
                <p className='text-gray-400'> Pedido en proceso </p>
                <p className='text-gray-400'> Gracias por comprar en <span className='underline'> www.wisefleet.com.pe </span> </p>

                <p>Resumen de compra:</p>

                <p>Número de orden: </p>
                <p>Nº {orderId}</p>
                <table cellSpacing="0" cellPadding="0" width="100%">
                    <tr>
                        <td>Tipo de Entrega</td>
                        <td>Rango Horario:</td>
                        <td>Medio de pago</td>
                    </tr>
                    <tr>
                        <td>Entrega a Domicilio</td>
                        <td>08:00am - 09:00pm</td>
                        <td>Tarjeta</td>
                    </tr>
                    {/* <tr>
                        <td colSpan={3} className='text-right'>Total:</td>
                        <td>$40.00</td>
                    </tr> */}
                </table>
            </td>
        </tr>
        <tr>
            <td className='p-3'>
                <p>Información de Envío:</p>
                <p>Nombre: Nombre del Cliente</p>
                <p>Ubigeo: {delivery.city}, {delivery.district }</p>
                <p>Dirección: {delivery.address}</p>
                <p>Referencia: {delivery.reference}</p>
            </td>
        </tr>

        <table cellSpacing="0" cellPadding="0" width="100%">
            <tr>
                <td>Productos</td>
                <td>Cantidad:</td>
                <td>Precio</td>
                <td>Subtotal</td>
            </tr>
            {products.map((item) => {
                return (
                    <tr key={item.id}>
                        <td><img alt={item.name} src={`/products/${item.image}`} />  <span>{item.name}</span>  </td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.subtotal}</td>
                    </tr>
                )
            })}
            <tr>
                <td colSpan={3} className='text-right'>Subtotal:</td>
                <td>S/ {invoice.subtotal}</td>
            </tr>
            <tr>
                <td colSpan={3} className='text-right'>Envio:</td>
                <td>S/ {invoice.delivery}</td>
            </tr>
            <tr>
                <td colSpan={3} className='text-right text-mainColor'>Total:</td>
                <td className='text-mainColor'>S/ {invoice.total}</td>
            </tr>
        </table>
        <tr>
            <td>
                <p>Gracias por elegir nuestra tienda en línea. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>
            </td>
            <td>
                <p>contact@wisefleet.com</p>
            </td>
        </tr>
    </table>
);
