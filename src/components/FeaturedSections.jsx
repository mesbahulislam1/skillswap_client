
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import FreelancerUserCard from "./FreelancerUserCard";
import { getFreelancerUser } from "@/lib/api/user/session";

// const freelancers = [
//   {
//     id: 1,
//     name: "freelancer user 3",
//     bio: "i am cool",
//     skills: ["python"],
//     rate: 29,
//   },
//   {
//     id: 2,
//     name: "freelancer user 2",
//     bio: "i am the best",
//     skills: ["Next js"],
//     rate: 40,
//   },
//   {
//     id: 3,
//     name: "freelancer user 1",
//     bio: "i am a good freelancer",
//     skills: ["React"],
//     rate: 50,
//   },
//   {
//     id: 4,
//     name: "shan",
//     bio: "i am good",
//     skills: ["react", "nodejs"],
//     rate: 20,
//   },
// ];

export default async function TopFreelancers() {

  const freelancers =await getFreelancerUser()
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          
          <h1  className="block bg-gradient-to-r text-center pb-3 font-bold uppercase from-cyan-400 to-blue-500 bg-clip-text text-transparent">Freelancers</h1>

          <h2 className="text-4xl font-bold ">
            Top Freelancers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {freelancers.slice(0,4).map((freelancer) => (
            <FreelancerUserCard key={freelancer?._id} freelancer={freelancer}></FreelancerUserCard>
          ))}
        </div>

        <div className="flex justify-center mt-10">
            <Link href={'/freelancers'} className="block bg-gradient-to-r hover:text-cyan-600 text-center pb-3 font-medium from-cyan-400 to-blue-500 bg-clip-text flex items-center gap-2  hover:gap-3 transition-all text-transparent w-fit">View All Freelancers <FaArrowRight className="text-cyan-500"></FaArrowRight></Link>

        </div>
      </div>
    </section>
  );
}