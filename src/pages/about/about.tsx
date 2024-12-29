import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Bougainvillea from "../../assets/bannerImages/Bougainvillea2.jpeg"
import NicoleHeadshot from "../../assets/NicoleHeadshot.jpg";
import EmilyHeadshot from "../../assets/EmilyHeadshot.jpeg";
import './about.scss';

/**
 * Renders the About page
 * @constructor
 */
export default function About(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner
                imageSrc={Bougainvillea}
                imageAlt={'bougainvillea hanging over wall'}
                imageTitle={'bougainvillea hanging over wall'}
            />
            <h1>About Our Therapists</h1>
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={NicoleHeadshot}
                        alt={"nicole myofunctional therapist headshot"}
                        title={'Nicole Cantello, orofacial myofunction therapist'}
                        loading={'lazy'}
                    />
                    <div>
                        <p>Nicole Cantello RDH, OMT</p>
                        <p>Owner of Santa Barbara Myo</p>
                    </div>
                </div>
                <div className={"about-content"}>
                    <div>
                        <h2>Nicole Cantello</h2>
                        <p>Nicole is passionate about dental and airway health. She’s been in the dental field since 2010 and graduated from Dental Hygiene school in 2015 at the top of her class, receiving both Valedictorian and the best in clinic Golden Scaler award. Nicole has been enthusiastically practicing dental hygiene since then where she’s grown her clinical skills and deepened her understanding of the mouth and body connection.</p>
                        <p>After learning about Myofunctional Therapy, Nicole realized that over the years she’s seen thousands of patients with myofunctional disorders and knew she wanted to help them. This was the missing puzzle piece. She made the decision to continue her education and become an Orofacial Myofunctional Therapist. She has taken hundreds of hours of continuing education in Orofacial Myofunctional Therapy, including several courses with The Breathe Institute which include their 9 month Myo Masterminds course.</p>
                        <p>She is currently seeing children, age 5 and older, teens and adults. The focus of her practice, Santa Barbara Myo, is airway health and helping individuals return to their physiologic normal so they can breathe optimally and live their lives to their fullest potential.</p>
                        <p>During treatment, Nicole will strive to understand the root cause of her patient’s symptoms. We will go through a detailed series of questions and assessments to help determine why you may have that dysfunction. We can then formulate a plan of action to get your body back to physiologic normal. Nicole collaborates with other myofuctional therapists, dentists, orthodontists, ENTs, surgeons, physical therapists, chiropractors and bodyworkers to make sure her patients have a team of specialized support.</p>
                        <p>She enjoys spending time with her husband, two sons and goldendoodle, hiking, and baking in her free time. She is also passionate about raising Airway Health awareness and frequently lectures to other medical providers in the community.</p>
                    </div>
                </div>
            </div>
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={EmilyHeadshot}
                        alt={"emily myofunctional therapist headshot"}
                        title={'Emily Shonio, orofacial myofunction therapist'}
                        loading={'lazy'}
                    />
                    <div>
                        <p>Emily Shonio RDH, OMT</p>
                    </div>
                </div>
                <div className={"about-content"}>
                    <div>
                        <h2>Emily Shonio</h2>
                        <p>With over 10 years of experience as a dental hygienist, Emily has developed a deep understanding
                            of oral health and its connection to overall well-being. Throughout her career, she has become
                            increasingly passionate about holistic health and root cause medicine, leading her to expand
                            her expertise to include myofunctional therapy. As a home birth mom, she is also a strong advocate for
                            natural, empowering approaches to health and wellness.</p>
                        <p>In addition to her dental background, Emily is a certified yoga instructor, which has further
                            enhanced her appreciation for the mind-body connection and the importance of proper
                            breathing, posture, and alignment in maintaining health. Her unique blend of professional
                            experience and personal philosophy fuels her commitment to helping individuals achieve
                            optimal health through non-invasive, holistic methods.</p>
                        <p>Emily is dedicated to supporting her patients by improving their oral function, breathing
                            patterns, and overall health, while always prioritizing a comprehensive, root-cause approach
                            to wellness.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
