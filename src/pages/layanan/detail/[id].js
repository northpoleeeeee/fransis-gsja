import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailLayanan(){
    const router = useRouter()

    //console.log('apa isi router', router)
    const { id } = router.query

    useEffect(() => {
        if (!id) return
        console.log('id == ', id)
        }, [router.query]);

    return (
        <section>
            Ini detail layanan
        </section>
    )
}