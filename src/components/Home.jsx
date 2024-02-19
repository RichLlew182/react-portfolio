import Row from "react-bootstrap/Row";

function Home() {
  return (
    <>
      <section className="container py-5 px-0">

        <Row>
          <div className="col-lg-12 col-xl-6 mb-5 mb-xl-0">
            <div className="mb-4">
              <h2 className="mb-4 display-5">About Me</h2>
              <p>My name is Richard, and I am a skilled Front-End Developer and designer based in the vibrant city of London. With a rich background spanning several years in the design industry, I am now eagerly seeking fresh challenges and exciting opportunities to leverage my expertise as a Front-End Developer.</p>
              <p>
                Whether you're a prospective collaborator, a fellow enthusiast in the tech community, or simply curious to learn more about my journey, I invite you to explore my work and discover the innovative solutions I bring to the table.
              </p>
              <p>
                If you have any inquiries, project proposals, or just want to connect, don't hesitate to reach out. I'm always eager to engage in meaningful conversations and explore potential collaborations. Let's create something remarkable together.
              </p>
            </div>
            <div className="btn-toolbar">
              <a className="btn btn-primary me-2" href="#project-gallery" type="button">View Projects</a><a href="#contact" className="btn btn-secondary me-2" type="button">Get in Touch</a>
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="h-100 ">
              <h2 className="mb-4 display-5">My Skills</h2>
              <ul className="list-group list-group-horizontal d-flex flex-wrap gap-3">
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">HTML5</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">CSS3</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">Bootstrap</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">Tailwind</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">Javascript ES5/ES6</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">JQuery</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">React</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">Node.js</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">Git</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">Figma</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">Photoshop</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">Illustrator</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0">After Effects</li>
              </ul>

            </div>
          </div>
        </Row>

      </section >


    </>
  );
}

export default Home;
