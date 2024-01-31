import Image from "next/image";
import Navbar from "./components/Navbar";
import Primarybtn from "./components/Primarybtn";
import InfoCards from "./components/InfoCards";
import { Devonshire } from "next/font/google";
import InfoSecondary from "./components/InfoSecondary";
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";


export default function Home() {
  return (
    <main className="w-full font-Inter">
      <section className="bg-silver pb-20">
        <Navbar />
        <div className="flex flex-col items-center justify-start  w-full px-4 py-3 lg:flex-row lg:justify-center lg:gap-x-12 md:px-8 lg:px-12 md:pt-4 lg:pt-12">
          <div className="flex flex-col w-full mt-8 gap-2 lg:w-[60%]">
            <h1 className="text-5xl font-bold text-black mb-2">Lessons and insights <span className="text-primary">from 8 years</span></h1>
            <p className="text-grey mb-8">
            Where to grow your business as a photographer: site or social media?
            </p>
            <button className='bg-primary text-white p-2 rounded-lg w-1/3'>
              Register
            </button>
          </div>
          <div className="lg:w-[27%]">
            <img src="./illustration.svg" className=" hidden lg:flex"/>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full px-5 py-3 text-d-grey h-full md:px-8 lg:px-12 md:pt-4 lg:pt-12"> 
        <div className="flex w-full flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">Our clients</h2>
          <p className="text-center text-grey">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className=" content-center w-full hidden lg:grid grid-cols-7 my-4 py-20">
            <div className="flex w-full justify-center items-center">
              <img src="./clients1.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center items-center">
              <img src="./clients2.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center items-center">
              <img src="./clients3.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center items-center">
              <img src="./clients4.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center">
              <img src="./clients5.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center">
              <img src="./clients6.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center">
              <img src="./clients7.svg" className="h-12 w-12 flex" />
            </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full my-16  mb-8 h-full lg:py-12 lg:hidden">
          <div className="grid grid-cols-4 w-full mb-6">
            <div className="flex w-full justify-center items-center">
              <img src="./clients1.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center items-center">
              <img src="./clients2.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center items-center">
              <img src="./clients3.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center items-center">
              <img src="./clients4.svg" className="h-12 w-12 flex" />
            </div>
            
          </div>
          <div className="grid grid-cols-3 w-full content-center items-center justify-center">
            <div className="flex w-full justify-center">
              <img src="./clients5.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center">
              <img src="./clients6.svg" className="h-12 w-12 flex" />
            </div>
            <div className="flex w-full justify-center">
              <img src="./clients7.svg" className="h-12 w-12 flex" />
            </div>
          </div>

        </div>
        <div className="flex flex-col justify-center items-center w-full ">
          <h2 className="text-4xl my-2 font-bold text-center lg:pt-8">
            Manage your entire community in a single system
          </h2>
          <p className="text-d-grey my-1 lg:mb-4">
          Who is Nextcent suitable for?
          </p>
        </div>
        <div className=" hidden lg:grid xl:hidden grid-cols-2 w-full gap-y-16 gap-x-6 mt-12 lg:mt-16">
          <InfoCards cardNumer={1} cardTitle={'Membership Organisations'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
          <InfoCards cardNumer={2} cardTitle={'National Associations'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
        </div>
        <div className=" hidden xl:grid grid-cols-3 w-full gap-y-16 gap-x-6 mt-12 lg:mt-16 my-24">
          <InfoCards cardNumer={1} cardTitle={'Membership Organisations'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
          <InfoCards cardNumer={2} cardTitle={'National Associations'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
          <InfoCards cardNumer={3} cardTitle={'Clubs  And Groups'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
        </div>
        <div className="hidden lg:flex w-full xl:hidden  items-center justify-center  mt-12 lg:mb-12">
         <InfoCards cardNumer={3} cardTitle={'Clubs  And Groups'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
        </div>
        <div className="grid grid-auto-fit-xl w-full gap-y-16 gap-x-6 mt-12 lg:hidden">
          <InfoCards cardNumer={1} cardTitle={'Membership Organisations'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
          <InfoCards cardNumer={2} cardTitle={'National Associations'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
          <InfoCards cardNumer={3} cardTitle={'Clubs And Groups'} cardText={'Our membership management software provides full automation of membership renewals and payments'}/>
        </div>
      </section>
      <section className="my-4 mt-8 md:px-8 lg:px-12 flex gap-x-8">
        <div className="lg:w-[35%] hidden lg:flex">
          <img src="./illu1.svg" className=" hidden lg:flex"/>
        </div>
        <div className="w-full flex flex-col py-3 text-center lg:text-start text-d-grey lg:w-[60%] px-2">
          <h2 className="text-d-grey font-bold text-4xl   mb-4 ">The unseen of spending three years at Pixelgrade</h2>
          <p className="  mb-8  px-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button className='bg-primary text-white p-2 rounded-lg mx-4 lg:w-1/3 lg:mx-0'>Learn more</button>
        </div>
      </section>
      <section className="flex flex-col w-full px-4 py-2 mt-12 pb-8 my-4 md:px-8 lg:px-20 lg:flex-row gap-x-8 xl:gap-x-0 xl:px-32">
        <div className="my-4 flex flex-col text-center lg:text-start justify-center xl:w-2/3">
          <h2 className="text-3xl font-bold text-grey ">Helping a local <span className="text-primary">business reinvent itself</span></h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="grid grid-cols-2 px-4 gap-4 gap-y-8 mt-8  items-center justify-between xl:w-1/3">
          <InfoSecondary number={'2,245,341'} infoType={'Members'} image={'info21'}/>
          <InfoSecondary number={'46,328'} infoType={'Clubs'} image={'info22'}/>
          <InfoSecondary number={'828,867'} infoType={'Event Bookings'} image={'info23'}/>
          <InfoSecondary number={'1,926,436'} infoType={'Payments'} image={'info24'}/>
        </div>
      </section>
      <footer className="w-full bg-black text-white flex lg:flex-row lg:justify-between flex-col p-4 mt-12 justify-center items-center text-center md:px-8 lg:px-12">
        <img src="./LogoWhite.svg" className=" w-36 h-6"/>
        <div className="my-8 flex flex-col">
          <span className="mb-2">Copyright © 2020 Nexcent ltd.</span>
          <span>All rights reserved</span>
        </div>
        <div className="text-white flex  gap-x-6 justify-center">
          <div className="rounded-full bg-d-grey p-1">          <IoLogoInstagram /></div>
          <div className="rounded-lg bg-d-grey p-1">
          <IoLogoTwitter /></div>
          <div className="rounded-lg bg-d-grey p-1">          <IoLogoYoutube /></div>

        </div>
      </footer>
     
    </main>
  );
}
