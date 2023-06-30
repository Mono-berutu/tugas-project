import React, { useState } from 'react';
import '../css-styling/keranjangstyle.css';

const Keranjang = ({ keranjang, hapusDariKeranjang, tambahJumlah, kurangiJumlah }) => {
    const [pilihitem, aturpilihanitem] = useState([]);

    const toggleSelectItem = (item) => {
        if (pilihitem.includes(item)) {
            const ubahselekitem = pilihitem.filter((selectedItem) => selectedItem !== item);
            aturpilihanitem(ubahselekitem);
        } else {
            aturpilihanitem([...pilihitem, item]);
        }
    };

    const hapusItem = (item) => {
        alert('Produk Berhasi Dihapus');
        hapusDariKeranjang(item);
    };

    const tambahJumlahItem = (item) => {
        tambahJumlah(item);
    };

    const kurangiJumlahItem = (item) => {
        kurangiJumlah(item);
    };

    const hitungTotalHarga = () => {
        let total = 0;
        pilihitem.forEach((item) => {
            total += parseFloat(item.harga) * item.jumlah;
        });
        return `Rp.${total.toLocaleString()}`;
    };

    return (
        <div className="keranjang">
            <div className="gayakeranjang">
                <h2>Keranjang</h2>
                {keranjang.map((item, index) => (
                    <div key={index} className="isi-keranjang">
                        <input
                            type="checkbox"
                            checked={pilihitem.includes(item)}
                            onChange={() => toggleSelectItem(item)}
                        />
                        <img src={item.gambar} alt="" />
                        <p>{item.nama}</p>
                        <p>{`Rp.${item.harga}`}</p>
                        <div className='btn'>
                            <button className='jumlah' onClick={() => tambahJumlahItem(item)}>+</button>
                            <span>{item.jumlah}</span>
                            <button className='jumlah' onClick={() => kurangiJumlahItem(item)}>-</button>
                        </div>
                        <button onClick={() => hapusItem(item)}>Hapus</button>
                    </div>
                ))}
                <div className="total-harga">
                    <p>Total Harga:</p>
                    <p>{hitungTotalHarga()}</p>
                </div>
            </div>
        </div>
    );
};

export default Keranjang;
