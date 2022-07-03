import Carousal from '../../subcomponent/carousal';
import Imagecomp from "../../subcomponent/imagecomp"

const FinalScreens = () => {


  const num4=[1,2,3,4];

  return (
    <div className='my-7'>
      <h1 className='Headings'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">FINAL SCREENS</h1>
      <div className='Contents mt-1'>
        <p  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <span className='pink-text'>HERO SCREEN</span> - I customized a
          illustration to make it look like Bhaskar
        </p>
        <div className='mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          <Imagecomp path="p2_fsimg1" num={[""]} className="img" />
       
        </div>
        <p className='mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <span className='pink-text'>EXPERIENCE SCREENS</span> - I made bullet
          points for texts to make it easy to read
        </p>
        <div className='my-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
         
         
          <Carousal path="p2_fsc2img" num={num4} />
        
        
        </div>
        <p className='mt-4 md:mt-7'   data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <span className='pink-text'>SKILLS SCREEN</span> -
        </p>
        <div className=' mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
         
        <Imagecomp path="p2_fsimg2" num={[""]} className="img" />
        
        
        </div>
        <p className='mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <span className='pink-text'>PROJECTS SCREENS</span> - I introduced a
          character who guides through his projects in an interactive way
        </p>
        <div className='img-div mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
        <Imagecomp path="p2_fsimg3" num={[""]} className="img" />
       
       
        </div>
        <p className='mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <span className='pink-text'>PUBLICATIONS SCREENS</span> - I introduced
          another character that guides the viewer through his patents
        </p>
        <div className='img-div mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
        <Imagecomp path="p2_fsimg4" num={[""]} className="img" />
        
        
        </div>
        <p className='mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <span className='pink-text'>ACHIEVEMENTS SCREENS</span> - I listed his
          achievements in form of a caraousel
        </p>
        <div className='img-div mt-4 md:mt-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
         
         
        <Imagecomp path="p2_fsimg5" num={[""]} className="img" />
        
        
        </div>
      </div>
    </div>
  );
};

export default FinalScreens;
