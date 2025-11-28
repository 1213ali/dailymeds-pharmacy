export default function Contact() {
    const sectionStyle = {
        backgroundImage: `url(/images/dailymeds.jpeg)`, // Path relative to public
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
    <div className="container mt-4">
    <h2>Contact DailyMeds Pharmacy</h2>
    <p>Address: 2066 S. Wayne Rd Westland, MI 48186</p>
    <p>Email: dailymedsllc@outlook.com</p>
    <p>Phone: (734) 895-9257</p>
    <p>Fax: (734) 895-9258</p>
    <p>Instagram: <a href="https://www.instagram.com/dailymeds_pharmacy?igsh=MXNrdmoweTk4ZHBwbQ==" target="_blank">@dailymeds_pharmacy</a></p>
    </div>
    </div>
    );
    }