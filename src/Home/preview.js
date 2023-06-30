// Pratinjau.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css-styling/pratinjaustyle.css';

const Pratinjau = ({ produk, tambahKeKeranjang, isLoggedIn }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const produkDetail = produk.find((item, index) => index === parseInt(id));

    const tambahKeKeranjangHandler = (produk) => {
        if (isLoggedIn) {
            alert('Produk Berhasil Ditambah');
            tambahKeKeranjang(produk);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="pratinjau-detail">
            {produkDetail && (
                <div className="pratinjau-produk">
                    <img src={produkDetail.gambar} alt="" />
                    <div className="nama">
                        <p>{produkDetail.nama}</p>
                        <p>{`Rp.${produkDetail.harga.toLocaleString()}`}</p>
                        <p className="penjelasan">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vel? Maxime ducimus, hic, soluta similique
                            libero dignissimos deserunt fugiat enim beatae praesentium veritatis quidem illum. Maxime voluptatem quaerat
                            eligendi eaque?
                        </p>
                        <div className="btn">
                            <button>Beli Sekarang</button>
                            <button onClick={() => tambahKeKeranjangHandler(produkDetail)}>
                                Tambah ke Keranjang
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pratinjau;
