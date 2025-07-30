import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Banner from "../../components/banner/banner";
import Bougainvillea from "../../assets/bannerImages/Bougainvillea2.jpeg"
import NicoleHeadshot from "../../assets/NicoleHeadshot.jpg";
import EmilyHeadshot from "../../assets/EmilyHeadshot.jpeg";
import DannyHeadshot from "../../assets/DannyHeadshot.jpg";
import ValerieHeadshot from "../../assets/ValerieHeadshot.jpg";
import MairaHeadshot from "../../assets/MairaHeadshot.jpg";
import LindyHeadshot from "../../assets/LindyHeadshot.jpeg"
import LizzyHeadshot from "../../assets/LizzyHeadshot.jpg";
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
            <h1>About Our Team</h1>
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
                        <p>Founder and Clinical Director of Santa Barbara Myo</p>
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
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={DannyHeadshot}
                        alt={"Danny myofunctional therapist headshot"}
                        title={'Danny Gomez, orofacial myofunction therapist'}
                        loading={'lazy'}
                    />
                    <div>
                        <p>Danny Gomez RDH, OMT</p>
                    </div>
                </div>
                <div className={"about-content"}>
                    <div>
                        <h2>Danny Gomez</h2>
                        <p>Danny brings over 17 years of experience in the dental field, including 9 years as a Registered Dental Hygienist. He has a natural gift working with kids, connecting with them in fun, silly, and effective ways that make therapy both productive and enjoyable. His passion for promoting oral and airway health, combined with his extensive clinical background, makes him an invaluable part of our team at Santa Barbara Myo.</p>
                        <p>Beyond the office, Danny is a proud husband and father to a son and daughter. In his spare time, you’ll find him training in capoeira, camping with his family, or hitting the slopes snowboarding. Danny’s commitment to lifelong learning, patient care, and living life to the fullest embodies the spirit of our practice.</p>
                    </div>
                </div>
            </div>
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={LindyHeadshot}
                        alt={"Lindy myofunctional therapist headshot"}
                        title={'Lindy Luong, orofacial myofunction therapist'}
                        loading={'lazy'}
                    />
                    <div>
                        <p>Lindy Luong RDH, OMT</p>
                    </div>
                </div>
                <div className={"about-content"}>
                    <div>
                        <h2>Lindy Luong</h2>
                        <p>After over a decade working as a dental hygienist, she realized there was a significant gap in knowledge surrounding myofunctional therapy. Educating patients about oral hygiene has always been at the heart of what she loves most as a dental hygienist. Her thoughtful approach, ability to ask the right questions, and commitment to functional, personalized care made the transition into myofunctional therapy a natural next step.</p>
                        <p>Driven by her own journey and a strong desire to reach and support others, she is passionate about helping patients gain awareness and improve their health, one breath at a time.</p>
                        <p>Outside of the myo world, she and her husband—alongside the enthusiastic help of their 4-year-old son—have spent the past few years transforming the interior and exterior of their home into a peaceful, relaxing oasis.</p>
                    </div>
                </div>
            </div>
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={ValerieHeadshot}
                        alt={"Valerie myofunctional therapist headshot"}
                        title={'Valerie Swanson, orofacial myofunction therapist'}
                        loading={'lazy'}
                    />
                    <div>
                        <p>Valerie Swanson RDH, OMT</p>
                    </div>
                </div>
                <div className={"about-content"}>
                    <div>
                        <h2>Valerie Swanson</h2>
                        <p>With 24 years of experience as a Registered Dental Hygienist, Valerie has had the privilege of treating patients of all ages. She is frequently complimented for her easygoing, friendly demeanor and her ability to communicate clearly and compassionately.</p>
                        <p>Her personal journey into orofacial myofunctional therapy began while seeking relief from lifelong facial tension and jaw pain. After experiencing the profound benefits of treatment firsthand, she was inspired to become an orofacial myofunctional therapist to help others find the same relief and healing.</p>
                        <p>Outside of the office, Valerie loves traveling—whether it’s exploring a new country or enjoying a weekend camping trip. She also enjoys discovering new foods and spending quality time with her husband and two daughters in the Santa Ynez Valley.</p>
                    </div>
                </div>
            </div>
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={LizzyHeadshot}
                        alt={"lizzy massage therapist headshot"}
                        title={'Lizzy McCahan, Massage Therapist'}
                        loading={'lazy'}
                    />
                    <div>
                        <p>Lizzy McCahan, Massage Therapist</p>
                    </div>
                </div>
                <div className={"about-content"}>
                    <div>
                        <h2>Lizzy McCahan</h2>
                        <p>Lizzy is a Certified Massage Therapist (CMT) with over 12 years of experience, specializing in advanced TMJ massage. Her passion for helping others was sparked by her own journey. After struggling with TMJ tension and headaches, she discovered firsthand how powerful targeted massage and myofunctional therapy could be in relieving pain and restoring balance.. Myofunctional therapy has been life-changing, improving her sleep, easing anxiety, and relieving chronic headaches.</p>
                        <p>Outside of massage, Lizzy loves spending time outdoors, especially hiking in the Santa Barbara hills, paddle boarding, beach walking, and enjoying life with friends and family.</p>
                    </div>
                </div>
            </div>
            <div className={"about-content-container"}>
                <div className={"about-image-container"}>
                    <img
                        id={'headshot-image'}
                        src={MairaHeadshot}
                        alt={"maira patient care coordinator headshot"}
                        title={'Maira Martinez, patient care coordinator'}
                        loading={'lazy'}
                    />
                    <div>
                        <p>Maira Martinez, Patient Care Coordinator</p>
                    </div>
                </div>
                <div className={"about-content"}>
                    <div>
                        <h2>Maira Martinez</h2>
                        <p>With over 10 years of experience in the dental field, Maira brings a wealth of knowledge and a calm, welcoming presence to our front office. She is often the first smile you’ll see when you walk through the door—and her warmth, sincerity, and genuine care help set the tone for every visit.</p>
                        <p>Outside of the office, Maira loves spending time with her daughter at the beach, riding bikes, exploring new restaurants around town, and getting lost in a good book. She’s passionate about making every patient feel comfortable, supported, and cared for from the moment they reach out.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
