import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    orderId: string;
    delivery: any;
    products: any[];
    invoice: any;
    date: string;
}

export const EmailPaymentTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    orderId,
    delivery,
    products,
    invoice,
    date
}) => (
    <table cellSpacing="0" cellPadding="0" align="center" width="680" style={{
        backgroundColor: "#fff",
    }}>
        <img src='/banner.png' alt='banner' />
        <tr >
            <td style={{
                padding: "20px 0",
                textAlign: "center",
                backgroundColor: "#f8f8f8"
            }}>
                <h1 style={{
                    color: "#3DB9BE",
                    fontWeight: "bolder",
                    fontSize: "2rem"
                }}>Confirmación de Compra</h1>
            </td>
        </tr>
        <tr>
            <td style={{
                textAlign: "center",
                padding: ".5rem"
            }}>

                <p style={{
                    margin: "0.5rem",
                    fontSize: "1.5rem"
                }}>Hola, <span style={{
                    textTransform: "capitalize",
                    textAlign: 'center',
                    color: "#000",
                    fontWeight: "bolder",
                }}>{firstName} {lastName}</span></p>
                {/* <p style={{
                    color: "#555"
                }}> Pedido en proceso </p> */}
                <p style={{
                    color: "#555",
                    margin: "0.5rem"
                }}> Gracias por comprar en <span style={{
                    textDecoration: "underline",
                    color: "#333"
                }}
                > www.wisefleet.com.pe </span> </p>

                <p style={{
                    textAlign: "left",
                    marginLeft: "1rem"
                }}>Resumen de compra:</p>
                <p style={{ textAlign: "left",
                    marginLeft: "1rem"}}>Fecha: {date}</p>

                <p style={{
                    textAlign: "left",
                    marginLeft: "1rem",
                    marginBottom: "1rem"
                }}>Número de orden: <span style={{
                    color:"#000",
                    fontWeight: "bolder",
                    marginLeft: "0.3rem"
                }}>Nº {orderId}</span> </p>
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
                </table>
            </td>
        </tr>
        <tr>
            <td style={{ padding: "1.3rem"}}>
                <p>Información de Envío:</p>
                <p>Nombre: <span style={{ textTransform: "uppercase"}}>{firstName} {lastName} </span></p>
                <p>Ubigeo: {delivery.city}, {delivery.district }</p>
                <p>Dirección: {delivery.address}</p>
                <p>Referencia: {delivery.reference}</p>
            </td>
        </tr>
            <table cellSpacing="0" cellPadding="5" width="100%" align='center'>
                <tr style={{
                    backgroundColor: "#eaeaea",
                }}>
                    <td style={{
                                textAlign: "center",
                                color: "#000",
                                fontWeight: "bold"
                            }}>Productos</td>
                    <td style={{
                                textAlign: "center",
                                color: "#000",
                                fontWeight: "bold"
                            }}>Cantidad:</td>
                    <td style={{
                                textAlign: "center",
                                color: "#000",
                                fontWeight: "bold"
                            }}>Precio</td>
                    <td style={{
                    textAlign: "right",
                    paddingRight:"1rem",
                    color: "#000",
                    fontWeight: "bold"
                }}>Subtotal</td>
                </tr>
                {products.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td style={{
                                display: "flex",
                                gap: "0.8rem",
                                marginLeft:"1rem",
                                alignItems: "center"

                            }}><img alt={item.name} src={`/products/${item.image}`} width={80} height={80} />  <span>{item.name}</span>  </td>
                            <td style={{
                                textAlign: "center"
                            }}>{item.quantity}</td>
                            <td style={{
                                textAlign: "center"
                            }}>{item.price}</td>
                            <td style={{
                    textAlign: "right",
                    paddingRight:"1rem",
                }}>{item.subtotal}</td>
                        </tr>
                    )
                })}
                <tr style={{
                    borderTop: "1px solid #000"
                }}>
                    <td colSpan={3} style={{
                    textAlign: "right",
                    color: "#333",
                    fontWeight: "bold"
                }}>Subtotal:</td>
                    <td style={{
                    textAlign: "right",
                    paddingRight:"1rem",
                }}>S/ {invoice.subtotal}</td>
                </tr>
                <tr>
                    <td colSpan={3} style={{
                    textAlign: "right",
                    color: "#333",
                    fontWeight: "bold"
                }}>Envio:</td>
                    <td style={{
                    textAlign: "right",
                    paddingRight:"1rem",
                }}>S/ {invoice.delivery}</td>
                </tr>
                <tr>
                    <td colSpan={3} style={{
                    textAlign: "right",
                    color: "#333",
                    fontWeight: "bold"
                }}>Total:</td>
                    <td style={{
                    textAlign: "right",
                    paddingRight:"1rem",
                    fontSize: "1.3rem",
                    color: "#3DB9BE",
                    fontWeight: "bold"
                }}>S/ {invoice.total}</td>
                </tr>
            </table>
        <tr >
            <td style={{
            padding: "1rem"
        }}>
                <p>Gracias por elegir nuestra tienda en línea. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>
                <p style={{
                    textAlign: "right",
                    color: "#333",
                    fontWeight: "bold"
                }}>contact@wisefleet.com</p>
            </td>
        </tr>
    </table>
);
