function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2024 Richard Llewellyn</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="https://github.com/RichLlew182">Github</a></li>
            <li className="ms-3"><a className="text-muted" href="https://github.com/RichLlew182">Linkedin</a></li>
            <li className="ms-3"><a className="text-muted" href="https://github.com/RichLlew182">Resume</a></li>

          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
