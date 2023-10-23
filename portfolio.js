class App extends React.Component {
    render() {
        return (
            <div className="">
                {/* Navbar */}
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a className="navbar-brand" href="#"><img src="img/img-nav-removebg-preview (1).png" class="img-fluid" alt="logo"></img></a>
                        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ms-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="#">Home<span
                                        className="sr-only"></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Main */}

                <div className="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="img/boy-removebg-preview.png" class="img-fluid" alt=""></img>
                        </div>
                        <div class="col-lg-6 position-relative">
                            <div className="mt-5 position-absolute top-50">
                                <p className="text-danger">Hello Im Agetha</p>
                                <h2 className="text-white">Visual Designer</h2>
                                <p className="text-light">There are many variation of passages of Lorem Ipsum available, but the majority have
                                    suffered in some form, by injected humour</p>
                                <button type="button" class="btn btn-danger">ABOUT ME</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-dark w-60">
                    <div className="container mt-4">
                        <div class="row g-3 mt-5">
                            <div class="col-lg-4">
                                <div className="text-white bg-black card mb-3 p-3">
                                    <div>
                                        <i class="bi text-danger fs-4 bi-pc-display-horizontal"></i>
                                        <h5>UI Design</h5>
                                        <p>Lorem Ipsum available, <br></br> but the majority have </p>
                                        <p className="text-danger">Know More <i class="me-2 bi bi-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className="text-white bg-danger card mb-3 p-3">
                                    <div>
                                        <i class="bi text-white fs-4 bi-pc-display-horizontal"></i>
                                        <h5>Product Design</h5>
                                        <p>Lorem Ipsum available, <br></br> but the majority have </p>
                                        <p className="text-white">Know More <i class="me-2 bi bi-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div className="text-white bg-black card mb-3 p-3">
                                    <div>
                                        <i class="bi text-danger fs-4 bi-pc-display-horizontal"></i>
                                        <h5>UI Design</h5>
                                        <p>Lorem Ipsum available, <br></br> but the majority have </p>
                                        <p className="text-danger">Know More <i class="me-2 bi bi-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-5 p-5">
                        <div className="row">
                            <div className="col-lg-4 text-white text-center mt-5">
                                <h1 className="fs-1 fw-bolder text-danger">12</h1>
                                <p className="fs-4 fw-bolder">Years Experience</p>
                            </div>
                            <div className="col-lg-8 text-white">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                    <div class="col">
                                        <div class="card bg-black">
                                            <div class="card-body text-center">
                                                <h2 class="text-danger">60+</h2>
                                                <p class="text-white">Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card bg-black">
                                            <div class="card-body text-center">
                                                <h2 class="card-title text-danger">08</h2>
                                                <p class="text-white">Years Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card bg-black">
                                            <div class="card-body text-center">
                                                <h2 class="card-title text-danger">122+</h2>
                                                <p class="text-white">Completed Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card bg-black">
                                            <div class="card-body text-center">
                                                <h2 class="card-title text-danger">10</h2>
                                                <p class="text-white">Achievement</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="d-flex justify-content-between">
                        <div class="text">
                            <h1 className="text-white">FEATERED PROJECTS</h1>
                            <p className="text-white">Lorem Ipsum dolor sit amet, consecteteur adipiscing eli.</p>
                        </div>
                        <div class="btn">
                            <button type="button" class="btn btn-danger">VIEW ALL</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-white bg-black card mb-3 p-3">
                                <div className="text-center p-2">
                                    <img src="img/img-1.PNG" class="img-fluid" alt=""></img>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white">The Vintage</h3>
                                <p className="text-danger">Know More <i class="me-2 bi bi-arrow-right"></i></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-white bg-black card mb-3 p-3">
                                <div className="text-center p-2">
                                    <img src="img/img-2.PNG" class="img-fluid" alt=""></img>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white">Foodasa</h3>
                                <p className="text-danger">Know More <i class="me-2 bi bi-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-white bg-black card mb-3 p-3">
                                <div className="text-center p-2">
                                    <img src="img/img-3.PNG" class="img-fluid" alt=""></img>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white">Marca Accent</h3>
                                <p className="text-danger">Know More <i class="me-2 bi bi-arrow-right"></i></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-white bg-black card mb-3 p-3">
                                <div className="text-center p-2">
                                    <img src="img/img-4-1-0.PNG" class="img-fluid" alt=""></img>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white">Mozaik</h3>
                                <p className="text-danger">Know More <i class="me-2 bi bi-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="card bg-black p-5">
                        <div className="p-4 d-flex justify-content-between">
                            <div class="text-white">
                                <h2>Let s work together on your next project</h2>
                                <p>
                                    Lorem Ipsum delor sit amet, consecteteur adipiscing elit, sed do elusmod tempor  insididunt ut labor
                                </p>
                            </div>
                            <div class="btn">
                                <button type="button" class="btn btn-danger">CONTACT</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <ul className="d-flex justify-content-center">
                        <li className="nav-item active me-3">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#">Projects</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="bg-secondary p-1">
                    <div className="container mt-5 text-center">
                        <div className="row me-5">
                            <div className="col-lg-4 mb-4">
                                <div>
                                    <a className="navbar-brand" href="#"><img src="img/img-nav-removebg-preview (1).png" class="img-fluid" alt="logo"></img></a>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 sm-me-3">
                                <div className="icone">
                                    <a href="#"><i class="bi text-light me-5 bi-facebook"></i></a>
                                    <a href="#"><i class="bi text-light me-5 bi-twitter"></i></a>
                                    <a href="#"><i class="bi text-light me-5 bi-youtube"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <p>
                                    <i class="bi text-danger bi-heart-fill"></i> <span className="text-light">Created by Zamil</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));