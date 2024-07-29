import { useRouter } from "next/router"
import { useEffect } from "react";

export default function DetailLayananSlug(){
    const router = useRouter()

    //console.log('apa isi router', router)
    
    

    useEffect(() => {
        if (!router.query.slug) return
        const [ slugName, idLayanan ] = router.query.slug
        console.log('slugName, idLayanan', slugName, idLayanan)
        }, [router.query]);

    return (
        <section>
            Ini detail layanan
        </section>
    )
}