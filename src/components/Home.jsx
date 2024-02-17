function Home() {
  return (
    <>
      <section className="container py-5">
        <h2 className="mb-4 display-5 fw-bold">About</h2>

        <div className="mb-4">
          <p>I&apos;m Richard, a Front End Developer and designer living and working in
            London.</p>
          <p>
            After several years in the design industry I am now looking for new challenges and opportunities as a
            Developer, so I have created this website to demonstrate some of my work.
          </p>
          <p>
            If you would like to learn more, please check out some of my recent projects, or feel free to get in touch.
          </p>
        </div>
        <div className="btn-toolbar">
          <a className="btn btn-primary me-2" href="#project-gallery" type="button">View Projects</a><a href="#contact" className="btn btn-secondary me-2" type="button">Get in Touch</a>
        </div>



      </section >
    </>
  );
}

export default Home;
