import Row from "react-bootstrap/Row";

function Home() {
  return (
    <>
      <section className="container py-5 px-5 px-sm-0">

        <Row>
          <div className="col-lg-12 col-xl-6 mb-5 mb-xl-0">
            <div className="mb-4">
              <h2 className="mb-4 display-5">About Me</h2>
              <p>My name is Richard, and I am a skilled Front-End Developer and designer based in the vibrant city of London. With a rich background spanning several years in the design industry, I am now eagerly seeking fresh challenges and exciting opportunities to leverage my expertise as a Front-End Developer.</p>
              <p>
                Whether you&apos;re a prospective collaborator, a fellow enthusiast in the tech community, or simply curious to learn more about my journey, I invite you to explore my work and discover the innovative solutions I bring to the table.
              </p>
              <p>
                If you have any inquiries, project proposals, or just want to connect, don&apos;t hesitate to reach out. I&apos;m always eager to engage in meaningful conversations and explore potential collaborations. Let&apos;s create something remarkable together.
              </p>
            </div>
            <div className="btn-toolbar">
              <a className="btn btn-primary me-2" href="#project-gallery" type="button">View Projects</a><a href="#contact" className="btn btn-secondary me-2" type="button">Get in Touch</a>
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="h-100 ">
              <h2 className="mb-4 display-5">My Skills So Far...</h2>
              <ul className="list-group list-group-horizontal d-flex flex-wrap gap-3">
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/html-icon.png"></img>HTML5</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/css-icon.png"></img>CSS3</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/js-icon.png"></img>Javascript ES5/ES6</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/bootstrap-icon.png"></img>Bootstrap</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/tailwind-icon.png"></img>Tailwind CSS</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/jquery-icon.png"></img>JQuery</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/react-icon.png"></img>React</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/node-icon.png"></img>Node.js</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/git-icon.png"></img>Git</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/figma-icon.png"></img>Figma</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/photoshop-icon.png"></img>Photoshop</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/illustrator-icon.png"></img>Illustrator</li>
                <li className="list-group-item d-flex py-2 align-items-center bg-light rounded border-0"><img className="skill-icon" src="./assets/icons/after-effects-icon.png"></img>After Effects</li>
              </ul>

            </div>
          </div>
        </Row>

      </section >


    </>
  );
}

export default Home;
