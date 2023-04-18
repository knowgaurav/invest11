import React from "react";
import Masonry from "react-masonry-css";
import "./TestimonialGrid.css";

const tweets = [
  {
    name: "Vinish Nair",
    username: "@vinishnair",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--H3ReeQOb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ivc0k6p93ace33vvka0.png",
    tweet:
      "A great app with a one stop solution for all investment related info. There were two problems I faced due to which I gave 4 stars, which are :- 1. At times the app crashes. (Not very frequent, but it does crash once in a while) 2. The app doesn't feature Split screen function. It is important for investors to refer to multiple apps in order to make an informed decision",
    time: "May 13, 2020",
  },
  {
    name: "brian luk",
    username: "@brianluk",
    image:
      "https://www.youlead.lk/mentoring/uploads/b3a6fbc5101328b96727bb29c956aa90",
    tweet:
      "One of the better investment stock tickers. However the ads and spam almost double. Making the app more difficult to use or access. I wouldn't mind having a reasonable one-time flat fee instead",
    time: "January 17, 2023",
  },
  {
    name: "Matt Neilson",
    username: "@mattneilson",
    image:
      "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
    tweet:
      "Informational content is good, but app has some UI and usability issues. Default colors for indicators (e.g., dark blue and dark red MACD) are very hard to see in dark mode, and should be lighter. UI bug prevents the user from changing colors (i.e., cannot access the 'Style' tab from the indicator settings modal popup)",
    time: "January 17, 2023",
  },
  {
    name: "Defrenchez James",
    username: "@defrenchezjames",
    image:
      "https://b1831098.smushcdn.com/1831098/wp-content/uploads/2020/12/portrait-of-a-young-african-american-business-woma-PEK9XL4.jpg?lossy=1&strip=1&webp=1",
    tweet:
      "I love this app it's just one error that keeps saying enable notifications for alerts when it's already enabled please fix this other than that it's the best forex and stock app on the market to analyze the best predictions,markets,and trends if utilized right.",
    time: "February 23, 2023",
  },
  {
    name: "Ramon Cornick",
    username: "@ramoncornick",
    image:
      "http://projects.websetters.in/digg-seos/digg/wp-content/themes/twentytwenty-child-theme/img/demo-prof.jpg",
    tweet:
      "This is my favorite because it's accurate and if also exposed the TV bobbleheads that they don't know what they talking about and sometimes you need me appear that I was an expert compared to the information and I was getting off of other networks that was on mainstream TV. My advice is for people to study read and analyze the stock market to understand it it's a risk but it's only your wrist if you're not educated and you don't have to go to school there's a lot of information that's comprehens",
    time: "December 17, 2022",
  },
  {
    name: "Gjoko Ginov",
    username: "@gjokoginov",
    image: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    tweet:
      "Very easy to navigate. All the relevant information at one place. Love the alerts and analysis.",
    time: "February 23, 2023",
  },
  {
    name: "Manoj Kshirsagar",
    username: "@manojkshirsagar",
    image:
      "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
    tweet:
      "Fairly good for a beginner, happy with features it offers although sometimes it does give errors or outages due to maintenance or downtime. But Overall satisfactory.",
    time: "January 14, 2023",
  },
  {
    name: "Alex Fi",
    username: "@alexfi",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    tweet:
      "My favourite markets tracking app. Great job. Might have to look into premium, cause ads are a bit annoying, though I don't think they are excessive.",
    time: "December 24, 2022",
  },
  {
    name: "Benjamin Grim",
    username: "@benjamingrim",
    image:
      "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
    tweet:
      "Great app. Both Canada and u.s. stocks. Lots of information. Quick access to portfolios. Some of the ads are monotonous but it offers excellent info. It would be great to see the option chains instead of the currencies. Or Buy f you had a choice. it has been great to have this information available.",
    time: "October 11, 2022",
  },
];

const TestimonialGrid = () => {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {tweets.map((item, index) => {
        return (
          <div
            key={index}
            className="border rounded-xl p-4 flex flex-col gap-3"
          >
            <div className="flex gap-2">
              <img
                src={item.image}
                className="w-12 h-12 rounded-full object-cover"
                alt="tweet"
              />
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-gray-500">{item.username}</div>
              </div>
            </div>
            <div>{item.tweet}</div>
            <div className="text-gray-500 text-xs font-medium">{item.time}</div>
          </div>
        );
      })}
    </Masonry>
  );
};

export default TestimonialGrid;
