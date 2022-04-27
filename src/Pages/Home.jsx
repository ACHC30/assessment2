import logo from "../logo.svg";
function Home() {
    return (
      <div>
        <h1>
          Stock prices API Assessment 2 IFN666{" "}
          <img src={logo} className="App-logo" alt="logo" />{" "}
        </h1>
        <p>
          Welcome to the Stock Market Portal. You may click on stocks to view all
          the available companies or Quote to get the latest price information by
          stock symbol, or choose Price History or search to sample from the most
          recent one hundred days of information for a particular stock.
        </p>
      </div>
    );
}

export default Home;