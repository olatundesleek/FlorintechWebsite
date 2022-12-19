import React from "react";

function Singlecourse() {
  return (
    <div>
      <section className="single-course-container">
        <div className="single-course-inner">
          <div className="single-course-content">
            <div>
              <h1>Advanced Funnel Optimization</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sem at tortor egestas posuere sed
              </p>
            </div>
          </div>
          <div className="single-course-content-two">
            <div className="header">Get this Course</div>
            <div className="content">
              Augue neque gravida in fermentum et sollicitudin ac orci. Velit
              egestas dui id
            </div>
            <div>
              <select id="select-courses" className="select-course">
                <option selected>Course</option>
              </select>
            </div>
            <div className="course-amount">
              <span className="amount"> $ 699.00 USD</span>
              <span className="discount">$ 1,200.00 USD</span>
            </div>
            <button className="course-cart-button">Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Singlecourse;
