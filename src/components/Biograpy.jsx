import React from "react";
import { Carousel } from "react-bootstrap";

const Biograpy = () => {
  return (
    <div>
      <div className="biograpy d-flex flex-row ">
        <img
          className="bio-img w-25 h-25"
          src="https://cdn.pixabay.com/photo/2017/03/12/13/41/colorful-2137080__340.jpg"
          alt=""
        />
        <div className="bio-text mx-5">
          <h3 className="text-white">Kamytov Mamatbek</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eaque
            hic dolor placeat consequuntur, accusamus repudiandae porro aliquam
            neque, labore rem dolore numquam vel quis debitis sed dignissimos.
            Cum pariatur ipsa dignissimos eius sunt veniam maiores magni dolorum
            id sequi ullam ab cumque exercitationem voluptatibus ducimus eaque
            laboriosam quaerat, assumenda totam veritatis ut aliquid tempore
            cupiditate dolorem. Sint, qui. Delectus fugiat, possimus eveniet
            dolores quaerat amet accusamus, repudiandae impedit repellendus
            nihil tempora praesentium pariatur quam, commodi omnis architecto
            facilis unde. Error, facere reiciendis accusantium, fugit autem
            placeat voluptatem voluptatum possimus non distinctio natus,
            obcaecati fuga sapiente esse eaque mollitia? Harum, corrupti. A,
            fugit dolorem asperiores illo natus rem rerum quaerat dignissimos
            ratione iure, voluptates pariatur delectus quibusdam nam et
            aspernatur expedita modi suscipit repudiandae doloremque. Velit
            suscipit voluptatum magnam repellat, non, magni accusamus modi
            repellendus eum quasi vel corrupti dolores, illo molestias.
            Laudantium suscipit cupiditate nisi unde reprehenderit. Veniam
            beatae voluptas error at neque ea facere? Esse, optio non. Ducimus
            corporis consequatur, ipsa velit autem id
          </p>
        </div>
      </div>
      <p className="text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        magnam cum explicabo dolorem repellendus dignissimos ea, dolor provident
        sequi quis tempora ullam! Iste deserunt, nemo delectus eos ullam
        molestiae facere quod atque porro rem accusamus natus optio pariatur
        sint odio illo aspernatur. Nostrum, necessitatibus facere molestias,
        labore amet dolorum eius, libero est quibusdam vero veritatis? Saepe,
        inventore soluta quos hic, cum, numquam accusamus quidem temporibus
        earum quisquam veniam accusantium illum esse sed odit eius dolorem
        recusandae ratione iste tenetur facere neque sit. Excepturi atque aut
        sed, labore tempore mollitia hic debitis tenetur repellendus nisi, odio
        consequatur in est, possimus optio maxime? Animi distinctio ut ipsum
        ipsam cum fugiat provident molestiae praesentium sit repellendus? Eum,
        nihil perspiciatis necessitatibus nostrum alias ad veritatis, soluta
        incidunt, aspernatur quidem iure sed possimus debitis harum accusamus
        minima aperiam atque voluptatum culpa? Distinctio, similique obcaecati!
        Est quaerat dolores libero neque natus fuga. Veritatis totam provident
        cupiditate et similique? Sunt libero odit ipsum? A itaque, doloribus et
        ipsum culpa minima architecto facere reprehenderit consequatur ad,
        debitis deleniti, repellat veniam perferendis esse illo quam hic soluta
        asperiores nostrum ut recusandae doloremque impedit. Suscipit iusto
        laboriosam amet enim ratione sequi aliquam, molestias accusantium autem.
        Nesciunt natus atque voluptates itaque!
      </p>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-75 m-auto"
            src="https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-75 m-auto"
            src="https://avatars.mds.yandex.net/i?id=5663a572feb7bf2ad05ab599b672695c26908f92-9043751-images-thumbs&n=13"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 m-auto"
            src="https://avatars.mds.yandex.net/i?id=383b6c2c2ff132b8e793dd6735c555fc9470fdbf-6888117-images-thumbs&n=13"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Biograpy;
