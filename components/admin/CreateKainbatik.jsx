import { useState } from "react"
import axios from "axios"

const CreateKainbatik = () => {
    const [nomor, setNomor] = useState('');
    const [namabatik, setNamabatik] = useState('');
    const [tanggalbeli, setTanggalbeli] = useState('');
    const [namapembeli, setNamapembeli] = useState('');
   
   
    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/kainbatik", {
                    nomor,
                    namabatik,
                    tanggalbeli,
                    namapembeli,
                })
                .then(response => {
                    console.log(response);
                });
            alert("Penambahan Data sukses")
           clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }
    const clearInput = () => {
        setNomor('')
        setNamabatik('')
        setTanggalbeli('')
        setNamapembeli('')
    }

    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Kain Batik</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nomor"
                                type="text"
                                placeholder="nomor"
                                value={nomor}
                                onChange={(e) => setNomor(e.target.value)}
                            />
                            <label htmlFor="nim">Nomor</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="namabatik"
                                type="text"
                                placeholder="namabatik"
                                value={namabatik}
                                onChange={(e) => setNamabatik(e.target.value)}
                            />
                            <label htmlFor="nama">Nama Batik</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="tanggalbeli"
                                type="text"
                                placeholder="tanggalbeli"
                                value={tanggalbeli}
                                onChange={(e) => setTanggalbeli(e.target.value)}
                            />
                            <label htmlFor="angkatan">Tanggal Beli</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="namapembeli"
                                type="text"
                                placeholder="namapembeli"
                                value={namapembeli}
                                onChange={(e) => setNamapembeli(e.target.value)}
                            />
                            <label htmlFor="prodi">Nama Pembeli</label>
                        </div>
                    </div>
                    <div className="w-75 d-flex flex-row-revverse">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateKainbatik;