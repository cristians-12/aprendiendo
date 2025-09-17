"use server"
import RegisterForm from "@/components/register-form";
import { cookies } from "next/headers";

export const storeAuthCookie = async (cookie)=>{
    console.dir('La cookie es', cookie);
    const cookiesStore = await cookies();
    cookiesStore.set('auth_spotify', cookie,{secure:true})
}

export default async function Page(){

    return(
        <div className="min-h-screen bg-black">
            Registrate con nosotros.
            <RegisterForm />
        </div>
    )
}