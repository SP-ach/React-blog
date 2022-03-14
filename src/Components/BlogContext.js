import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([{
            "Title": " Aamir Khan confirms ‘planning is on’ for Hindi remake of Spanish film Campeones",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 12 2022",
            "ImageAsset": "https://media2.bollywoodhungama.in/wp-content/uploads/2022/03/Aamir-Khan-confirms-planning-is-on-for-Hindi-remake-of-Spanish-film-Campeones-.jpg",
            "BlogContent": "Campeones meaning Champions is a sports comedy-drama set against the backdrop of basketball where an arrogant coach is forced to do community service and train a team with developmental disabilities. The film starred Javier Gutierrez, Jose de Luna, Gloria Ramos, Roberto Chinchilla, Athenea Mata, Luisa Gavasa, Mariano Llorente, Daniel Freire, and Juan Margallo. It was directed by Javier Fesser. While Campeones is set against the backdrop of basketball, the team is figuring out the sport it will tackle in this film. The film was the biggest national box office hit of the year.",
            "Likes": "1000K"
        },
        {
            "Title": " Prabhas draws fans into metaverse for ‘Radhe Shyam’ trailer, servers crash within minutes",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://images.indianexpress.com/2020/10/Beats-Of-Radhe-Shyam-1200.jpg",
            "BlogContent": "almost 2 lakh fans rushed to enter the Metaverse in just 3 minutes of the trailer’s launch, which caused the servers to crash. The report claims that fans not only marked their attendance in the virtual space to see the showcase of the film's trailer, but also poured likes, and comments. For the uninitiated, Metaverse is a three-dimensional virtual ecosystem for social connections.",
            "Likes": "700K"
        },
        {
            "Title": " Amitabh Bachchan Signed Hospital Papers When Amjad Khan Was Facing Death",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 5 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/amjad-khans-wife-recalls-amitabh-bachchan-signing-hospital-papers-after-their-accident-says-he-must-have-been-nervous-because-no-one-knew-whether-the-man-was-going-to-make-it-001.jpg",
            "BlogContent": "Amjad’s wife Shehla Khan opened up about a near-death accident she and the got into and how Sr Bachchan helped them during it. The late actor’s wife recalled when she and her husband met with an accident ahead of the shooting of The Great Gambler (1979) and needed surgery. She revealed how Big signed hospital documents in order for a tracheostomy to be performed on Amjad.",
            "Likes": "500K"
        },
        {
            "Title": "5 Bollywood celebs who own private jets ",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 12 2022",
            "ImageAsset": "https://st1.bollywoodlife.com/wp-content/uploads/2021/04/MicrosoftTeams-image-385.jpg",
            "BlogContent": "Bollywood celebs live life king size in reality and own luxurious bunglows, branded cars, private jets and much more. Shah Rukh Khan :Bollywood's king khan Shah Rukh Khan owns a private jet and often travels across the globe with his jet. Amitabh Bachchan : Bollywood's Shahenshah Amitabh Bachchan owns a private jet and enjoys his me-time while traveling. He likes keeping himself updated with news and also utilizes travel time in reading.  Ajay Devgan :  Bollywood actor Ajay Devgn is the first star who owned a six-seater private jet. The actor has a jet on his name. Akshay Kumar : Bollywood's Khiladi actor Akshay Kumar owns a private jet and prefers traveling in this to reach on time. Salman Khan : Bollywood’s Bajrangi Bhaijaan Salman Khan is a proud owner of a private jet. The actor owns a stylish private jet.",
            "Likes": "600k"
        },
        {
            "Title": " The Kashmir Files' is a story, based on victims of the Genocide of Kashmiri Pandit Community In 1990.",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://static.toiimg.com/photo/89726146.jpeg",
            "BlogContent": "The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. Produced by Zee Studios,the film is based on the exodus of Kashmiri Hindus during the Kashmir Insurgency. It stars Anupam Kher, Darshan Kumar, Mithun Chakraborty and Pallavi Joshi.The film was initially set to release theatrically worldwide on 26 January 2022, coinciding with India's Republic Day,but was postponed due to the Omicron variant spread,[8] and finally theatrically released on 11 March 2022.",
            "Likes": "2.5M"
        }
    ]);

    const [technology, setTechnology] = useState([{
            "Title": " AI App Puts New Life in Old Photos",
            "CategoryName": "Technology",
            "PublishedDate": "March 13 2022",
            "ImageAsset": "https://www.technewsworld.com/wp-content/uploads/sites/3/2021/05/xl-2021-my-heritage-1.jpg",
            "BlogContent": "Nostalgia website MyHeritage has launched a new service that allows you to create lifelike animations of faces in still photos. The AI-powered service called Deep Nostalgia, launched last week, is free to try and is remarkably accurate in depicting how a person would look if captured on video. Their eyes blink, their head moves and their mouth forms a smile.",
            "Likes": "800"
        },
        {
            "Title": " Nothing Phone Tipped to Launch in April, Could Feature Familiar Transparent Design",
            "CategoryName": "Technology",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Nothing_Phone_9_9.jpg",
            "BlogContent": "Nothing — OnePlus founder Carl Pei's new startup — could launch its first smartphone in April, according to a new report. Last month, Pei teased the launch of a new smartphone in a series of tweets. Now, a new report suggests that Pei's startup could announce the smartphone as early as next month. The handset is said to feature a transparent design, similar to Nothing's first pair of true wireless stereo (TWS) earbuds that were launched in 2021. The company is yet to officially reveal plans for its first smartphone.",
            "Likes": "650"
        },
        {
            "Title": " Advanced Sensor System May Open Door to Zero Death Driving",
            "CategoryName": "Technology",
            "PublishedDate": "March 13 2022",
            "ImageAsset": "https://www.technewsworld.com/wp-content/uploads/sites/3/2021/08/autonomous-driving.jpg",
            "BlogContent": "The research report by Neural Propulsion Systems, of Pleasanton, Calif., found that sensors needed to eliminate roadway deaths need to process data at a peak rate of 100 terabits per second, or 10 times the data rate from the eyes to the brain of a human being. According to the report, humans see at just about one billionth of the required information processing rate needed to prevent accidents. NPS revealed in its report that it was able to reach those rates in a pilot-scale, proof-of-concept test of the core sensor element required for zero roadway deaths at an airfield in Northern California in December.",
            "Likes": "700"
        },
        {
            "Title": " Apple may launch MacBook Air and 13-inch MacBook Pro later this year, say reports",
            "CategoryName": "Technology",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img.etimg.com/thumb/msid-90155601,width-650,imgsize-13298,,resizemode-4,quality-100/image-2022-03-11t194901-883.jpg",
            "BlogContent": "While the PC seems to be a powerful upgrade to its existing line-up of computing devices, Apple fans around the world are eagerly waiting for the next wave of MacBooks. After all, it has been nearly two years since the tech giant announced its transition from Intel Macs to Apple Silicon. Although two of the devices currently are powered by Intel, Apple is already working towards introducing Macs with its latest M2 chip.",
            "Likes": "900"
        },
        {
            "Title": " Metaverse: Technology that merges virtual, physical worlds soon to become a reality, Meta says",
            "CategoryName": "Technology",
            "PublishedDate": "March 12 2022",
            "ImageAsset": "https://www.techidence.com/wp-content/uploads/2021/12/Metaverse.jpg",
            "BlogContent": "Technology that merges the virtual and physical worlds could start to become a reality for consumers in a few years, Facebook owner Meta Platforms Inc has told advertising agencies, giving more details of its vision for the creation of the metaverse. Mixed reality (MR) technology could allow a person wearing an MR headset to use a real world object to trigger a virtual world reaction, like hitting a video game character with a real world baseball bat, for instance.",
            "Likes": "422"
        }
    ]);

    const [hollywood, setHollywood] = useState([{
            "Title": " Alia Bhatt Is Set For Big Hollywood Debut With Gal Gadot. This Is Not A Drill",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 9 2022",
            "ImageAsset": "https://images.cinemaexpress.com/uploads/user/imagelibrary/2022/2/10/original/Untitled_design_-_2022-02-10T152852.jpg?w=400&dpr=2.6",
            "BlogContent": " Alia Bhatt is going places and the actress has more than one reasons to celebrate. Firstly, her recently-released film Gangubai Kathiawadi is performing well in theatres and has been praised by the critics. Now, the other big news - she is all set to make her big Hollywood debut in a film titled Heart Of Stone. Wait, it gets better. The film stars Gal Gadot and Jamie Dornan too. ",
            "Likes": "800"
        },
        {
            "Title": " The Batman Box Office (Worldwide): Robert Pattinson Starrer Is All Set To Touch $500 Million Milestone",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://assets-prd.ignimgs.com/2022/01/26/thebatman-newbutton-1643232430643.jpg",
            "BlogContent": "The Batman saw a drop during the week but picked up during its second weekend. According to BoxOfficeMojo, the Robert Pattinson starrer has collected $463,220,826 at the worldwide box office, which means that it is reaching the half a billion mark ($500 million). Only a few Hollywood hits like Spider-Man: No Way Home, No Time to Die, F9, and Venom: Let There Be Carnage have been able to hit that benchmark during the pandemic. ",
            "Likes": "800K"
        },
        {
            "Title": "‘Spider-Man’ Tom Holland Recalls Meeting ‘Superman’ Henry Cavill At A Urinal, Says “I Remember Looking Up…”",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 13 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/superman-henry-cavill-spider-man-tom-hollands-first-meeting-is-too-hillarious-heres-how-the-avenger-remembers-it-001.jpg",
            "BlogContent": "In December 2021, the two superheroes – one from the Marvel Cinematic Universe and the other from the DC Extended Universe, meet on a talk show. When the host pointed out that it was probably the first time they were in the same room, The Devil All the Time actor recalled their first meeting that took place in the most unusual place.",
            "Likes": "2M"
        },
        {
            "Title": " Top 5 movies that won most number of Oscars",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://cdn1.edgedatg.com/aws/v2/abc/Oscars/showimages/ee0fbae7597f94f1d58c3fe06dafcc28/1200x676-Q75_ee0fbae7597f94f1d58c3fe06dafcc28.jpg",
            "BlogContent": "1. ‘The Lord of the Rings: The Return of the King’ (2003). Total Oscar Nominations: 11. Wins: 11.  2.  ‘Titanic’ (1997). A 17-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic. Total Oscar Nominations: 14 , Wins: 11. 3. ‘Ben-Hur’ (1959) . When a Jewish prince is betrayed and sent into slavery by a Roman friend, he regains his freedom and comes back for revenge. Total Oscar Nominations: 12  , Wins: 11. 4.  ‘West Side Story’ (1961) Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy. Total Oscar Nominations: 11 , Wins: 10.  5.  ‘The English Patient’ (1996) .At the close of WWII, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair. Total Oscar Nominations: 12 , Wins: 9 ",
            "Likes": "800K"
        },
        {
            "Title": " Oppenheimer: Christopher Nolan announces next film with Cillian Murphy",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 13 2022",
            "ImageAsset": "https://www.jaridatakhbarak.com/wp-content/uploads/2022/02/Christopher-Nolans-new-Oppenheimer-.png",
            "BlogContent": "Celebrated filmmaker Christopher Nolan has roped in actor Cillian Murphy to play the lead role of American physicist J Robert Oppenheimer in his upcoming historical epic. Titled Oppenheimer, the film will focus on the life of the physicist whose role in running the Los Alamos Laboratory and involvement in the Manhattan Project has led him to be dubbed as the “father of the atomic bomb.”",
            "Likes": "1M"
        }

    ]);

    const [fitness, setFitness] = useState([{
            "Title": "  fitness freak celebrities in India",
            "CategoryName": "Fitness",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://assets.gqindia.com/photos/5f3e6a03b74db60fdc97b357/master/pass/anil%20kapoor%20exercises%20work%20out%20top%20shape%2063%20age%20defying%20ageing.jpg",
            "BlogContent": "At the age of 63, Anil Kapoor is considered to be one of the fittest actors in Bollywood and there's absolutely no denying that. On Friday, the actor shared pictures from his home work out session on Instagram, along with a detailed note about his fitness regime. Anil Kapoor talked about how the lockdown brought out best in him, on the fitness front and wrote: I was never into weightlifting nor did I take rest days so seriously but this lockdown has definitely been a learning curve for me in many ways and this is one of them.",
            "Likes": "800K"
        },
        {
            "Title": " The beauty benefits of exercise",
            "CategoryName": "Fitness",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://fustany.com/images/en/content/header_image_fustany-beauty-health_and_fitness-workout_tips_for_women_with_big_breasts-kim_kardashian-main_image.png",
            "BlogContent": "It’s the best way to get a clear complexion, blemish-free skin, fewer wrinkles and strong, healthy hair. “Exercise has an overall revitalising effect. Regular exercise also means improved blood circulation to the extremities — the fingers, fingernails, toes and toe nails. In fact, exercise benefits the body as a whole, because it improves the strength of the circulatory and respiratory system, which also means improved oxygenation,” says a skin and beauty expert.",
            "Likes": "1M+"
        },
        {
            "Title": " The Best Tech Gadgets To Help You Follow Your Fitness Resolutions",
            "CategoryName": "Fitness",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://video-images.vice.com/articles/61e88400bf2d5e0095b352ab/lede/1642630798754-tech-fitness.png?crop=0.9876543209876544xw:1xh;center,center&resize=500:*",
            "BlogContent": "According to business data platform Statista, fitness industry revenue is expected to reach almost $22 million this year, and Transparency Market Research estimates that people are spending 30 to 35% more on fitness-related products than they did before the pandemic. Wearables alone, aka trackers worn around your wrist to measure various body metrics, are expected to double in sales by 2022, according to CCS Insight, an industry analyst, and is set to become a $27 billion market. That's all to say: There are a ton of workout accessories and devices to pick from if you're looking to upgrade your home gym.",
            "Likes": "800K"
        },
        {
            "Title": " YOGA for fitness",
            "CategoryName": "Fitness",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://cdn.shopify.com/s/files/1/2375/5099/files/chakras-chart_7-chakra-in-order.png?v=1601192552",
            "BlogContent": "Dozens of scientific trials of varying quality have been published on yoga. While there's scope for more rigorous studies on its health benefits, most studies suggest yoga is a safe and effective way to increase physical activity – especially strength, flexibility and balance. There's some evidence that regular yoga practice may be beneficial for people with high blood pressure, heart disease, aches and pains – including lower back pain – depression and stress. ",
            "Likes": "1M"
        },
        {
            "Title": " 5 Simple Tips for Fitness Success",
            "CategoryName": "Fitness",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/7/30/w1200X800/fitness12.jpg",
            "BlogContent": "1. Exercise Daily. Exercise daily for at least an hour. You do not have to kill yourself from running, jogging, etc., 2. Eat the Right Foods and Portion Each Meal. No matter how bad your stomach is telling you to go for candy over healthy food, try to stay away from sweets. Sugar from candy will not help you get in shape. 3. Keep Track of Calories and Food Intake Per Day . Keeping track of how many calories you eat in a day will be helpful in planning out your physical exercising. 4. Be Sure to Get Sleep. Even though most of us have eight-hour jobs during the day or night, it is crucial to get enough sleep to recharge the body's batteries. Six to eight hours of sleep will keep the body going throughout the day. 5. Stay Motivated. An important key to being in shape is to set goals and keep a positive mindset. If you stay positive, you will be able to push yourself to get that fit body you've always wanted.",
            "Likes": "800K"
        }
    ]);

    const [food, setFood] = useState([{
            "Title": " Food hunger in India",
            "CategoryName": "Food",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://keralakaumudi.com/web-news/en/2021/10/NMAN0281495/image/kk.1.1315760.jpg",
            "BlogContent": "According to FAO estimates in ‘The State of Food Security and Nutrition in the World, 2020 report, 189.2 million people are undernourished in India. By this measure 14% of the population is undernourished in India. Also, 51.4% of women in reproductive age between 15 to 49 years are anaemic. Further according to the report 34.7% of the children aged under five in India are stunted (too short for their age), while 20% suffer from wasting, meaning their weight is too low for their height. Malnourished children have a higher risk of death from common childhood illnesses such as diarrhea, pneumonia, and malaria. The Global Hunger Index 2020 ranks India at 101 out of 116 countries on the basis of three leading indicators -- prevalence of wasting and stunting in children under 5 years, under 5 child mortality rate, and the proportion of undernourished in the population. ",
            "Likes": "500k+"
        },
        {
            "Title": " Kerala Makes Food Safety a Priority, Conducts Raids",
            "CategoryName": "Food",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://i.ndtvimg.com/i/2015-08/vegetable-625_625x350_51441011561.jpg",
            "BlogContent": "As many as 1766 food safety raids have been carried out across Kerala and nine shops have been closed for selling adulterated food articles during Onam season, Health Minister V S Sivakumar said.  The drives were conducted as part of 'Operation Ruchi,' the state-wide food safety initiative launched by the Health Department to restrict the use of chemicals and other harmful ingredients in food articles. Sivakumar said the initiative was a big success during Onam season and raids would be continued in the coming days. ",
            "Likes": "1M+"
        },
        {
            "Title": " A vegan or plant-based diet",
            "CategoryName": "Food",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://images.news18.com/ibnlive/uploads/2019/07/vegan.jpg?im=FitAndFill,width=1200,height=675",
            "BlogContent": "A vegan or plant-based diet excludes all animal products, including meat, dairy, and eggs. When people follow it correctly, a vegan diet can be highly nutritious, reduce the risk of chronic diseases, and aid weight loss.A vegan diet involves eating only foods comprising plants. Those who follow this diet avoid all animal products, including meat, dairy, and eggs. Some people also avoid eating honey. For some, being vegan is a dietary choice, while for others, it is a lifestyle choice.",
            "Likes": "400K"
        },
        {
            "Title": "Sale of Adulterated Food Hits Right to Life, Says SC",
            "CategoryName": "Food",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "http://www.focusglobalreporter.org/wp-content/uploads/2021/07/food-adulteration-in-india.jpg",
            "BlogContent": "Sale of Adulterated Food Hits Right to Life, Says SCIANSUpdated: October 23, 2013 15:20 IST Sale of Adulterated Food Hits Right to Life, Says SC The Supreme Court Tuesday said that food articles which are harmful and injurious to public health had the potential of striking at the fundamental right to life guaranteed by the constitution and it was the government's responsibility to take steps for protection of life and health.Enjoyment of life and its attainment, including right to life and human dignity encompasses, within its ambit availability of articles of food, without insecticide or pesticide residues, veterinary drugs residues, antibiotic residues, solvent residues, etc",
            "Likes": "1M+"
        },
        {
            "Title": " The Best and Most Popular Food Articles of 2022",
            "CategoryName": "Food",
            "PublishedDate": "March 14 2022",
            "ImageAsset": "https://i.ndtvimg.com/i/2016-12/food-articles-620_620x330_81481705304.jpg",
            "BlogContent": "1. Why Soaked Almonds Are Better than Raw Almonds. 2. 7 Incredible Cashew Nut Benefits: From Heart Health to Gorgeous Hair. 3. How to Eat Flaxseeds, Health Benefits, Tips and Recipes. 4. 10 Natural Remedies for Headaches that Actually Work. 6. 15 Amazing Guava Benefits: Heart Healthy, Weight-Loss Friendly & More. 7. The Best Cooking Oil for Your Health. 8. Ashwagandha: The Powerful Health Benefits & Beauty Benefits You Need to Know. 9. 18 Benefits of Tulsi: Facts You Must Know About Holy Basil. 10. When Bitter is Better: 8 Amazing Health Benefits of Amla Juice. ",
            "Likes": "708K"
        }
    ]);

    return ( <
        BlogContext.Provider value = {
            {
                value1: [bollywood, setBollywood],
                value2: [hollywood, setHollywood],
                value3: [technology, setTechnology],
                value4: [fitness, setFitness],
                value5: [food, setFood]
            }
        } > { props.children } <
        /BlogContext.Provider>
    )
}