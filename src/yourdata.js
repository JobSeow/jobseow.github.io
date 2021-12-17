// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import linkedInIcon from "./images/linkedin.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Job Seow",
  headerTagline: [
    //Line 1 For Header
    "Software engineer",
    //Line 2 For Header
    "passionate to solve",
    //Line 3 For Header
    "real-life problems",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm an enthusiastic software engineer that loves working on user-facing problems and learning new technologies.",

  //Contact Email
  contactEmail: "Seowjianliang@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "SmartBFA", //Project Title - Add Your Project Title Here
      para: "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/ddbhv5umh/image/upload/v1639104985/job/smartbfa_arh6dt.png",
      //Project URL - Add Your Project Url Here
      url: "/smartbfa",
    },
    {
      title: "Cerebro", //Project Title - Add Your Project Title Here
      para: "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/ddbhv5umh/image/upload/v1639103423/job/cerebro_hb4pfx.png",
      //Project URL - Add Your Project Url Here
      url: "/cerebro",
    },
    {
      title: "Koptiam Uncle", //Project Title - Add Your Project Title Here
      para: "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/ddbhv5umh/image/upload/v1639103750/job/kop_mzidep.png",
      //Project URL - Add Your Project Url Here
      url: "/kopitiam",
    },
    {
      title: "TRBC Website", //Project Title - Add Your Project Title Here
      para: "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://res.cloudinary.com/ddbhv5umh/image/upload/v1639707185/job/trbc_arokyb.png",
      //Project URL - Add Your Project Url Here
      url: "/trbc",
    },
    // {
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm an enthusiastic software engineer that loves working on user-facing problems and learning new technologies. My focus has been on web app development and loves to be part of a passionate team that solves real-life problems.",
  aboutParaTwo:
    "In my free time, I enjoy going on scenic hikes, watching a goodshow (e.g. The Office, Anime) and volunteering.",
  aboutParaThree:
    "One interesting initiative I was apart of was the Cassia Resettlement Team, which assisted the elderly inr elocating their homes due to urban redevelopment.",

  aboutImage:
"https://res.cloudinary.com/ddbhv5umh/image/upload/v1639726798/job/me_n0ign8.png"  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here
,
  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para: "ReactJS",
    },
    {
      img: designIcon,
      para: "ReactJS",
    },
    {
      img: codeIcon,
      para: "DevOps: TravisCI, Docker",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/JobSeow" },
    {
      img: linkedInIcon,
      url: "https://www.linkedin.com/in/job-seow-jian-liang-2021/",
    },

  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
