import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import './referAPatient.scss';
import Banner from "../../components/banner/banner";
import Handshake from "../../assets/bannerImages/referPatient.jpeg";
import SimpleButton from "../../components/simpleButton/simpleButton";

/**
 * Renders the Refer page
 * @constructor
 */
export default function ReferAPatient(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner
                imageSrc={Handshake}
                imageAlt={'handshake'}
                imageTitle={'Shaking hands'}
            />
            <section className={'refer-a-patient-container'}>
                <h1>Refer a Patient</h1>
                <p>If you are a dentist, orthodontist, periodontist, oral surgeon, physician, chiropractor, craniosacral therapist, massage therapist or a staff member of a professional office, you can submit an encrypted referral. I am currently working with patients age 5 and older.</p>
                <p>Our team will reach out to your patient to schedule a comprehensive evaluation.</p>
                <SimpleButton
                    buttonText={'Submit an Encrypted Referral'}
                    destination={'https://hushforms.com/santabarbaramyo_refer'}
                />
            </section>
        </>
    );
}
