// src/data.ts
export interface aboutImgProject {
    url: string,
    about: string[]
}

export interface Projects {
    idProject: number;
    title: string;
    image: string;
    imgCategory: string;
    type: string;
    imgProject: aboutImgProject[];
    name: string;
    infor: string[];
    position: string;
    linkDemo: string;
    linkFE: string;
    linkBE: string;
}
// get ProjectData

export const projectsList: Projects[] = [
    {
        idProject: 1,
        title: 'FULLSTACK - ONLINE SALES WEBSITE',
        image: 'phoneweb-fs.jpg',
        imgCategory: 'logo192.png',
        type: 'web',
        imgProject: [
            {
                url: "phoneweb-img1.png",
                about: ['website home page', 'categories, hot products, register, log in, shopping cart']
            },
            {
                url: "phoneweb-img2.png",
                about: ['Product categories by type']
            },
            {
                url: "phoneweb-img3.png",
                about: ['product detail']
            },
            {
                url: "phoneweb-img4.png",
                about: ['shopping cart']
            },
            {
                url: "phoneweb-img5.png",
                about: ['choose payment method']
            },
            {
                url: "phoneweb-img6.png",
                about: ['pay by paypal']
            },
            {
                url: "phoneweb-img7.png",
                about: ['Order Success']
            },
            {
                url: "phoneweb-img8.png",
                about: ['order management']
            },
            {
                url: "phoneweb-img10.png",
                about: ['Admin page', 'Manage users, products, orders']
            }

        ],

        name: 'Reactjs + Nodejs + MongoDB',
        infor: [
            "Backend with nodejs use database mongodb",
            "The project includes 2 project (backend and Fontend) running online",
            "Pay by PayPal, Basic functions of 1 sales website (Login, registration, shopping cart,...)",
            "Administrative functions (product, user, order,... )",
            "Admin: Sales management such as: orders allow to browse orders, products allow to edit, delete, add, manage users, order management allows to search for users, orders and products for editing",
            "User: Pay by paypal or pay upon receipt, after ordering, send the order to your registered email, log in, register, purchase, cart, manage orders,...",
            "DELAY 60S DEMO!!!",

        ],
        position: 'Fullstack',
        linkDemo: 'https://khangit-webbanhang.vercel.app',
        linkFE: 'https://github.com/KhangLeIT/website-banhang',
        linkBE: 'https://github.com/KhangLeIT/backend-webbanhang'
    }, {
        idProject: 2,
        title: 'FRONTEND - ONLINE COOKING TEACHING WEBSITE',
        image: 'foodweb-fe.jpg',
        imgCategory: 'logo192.png',
        type: 'web',
        imgProject: [
            {
                url: "foodweb-img1.png",
                about: ['Home Page', 'Main interface of the website']
            },
            {
                url: "foodweb-img2.png",
                about: ['Home Page', 'Our top Chiefs in Home Page']
            },
            {
                url: "foodweb-img3.png",
                about: ['Recipes Page', 'Previous Searches', 'Top recipes on the website']
            },
            {
                url: "foodweb-img4.png",
                about: ['Setting Page', 'Users can setting for the website']
            },

        ],
        name: 'Frontend Reactjs with scss',
        infor: [
            "Frontend with reactjs and scss",
            "Users can setting for the website: Primary Theme, Preferred color,Font size, Animation speed,...",
            "Position : Frontend"


        ],
        position: 'Frontend',
        linkDemo: 'https://khangit-foodweb.vercel.app',
        linkFE: 'https://github.com/KhangLeIT/reactJs-foodweb',
        linkBE: ''
    },
    {
        idProject: 3,
        title: 'APP MOBILE - FOOD APP ONLINE',
        image: 'foodapp-fb.jpg',
        imgCategory: 'logo512.png',
        type: 'app',
        imgProject: [
            {
                url: "foodapp-img1.png",
                about: ['Begin Page', 'Sign up, Log In']
            },
            {
                url: "foodapp-img2.png",
                about: ['Home Page', 'Categories, Today Special, Profile,...']
            },
            {
                url: "foodapp-img3.png",
                about: ['Product detail', 'Information about dishes, quantities, prices, discounts,...']
            },
            {
                url: "foodapp-img4.png",
                about: ['Product detail', 'You can add to cart or buy now']
            },
            {
                url: "foodapp-img5.png",
                about: ['Shopping cart', 'contains the products you add']
            },

            {
                url: "foodapp-img6.png",
                about: ['Payment page', 'You can pay for the products you buy']
            },
            {
                url: "foodapp-img7.png",
                about: ['Your Order', 'The page contains your purchases']
            },


        ],
        name: 'React native + Firebase',
        infor: [
            "Database: Firebase",
            "frontend with a little backend using firebase",
            "Shopping cart, seach product (product, user, order,... )"

        ],
        position: 'Fullstack',
        linkDemo: 'https://drive.google.com/file/d/1-qEvsrPRL_Tqt6R73wmZ0exKvaSWWEdL/view?usp=drive_link',
        linkFE: 'https://github.com/KhangLeIT/ReactFoodApp',
        linkBE: ''
    },
    {
        idProject: 4,
        title: 'Android App Mobile - Quiz Exam Online',
        image: 'quizapp-fb.jpg',
        imgCategory: 'imgAndroidApp.png',
        type: 'app',
        imgProject: [
            {
                url: 'quizapp-img1.png',
                about: ['User - Home Page', 'Category, Tests on subjects such as: English, Math,...']
            },
            {
                url: 'quizapp-img2.png',
                about: ['User - Leaderboard Page', 'Ranking of users with high scores']
            },
            {
                url: 'quizapp-img3.png',
                about: ['User - My profile', 'Indicate your score and rating']
            },
            {
                url: 'quizapp-img4.png',
                about: ['User - Menu']
            },
            {
                url: 'quizapp-img5.png',
                about: ['User - Test Page', 'Contains tests of subjects for example: math']
            },
            {
                url: 'quizapp-img6.png',
                about: ['User - Start the test', 'Indicates the number of questions and test time']
            },
            {
                url: 'quizapp-img7.png',
                about: ['User - Test questions page', 'Contains questions, answers and functions of a test page', 'Clear questions, Mark for review, submit']
            },
            {
                url: 'quizapp-img8.png',
                about: ['User - Test questions page', 'Indicates questions answered, unanswered, review, not visited']
            },
            {
                url: 'quizapp-img9.png',
                about: ['User - Test end page', 'Shows your score, answer time, number of correct, unanswered, unselected answers', 'Also you can re-answer or review all your answers']
            },
            {
                url: 'quizapp-img10.png',
                about: ['User - Answers Page', 'You can review all your answers']
            },
            {
                url: 'quizapp-img11.png',
                about: ['User - Saved Question Page', 'Contains questions that you saved when taking the test']
            },
            //admin
            {
                url: 'quizapp-1.png',
                about: ['Admin - Categories', 'Add, Update, Delete']
            },
            {
                url: 'quizapp-2.png',
                about: ['Admin - Test Page', 'Add, Update, Delete']
            },
            {
                url: 'quizapp-3.png',
                about: ['Admin - Questions of test', 'Add, Update, Delete']
            },
            {
                url: 'quizapp-4.png',
                about: ['']
            },
            {
                url: 'quizapp-5.png',
                about: ['']
            },
            {
                url: 'quizapp-6.png',
                about: ['Admin - Add Categories', 'Add, Update, Delete']
            },

        ],
        name: 'Java + Firebase + XML',
        infor: [
            "Backend with Java use database Firebase",
            "Log in with google",
            "The project is made on Android studio",
            "It is a question answering and exam preparation application for middle school and high school students",
            "Developing more groups and classes",
            "is divided into 2 separate and shared applications: admin and user",
            "Admin: Question management, Test management",
            "User: Home, Leaderboard, My account, Saved Questions, My Core,...",


        ],
        position: 'Fullstack',
        linkDemo: 'https://drive.google.com/file/d/1hcF4MtPeQgeEEb6U9gXXEG8y0QDCImH6/view?usp=sharing',
        linkFE: 'https://github.com/KhangLeIT/QuizApp',
        linkBE: ''
    },
    {
        idProject: 5,
        title: 'Android App Mobile - Online Sales Phone',
        image: 'phoneapp-mysql.jpg',
        imgCategory: 'imgAndroidApp.png',
        type: 'app',
        imgProject: [
            {
                url: 'shopapp-img1.png',
                about: [
                    'User - Begin App', 'Login, register'
                ]
            },
            {
                url: 'shopapp-img2.png',
                about: [
                    'User - LogIn',
                ]
            },
            {
                url: 'shopapp-img3.png',
                about: [
                    'User - Sign Up',
                ]
            },
            {
                url: 'shopapp-img4.png',
                about: [
                    'User - Home Page',
                    'Hot deals, products, categories, new products',
                    'Search, Shopping cart',
                    'Home, News, My Account'
                ]
            },
            {
                url: 'shopapp-img5.png',
                about: [
                    'User - Product portfolio',
                ]
            },
            {
                url: 'shopapp-img6.png',
                about: [
                    'User - Product details'
                ]
            },
            {
                url: 'shopapp-img7.png',
                about: [
                     'User - Shopping cart'
                ]
            },
            {
                url: 'shopapp-img8.png',
                about: [
                     'User - Search Products'
                ]
            },
            {
                url: 'shopapp-img9.png',
                about: [
                    'User - Order Products'
                ]
            },
            {
                url: 'shopapp-img10.png',
                about: [
                    'User - News'
                ]
            },
            {
                url: 'shopapp-img11.png',
                about: [
                    'User - My Account'
                ]
            },
            {
                url: 'shopapp-img12.png',
                about: [
                    'User - My Order'
                ]
            },
            {
                url: 'shopapp-img13.png',
                about: [
                    'User - My Order details'
                ]
            },
            //Admin
            {
                url: 'shopapp-1.png',
                about: [
                    'Admin - Home ', 'Delete, Add, Update - Product portfolio'
                ]
            },
            {
                url: 'shopapp-2.png',
                about: [
                    'Admin - News', 'Delete, Add, Update - News'
                ]
            },
            {
                url: 'shopapp-3.png',
                about: [
                    'Admin - Orders ', 'Search for orders, sort orders by status, view orders,...'
                ]
            },
            {
                url: 'shopapp-4.png',
                about: [
                    'Admin - Browse orders ', 'Browse orders, View order information'
                ]
            },
            {
                url: 'shopapp-5.png',
                about: [
                    'Admin - Product Management ', 'Delete, Add, Update'
                ]
            },


        ],
        name: 'Java + MySQL + XML + PHP',
        infor: [
            "Backend with Java and PHP use database MySql(hosting)",
            "Use Java to get API for app from website  ",
            "Use PHP to write API from the database side then send it to the app",
            "Is divided into 2 separate and shared applications: admin and user",
            "Admin: Manage products, news, categories, orders,...",
            "User: Search for products, shopping cart, products by category, hot deals, news, hot news, your account,...",
            "Manage your orders, cancel or confirm orders, view order notifications",


        ],
        position: 'Fullstack',
        linkDemo: '#',
        linkFE: 'https://github.com/KhangLeIT/ShopDienTu',
        linkBE: ''
    },
    {
        idProject: 6,
        title: 'Fullstack - Infortion about Le Tan Khang WEBSITE',
        image: 'infor-khangle.png',
        imgCategory: 'logo192.png',
        type: 'web',
        imgProject: [
            {
                url: "foodweb-img1.png",
                about: ['Home Page', 'Main interface of the website']
            },
            {
                url: "foodweb-img2.png",
                about: ['Home Page', 'Our top Chiefs in Home Page']
            },
            {
                url: "foodweb-img3.png",
                about: ['Recipes Page', 'Previous Searches', 'Top recipes on the website']
            },
            {
                url: "foodweb-img4.png",
                about: ['Setting Page', 'Users can setting for the website']
            },

        ],
        name: 'Frontend Reactjs with scss',
        infor: [
            "Frontend with reactjs and scss",
            "Users can setting for the website: Primary Theme, Preferred color,Font size, Animation speed,...",
            "Position : Frontend"

        ],
        position: 'Frontend',
        linkDemo: '',
        linkFE: 'https://github.com/KhangLeIT/reactJs-foodweb',
        linkBE: ''
    }

];
