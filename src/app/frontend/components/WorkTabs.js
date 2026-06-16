"use client";

import React, { useEffect, useState } from "react";
import Fancybox from "./Fancybox";

const WorkTabs = () => {
  const [galleries, setGalleries] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/galleries`)
      .then((res) => res.json())
      .then((data) => {
        setGalleries(data);
      })
      .catch((err) => {
        console.error("Gallery fetch error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading galleries...</div>;
  }

  if (!galleries.length) {
    return <div className="text-center py-5">No galleries found.</div>;
  }

  const activeGallery = galleries[activeTab];

  return (
    <div className="overflow-hidden px-md-5 px-2" id="worktab">
      {/* Tabs */}
      <ul className="border-0 d-flex gap-3 justify-content-center mb-5 nav nav-tabs flex-wrap">
        {galleries.map((gallery, index) => (
          <li className="nav-item" key={gallery.id}>
            <button
              className={`nav-link text-uppercase bg-work rounded-2 text-primary fs-6 px-5 py-3 ${
                activeTab === index ? "active" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {gallery.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Gallery Images */}
      <Fancybox>
        <div className="masonry-gallery">
          {activeGallery.images?.map((image) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL_Gallery}/${image.image}`;

            return (
              <div key={image.id} className="masonry-item">
                <a
                  href={imageUrl}
                  data-fancybox={`gallery-${activeGallery.id}`}
                  data-caption={activeGallery.name}
                >
                  <img
                    src={imageUrl}
                    alt={activeGallery.name}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </Fancybox>
    </div>
  );
};

export default WorkTabs;
