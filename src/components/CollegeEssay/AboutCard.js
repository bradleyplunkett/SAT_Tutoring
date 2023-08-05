import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          A strong essay plays a vital role in influencing the overall impression of your application and improving your chances of acceptance.  In highly competitive admissions processes, a remarkable essay can be the factor that sets you apart from other applicants with similar academic achievements.

            <br />
            <br />
            A compelling college essay should:
            <br />
            <br />
- Demonstrate your writing abilities and ability to convey ideas effectively
<br />
<br />
- Reveal your personality, values, motivations, and how you perceive the world around you
<br />
<br />
- Highlight how you would enrich the college community through your diverse experiences and interests.
<br />
<br />
- Address specific circumstances, challenges, or life events that have shaped you
            <br />
            <br />
            I am currently accepting new clients. My hourly rate is $40.  Book a free onboarding consultation 
              <i>
  <b className="purple">
    <a href="https://calendly.com/bradleynplunkett/30min"> here.</a>
  </b>
</i>          </p>
         

      
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
