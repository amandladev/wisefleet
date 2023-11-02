import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <table cellSpacing="0" cellPadding="0" align="center" width="600" className="">
        <tr>
            <td className="background-color: #f8f8f8; padding: 20px 0; text-align: center;">
                <h1>Confirmación de Compra</h1>
            </td>
        </tr>
        <tr>
            <td className='p-3'>
                <p>¡Gracias por tu compra en nuestra tienda en línea! Aquí tienes los detalles de tu compra:</p>
                <table cellSpacing="0" cellPadding="0"  width="100%">
                    <tr>
                        <td>Producto</td>
                        <td>Cantidad</td>
                        <td>Precio Unitario</td>
                        <td>Subtotal</td>
                    </tr>
                    <tr>
                        <td>{firstName}</td>
                        <td>2</td>
                        <td>$20.00</td>
                        <td>$40.00</td>
                    </tr>
                    <tr>
                        <td colSpan={3} className='text-right'>Total:</td>
                        <td>$40.00</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td className='p-3'>
                <p>Información de Envío:</p>
                <p>Nombre: Nombre del Cliente</p>
                <p>Dirección: Dirección de Envío</p>
                <p>Ciudad: Ciudad</p>
                <p>Código Postal: Código Postal</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Gracias por elegir nuestra tienda en línea. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>
            </td>
        </tr>
    </table>
);
