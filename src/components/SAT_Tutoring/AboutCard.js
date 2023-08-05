import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Historically, standardized test scores like the SAT have been a significant factor in college admissions, and many colleges used them as a primary means to assess applicants' academic preparedness and potential.
          <br />
            <br />
However, in recent years, there has been a growing trend among colleges and universities to adopt test-optional policies. These policies allow applicants to choose whether or not to submit SAT scores as part of their application. This shift is driven by a recognition that standardized test scores may not always be the most accurate or equitable predictor of an applicant's academic success or potential.
<br />
            <br />            Highly selective colleges and universities may place more emphasis on SAT scores as they receive a large number of applications from highly qualified candidates. In such cases, strong SAT scores can help applicants stand out.


            <br />
            <br /> 

            Additionally, SAT scores remain a key factor in determining merit-based scholarships, so high scores can lead to financial benefits for the student.


            <br />
            <br /> 
                        I am currently accepting new clients. My hourly rate is $40.  Book a free onboarding consultation 
              <i>
  <b className="purple">
    <a href="https://calendly.com/bradleynplunkett/30min"> here</a>
  </b>
</i>            </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
