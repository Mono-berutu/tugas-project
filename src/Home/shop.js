// Belanja.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css-styling/awal.css'
import 'boxicons/css/boxicons.min.css';
import logo from './Group 2 (1).svg'
import gambar1 from '../gambar produk versi 2/jam 1.jpg';
import gambar2 from '../gambar produk versi 2/jam 2.jpg';
import gambar3 from '../gambar produk versi 2/jam 3.jpeg';
import gambar4 from '../gambar produk versi 2/jam 4.jpg';
import gambar5 from '../gambar produk versi 2/tas 1.jpg';
import gambar6 from '../gambar produk versi 2/tas 2.jpeg';
import gambar7 from '../gambar produk versi 2/tas 3.jpeg';
import gambar8 from '../gambar produk versi 2/tas 4.jpg';
import gambar9 from '../gambar produk versi 2/sepatu merk olukai.jpg';
import gambar10 from '../gambar produk versi 2/sepatu merk run  star hike.jpg';
import Slider from 'react-slick';

import gambarslidi1 from './keranjang_part_2.png'
import gambarslidi2 from './keranjang_prev_ui.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
const Belanja = () => {
    const [produk] = useState([
        // ini untuk data jam tangan
        {
            gambar: gambar1,
            nama: "CASIO",
            harga: 200000,
        },
        {
            gambar: gambar2,
            nama: "FOSSIL",
            harga: 1000000,
        },
        {
            gambar: gambar3,
            nama: "ORIENT",
            harga: 1200000,
        },
        {
            gambar: gambar4,
            nama: "CITIZEN",
            harga: 85000,
        },
        {
            gambar: gambar10,
            nama: "STAR HIKE",
            harga: 1500000,
        },
        {
            gambar: gambar9,
            nama: "OLUKAI",
            harga: 2000000,
        },
        {
            gambar: gambar5,
            nama: "HERMES",
            harga: 5200000,
        },
        {
            gambar: gambar6,
            nama: "LOUIS VUITTON",
            harga: 4720000,
        },
        {
            gambar: gambar7,
            nama: "DIOR",
            harga: 3500000,
        },
        {
            gambar: gambar8,
            nama: "GUCCI",
            harga: 11520000,
        }
    ]);

    const navigate = useNavigate();

    const lihatDetail = (id) => {
        navigate(`/pratinjau/${id}`);
    };

    useEffect(() => {
        const waktuBerakhir = new Date();
        waktuBerakhir.setDate(waktuBerakhir.getDate() + 1);

        const jamt = document.querySelector('.isijam');
        const menitt = document.querySelector('.isimenit');
        const detikt = document.querySelector('.isidetik');

        function perbaruiHitunganMundur() {
            const waktuSaatIni = new Date();
            const selisihWaktu = waktuBerakhir - waktuSaatIni;

            if (selisihWaktu <= 0) {
                document.querySelector('.waktu').style.display = 'none';
            } else {
                const jam = Math.floor(selisihWaktu / (1000 * 60 * 60));
                const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
                const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

                jamt.textContent = jam;
                menitt.textContent = menit;
                detikt.textContent = detik;
                setTimeout(perbaruiHitunganMundur, 1000);
            }
        }

        perbaruiHitunganMundur();
    }, []);
    return (
        <div>
            {/* <!-- ====== Header ====== --> */}
            <header className="header">
                {/* <!-- ====== Navigation ====== --> */}

                {/* <!-- ====== Hero Area ====== --> */}
                <div className="hero" id="home">
                    <Slider {...settings} className='row container d-flex skeleton coursel'>
                        <div className="col" id="col">
                            <span className="subtitle">Hanya untuk Waktu Terbatas</span>
                            <h1>lucky store</h1>
                            <p>TAMPILKAN PENAMPILAN TERBAIKMU DI HARI TERBAIKMU</p>
                            <button className="btn">Jelajahi Sekarang!</button>
                            <img src={gambarslidi2} alt="" className='gambar-slide' />
                        </div>
                        <div className="col" id="col">
                            <span className="subtitle">Hanya untuk Waktu Terbatas</span>
                            <h1>big sale</h1>
                            <p>TAMPILKAN PENAMPILAN TERBAIKMU DI HARI TERBAIKMU</p>
                            <button className="btn">Jelajahi Sekarang!</button>
                            <img src={gambarslidi1} alt="" className='gambar-slide' />
                        </div>
                    </Slider>
                </div>
            </header>

            <div className="promo container skeleton">
                <h2>Waktu Terbatas Belanja segera</h2>
                <div className="waktum">
                    <p>Promo berakhir dalam:</p>
                    <div className="waktu">
                        <div className="jam">
                            <div className="isijam"></div>
                        </div>
                        <div className="menit">
                            <div className="isimenit"></div>
                        </div>
                        <div className="detik">
                            <div className="isidetik"></div>
                        </div>
                    </div>
                    <span id="timer"></span>
                </div>

                <a href="#shop" className="promobtn">Buy Now</a>
            </div>

            {/* <!-- ====== Tranding ====== --> */}
            <section className="tranding skeleton" id="tranding">
                <h2>Produk Terbaik</h2>
                <div className="produk">
                    {produk.map((produk, index) => (
                        <div className="isi-produk" key={index}>
                            <div className="gambar">
                                <img src={produk.gambar} alt="" />
                                <div className="preview">
                                    <i className="bx bx-heart"></i>
                                    <i className="bx bx-search lihatview" onClick={() => lihatDetail(index)}></i>
                                </div>
                            </div>
                            <p>{produk.nama}</p>
                            <p>{`Rp${produk.harga.toLocaleString()}`}</p>
                        </div>
                    ))}
                </div>
                <a href="#/" className="lihat">Lihat Lebih Banyak</a>
            </section>
            {/* <!-- ====== About-us ====== --> */}
            <div className="footer" id="tentang">
                <div className="row container skeleton">
                    <div className="col">
                        <div className="logo d-flex">
                            <img src={logo} alt="logo" id="logotentang" />
                        </div>
                        <p>
                            Lorem ipsum adalah teks pengganti <br />
                            yang umum digunakan sebagai teks acuan.
                        </p>
                        <div className="icons d-flex">
                            <div className="icon d-flex">
                                <i className="bx bxl-facebook"></i>
                            </div>
                            <div className="icon d-flex"><i className="bx bxl-twitter"></i></div>
                            <div className="icon d-flex"><i className="bx bxl-instagram"></i></div>
                            <div className="icon d-flex"><i className="bx bxl-youtube"></i></div>
                        </div>
                        <p className="color">
                            Copyright 2023 <br />
                            @LUCKY STORE
                        </p>
                    </div>
                    <div className="col">
                        <div>
                            <h4>Produk</h4>
                            <a href="#/">Unduh</a>
                            <a href="#/">Harga</a>
                            <a href="#/">Lokasi</a>
                            <a href="#/">Server</a>
                            <a href="#/">Negara</a>
                            <a href="#/">Blog</a>
                        </div>
                        <div>
                            <h4>Kategori</h4>
                            <a href="#/">Pria</a>
                            <a href="#/">Wanita</a>
                            <a href="#/">Anak-anak</a>
                            <a href="#/">Produk Terlaris</a>
                            <a href="#/">Produk Terbaru</a>
                        </div>
                        <div>
                            <h4>Akun Saya</h4>
                            <a href="#/">Akun Saya</a>
                            <a href="#/">Diskon</a>
                            <a href="#/">Pengembalian</a>
                            <a href="#/">Riwayat Pesanan</a>
                            <a href="#/">Pelacakan Pesanan</a>
                        </div>
                        <div>
                            <h4>Hubungi Kami</h4>
                            <div className="d-flex">
                                <div className="icon"><i className="bx bxs-map"></i></div>
                                <span>Jalan Medan Baru No. 456, Medan, Indonesia</span>
                            </div>
                            <div className="d-flex">
                                <div className="icon"><i className="bx bxs-envelope"></i></div>
                                <span>info@luckystore.com</span>
                            </div>
                            <div className="d-flex">
                                <div className="icon"><i className="bx bxs-phone"></i></div>
                                <span>+62.....</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Belanja;
