import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function RecentWorks() {
  return (
    <div className='mt-20'>
       <div className='text-center'>
      <p className='text-4xl lg:text-6xl font-bold text-[#8953F7] mt-5'>
          My Recent <span className='text-[#B694FA]'>Works</span>
        </p>
        <p className='text-[#B694FA] font-bold mt-5'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>

        <Tabs>
      <TabList className={'flex justify-center gap-5 [font-size:12px] lg:[font-size:20px] w-8/9 lg:w-1/2 mx-auto mt-14 border text-amber-50 font-bold bg-black p-3 rounded-full'}>
        <Tab>Front End Projects</Tab>
        
        <Tab>Backend Projects</Tab>
        <Tab>All Projects</Tab>
        
      </TabList>

      <TabPanel>
        <p>
          <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario</i>) is a fictional character
          in the Mario franchise, owned by Nintendo. Created by Shigeru Miyamoto, Mario
          is a short, Italian plumber who resides in the Mushroom Kingdom, often rescuing
          Princess Peach from Bowser. His younger brother and sidekick is Luigi.
        </p>
        <p>
          Source:{" "}
          <a href="https://en.wikipedia.org/wiki/Mario" target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
        </p>
      </TabPanel>

      

      <TabPanel>
        <p>
          <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime</i>) is the
          princess of the Mushroom Kingdom and a recurring damsel-in-distress in the Mario series.
          She is often depicted as Mario's love interest and the lead female character.
        </p>
        <p>
          Source:{" "}
          <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
        </p>
      </TabPanel>

      <TabPanel>
        <p>
          <b>Yoshi</b> (<i>ヨッシー Yosshī</i>) is a fictional dinosaur who debuted in Super Mario World (1990).
          He has appeared in various Mario spin-offs, including Yoshi's Island, Mario Kart, and Super Smash Bros.
        </p>
        <p>
          Source:{" "}
          <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
        </p>
      </TabPanel>

      
    </Tabs>
    </div>
  )
}
