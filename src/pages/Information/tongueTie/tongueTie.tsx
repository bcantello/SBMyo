import {ReactElement} from "react";
import Navigation from "../../../components/navigation/navigation";
import Banner from "../../../components/banner/banner";
import TongueTieBannerImage from "../../../assets/bannerImages/tongueTie.jpeg";
import Snaggle from "../../../assets/tongueTie/narrowPalateSnaggle.jpeg"
import './tongueTie.scss';

/**
 * Renders Tongue Tie page
 * @constructor
 */
export default function TongueTie(): ReactElement {
    return (
        <div className={'tongue-tie-content'}>
            <Navigation/>
            <Banner
                imageSrc={TongueTieBannerImage}
                imageAlt={'Child with tongue tie'}
                imageTitle={'Child with tongue tie'}
            />
            <section className={'tongue-tie-content-container'}>
                <h1>Tongue Tie</h1>
                <p>Everyone has a band of connective tissue under the tongue, called a lingual frenum or frenulum. If this band of tissue is restrictive and causing functional issues, then you may have a “tongue tie”. How your tongue is attached to the floor of the mouth plays a significant role in how your face grows and how your mouth functions while breathing, speaking and swallowing.</p>
                <h3>Tongue ties can affect:</h3>
                <ul className={'tongue-tie-list'}>
                    <li>
                        <div id={'cranio-dev-bullet'}>
                            <p>Craniofacial development: Our tongue is natures “palatal expander”. The pressure of it being lightly suctioned to the roof of the mouth guides optimal growth and development. When there’s tethered oral tissues (TOT) like a tongue tie, it will prevent the tongue from resting in that optimal position. As a result, underdeveloped jaw and facial structures will occur. The palate will grow narrow instead of wide, which causes malocclusion or “crooked teeth”. The maxilla will grow down and drop, instead of growing out and forward, which causes the typical long and narrow face we call “adenoid face”. It can also lead to “gummy smile” which is when there is an excess of upper jaw gum tissue showing due to vertical maxillary growth from low tongue posture and open mouth resting state.</p>
                            <div className={"tongue-tie-image1-container"}>
                                <img
                                    id={'tongue-tie-image1'}
                                    src={Snaggle}
                                    alt={"Narrow palate with crooked teeth"}
                                    title={'Narrow palate with crooked teeth'}
                                    loading={'lazy'}
                                />
                            </div>
                        </div>
                    </li>
                    <li>Eating and swallowing: In normal function, our tongue fully reaches the hard and soft palate during swallowing, which guides our food down our throat. When there is a restriction, the tongue is limited with how far to the palate it can go, and the individual can feel like food is “stuck” in the back of mouth. Children especially are affected by this and will often avoid certain foods with certain textures that are more likely to get stuck. This is often make a child appear to be a “picky eater”, when in reality, they are protecting their airway.</li>
                    <li>How we clear food in mouth: Both children and adults with tongue ties will have limited mobility of the tongue. The tongue is the best cleaning tool we have to clear food debris from our mouth while eating. With very limited range of motion, debris will “get stuck” around our teeth, gums and cheeks, unable to be reached and dislodged by our tongue. This will cause decay and periodontal disease.</li>
                    <li>Speech issues: When the tongue to tethered to the floor of the mouth, there are many sounds that are difficult or impossible to make. Myofunctional therapy is not speech therapy, these are two distinct fields. However, in the case of restrictions, many times a child’s ability to pronounce certain sounds will improve after a release and myofunctional therapy.</li>
                </ul>
                <p>For many years we have used a single method for identifying tongue tie (ankyloglossia). Over the last decade that definition has been built upon as we have had a greater understanding upon how the frenulum, fascia, muscle attachment and mobility effect normal function.</p>
                <p>The IAAP (International  Affiliation  of  Tongue-Tie  Professionals) defines “tongue-tie” as an embryological remnant of tissue in the midline between  the  undersurface  of  the  tongue  and  the  floor  of  the  mouth that  restricts  normal  tongue  movement.</p>

                <h3>We currently describe ‘tongue tie’ or ‘tongue restriction’ in 5 dimensions:</h3>
                <ul className={'tongue-tie-list'}>
                    <li>How far you can stick out the tongue*</li>
                    <li>How far you lift the tongue up to the incisive papilla (just behind the upper back teeth with mouth open)*</li>
                    <li>How far you can open your mouth while your tongue is fully suctioned to the roof of  your mouth*</li>
                    <li>How much the floor of the mouth, neck and other muscles help you to suction your tongue or lift your tongue to the spot</li>
                    <li>Muscle tension caused by the first three</li>
                </ul>
                <p className={'italic'}>*These first three are well documented in the scientific literature, research is still ongoing to quantify the 4th & 5th dimensions of tongue restriction, we know they are related but researchers are still working to define how they are measured reliably.</p>
                <h3>How we assess</h3>
                <p>When you meet with your Myofunctional Therapist they will take several measurements of your tongues range of motion, assess your swallow, assess any compensations, and discuss if any restrictions are present. If a tongue tie release is recommended, she will refer you to a highly qualified provider who has taken additional training in tongue tie assessment and treatment to release the tissues that are holding you back from normal function.</p>
                <p>For most, the tongue tie release will be done mid-therapy after you have developed muscle tone and coordination with the muscles around the frenulum. Once the release is completed we will work together to develop the tone, coordination and function of the newly released tongue and work towards optimal oral muscle function.</p>
                <h3>Additional Reading</h3>
            </section>
        </div>
    );
}
