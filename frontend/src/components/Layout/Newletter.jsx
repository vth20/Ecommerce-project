import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="news">
        <div className="news-text">
          <h2>Newsletter</h2>
          <h3><i>Connect through information, build through community</i></h3>
          <form>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
