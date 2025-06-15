import "./index.css";

function App() {
  return (
    <section id="google-section">
      <header>
        <div>About</div>
        <div>Store</div>
        <div>Gmail</div>
        <div>Images</div>
      </header>

      <main>
        <div className="logo">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="goggle-logo"
          />
        </div>

        <div className="searchBtn">
          <i class="ph ph-magnifying-glass"></i>
          <input type="text" placeholder="" />
        </div>
      </main>
    </section>
  );
}

export default App;
