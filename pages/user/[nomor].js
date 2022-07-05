import { useRouter } from "next/router"

const nomor = () =>{
    const kainbatik = [
            {nomor : '111', namabatik : 'kopi'},
            {nomor : '112', namabatik : 'gajah oling'},
            {nomor : '113', namabatik : 'paras gempal'}
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {nomor} = router.query;
    const data = kainbatik.find(m => m.nomor == nomor)
    return(
        <>
            <p>Nomor : {nomor}</p>
            <p>Nama Batik: {data.namabatik}</p>
        </>
    )
}

export default nomor;