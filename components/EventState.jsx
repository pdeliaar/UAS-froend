import { useState } from "react";
const EventState = () => {
  const [nama, setNama] = useState("");
  const [notelepon, setNotelepon] = useState("");
  const [gender, setGender] = useState("Pria");
  const [pilbat, setPilbad] = useState("");
  // const [presAk, setPresAk] = useState(false);
  return (
    <div className="container m-4">
      <div className="row">
        <div className="col-5">
          <h3>Form Pembelian</h3>
          <hr />
          <div className="mb-2">
            <label htmlFor="nama">Nama</label>
            <input
              className="form-control"
              type="text"
              name="nama"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="notelepon">No telepon</label>
            <input
              className="form-control"
              type="text"
              name="notelepon"
              id="notelepon"
              value={notelepon}
              onChange={(e) => setNotelepon(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="fs-5">
              Gender
            </label>
            <br />
            <div className="form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="genderPria"
                checked={() => setGender("Pria")}
                value="Pria"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="genderPria">
                Pria
              </label>
            </div>

            <div className="form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="genderWanita"
                checked={() => setGender("Wanita")}
                value="Wanita"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="genderWanita">
                Wanita
              </label>
            </div>
          </div>
          <div className="mb3">
            <label htmlFor="" className="fs-5">
              Pilihan Produk
            </label>
            <select
              name="pilihanProduk"
              id=""
              className="form-select"
              value={pilbat}
              onChange={(e) => setPilbat(e.target.value)}
            >
              <option value="kopi">Kopi</option>
              <option value="gajah oling">Gajah Oling</option>
              <option value="Parasgempal">Paras Gempal</option>
             
            </select>
          </div>
        </div>

        <div className="col-7">
          <h3>Resume</h3>
          <hr />
          <div>
            <h5 className="mt-5">Nama : {nama}</h5>
            <h5 className="mt-5">No Telepon : {notelepon}</h5>
            <h5 className="mt-5">Gender : {gender}</h5>
            <h5 className="mt-5">Pilihan Produk : {pilbat}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventState;
