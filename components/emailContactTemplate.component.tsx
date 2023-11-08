import * as React from 'react';

interface EmailTemplateProps {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    date: string;
}

export const EmailContactTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
    email,
    phone,
    message,
    date,
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
                }}>Solicitud de contacto</h1>
            </td>
        </tr>
        <tr>
            <table cellSpacing="0" cellPadding="5" width="100%" align='center'>
                <tr style={{
                    backgroundColor: "#eaeaea",
                }}>
                    <td style={{
                                textAlign: "center",
                                color: "#000",
                                fontWeight: "bold"
                            }}>Fecha - Hora</td>
                    <td style={{
                                textAlign: "center",
                                color: "#000",
                                fontWeight: "bold"
                            }}>Nombre</td>
                    <td style={{
                                textAlign: "center",
                                color: "#000",
                                fontWeight: "bold"
                            }}>Correo</td>
                    <td style={{
                                textAlign: "center",
                                color: "#000",
                                fontWeight: "bold"
                            }}>Teléfono</td>
                    {/* <td style={{
                                textAlign: "center",
                                color: "#000",
                                fontWeight: "bold"
                            }}>Message</td> */}
                </tr>

                <tr>
                    <td>{date}</td>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    {/* <td>{message}</td> */}
                </tr>
            </table>
        </tr>

        <tr>
            <p><span style={{ fontWeight: "bolder"}}>Mensaje:</span> {message}</p>
        </tr>
    </table>
)