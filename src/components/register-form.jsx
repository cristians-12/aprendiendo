"use client"

import { storeAuthCookie } from "@/app/register/page";
import { supabase } from "@/utils/supabase";
import { useState } from "react"

export default function RegisterForm() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let { data, error } = await supabase.auth.signUp({
                email,
                password
            })
            storeAuthCookie(data.session.access_token);
            alert("Te registraste exitosamente");

            console.log(data, error)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[50%] mx-auto">
            <input
                onChange={(e) => setEmail(e.target.value)}
                className="border border-white"
                type="text"
                placeholder="Ingresa tu email"
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="border"
                type="text"
                placeholder="Ingresa tu contraseña"
            />
            <button>
                Registrate
            </button>
        </form>
    )
}