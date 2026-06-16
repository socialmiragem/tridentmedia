import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import WorkTabs from "../frontend/components/WorkTabs";

const page = () => {
  return (
    <>
      <ServiceBanner
        src="/images/banner/woodwork.png"
        first="my workspace"
        last=""
      />
      <div className="my-5">
        <section className="heading section_heading">
          <div className="row mx-0">
            <div className="col-md-12 text-center">
              <SectionTitle
                title="Featured Work"
                bg="#fafafa"
                color="#ed1c24"
              />

              <h3>
                Built with Purpose.
                <br />
                Designed for Performance.
              </h3>
            </div>
          </div>
        </section>
      </div>
      <div>

        <WorkTabs/>
      </div>
    </>
  );
};

export default page;
