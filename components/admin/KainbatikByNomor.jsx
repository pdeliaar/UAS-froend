import { useRouter } from "next/router";
import { useState } from "react"

const KainbatikByNomor= () =>{
    const [merk, setNomor] = useState('')
    const router = useRouter()
    const getKbByNomor = (e) =>{
        e.preventDefault();
        router.push({
            pathname : 'datakainbatik',
            query : {'nomor' : nomor}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getKbByNomor}>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col d-flex flex-reverse">
                        <input type="text"
                            className="from-control"
                            placeholder="Cari by Nomor"
                            value={nomor}
                            onChange={(e)=>setNomor(e.target.value)}
                        />
                        <input type="submit" value="Cari"
                                className="btn btn-success ms-2 fs-6" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default KainbatikByNomor;