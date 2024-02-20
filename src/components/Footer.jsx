function Footer() {
  return (
    <>

      <footer className="container px-4 px-sm-0 d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center py-3 my-4 border-top">
        <div className="col-sm-6 d-flex align-items-center">



          <span className="mb-3 mb-sm-0">© 2024 Richard Llewellyn</span>
        </div>

        <ul className="nav col-sm-6 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-decoration-none" target="_blank" href="https://github.com/RichLlew182"><i
            className="fa-brands fa-github me-2"></i>Github</a></li>
          <li className="ms-3"><a className="text-decoration-none" target="_blank" href="https://github.com/RichLlew182"><i
            className="fa-brands fa-linkedin  me-2"></i>Linkedin</a></li>
          <li className="ms-3"><a className="text-decoration-none" target="_blank" href="./assets/files/richard-llewellyn-cv.pdf"><i className="fa-solid fa-file-lines me-2"></i>Resume</a></li>

        </ul>
      </footer >

    </>
  );
}

export default Footer;
