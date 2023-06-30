import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Keranjang from './Home/cart';
import Belanja from './Home/shop';
import Pratinjau from './Home/preview';
import gambar1 from './gambar produk versi 2/jam 1.jpg';
import gambar2 from './gambar produk versi 2/jam 2.jpg';
import gambar3 from './gambar produk versi 2/jam 3.jpeg';
import gambar4 from './gambar produk versi 2/jam 4.jpg';
import gambar5 from './gambar produk versi 2/tas 1.jpg';
import gambar6 from './gambar produk versi 2/tas 2.jpeg';
import gambar7 from './gambar produk versi 2/tas 3.jpeg';
import gambar8 from './gambar produk versi 2/tas 4.jpg';
import gambar9 from './gambar produk versi 2/sepatu merk olukai.jpg';
import gambar10 from './gambar produk versi 2/sepatu merk run  star hike.jpg';
import LoginForm from './component/login';
import RegisterForm from './component/register';
import logo from './Home/Group 2 (1).svg';

function UserPanel({ user, handleLogout }) {
  return (
    <div className="user-panel">
      <p className="user-name">{user.nama}</p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [keranjang, setKeranjang] = useState([]);

  const handleLogin = (nama, email) => {
    setIsLoggedIn(true);
    setUser({ nama, email });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const hapusDariKeranjang = (item) => {
    const keranjangBaru = keranjang.filter((barang) => barang !== item);
    setKeranjang(keranjangBaru);
  };

  const tambahJumlah = (item) => {
    const keranjangBaru = keranjang.map((barang) => {
      if (barang === item) {
        return {
          ...barang,
          jumlah: barang.jumlah + 1,
        };
      }
      return barang;
    });
    setKeranjang(keranjangBaru);
  };

  const kurangiJumlah = (item) => {
    const keranjangBaru = keranjang.map((barang) => {
      if (barang === item && barang.jumlah > 1) {
        return {
          ...barang,
          jumlah: barang.jumlah - 1,
        };
      }
      return barang;
    });
    setKeranjang(keranjangBaru);
  };

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

  const tambahKeKeranjang = (produk) => {
    const itemSama = keranjang.find((item) => item.nama === produk.nama);
    if (itemSama) {
      const keranjangBaru = keranjang.map((item) =>
        item.nama === produk.nama ? { ...item, jumlah: item.jumlah + 1 } : item
      );
      setKeranjang(keranjangBaru);
    } else {
      setKeranjang([...keranjang, { ...produk, jumlah: 1 }]);
    }
  };

  return (
    <Router>
      <div className="header">
        <nav className="navbar">
          <div className="row container d-flex">
            <div className="logo skeleton">
              <Link to="/">
                <img src={logo} alt="" id="khusus" />
              </Link>
            </div>

            <div className="nav-list d-flex skeleton">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <a href="#tranding">Tranding</a>
              <a href="#tentang">About-Us</a>
              <div className="close">
                <i className="bx bx-x"></i>
              </div>
            </div>

            <div className="icons d-flex skeleton">
              <div className="icon like-icon d-flex">
                <i className="bx bx-heart"></i>
              </div>
              <div className="icon d-flex isi-no">
                <Link to="/keranjang">
                  <i className="bx bx-shopping-bag bag"></i>
                </Link>
                <span>{keranjang.length}</span>
              </div>
              <div className="icon heart-icon d-flex">
                <i className="bx bx-moon mode-gelap"></i>
              </div>
              {isLoggedIn ? (
                <>
                  <div className="icon user-icon d-flex">
                    <UserPanel user={user} handleLogout={handleLogout} />
                  </div>
                </>
              ) : (
                <div className="icon user-icon d-flex">
                  <Link to="/login">
                    <i className="bx bx-user"></i>
                  </Link>
                </div>
              )}
            </div>

            <div className="hamburger">
              <i className="bx bx-menu-alt-right"></i>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Belanja />} />
        <Route
          path="/pratinjau/:id"
          element={<Pratinjau produk={produk} tambahKeKeranjang={tambahKeKeranjang} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/keranjang"
          element={
            <Keranjang
              keranjang={keranjang}
              hapusDariKeranjang={hapusDariKeranjang}
              tambahJumlah={tambahJumlah}
              kurangiJumlah={kurangiJumlah}
            />
          }
        />

        <Route
          path="/login"
          element={<LoginForm handleLogin={handleLogin} />}
        />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
