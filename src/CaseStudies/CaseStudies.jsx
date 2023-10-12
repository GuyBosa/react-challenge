import  styles from './CaseStudies.module.css';
// import ImageSlider  from './image-slider'
import ImageSlider from "./imageSlider";
import OlympianImg from "./images/olympian.png";
import SkhokhoImg from "./images/skhokho.png";
import dragon from "./images/dragon.png";
import Slider from "react-slick";



function CaseStudies() {
    const images = [
        dragon,
        SkhokhoImg,
        OlympianImg,
        dragon,
        SkhokhoImg,
        OlympianImg,
        // Add more image URLs here
      ];

    return (
        <div>
            <div class="row m-0 mt-5" className={`${styles.cases}`}>
                <div class="col-md-2" className={`${styles.underline}`}></div>
                <div class="col-md-6 m-0 p-0" className={`${styles.subtext}`}>
                    <h4 class="p-0 m-0">Case Studies</h4>
                </div>
            </div>
            <div class="row m-0 p-0">
                <div class="col">
                    <div className={`${styles.olympian}`}>
                        <h4 className={`${styles.casestudies}`}>The Olympian</h4>
                        <p>The only athlete in the world to do her Olympic routine in 2020.</p>
                    </div>
                </div>

                <div class="col">
                    <div className={`${styles.savings}`}>
                        <h4 className={`${styles.casestudies}`}>The Savings Jar</h4>
                        <p>Grow your savings treasure and grow your dragon.</p>
                    </div>
                </div>

                <div class="col">
                    <div className={`${styles.skhokho}`}>
                        <h4 className={`${styles.casestudies}`}>Skhokho seMali</h4>
                        <p>Helping South Africans become #CashCleva with Skhokho and TymeBank.</p>
                    </div>
                </div>
            </div>



            {/* <div className="w-full max-w-xl mx-auto">
                <ImageSlider
                    images={[
                    "https://picsum.photos/id/10/960/540",
                    "https://picsum.photos/id/11/960/540",
                    "https://picsum.photos/id/12/960/540",
                    ]}
                />
            </div> */}

            {/* <div style={{padding: "10px"}}>
                <ImageSlider images={images} />
            </div> */}
        </div>
    )
}

export default CaseStudies;