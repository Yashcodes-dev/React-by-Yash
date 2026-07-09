import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const jobs = [
  {
    brandLogo: "/logos/google.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payout: "$42/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "/logos/microsoft.png",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payout: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "/logos/amazon.png",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payout: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "/logos/apple.png",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payout: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "/logos/meta.png",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payout: "$60/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "/logos/netflix.png",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "React UI Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    payout: "$70/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "/logos/adobe.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payout: "$48/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "/logos/uber.png",
    companyName: "Uber",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payout: "$38/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "/logos/airbnb.png",
    companyName: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    payout: "$68/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "/logos/nvidia.png",
    companyName: "NVIDIA",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payout: "$50/hr",
    location: "Pune, India"
  }
];

console.log(jobs)

  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return <Card company = {elem.companyName} post = {elem.post} />


      })}


    </div>
  )
}

export default App
