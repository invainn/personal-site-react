import Link from 'next/link';
import Sub from '../components/Sub';

const Intro = () => (
    <div style={{ 'align-self': 'center' }}>
        <div><h2>Hi, I'm <span style={{ color: 'white' }}>Anthony Bennett.</span></h2></div>
        <div><p>I am a Senior at the University of Nevada, Reno majoring in Computer Science and Engineering.</p></div>
        <div><p>I am interested in full-stack application development and backend infrastructure.</p></div>
        <div>
            <p>
                I am actively looking for internships and part-time jobs, so feel free to <Link href="/contact"><a>contact me!</a></Link>
            </p>
        </div>
    </div>
);

export default Intro;
