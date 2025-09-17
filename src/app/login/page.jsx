import Link from "next/link";

export default function Page(){
    return(
        <main>

        <p>No tienes una cuenta? <Link href="/register">registrate.</Link></p>
        </main>
    )
}