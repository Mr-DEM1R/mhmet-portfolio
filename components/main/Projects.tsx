import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 z-50 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 z-50 px-10">
        <ProjectCard
          src="/carprice.png"
          title="Car Price Prediction System"
          description="
          The Website presents a system for accurate used car price forecasting using Kaggle data, ensuring transparency and fairness in transactions with over 92% accuracy."
          githubLink="https://github.com/Mr-DEM1R/Car_Price_Prediction"
          websiteLink="https://id.heroku.com/login" 
          reportLink="https://drive.google.com/file/d/1DOc4x98_vIXrCFqjdbGHP5TKHH3_MSPS/view?usp=sharing" // Replace with your actual report link
        />
        
        <ProjectCard
          src="/rockpaper.png"
          title="Rock – Paper – Scissor With AI"
          description="In this project, players use hand gestures to make
          their moves, which are recognized and processed by computer vision algorithms.."
          githubLink="https://github.com/Mr-DEM1R/rock_paper_scissors"
          websiteLink="https://id.heroku.com/login" 
          reportLink="https://drive.google.com/file/d/1Foa1W4MH1SpRrHFki-WtrWCNVnlOm59D/view?usp=sharing" // Replace with your actual report link
        />
        
        <ProjectCard
          src="/potato.png"
          title="Potato Disease Classification"
          description="Project aims to classify potato plant diseases using deep learning to reduce economic losses for growers."
          githubLink="https://github.com/Mr-DEM1R/Potato_disease_classification"
          websiteLink="https://potato-disase-app.herokuapp.com/" // Replace with your actual website link
          reportLink="https://drive.google.com/file/d/1vL-8prhBYnfnhgnUJPu_NKh2iOCVkDlt/view?usp=sharing" // Replace with your actual report link
        />
      
      </div>
      <br />
      <div className="h-full w-full flex flex-col md:flex-row gap-10 z-50 px-10">
        <ProjectCard
          src="/house.jpg"
          title="House Price Regression "
          description="For the purpose of predicting house sale prices in United States, this project aimsat developing prediction algorithms based on machine learning."
          githubLink="https://github.com/Mr-DEM1R/house_price-prediction"
          websiteLink="https://house-price-app.herokuapp.com/" // Replace with your actual website link
          reportLink="https://drive.google.com/file/d/1eY_PNeHFFaTKPP6G_RmCh-Tkk60Qwfos/view?usp=sharing" // Replace with your actual report link
        />

        <ProjectCard
          src="/heart.jpg"
          title="Heart Condition Classification"
          description="
          The project predicts heart disease by analyzing medical history, offering swift diagnosis for better patient care."
          githubLink="https://github.com/Mr-DEM1R/rock_paper_scissors"
          websiteLink="https://heart-detector-app.herokuapp.com/" // Replace with your actual website link
          reportLink="https://drive.google.com/file/d/1eY_PNeHFFaTKPP6G_RmCh-Tkk60Qwfos/view?usp=sharing" // Replace with your actual report link
        />
        
        <ProjectCard
          src="/ecoscan.png"
          title="Cyf EcoScan"
          description="The project aims to detect and classify real-time litter using a camera."
          githubLink="https://github.com/Mr-DEM1R/1.618_AI"
          websiteLink="https://www.youtube.com/watch?v=VIkIeYZasbY" // Replace with your actual website link
          reportLink="" // Replace with your actual report link
        />
      
      </div>
      <br />
      <div className="h-full w-full flex flex-col md:flex-row gap-10 z-50 px-10">
        <ProjectCard
          src="/youtube.jpg"
          title="Youtube video recommendation" 
          description="."
          githubLink="https://github.com/Mr-DEM1R/aws_frontend"
          websiteLink="http://myfirstaws27.s3-website.eu-west-2.amazonaws.com" // Replace with your actual website link
          reportLink="" // Replace with your actual report link
        />

        
        
        <ProjectCard
          src="/22.jpg"
          title="Green City Data Visualization"
          description=""
          githubLink="https://github.com/Mr-DEM1R/1.618_AI"
          websiteLink="https://www.youtube.com/watch?v=VIkIeYZasbY" // Replace with your actual website link
          reportLink="" // Replace with your actual report link
        />
      
      </div>
      
    </div>
  );
};

export default Projects;
