import React from "react";
import { HeaderLogReg } from "../../components/HeaderLogReg";
import LoginRegisterImg from "../../assets/log-in.svg";
import MailImg from "../../assets/mail.svg";
import MailImgFocus from "../../assets/mail-focus.svg";
import SenhaImg from "../../assets/lock.svg";
import SenhaImgFocus from "../../assets/lock-focus.svg";
import SideImage from "../../assets/side-image.jpg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";



export const Register: React.FC = () => {
    return(
        <div className="flex">
            <div className="w-[50vw] h-[100vh]">
                <HeaderLogReg />
                <div className="w-[50vw] flex justify-center large:w-[100vw]">
                    <div className="flex flex-col justify-center items-start py-14 px-28 w-[100%] max-w-[572px] mt-14 bg-formBackground rounded-lg gap-6 large:max-w-[640px] small:bg-background small:py-5 small:px-10 small:m-0 micro:py-8 micro:px-7 ">
                        <div className="flex gap-2.5 items-start flex-col">
                            <div className="flex gap-1.5 items-center">
                                <img src={LoginRegisterImg} alt="Login Icon" />
                                <h1 className="text-[24px] font-bold">Faça seu registro</h1>
                            </div>
                            <p>Entre com suas informações de registro.</p>
                        </div>
                        <form className="flex flex-col justify-center gap-5 w-[100%]">

                            <Input
                                type="email"
                                label="E-mail"
                                placeholder="Digite seu e-mail"
                                InputImg={MailImg}
                                InputImgFocus={MailImgFocus}
                            />

                            <Input
                                type="text"
                                label="Nome"
                                placeholder="Digite seu nome"
                                InputImg={MailImg}
                                InputImgFocus={MailImgFocus}
                            />

                            <Input
                                type="senha"
                                label="Senha"
                                placeholder="Digite sua senha"
                                InputImg={SenhaImg}
                                InputImgFocus={SenhaImgFocus}
                            />

                            <Input
                                type="senha"
                                label="Confirmar senha"
                                placeholder="Digite novamente sua senha"
                                InputImg={SenhaImg}
                                InputImgFocus={SenhaImgFocus}
                            />

                            <div className="mt-4">
                                <Button text="REGISTRAR" />
                            </div>
                                </form>

                        <div className="flex justify-center items-center w-[100%]">
                            <p className="text-primaryColor text-base flex gap-2">
                                Já tem uma conta?
                                <Link to="/login" className="text-#D8C716 font-semibold hover:underline  hover:text-primaryColor transition duration-300">
                                Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="w-[50vw] h-[100vh] absolute contrast-125 right-0 object-cover -z-10 small:hidden" src={SideImage} alt="" />
        </div>
    )
}