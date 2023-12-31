import useResponsive from "@/utils/responsive";
import Image from "next/image";
import Router from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { Alert, Form, Modal, Spinner } from "react-bootstrap";



export function ModalForms(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const submit = async (event) => {
        event.preventDefault();
        const form = {
            name: event.target.name.value,
            email: event.target.email.value,
            whatsapp: event.target.whatsapp.value,
        }
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        };
        setIsLoading(true);
        const response = await fetch("/api/email/validation", postData);
        if (response.status == 200) {
            Router.push("https://pay.kiwify.com.br/BFKJu73");
        }
        else {
            setIsLoading(false);
            setIsError(true);
        }
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton style={{ backgroundColor: "#121212", border: 0 }}></Modal.Header>
            <Modal.Body className={`modal-ht6 ${useResponsive() == 'desktop' ? 'px-5' : ''}`}>
                <h1 className="title text-center pt-0" style={{ fontSize: useResponsive() == 'desktop' ? 36 : 24, lineHeight: 1 }}>
                    Complete o formulário, está quase lá para garantir sua Vaga no <Image
                        width={useResponsive() == 'desktop' ? 110 : 61}
                        height={useResponsive() == 'desktop' ? 31 : 18}
                        src={"/logo_horizontal.png"}
                        alt="André Felipe"
                    />
                </h1>
                <form onSubmit={submit}>
                    <Form.Group className="mb-2">
                        <Form.Label className="text-white"><b>Nome</b></Form.Label>
                        <Form.Control id="name"
                            name="name" type="text" placeholder="" className="input" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label className="text-white"><b>Email</b></Form.Label>
                        <Form.Control id="email"
                            name="email" type="email" placeholder="exemplo@gmail.com" className="input" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label className="text-white"><b>Whatsapp + DDD</b></Form.Label>
                        <Form.Control id="whatsapp"
                            name="whatsapp" type="text" placeholder="(15) 99999-9999" maxLength={15} className="input" />
                    </Form.Group>
                    <button className="button-ht6 w-100 text-center mb-3" type="submit" >
                        {isLoading ? (
                            <Spinner size="sm" />
                        ) : (
                            <>
                                Continuar
                            </>
                        )}
                    </button>

                    {isError ?
                        <div>
                            <Alert key={"danger"} variant={"danger"}>
                                Atenção: Preencha todos os campos
                            </Alert>
                        </div>
                        : <></>}
                </form>

            </Modal.Body>
        </Modal >
    );
}