import "boxicons";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="header">
      <div className="atas">
        <div className="kiriatas">
          <box-icon name="mobile-alt" color="#aaaaaa"></box-icon>
          <p className="ml-1">Download Tokopedia App</p>
        </div>
        <div className="kananatas">
          <p>Tentang Tokopedia</p>
          <p>Mitra Tokopedia</p>
          <p>Mulai Berjualan </p>
          <p>Promo</p>
          <p>Tokopedia Care</p>
        </div>
      </div>
      <div className="tengah">
        <div className="kiritengah">
          <img
            src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
            alt="logo"
            loading="lazy"
          />
          <p>Kategori</p>
        </div>
        <div className="tengahtengah">
          <div className="search">
            <svg
              className="absolute ml-2"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="var(--NN500, #8D96AA)"
            >
              <path d="M20.53 19.46l-4.4-4.4a7.33 7.33 0 10-1.07 1.06l4.41 4.41a.77.77 0 001.06 0 .77.77 0 000-1.07zm-15.78-9a5.75 5.75 0 115.75 5.75 5.76 5.76 0 01-5.75-5.72v-.03z"></path>
            </svg>
            <input
              className="w-[415.859px] h-[38px] pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 font-medium"
              type="text"
              placeholder="Cari Di Tokopedia"
            />
            <div className="ml-9">
              <box-icon name="cart"></box-icon>
            </div>
          </div>
        </div>
        <div className="kanantengah">
          <button className="px-4 py-2 text-sm border border-green-400 font-bold  rounded-lg">
            Masuk
          </button>
          <button className="px-4 py-2 text-white text-sm font-bold bg-green-600 rounded-lg ml-3">
            Daftar
          </button>
        </div>
      </div>
      <div className="bawah">
        <div className="kananbawah">
          <p>sepatu anak</p>
          <p>ronin knalpot</p>
          <p>dus bekas</p>
          <p>kasur angin</p>
          <p>flazz bca gen 2</p>
          <p>redmi note 13</p>
        </div>
        <div className="lokasi">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="var(--color-icon-enabled, #2E3137)"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.02 2.809A7.67 7.67 0 0112 2.24 7.67 7.67 0 0119.75 10c0 7.264-6.896 11.372-7.365 11.65a.81.81 0 01-.755.01l-.015-.01C11.146 21.373 4.25 17.265 4.25 10a7.67 7.67 0 014.77-7.191zM5.75 10c0 5.58 4.85 9.18 6.25 10.11 1.4-.93 6.25-4.55 6.25-10.11A6.188 6.188 0 0012 3.74 6.19 6.19 0 005.75 10zm4.168-3.129A3.75 3.75 0 0112 6.24 3.76 3.76 0 0115.75 10a3.75 3.75 0 11-5.832-3.129zm.83 4.99a2.25 2.25 0 102.503-3.74 2.25 2.25 0 00-2.502 3.74z"
            ></path>
          </svg>
          <p>Dikirim ke</p>
          <p>Jakarta Pusat</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
