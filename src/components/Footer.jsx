function Footer() {
  return (
    <>

      <footer className="container px-5 px-sm-0 d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">



          <span className="mb-3 mb-sm-0 text-muted">© 2024 Richard Llewellyn</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="https://github.com/RichLlew182"><i
            className="fa-brands fa-github text-info me-2"></i>Github</a></li>
          <li className="ms-3"><a className="text-muted" href="https://github.com/RichLlew182"><i
            className="fa-brands fa-linkedin text-info me-2"></i>Linkedin</a></li>
          <li className="ms-3"><a className="text-muted" href="https://github.com/RichLlew182"><i className="fa-solid fa-file-lines text-info me-2"></i>Resume</a></li>

        </ul>
      </footer >

    </>
  );
}

export default Footer;
