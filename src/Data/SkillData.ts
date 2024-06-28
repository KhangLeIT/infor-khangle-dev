export type Category = 'all' | 'web' | 'app';


export interface Skill {
    category: Category;
    title: string;
    img: string;
    items: string[];
    experience: number;
}

export const skillsList: Skill[] = [
    {
        category: "web",
        title: "ReactJS",
        img: "logo512.png",
        items: [
            "Frontend: ReactJS, Typescript, Javascript, HTML, CSS, SCSS",
            "Backend: NodeJs, C# .NET",
            "CSS use: SCSS, Styled Components, SASS/SCSS",
            "Database: Mongodb, Mysql, Firebase, Sql MS",
            "Tools & Technologies: VS Code, VS Studio, Firebase, MS SQL, XAMPP, Hosting",
            "Projects: 2"
        ],
        experience: 1
    },
    
    
   
    {
        category: "app",
        title: "React Native",
        img: "logo512.png",
        items: [
            "Frontend: Typescript, Javascript, CSS, SCSS",
            "Backend: NodeJs",
            "CSS use: Styled Components, SASS/SCSS",
            "Database: Mongodb, Mysql, Firebase, Sql MS",
            "Tools & Technologies: VS Code, VS Studio, Firebase, MS SQL, XAMPP",
            "Projects: 1"
        ],
        experience: 1
    },
    {
        category: "app",
        title: "(Java) Android App",
        img: "imgAndroidApp.png",
        items: [
            "Frontend: XML",
            "Backend: Java, Call API with PHP",
            "Database: Mysql, Firebase, 000webhost",
            "Tools & Technologies: Android studio, Firebase, XAMPP, Hosting",
            "Projects: 2"
        ],
        experience: 2
    },
    {
        category: "web",
        title: "(Java) Web JSP",
        img: "jsp-java.png",
        items: [
            "Frontend: HTML, JSP, CSS",
            "Backend: Java",
            "Database: Mysql",
            "Tools & Technologies: Eclipse, XAMPP",
            "Projects: 1"
        ],
        experience: 1
    }
];
