import HeroContent from "./HeroContent";

const mainFeaturedPost = {
  title: "Start building your sweet home here",
  description:
    "Are you running out of ideas for your living room layout? Maybe you are facing difficulties in creating more storage in your home. We can give you expert advice and inspiration to help you plan your interior within the comfort of your own home..",
  image: "https://source.unsplash.com/random",
  // image: src="../assets/homecover.jpg", 
  imageText: "MERN FURNITURE",
  linkText: "Shopping now",
};

export function Hero() {
  return <HeroContent post={mainFeaturedPost} />;
}
