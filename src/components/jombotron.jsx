import Carousel from "react-bootstrap/Carousel";

function jombotron() {
    return (
        <Carousel className="m-3">
            <Carousel.Item
                style={{
                    height: "300px",
                    backgroundImage:
                        "url('https://bcfarmsandfood.com/wp-content/uploads/cowichan-farms-berries-bcfarmsandfood.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt=""
                />
                <Carousel.Caption>
                    <p>Qu'attendre de votre biographe ? - Françoise Robin - Biographe</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                    height: "300px",
                    backgroundImage:
                        "url('https://th.bing.com/th/id/R.a56c1d04481d9c932fdec4c96f485b6c?rik=VBNstL4imLBDwg&pid=ImgRaw&r=0')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <img className="d-block w-100" alt="" />

                <Carousel.Caption>
                    <p>Qu'attendre de votre biographe ? - Françoise Robin - Biographe.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
                style={{
                    height: "300px",
                    backgroundImage:
                        "url('https://th.bing.com/th/id/OIP.xFEXFnVl6zf3aJ_JJi95hAHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt=""
                />

                <Carousel.Caption>
                    <p>Qu'attendre de votre biographe ? - Françoise Robin - Biographe</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default jombotron;