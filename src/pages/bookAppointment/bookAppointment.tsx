import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import './bookAppointment.scss';
import Banner from "../../components/banner/banner";
import ScheduleAppointment from "../../assets/bannerImages/appointmentBanner.jpeg";
import {Link} from "react-router-dom";
import SimplePracticeWidget from "../../components/simplePracticeWidget/simplePracticeWidget";

export default function BookAppointment(): ReactElement {
    return (
        <>
            <Navigation/>
            <Banner imageSrc={ScheduleAppointment} imageAlt={'calendar'}/>
            <h2>Book a New Patient Discovery Visit</h2>
            <p>Your first visit will be discovery a visit reviewing your story, your mouth, throat, and airway. This will take place in a comfortable room in Santa Barbara, CA by Nicole Cantello your Oral Myofunctional Therapist. You can expect about a sixty to ninety minute visit which will include photographs, video of swallowing, an explanation of your conditions, and a brief description of your treatment plan. We will also discuss the cost of your treatment and payment plan options. You should plan for an expense of $250 for your initial visit which will be collected at time of service. (For more detailed info about costs see <Link to={'/how-it-works'}>How It Works</Link>) </p>
            <p>When you click “Book Appointment”  you will be able to see a calendar of available appointment times. I am currently seeing patients aged 7 and older. I am currently seeing new patients on Wednesdays before 3pm, if you need another day, please reach out to me and I will work to accommodate you as best as I can.</p>
            <SimplePracticeWidget
                buttonText={'New Patients - Book Discovery Visit'}
                href={"https://nicole-cantello.clientsecure.me/request/service"}
            />
            <p>Not ready to schedule yet? Do you have questions you would like to talk through? You can book a free 15 minute call with Nicole!</p>
            <div className={'section-line'}/>
            <h2>Existing Patients</h2>
            <p>Existing patients who have already had a consultation appointment and are starting a treatment plan, or are booking their first therapy session after the consultation can use this link. When prompted, use the email address you provided during your initial scheduling or at your consultation appointment.</p>
            <SimplePracticeWidget
                buttonText={'Existing Patient - Access Portal'}
                href={"https://nicole-cantello.clientsecure.me/sign-in"}
            />
            <div className={'section-line'}/>
            <h2>Consultations with Nicole for Health Care Providers</h2>
            <p>Other health care providers including other myofunctional therapists can schedule a virtual consultation with Nicole to review a case, practice implementation, ask questions about therapy, case management advice, and practice management advice.</p>
            <Footer/>
        </>
    );
}
