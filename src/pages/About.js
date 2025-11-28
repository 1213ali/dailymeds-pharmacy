export default function About() {
    const sectionStyle = {
      backgroundImage: `url(/images/dailymeds.jpeg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "right", 
      alignItems: "center",     
      padding: "50px",
      color: "white",          
      textAlign: "left" 
            
    };
  
    return (
      <div style={sectionStyle}>
        <div className="container">
          <h2>About DailyMeds Pharmacy</h2>
          <div className="row mt-3 align-items-center">
            <div className="col-md-6">
              <p>
                DailyMeds Pharmacy has been serving the community with quality pharmaceutical services
                for over 10 years. Our mission is to provide safe, reliable, and affordable medicines
                to our customers. We focus on excellent customer service, quick delivery, and
                personalized care for all prescriptions.
              </p>
              <p>
                Our team of licensed pharmacists is always ready to answer your questions and ensure
                that you receive the right medicine at the right time.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }