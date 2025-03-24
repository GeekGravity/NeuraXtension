import "./styles.css";

function ContactUs() {
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const payLoad = {
      first_name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      email: formData.get("email"),
      body: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://neuroscienceclubbackend-production.up.railway.app/form/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payLoad),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Failed to submit the form.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred.");
    }
  };

  return (
    <section className="container-fluid Contact">
      <div className="container-fluid">
        <h2 className="pt-4 pb-2">Contact Us</h2>
        <p className="pb-4">
          Have questions or need assistance? Fill out the form below, and we'll
          get back to you as soon as possible.
        </p>
        <form onSubmit={submitForm}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={4}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
