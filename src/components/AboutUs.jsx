import React from 'react';
import './AboutUs.css';
import visionImage from './assets/vision.jpg';
import qualityImage from './assets/quality.jpg';
import missionImage from './assets/mission.jpg';
import fourthImage from './assets/values.png'; // Assuming you have a fourth image

const AboutUs = () => {
  return (
    <section id="about" className="about-us container marketing">
      <h1 className="text-center mt-5 mb-4">A Unique Destination for all your Needs</h1>
      <div className="box-container">
        <div className="box">
          <div className="box-content">
            <h2>Vision</h2>
            <p><b>Comprehensive Solutions:</b> We offer end-to-end engineering solutions, covering everything from conceptualization to final product delivery. Our services span CAE-CFD modeling, manufacturing, and reverse engineering, ensuring a seamless process from start to finish.</p>
            <p><b>Global Leadership Aspiration:</b> Our goal is to attain a leading position in the global engineering services sector. Through our commitment to excellence and continuous innovation, we aim to establish ourselves as a benchmark for quality and expertise in the corporate world.</p>
            <p><b>Customer-Centric Approach:</b> Understanding and addressing customer needs is at the core of our operations. We proactively translate customer requirements into design specifications, ensuring that our solutions are not only technically superior but also perfectly aligned with market demands.</p>
            <p><b>Innovation and Adaptability:</b> We stay ahead of the curve by embracing the latest trends and technologies in engineering. With a strong grasp of global best practices, we constantly innovate and adapt to meet evolving industry standards and customer expectations.</p>
            <p><b>Timely Delivery and Value Addition: </b>Our commitment to timely delivery and customer satisfaction sets us apart. By consistently delivering high-quality solutions that add significant value to our clients' businesses, we aim to be their preferred partner for all their engineering needs.</p>
            </div>
          <div className="box-image">
            <img src={visionImage} alt="Vision" />
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h2>Quality</h2>
            <p><b>Stringent Quality Assurance: </b>DATTHA Global Technologies prioritizes delivering services that exceed customer expectations by adhering to the highest standards of quality. Our rigorous quality assurance processes ensure that every project is executed with precision and excellence, guaranteeing customer satisfaction at every step of the way.</p>
            <p><b>Robust Data Security Measures:</b>Our robust security protocols ensure the confidentiality and integrity of data throughout the project lifecycle, giving our clients peace of mind knowing their data is protected.</p>
            <p><b>Skilled and Experienced Team:</b>Our projects are executed by a team of skilled and experienced professionals who are experts in their respective fields.</p>
            <p><b>Continuous Improvement:</b>We are committed to continuous improvement in our processes and methodologies to further enhance the quality of our services. </p>
            <p><b>Transparent Communication and Feedback Loop:</b>We maintain transparent communication channels with our clients throughout the project lifecycle, fostering collaboration and ensuring that their feedback is incorporated into the process. </p>


            </div>
          <div className="box-image">
            <img src={qualityImage} alt="Quality" />
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h2>Mission</h2>
            <p><b>Strategic Business Partnership:</b>Our mission is to become your trusted business partner, working closely with you to understand your needs and challenges. By forging strong partnerships, we aim to collaborate effectively and deliver solutions that drive mutual success and growth.</p>
            <p><b>Cost-Effective Solutions: </b>We are dedicated to providing cost-effective solutions that maximize value for your business. </p>
            <p><b>Enhanced Profitability:</b>By leveraging our expertise and support services, we enable you to streamline operations, optimize efficiency, and capitalize on growth opportunities, ultimately increasing your profitability and competitiveness in the market.</p>
            <p><b>Efficiency and Timeliness:</b>By providing timely support and solutions, we minimize downtime and delays, allowing you to focus on core activities and achieve your business objectives with speed and agility.</p>
            
            </div>
          <div className="box-image">
            <img src={missionImage} alt="Mission" />
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <h2>Our Values</h2>
            <p><b>Developing People:</b> DGTS is committed to bring out the best in resources and encourages them to strive to meet their professional goals.</p>
            <p><b>Growth: Willingness</b> to train and desire to learn</p>
            <p><b>Leadership:</b> We encourage everyone to lead by example and demonstrate skills creatively and respect each other</p>
            <p><b>Excellence:</b> Delivering bolder, brighter, superior results</p>           
           <p><b>Customer Satisfaction and NPS:</b> We believe in saying “Work is Worship” – We empower our personnel to give their best to take care of customers</p>
           <p><b>Relationship:</b> DGTS believes that building and sustaining strong relationships is the key to long-term success for resources and our customers.</p>           
           </div>
          <div className="box-image">
            <img src={fourthImage} alt="Fourth" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
