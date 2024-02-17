function About() {
  return (
    <>
      <section className="container">
        <h1>About</h1>

        <p>Hi there! I'm Richard, a Graphic Designer and soon-to-be Front End Developer living and working in
          London.</p>
        <p>
          After several years in the design industry I am now looking for new challenges and opportunities as a
          Developer, so I have created this website to demonstrate some of my work.
        </p>
        <p>
          If you like what you see please get in touch below.</p>

        <ul className="list-group">
          <li className="list-group-item bg-transparent border-0 px-0"><a className=" text-decoration-none text-dark" href=""><i className="fa-solid fa-phone me-1" aria-hidden="true"></i> Call
            Me</a></li>
          <li className="list-group-item bg-transparent border-0 px-0"><a className=" text-decoration-none text-dark" href="mailto:richard.lee.llewellyn@gmail.com"><i className="fa-regular fa-envelope me-1" aria-hidden="true"></i> Email
            Me</a>
          </li>
        </ul>
      </section >
    </>
  );
}

export default About;
