import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState } from 'react';
import { PROJECTS, SKILLS, ABOUT } from './data';
import { ProjectCard } from './Components/ProjectCard/ProjectCard';
import { Layout } from './Components/Layout/Layout';
import { ProfileHeader } from './Components/ProfileHeader/ProfileHeader';
import { ContactBox } from './Components/ContactBox/ContactBox';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { TopSkills } from './Components/TopSkills/TopSkills';
import MySpacePlayer from './Components/MusicPlayer/MySpacePlayer';

function App() {
  return (
    <>
    <Layout>
        <div className='row g-4'>

          {/* COLUMN LEFT */}
           <div className="col-md-5">
            {/* PROFILE IMAGE & BIO */}
              <ProfileHeader
                name='Sarah Smith'
                profileImg='./assets/IMG_6771.jpeg'
                quote="If you think you've peaked, find a new mountain."
              />
              <ContactBox />
              <AboutMe about={ABOUT}/>
              <div className="bg-light">
                {/* <p className="text-muted small italic">[Music Player goes here]</p> */}
                <MySpacePlayer />
              </div>
          </div>
          {/* COLUMN RIGHT */}
            <div className="col-md-7">
              {/* PROJECTS */}
              <div className="card border-black mb-4">
                <div className="card-header bg-primary text-white fw-bold py-1">Sarah's Projects</div>
                  {PROJECTS.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              {/* SKILLS / top 8 section */}
              <TopSkills />
            </div>
          </div>
        </Layout>
    </>
  )
}

export default App;
