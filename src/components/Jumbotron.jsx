function Jumbotron() {
  return (
    <>
      <section>
        <div className="container py-0 py-sm-5 px-4 px-sm-0">
          <div className="row gx-5 d-flex flex-wrap align-items-center flex-column-reverse flex-sm-row">
            <div className="col-sm-6 col-lg-8 py-4  py-lg-0 d-flex justify-content-start">
              <h1 className="display-4"><span className="d-block">Hi, I&apos;m Richard. </span><span className="d-block">A Front-End Developer and Designer.</span></h1>

            </div>

            <div className="col-sm-6 col-lg-4 py-4  py-lg-0 d-flex justify-content-center">
              <img id="profile-picture" src="./assets/images/profile-picture.jpeg" className="img-fluid rounded-circle" alt="Profile Picture"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron;
