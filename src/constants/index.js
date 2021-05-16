const userDetails = {
  firstName: "Vaibhav",
  lastName: "Sharma",
  githubHandle: "vaibhvshrma",
  currentCompany: {
    name: "HackerEarth",
    startTime: "August 2020",
    website: "https://www.hackerearth.com",
    designation: "Software Engineer",
  },
  resume: "https://drive.google.com/file/d/1ily9p6mTrqaJy4Hj6n9M8_rqpSczH8mj/preview",
};

userDetails.fullName = `${userDetails.firstName} ${userDetails.lastName}`;
userDetails.githubProfile = `https://github.com/${userDetails.githubHandle}`;

export { userDetails };
