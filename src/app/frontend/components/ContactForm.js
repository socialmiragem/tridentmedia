"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

const ContactForm = ({ form_sub_title_prop, form_title, form_image }) => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact-inquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Your message has been sent successfully.");

      setForm({
        full_name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div id="contactform" className="px-md-5 px-2">
        <div className="row m-0 gap-md-0 gap-3">
          <div className="col-md-6 ">
            <div className="wrapper">
              <img src={form_image} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white rounded-3 contact-card">
              <div className="subheading-3">
                <h4>{form_sub_title_prop}</h4>
              </div>
              <div className="mainheading">
                <h3>{form_title}</h3>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="feild">
                        <label htmlFor="fullname">full name</label>
                        <input
                          type="text"
                          id="fullname"
                          name="full_name"
                          className="form-control"
                          onChange={handleChange}
                          value={form.full_name}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="feild">
                        <label htmlFor="email">email</label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                          onChange={handleChange}
                          value={form.email}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="feild">
                        <label htmlFor="phone">phone number</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          onChange={handleChange}
                          value={form.phone}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="feild">
                        <label htmlFor="service">service</label>
                        <select
                          id="service"
                          name="service"
                          className="form-select"
                          onChange={handleChange}
                          value={form.service}
                        >
                          <option value="">--Select--</option>
                          <option value="Vehicle Wrap">Vehicle Wrap</option>
                          <option value="Woodcraft">Woodcraft</option>
                          <option value="3D Printing">3d Printing</option>
                          <option value="Vinyl Wraps">Vinyl Wraps</option>
                          <option value="Exhibit Design">Exhibit Design</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="feild">
                        <label htmlFor="msg">message</label>
                        <textarea
                          id="msg"
                          name="message"
                          className="form-control"
                          rows="8"
                          onChange={handleChange}
                          value={form.message}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 d-flex">
                      <button type="submit" className="btn btn-red px-4">
                        get started
                        <span>
                          <img src="/images/gt.svg" className="img-fluid" />
                        </span>
                      </button>
                      
                    </div>
                    <div className="mt-3">
                        {success && (
                          <div className="alert alert-success">{success}</div>
                        )}

                        {error && (
                          <div className="alert alert-danger">{error}</div>
                        )}
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
