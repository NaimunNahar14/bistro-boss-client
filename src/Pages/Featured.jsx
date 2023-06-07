
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import featuredImg from '../assets/home/featured.jpg';
import '../Pages/Featured.css';

const Featured = () => {
    return (
        <div className='featuredItem bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading="Check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20 , 2023</p>
                    <p className='uppercase'> Where  can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, perferendis! Rem et odit quae quo maiores dolor repellendus quod, aspernatur facere. Maiores doloremque ea ad repellat ipsam recusandae, debitis voluptatum!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 btn-accent">order Now!!</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;