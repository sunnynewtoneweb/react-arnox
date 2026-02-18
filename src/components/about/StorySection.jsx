import { storyDescription, storyItems } from "./storyDescription";

function StorySec() {
  return(
    <section className="pt-120 pb-120">
      <div className="container">
        <h3 className="text-center sec-sub-title mb-30">{storyDescription.title}</h3>
        <p className="text-center pb-80">{storyDescription.description}</p>
        {storyItems.map((item, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`row block_item mb-30 ${
                isEven ? "flex-row-reverse vision" : "mision"
              }`}
            >
              <div
                className={`col-lg-6 text-center ${
                  isEven ? "text-lg-end" : "text-lg-start"
                }`}
              >
                <figure>
                  <img src={item.image} alt={item.smallTitle} />
                </figure>
              </div>

              <div className="col-lg-6 align-self-center">
                <h4 className="sec-sub-title">
                  <small>{item.smallTitle}</small> {item.title}
                </h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StorySec;