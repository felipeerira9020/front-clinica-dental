import { Carousel } from "./indexCarousel";

function DataCarousel() {
  const data = [
   
    {
      image:
        "https://image.shutterstock.com/image-photo/dentist-examining-patients-teeth-clinic-260nw-1901755993.jpg",
      caption: "<div>Implantes dentales</div>",
    },
    {
      image:
        "https://www.ccdcanarias.com/wp-content/uploads/2019/05/dentista-750x375.jpg",
      caption: "<div>Diseño de sonrisas</div>",
    },
    {
      image:
        "http://dentistaypaciente.com/bootstrap4/img/cover/microinvestigacion-118.jpg",
      caption: "<div>Revisión gratuita</div>",
    },
    {
      image:
        "https://estudidentalbarcelona.com/wp-content/uploads/2016/08/carillas-dentales-y-ortodoncia.jpg",
      caption: "<div>Resina de alta estética</div>",
    }
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DataCarousel;
